# India Water Canvas

A public-good infrastructure artefact for India's water situation, systems, and place-based interventions. CC BY-NC 4.0 · open data · open methodology.

**v2.2 · LEMMA architecture** · place-based · climate-aware · audit-honest. **Data refreshed October 2026.**

## Quick links

- **Live dashboard** → **[waterdashboard.in/dashboard.html](https://waterdashboard.in/dashboard.html)** (live) · source: [`dashboard.html`](dashboard.html)
- **Interactive map** → [`water-map.html`](water-map.html) · [waterdashboard.in/water-map.html](https://waterdashboard.in/water-map.html)
- **Architecture constitution** → [`architecture.md`](architecture.md)
- **Methodology** → [`methodology.html`](methodology.html)
- **Audit methodology** → [`audit.md`](audit.md)
- **Maintenance + curation contract** → [`maintenance.md`](maintenance.md)
- **Open data** → [`data/`](data/) · 13 CSVs · CC BY-NC 4.0
- **Changelog** → [`changelog.md`](changelog.md) · latest: v2.2 (Oct 2026 data refresh)
- **Prose folder** → 14 chapters · `landscape.md` → `build-plan.md`

## v2.0 LEMMA · the five primitives

**L** Legibility · **E** Engagement · **M** Measurement · **M** Movement · **A** Audit

Place-anchored. Climate-aware. The artefact embodies the audit muscle it advocates for.

## Read this artefact in 60 seconds

Open `dashboard.html`. Default view = India. Pick a state · city · or basin from the Geography dropdown. Five zones rewire to your place:

1. **PLACE** · what's true here (H/A/I · binding loop · climate stake · water bodies · plain-language summary · Hindi where available)
2. **ENGAGEMENT** · who's working on it (partners · funders · market vendors + failed canon)
3. **MOVEMENT** · what's moving year over year (7 axes · directional fidelity markers)
4. **ADAPT** · climate strategies (adaptation + mitigation · place-relevant highlights)
5. **AUDIT** · where claims don't match reality (7 cross-reference lanes · 30 seeded claims)

Plus the action drawer (8 pre-filled contribution paths · including anonymous).

## Status

**v2.2 · live at [waterdashboard.in](https://waterdashboard.in/) · canon is open.** Still an invitation for review; audit-lane legal scaffolding ongoing.

### Latest data refresh · October 2026

National headline figures rolled to the latest authoritative releases (full detail in [`changelog.md`](changelog.md)):

- **Groundwater** · CGWB *Dynamic Ground Water Resources of India 2025*: 730 of 6,762 assessment units over-exploited (10.8%, down from 17.2% in 2017), national stage of extraction 60.6%, recharge 448.52 BCM.
- **JJM** · ~82% rural household tap coverage (2026); central Union Budget allocation **₹67,670 cr in FY2026-27** (second-largest centrally sponsored scheme after MGNREGA); CAG functional rate 40 to 55%.
- **Rivers** · CPCB 2025: 296 polluted river stretches across 271 rivers (down from 351 in 2018), 37 Priority-I.
- **Finance** · 16th Finance Commission tabled 1 Feb 2026, ties ~₹1.74 L cr of rural local-body grants to water + sanitation over 2026 to 2031.
- **Scheme outlays** · refreshed to actual FY2026-27 Union Budget allocations (Stmt 4A/4B), sourced via the open [`urbanmorph/schemes`](https://india-schemes.pages.dev/) register.

Reader-test outreach: see [`outreach-templates.md`](outreach-templates.md).

## Staying current

The headline figures come from sources that update annually or a few times a year (CGWB groundwater, CPCB rivers, the Union Budget, JJM), not daily. So instead of faking a live feed, the repo watches the sources and flags a real change:

- **Daily source-watch** ([`.github/workflows/source-watch.yml`](.github/workflows/source-watch.yml) + [`scripts/check-sources.mjs`](scripts/check-sources.mjs)) re-checks the machine-readable feeds each day and opens a GitHub Issue labelled `source-update` **only when a monitored source actually changes**. It never edits the dashboard or auto-commits data. The watchlist and last-vetted fingerprints live in [`data/source-watch.json`](data/source-watch.json).
  - Authoritative, low-noise: the Union Budget scheme allocations via the [`urbanmorph/schemes`](https://india-schemes.pages.dev/) register (covers JJM / AMRUT / PMKSY / Ganga outlays).
  - Best-effort: CGWB and the Union Budget portal (gov sites that often block bots; they arm once a run can reach them, and never false-flag).
  - After a flagged source is verified and the dashboard updated, run `node scripts/check-sources.mjs --baseline` to re-arm the watch.
- **Client-side refresh:** a left-open dashboard tab reloads itself every 24h (when idle) so it stays in sync with the latest deploy.

## Contribute

Every blank field in the dashboard has a "contribute →" link routing to a pre-filled GitHub issue. 14-day response commitment from the maintainer.

Categories:
- `[Correction]` · factual error · 14-day SLA
- `[Ground-Truth]` · place-level observation
- `[Audit-Discrepancy]` · claim-vs-reality gap (use anonymous channel for sensitive ground-truth)
- `[Partner-Add]` / `[Funder-Add]` / `[Market-Add]` · new entity
- `[Vernacular-Add]` · Hindi · Tamil · Telugu · Marathi · Bengali summaries welcome
- `[Review-Request]` · external review with optional endorsement badge
- `[Cost-Estimate]` / `[State-Data]` / `[City-Data]` · fill blanks

## Cite this work

```
Kulkarni, A. (2026). India Water Canvas v2.0: A public-good place-based infrastructure
artefact for India water. CC BY-NC 4.0.
https://github.com/Ashwask/india-water-canvas
```

See [`CITATION.cff`](CITATION.cff) for the machine-readable citation.

## Project history

This repo was split from `Ashwask/RFPartnerMap` at v2.0 (commit `0bff41d` · 2026-05-12). Pre-v2.0 history (v1.0 release · Pattern B architecture experiments · v1.x intermediate state) lives in the parent repo. v2.0 onwards lives here. Snapshots preserved at [`v1.0/`](v1.0/) and [`v1.x/`](v1.x/).

## License

CC BY-NC 4.0 · see [`LICENSE`](LICENSE).

## Author

Ashwin Kulkarni · independent capacity · until Y1 anchor signed.

Maintained as a draft commitment · see [`maintenance.md`](maintenance.md).
