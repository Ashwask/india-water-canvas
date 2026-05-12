# Data inventory — companion catalog

This file is a reference appendix to `data-and-groundtruth.md`. The argument lives there; the catalog lives here. Where the prose file claims India has more water data than is widely understood and that the problem is fragmentation + latency + dark-data + politically-endogenous quality, this file is the row-by-row evidence behind that claim.

Trust grades follow the hierarchy in `data-and-groundtruth.md`: **gold** = instrumented and audited, broadly credible; **silver** = direction trustworthy, fine resolution dubious or partially self-reported; **bronze** = useful but mixed/episodic, requires triangulation; **red** = routinely disputed or politically captured, do not cite without context.

Numbers are training-era public sources. Where a figure could be off by ±30%, treat it as directional. Dataset shapes (cadence, coverage, access tier) are sturdier than counts.

---

## 1. Groundwater

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| CGWB Groundwater Database | Central Ground Water Board / Jal Shakti | gwdata.cgwb.gov.in | Depth-to-water-level, seasonal trends | ~25,000 monitoring wells, district-aggregable | 4 readings/yr (Jan, May, Aug, Nov) | 3-6 months at station; 12-18 months for GEC report | CSV download + dashboard | gold (direction); silver (resolution) | <2% wells have specific yield; abandoned wells listed but not measured |
| Ground Water Estimation (GEC) | CGWB + state GW depts | cgwb.gov.in | Block-level safe / semi-critical / critical / over-exploited | 6,500+ blocks | 2-3 yearly cycles | 12-18 months from cycle close | PDF reports + dashboard | silver | Latest 2023; built on imputed abstraction, not metered |
| NAQUIM (National Aquifer Mapping) | CGWB | cgwb.gov.in/AQM/NAQUIM.html | Aquifer geometry, yield | ~25 priority states | One-shot mapping, ongoing updates | ~75% complete as of 2024 | PDF maps + GIS | silver | Incomplete; update cadence undefined |
| India-WRIS GW module | National Water Informatics Centre / Jal Shakti | indiawris.gov.in | Aggregator over CGWB + state | National | Mixed cadence | 1-12 months | Open download | silver | Aggregator, not model; some basins lag to 2020 |
| Atal Bhujal village water budgets | Jal Shakti + World Bank | atalbhujal.mowr.gov.in | Village-level water budget templates | 8,000+ GPs, 7 stressed states | Annual GP-level | 6-12 months | Dashboard | bronze | Self-reported; ICAR has flagged template-completion vs measurement |
| State GW dept data (28 states + UTs) | State GW authorities | varies | Tubewell registers, drilling permits, scheme records | State-specific | Ad hoc | Varies | PDF in state portals; mostly not machine-readable | bronze (varies state-to-state) | Discoverability hostile; URL persistence weak |
| GRACE / GRACE-FO | NASA | grace.jpl.nasa.gov | Basin-scale total water storage anomaly | ~150 km native, downscaled to basin | Monthly | ~2-3 months | Open | gold | Cannot distinguish soil moisture from groundwater without auxiliary; signal-to-noise weak at sub-basin |
| INCOIS coastal aquifer data | Indian National Centre for Ocean Information Services | incois.gov.in | Coastal salinity intrusion, sub-aerial GW | Coastal districts | Mixed | 6-12 months | Restricted + dashboard | bronze | Coverage thin; few stations |
| Bhujal Jankar field readings | ACWADAM + community | not centrally hosted | Community-collected GW levels, recharge | Site-by-site, ~hundreds of GPs | Variable | 0-6 months | Per-org repositories | bronze (high trust within community network; not standardised) | Methodology defensible; aggregation absent |

## 2. Surface water

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| CWC Hydrological Observation Stations | Central Water Commission | cwc.gov.in | River discharge, water level, sediment | ~878 stations on rivers | Daily during monsoon; varied off-season | Real-time for flood; 9 months for Yearbook | Telemetered subset open; full dataset restricted | gold (operations); silver (deep history) | Rating curves outdated at many stations; sediment data sparse |
| CWC Weekly Reservoir Storage Bulletin | CWC | cwc.gov.in/reservoir-storage | Reservoir levels at major dams | ~150 dams | Weekly (Thursday) | 0-7 days | Open download | gold (level); silver (release decisions) | Dam-operator-reported; KA/TN have publicly accused tampering during low-flow |
| CWC Annual Water Yearbook | CWC | cwc.gov.in | Basin-scale water accounts | Major + medium basins | Annual | ~9 months | PDF | silver | Useful retrospectively; useless for next-year tribunals |
| NRSC Reservoir Level Dashboard | NRSC / ISRO | bhuvan-app1.nrsc.gov.in | Satellite-derived reservoir surface area + level | ~150-200 reservoirs | 10-day | 10-15 days | Dashboard | silver | Coarse spatial; reservoir-only |
| India-WRIS surface water | NWIC | indiawris.gov.in | Aggregator | National | Mixed | 1-12 months | Open download | silver | Aggregator, not model |
| State irrigation department data | 28 state irrigation depts | varies | Canal flows, irrigation off-take | State-specific | Variable | Variable | PDF; rarely machine-readable | bronze | Highly variable quality state-to-state |
| NWDA (National Water Development Agency) | Jal Shakti | nwda.gov.in | River-linking studies, basin transfers | Inter-basin | One-shot studies | Variable | PDF | bronze | Politically charged; methodology contested |
| Flood Forecasting Network | CWC | ffs.tamcnhp.com | Flood forecasts at 332 stations across 22 basins | 332 stations | Hourly during monsoon | Real-time | Dashboard | gold (operational) | Coverage weak in NE + Himalayan basins |

## 3. Rainfall and climate

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| IMD Daily Gridded Rainfall | India Meteorological Department | imdpune.gov.in | Daily rainfall | 25 km × 25 km grid | Daily, 1901-present reanalysis | Real-time to T+1 | Open download (NetCDF/CSV) | gold | Cloudburst detection at fine spatial resolution weak |
| IMD AWS network | IMD | mausam.imd.gov.in | Temperature, rainfall, humidity, pressure | ~1,500 AWS + ~700 manned stations | Hourly to daily | Real-time | Open + Mausam app | gold | AWS sensor drift; uneven density |
| IITM Pune climate model output | IITM Pune | tropmet.res.in | Monsoon prediction, climate scenarios | Subcontinental | Seasonal + decadal | Variable | Reports + datasets | gold | Operational coupling to allocation rare |
| CHIRPS (Climate Hazards Group InfraRed Precipitation with Station data) | UCSB / USGS | chc.ucsb.edu/data/chirps | Quasi-global rainfall | 5 km × 5 km grid | Daily, 1981-present | T+3 weeks | Open download | gold | International product; cross-checked against IMD |
| ERA5 reanalysis | ECMWF (Copernicus) | climate.copernicus.eu | Comprehensive atmospheric reanalysis | 31 km × 31 km grid | Hourly, 1940-present | T+5 days | Open download | gold | Resolution coarse for hyperlocal analysis |
| Skymet | Skymet Weather Services | skymetweather.com | Forecasts + AWS network | ~6,000 weather stations | Hourly | Real-time | API + dashboard (paid for premium) | silver | Private; data not openly shared |
| NCMRWF (medium-range forecast) | National Centre for Medium Range Weather Forecasting | ncmrwf.gov.in | 5-15 day forecasts | National | Daily | Real-time | Dashboard | gold | Coupled to agromet advisory |
| CMIP6 downscaled projections | IMD/IITM + global | ccdr.iitm.ac.in (partial) | Climate scenarios for India | Variable | Per scenario | Snapshot | Mixed access | gold (science); silver (operational use) | Tribunals don't use them |

## 4. Satellite / remote sensing

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| Bhuvan portal | NRSC / ISRO | bhuvan.nrsc.gov.in | Water bodies (NDWI), drought indicators, snow cover, land use | National, multi-resolution | Variable | 1-30 days | Dashboard + selective download | gold (raw); silver (UX + access) | National datasets locked behind dashboard with no bulk export |
| Sentinel-1 / Sentinel-2 | ESA Copernicus | dataspace.copernicus.eu | Radar (S1) + multispectral (S2) | 10-20 m | 5-12 days | T+1-5 days | Open download | gold | Indian institutional uptake uneven |
| Landsat 8 / 9 | USGS / NASA | earthexplorer.usgs.gov | Multispectral | 30 m | 16 days | T+1-3 days | Open download | gold | Coverage gaps under cloud during monsoon |
| MODIS | NASA | modis.gsfc.nasa.gov | Daily vegetation, water, snow | 250 m - 1 km | Daily | T+1-3 days | Open download | gold | Coarse for parcel-scale analysis |
| Cartosat / ResourceSat | NRSC / ISRO | bhoonidhi.nrsc.gov.in | High-res optical | 1-23 m | Variable | Variable | Restricted + paid for high-res | silver | High-res is paywalled / institutional access only |
| SARAL / AltiKa | ISRO + CNES | aviso.altimetry.fr | Inland water altimetry | Track-based | ~35 days | 1-2 months | Open download | gold | Track coverage thin over India |
| ICESat-2 | NASA | icesat-2.gsfc.nasa.gov | Ice + inland water level | Track-based | 91-day repeat | T+1-3 months | Open download | gold | Track-based coverage |
| SWOT (Surface Water and Ocean Topography) | NASA + CNES | swot.jpl.nasa.gov | Surface water elevation + extent | 50-100 m | 21-day repeat | T+1-2 months | Open download | gold (new mission, 2022+) | Operational uptake nascent |
| HydroSHEDS | WWF + USGS | hydrosheds.org | Global river network, basin boundaries | 90 m - 500 m | Static | N/A | Open download | gold | Global product; India-specific updates rare |

## 5. Water quality

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| CPCB Water Quality Network | Central Pollution Control Board | cpcb.nic.in | BOD, COD, DO, pH, turbidity, heavy metals at rivers/lakes/GW | ~4,484 stations | Monthly to quarterly grab samples | 30-90 days at station; 6-12 months for state-of-water-quality reports | Dashboard (no CSV bulk export) | bronze | Lab quality varies; many State PCB labs not NABL-accredited |
| CPCB Polluted River Stretches | CPCB | cpcb.nic.in/water-pollution | 311 polluted river stretches identified | National rivers | Periodic | 6-12 months | PDF | bronze | Count has hovered; few prosecutions follow |
| State PCB monitoring | 28 state PCBs + 8 UT PCBs | varies | Additional WQ stations beyond CPCB | State-specific | Variable | Variable | Mixed; mostly behind dashboards | red (partially captured politically) | Politically inflected; calibration logs rarely public |
| OCEMS (Online Continuous Emission Monitoring) | Industries + SPCBs | restricted | Real-time effluent at 17 industry categories | Plant-by-plant, ~5,000+ industries | Real-time | Real-time within agency | Legally restricted from public access | red (tampering documented) | Sensor manipulation, "convenient" downtimes; NGT prosecutions rare |
| NMCG Ganga Water Quality Network | National Mission for Clean Ganga | nmcg.nic.in | BOD, DO, faecal coliform along Ganga main stem + tributaries | 97+ stations on Ganga + tributaries | Monthly | 6+ months | Dashboard | bronze | Tributaries (Yamuna, Hindon, Ramganga, Kosi) data poorer than main stem |
| ENVIS centres | Ministry of Environment Forest and Climate Change | envis.nic.in | Environmental data including water | Topical | Variable | Variable | Reports | silver | Quality varies dramatically by centre |
| Independent academic measurements | IITs, IISc, ATREE, NEERI, others | per-publication | Peer-reviewed sample-based studies | Site-specific | Variable | Per study | Journal publication | gold (study-level); not aggregated | Often higher BOD than official; shows divergence |
| DPCC (Delhi-specific) | Delhi Pollution Control Committee | dpcc.delhigovt.nic.in | Yamuna BOD, ambient WQ | Delhi | Monthly | 1-3 months | Dashboard | bronze | Same-day divergence with CPCB on Yamuna documented |

## 6. Drinking water / supply

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| JJM dashboard | Department of Drinking Water and Sanitation / Jal Shakti | ejalshakti.gov.in/jjmreport | Household tap connections, scheme progress | National, district, GP, village | Daily | T+1 | Dashboard | red (functionality); gold (installation count) | CAG 2022 + 2024 flagged definition slippage on functional tap |
| JJM Field Test Kit (FTK) WQ data | DDWS | ejalshakti.gov.in | Tap water quality at FTK level | Tens of millions of samples | Continuous | Aggregation inconsistent | Mixed | red | National aggregate not consistently published; politically sensitive |
| IMIS (Integrated Management Information System) | DDWS | ejalshakti.gov.in/imis | SBM + JJM + other DDWS schemes | National | Variable | T+30 days | Dashboard | silver | Multiple sub-systems; cross-walking weak |
| State PHED reports | 28 state Public Health Engineering Departments | varies | Scheme inventories, supply data, billing | State-specific | Variable | Variable | PDF in state portals | bronze (varies); often dark data | Discoverability hostile; many state portals redesigned without URL persistence |
| AMRUT 2.0 dashboard | MoHUA | amrut.mohua.gov.in | Urban water supply, sewerage progress in 500+ cities | Cities | Variable | T+30 days | Dashboard | silver | Self-reported; structural CAG audit pending |
| Smart Cities Mission water layer | MoHUA | smartcities.gov.in | City-by-city water + smart-utility deployments | 100 cities | Variable | T+30 days | Dashboard | silver | Outcome metrics weak |
| WaterAid India operational data | WaterAid India | wateraidindia.in | WASH programmatic + research | ~200+ districts | Variable | Variable | Reports | gold (research); not bulk-downloadable | NGO scope-limited |
| Municipal water utility billing | Bengaluru BWSSB, Chennai Metro Water, DJB, MCGM, others | varies | Household-scale consumption, tariff, NRW | City-specific | Monthly billing cycle | Variable | Mostly not public | bronze | Gold-standard urban demand signal but mostly locked |

## 7. Wetlands

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| National Wetland Inventory and Atlas (NWIA) | SAC / ISRO | indianwetlands.in | 2.25 lakh wetlands at 1:50,000 | National | One-shot | 13+ years stale (2011 baseline) | Open + GIS | silver | No comprehensive update since 2011 |
| Ramsar Site Information Sheets | Ramsar Convention | rsis.ramsar.org | 89 Indian Ramsar sites | Site-by-site | Per nomination | Variable | Open | gold | Coverage limited to Ramsar sites |
| Asian Waterbird Census | Wetlands International | south-asia.wetlands.org/our-approach/healthy-wetland-nature/asian-waterbird-census | Annual waterbird counts | ~150+ Indian sites | Annual (Jan) | T+6 months | Reports | gold | Bird-as-proxy; not direct wetland health |
| SACON (Salim Ali Centre) | Ministry of EFCC | sacon.in | Wetland + waterbird research | Selected sites | Variable | Per study | Reports | gold (research) | Coverage uneven |
| State wetland authorities | 28 state wetland authorities | varies | State-level wetland inventories under WL(C&M) Rules 2017 | State-specific | Variable | Variable | PDF | bronze | Implementation patchy |
| Wetlands International South Asia | Wetlands International | south-asia.wetlands.org | Assessments + management plans (WIAMS) | Selected wetlands | Per project | Variable | Reports | gold | Project-bound; not national real-time |

## 8. Glaciers and cryosphere

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| GSI Glacier Inventory | Geological Survey of India | gsi.gov.in | Glacier inventory | Himalayan range | Decadal | Last comprehensive ~2014 | PDF + GIS | silver | Fragmentary updates since 2014 |
| NIH-Roorkee glacier work | National Institute of Hydrology | nih.ernet.in | Glacier mass balance research | Selected glaciers | Variable | Per study | Reports | gold (research) | Coverage thin |
| IIRS Dehradun cryosphere | Indian Institute of Remote Sensing | iirs.gov.in | Satellite-based snow + ice | Himalayan | Variable | Variable | Reports + GIS | silver | Not operationally fed to allocation |
| ICIMOD Hindu Kush Himalaya | International Centre for Integrated Mountain Development | icimod.org | Cross-border HKH cryosphere + basins | HKH region | Annual reports | T+12 months | Open + reports | gold | India-specific operational uptake weak |
| NCPOR | National Centre for Polar and Ocean Research | ncpor.res.in | Antarctic + Arctic + glacial mass balance | Polar + select Indian glaciers | Variable | Variable | Reports | gold | Polar focus; Indian application secondary |
| ISRO snow cover (Bhuvan) | NRSC | bhuvan-app1.nrsc.gov.in | Snow cover product | Himalayan | 8-16 days | T+1-2 weeks | Dashboard | gold | Bulk export not available |
| Glacial Lake monitoring | Mixed (NRSC + state DDMAs + ICIMOD) | varies | Glacial lake inventory + size monitoring | ~200+ flagged dangerous lakes | Variable | Variable | Reports | bronze | South Lhonak (Oct 2023) was warned in 2018-20 literature; not operationalised |

## 9. Agricultural water demand

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| ICAR-IIWM Bhubaneswar | Indian Council of Agricultural Research | iiwm.icar.gov.in | Irrigation water management research | National | Variable | Variable | Reports | gold (research) | Operational coupling weak |
| ICAR-CRIDA + CACP irrigation data | ICAR / CACP | crida.in | Crop water requirements, MSP cost data | Crop-by-crop | Annual | Annual | Reports | silver | Crop water requirement mostly modelled |
| ICRISAT watershed data | ICRISAT | icrisat.org | Watershed development outcomes | SAT regions | Variable | Per project | Reports | gold | Site-specific |
| WAPCOS irrigation modernisation | WAPCOS Limited | wapcos.gov.in | Project reports on irrigation modernisation | Per project | One-shot | Variable | Reports | silver | Consultancy-grade; not operational data |
| FAO Aquastat India | FAO | fao.org/aquastat/en/countries-and-basins/country-profiles/country/IND | International benchmark for India water-use accounts | National | Variable | T+12-24 months | Open | gold | Lag long; India-specific granularity weak |
| State agricultural electricity consumption | State electricity utilities | varies | Proxy for GW pumping | State-level | Monthly | T+3 months | Mixed access | bronze | Free agricultural electricity removes price signal; data is consumption only |
| Crop area + yield (DES, MoA&FW) | Directorate of Economics and Statistics | desagri.gov.in | Crop-wise area, production, yield | District | Annual | T+12-18 months | Open | silver | Crop water consumption inferred |

## 10. Industrial / urban water

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| CPHEEO | MoHUA | cpheeo.gov.in | Urban water supply standards + benchmarks | Urban | Periodic | Variable | Reports | silver | Standards-grade; not real-time data |
| AMRUT Phase 2 dashboard | MoHUA | amrut.mohua.gov.in | Urban water + sewerage progress | 500+ cities | Monthly | T+30 days | Dashboard | silver | Self-reported by ULBs |
| BIS water quality standards | Bureau of Indian Standards | bis.gov.in | Drinking water + effluent norms | National | Periodic revision | Variable | Reports | gold | Compliance auditing weak |
| Industrial Water Use surveys | CPCB + MoEFCC | varies | Periodic industry-wise water use audits | National | Periodic | T+24+ months | Reports | bronze | Self-reported; coverage uneven |
| SWaCH waste-water + sanitation | SWaCH (Pune cooperative) + NGO networks | swachcoop.com | Sanitation + waste-water at city scale | Pune + select cities | Variable | Variable | Reports | gold | City-bound |
| 2030 Water Resources Group reports | IFC / WRG 2030 | 2030wrg.org | Industry-state-NGO platform for KA, MH, UP | State-level | Per engagement | Variable | Reports | silver | Pre-investment platform; data is summary |
| State Smart Cities water layer | MoHUA via Smart Cities | smartcities.gov.in | Water + utility deployments in 100 cities | City-specific | Variable | T+30 days | Dashboard | silver | Outcome metrics thin |

## 11. Citizen science / open data

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| IndiaWaterPortal | Arghyam | indiawaterportal.org | Knowledge archive, Q&A, data layer | National | Continuous | Real-time content | Open | gold | Aggregator + curation; not raw sensor data |
| Wells of India + community piezometer pilots | ACWADAM + community | per-pilot | Community GW monitoring | Site-specific, ~hundreds GPs | Variable | 0-6 months | Per-org repositories | bronze (high trust within network) | Aggregation absent; standardisation work-in-progress |
| Water Bodies Census | Jal Shakti | jalshakti-dowr.gov.in | Inventory of ponds, tanks, lakes | National (1st: 2017-18; 2nd: 2023) | Decadal-ish | T+12-24 months | Open + dashboard | silver | First census coverage gaps documented |
| Veditum (Moving Upstream + India Sand Watch) | Veditum India | veditum.org | River walks, sand mining records, qualitative archive | Major rivers + tributaries | Continuous | Real-time content | Open | gold (qualitative) | Not sensor data; cultural archive |
| eBird waterbirds India | Cornell + India eBirders | ebird.org | Citizen waterbird observations | Site-by-site | Continuous | Real-time | Open | gold | Bird-as-proxy; not water itself |
| Sikkim Spring Atlas | Sikkim state + research partners | rmdd.sikkim.gov.in | Springshed inventory + discharge | Sikkim springsheds | Continuous since 2008 | Variable | Reports + GIS | gold | State-bound; methodology reusable |
| Meghalaya Springshed Mission | Meghalaya state | meghalaya.gov.in | Springshed mapping + management | Meghalaya | Continuous | Variable | Reports | gold | State-bound |
| Bengaluru civic lake watchers | Friends of Lakes, Sankey, Powai citizens, etc. | varies | Lake water level + visual quality | Per lake | Continuous | Real-time community | Per-group | bronze | Episodic; not standardised |
| OpenSenseMap India | Civic + research collectives | opensensemap.org | Open IoT sensor data including some water | Site-specific | Continuous | Real-time | Open | bronze | Sparse Indian deployment |
| INRENA, FluxBase | Various civic + research | varies | Early-stage IoT water sensors | Site-specific | Continuous | Real-time | Mixed | bronze | Pilot stage |

## 12. Journalism + civil society datasets

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| SANDRP | South Asia Network on Dams Rivers People | sandrp.in | Independent dam + river database, reportage | National | Continuous | Real-time content | Open | gold | Editorial; not sensor data |
| CSE / Down to Earth | Centre for Science and Environment | downtoearth.org.in | *State of India's Environment* annual + water reportage | National | Annual + continuous | T+12 months for SoE | Open | gold | Editorial |
| The Third Pole | Climate-water cross-border journalism | thethirdpole.net | Himalayan + South Asian water + climate reportage | HKH + South Asia | Continuous | Real-time content | Open | gold | Editorial |
| Mongabay India | Mongabay | india.mongabay.com | Environmental + water journalism | National | Continuous | Real-time | Open | gold | Editorial |
| IndiaSpend water reportage | IndiaSpend | indiaspend.com | Data journalism on water | National | Continuous | Variable | Open | gold | Aggregator; depends on underlying data quality |
| Question of Cities | Urban + climate journalism collective | questionofcities.org | Urban water + climate reportage | Urban India | Continuous | Real-time | Open | gold | Urban-focused |
| Mint Lounge / Hindu / Wire / Caravan water reportage | Various | varies | Long-form water reportage | National | Continuous | Real-time | Mixed (some paywalled) | gold (reportage) | Editorial; not data |

## 13. Multilateral

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| World Bank India Water Indicators | World Bank | data.worldbank.org/country/india | National water indicators (renewable resources, withdrawal, access) | National | Annual | T+1-2 years | Open | gold | National aggregates only; sub-national thin |
| WRI Aqueduct | World Resources Institute | aqueduct.wri.org | Water risk maps (stress, depletion, quality) | Sub-basin | Periodic update | Variable | Open | gold | Heavily used by global corporates with India operations |
| FAO Aquastat | FAO | fao.org/aquastat | Country water-use accounts | National | Per cycle | T+12-24 months | Open | gold | Lag long |
| ADB country diagnostic | ADB | adb.org/where-we-work/india | Sectoral + water diagnostics | National + state | Per cycle | Variable | Open + reports | gold | Per-engagement |
| OECD water governance reports | OECD | oecd.org/water | Governance + finance comparison | Cross-country | Per cycle | Variable | Open | gold | India context limited |
| UNESCO WHYMAP | UNESCO | whymap.org | World groundwater map | Global | Periodic | Variable | Open | gold | Coarse for India operational use |

## 14. Academic + research

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| IIT Bombay CWRR | IIT Bombay | cwrr.iitb.ac.in | Water resources research | National + basins | Per project | Per publication | Reports + papers | gold | Coverage research-bound |
| IIT Madras water lab | IIT Madras | civil.iitm.ac.in | Water + environmental research | National | Per project | Per publication | Reports + papers | gold | Coverage research-bound |
| IISc Centre for Sustainable Technologies | IISc Bengaluru | cst.iisc.ac.in | Water + ecology research, urban Bengaluru focus | Bengaluru + national | Per project | Per publication | Reports + papers | gold | Coverage research-bound |
| NIH Roorkee | National Institute of Hydrology | nih.ernet.in | Hydrology research + state advisory | National | Per project | Per publication | Reports | gold | Operational coupling weak |
| ATREE | Ashoka Trust for Research in Ecology and the Environment | atree.org | Ecology + water research | South India + national | Per project | Per publication | Reports + papers | gold | NGO-academia hybrid |
| ACWADAM | Advanced Center for Water Resources Development and Management | acwadam.org | Hydrogeology + community work | National | Per project | Per publication | Reports | gold | Practitioner-oriented |
| CEEW | Council on Energy Environment and Water | ceew.in | Policy research | National | Continuous | Real-time content | Open + reports | gold | Policy-grade |
| WELL Labs | WELL Labs | welllabs.org | Applied water research, basin dashboards | South India + national | Continuous | Real-time | Open + dashboards | gold | Early-stage; emerging civic data layer |
| TISS Hyderabad water + sanitation | TISS | tiss.edu | Water + sanitation policy research | National | Per project | Per publication | Reports | gold | Coverage policy-bound |

## 15. Paywalled / proprietary

| Source | Agency | URL | Measures | Spatial | Temporal | Lag | Access | Trust | Known gaps |
|---|---|---|---|---|---|---|---|---|---|
| Aquaveo (GMS, SMS, WMS) | Aquaveo LLC | aquaveo.com | Hydrological modelling software | N/A (software) | N/A | N/A | Paywalled | gold (tooling) | Models, not data |
| ESRI water utility datasets | ESRI | esri.com | Water utility GIS + analytics | Variable | Variable | Variable | Paywalled | gold | Mostly utility-customer-facing |
| Planet Labs imagery | Planet Labs | planet.com | High-cadence high-res optical | 3-5 m, daily | Daily | T+1-2 days | Paywalled (research access programs exist) | gold | Indian water-body mapping use case strong but locked behind paid tier |
| Maxar high-resolution imagery | Maxar Technologies | maxar.com | Sub-meter optical | <1 m | Variable | Variable | Paywalled | gold | Mostly intelligence/defence pricing |
| BlueConduit (US) + analogues | BlueConduit | blueconduit.com | Lead service line + drinking water analytics | Mostly US | Continuous | Per project | Paywalled | gold (US) | India analogue absent |
| CMIE Economic Outlook (water-relevant indicators) | CMIE | cmie.com | Aggregated industrial + agricultural water-use indicators | National + state | Monthly | T+30 days | Paywalled | silver | Aggregator; raw data underneath comes from official sources |
| Bloomberg / Reuters terminals (water + agri) | Bloomberg / Refinitiv | bloomberg.com | Commodity-grade weather + agri data | Global + India | Real-time | Real-time | Paywalled | gold | Trading-grade; not policy-grade |

---

## The fragmentation count

A researcher trying to assemble one shed-level water picture — say, the Cauvery basin during 2024-25 — must visit at minimum the following portals + sources, in sequence:

1. **CWC** for daily reservoir levels at KRS, Kabini, Hemavathi, Harangi, Mettur, Bhavanisagar, Stanley
2. **CGWB Karnataka + CGWB Tamil Nadu state offices** for groundwater (state-segmented, not basin-segmented)
3. **State GW department portals** for KA + TN for tubewell + scheme data
4. **CPCB + KSPCB + TNPCB** for water quality at Cauvery main stem + tributaries
5. **IMD Pune** for daily basin rainfall (basin-aggregated separately for KA + TN)
6. **IITM Pune CMIP6 downscaled projections** for climate scenarios over the basin
7. **ISRO Bhuvan + NRSC reservoir dashboard** for satellite-derived reservoir surface area
8. **GRACE/GRACE-FO** monthly products for basin total water storage anomaly
9. **JJM dashboard + Karnataka and Tamil Nadu drinking water dept dashboards** for tap connection data in basin districts
10. **Atal Bhujal dashboard** (Karnataka + Tamil Nadu participate; Tamil Nadu's stressed blocks are within the basin)
11. **AMRUT 2.0 dashboard** for urban Bengaluru + Mysuru + Chennai water-supply progress (Cauvery feeds Bengaluru + Chennai)
12. **WRI Aqueduct** for risk overlay
13. **Cauvery Water Management Authority + Cauvery Water Regulation Committee orders** for current allocation status (PDF-bound)
14. **Karnataka + Tamil Nadu irrigation department canal data** for off-take from Mettur etc. (in PDF-bound state portals)
15. **ICAR + state agricultural electricity utilities** for crop area + electricity consumption proxies for GW pumping
16. **Karnataka State Pollution Control Board OCEMS** for industry compliance (legally restricted; effectively inaccessible)
17. **WELL Labs Cauvery dashboard** for the only civic-side basin observatory currently operational
18. **SANDRP, Mongabay, Down to Earth, The Hindu** archives for editorial context
19. **IndiaWaterPortal + Veditum + ATREE + ACWADAM publications** for prior research
20. **Bengaluru BWSSB + Chennai Metro Water utility data** for urban demand (mostly not public)
21. **Independent academic measurements** (IISc, IIT Madras, ATREE, CSE) for triangulation against official WQ + flow

**21 sources for one basin.** Each in a different schema. None federated. Several dark. Most lagged. The interop tax on a researcher trying to assemble the basin picture is on the order of weeks of work, and the picture they assemble is not reproducible without their interpretive layer because no two researchers will assemble the same picture from the same sources.

Multiply by 13 sheds in the SHEDS array of the parent dashboard, and the assembly cost for a national basin-by-basin picture is on the order of 270 source-touchpoints, recurring quarterly. **No civic actor in India is currently staffed to do this at sustained cadence.** WELL Labs comes closest at sub-national scale; IndiaWaterPortal at curation; SANDRP at editorial. None at the integration depth a national civic data trust would require.

## The interop blueprint

What a federated open API across the 15 categories would need, at the minimum technical floor:

- **Common spatial reference** — at least to subdistrict level, ideally to village pincode + ward. India needs a stable spatial primary key that survives administrative redrawing. The LGD (Local Government Directory under MoPR) is the closest current candidate; not water-specific, not maintained at the cadence a federated API would need.
- **Common temporal stamp** — UTC + IST, with explicit measurement-vs-publication timestamps. Most current sources publish only the publication timestamp; the measurement timestamp is implicit and often weeks earlier.
- **Common unit dictionary** — water has a vocabulary problem: "BCM" vs "MCM" vs "TMC" vs "ham" vs "cusec-day", "mg/l" vs "ppm", well depth in metres vs feet, reservoir level in MSL vs metres above bed. A water-domain unit ontology with declared canonical forms is a small but load-bearing piece of work.
- **Identity-graph for stations** — CWC station X, CGWB monitoring well Y, CPCB quality station Z, JJM scheme tap A, Atal Bhujal village water budget B should be cross-walkable when they refer to the same hydrological reality. Today they are not. A station-identity graph, maintained civically, is the connective tissue.
- **Provenance + trust metadata** — each row should carry a trust grade (gold/silver/bronze/red, or finer), a method tag (sensor / grab sample / model output / estimate), a source agency, and a publication trail. Decision-grade use of water data hinges on trust metadata as much as on the data itself.
- **Versioning + correction history** — water data gets revised. CGWB GEC reclassifies blocks. CPCB updates polluted-stretch counts. NRSC reservoir products correct cloud-cover errors. A data trust that does not version is silently rewriting history.
- **Open APIs + bulk export + push notifications** — the three access modes any serious downstream user needs.
- **A common license** — preferably CC-BY-4.0 or equivalent that permits commercial + non-commercial reuse with attribution. India's public-data licensing is a patchwork (NDSAP 2012 has provisions but uneven adoption); a civic data trust resolving this on its own terms accelerates adoption.

Build cost: the technical work is on the order of **₹40-60 cr capex over 3-4 years + ₹15-25 cr/year opex** at full scale. Counterintuitively, the spatial primary key + identity-graph + trust metadata are the binding constraints; the API surface itself is well-trodden engineering. The institutional cost — Section 8 vehicle, multi-funder governance, SPCB/CPCB/CGWB/CWC/IMD partnerships, FCRA-compatible architecture — is comparable in magnitude and probably more difficult.

This is the seed for the *Water Data Interoperability Layer* whitespace opportunity called out in `funders-ecosystem.md` and the `gaps.md` Layer 2 fill. It is the multiplier on every other layer.

## Five answerless questions, mapped to the datasets that would close them

The prose file's "five questions a citizen or funder cannot currently answer" anchor a concrete check on the inventory. For each, the dataset(s) that would answer it if they existed:

1. **Per-capita potable water at ward scale in any Indian city.** Closing this requires: (i) ward-level supply data from municipal water utility billing systems (currently locked); (ii) ward-level population denominators from Census 2021 (skipped) or sample-frame proxies; (iii) potability data from JJM FTK + lab confirmation aggregated to ward; (iv) integration through a city-scale water-data layer at AMRUT 3.0 specification or higher. None operational. Smart Cities Mission was the policy vehicle; the deliverable is missing. **The closest active build: BWSSB + Chennai Metro Water + DJB internal utility data, if released openly, would unlock most of the answer for those three cities. Whether it gets released is a political question.**

2. **Functionality rate of JJM connections in a given block today.** Closing this requires: (i) ground-truth sampling of JJM connections at block resolution, independently of the dashboard self-report (the citizen-sensor field at ₹100 cr scale, `data-and-groundtruth.md`); (ii) FTK + lab confirmation of WQ at the same connections; (iii) seasonality coverage (summer + post-monsoon at minimum). The data collection is straightforward. The political infrastructure is the obstacle: the dashboard reports installation, the actual functionality contradicts it (CAG 2022 + 2024), and the institutional vehicle to publish the contradiction does not exist.

3. **Groundwater abstraction at pump-head in any over-exploited block.** Closing this requires: (i) metered abstraction at pump-head — direct measurement, the single most important missing sensor in Indian water (`gaps.md` Layer 1); (ii) cross-walk against tubewell registers (state PHED + state agricultural electricity records, currently dark); (iii) integration with CGWB monitoring wells for water-balance closure. The piezometer pilots + community Bhujal Jankar work are the closest active builds. Free agricultural electricity removes the price signal; **the political cost of metering at pump-head is the binding constraint, not the technical cost.**

4. **Discharge composition of any specific industrial outlet in the last 7 days.** Closing this requires: (i) OCEMS data made public — already collected, legally restricted; (ii) chain-of-custody-grade independent monitoring at the largest 500 STPs + CETPs (the citizen-sensor field's STP outflow component, ₹10-15 cr); (iii) state PCB lab calibration logs published; (iv) audit infrastructure that can prosecute discrepancies. The OCEMS public-access reform is a single legal change that would transform the answerable surface here. Whether it is feasible is a politics-of-pollution question, not a data question.

5. **Volume of water replenished by any "water-positive" corporate claim, audited.** Closing this requires: (i) a published methodology for water-positive accounting — analogous to GHG Protocol for carbon; (ii) third-party audit infrastructure at the firm level (auditor pool, training, NABL-style accreditation); (iii) public registry of audited claims with discrepancy reporting; (iv) SEBI ESG disclosure rules tightened to require third-party audit + penalty. The audit cost — ~₹30-50 cr to verify the entire current ₹800-1,200 cr/year claim envelope (`funders-ecosystem.md` capture risks) — is small relative to what is at stake. **A single high-profile audit failure of a major corporate water-positive claim would create the regulatory pressure that the absence of methodology has so far prevented.** Whether anyone is preparing that case is the live question for civic-side actors.

The pattern across all five: the data infrastructure required is technically tractable and inexpensive relative to the scale of the underlying water economy. The binding constraint is institutional + political — who collects, who holds, who publishes, who enforces. *That is the public-good information system this folder argues for.* Closing the catalog gap (this file) is a precondition for closing the answerable-question gap (the prose file). Closing the answerable-question gap is what the build sketched in `build-plan.md` is for.
