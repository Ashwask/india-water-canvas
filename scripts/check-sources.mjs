#!/usr/bin/env node
// Source watcher for the India Water Canvas.
//
// Re-checks the official / machine-readable sources behind the dashboard's
// headline figures and flags when any of them ACTUALLY changes, so a human can
// refresh the baked data. It never edits the dashboard and never fabricates a
// change: a flag means a monitored source's fingerprint moved since we last
// vetted it.
//
// Usage:
//   node scripts/check-sources.mjs --check      compare to stored markers, report, exit 1 if any CHANGED
//   node scripts/check-sources.mjs --baseline   set stored markers to current values (run after a manual refresh)
//
// Match types per source:
//   json   fingerprint = sha256 of canonicalised JSON (key-sorted) — stable, low-noise
//   regex  fingerprint = first capture group of `pattern` against the body
//   hash   fingerprint = sha256 of the raw body (best-effort; gov pages can be noisy/blocked)

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WATCH = join(ROOT, 'data', 'source-watch.json');
const REPORT = join(ROOT, 'source-watch-report.md');
const UA = 'Mozilla/5.0 (compatible; india-water-canvas source-watch; +https://waterdashboard.in)';
const TIMEOUT_MS = 25000;

const mode = process.argv.includes('--baseline') ? 'baseline' : 'check';
const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);
const canon = (v) => (Array.isArray(v) ? v.map(canon)
  : v && typeof v === 'object' ? Object.keys(v).sort().reduce((o, k) => (o[k] = canon(v[k]), o), {})
  : v);

async function fetchText(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': '*/*' }, signal: ctrl.signal, redirect: 'follow' });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    return { body: await res.text() };
  } catch (e) {
    return { error: String(e && e.message || e) };
  } finally {
    clearTimeout(t);
  }
}

function fingerprint(src, body) {
  if (src.match === 'json') {
    try { return sha(JSON.stringify(canon(JSON.parse(body)))); }
    catch { return null; }
  }
  if (src.match === 'regex') {
    const m = body.match(new RegExp(src.pattern, src.flags || 'i'));
    return m ? (m[1] ?? m[0]).trim().replace(/\s+/g, ' ') : null;
  }
  return sha(body); // hash
}

const cfg = JSON.parse(readFileSync(WATCH, 'utf8'));
const today = new Date().toISOString().slice(0, 10);
const results = [];

for (const src of cfg.sources) {
  const { body, error } = await fetchText(src.url);
  let status, marker = null;
  if (error) {
    status = 'UNREACHABLE';
  } else {
    marker = fingerprint(src, body);
    if (marker == null) status = 'UNPARSEABLE';
    else if (src.lastSeen == null) status = 'BASELINE';
    else status = marker === src.lastSeen ? 'SAME' : 'CHANGED';
  }
  src.lastChecked = today;
  if (mode === 'baseline' && marker != null) src.lastSeen = marker;
  results.push({ id: src.id, label: src.label, status, marker, was: src.lastSeen, url: src.url, note: src.note, figure: src.dashboardFigure });
}

cfg.lastRun = today;
writeFileSync(WATCH, JSON.stringify(cfg, null, 2) + '\n');

const changed = results.filter(r => r.status === 'CHANGED');
const unreachable = results.filter(r => r.status === 'UNREACHABLE' || r.status === 'UNPARSEABLE');

const lines = [];
lines.push(`# Source-watch report — ${today}`, '');
if (changed.length) {
  lines.push(`## ${changed.length} source(s) CHANGED — refresh the dashboard`, '');
  for (const r of changed) {
    lines.push(`- **${r.label}** (\`${r.id}\`)`);
    lines.push(`  - current dashboard figure: ${r.figure || 'n/a'}`);
    lines.push(`  - source: ${r.url}`);
    if (r.note) lines.push(`  - note: ${r.note}`);
    lines.push('');
  }
} else {
  lines.push('No monitored source changed since the last vetted baseline.', '');
}
lines.push('## All sources', '');
lines.push('| source | status | note |', '|---|---|---|');
for (const r of results) lines.push(`| ${r.label} | ${r.status} | ${r.note || ''} |`);
if (unreachable.length) {
  lines.push('', `> ${unreachable.length} source(s) were unreachable/unparseable this run (gov portals block bots or render client-side). These are best-effort; the machine-readable feeds are authoritative.`);
}
const report = lines.join('\n') + '\n';
writeFileSync(REPORT, report);
process.stdout.write(report);

if (mode === 'check' && changed.length) process.exit(1);
