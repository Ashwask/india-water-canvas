# Data and groundtruth

What water data exists in India, how recent it is, how it's used, how trustworthy it is. The honest answer is that India has more water data than is widely understood — the problem is fragmentation, latency, and the gap between what's collected and what's actually used.

## The legal data infrastructure (what exists)

**IMD — meteorological.** Daily gridded rainfall at 25 km resolution since 1901 reanalysis. ~700 manned stations + ~1,500 automatic weather stations. 5-day to monsoon-scale forecasts. Cyclone tracking. Mausam app for consumer access. Strong, public, free.

**CWC — surface water.** ~878 hydrological observation stations on rivers. Daily reservoir levels for ~150 major dams. Weekly storage bulletin (Thursday). Flood forecasting at 332 stations across 22 basins. Annual Water Yearbook. Decent quality, modest public access. Real-time flood data is operational; deep historical access is harder.

**CGWB — groundwater.** ~25,000 monitoring wells. Four readings per year (pre-monsoon Apr-May, monsoon Aug, post-monsoon Nov, post-rabi Jan-Feb). District-level Ground Water Estimation (GEC) report every 2-3 years (latest 2023, released September 2024). National Aquifer Mapping (NAQUIM) ongoing, ~75% complete as of 2024. Block-level safe / semi-critical / critical / over-exploited classification.

**CPCB — quality.** ~4,484 water quality stations across rivers, lakes, groundwater. Monthly to quarterly readings. 311 polluted river stretches identified (the count has hovered there for years). State PCBs run additional stations.

**India-WRIS.** National portal stitching CWC + CGWB + IMD + CPCB. Reservoirs, GW, basins, water quality. Decent UX. Underused. Aggregator, not model.

**ISRO / NRSC.** Bhuvan portal — water bodies (NDWI), drought indicators, snow cover, wetland atlas (2011, dated). NRSC drought + flood products operational.

**SAC / NWI 2011.** 2.25 lakh wetlands mapped at 1:50,000. Latest comprehensive: 2011. Incremental updates haven't replaced.

**FSI — Forest Survey.** Biennial assessment, latest ISFR 2023. Catchment forest cover at 23.5m resolution.

**JJM dashboard.** Household tap connection coverage, real-time, daily. State-reported.

**Atal Bhujal dashboard.** Village water budgets in 8,000+ Gram Panchayats across 7 stressed states. Real-time.

**International / free:**

- **GRACE / GRACE-FO** (NASA gravimetry). Basin-scale groundwater changes. Showed Northwest India losing ~17 cubic km/year — the most striking single piece of Indian water data ever produced. By an American satellite. Indian agencies do not operationalize it.
- **HydroSHEDS** — global river network, basin boundaries, free, well-used by researchers.
- **Sentinel / Landsat / MODIS** — satellite imagery, free, well-used by researchers.
- **CHIRPS, ERA5** — rainfall reanalysis.
- **WRI Aqueduct** — water risk maps. Heavily used by global corporates with India operations.
- **CMIP6** — downscaled climate projections.
- **ICIMOD HKH** — Himalayan glaciers and basins.
- **SWOT** (NASA Surface Water and Ocean Topography) — new altimetry.

**Civil society + civic:**

- **IndiaWaterPortal** (Arghyam, since 2007) — single largest knowledge archive for Indian water. Heavily used in NGO + academic + journalism.
- **SANDRP** — South Asia Network on Dams Rivers People. Independent dam + river database. Reference for activists and journalists.
- **WELL Labs** — open-data dashboards on basins, applied research. Emerging civic layer.
- **Veditum** — river archive, journalism, walks. Cultural archive of disappearing rivers.
- **CSE / Down to Earth** — water reports, reporting, *State of India's Environment* annual.
- **ATREE, ACWADAM, CEEW** — research-grade reports.
- **The Third Pole, Mongabay India** — water + climate journalism with cross-border coverage.
- **Sikkim Spring Atlas** (state-level, methodology model).
- **Meghalaya Springshed Mission** (state-level implementation).

## Tempo — how current is what?

Different data layers operate at very different cadences.

**Real-time (today):** rainfall, dam ops, flood forecasts, JJM tap connections, IMD weather + cyclone tracking.

**Daily-weekly:** CWC reservoir bulletin (Thursday weekly, ~150 reservoirs), river flow at major stations during monsoon, satellite NDVI + water bodies.

**Monthly-quarterly:** CPCB water quality (mostly grab samples), agricultural electricity consumption (proxy for GW pumping).

**4×/year only:** CGWB groundwater levels. The most-watched aquifer in the country measured four times a year.

**Annual:** CWC Water Yearbook, CGWB Ground Water Yearbook, CPCB Annual State of Water Quality (typically 6-12 month publication lag), STP performance reports.

**Biennial:** ISFR (Forest Survey).

**Periodic, slow:** GEC every 2-3 years, NAQUIM ongoing, NFHS every ~5 years (latest NFHS-5, 2019-21), Census (should have been 2021, didn't happen — major denominators uncertain).

**Decadal+:** National Wetland Inventory (2011, 13 years stale), glacier inventory (last comprehensive ~2014, fragmentary updates), spring inventories (Sikkim 2008, Meghalaya, others absent).

**Lagged + post-event:** disaster losses (state DDMAs, months late, partial), NMCG Ganga monitoring (significant lag), JJM water-quality testing (testing protocol exists, aggregated public data inconsistent).

### The tempo problem

The fastest-moving water phenomena in India — flash floods, GLOFs, contamination spikes, aquifer collapse acceleration, cyclone-driven cloudbursts — operate at hourly-to-monthly timescales. The data infrastructure operates at quarterly-to-decadal timescales. **There is a structural mismatch between what's happening and what's measured.** We are watching a 4K phenomenon through a 240p camera.

## Is the data groundtruthed?

The honest answer is that **data quality in India follows political incentive.** Where the cost of dishonesty is acute (cyclone deaths, dam operations), data is decent. Where dishonesty has political payoff (sewage compliance, JJM water quality, polluter monitoring), data is poor.

### Generally credible

- **IMD rainfall.** Manned stations regularly calibrated. Satellite-radar-gauge cross-checks. Limitations: AWS sensor drift; cloudburst detection at fine spatial resolution is weak.
- **Forest cover (FSI).** Methodology public, satellite-based, independently verifiable. Critique exists ("plantation = forest") but the data integrity is high.
- **Census + NFHS** when they happen. Internationally peer-reviewed sampling. Major problem: Census 2021 delayed/skipped — all population denominators are estimates.
- **Cyclone tracking.** Track forecasts strong; lives saved (1999 Odisha super-cyclone ~10,000 dead → recent comparable storms <100). Direct political cost of error.
- **GRACE satellite GW.** Independent NASA observation. Confirms CGWB direction, sometimes more starkly.

### Partially credible, politically inflected

- **Reservoir levels.** Dam operators are the data source — direct conflict of interest with release decisions tied to political pressure. Karnataka and Tamil Nadu have publicly accused each other of tampering during Cauvery low-flow periods. Independent verification rare.
- **River flow.** Discharge measurements at flood stage are notoriously imprecise (rating curves break at extremes). Many CWC stations have outdated rating curves. Sediment data sparse.
- **Groundwater level.** Direction (declining) is solid. Fine resolution is suspect — wells abandoned but listed, manpower constraints mean scheduled readings missed. Quality testing inconsistent across stations.
- **Water quality (CPCB).** Grab-samples miss spike events. Lab quality varies — some State PCB labs are NABL-accredited, many aren't. Yamuna BOD readings show same-day divergence between Delhi Pollution Control Committee and CPCB. Independent academic measurements often higher than official.

### Largely uncredible / routinely disputed

- **STP performance.** Self-reported by SPCBs. CAG + NGT audits have repeatedly flagged misreporting. Design capacity vs actual treatment vs effluent quality routinely diverge. Compliance is reported when standards are exceeded.
- **JJM "functional household tap" coverage.** CAG audits 2022 + 2024 flagged: definition slippage (counted on day of installation, not continuous service), unverified state reporting, completion rates inflated. Real-world functionality often well below dashboard.
- **JJM tap water quality.** Field Testing Kit (FTK) testing variable by state. Lab confirmation for tiny subset. Aggregated data not consistently published. The contradiction with the celebrated tap-coverage KPI is politically sensitive.
- **Industrial OCEMS** (Online Continuous Emission Monitoring System). Mandated since 2014 for 17 categories. Tampering documented: sensor manipulation, "convenient" downtimes during inspections, corrupted timestamps. NGT has prosecuted some cases. Public access heavily restricted.
- **Disaster loss data.** State DDMAs partial, lagged. Methodology inconsistent across states. Political pressure for higher numbers (more relief) or lower (less embarrassment) depending on context.
- **Atal Bhujal village water budgets.** Self-reported by village committees. ICAR + research institutes have flagged template-completion vs actual measurement.

### The honest hierarchy of trust

1. IMD rainfall + Census/NFHS (when they happen) + FSI satellite + GRACE → high trust.
2. CWC operational dam ops + IMD cyclone → high trust (acute cost of error).
3. CGWB groundwater (direction) → trustworthy; resolution dubious.
4. CPCB water quality → mixed; baseline trustworthy, individual readings disputed.
5. STP performance + JJM functionality + OCEMS → low trust; routine misreporting documented.
6. Disaster loss accounting → political artefact.

### The ungroundtruthed core

The most important measurements for water-as-public-good — household tap water quality, sewage discharge compliance, industrial discharge, groundwater abstraction — are exactly the ones with the weakest groundtruthing. The system measures what is politically safe and aspires to measure what is politically inconvenient. **Data quality is endogenous to political incentive.**

Building independent verification capacity (citizen science, third-party labs, civic auditors) is itself a public-good intervention. This is one of the load-bearing reasons that `build-plan.md` Phase 3 (citizen science + verification) is structured the way it is.

## How the data is used (or isn't)

Even the data that exists mostly fails to drive decisions.

**Used reasonably well:**
- IMD forecasts in agromet advisories and disaster early warning.
- CWC reservoir + flood forecasting for dam operations and short-horizon flood ops.
- IDSP (Integrated Disease Surveillance Programme) for some outbreak response.

**Collected but not driving decisions:**
- CGWB classification informs scheme eligibility (which blocks qualify for which scheme). It does not change pricing, electricity policy, or extraction limits in over-exploited blocks.
- CPCB river stretch classification: 311 polluted stretches listed for years. Few prosecutions. No pricing of pollution.
- NMCG Ganga BOD has improved marginally despite ₹38,000+ cr spent. Tributaries (Yamuna, Hindon, Ramganga, Kosi) remain catastrophic. Data shows the failure; intervention does not update.
- JJM tap-connection KPI is celebrated. JJM water-quality testing data exists but isn't aggregated. The two data streams don't talk to each other politically.

**Public access is near-zero in real time.** No equivalent of a Bhujal app. No live aquifer dashboard. No live water-quality view. Citizens cannot be stakeholders in a system they cannot see. Investigative journalism uses CWC/CGWB sporadically; most reporting is event-driven.

**Cross-agency stitching is broken.** IMD rainfall + CGWB recharge + CWC discharge + CPCB quality should be one model. They are six agencies under different ministries with different data formats and update cycles. India-WRIS attempted aggregation; it is a portal, not a model.

**Climate scenarios aren't integrated into allocation.** IMD/IITM produce climate projections. Cauvery, Krishna, Indus allocations don't use them. Tribunals use historical stationary data. Every existing allocation is therefore wrong relative to what is coming.

**Data-driven enforcement is missing.** CPCB knows polluters. NGT acts case by case. State PCBs are politically captured. The data exists; the enforcement architecture doesn't translate it into consequence.

## Cross-domain comparison

India built strong public information for cyclones. IMD does well; deaths fell from ~10,000 in the 1999 Odisha super-cyclone to <100 in recent comparable storms. The political cost of failure is acute and there is no political coalition that benefits from cyclone deaths.

India built COVID-19 dashboards in weeks under acute crisis + international pressure + no political vote bank in opacity.

India built AQI dashboards in cities under pressure from urban middle-class campaigning, especially Delhi. Real-time public AQI is now baseline.

For water: chronic opacity protects political settlements. The constituency that benefits from transparency (rural poor, women, tribals, downstream, future) is politically marginal. The constituency that benefits from opacity (paddy farmers in the GW belt, polluting industries, state water bureaucracies, state electricity boards) is politically central.

**Water information as public good will get built when the affected become politically consequential, OR when an acute crisis aligns urban middle-class interest with the public-good frame.** Bengaluru's repeated near-Day-Zeros may eventually deliver the latter.

## What an honest groundtruthed system would look like

Sketch (developed concretely in `build-plan.md`):

- **Sensing layer:** real-time aquifer telemetry at 10× current density (~250,000 wells, sub-daily). Continuous water quality sensors (multi-parameter — TDS, pH, DO, BOD, F, As, NO₃) at ~50,000 stations. Mandatory sewage outflow monitoring at every STP and CETP. Glacial lake monitoring at the 200+ ICIMOD-flagged dangerous lakes. Soil moisture network at farm scale. Spring discharge monitoring in mountains. Coastal salinity sensors. Groundwater abstraction metering at pump head — the single most important missing measurement.
- **Integration layer:** federated API across IMD + CWC + CGWB + CPCB + state PCBs + ISRO. Common units, schemas, geospatial reference. Climate scenario integration.
- **Verification layer:** independent citizen science network. Standardized testing protocols. Third-party lab partnerships. Public reports comparing official vs citizen + lab measurements. The audit muscle that makes the state honest.
- **Access layer:** citizen-grade dashboards. Multi-language. Voice/SMS for low-literacy. Open APIs.
- **Modeling layer:** basin digital twins, aquifer governance models, urban flood inundation, water-energy-food nexus.

The bet behind this: India does not lack data. It lacks a public-good information system. Building one is plausibly the single most leveraged intervention in Indian water — see `build-plan.md`.

## The lag tax

Even where the data exists and is broadly trustworthy, the lag between measurement and publication does its own damage. Every important Indian water decision class — annual scheme allocation, monsoon planning, drought relief, polluter prosecution, basin allocation — runs on a different clock than the dataset that should inform it. The mismatch is the lag tax.

Approximate publication lags for the seven national datasets that drive policy:

- **IMD daily gridded rainfall + AWS network** — real-time to T+1 day. The fastest-moving Indian water dataset. Operationally connected to agromet advisories and disaster early warning. The benchmark for what good lag looks like.
- **JJM dashboard** — daily, state-self-reported. Latency low; trust low (see CAG audit findings on functional-tap definition slippage). Speed without verification is its own pathology.
- **CWC Weekly Reservoir Storage Bulletin (Thursday)** — weekly, ~150 major dams. Adequate for reservoir ops, late for monsoon-onset planning that needs sub-weekly resolution at the basin scale.
- **CPCB monthly to quarterly grab samples** — ~30-90 day lag at station level; aggregated state-of-water-quality reports run **6-12 months behind**. Polluter prosecution that hinges on these readings is therefore structurally a year late by the time the case file leaves the agency.
- **CWC Annual Water Yearbook** — typically released **9 months** after the close of the water year. Useful for retrospective basin assessment; useless for the next year's allocation tribunal.
- **NMCG STP performance + Ganga monitoring** — routinely **6+ months** behind, sometimes more. The reporting cadence is decoupled from the political cadence (river health is a Lok Sabha question; the data answers a question that was asked the previous session).
- **CGWB Ground Water Estimation (GEC)** — **12-18 months** from end-of-cycle to public release. The 2023 GEC was released September 2024. Block-level safe / semi-critical / critical / over-exploited classification therefore lags real abstraction reality by close to two years. Scheme eligibility (which blocks qualify for what) sits on a snapshot already invalidated by the time it is published.
- **ISFR (Forest Survey)** — biennial, ~6 months from cutoff to release. Reasonable for a slow-moving variable.
- **National Wetland Inventory + Atlas** — **decadal+**. The current canonical inventory is 2011. Thirteen-year lag on a layer that is being lost faster than the lag period itself. By the time the next NWIA is released, an unknown fraction of what it documents will already be encroached or drained.

Stack the lags against the decisions they should inform and the picture is brutal:

- **Annual budget cycles** (Feb-March) reach for last-fiscal-year scheme outturn data + previous-year sectoral KPI data. Two-year-old groundwater classification is the input for next-year allocation.
- **Monsoon planning** (May-June) wants high-resolution sub-weekly basin-scale storage + GW + soil moisture forecasts. It gets weekly storage + four-readings-a-year GW + zero soil moisture at scale.
- **Drought relief** is reactive by design — the trigger is rainfall deficit + crop loss reports + DC declarations, not aquifer state. The most relevant data (GW levels, soil moisture, surface storage) is available too coarsely to drive proactive allocation.
- **Polluter prosecution** under the Water Act 1974 + EPA 1986 needs admissible chain-of-custody readings. Grab samples + 6-12 month lab certification + politically captured State PCBs collapse most cases. NGT prosecutions that succeed do so on independent academic readings, not CPCB monthly grabs.
- **Inter-state allocation** under tribunal awards relies on historical hydrology that is no longer valid under climate non-stationarity. The CMIP6 downscaled projections from IMD/IITM exist; tribunals don't use them. The lag here is institutional, not temporal — but it functions as lag.

The lag tax is not uniformly distributed. The places where India runs at IMD-cyclone speed (rainfall, dam ops, JJM coverage KPI) are exactly the places where the political cost of being slow is acute. The places that lag a year or more (groundwater, water quality, wetland inventory, sewage compliance) are exactly the places that protect a politically captured settlement. **Lag is a feature, not an accident.**

## The dark data

Beyond the lagged but published datasets, there is a second layer: data that is collected but not findable, not downloadable, or not standardised. This is the dark data — the part of the iceberg under the waterline.

- **State PHED + state water department reports** sit in state-government PDF archives, often with broken DMS links, undated revisions, no download index. A researcher trying to assemble a national picture from state-level public-health-engineering reports must manually crawl 28 state portals + 8 UT portals; many state portals have been redesigned twice in five years with no URL persistence. The data exists; the discoverability is hostile.
- **CPCB monitoring station raw data** is exposed on dashboards designed for visual consumption. There is no national CSV export across the 4,484 station-months of readings. Researchers reverse-engineer the dashboard via scraping or RTI; both are obstacle courses.
- **Industrial OCEMS** (Online Continuous Emission Monitoring System), mandated since 2014 for 17 categories of polluting industries, generates real-time discharge data at high resolution. The data is **legally restricted from public access**. SPCBs hold it. Tampering is documented (sensor manipulation, "convenient" downtimes during inspections, corrupted timestamps). The single largest near-real-time water-pollution dataset in India is dark by design.
- **Municipal water utility billing data** would be the gold-standard urban demand signal — household-scale consumption × tariff × non-revenue water × leakage. Most ULBs do not publish billing data even in aggregate; many do not have machine-readable billing systems at all. Bengaluru, Chennai, Delhi, Mumbai have partial visibility; the next 100 cities by population have effectively none.
- **State PCB lab calibration logs.** Some State PCB labs are NABL-accredited; many aren't. Calibration logs that would let a researcher weight readings by lab quality are not published. Yamuna BOD divergence between DPCC and CPCB is a public anomaly because Delhi has activist scrutiny; the same divergence in 28 other states is invisible.
- **JJM water-quality testing** at the field-testing-kit level is performed in tens of millions of samples annually. State-level lab confirmation rates are inconsistent. Aggregated national data is not consistently published. The contradiction with the celebrated tap-coverage KPI is politically sensitive — the dark data is dark on purpose.
- **State-government tubewell registries.** Most states maintain registers of drilled tubewells through their PHED + agricultural electricity connection records. Cross-walking these to CGWB monitoring well data would dramatically improve abstraction estimation. The cross-walk has never been done at scale, and the underlying state registers are not openly available.
- **Reservoir release decisions and operating logs** at major dams are operational. The decision audit trail (why a release happened on a specific date, who authorized) is not. Karnataka and Tamil Nadu's mutual accusations of Cauvery tampering during low-flow years rely on inference because the operating logs are dark.
- **Inter-state river water-sharing tribunal evidence files.** Tribunal proceedings span decades; the technical evidence submitted by states is rarely published in machine-readable form. This is the single largest unpublished hydrology archive in India.

The pattern: **the most consequential datasets in Indian water — abstraction, discharge compliance, urban demand, tribunal hydrology, JJM functionality — are exactly the ones that are dark.** The legal data infrastructure catalogued earlier in this file is the visible iceberg; the dark data is the bulk that determines what the visible part means.

## Five questions a citizen or funder cannot currently answer

A practical test of any data infrastructure is the questions it cannot answer for the people who need them. Five concrete examples that are unanswerable today, despite all the agencies and dashboards already enumerated:

1. **What is the per-capita potable water availability at ward scale in any Indian city?** Bengaluru, Chennai, Delhi, Mumbai have partial supply data; ward-scale is unavailable in any of them. Smart Cities Mission promised this; the deliverable is missing in every Tier-1 city.
2. **What is the actual functionality rate of JJM connections in a given block today?** The dashboard reports installation. Functionality is reported aspirationally. The CAG-2024 audit flagged the gap. There is no real-time view of functional-vs-installed at block resolution.
3. **What is the groundwater abstraction at pump-head in any over-exploited block?** ~6,500+ blocks are classified over-exploited or critical. None has metered abstraction at extraction point. The classification is built on imputed abstraction from area × cropping pattern × estimated water requirement — the loop is closed, the measurement is not.
4. **What is the discharge composition of any specific industrial outlet in the last 7 days?** OCEMS exists. Public access does not. Independent academic measurements run quarterly at best. The answer for any specific outlet on any specific date is structurally not knowable to anyone outside the agency.
5. **What is the volume of water replenished by any "water-positive" corporate claim, audited?** Coca-Cola, PepsiCo, HUL, Vedanta, Adani, the data-centre cluster all carry such claims. None is third-party-audited under a published methodology. The aggregated CSR water spend is ₹1,000+ cr/year (`funders-ecosystem.md`); the verified replenishment is unknown.

These five are the load-bearing questions for water as public good. The fact that they are unanswerable is the indictment. **A public-good information system that cannot answer them is not a public-good information system.** The build that follows from this folder is partly designed against this short list.

## The citizen-sensor field at ₹100 cr scale

The bottom layer of `gaps.md` (sensing) is where any honest information system has to start. The state operates at ~25,000 wells × 4 readings/yr ≈ 100,000 data points/yr for an aquifer used by ~30 million tubewells. The signal-to-noise is fatal at any scale below the block. Closing this gap entirely from state agency budgets is a 25-year proposition; closing it civically is a 5-7 year proposition.

What's emerging today, at small scale:

- **ACWADAM Bhujal Jankars** — community hydrogeologists trained over the last decade, ~hundreds. The methodology works; the scale is one to two orders of magnitude short of decision-grade.
- **Atal Bhujal village water budgets** — ~8,000 GPs across 7 stressed states. Self-reported, template-completed in many cases (ICAR + research institutes have flagged), but the institutional surface is built.
- **Sikkim Spring Atlas + Meghalaya Springshed Mission** — state-led but methodologically reusable. Springshed inventory + discharge monitoring at fine resolution, springshed-by-springshed.
- **Earth Watch citizen testing** in pockets across MP, RJ, AP for water quality.
- **WELL Labs basin dashboards** — open data infrastructure for selected watersheds, the closest current civic analogue to a basin observatory.
- **Veditum field documentation** along major rivers — qualitative ground-truth at human scale, not sensor data, but a load-bearing complement.
- **Bengaluru Lake Fest sensor experiments + citizen lake watchers** (Friends of Lakes, Sankey Tank citizens, Powai citizens) — episodic water-quality + level monitoring at the urban lake scale.
- **Aquadata, OpenSenseMap India, FluxBase, IIT-Bombay CWRR sensor pilots** — early-stage open-hardware + low-cost-sensor experiments. None operational at scale.

What's plausible at ₹100 cr deployed civically over 5 years, ordered by leverage:

- **10,000 community piezometers** at ~₹40-60k each installed (₹40-60 cr) covering ~2,500 critical/over-exploited blocks with 4 wells each. Sub-daily groundwater telemetry rather than four-readings-a-year. Operationally close to the *Bhujal Jankar* model with sensor backend; institutional ownership at GP level. **The single highest-leverage investment in Indian water sensing.**
- **5,000 multi-parameter water-quality nodes** at ~₹60-100k each installed (₹30-50 cr) at scheme tap, rural well, river outfall, sewage discharge, industrial outflow. Continuous TDS + pH + DO + BOD + fluoride + arsenic + nitrate. Targeted on the 311 polluted river stretches + the Punjab/Haryana/Bihar arsenic-fluoride belt + the JJM scheme tap subset.
- **2,000 STP outflow flow + quality meters** at ~₹2-5 lakh each installed (₹10-15 cr) covering the largest 500 STPs nationally with chain-of-custody-grade independent monitoring. The audit muscle for the sewage-compliance dark data.
- **A ground-truth network for 50,000 JJM connections** sampled to give state-level statistical power on functionality + quality (₹10-15 cr at ₹2-3k per sampled connection annually). Independent of the dashboard. Designed to expose or confirm the CAG-flagged definition slippage.
- **A civic data trust** — the institutional vehicle that holds, curates, and publishes all of the above. Section 8 / Section 25 with multi-funder governance, FCRA-compatible structure, professional staff (~30-50 FTEs), open APIs. Capex ~₹3-5 cr, opex ~₹15-25 cr/year. **The institutional bottleneck is not the sensors; it is the trust.**

Total approximate cost: ~₹100-130 cr capex over 3-5 years + ~₹30-40 cr/year opex at full scale — comparable to the budget of a single mid-sized urban water-supply scheme augmentation. The deliverable is national real-time visibility on the five questions above. The bet, from `gaps.md` Layer 1: **sensors are missing because someone benefits from them being missing, not because they are unaffordable.** A civic-side build sidesteps that political economy at the sensing layer; the access + decision layers above (4 + 6) still have to fight that fight, but they can fight it with data.

Two open threads this section does not resolve, picked up in `build-plan.md`:

- The right balance between **proprietary sensor stacks** (IoT vendor lock-in, faster deployment) versus **open hardware** (slower, cheaper at scale, fits the public-good frame). The honest answer is probably a hybrid pegged to readiness in each category.
- The **legal posture of community-collected data** under the existing Water Act 1974 + EPA 1986 + Information Technology Act 2000 + CrPC chain-of-custody requirements. Citizen water-quality data can be admissible in NGT proceedings under specific conditions; the legal infrastructure for a civic data trust to litigate on its own readings is unbuilt.

Sensing is one layer. The full stack runs from sensing through imagination — see `gaps.md` for the seven-layer frame, and `build-plan.md` for the construction logic that runs all seven in parallel.
