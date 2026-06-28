## Summary

Strengthens the India Water Canvas dashboard using two peer civic-data projects — **Neer Vazhvu** and **Bharatlas** — and fixes regressions introduced by the v2.0 standalone-repo split.

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
