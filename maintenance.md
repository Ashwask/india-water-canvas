# Maintenance + Curation Contract — DRAFT COMMITMENT

**v2.0 · 2026-05-11 · CC BY-NC 4.0**

The written curation contract for the India Water Canvas. **Draft commitment** until Y1 anchor signed (architecture.md §14.1).

---

## 0. Honest disclosure

- **Sole maintainer:** Ashwin Kulkarni (independent capacity) until Y1 anchor signed
- **Funding status:** zero · cold-start ask outstanding (~₹4-6 cr · architecture.md §14.4)
- **Y0 funding milestone:** anchor commitment(s) by **Dec 31, 2026**
- **SLA enforcement:** best-effort · subject to maintainer availability
- **Current commitments tracked at:** `data/audit-claims.csv` lane `anchor-commitments`

Read this as a public roadmap of intent, not a guaranteed service contract. Until funding is in place, response times are aspirational.

---

## 1. Roles (target post-Y1)

| Role | Responsibility | Cadence | Currently filled by |
|---|---|---|---|
| **Data steward** | Refresh per-element data per `data/data-freshness.csv` cadence | Per-element | Ashwin (sole) |
| **Methodology custodian** | Defend H/A/I formula against drift · publish annual methodology updates | Annual | Ashwin (sole) |
| **Editorial reviewer** | Vet contributions · post-mortems · hard-question additions | Per-PR | Ashwin (sole) |
| **Issue triage** | Handle correction PRs/issues within commitment SLA | Weekly | Ashwin (sole) |
| **Audit-claim verifier** | Investigate `[Audit-Discrepancy]` issues · update `AUDIT_CLAIMS` | Per-issue | Ashwin (sole) |
| **Annual independent auditor** | Review fidelity claims · publish year-end audit | Annual | TBD (target: ≥1 external · year-1) |

**Recruitment priorities (Y0 outreach):**
- Co-author / methodology custodian: FES · ACWADAM · WELL Labs
- Audit-claim verifier: Veditum · SANDRP · CSE
- Annual independent auditor: WELL Labs · ATREE leadership

---

## 2. Cadence schedule

| Item | Cycle | Trigger |
|---|---|---|
| Market vendor freshness check | Quarterly | Q-end |
| H/A/I refresh (per-state) | Semi-annual | CGWB GEC + CPCB release |
| Methodology review | Annual | March (after FY-end public data) |
| Year-end review-log entry | Annual | December |
| Triggered refresh | As-needed | CAG findings · scheme launches · climate events |
| Re-diagnose binding constraint per place | 2-yearly | Y0 / Y2 / Y4 / Y6 cycle |
| Decision-gate evaluation | 5-yearly | Y0 / Y2 / Y5 / Y10 (architecture.md §14.3) |
| Water-body status refresh | Annual | Aligned to H/A/I refresh |
| Audit-claims lane review | Semi-annual | All 6 lanes audited for new entries + retraction |

---

## 3. Public SLAs

| SLA | Commitment | Status |
|---|---|---|
| Correction turnaround | 14 days from issue open | Existing (v1.0) |
| Refresh cadence per `data-freshness.csv` | Per-element schedule | Per row in CSV |
| Audit-discrepancy response | 30 days from issue open | New (v2.0) |
| Methodology review publication | Annual (March) | New (v2.0) |
| Year-end review-log | Annual (December) | Existing (v1.0) |

**Slip handling:** when an SLA slips, public post-mortem committed within 30 days. Post-mortem lives in `review-log.md`.

---

## 4. Funding model — hybrid

| Source | Target | Why |
|---|---|---|
| **Small endowment** (~₹3-5 cr corpus) | ~₹15-25 lakh/yr stable ops floor | Most stable · survives funder churn · Y2+ |
| **One service grant** (₹50 lakh - 1 cr / year · 3-yr cycles) | Active curation + audit verification | Aligns with foundation programme cycles · primary Y0-Y2 |
| **Open-source bounties + volunteers** | Specific tasks: data refresh · audit lane curation · vernacular translation · CSV ↔ JS sync build script | Lowest-friction community contribution |

**Total annual ops floor:** ~₹70 lakh - 1.25 cr  
**Total cold-start ask:** ~₹4-6 cr (endowment seed + 3-yr grant runway)

**Target funders for Y0 outreach** (philanthropy-water tier from `funders-ecosystem.md`):
- Arghyam (water-only specialty)
- ATE Chandra Foundation (water bodies)
- Rohini Nilekani Philanthropies team
- ICC (India Climate Collaborative · pooled)
- Tata Trusts / Premji APPI (backbone)

---

## 5. Visibility on the artefact

| Surface | What it shows | Updated by |
|---|---|---|
| Per-zone freshness badge | "Last refreshed: YYYY-MM-DD · Next due: YYYY-MM-DD" | Auto from `data-freshness.csv` |
| Footer Health indicator | Green / yellow / red badge (architecture.md §14.6) | Auto from SLA tracking |
| Maintainer disclosure | "Maintained solo by Ashwin Kulkarni until Y1 anchor" | Manual until Y1 |
| Funding status | "Y0 milestone: anchor commitment(s) by Dec 31, 2026 · current: N" | `audit-claims.csv` lane `anchor-commitments` |
| Open-issue dashboard | One-click drill from Health badge | GitHub Issues API |
| Public maintenance log | Auto-generated from git activity stream | Continuous |

**Health badge logic** (v2.0 ships with simplified version · full SLA tracker is v2.1):

| Color | Trigger | Action |
|---|---|---|
| 🟢 Green | All SLAs met · funding on track | Display Y0 milestone progress |
| 🟡 Yellow | 1-2 SLAs slipping (≥7 days past due) | Post-mortem committed within 30 days |
| 🔴 Red | 3+ SLAs slipping · funding shortfall · maintainer unavailable | Public alert · contributor recruitment |

**v2.0 launch state:** likely 🟡 yellow given solo maintainer + funding gap. Honesty signal, not failure mode.

---

## 6. Escalation paths

| Trigger | Escalation |
|---|---|
| Funding crisis (no anchor by Y0 Dec 2026) | Public Y0 post-mortem · architecture.md §15.1 re-scope · v2.x maintenance mode |
| Maintainer unavailable >2 weeks | Contributor co-maintainer recruitment via GitHub issue tagged `[Maintainer-Recruitment]` |
| Methodology dispute (academic challenge) | Public methodology debate in `review-log.md` · independent auditor review |
| Legal challenge (audit-discrepancy lane) | Allied counsel review · `[Legal-Review]` issue · retraction protocol below |
| Data corruption | Roll back to `v1.x/` snapshot · public diff · root-cause post-mortem |

---

## 7. Retraction protocol

When an audit claim or methodology element needs to be retracted:

1. Mark `AUDIT_CLAIMS[*].status = 'retracted'` immediately
2. Add `retraction_reason` field with public explanation
3. Update `data/audit-claims.csv` within 24 hours
4. Public post in `review-log.md` within 7 days
5. Notify cited counterparties (if defamatory risk was present)
6. Maintain the retracted entry in canon — don't delete (architecture.md "full canon" principle applies to errors too)

---

## 8. Post-mortem template

Every SLA slip + retraction + funding crisis gets a post-mortem in `review-log.md`:

```markdown
## Post-mortem · YYYY-MM-DD · [Slip/Retraction/Crisis]

**What happened:** 1-2 sentences

**SLA / commitment affected:** Reference to this contract section

**Root cause:** What broke (capacity / data / methodology / external)

**Impact:** Who/what was affected · downstream effects

**Resolution:** What was done · timeline

**Prevention:** Specific changes to cadence / SLA / role to prevent recurrence

**Open issues raised:** Links to `[Issue]` follow-ups
```

---

## 9. Contract review

This contract is reviewed and re-published annually by Dec 31. Material changes (funding model · SLA cadence · escalation paths) require public commentary period of ≥30 days before adoption.

**Next review due:** December 31, 2026 (Y0 gate evaluation)

---

**End of maintenance contract v2.0.**  
*This document is a public commitment. It is also a public vulnerability — if not met, the artefact's PDGI claim weakens. Honesty over aspiration.*
