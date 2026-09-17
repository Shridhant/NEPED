# NEPED & NEPeD — Master Website Documentation & Proofreading Dossier
### *With Exact Page Routes, Component Paths & On-Site Location Guides*

> **Document Purpose:** Complete textual, archival, and technical compilation of all data used across the website. Each section is tagged with its **exact URL route**, **component file path**, and **on-page visual location** for effortless proofreading and verification.  
> **Compilation Date:** August 2026  
> **Master Umbrella Organization:** NEPED (Nagaland Empowerment of People through Economic Development)  
> **Clean Energy Wing:** NEPeD (Clean Energy Development Division)  
> **Secretariat:** Old Secretariat Complex, Kohima — 797001, Nagaland  
> **Contact:** `nepednagaland@gmail.com`

---

## 🗺️ Master Website Route & Sitemap Index

| Page Name | Live Local URL | Primary Component File | Key Content Displayed |
|---|---|---|---|
| **Master Home** | `https://neped.vercel.app/` | [`src/pages/HomePage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/HomePage.tsx) | Hero brand statement, 04 Gallery Carousel, Hardware Product Deck, Regional maps |
| **About NEPED** | `https://neped.vercel.app/about` | [`src/pages/AboutPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/AboutPage.tsx) | Vision & Mission, Historical Bridge (1994 to 2007), 11 Team Leaders, Present POU, In Memoriam |
| **NEPeD Clean Energy Landing** | `https://neped.vercel.app/neped-energy` | [`src/pages/NepedEnergyPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/NepedEnergyPage.tsx) | 9-sector energy impact matrix, Government as facilitator paradigm, 2007 7-member genesis, gateway to CERES & micro-grids |
| **CERES R&D & Tech** | `https://neped.vercel.app/technology` | [`src/pages/TechnologyPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/TechnologyPage.tsx) | 15-point Hydroger specs, ELC controller mechanics, CERD Fab Lab, Projects Under Energy |
| **Community & Impact** | `https://neped.vercel.app/impact` | [`src/pages/ImpactPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/ImpactPage.tsx) | Village Energy Committees (VECs), socio-economic impacts, catchment conservation |
| **Field Gallery Directory** | `https://neped.vercel.app/gallery` | [`src/pages/GalleryPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/GalleryPage.tsx) | Category filter, 8 event album cards, verified photo metrics, photo contribution CTA |
| **Event Album Detail Page** | `https://neped.vercel.app/gallery/:albumSlug` | [`src/pages/GalleryAlbumDetailPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/GalleryAlbumDetailPage.tsx) | All photos for that specific event, captions, full-screen lightbox modal, historical context |
| **Stories & Field Reports Feed** | `https://neped.vercel.app/blog` | [`src/pages/BlogPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/BlogPage.tsx) | Category filter pills, 6 article cards with read times, author divisions, and dates |
| **Article Detail Page** | `https://neped.vercel.app/blog/:slug` | [`src/pages/BlogDetailPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/BlogDetailPage.tsx) | Full editorial article body, key takeaways box, high-res hero image, previous/next pagination |
| **NEPED Heritage Archives** | `https://neped.vercel.app/neped-economic` | [`src/pages/NepedEconomicPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/NepedEconomicPage.tsx) | 30-year agroforestry history, 7 aims, society structure, 13 projects directory, 11 leaders roll |
| **Project Dossier Page** | `https://neped.vercel.app/neped-economic/project/:slug` | [`src/pages/NepedProjectDetailPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/NepedProjectDetailPage.tsx) | Full project dossier, 4 field metrics, mandates checklist, deliverables, funding agency |
| **Floating Navbar** | *Persistent across all pages* | [`src/components/ui/AkerNavbar.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/ui/AkerNavbar.tsx) | Left NEPED master dropdown, Right NEPeD energy dropdown, MENU directory overlay |
| **Dynamic Footer** | *Persistent across all pages* | [`src/components/Footer.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/Footer.tsx) | NEPED Master Footer (on main pages) & NEPED Heritage Footer (on `/neped-economic`) |

---

## 1. Brand Nomenclature & Organizational Hierarchy

* **📍 Where on site:** Persistent Navbar ([`AkerNavbar.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/ui/AkerNavbar.tsx)), Home Hero ([`HomePage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/HomePage.tsx)), About Page Historical Bridge ([`AboutPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/AboutPage.tsx#neped-economic)), Footers ([`Footer.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/Footer.tsx)).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                    NEPED                                    │
│                    (MASTER UMBRELLA & PARENT SOCIETY)                       │
│        Nagaland Empowerment of People through Economic Development          │
│            • Established: 1994 (Autonomous Registered Society)              │
│            • Registration: NO. H/RS-4238 & NO. HOME/SRC-6751                │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
         ┌─────────────────────────────┴─────────────────────────────┐
         │                                                           │
         ▼                                                           ▼
┌──────────────────────────────────┐        ┌──────────────────────────────────┐
│              NEPED               │        │              NEPeD               │
│         Heritage & Ecology       │        │        Clean Energy Wing         │
├──────────────────────────────────┤        ├──────────────────────────────────┤
│ • 30-Year Agroforestry Legacy    │        │ • Hydroger Pico-Turbines         │
│ • Jhum Fallow Enrichment         │        │ • Electronic Load Controllers    │
│ • 7.8 Million+ Trees Planted     │        │ • Decentralized Microgrids       │
│ • Women's Customary Land Equity  │        │ • CERD Fabrication Laboratory    │
│ • 13 Landmark Project Archives   │        │ • Village Energy Committees      │
│ • Biodiversity & CCAs (SACON/KfW)│        │ • Inter-State Tech Transfers     │
└──────────────────────────────────┘        └──────────────────────────────────┘
```

* **NEPED (All Caps):** The master parent society and umbrella organization founded in 1994, originally conceived as the *Nagaland Environment Protection and Economic Development* project and subsequently registered as an autonomous permanent society under the Government of Nagaland.
* **NEPeD (Lowercase 'e'):** The dedicated Clean Energy and Rural Electrification wing formed in 2007 to harness Nagaland's abundant mountain water resources, manufacturing indigenous pico-hydro generators (Hydrogers) and solid-state Electronic Load Controllers (ELCs).

---

## 2. Vision, Mission & Shukla Commission Foundation

* **📍 Where on site:** `https://neped.vercel.app/about#vision` and `https://neped.vercel.app/neped-economic#aims`
* **🧩 Component File:** [`src/pages/AboutPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/AboutPage.tsx) (Section 02) & [`src/pages/NepedEconomicPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/NepedEconomicPage.tsx) (Section 03)

### 2.1 Vision Statement
> *"Nagaland has the unique distinction where people are empowered and have sustainable livelihoods by being part of a vibrant economy, driven by locally generated eco-friendly power that is being used for accelerated development."*

### 2.2 Mission Statement
> *"To evolve a bottom-up approach to empower stakeholders to become partners in development, create awareness about green-energy utilization, and judiciously create need-based infrastructure that becomes a replicable model."*

### 2.3 Shukla Commission Recognition (March 1997)
> *“The High Level Commission on Transforming the North East (Shukla Commission) appointed by the Prime Minister of India noted in March 1997:*  
> *‘NEPED in Nagaland is an extraordinary project that has mobilised people at the grassroots level for agroforestry and biodiversity conservation. It represents a model of participatory development for the entire Himalayan region.’”*

### 2.4 Seven Core Objectives of the NEPED Society (As registered with GoN)
1. **Self-Reliant Rural Economy:** To empower rural communities towards economic self-reliance through sustainable natural resource management.
2. **Transforming Shifting Cultivation:** To improve and transform traditional jhum agriculture into a productive, sustainable agroforestry system.
3. **Biodiversity & Ecosystem Protection:** To conserve, protect, and regenerate fragile mountain ecosystems and watershed catchment forests.
4. **Gender Equity & Customary Land Access:** To promote women's empowerment through micro-credit, enterprise development, and land rights recognition.
5. **Decentralized Clean Energy:** To pioneer indigenous pico-hydro generators (Hydrogers) and rural community microgrids.
6. **Documentation of Indigenous Knowledge:** To systematically record, preserve, and utilize traditional ecological knowledge and botanical heritage.
7. **Participatory Village Governance:** To institutionalize community-led stewardship through Village Councils and Village Energy Committees (VECs).

---

## 3. Society Structure & Institutional Leadership Roll

* **📍 Where on site:** `https://neped.vercel.app/about#leaders`, `https://neped.vercel.app/about#team`, and `https://neped.vercel.app/neped-economic#team`
* **🧩 Component Files:** [`src/pages/AboutPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/AboutPage.tsx) & [`src/pages/NepedEconomicPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/NepedEconomicPage.tsx)

### 3.1 11 Team Leaders Honor Roll (Chronological)
1. **Padmashree A. M. Gokhale (IAS)** — *Founding Visionary & Advisor*: Conceived the participatory 'Search & Find' agroforestry model.
2. **Shri. R. Kevichusa (IAS)** (1995 – 2000) — *Team Leader (Phase I Inception)*.
3. **Shri. Khekiye K. Sema (IAS)** (2000 – 2003) — *Team Leader (Phase II Expansion & Micro-Credit)*.
4. **Shri. Alemtemshi Jamir (IAS)** (2003 – 2006) — *Team Leader (Agro-Value Chains & Society Institutionalization)*.
5. **Shri. Temjen Toy (IAS)** (2007 – 2011) — *Team Leader (Clean Energy Transition & Indigenization)*.
6. **Shri. Raj K. Verma (NCS)** (2007 – 2012) — *Team Leader / Deputy Team Leader (Community Governance)*.
7. **Shri. H. K. Khulu (IAS)** (2011 – 2012) — *Team Leader*.
8. **Shri. Amardeep S. Bhatia (IAS)** (2012 – 2013) — *Team Leader*.
9. **Late Menukhol John** (2013 – 2018) — *Principal Secretary & Team Leader*.
10. **Shri. K. Libanthung Lotha (IAS)** (2018 – 2025) — *Commissioner & Secretary & Team Leader*.
11. **Shri. Kovi Meyase (NCS)** (2025 – Present) — *Team Leader (Current Incumbent)*.

### 3.2 Present Project Operations Unit (POU) Members
* **Dr. Kezevituo Metha** — POU Member
* **Dr. Savio Krocha** — POU Member
* **Shri. Asa Tep** — POU Member
* **Er. Renbenthung Humtsoe** — POU Member
* **Shri. Atheo Ezung** — POU Member
* **Er. Moamanen Imchen** — POU Member
* **Er. Imnayanger Imchen** — Coordinator (NEPeD - CERES)
* **Shri. Takum Chang** — POU Member & Master Fabricator
* **Ms. Ayong Chang** — POU Member
* **Shri. David Yepthomi** — POU Member

### 3.3 Historical Inception Team (Energy Transition, 2007)
* Mr. Temjen Toy (IAS) — Team Leader
* Lt. Mr. Raj K. Verma (NCS) — Deputy Team Leader
* Lt. Er. Shanchothung Odyuo — POU Member (Pioneer Hydro Engineer)
* Mr. Ari Jamir — POU Member
* Mr. Mingthungo Ezung — POU Member
* Ms. Ayong Chang — POU Member
* Er. Cheong Konyak — POU Member
* Mr. Renilo Nuh — POU Member
* Mr. Takum Chang — POU Member

### 3.4 In Memoriam Tributes
* **Lt. Er. Shanchothung Odyuo** (11/12/1962 – 05/03/2010): Pioneer hydro engineer instrumental in the technical breakthrough and prototype casting of the first Made-in-Nagaland Hydrogers at NTTC Dimapur.
* **Lt. Raj K. Verma (NCS)** (13/04/1959 – 03/02/2012): Deputy Team Leader who formulated the community mobilization framework and Village Energy Committee constitutions.

---

## 4. Complete Archive of 13 Projects Under NEPED

* **📍 Master Directory URL:** `https://neped.vercel.app/neped-economic#projects`
* **🧩 Dataset File:** [`src/data/nepedProjectsData.ts`](file:///Users/apple/Documents/NagaEd/NEPED/src/data/nepedProjectsData.ts)
* **🔍 How to view individual project dossier:** Click any project card on `/neped-economic#projects` or visit `/neped-economic/project/:slug`.

---

### Project 01: NEPED I — Agroforestry in Shifting Cultivation
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/neped-1-agroforestry-shifting-cultivation`
* **Duration:** 1995 – 2000 | **Category:** Agroforestry
* **Funding Agency:** Indo-Canada Environment Facility (ICEF) / Canadian International Development Agency (CIDA)
* **Grant Scale:** ₹14.5+ Crores (Bilateral Grant)
* **Footprint:** All 8 Districts (854 villages, 16 tribes)
* **Core Objective:** Planting 7.8M+ trees along with traditional jhum across 1,794 test plots in 854 villages covering all 16 tribes of Nagaland.
* **Key Milestones & Metrics:**
  * `7.8M+ Trees Planted` across 5,500 hectares of active jhum fallows.
  * `1,794 Test Plots` established (2 plots per village, 3 ha each).
  * `1:6 Farmer Replication Ratio` — spontaneous voluntary adoption by neighboring farming families.
  * Awarded model project status by the Government of India Shukla Commission in March 1997.

---

### Project 02: NEPED II — Cash Crops & Micro-Finance
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/neped-2-cash-crops-microfinance`
* **Duration:** 2001 – 2006 | **Category:** Agroforestry & Rural Finance
* **Funding Agency:** Indo-Canada Environment Facility (ICEF) / CIDA
* **Grant Scale:** ₹825+ Crores estimated economic turnover
* **Core Objective:** Reinforced Jhum via high-value cash crops benefiting 7,888 farmers. Women SHGs purchased 30 historic plots of land.
* **Key Milestones & Metrics:**
  * `7,888 Farming Households` supported with seed capital for large cardamom, ginger, and turmeric.
  * `30 Registered Plots` purchased by Women's Self-Help Groups—transforming customary gender equity.
  * `92%+ Recovery Rate` across village revolving credit mechanisms.

---

### Project 03: NEPED III — Watershed Development in Shifting Cultivation (WDPSCA)
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/neped-3-watershed-development-shifting-cultivation`
* **Duration:** 2006 – 2012 | **Category:** Conservation & Watersheds
* **Funding Agency:** Ministry of Agriculture, Govt. of India (WDPSCA)
* **Scale:** 17,930 Hectares Watershed Coverage across 11 districts
* **Core Objective:** Consolidating achievements through 17,930 ha watershed soil conservation and assisting 6,600 jhumias in 12 allied vocations.
* **Key Milestones & Metrics:**
  * `17,930 ha` of degraded mountain catchment slopes biologically stabilized with live check-dams and silt traps.
  * `6,600 Jhumia Families` trained in 12 allied vocations (piggery, apiculture, poultry, carpentry, weaving).

---

### Project 04: NEPED-SCEN Biodiversity & Traditional Knowledge
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/neped-scen-biodiversity-traditional-knowledge`
* **Duration:** 2007 – 2010 | **Category:** Biodiversity & Climate
* **Funding Agency:** Sir Dorabji Ratan Tata Trust (SDTT) in collaboration with SACON
* **Footprint:** Kohima, Phek, Zunheboto, and Wokha hill ranges
* **Core Objective:** Strengthening Community Conservation Areas (CCAs), developing biodiversity registers, and protecting Blyth's Tragopan habitats.
* **Key Milestones & Metrics:**
  * `40+ CCAs` designated by Village Councils enacting binding bans on hunting and logging.
  * `300+ Botanical Species` and traditional medicinal practices compiled in People's Biodiversity Registers.

---

### Project 05: Community-Based Piggery Livelihood Project & Foddorizer
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/community-piggery-foddorizer-project`
* **Duration:** 2012 – 2016 | **Category:** Livelihood & Energy Conservation
* **Funding Agency:** Navajbhai Ratan Tata Trust (NRTT) & State Plan
* **Scale:** 4,200 Resource-Poor Families
* **Core Objective:** Assisted 4,200 families with LSP veterinary model and invented the 'Foddorizer', saving 1.5 lakh trees annually in firewood.
* **Key Milestones & Metrics:**
  * `1.5 Lakh Trees/Year Saved` in firewood through thermal-efficient Foddorizer pig-feed boilers.
  * `80+ Livestock Service Providers (LSPs)` trained with portable cold-chain vaccine kits to contain Classical Swine Fever.

---

### Project 06: Thematic Exhibition of Indian Handicrafts
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/thematic-exhibition-indian-handicrafts`
* **Duration:** 2021 – 2022 | **Category:** Handicrafts & Livelihood
* **Funding Agency:** Development Commissioner (Handicrafts), Ministry of Textiles, GoI
* **Core Objective:** Marketing platforms in Kohima and Dimapur to showcase and test market ethnic craft products developed by rural artisan clusters.
* **Key Milestones & Metrics:**
  * `120+ Master Artisans` provided free exhibition stalls, recording ₹45L+ in direct spot sales with zero middlemen.

---

### Project 07: Handicraft Heritage Fashion Show & Cultural Outreach
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/handicraft-heritage-fashion-show`
* **Duration:** 2021 – 2022 | **Category:** Handicrafts & Cultural Heritage
* **Funding Agency:** Ministry of Textiles, Govt. of India
* **Core Objective:** Spreading awareness about Naga handicrafts, indigenous heritage, loin-loom textiles, and organic dyeing traditions.
* **Key Milestones & Metrics:**
  * `16 Tribal Textile Collections` curated and presented on professional runways, engaging 45 master weavers and 12 contemporary Naga designers.

---

### Project 08: Artisan Brand Building Seminars & Workshops
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/artisan-brand-building-seminars`
* **Duration:** 2021 – 2022 | **Category:** Capacity Building & Livelihoods
* **Funding Agency:** Ministry of Textiles, Govt. of India
* **Core Objective:** Sensitizing artisans and NGO personnel on brand creation, packaging, trademarking, and digital commerce.
* **Key Milestones & Metrics:**
  * `350+ Rural Artisans` certified across 8 district masterclasses; helped 24 artisan collectives form branded identity suites.

---

### Project 09: Setting up of Handicraft Emporia at Tuensang
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/handicraft-emporia-tuensang`
* **Duration:** 2024 – 2026 (Active) | **Category:** Infrastructure & Retail
* **Funding Agency:** Ministry of Textiles, Govt. of India
* **Scale:** Dedicated Eastern Nagaland Retail Complex in Tuensang
* **Core Objective:** Assisting local eastern Nagaland artisans (Chang, Khiamniungan, Konyak, Phom, Sangtam, Yimkhiung) with finishing machinery and retail access.
* **Key Milestones & Metrics:**
  * Benefiting `1,200+ Craft Households` across 6 eastern Nagaland districts.

---

### Project 10: Value Addition to Non-Timber Forest Products (NTFP)
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/value-addition-non-timber-forest-products`
* **Duration:** 2022 – 2023 | **Category:** Agroforestry & Bio-Resources
* **Funding Agency:** CCS NIAM Jaipur, Ministry of Agriculture, Govt. of India
* **Core Objective:** Sensitizing and training forest gatherers about commercial value addition and marketing of wild NTFP harvests (wild apple, honey, mushrooms, herbs).
* **Key Milestones & Metrics:**
  * `400+ Gatherers Trained`; increased farm-gate income by +45% via hygienic solar dehydration.

---

### Project 11: NAFCC — National Adaptation Fund for Climate Change
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/naffc-climate-change-adaptation`
* **Duration:** 2018 – 2026 (Active) | **Category:** Climate Resilience & Hydrology
* **Funding Agency:** MoEFCC & NABARD, Govt. of India
* **Scale:** ₹24+ Crores Multidisciplinary Climate Adaptation Project
* **Core Objective:** Building community climate resilience, mountain spring-shed rejuvenation, and adaptive mountain agricultural techniques.
* **Key Milestones & Metrics:**
  * `50+ Critical Springs Revived` with hydro-geological trenches, increasing winter lean water flow by 25–40%.

---

### Project 12: NEPED IV — Forest & Biodiversity Management in the Himalaya (FBMP)
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/neped-4-forest-biodiversity-management-kfw`
* **Duration:** 2019 – Present (Active) | **Category:** Biodiversity & Climate
* **Funding Agency:** Federal Republic of Germany through KfW Development Bank
* **Scale:** Multilateral Indo-German Bilateral Partnership
* **Core Objective:** Effective and sustainable management of Community Conserved Areas (CCAs) across Nagaland landscapes for improved connectivity and biodiversity conservation.
* **Key Milestones & Metrics:**
  * `70+ Community Conserved Areas` mapped, GIS-demarcated, and biologically tagged.

---

### Project 13: State Level Workshop on Eco-Tourism Development
* **📍 Dedicated URL:** `https://neped.vercel.app/neped-economic/project/state-level-workshop-ecotourism-development`
* **Duration:** 2025 – 2026 (Active) | **Category:** Eco-Tourism & Conservation
* **Funding Agency:** North Eastern Council (NEC), Ministry of DoNER, GoI
* **Core Objective:** Empowering village communities through eco-tourism: wilderness guides, homestays, and cultural hospitality.
* **Key Milestones & Metrics:**
  * Formulated the Community Eco-Tourism Code of Conduct; certified `150+ Village Guides` across 6 trekking circuits.

---

## 5. NEPeD Clean Energy Technology & Engineering Specifications

* **📍 Primary Page URL:** `https://neped.vercel.app/technology`
* **🧩 Component Files:** [`src/pages/TechnologyPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/TechnologyPage.tsx) & Hardware Card Stack [`src/components/ui/animate-card-animation.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/ui/animate-card-animation.tsx)

### 5.1 What is a Hydroger?
The term **‘Hydroger’** was coined by NEPeD in 2007 (an amalgamation of **Hydro** and **Generator**). It comprises a compact cylindrical cast-iron casing housing an 8-pole permanent magnet alternator connected to a Turgo impulse runner through a precision steel shaft.

### 5.2 15-Point Complete Technical Specifications (3kW Model)
| # | Parameter | Technical Value / Specification |
|---|---|---|
| 1 | **Nominal Capacity** | 3.0 kW (Single Phase AC) |
| 2 | **Rated Speed** | 750 RPM |
| 3 | **Operating Frequency** | 50 Hz |
| 4 | **Output Voltage** | 230 V – 240 V (Regulated) |
| 5 | **Shaft & Nozzle Material** | Mild Steel / Stainless Steel Grade 304 |
| 6 | **Nozzle Configuration** | 1 or 2 Nozzles (Matched to head & discharge) |
| 7 | **Bearings Assembly** | 2 Nos: 1 Roller Bearing (Top), 1 Taper Roller Bearing (Bottom) |
| 8 | **Turgo Turbine Runners** | 18 to 43 Stainless Steel Buckets mounted on steel hub |
| 9 | **Controller Unit** | Indigenous Solid-State Electronic Load Controller (ELC) |
| 10 | **Magnetic Core & Stator** | 8-Pole Permanent Magnetic Core with 100% Copper Windings |
| 11 | **Housing Casting** | High-Grade Cast Iron (Casting at NTTC Dimapur) |
| 12 | **Water Discharge Range** | 10 to 40 Litres / Second |
| 13 | **Hydraulic Head Range** | 9 to 35 Metres |
| 14 | **Pitch Diameter of Runner** | 16.14 cm to 31.5 cm |
| 15 | **Gross Machine Weight** | 78.0 Kilograms (Easily transported on footpaths) |

### 5.3 Electronic Load Controller (ELC) Capabilities
* **Dynamic Ballast Dumping:** Diverts surplus wattage into water heaters or resistive banks within milliseconds to prevent turbine over-speeding.
* **Core Sensor Protections:** 750 RPM speed lock, 50 Hz frequency hold, overload trip, over-voltage (>250V), low-voltage (<210V), short-circuit isolation, and multi-hydroger parallel grid synchronization.
* **Weight & Reliability:** 1.2 kg solid-state unit with conformal moisture coating.

---

## 6. Field Gallery & Event Logs (8 Collections)

* **📍 Main Gallery URL:** `https://neped.vercel.app/gallery`
* **📍 Homepage Carousel:** `https://neped.vercel.app/#section-04` ([`great-ui-diagonal-marquee-carousel.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/ui/great-ui-diagonal-marquee-carousel.tsx))
* **🧩 Dataset File:** [`src/data/galleryData.ts`](file:///Users/apple/Documents/NagaEd/NEPED/src/data/galleryData.ts)
* **🔍 How to view full photo album & lightbox:** Click any card in the carousel or gallery index.

| # | Event / Day Collection Title | Category | Date & Location | Dedicated URL |
|---|---|---|---|---|
| 1 | **Nagaland Youth Summit 2016** | Youth Summits | Oct 2016 • State Academy Hall, Kohima | `https://neped.vercel.app/gallery/nagaland-youth-summit-2016` |
| 2 | **Republic Day Exhibition 2016** | Youth Summits | Jan 26, 2016 • Secretariat Plaza, Kohima | `https://neped.vercel.app/gallery/republic-day-exhibition-2016` |
| 3 | **Kingjung Village Energy Committee** | Village Committees | March 2015 • Kingjung, Eastern Nagaland | `https://neped.vercel.app/gallery/kingjung-village-energy-committee` |
| 4 | **Deithung Hydroger Deployment** | Field Deployments | Nov 2015 • Deithung Ridge, Tuensang | `https://neped.vercel.app/gallery/deithung-hydroger-site-deployment` |
| 5 | **Mountain Intake & Penstock Operations** | Field Deployments | 2013–2018 • Stream Gorges across Nagaland | `https://neped.vercel.app/gallery/intake-penstock-operations` |
| 6 | **Post-Harvest Milling & Tool Fabrication** | Technology | 2014–2017 • Wokha, Mokokchung, Phek, Mon | `https://neped.vercel.app/gallery/cottage-agricultural-processing` |
| 7 | **Catchment Area Watershed Preserves** | Watersheds | Ongoing Archive • Protected CCAs | `https://neped.vercel.app/gallery/pristine-catchment-conservation` |
| 8 | **CERD Fabrication Hub & Indigenous R&D** | Technology | 2008–Present • NTTC Dimapur & Kohima Labs | `https://neped.vercel.app/gallery/indigenous-cerd-fabrication-hub` |

---

## 7. Field Reports, Articles & Editorial Publications (6 Articles)

* **📍 Main Feed URL:** `https://neped.vercel.app/blog`
* **🧩 Dataset File:** [`src/data/blogData.ts`](file:///Users/apple/Documents/NagaEd/NEPED/src/data/blogData.ts)
* **🔍 How to read full article:** Click any card on `/blog` or navigate to its dedicated slug URL.

| # | Article Title | Category | Author Division | Read Time | Dedicated URL |
|---|---|---|---|---|---|
| 1 | **How ELC Systems Regulate Off-Grid Micro-Grids in Rugged Terrains** | Technology | NEPeD Engineering Cell | 6 min | `https://neped.vercel.app/blog/how-elc-systems-regulate-off-grid-microgrids` |
| 2 | **Youth Empowerment & Local Artisan Skill Building in Nagaland** | Community | Community Outreach Cell | 4 min | `https://neped.vercel.app/blog/youth-empowerment-and-rural-engineers-in-nagaland` |
| 3 | **Scaling Made-in-Nagaland Clean Energy Tech Across NE India** | Field Reports | Project Directorate | 8 min | `https://neped.vercel.app/blog/scaling-made-in-nagaland-clean-energy-across-ne-india` |
| 4 | **Preserving Mountain Watersheds & Forest Catchments** | Policy | Environmental Cell | 5 min | `https://neped.vercel.app/blog/preserving-mountain-watersheds-and-forest-catchments` |
| 5 | **NEPeD Demonstration at Republic Day & Youth Summit** | Field Reports | Exhibition Cell | 4 min | `https://neped.vercel.app/blog/neped-demonstrations-at-republic-day-and-youth-summits` |
| 6 | **Sharpening Daos & Powering Mountain Cottage Mills** | Community | Livelihood Cell | 5 min | `https://neped.vercel.app/blog/sharpening-daos-and-powering-mountain-cottage-mills` |

---

## 8. Secretariat Directory & Legal Registrations

* **📍 Where on site:** Footers ([`Footer.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/Footer.tsx)), About Page Secretariat ([`AboutPage.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/pages/AboutPage.tsx)), Navigation Overlay ([`AkerNavbar.tsx`](file:///Users/apple/Documents/NagaEd/NEPED/src/components/ui/AkerNavbar.tsx)).
* **Society Name:** NEPED Society (Nagaland Empowerment of People through Economic Development)
* **Registration 1:** `Regd. NO. H/RS-4238` (Dated 19-04-2005)
* **Registration 2:** `Regd. NO. HOME/SRC-6751` (Dated 07-07-2014)
* **Headquarters:** Old Secretariat Complex, Kohima — 797001, Nagaland
* **Fabrication & R&D Hub:** Nagaland Tool Room & Training Centre (NTTC), Industrial Estate, Dimapur — 797112, Nagaland
* **Demo & Hydro Testing Site:** Phesama Stream Site (8 km from Kohima)
* **Official Email:** `nepednagaland@gmail.com`
* **Governing Body:** Autonomous Registered Society under the Government of Nagaland
* **Key Historical Funding Partners:** Indo-Canada Environment Facility (ICEF), Canadian International Development Agency (CIDA), Ministry of Agriculture (GoI), Ministry of Textiles (GoI), Ministry of Environment, Forest and Climate Change (MoEFCC), NABARD, North Eastern Council (NEC), Sir Dorabji Ratan Tata Trust (SDTT), Navajbhai Ratan Tata Trust (NRTT), SACON, KfW Development Bank (Germany).
