# India Water Canvas — Architecture Constitution v2

**v2.0 · 2026-05-10 · CC BY-NC 4.0**

The locked first-principles design for `Water/dashboard.html`. Supersedes v1 (Pattern B / persona-as-lens). Every future edit must reference this document.

---

## 0. What `dashboard.html` is

A single **place-based · water-body-aware legibility surface** for India water as public good infrastructure. Not a marketing page · not a survey · not a pitch deck.

The page is **one place at a time**. Default = India. Drillable: India → State → Basin → (future) District → Ward.

The canvas is the union of: `dashboard.html` (this front door) + 14-chapter prose folder + 8 open CSVs + `methodology.html` + `water-map.html` + governance scaffold + `maintenance.md` (curation contract) + `audit.md` (audit muscle methodology).

---

## 1. Four axioms (the first principles)

1. **Water IS place.** Not a sector parallel to ecology / livelihood / culture. Water is the substrate of all of them. Place-anchoring is the only honest unit of analysis.
2. **Climate is the broken boundary condition.** Stationarity in monsoon · cryosphere · sea-level · cyclone frequency is gone. Every layer of water work has to add a non-stationarity term.
3. **Theory of change is iterative on the binding constraint.** Each place has ONE binding loop (R1 free-electricity / R2 tank degradation / R5 opacity / R6 climate). Diagnose → match capacity → mobilise → build → measure → diffuse → cycle.
4. **The artefact's job is LEMMA** — **L**egibility · **E**ngagement · **M**easurement · **M**ovement · **A**udit. Not advocacy. Not pitch. Not survey. **The artefact embodies the audit muscle it advocates for.**

---

## 2. Water bodies are first-class

Per W1 decision (A + B): water-body type is treated as a first-class dimension across the whole artefact.

**8-type taxonomy:**

| Type | Includes |
|---|---|
| `rivers` | perennial, seasonal, glacial-fed; tributaries |
| `aquifers` | alluvial, hard-rock, coastal; deep + shallow GW |
| `lakes-tanks` | natural lakes; eri · johad · kuhl · baoli · ahar-pyne · pukur |
| `wetlands` | Ramsar wetlands · mangroves · backwaters · marshes |
| `springsheds` | hill springs (Himalayan, Western Ghats) |
| `cryosphere` | glaciers · snowpack · permafrost |
| `coastal-estuarine` | coastal aquifers · estuaries · salt-affected |
| `urban-drains` | nullahs · stormdrains · open sewers |

**Where water-body type appears:**
- **§1** has a "Waters here" sub-section · per place, the relevant body-types with one-line status
- **§2** has a water-body filter chip-row · narrows partners + funders + market to matching `primary_water_body`
- **§4** audit lanes carry water-body tags (e.g., OCEMS = rivers + aquifers)
- **`PLACE_DATA[place].bodies[]`** — array of relevant body-types per place
- **Every entity** (`MAP_PARTNERS · FUNDERS · MARKET_PROVIDERS · whitespace seeds`) gets a `primary_water_body` field

---

## 3. The 5-zone spine (locked, immutable)

The page has exactly **five zones** plus a place selector. Anchors NEVER renamed once published.

| # | Anchor | Zone | Content for active place |
|---|---|---|---|
| – | – | **Place selector** (sticky top) | India / state / basin · drill path visible · one click switches scope |
| 1 | `#place` | **Place legibility** | (i) H/A/I composite · (ii) binding R-loop · (iii) climate stake under non-stationarity · (iv) **Waters here** (water-body sub-section) · 3-line plain read |
| 2 | `#engagement` | **Engagement** | water-body filter chip-row · 3 tiles (partners · funders · market) · whitespace seeds for here · invitation to join |
| 3 | `#movement` | **Movement** | 7-axis trajectory (H · A · I · Build · Audit · Constituency · Market depth) · last gate · next gate · climate-adjusted projection |
| 4 | `#audit` | **Audit muscle** | 6 cross-reference lanes (claim-vs-verified discrepancies for this place) |
| 5 | `#action` | **Action drawer** (sticky right rail) | 7 pre-filled actions per place |

Plus **footer Health badge** — last refreshed · next due · open issue count · link to maintenance log.

When no place is selected → place = India · same zone template, no special-casing.

---

## 4. §1 Place legibility (4 sub-sections)

| Sub-section | Source data |
|---|---|
| H/A/I composite | `PLACE_DATA[place].health / availability / impact` |
| Binding R-loop | `PLACE_DATA[place].loop` |
| Climate stake | `PLACE_CLIMATE_STAKES[place]` (per-place climate context: glacier / monsoon / cyclone / sea-level / heat-dome) |
| **Waters here** *(NEW)* | `PLACE_DATA[place].bodies[]` — table: body-type · name · status · key risk |
| 3-line plain read | derived from above + `PLACE_DATA[place].interv` |

---

## 5. §2 Engagement

**Filter chip-row** at the top of the zone:
`All bodies · Rivers · Aquifers · Lakes/Tanks · Wetlands · Springsheds · Cryosphere · Coastal · Urban-drains`

Filter narrows the 3 tiles below to entities matching `primary_water_body`.

**3 tiles + whitespace + invite:**

| Tile | Source data | Per-place filter | Per-water-body filter |
|---|---|---|---|
| **Partners here** | `MAP_PARTNERS` (existing 18 implementing NGOs) | `states` array | `primary_water_body` |
| **Funders here** | `FUNDERS` (existing 22 anchor candidates, 4-tier) | geographic deployment | `primary_water_body` |
| **Market here** *(NEW)* | `MARKET_PROVIDERS` (new 30-50 entries) | `states_active` | `primary_water_body` |
| **Whitespace** | `ROLE_ACTIONS` whitespace-seed subset | place-relevance | `primary_water_body` |
| **Join** | Static template + place + body pre-fill | "Add a partner / funder / vendor for this place + body" |

Market tile shows **operational + failed** providers (full canon: Sarvajal · Spring Health · Naandi displayed with strikethrough + post-mortem link).

---

## 6. §3 Movement (7 axes, directional fidelity)

**Movement = direction over time. Output = build-movement + constituency-movement.**

| # | Axis | What moves | Data fidelity |
|---|---|---|---|
| 1 | Health | Water-quality measured points · CPCB station coverage | HIGH (2025 per state) · MEDIUM (1995 national baseline) · LOW (per-state historical) |
| 2 | Availability | Per-cap m³ · GW stage · JJM functional rate (audited) | HIGH (current) · MEDIUM (baseline) · LOW (per-state series) |
| 3 | Impact | Affected population · climate vulnerability · marginalised access | HIGH (current) · LOW (Δ over time) |
| 4 | **Build** | Civic infrastructure built (meters · sensors · labs · partner orgs · funders · gates passed) | MEDIUM (manually curated, partial) |
| 5 | **Audit** | Capture envelope shrinking · CAG findings actioned · OCEMS unlocked | LOW (no live data; depends on CAG follow-up) |
| 6 | **Constituency** | Citizens + journalists + advocates engaged · # corrections · # observations · # citations · MAU | LOW (would need GitHub API integration) |
| 7 | **Market depth** *(NEW)* | # vendors active · ₹/asset trajectory · cost-curve maturation | MEDIUM (training-era + prose folder; 30-50 entries) |

**Decision (i):** ship §3 directionally with honest per-axis fidelity markers.

---

## 7. §4 Audit muscle (6 lanes, all seeded at v2.0)

The artefact stops merely displaying others' data. It cross-references claims and surfaces divergences. **Per W3 decision (full): all 6 lanes seeded at v2.0 launch (~5 entries each at launch · grow on contribution).**

| # | Lane | Source A (claim) | Source B (verification) | Discrepancy displayed | Body tag |
|---|---|---|---|---|---|
| 1 | **JJM functional gap** | JJM dashboard (81%+ claimed coverage) | CAG 2024 (40-55% functional) | per-state · trended over years | aquifers + rivers |
| 2 | **CSR water-positive registry** | MCA CSR FY25 filings | Third-party / partner ground-truth | per-company · audit status flag | body-agnostic |
| 3 | **OCEMS reality** | CPCB OCEMS-required list | Real-time data actually published | coverage gap %, per industry cluster | rivers + aquifers |
| 4 | **Scheme spend vs outcome** | JJM 2.0 + Atal Bhujal + Namami Gange outlays | H/A/I delta per state since launch | ₹/H-point trajectory | varies |
| 5 | **Anchor commitments tracker** | Y0 gate anchor signatures | Actual capital deployed | non-substitution clause adherence | body-agnostic |
| 6 | **Hard-question status** | `hard-questions.md` claims (12) | Public evidence answering them | answered · falsified · still open | body-agnostic |

**Pre-launch readiness (W3 = full):**
- Factual review by allied counsel for JJM + CSR + OCEMS lanes (politically loaded)
- Coordinated launch with allied advocates (CAG references provide cover)
- Anonymous contribution channel for sensitive ground-truth

**Methodology:** new prose chapter `audit.md` documents sourcing, verification, escalation, retraction.

**New action:** "Report an audit discrepancy" → GitHub issue with `[Audit-Discrepancy]` label.

---

## 8. §5 Action drawer (sticky right rail)

Seven pre-filled actions per place (and water-body where relevant):

1. **Submit correction** — `[Correction] for <Place>`
2. **Ground-truth observation** — `[Ground-Truth] from <Place> · <Body>`
3. **Cite this artefact** — copies attribution
4. **Anchor commitment** — for funders · `[Anchor] <Place>`
5. **Pledge to a seed** — for funders · place + body relevant whitespace seeds
6. **Co-invest with market actor** — for funders / CSR · place's vendor list
7. **Report audit discrepancy** — `[Audit-Discrepancy] <Lane>:<Claim>`

All actions route to GitHub issues with labels (`erratum.md` for corrections · `review-log.md` for substantive review · `audit.md` for verified claims).

---

## 9. New data structures

### `WATER_BODY_TYPES` (in `dashboard.html`)

```
['rivers','aquifers','lakes-tanks','wetlands','springsheds','cryosphere','coastal-estuarine','urban-drains']
```

### `PLACE_DATA[place].bodies[]` (extension)

```
[
  {type:'rivers', name:'Cauvery', status:'declining', risk:'KRS-Hemavathi-Kabini at threshold'},
  {type:'lakes-tanks', name:'Bengaluru lakes', status:'critical', risk:'-80% since 1960'},
  {type:'springsheds', name:'Western Ghats', status:'declining', risk:'spring-discharge falling'}
]
```

Curation: ~28 states × 3-5 bodies = ~120 cells · ~3-4 hours.

### `primary_water_body` tag on every entity

| Entity | Tag added |
|---|---|
| `MAP_PARTNERS[*]` | e.g., ACWADAM → `springsheds` · Wetlands International → `wetlands` · ICIMOD → `cryosphere` |
| `FUNDERS[*]` | e.g., ATECF → `lakes-tanks` · ICIMOD-grants → `cryosphere` |
| `MARKET_PROVIDERS[*]` | e.g., Jain Irrigation → `aquifers` · Aquaconnect → `coastal-estuarine` |
| Whitespace seeds (`ROLE_ACTIONS`) | e.g., GW commons monitoring → `aquifers` · Urban wetland legal → `wetlands` |

Curation: ~88 entities × 1 tag · ~2 hours.

### `MARKET_PROVIDERS` + `data/market-providers.csv`

| Field | Example |
|---|---|
| `name` | Jain Irrigation · Sarvajal · Aquaconnect |
| `category` | drip · water-ATM · aquaculture-tech · STP-vendor · meter-OEM |
| `primary_water_body` | aquifers · rivers · coastal-estuarine · etc. |
| `states_active` | ['Maharashtra','Karnataka','Punjab',…] · 'pan-India' |
| `unit_economics` | "₹40-60K/ha drip · 5-7 yr lifetime" |
| `capital_type` | 'listed' / 'PE-backed' / 'family-owned' / 'social-enterprise' / 'defunct' |
| `track_record` | 'operational' / 'successful' / 'failed' / 'consolidating' |
| `failure_year` | 2019 (Sarvajal) · null otherwise |
| `source` | training-era public data · 14-chapter folder · MCA filings |

**v2.0 launch:** ~30 named entries with directional state-active + body-type markers.

### `AUDIT_CLAIMS` + `data/audit-claims.csv`

| Field | Example |
|---|---|
| `lane` | jjm-functional · csr-water-positive · ocems · scheme-spend · anchor · hard-q |
| `claim_id` | `jjm-2024-coverage-PB` |
| `place` | Punjab · India · Karnataka · etc. |
| `body` | rivers + aquifers · body-agnostic · etc. |
| `claim_source` | URL / publication |
| `claim_value` | "98% rural HH tap coverage" |
| `verification_source` | URL / publication |
| `verification_value` | "47% audited functional" |
| `discrepancy` | "51 percentage points" |
| `status` | open / in-review / verified / disputed / retracted |
| `last_updated` | 2026-05-10 |

**v2.0 launch:** ~30 entries spanning 6 lanes (~5 each).

### `PLACE_CLIMATE_STAKES` (in `dashboard.html`)

Per-place climate context: glacier (Ladakh / Sikkim / HP / UK) · monsoon (PB / HR / MP / Bundelkhand) · cyclone + sea-level (WB / OD / TN / KL / GJ coast) · heat-dome (RJ / TG / DL).

### `data/data-freshness.csv`

| Field | Example |
|---|---|
| `field` | per-state-H · per-state-A · funder-ladder · partner-table · market-vendors · audit-claims · water-body-statuses |
| `last_updated` | 2026-05-10 |
| `next_due` | 2026-08-10 |
| `cadence` | quarterly / semi-annual / annual / triggered |
| `owner` | author / community / data-steward |
| `source` | CGWB GEC · CPCB · MCA · CAG · curation |
| `fidelity` | high / medium / low |

---

## 10. Cosmetic constitution (carries forward from v1 §5)

- **Headlines:** Georgia serif · 700 · clamp(22, 3.5vw, 38)px · line-height 1.2
- **Body:** system-sans · 400-500 · 13-14px · line-height 1.6
- **Numbers:** Georgia 800 · 22-28px · line-height 1
- **Labels (caps):** system-sans · 700 · 10-11px · uppercase · letter-spacing .5px
- **Colors:** `--teal #00BFA5` · `--coral #FF5252` · `#FFAB40` · `#4FC3F7` · `#69F0AE` · neutrals `--bg/bg2/bg3/text/muted/border`
- **Spacing:** 8px grid · one border-radius (8px) · one border (1px solid `--border`)
- **Density:** Bloomberg / FT / Stripe-docs · max 1080px content width · 1px border + 32px breathing between zones

---

## 11. What v2.0 deletes from v1

| Removed | Reason |
|---|---|
| 7-chip persona system (`audience-bar`) | Persona surfaces from intent, not pre-classification |
| `PERSONA_FRAMES` (~250 lines) | Same |
| `applyPersona`, `renderActSection`, `renderNextCTA`, `renderUsefulForPills` (~200 lines) | Functions for persona machinery |
| `.scope-tag` + `injectScopeTags` + `updateScopeTags` | Pattern B label scaffolding · obsolete |
| Most-useful-for pill machinery | Per-section persona relevance · obsolete |
| `spine-context-banner` machinery | Banner per spine section · obsolete |
| Topnav anchors `#what / #how / #who / #measure / #act / #learn` | Renamed to `#place / #engagement / #movement / #audit / #action` |
| 13-section structure | Collapsed into 5 zones |

---

## 12. What v2.0 preserves

- All data: `PLACE_DATA` · `STATE_HAI_BREAKDOWN` · `SHEDS` · `FUNDERS` · `MAP_PARTNERS` · `ROLE_ACTIONS` · `HERO_KPI_DETAIL`
- 14-chapter prose folder · 8 open CSVs
- `methodology.html` · `LICENSE` · `CITATION.cff` · `changelog.md` · `erratum.md` · `review-log.md` · `terms.md` · `privacy.md`
- Place Explorer Leaflet map (becomes the primary control surface in §1)
- D3 Sankey + 7-layer + 5-phase visualisations (move into §3 movement)
- Hero KPI detail panel (re-purposed under §1)

---

## 13. Migration plan (12 steps · 2 commits · ~15-18 hours · 2-3 sessions)

| Step | Commit | Change | Hours |
|---|---|---|---|
| 1 | – | Replace `architecture.md` v1 → v2 (this file) — **DONE** | 0 |
| 2 | A | Strip chrome: persona system + scope tags + Most-useful-for pills + Next-CTAs + spine-context-banners. ~600 lines deleted. | 1 |
| 3 | A | Build `WATER_BODY_TYPES` taxonomy + extend `PLACE_DATA` with `bodies[]` array (~120 cells curation). | 3-4 |
| 4 | A | Tag every entity with `primary_water_body`: partners + funders + market + whitespace seeds (~88 tags). | 2 |
| 5 | A | Refactor body into 5 zones: §1 absorbs hero + place-explorer + overview + Waters-here. §2 absorbs ecosystem + market + body-filter chip. §3 absorbs trends + measurement + insights + system-flows. §5 absorbs act + sources. | 3 |
| 6 | A | Build `MARKET_PROVIDERS` + `data/market-providers.csv` (~30 entries · operational + failed · with body tags). | 2 |
| 7 | A | Build `PLACE_CLIMATE_STAKES` per-place climate context. | 1 |
| 8 | A | Wire each zone to active place + body filter · render 7 actions in §5 with place + body pre-fill. | 1 |
| 9 | A | Build §3 movement axes with directional data + per-axis fidelity markers. | 1 |
| 10 | B | Build §4 audit muscle: `AUDIT_CLAIMS` + `data/audit-claims.csv` (~30 entries × 6 lanes seeded) + 6 lane renders + body tags. | 2-3 |
| 11 | B | Maintenance scaffold: `maintenance.md` + `data/data-freshness.csv` + footer Health badge + `audit.md` chapter. | 1-2 |
| 12 | B | **Reader-test gate**: 2-3 named external reviewers (Mihir Shah · Veena Srinivasan · Aditi Mukherji · ATECF / Rohini Nilekani team). Browser verify · India / 5 states / 3 basins · 5 zones flip cleanly. Tag v2.0 · `changelog.md` + `review-log.md` + memory. v1.x snapshot at `v1.x/`. | 1-2 |

**Estimated diff:** ~3,300 → ~2,000 lines · ~15-18 focused hours · 2 commits (Commit A: §1-§3 + §5 base · Commit B: §4 audit + maintenance scaffold + reader-test).

---

## 14. Maintenance + curation contract — DRAFT COMMITMENT

**Per W2 decision (yes): this section is a draft commitment, not a fact. Honest disclosure follows.**

### 14.1 Current state (honest)

- **Sole maintainer:** Ashwin Kulkarni (independent capacity) until Y1 anchor signed
- **Funding status:** zero · cold-start ask outstanding
- **SLA enforcement:** best-effort · subject to maintainer availability
- **Y0 funding milestone:** anchor commitment(s) by **Dec 31, 2026** (architecture.md §15.6)

### 14.2 Roles (target post-Y1)

| Role | Responsibility | Cadence |
|---|---|---|
| **Data steward** | Refresh per-element data per `data-freshness.csv` cadence | Per-element |
| **Methodology custodian** | Defend H/A/I formula against drift; publish methodology updates | Annual |
| **Editorial reviewer** | Vet contributions, post-mortems, hard-question additions | Per-PR |
| **Issue triage** | Handle correction PRs / issues within commitment SLA | Weekly |
| **Audit-claim verifier** | Investigate `[Audit-Discrepancy]` issues, update `AUDIT_CLAIMS` | Per-issue |
| **Annual independent auditor** | Review fidelity claims · publish year-end audit | Annual |

### 14.3 Cadence

| Item | Cycle |
|---|---|
| Market vendor freshness | Quarterly |
| H/A/I refresh | Semi-annual (CGWB GEC + CPCB releases) |
| Methodology review | Annual |
| Year-end review-log entry | Annual |
| Triggered refresh (CAG findings · scheme launches · climate events) | As-needed |
| Re-diagnose binding constraint per place | 2-yearly |
| Decision-gate evaluation | 5-yearly (Y0 / Y2 / Y5 / Y10) |
| Water-body status refresh | Annual |

### 14.4 Funding model — **hybrid (locked)**

| Source | Target | Why |
|---|---|---|
| **Small endowment** (~₹3-5 cr corpus) | ~₹15-25 lakh/yr stable ops floor | Most stable; survives funder churn |
| **One service grant** (₹50 lakh - 1 cr / year, 3-yr cycles) | Active curation + audit verification | Aligns with foundation programme cycles |
| **Open-source bounties + volunteers** | Specific tasks (data refresh · audit lane curation · vernacular translation) | Lowest-friction community contribution |

Total annual ops floor: ~₹70 lakh - 1.25 cr. Total cold-start ask: ~₹4-6 cr (endowment + 3-yr grant runway).

### 14.5 Accountability

- **Public maintenance log** — auto-generated from git activity stream (commits + issue closes + audit-claim updates)
- **Public roadmap** — quarterly milestones in `review-log.md`
- **Public SLAs** — correction turnaround (14 days · existing) · refresh cadence per `data-freshness.csv` · audit-discrepancy response (30 days)
- **Public post-mortems** — when SLAs slip, post-mortem committed within 30 days

### 14.6 Visibility on the artefact

- **Per-zone freshness badge** — "Last refreshed: 2026-05-10 · Next due: 2026-08-10"
- **Footer Health indicator** — green (all SLAs met) / yellow (1-2 SLAs slipping) / red (3+ SLAs slipping or funding shortfall)
- **Maintainer disclosure** — "Maintained solo by Ashwin Kulkarni until Y1 anchor · last refreshed: 2026-05-10"
- **Funding status** — "Y0 milestone: anchor commitment(s) by Dec 31, 2026 · current commitments: 0"
- **One-click drill** from Health badge into `data-freshness.csv` and current open-issue dashboard

### 14.7 Contract artefact

`maintenance.md` (NEW · ~200 lines) — written contract: roles · cadence · funding · SLAs · escalation paths · post-mortem template. **Marked draft until Y1 anchor signed.** Version-controlled alongside the canon.

---

## 15. End state

`dashboard.html` is:

- **One place at a time** — default India · drillable
- **Five zones** — legibility · engagement · movement · audit · action
- **Water-body aware** — 8-type taxonomy · per-place body breakdown · entity tagging
- **One primary action per visit** — surfaces from intent, not pre-classification
- **Climate-aware** — every zone adds non-stationarity context
- **LEMMA-driven** — legibility + engagement + measurement + movement + audit
- **Full canon** — successes + failures · directional + honest about fidelity
- **Maintained (draft commitment)** — hybrid-funded · public SLAs · auto-tracked health · sole maintainer until Y1
- **Audited** — embodies the audit muscle it advocates for · 6 cross-reference lanes seeded
- **~2,000 lines · single static HTML + 6 supporting files** (3 new CSVs · 2 new MDs · 1 new chapter)

---

## 16. What this constitution does NOT cover

- **Vernacular + voice / SMS layer** (deferred to v3.0 · explicitly NOT community-facing in v2.0 · the artefact serves *informed observers* — researchers · journalists · funders · govt advisors · NGO leadership · CSO advocates)
- **Live data feeds** (CGWB / CPCB / OCEMS / MCA / CAG) · v2.0 is snapshot-based · v3.0 work item
- **Mobile breakpoints below 780px** (deferred to a separate cosmetic pass post-v2.0)
- **Authenticated contributions** (out of scope · GitHub issues are the contribution rail)
- **Per-district granularity** (future v3.0 once district-level data is curated)
- **API for downstream consumers** (future v3.0 if community demand surfaces)

---

## 17. All locked decisions (final)

| ID | Decision | Locked value |
|---|---|---|
| Spine | Number of zones | 5 (place / engagement / movement / audit / action) |
| Movement-fidelity (i) | §3 axes data | Directional with per-axis fidelity markers |
| D1 | Maintenance funding | Hybrid (endowment + service grant + bounties) |
| D2 | Audit lanes at v2.0 | All 6 seeded |
| Full canon | Failed market vendors | Displayed alongside operational |
| W1 | Water bodies | (A) sub-section in §1 + (B) tagging on all entities |
| W2 | Maintenance contract honesty | Draft commitment + sole maintainer disclosure + Y0 funding milestone |
| W3 | Audit launch readiness | Full 6 lanes seeded · grow on contribution · pre-launch legal + advocate scaffolding |

**End of v2 constitution.**
*All future edits to `dashboard.html` reference this document. Drift is reverted.*
*The artefact's promise is LEMMA — Legibility, Engagement, Measurement, Movement, Audit. Place-anchored. Water-body-aware. Climate-conscious. Honestly maintained.*
