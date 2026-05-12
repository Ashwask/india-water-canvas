# India Water Canvas — Open data

This directory holds the open-data exports of the India Water Canvas. Files are CSV (tabular) or JSON (structured). All data is licensed CC BY-NC 4.0 — see `../LICENSE`.

## Files

- **h-a-i-derivation.csv** — per-state Health/Availability/Impact scores with input parameters, weightings, and source links
- **funder-ladder.csv** — 22+ funders × annual ₹ disbursement × layer (govt / DFI / CSR / philanthropy)
- **intersections.csv** — energy / waste / markets / health KPIs aggregated per state
- **place-kpis.csv** — state-specific intersection KPIs (the numbers that move when you click a state in the dashboard)
- **bottlenecks.csv** — 8 bottlenecks × severity (1-10) × 7-stack layer × R-loop closed
- **unit-econ.csv** — 9 unit-economics assets × cost installed × lifetime × axis (H/A/I)
- **sheds.csv** — 14 SHEDS × signals × needs × build phase × loop
- **hidden-dynamics.csv** — 8 hidden-dynamics × severity × axis affected × evidence

## How to use

- Replicate the H/A/I formula: run the math in `h-a-i-derivation.csv`; verify it produces the dashboard's per-state scores
- Audit individual numbers: cross-reference the `source` column with the underlying agency dataset
- Fork + propose: open an issue or PR at `Ashwask/RFPartnerMap` with proposed changes
- Cite data: include the version (currently v1.0) + date + the specific filename in your reference

## Source provenance

Each CSV row carries a `source` column. Sources are:

- **Government** — CGWB · CWC · CPCB · IMD · NMCG · MoJS · DDWS · CAG audits · State PCBs (per state)
- **Multilateral / DFI** — World Bank · ADB · JICA · ICIMOD · GRACE-FO (NASA)
- **Civic / academic** — IndiaWaterPortal · SANDRP · WELL Labs · ATREE · CSE · academic publications · ACWADAM
- **Disclosure** — MCA CSR FY25 · AVPN · foundation websites + audited financial statements

Numbers are ±30% directional unless explicitly tagged otherwise. Trust grades are gold / silver / bronze / red per `../data-and-groundtruth.md`.

## Contributing

Open an issue at the parent repository to propose corrections. See `../about.md` for the review process.

License: CC BY-NC 4.0 · Author: Ashwin Kulkarni (independent capacity)


---

## v2.0-pre snapshot (2026-05-10)

The following CSVs were exported from `dashboard.html` as part of the v2.0 LEMMA migration data foundations (Steps 2-7 of architecture.md §10):

- `place-bodies.csv` — per-place water-body type · name · status · risk (8-type taxonomy · 25 states · 80 cells)
- `place-climate-stakes.csv` — per-place climate-stake under non-stationarity (25 states · one-line)
- `market-providers.csv` — for-profit market actors (30 entries · operational + failed full canon)
- `entity-water-body-tags.csv` — primary_water_body field for 18 IMPLEMENTERS + 23 FUNDERS items (41 tags)

These CSVs are the open-data exports of the inline JS arrays in `dashboard.html`. They share the same source-of-truth: the inline arrays. CSV ↔ JS sync to be automated post-v2.0 launch via build script (architecture.md §13 maintenance contract).
