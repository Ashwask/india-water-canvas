## Summary

Refreshes the India Water Canvas dashboard to the latest authoritative figures (Oct 2026), strengthens it using two peer civic-data projects — **Neer Vazhvu** and **Bharatlas** — and fixes regressions introduced by the v2.0 standalone-repo split (including the live map, which was fully broken).

## Data refresh (Oct 2026)

- **JJM coverage:** "81%+" → "~82%" rural HH tap coverage (82.09% / ~15.8 cr HH, 2026). Outlay (₹8.69 L cr through Dec 2028) unchanged; functional-rate gap re-stated (CAG 40–55%).
- **CGWB:** "GEC 2023" → "Dynamic Ground Water Resources of India 2024" (released Jan 2025). National over-exploited units corrected to **751 of 6,746 (11.13%)**, national extraction stage **60.5%** — replaces the earlier "17% blocks / +5,777 critical" KPI.
- **CPCB:** polluted river stretches **311 → 296** (271 rivers, 2025 report; down from 351 in 2018); 37 Priority-I surfaced.
- **16th Finance Commission:** reframed from a future "Mar 2026 bet-the-farm signal" to tabled fact (submitted 17 Nov 2025, tabled 1 Feb 2026). Now records that it ties 50% of local-body basic grants to water+sanitation+SWM (~₹1.74 L cr rural, 2026–31), so the O&M-financing signal landed partly positive; absorption into salaries flagged as the open risk.
- Header source-line + baseline captions restamped; `data refreshed Oct 2026` marker added; AUDIT_CLAIMS + data-freshness ledger dates bumped.
- Sources: ejalshakti JJM dashboard · CGWB Dynamic GW Resources 2024 · CPCB polluted-river-stretches 2025 · PRS / 16th FC report for 2026-31.

## Neer Vazhvu (neervazhvu.org)

- Live ward-scale **intelligence gateway** in the Chennai / Bengaluru / Madurai city profiles — turns a static place-card into a door to live ground-truth.
- New AUDIT lane `ward-legibility` (3 claims) cross-referencing official city aggregates against ward-level reality (incl. a partial falsification of the "no Bhujal app" access gap).
- Added to SOURCES (civic-data peers) and to Chennai + Bengaluru ground-truth sources.

## Bharatlas (bharatlas.com)

- **CWC river-basin grounding** in Basin mode: each region-shed now surfaces the real hydrological basin(s) it overlaps (drainage areas from CWC / India-WRIS), cited to Bharatlas / CWC-WRIS — fixing a mode that silently collapsed to a single primary state.
- Vendored open state boundaries (same LGD lineage Bharatlas aggregates) to restore the map (see below).

## Fixes

- **Map was fully broken after the split** — `dashboard.html` loaded `../india_geo.js` and fetched `../india_states_simple.geojson` from the now-absent parent repo, so the live site rendered "Map data unavailable." Vendored `india_geo.js` (`INDIA_GEOJSON`, 36 states, dissolved from district data via mapshaper) + `india_states_simple.geojson` at the repo root and repointed both `dashboard.html` and `water-map.html`.
- **22 dead "contribute →" links** repointed `Ashwask/RFPartnerMap` → `Ashwask/india-water-canvas`.
- **Compare-Places picker shipped empty** — `populateCompareDropdowns()` ran only inside `clearGlobalSpotlight()` (a reset path that never fires at load). Now populated at load.
- **`renderCompare` name collision** — the state comparator silently overrode the Exists-vs-Missing renderer, blanking that subtab. Renamed it to `renderExistsMissing()` and made it idempotent.

## Verification

All changes verified live via Chrome DevTools (not just compile checks): map renders with state choropleth; basin-grounding + Neer Vazhvu gateway cards render on selection; compare picker has 26 options and renders the side-by-side table for 2–3 states; exists/missing columns populate (8 / 12).

🤖 Generated with [Claude Code](https://claude.com/claude-code)
