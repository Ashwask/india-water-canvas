# India Water Canvas — Changelog

All notable changes to this artefact are recorded here. Versioning follows semver-loose: major rewrites bump `1.x → 2.0`; substantive content additions or methodology changes bump `1.0 → 1.1`; corrections + minor edits roll into the current minor version with date stamps.

The current version is reflected in the dashboard footer + `CITATION.cff`.

---

## v2.0 — 2026-05-11

**Major rewrite · LEMMA architecture (Legibility · Engagement · Measurement · Movement · Audit).**

Constitution: `architecture.md` v2 supersedes v1 (Pattern B / persona-as-lens).

Architectural changes:
- **5-zone spine** replaces 13-section structure: `#place` · `#engagement` · `#movement` · `#audit` · `#action`
- **Persona system removed** (7-chip audience-bar + frames + flowNext + scope-tags + Most-useful-for pills all deleted · ~600 lines)
- **Topnav renamed:** WHAT/HOW/WHO/MEASURE/ACT/LEARN → PLACE/ENGAGEMENT/MOVEMENT/AUDIT/ACTION (v1 anchors retained as backward-compat aliases)

New first-class dimensions:
- **Water bodies** (8-type taxonomy: rivers · aquifers · lakes-tanks · wetlands · springsheds · cryosphere · coastal-estuarine · urban-drains)
- **`PLACE_BODIES`** — 25 states × 77 water-body cells (per-place body type · name · status · risk)
- **`primary_water_body` tag** on every entity (18 IMPLEMENTERS + 23 FUNDERS items + 30 MARKET_PROVIDERS + whitespace seeds = 71+ tags)
- **`PLACE_CLIMATE_STAKES`** — 25 states × climate-stake under non-stationarity (axiom 2)

New surfaces:
- **§1 Place legibility** absorbs hero + place-explorer + overview · adds Waters-here + Climate-stake sub-sections
- **§2 Engagement** gains a Market tile (30 vendors) + water-body filter chip-row scaffold
- **§3 Movement** with 7-axis trajectory (H · A · I · Build · Audit · Constituency · Market depth) · per-axis fidelity markers (HIGH/MEDIUM/LOW · option i)
- **§4 Audit muscle** with 6 cross-reference lanes (JJM functional gap · CSR water-positive · OCEMS reality · scheme spend vs outcome · anchor commitments · hard-question status) · `AUDIT_CLAIMS` seeded with ~30 entries
- **§5 Action drawer** with 7 pre-filled actions per place (correction · ground-truth · cite · anchor · pledge · co-invest · audit-discrepancy)

Market integration (full canon):
- **`MARKET_PROVIDERS`** — 30 entries · operational + failed
- Failed providers displayed alongside operational (Sarvajal † 2019 · Spring Health † 2019 · Naandi consolidating · Waterlife consolidating)

Maintenance + audit scaffold:
- **`maintenance.md`** — draft curation contract (hybrid funding · 6 roles · public SLAs · Y0 funding milestone Dec 31 2026)
- **`audit.md`** — audit muscle methodology (claim lifecycle · source standards · retraction protocol · anonymous channel)
- **`data/data-freshness.csv`** — per-element refresh schedule with fidelity markers
- **Footer Health badge** — 🟡 yellow at v2.0 launch (honest signal · solo maintainer · funding gap)

New CSVs (open data exports):
- `data/place-bodies.csv` (77 rows)
- `data/place-climate-stakes.csv` (25 rows)
- `data/market-providers.csv` (30 rows)
- `data/entity-water-body-tags.csv` (41 rows)
- `data/audit-claims.csv` (via Step 10 export · ~30 rows)
- `data/data-freshness.csv` (12 rows)

Honest disclosure at launch:
- Sole maintainer until Y1 anchor signed (Ashwin Kulkarni, independent capacity)
- 0 anchor commitments to Y0 gate (Dec 31, 2026)
- Audit lane data is directional · 6 lanes seeded with ~5 entries each · grows on contribution
- §3 movement axes ship with directional fidelity markers (option i) · per-state historical series not yet sourced
- Reader-test gate pending (external review by Mihir Shah · Veena Srinivasan · Aditi Mukherji · ATECF / Rohini Nilekani team)

File: `dashboard.html` · ~260 KB · ~3,760 lines · single static HTML + 6 supporting files.

Snapshot of pre-v2.0 state preserved at `Water/v1.x/` (post-v1.0 chrome strip + data foundations).

Reviewer status at release: pending. Invitations open via `[Review-Request]` GitHub issue label.

---

## v1.0 — 2026-05-07

**First public release as a public-good commons-infrastructure artefact.**

Core architecture:
- Author byline (Ashwin Kulkarni, independent capacity)
- License: CC BY-NC 4.0
- Six-section decision spine: WHAT · HOW · WHO · MEASUREMENT · ACTIONS · INSIGHTS
- Audience routing for CSO · NGO · Philanthropy · CSR · Corporates
- H/A/I (Health · Availability · Impact) scoring per state, derived from documented formula
- Place Explorer interactive map (Leaflet) with state-click → place profile (3 dial gauges + binding R-loop + intervention)
- Six self-reinforcing feedback loops (R1-R6) + three weak balancing loops; mapped to Meadows leverage points
- Funder ecosystem ladder (22+ funders ranked, 4-tier layer view: government / DFI / CSR / philanthropy)
- Capture envelope quantification (~₹3,000-5,000 cr/yr) with four named risks
- 30-year trajectory chart (1995-2025) with diverging stocks vs spend counterpoint
- 14-chapter prose folder (`Water/landscape.md` through `Water/build-plan.md`) backing every claim
- Editorial governance scaffold: this changelog · LICENSE · CITATION.cff · review-log.md · about.md · erratum.md (Phase F)

Sections shipped:
- Place Explorer with H/A/I dial gauges per state (25 states scored)
- Trends · 30-year trajectory · spend-vs-outcome inversion · Yamuna BOD · acute event ribbon
- System Flows · D3 Sankey water flow + 7-layer build stack + 5-phase sequencing
- Economics & Gaps · 9 unit-economics cards + 8 bottlenecks + exists/missing comparison + capture envelope
- Ecosystem · 18 implementing partners + 22 funders + 6 whitespace seeds
- Hidden Dynamics · 8 severity-rated cards (free-electricity lock, capture envelope, dark data, lag tax, JJM functionality, caste in water, tribunals on stationarity, Bengaluru ward-scale)
- Intersections · 6 sub-tabs (energy / waste / markets / climate / health / geopolitics) with state-spotlight + place-specific KPIs
- Sources · 5 grouped collapsibles (folder, government data, audit, multilateral, civic)

Open at: `https://github.com/Ashwask/RFPartnerMap/tree/main/Water/dashboard.html`

Reviewer status at release: pending. Invitations open.

---

## Previous (pre-public) snapshots

The Water/ folder evolved across multiple internal sessions before public release. The full session history is preserved in the parent repository `Ashwask/RFPartnerMap` git log. Major iterations:

- **Round 1** (2026-04-25, internal) — Initial 14-chapter prose folder shipped (landscape · stakeholders · legal-vacuum · data-and-groundtruth · data-inventory · artefacts · gaps · gaps-deepdive · hard-questions · funders-ecosystem · funders-flow · imagination · still-missing · build-plan)
- **Round 2** (2026-05-05) — Standalone summary dashboard + standalone interactive map (water-map.html)
- **Round 3** (2026-05-05) — Unified investment-thesis dashboard with 8 tabs
- **Round 4** (2026-05-05) — Wastecanvas-pattern rebuild (dark theme, single-page scroll, system-mapping)
- **Round 5** (2026-05-06) — Multi-region intersections + Place Explorer with H/A/I axes + place-specific KPI propagation
- **Round 6** (2026-05-07) — **v1.0** public-good architecture: provenance scaffold + decision spine + audience routing + open data + counter-argument + erratum + versioning

This v1.0 is the first version intended for external review and citation.
