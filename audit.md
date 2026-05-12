# Audit Muscle Methodology

**v2.0 · 2026-05-11 · CC BY-NC 4.0**

The methodology for the audit muscle embedded in the India Water Canvas (architecture.md §7). Per LEMMA axiom 4: *"the artefact embodies the audit muscle it advocates for."*

---

## 0. Purpose

The artefact does not merely display others' data. It **cross-references claims and surfaces discrepancies** between:

- Official claim (e.g., JJM dashboard) **vs** independent verification (e.g., CAG audit)
- Industry self-report (e.g., CSR water-positive) **vs** third-party assurance
- Mandated reporting (e.g., OCEMS) **vs** actual publishing
- Capital flow (e.g., scheme outlay) **vs** outcome delta
- Stated commitment (e.g., anchor pledge) **vs** actual deployment
- Falsifiable claim (e.g., hard question) **vs** evidence over time

The 6 audit lanes in `AUDIT_CLAIMS` are the active surface. The CSV at `data/audit-claims.csv` is the canonical open-data export.

---

## 1. Six lanes (v2.0 launch)

| # | Lane | Claim source | Verification source | What discrepancy is surfaced |
|---|---|---|---|---|
| 1 | **JJM functional gap** | JJM dashboard (Jal Shakti Ministry) | CAG audit (2022 + 2024) | Tap-coverage claim vs functional rate per state · year-on-year |
| 2 | **CSR water-positive registry** | MCA CSR FY-end filings · company sustainability reports | Third-party assurance (KPMG · DNV · NRMC) · partner ground-truth | Methodology rigor · audit status · greenwashing risk |
| 3 | **OCEMS reality** | CPCB OCEMS-required list (17 industrial categories · 7,000+ industries) | CPCB real-time data portal · RTI responses · inspection reports | Coverage gap · tampering · public-access denial |
| 4 | **Scheme spend vs outcome** | Central + state water-scheme outlays (JJM · MGNREGA · Atal Bhujal · Namami Gange · AMRUT) | H/A/I trajectory per state · CAG functional audit · field reports | ₹/H-point trajectory · spend-outcome inversion |
| 5 | **Anchor commitments tracker** | Y0 gate criteria (architecture.md §14.1) | Public commitment log + audit-claims.csv | Pledged vs actually deployed · non-substitution clause adherence |
| 6 | **Hard-question status** | `hard-questions.md` 12 falsifiable claims | Public evidence over time | Answered · falsified · still open |

---

## 2. Claim lifecycle

Each `AUDIT_CLAIMS` entry follows a 5-stage lifecycle:

| Stage | What it means | Status field |
|---|---|---|
| **Open** | Claim identified · verification pending | `open` |
| **In-review** | Verification source engaged · contradictory evidence not yet conclusive | `in-review` |
| **Verified** | Verification source confirms discrepancy · publishable | `verified` |
| **Disputed** | Claim source contests verification · adversarial review active | `disputed` |
| **Retracted** | Claim or verification withdrawn · maintained in canon for transparency | `retracted` |

**Transition rules:**
- `open → in-review`: when verification source engaged (auditor named · evidence requested)
- `in-review → verified`: when discrepancy is independently confirmed
- `in-review → open`: when verification stalls (auditor unresponsive · evidence ambiguous)
- `verified → disputed`: when claim source publishes formal challenge
- `disputed → verified`: when challenge is itself refuted by additional evidence
- `* → retracted`: when artefact maintainer determines original entry was wrong (full canon principle: maintain entry, mark retracted, post-mortem)

---

## 3. Source standards

### Claim sources (acceptable)
- Government dashboards (JJM · CGWB · CPCB · Jal Shakti Ministry portals)
- MCA-filed CSR + sustainability disclosures
- Listed-company annual reports (BSE / NSE)
- Multi-stakeholder published commitments

### Verification sources (preferred · in order)
1. CAG audit reports (highest authority for public-sector claims)
2. Third-party big-4 / specialty assurance (KPMG · DNV · NRMC for CSR)
3. Peer-reviewed academic studies (≥1 citation · published <5 years)
4. Civil-society audit (CSE · SANDRP · Veditum · WELL Labs · ATREE field reports)
5. Court / RTI findings (litigation-grade evidence)
6. RTI responses (when other sources unavailable)
7. Field ground-truth (named org · place · date · contact)

**Not acceptable as verification:** unattributed social media · anecdote without named source · self-cited industry "studies"

---

## 4. Politically loaded lanes — pre-launch readiness

Per architecture.md §7 pre-launch readiness (W3 = full at v2.0):

| Lane | Political loading | Pre-launch scaffolding required |
|---|---|---|
| JJM functional gap | High (Ministry of Jal Shakti directly implicated) | CAG cover · multi-state evidence · coordinated launch with allied advocates |
| CSR water-positive registry | High (specific named companies) | Legal counsel review · third-party-assurance-citation prioritised |
| OCEMS reality | Medium (CPCB · industry both implicated) | RTI documentation primary · CPCB official responses cited |
| Scheme spend vs outcome | Medium (multi-scheme) | Aggregate framing · per-scheme detail in linked chapters |
| Anchor commitments tracker | Low (transparent self-tracking) | Y0 milestone progress publicly tracked |
| Hard-question status | Low (epistemic) | Standard methodology review |

**Pre-launch v2.0 actions:**
- Allied counsel review for lanes 1 + 2 + 3 (legal vulnerability assessment)
- Coordinated launch with named advocates (Veditum · SANDRP · CSE for cover)
- Anonymous contribution channel for sensitive ground-truth (GitHub issue + masked-author flag)

---

## 5. Anonymous contribution channel

Sensitive ground-truth (industry whistleblower · regulatory insider · operational data otherwise classified) can be submitted with author identity masked.

Path:
1. Open issue with `[Audit-Discrepancy] [Anonymous]` label
2. Provide claim source, verification source, evidence
3. Maintainer (or audit-claim verifier) handles intake
4. Author identity stays masked through public publishing
5. Original submitter remains addressable via GitHub for clarification (private-only)

**Risk:** legal exposure to maintainer if claim is defamatory. Mitigation: maintainer applies the source standards above + counsel review before publishing verified discrepancy.

---

## 6. Sample claim provenance

Example complete entry (lane 1, Punjab JJM):

```yaml
claim_id: jjm-2024-PB
lane: jjm-functional
place: Punjab
body: aquifers

claim_source:
  publisher: Ministry of Jal Shakti · JJM dashboard
  url: https://ejalshakti.gov.in/jjmreport/
  retrieval_date: 2025-01-15
  claim_value: "99% rural HH tap-coverage in Punjab"

verification_source:
  publisher: Comptroller and Auditor General of India
  document: CAG Performance Audit on JJM (Report No. X of 2024)
  retrieval_date: 2024-12-XX
  verification_value: "~47% audited functional in Punjab sample"

discrepancy: "52 percentage points gap"
status: verified
last_updated: 2026-05-10
notes: "Punjab sample size · methodology details in CAG Annexure C"
```

This level of provenance is the **target standard**. v2.0 entries are seeded at directional fidelity; the standard above is the v2.1+ refinement target.

---

## 7. Counter-claim protocol

If a claim source (e.g., a ministry · a company · an industry body) publishes a formal challenge to a `verified` entry:

1. Within 7 days: mark entry as `disputed` · log counter-claim
2. Within 30 days: maintainer responds publicly
3. Counter-claim is added as a parallel entry (not merged · canon preserves both)
4. Allied counsel reviews any defamation risk
5. If counter-claim is itself refuted: entry returns to `verified`
6. If counter-claim is verified: entry transitions to `retracted` per §2

The artefact never deletes claims under pressure. Retraction is by methodology, not by external silencing.

---

## 8. Aggregation logic

The 6-lane structure deliberately resists aggregation into a single "audit score." Reasons:

- Each lane addresses a different epistemic question
- Weighting is value-laden (whose claim matters most?)
- Aggregation can launder methodology drift
- Place-specific lanes (JJM · CSR · scheme-spend) ≠ structural lanes (anchor · hard-Q)

**v2.0 displays:** count of verified discrepancies per lane · per-place breakdown · trend over time (when available).

**v2.0 does not display:** "audit score" or any single aggregate.

---

## 9. Retraction registry

Retracted claims (status = `retracted`) are publicly maintained for transparency. They appear in `data/audit-claims.csv` with `retraction_reason` and original date. They do not appear in the live audit-muscle render unless toggled.

**Reason categories:**
- Methodology error (artefact's mistake)
- Source error (claim source was wrong · subsequently corrected)
- Verification error (verification source was wrong · subsequently corrected)
- Premature publication (insufficient evidence at the time)

---

## 10. v2.0 launch state · honest disclosure

**Currently seeded:** ~30 entries spanning 6 lanes (5 entries per lane average · skewed toward lane 1 + 2 + 3 with most public claims).

**Fidelity caveats:**
- All 6 lanes have at least 1 `verified` entry (cited to CAG · third-party assurance · CPCB)
- Several lanes have `open` entries pending verification
- Lane 5 (anchor commitments) and Lane 6 (hard-Q) are inherently small at launch (anchor commitments tracker grows as commitments are made)
- No live data feeds (manual curation only)

**v2.x trajectory:**
- Each lane grows on contribution (open invitation in §5 action drawer)
- v2.1 target: ~50 entries
- v2.2 target: live JJM + CPCB feed integration (requires v3.0 API layer)
- v3.0 target: 100+ entries with API-driven updates

---

**End of audit methodology v2.0.**  
*The audit muscle is the artefact's most politically loaded contribution. It is also the most necessary. Honest about what's verified, what's open, and what's still wrong.*
