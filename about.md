# About India Water Canvas

## Author

**Ashwin Kulkarni** (independent capacity)

This artefact is built and maintained by Ashwin Kulkarni in personal capacity. The dashboard sits inside the public repository `Ashwask/RFPartnerMap` — originally a partner-map tool with its own scope. The Water/ folder + dashboard is independent prose-first analytical work; the framing is RF-agnostic by design (see `Water/README.md` line 43).

The author is **not** a credentialed hydrologist, water-economist, or commissioned researcher. The artefact's value rests on (a) a documented methodology that is open to review, (b) named external reviewers, and (c) the underlying 14-chapter prose folder that anchors every claim in publicly-verifiable sources.

Contact: open an issue on the parent repository. Email available on request via issue.

---

## What this artefact is

A public-good commons-infrastructure artefact for India's water situation, systems, and place-based interventions.

The artefact maps three axes:

- **Health** — the state of the water itself. Geogenic contaminants (As, F, U, NO₃) · microbiological + organic load (BOD, DO) · industrial pollution (heavy metals, dyes, pharmaceuticals) · physical (salinity, TDS, microplastics) · ecosystem (lakes, wetlands, springsheds).
- **Availability** — water quantity and delivery. Per-capita freshwater · % blocks safe · springshed perennial rate · JJM tap functionality · NRW · climate-stationarity of supply.
- **Impact** — human, economic, and climate consequence. Population at risk · climate vulnerability · economic exposure · marginalised groups disproportionately affected · health burden · subsistence burden.

These three axes are scored per state from a documented formula (see `methodology.html`). The artefact also surfaces six self-reinforcing feedback loops driving water-system degradation, the funder ecosystem (~₹2.5–3.5 lakh crore/yr government water spend), and a phased civic-side build (~₹500–1,000 crore over 10 years) targeted at the highest-leverage Meadows points.

---

## Audiences

The artefact is multi-audience by design. The same data, different doors in. Five priority audiences for v1.0:

| Audience | What this artefact supports |
|---|---|
| **CSO** (Civil Society Org) | Place-anchored advocacy material · capture envelope evidence · counter-argument exposed |
| **NGO** (Implementing) | Funder-flow map · partner ecosystem · whitespace seeds · which loop to target |
| **Philanthropy** | Build sequencing · capital structure · leverage map · decision gates |
| **CSR** | Capture envelope · what NOT to fund · audit posture · greenwashing detection |
| **Corporate** | Operational water exposure by city/cluster · regulatory pipeline · supply-chain risk |

Government, market entrants, journalists, researchers, multilateral, and citizens are all welcome to use the artefact; v1.0's audience routing is the priority five.

---

## License

**CC BY-NC 4.0** — Attribution-NonCommercial 4.0 International.

You may copy, redistribute, adapt, remix, and build upon this artefact for any non-commercial purpose, with attribution. Commercial use requires written permission. See `LICENSE` for the full deed.

The author retains the right to grant commercial-use exceptions case-by-case. Requests via issue.

The Water/ folder content (prose chapters, data, dashboard) inherits the parent repository's CC BY-NC 4.0 licence.

---

## How to cite

Use the citation file `CITATION.cff` (GitHub renders into a "Cite this repository" button), or the attribution string:

> *"India Water Canvas (2026), Ashwin Kulkarni, https://github.com/Ashwask/RFPartnerMap/tree/main/Water, CC BY-NC 4.0"*

For specific data extracts (H/A/I scores, funder ladder, capture envelope quantification), include the version number — currently v1.0 — and the section + date.

---

## Review process

The artefact is published as v1.0 with **methodology marked clearly as author-judgment-pending-external-review**.

Three review tiers operate in parallel:

1. **Methodology review** — one-time per major version, by named external technical reviewers. Reviewer status visible in `review-log.md`.
2. **Continuous community review** — open-issue model. Every claim has an "open issue" link. Author commits to 14-day response.
3. **Quarterly version review** — every 90 days, author + ≥2 named reviewers walk through the artefact.

Reviewer dissent is recorded publicly. The author does not curate reviewers to confirm priors.

See `review-log.md` for the current state of invitations + responses + disputes.

---

## Funders of this artefact

**None.** v1.0 is built on author's personal time + unpaid open-source dependencies (Leaflet, Chart.js, D3, OpenStreetMap).

If the artefact is funded in the future, every funder will be disclosed here with: name · amount · purpose · whether they have any approval rights over content (to date: no funder has approval rights; if that changes, it will be disclosed).

---

## Repository conventions

The artefact is hosted at `Ashwask/RFPartnerMap` under `Water/`. The repository uses:

- Single HTML file with inline CSS+JS for the dashboard (no build step)
- Vanilla ES5-compatible JS (no `let` / `const` / arrow functions / template literals)
- Open data CSVs/JSONs in `Water/data/`
- Markdown for prose chapters
- CC BY-NC 4.0 license

The repository is open to contribution via issues + pull requests. Significant contributions are credited in `CONTRIBUTORS.md` (created when the first external contribution lands).

---

## Open threads — what this artefact does NOT yet do

Captured here for transparency:

- **Multi-language support** (Hindi, Marathi, Tamil, Bengali, Telugu, Kannada, Malayalam, etc.). v2.0 candidate.
- **Mobile-optimised responsive design** — current breakpoints are basic; mobile use experience may degrade at small widths.
- **Live API feeds** from JJM/CGWB/CWC dashboards. Currently uses cached numbers with timestamps. v2.0 candidate.
- **Embeddable widgets** for journalists/researchers. v2.0 candidate.
- **Multi-author governance model** — v1.0 is single-author with named external reviewers. v2.0 may move to multi-author governance if traction demands.

These are tracked in `still-missing.md` (the meta-blind-spot file).
