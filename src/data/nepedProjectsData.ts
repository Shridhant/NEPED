export interface ProjectImpactStat {
  value: string;
  label: string;
  desc: string;
}

export interface NepedProject {
  id: string;
  slug: string;
  phase: string;
  name: string;
  shortTitle?: string;
  period: string;
  fundingAgency: string;
  budgetOrScale?: string;
  category: "Agroforestry" | "Biodiversity & Climate" | "Handicrafts & Livelihood" | "Conservation";
  objective: string;
  overview: string;
  keyObjectives: string[];
  majorMilestones: string[];
  impactHighlights: ProjectImpactStat[];
  partnerAgencies: string[];
  targetDistricts: string;
  heroImage: string;
  documentRef?: string;
}

export const NEPED_PROJECTS: NepedProject[] = [
  {
    id: "1",
    slug: "neped-1-agroforestry-shifting-cultivation",
    phase: "Phase I",
    name: "NEPED I — Agroforestry in Shifting Cultivation",
    shortTitle: "Agroforestry in Shifting Cultivation",
    period: "1995 – 2000",
    fundingAgency: "Indo-Canada Environment Facility (ICEF) / Canadian International Development Agency (CIDA)",
    budgetOrScale: "₹14.5+ Crores (Bilateral Grant)",
    category: "Agroforestry",
    objective: "Planting 7.8M+ trees along with traditional jhum across 1,794 test plots in 854 villages covering all 16 tribes of Nagaland.",
    overview: `Phase I was conceived by visionary civil servant Padmashree A.M. Gokhale and implemented by a pioneering multidisciplinary Project Operations Unit (POU) of state officers. 

Recognizing that slash-and-burn (jhum) shifting cultivation was the cultural and agricultural lifeline of 80% of rural Nagas, NEPED did not seek to abolish jhum, but rather enriched it by planting fast-growing timber and economic tree species directly into active food crop jhum fields before the fallow period. 

Using participatory 'Search & Find' methods, NEPED established 1,794 test plots (typically 2 plots per village, 3 ha each) across 854 villages, planting over 7.8 million economic trees and fundamentally reversing deforestation trends across Nagaland.`,
    keyObjectives: [
      "Improve jhum fallow management by introducing fast-growing economic and nitrogen-fixing timber species.",
      "Revive and document Traditional Knowledge Systems (TKS) in local tree silviculture.",
      "Build capacity among village councils, women, and youth in nursery management and plantation techniques.",
      "Establish village-managed test plots to demonstrate long-term ecological and financial returns.",
    ],
    majorMilestones: [
      "1,794 test agroforestry plots established across 854 villages covering all 16 recognized tribes.",
      "7.8+ million economic timber trees planted with an average 1:6 voluntary farmer replication ratio.",
      "Over 7,000 village farmers and 2,000 state government officers trained in participatory forestry.",
      "Awarded prestigious recognition by the Government of India's Shukla Commission in March 1997 as a model development project for the entire Northeast region.",
    ],
    impactHighlights: [
      { value: "7.8M+", label: "Trees Planted", desc: "Economic timber and alder trees planted across 5,500 hectares." },
      { value: "1,794", label: "Test Plots", desc: "Established across 854 recognized villages in all 8 original districts." },
      { value: "16 Tribes", label: "Total Inclusivity", desc: "Complete tribal representation across all hill areas of Nagaland." },
      { value: "1:6 Ratio", label: "Farmer Replication", desc: "Spontaneous adoption of agroforestry by neighbouring farming families." },
    ],
    partnerAgencies: ["Indo-Canada Environment Facility (ICEF)", "Canadian International Development Agency (CIDA)", "Government of Nagaland", "Village Development Boards (VDBs)"],
    targetDistricts: "All 8 Districts (Kohima, Mokokchung, Tuensang, Mon, Wokha, Zunheboto, Phek, Dimapur)",
    heroImage: "/forest.png",
    documentRef: "CIDA / ICEF Project Completion Report 2000",
  },
  {
    id: "2",
    slug: "neped-2-cash-crops-microfinance",
    phase: "Phase II",
    name: "NEPED II — Cash Crops & Micro-Finance",
    period: "2001 – 2006",
    fundingAgency: "Indo-Canada Environment Facility (ICEF) / CIDA",
    budgetOrScale: "₹825+ Crores Economic Turnover",
    category: "Agroforestry",
    objective: "Reinforced Jhum via cash crops benefiting 7,888 farmers. Women SHGs purchased 30 historic land plots.",
    overview: `Building upon the massive tree-planting base of Phase I, NEPED II expanded from silviculture into high-value cash crops, market linkages, and revolving micro-credit mechanisms. 

The program focused on breaking the historical cycle of dependency on government subsidies, instilling a culture of credit discipline and self-financing community asset creation. 

Most remarkably, NEPED II facilitated a legal and social breakthrough in customary tribal land rights by financing Women's Self Help Groups (SHGs) to purchase and own 30 distinct plots of agricultural land in their own right.`,
    keyObjectives: [
      "Introduce high-value cash crops into agroforestry systems (cardamom, ginger, passion fruit, turmeric, large cardamom).",
      "Establish village-level revolving micro-credit funds with rigorous repayment mechanisms.",
      "Empower women's self-help groups through dedicated credit lines and collective asset accumulation.",
      "Create market linkage channels with regional and national commodity buyers.",
    ],
    majorMilestones: [
      "7,888 farming families directly supported with micro-credit and seed capital.",
      "Over ₹825 Crores in estimated rural cash crop value generated across assisted clusters.",
      "Women Self-Help Groups purchased 30 registered plots of land, transforming gender equity under customary law.",
      "Creation of village micro-credit committees with over 92% average loan recovery rates.",
    ],
    impactHighlights: [
      { value: "7,888", label: "Farmers Benefited", desc: "Transitioned from subsistence farming to commercial horticulture." },
      { value: "30 Plots", label: "Women's Land Equity", desc: "First collective female land ownership recognized under customary law." },
      { value: "₹825 Cr", label: "Economic Value", desc: "Estimated market value generated by cash crops over the 5-year phase." },
      { value: "92%+", label: "Recovery Rate", desc: "Revolving credit fund recovery across participatory village SHGs." },
    ],
    partnerAgencies: ["Indo-Canada Environment Facility (ICEF)", "CIDA", "State Bank of India & Regional Rural Banks", "Naga Mothers Association & Village Women Cells"],
    targetDistricts: "Statewide across all districts of Nagaland",
    heroImage: "/mountain-windmills.png",
    documentRef: "NEPED Phase II Evaluation Report (2006)",
  },
  {
    id: "3",
    slug: "neped-3-watershed-development-shifting-cultivation",
    phase: "Phase III",
    name: "NEPED III — Watershed Development in Shifting Cultivation (WDPSCA)",
    period: "2006 – 2012",
    fundingAgency: "Ministry of Agriculture, Govt. of India (WDPSCA)",
    budgetOrScale: "17,930 Hectares Watershed Coverage",
    category: "Conservation",
    objective: "Consolidating achievements through 17,930 ha watershed soil conservation and assisting 6,600 jhumias in 12 allied vocations.",
    overview: `NEPED III was funded under the Government of India's Special Central Assistance scheme for Watershed Development Project in Shifting Cultivation Areas (WDPSCA). 

This phase integrated hill slope stabilization, biological contouring, micro-water harvesting ponds, and soil nutrient preservation with a diverse basket of 12 allied livelihood vocations. 

By diversifying rural income sources away from pure timber, NEPED ensured that farming families had immediate monthly cash flow while their long-term forestry plantations matured.`,
    keyObjectives: [
      "Treat fragile mountain watersheds suffering from topsoil erosion due to shortened jhum cycles.",
      "Construct vegetative contour barriers, live check dams, and mountain silt traps.",
      "Support 6,600 jhumia households in adopting 12 non-timber and livestock vocations.",
      "Strengthen community watershed user groups for long-term ridge-to-valley management.",
    ],
    majorMilestones: [
      "17,930 hectares of arable and non-arable degraded catchment slopes biologically treated.",
      "6,600 jhumia families capacitated across 12 diverse allied livelihood vocations.",
      "Deployment of apiculture boxes, scientific pig sties, backyard poultry, and carpentry toolkits.",
      "Established community check-dams recharging downstream mountain drinking water springs.",
    ],
    impactHighlights: [
      { value: "17,930 ha", label: "Watershed Treated", desc: "Erosion-prone mountain catchment land stabilized with biological bunds." },
      { value: "6,600", label: "Jhumia Households", desc: "Supported with allied farm livelihood inputs and training." },
      { value: "12 Trades", label: "Vocation Menu", desc: "Piggery, poultry, goatery, rabbitry, apiculture, carpentry, weaving, and mills." },
      { value: "100%", label: "Community Execution", desc: "Executed directly by Village Watershed Committees without middle contractors." },
    ],
    partnerAgencies: ["Ministry of Agriculture & Farmers Welfare, GoI", "Planning Commission of India", "Land Resources Department, Nagaland"],
    targetDistricts: "Targeted critical watershed basins across 11 Nagaland districts",
    heroImage: "/forest.png",
    documentRef: "WDPSCA Project Review Dossier 2012",
  },
  {
    id: "4",
    slug: "neped-scen-biodiversity-traditional-knowledge",
    phase: "SCEN Project",
    name: "NEPED-SCEN Biodiversity & Traditional Knowledge",
    period: "2007 – 2010",
    fundingAgency: "Sir Dorabji Ratan Tata Trust (SDTT) in collab. with SACON",
    budgetOrScale: "Statewide Biodiversity Registry & CCAs",
    category: "Biodiversity & Climate",
    objective: "Strengthening Community Conservation Areas (CCAs), developing biodiversity registers, and protecting Blyth's Tragopan habitats.",
    overview: `Implemented under the Special Committee for Environmental Needs (SCEN) in partnership with the prestigious Salim Ali Centre for Ornithology and Natural History (SACON), this project was supported by the Sir Dorabji Ratan Tata Trust (SDTT). 

The project pioneered Community Conservation Areas (CCAs) where Village Councils enacted binding local laws against hunting, logging, and destructive stream fishing. 

It used the vulnerable Blyth's Tragopan (*Tragopan blythii*), the state bird of Nagaland, as an umbrella flagship species to conserve critical high-altitude primary cloud forests.`,
    keyObjectives: [
      "Facilitate Village Council resolutions for designating inviolate Community Conservation Areas (CCAs).",
      "Compile participatory People's Biodiversity Registers (PBRs) documenting indigenous botanical knowledge.",
      "Protect breeding habitats of Blyth's Tragopan and endangered Eastern Himalayan fauna.",
      "Train village green squads and youth monitors in wildlife tracking and GPS mapping.",
    ],
    majorMilestones: [
      "Facilitated over 40 Village Councils in enacting legal community conservation resolutions.",
      "Documented 300+ indigenous medicinal plants and traditional ecological management practices.",
      "Constructed ecological interpretation signages and boundary markings in major community reserves.",
      "Established community ecotourism guidelines to replace hunting with wildlife guiding.",
    ],
    impactHighlights: [
      { value: "40+ CCAs", label: "Protected Reserves", desc: "Customarily guarded community conservation forests established." },
      { value: "300+ Species", label: "Botanical Register", desc: "Documented indigenous botanical knowledge and medicinal flora." },
      { value: "Flagship", label: "Blyth's Tragopan", desc: "Habitat preservation for Nagaland's vulnerable state bird." },
      { value: "Zero Poaching", label: "Village Charters", desc: "Council penalties instituted against wild game hunting and dynamite fishing." },
    ],
    partnerAgencies: ["Sir Dorabji Ratan Tata Trust (SDTT)", "Salim Ali Centre for Ornithology and Natural History (SACON)", "Department of Environment, Forests & Climate Change"],
    targetDistricts: "Kohima, Phek, Zunheboto, and Wokha hill ranges",
    heroImage: "/forest.png",
    documentRef: "SACON-NEPED Biodiversity Monograph (2010)",
  },
  {
    id: "5",
    slug: "community-piggery-foddorizer-project",
    phase: "Livestock Innovation",
    name: "Community-Based Piggery Livelihood Project & Foddorizer",
    period: "2012 – 2016",
    fundingAgency: "Navajbhai Ratan Tata Trust (NRTT) & State Plan",
    budgetOrScale: "4,200 Resource-Poor Families",
    category: "Handicrafts & Livelihood",
    objective: "Assisted 4,200 families with LSP veterinary model and invented the 'Foddorizer', saving 1.5 lakh trees annually in firewood.",
    overview: `Pork is an indispensable staple and economic asset in Naga culture, but farmers faced two acute challenges: heavy piglet mortality due to Classical Swine Fever (CSF) and immense firewood depletion from boiling pig feed daily. 

NEPED answered both challenges with breakthroughs: 
1) Training village youth as certified Livestock Service Providers (LSPs) equipped with cold-chain vaccine kits, and 
2) Designing and fabricating the indigenous 'Foddorizer' boiler, which utilized specialized thermal retention baffles to cut firewood consumption by over 60%.`,
    keyObjectives: [
      "Reduce piglet mortality through localized village-level veterinary vaccination networks (LSPs).",
      "Fabricate and distribute the fuel-efficient 'Foddorizer' pig feed boiler.",
      "Improve breed genetics through selective crossing and artificial insemination.",
      "Establish village-managed revolving livestock banks for widows and marginal households.",
    ],
    majorMilestones: [
      "4,200 rural families provided with breeding stock, fattening stock, and scientific pig sties.",
      "Fabrication and installation of hundreds of 'Foddorizer' units, saving an estimated 1.5 lakh trees annually in firewood.",
      "LSP network contained CSF outbreaks across 80+ villages, protecting crores in household wealth.",
      "Published the standard handbook on Indigenous Animal Husbandry & Fuel Conservation.",
    ],
    impactHighlights: [
      { value: "1.5 Lakh", label: "Trees Saved/Year", desc: "Drastic reduction in domestic timber cutting for cooking animal feed." },
      { value: "4,200", label: "Families Empowered", desc: "Resource-poor rural households earning stable monthly livestock income." },
      { value: "60% Less", label: "Firewood Needed", desc: "Thermal efficiency gain delivered by the indigenous Foddorizer chamber." },
      { value: "80+ LSPs", label: "Rural Vets Trained", desc: "Local youth providing doorstep vaccination and deworming services." },
    ],
    partnerAgencies: ["Navajbhai Ratan Tata Trust (NRTT)", "Animal Husbandry & Veterinary Services Dept", "Tata Trusts Development Initiatives"],
    targetDistricts: "Mon, Tuensang, Longleng, Kiphire, and Peren districts",
    heroImage: "/microgrid.png",
    documentRef: "NRTT Livestock Innovation Technical Dossier 2016",
  },
  {
    id: "6",
    slug: "thematic-exhibition-indian-handicrafts",
    phase: "Textiles & Crafts I",
    name: "Thematic Exhibition of Indian Handicrafts",
    period: "2021 – 2022",
    fundingAgency: "Office of the Development Commissioner (Handicrafts), Ministry of Textiles, Govt. of India",
    budgetOrScale: "State Capital & Commercial Hub Showcases",
    category: "Handicrafts & Livelihood",
    objective: "Provided marketing platforms in Kohima and Dimapur to showcase and test market ethnic products developed by artisan clusters.",
    overview: `Organized in the state capital Kohima and commercial hub Dimapur, these thematic exhibitions provided direct sales avenues for rural weavers, woodcarvers, bamboo craftsmen, and traditional jewelry makers. 

By eliminating exploitative middlemen, artisans received 100% of consumer sales proceeds, while establishing forward linkages with urban lifestyle boutiques and regional export houses.`,
    keyObjectives: [
      "Provide direct commercial exhibition space to remote tribal craft clusters.",
      "Facilitate direct artisan-to-buyer transactions and feedback on contemporary market demand.",
      "Promote indigenous handloom weaves, cane crafts, terracotta pottery, and bead ornaments.",
      "Create digital catalogs and artisan profile directories for recurring B2B procurement.",
    ],
    majorMilestones: [
      "Over 120 artisan master-craftspersons provided free exhibition stalls.",
      "Recorded cumulative direct spot sales exceeding ₹45 Lakhs over exhibition cycles.",
      "Facilitated 18 institutional supply orders with regional department stores and handicraft emporia.",
      "Conducted on-site digital payment onboarding for cashless rural artisan transactions.",
    ],
    impactHighlights: [
      { value: "120+", label: "Artisans Showcased", desc: "Indigenous weavers, wood sculptors, and cane craftspersons." },
      { value: "₹45L+", label: "Direct Spot Sales", desc: "Direct consumer income generated with zero middleman deductions." },
      { value: "18 Orders", label: "B2B Linkages", desc: "Long-term institutional procurement contracts established." },
      { value: "100%", label: "Tribal Provenance", desc: "Authentic certified GI-heritage Naga handloom and craft products." },
    ],
    partnerAgencies: ["Development Commissioner (Handicrafts), Ministry of Textiles, GoI", "Nagaland Handloom & Handicrafts Development Corporation", "Tribal Co-operative Marketing Federation (TRIFED)"],
    targetDistricts: "Kohima & Dimapur Exhibition Arenas",
    heroImage: "/solar-field.png",
  },
  {
    id: "7",
    slug: "handicraft-heritage-fashion-show",
    phase: "Cultural Outreach",
    name: "Handicraft Heritage Fashion Show & Cultural Outreach",
    period: "2021 – 2022",
    fundingAgency: "Office of the Development Commissioner (Handicrafts), Ministry of Textiles, Govt. of India",
    budgetOrScale: "State Heritage Cultural Showcase",
    category: "Handicrafts & Livelihood",
    objective: "Spreading awareness about Naga handicrafts, indigenous heritage, culture, and associated textile traditions.",
    overview: `This landmark cultural outreach showcased the intricate motifs, weaving geometries, and organic dyes of the 16 recognized Naga tribes in high-profile runway shows and multimedia presentations. 

The initiative paired traditional village loin-loom master weavers with contemporary Naga fashion designers, blending ancestral textile heritage with modern apparel styling for national runways.`,
    keyObjectives: [
      "Elevate traditional Naga back-strap and loin-loom textiles on mainstream fashion platforms.",
      "Educate younger generations on the sacred symbolism and clan significance of tribal shawls.",
      "Incentivize youth to take up traditional textile arts as a lucrative creative profession.",
      "Generate national media coverage for northeastern organic textile arts.",
    ],
    majorMilestones: [
      "16 tribal textile collections curated and presented on professional runways.",
      "Engaged 45 indigenous master weavers and 12 emerging Naga fashion designers.",
      "Extensive coverage in national design periodicals and northeastern television networks.",
      "Creation of an archival lookbook documenting historical dyeing recipes and loom patterns.",
    ],
    impactHighlights: [
      { value: "16 Tribes", label: "Loom Motifs", desc: "Complete visual documentation of ancestral tribal weaving patterns." },
      { value: "45 Weavers", label: "Village Artisans", desc: "Directly compensated and credited on national designer platforms." },
      { value: "12 Designers", label: "Creative Youth", desc: "Collaborations bridging ancestral loomed fabrics with modern garments." },
      { value: "National", label: "Media Outreach", desc: "Showcasing Naga cultural craftsmanship to metropolitan markets." },
    ],
    partnerAgencies: ["Ministry of Textiles, Govt. of India", "Department of Art & Culture, Nagaland", "National Institute of Fashion Technology (NIFT) Alumni Network"],
    targetDistricts: "Kohima & Dimapur Cultural Amphitheatres",
    heroImage: "/52 NEPeD members at Nagaland Youth Summit 2016.jpg",
  },
  {
    id: "8",
    slug: "artisan-brand-building-seminars",
    phase: "Capacity Building",
    name: "Artisan Brand Building Seminars & Workshops",
    period: "2021 – 2022",
    fundingAgency: "Office of the Development Commissioner (Handicrafts), Ministry of Textiles, Govt. of India",
    budgetOrScale: "Artisan Entrepreneurship Workshops",
    category: "Handicrafts & Livelihood",
    objective: "Sensitizing artisans and NGO personnel on the importance of brand building for unique ethnic handicraft items.",
    overview: `Addressing the gap between exceptional hand craftsmanship and modern commercial packaging, NEPED conducted intensive brand building seminars. 

Artisans were trained in product standardization, trademark registration, storytelling, eco-friendly packaging, pricing psychology, and direct-to-consumer digital marketing via social media.`,
    keyObjectives: [
      "Train rural craftspersons in brand identity, trademarking, and product narrative crafting.",
      "Introduce sustainable paper and woven bamboo packaging for luxury ethnic exports.",
      "Equip artisans with digital cataloging, photography, and mobile payment skills.",
      "Build managerial capacity among craft cooperative leaders and local SHG federations.",
    ],
    majorMilestones: [
      "Conducted 8 comprehensive masterclasses across district craft headquarters.",
      "Over 350 rural artisans and NGO facilitators certified in creative brand entrepreneurship.",
      "Helped 24 artisan collectives register custom brand logos and social commerce storefronts.",
      "Distributed standardized product packaging kits crafted from recycled mountain fibres.",
    ],
    impactHighlights: [
      { value: "350+", label: "Artisans Trained", desc: "Mastered product branding, cost accounting, and digital showcases." },
      { value: "24 Brands", label: "Collectives Formed", desc: "Self-managed artisan micro-brands established across districts." },
      { value: "+35%", label: "Value Premium", desc: "Average price increase achieved through branded packaging and certification." },
      { value: "8 Workshops", label: "District Sessions", desc: "Hands-on masterclasses conducted with industry design experts." },
    ],
    partnerAgencies: ["Ministry of Textiles, GoI", "Indian Institute of Entrepreneurship (IIE) Guwahati", "Nagaland Handloom & Handicrafts Association"],
    targetDistricts: "Kohima, Dimapur, Mokokchung, and Wokha",
    heroImage: "/mountain-windmills.png",
  },
  {
    id: "9",
    slug: "handicraft-emporia-tuensang",
    phase: "Retail Infrastructure",
    name: "Setting up of Handicraft Emporia at Tuensang",
    period: "2024 – 2026",
    fundingAgency: "Office of the Development Commissioner (Handicrafts), Ministry of Textiles, Govt. of India",
    budgetOrScale: "Dedicated Eastern Nagaland Retail Complex",
    category: "Handicrafts & Livelihood",
    objective: "Assisting local eastern Nagaland artisans to enhance product quality, finishing, and retail market access.",
    overview: `Eastern Nagaland represents some of the most vibrant yet geographically isolated craft communities in the state. 

This project establishes a permanent state-of-the-art Handicraft Emporium and Craft Testing Center in Tuensang, giving Chang, Khiamniungan, Konyak, Phom, Sangtam, and Yimkhiung artisans a centralized showroom, finishing facility, and direct retail sales hub.`,
    keyObjectives: [
      "Construct and operationalize a multi-tribal craft showroom and retail emporium in Tuensang town.",
      "Provide precision finishing tools and quality certification for raw tribal crafts.",
      "Create a permanent logistics and warehousing node for national e-commerce fulfillment.",
      "Empower eastern Nagaland artisan federations through participatory management committees.",
    ],
    majorMilestones: [
      "Architectural planning and site finalization in central Tuensang district headquarters.",
      "Establishment of artisan cluster database covering 6 eastern Naga tribal communities.",
      "Procurement of wood seasoning, bamboo curing, and precision yarn winding machinery.",
      "Active retail operations projected to directly benefit 1,200+ craft households upon full launch.",
    ],
    impactHighlights: [
      { value: "1,200+", label: "Target Artisans", desc: "Remote craft households across 6 eastern Nagaland tribal areas." },
      { value: "Central Hub", label: "Tuensang Emporium", desc: "Permanent retail showroom and quality finishing facility." },
      { value: "6 Tribes", label: "Eastern Nagaland", desc: "Direct market linkage for Chang, Khiamniungan, Konyak, Phom, Sangtam & Yimkhiung." },
      { value: "2024–2026", label: "Active Project", desc: "Ongoing central infrastructure development project." },
    ],
    partnerAgencies: ["Ministry of Textiles, Govt. of India", "Eastern Nagaland Peoples Organization (ENPO) Artisan Cells", "District Administration Tuensang"],
    targetDistricts: "Tuensang, Mon, Longleng, Kiphire, Noklak, and Shamator",
    heroImage: "/forest.png",
  },
  {
    id: "10",
    slug: "value-addition-non-timber-forest-products",
    phase: "NTFP Agroforestry",
    name: "Value Addition to Non-Timber Forest Products (NTFP)",
    period: "2022 – 2023",
    fundingAgency: "Ch. Charan Singh National Institute of Agricultural Marketing (CCS NIAM), Ministry of Agriculture, GoI",
    budgetOrScale: "Specialized Forest Harvest Processing",
    category: "Agroforestry",
    objective: "Sensitizing and training forest-dwelling farmers about commercial value addition and marketing of wild NTFP harvests.",
    overview: `Nagaland's pristine forests abound in wild culinary herbs, wild honey, natural edible mushrooms, wild apple, star anise, wild cinnamon, and herbal bark. Historically, these valuable products were gathered for meager local sales or spoiled due to lack of processing. 

NEPED collaborated with CCS NIAM Jaipur to train forest gatherers in hygienic solar drying, vacuum sealing, moisture testing, and commercial branding.`,
    keyObjectives: [
      "Identify high-value commercial NTFP species across different altitude zones in Nagaland.",
      "Equip forest-dwelling families with solar dehydrators, stainless steel processing tools, and vacuum sealers.",
      "Eliminate post-harvest fungal spoilage through scientific grading and packaging.",
      "Link village NTFP collectors directly with organic gourmet food and Ayurvedic pharmaceutical brands.",
    ],
    majorMilestones: [
      "Over 400 wild produce gatherers trained across 20 biodiversity-rich villages.",
      "Established 5 village solar-drying clusters for wild apple chips, wild garlic, and indigenous turmeric.",
      "Developed retail packaging and food-grade lab certifications for 8 wild forest products.",
      "Increased village gate prices for raw forest harvests by over 45% through simple post-harvest value addition.",
    ],
    impactHighlights: [
      { value: "400+", label: "Gatherers Trained", desc: "Forest-fringe farmers trained in scientific wild harvesting." },
      { value: "8 Products", label: "Standardized Line", desc: "Gourmet wild apple, honey, mushroom, and organic wild herb packs." },
      { value: "+45%", label: "Income Surge", desc: "Higher farm-gate earnings achieved via solar drying and packaging." },
      { value: "Zero Waste", label: "Sustainable Harvest", desc: "Regulated collection quotas ensuring zero ecological damage to forest trees." },
    ],
    partnerAgencies: ["CCS National Institute of Agricultural Marketing (NIAM) Jaipur", "Ministry of Agriculture, Govt. of India", "Nagaland Bio Resource Mission (NBRM)"],
    targetDistricts: "Phek, Zunheboto, and Kohima upland forest tracts",
    heroImage: "/mountain-windmills.png",
  },
  {
    id: "11",
    slug: "naffc-climate-change-adaptation",
    phase: "Climate Resilience",
    name: "NAFCC — National Adaptation Fund for Climate Change",
    period: "2018 – 2026",
    fundingAgency: "Ministry of Environment, Forest and Climate Change (MoEFCC) & NABARD, Govt. of India",
    budgetOrScale: "₹24+ Crores Multidisciplinary Adaptation",
    category: "Biodiversity & Climate",
    objective: "Building community climate resilience, spring-shed rejuvenation, and adaptive mountain agricultural techniques.",
    overview: `Funded under the National Adaptation Fund for Climate Change (NAFCC) with NABARD as the National Implementing Entity (NIE), this project addresses erratic rainfall, drying mountain springs, and soil moisture stress caused by climate change in the Eastern Himalayas. 

NEPED implements comprehensive ridge-to-valley spring-shed revival, rain-water percolation trenches, resilient agroforestry crops, and micro-irrigation systems.`,
    keyObjectives: [
      "Rejuvenate dying perennial mountain springs through hydro-geological mapping and recharge trenches.",
      "Introduce climate-resilient indigenous crop varieties adapted to drought and unseasonal monsoons.",
      "Construct community gravity-fed micro-irrigation ponds and check dams.",
      "Conduct meteorological monitoring and village-level Climate Vulnerability Assessments (CVA).",
    ],
    majorMilestones: [
      "Hydro-geological spring-shed treatment executed across 50+ critical mountain catchment zones.",
      "Over 120 recharge ponds and 5,000 meters of contour percolation trenches excavated.",
      "Water discharge in targeted village springs increased by an average of 25–40% during dry winter months.",
      "Over 2,500 farming families provided with drip irrigation lines and climate-adaptive seed banks.",
    ],
    impactHighlights: [
      { value: "50+ Springs", label: "Rejuvenated Springs", desc: "Critical drinking water sources recharged with hydro-geological trenches." },
      { value: "+30% Flow", label: "Winter Discharge", desc: "Increased perennial spring water flow during dry lean seasons." },
      { value: "2,500+", label: "Farmers Insulated", desc: "Households protected against erratic monsoons and crop failure." },
      { value: "2018–2026", label: "Flagship Mission", desc: "Active national climate adaptation project in Nagaland." },
    ],
    partnerAgencies: ["National Bank for Agriculture and Rural Development (NABARD)", "MoEFCC, Govt. of India", "Nagaland State Climate Change Cell"],
    targetDistricts: "Vulnerable hill ranges in Kohima, Phek, Wokha, and Mokokchung",
    heroImage: "/forest.png",
    documentRef: "NABARD NAFCC Project Progress Evaluation 2024",
  },
  {
    id: "12",
    slug: "neped-4-forest-biodiversity-management-kfw",
    phase: "Phase IV (Current)",
    name: "NEPED IV — Forest & Biodiversity Management in the Himalaya (FBMP)",
    period: "2019 – Present",
    fundingAgency: "Federal Republic of Germany through KfW Development Bank",
    budgetOrScale: "€ multi-million Indo-German Bilateral Partnership",
    category: "Biodiversity & Climate",
    objective: "Effective and sustainable management of Community Conserved Areas (CCAs) across Nagaland landscapes for improved connectivity and biodiversity conservation, while supporting forest-dependent communities.",
    overview: `NEPED IV represents the pinnacle of international biodiversity collaboration in Nagaland, funded by the Government of Germany through the KfW Development Bank under the Forest and Biodiversity Management in the Himalaya (Nagaland) program. 

The initiative protects critical ecological corridors between fragmented community forests, enforces customary conservation charters, introduces biological GPS boundary tagging, and creates sustainable livelihood alternatives for forest-dependent villagers.`,
    keyObjectives: [
      "Establish and interconnect high-biodiversity Community Conserved Areas (CCAs) across mountain landscapes.",
      "Improve ecological connectivity for endangered Himalayan flora and fauna.",
      "Implement Community Conservation Plans (CCPs) formulated by Village Councils with women's representation.",
      "Provide green livelihood compensation funds for villages retiring forest land from active logging or jhum.",
    ],
    majorMilestones: [
      "Over 70 Village Community Conserved Areas mapped, legally demarcated, and GIS-registered.",
      "Establishment of community forest nurseries propagating endangered indigenous hardwood and medicinal species.",
      "Deployment of village eco-guards equipped with camera traps and digital wildlife monitoring tools.",
      "Direct disbursement of community development grants to participating villages for solar lighting, water harvesting, and health posts.",
    ],
    impactHighlights: [
      { value: "70+ CCAs", label: "Corridors Mapped", desc: "Legally demarcated biodiversity corridors across Nagaland ranges." },
      { value: "KfW Germany", label: "Global Partner", desc: "Bilateral environmental conservation partnership with German Development Bank." },
      { value: "GIS Tagged", label: "Boundary Demarcation", desc: "Digital boundary records resolving ancestral land border conflicts." },
      { value: "Present", label: "Active Phase", desc: "Currently active leading biodiversity initiative in the state." },
    ],
    partnerAgencies: ["KfW Development Bank (Germany)", "Ministry of Environment, Forest and Climate Change (MoEFCC)", "Department of Environment, Forests & Climate Change, Nagaland"],
    targetDistricts: "Landscape clusters across Kohima, Phek, Peren, Wokha, Zunheboto, and Tuensang",
    heroImage: "/forest.png",
    documentRef: "KfW FBMP Project Inception & Implementation Charter",
  },
  {
    id: "13",
    slug: "state-level-workshop-ecotourism-development",
    phase: "Eco-Tourism",
    name: "State Level Workshop on Eco-Tourism Development",
    period: "2025 – 2026",
    fundingAgency: "North Eastern Council (NEC), Ministry of DoNER, Govt. of India",
    budgetOrScale: "Statewide Capacity & Strategy Framework",
    category: "Conservation",
    objective: "Empowering village communities through eco-tourism: conservation, sustainable livelihoods, and cultural hospitality.",
    overview: `Funded by the North Eastern Council (NEC), this state-level strategic mission harnesses Nagaland's unmatched bio-cultural diversity to create high-value, low-impact community ecotourism circuits. 

NEPED trains village youth and homestay hosts in nature guiding, safety protocols, waste management, cultural storytelling, and digital reservation systems, turning living forests into permanent community economic engines.`,
    keyObjectives: [
      "Develop a sustainable community ecotourism roadmap for Nagaland's Community Conserved Areas.",
      "Train village youth as certified trekking guides, birdwatching naturalists, and rescue responders.",
      "Establish standards for eco-homestays utilizing traditional bamboo and timber architecture.",
      "Create direct online discovery and booking channels for international and domestic nature travelers.",
    ],
    majorMilestones: [
      "Comprehensive state workshop convening Village Council chairpersons, tourism experts, and homestay hosts.",
      "Drafting of the standard 'Community Eco-Tourism Code of Conduct' for protected wildlife zones.",
      "Certification of 150+ village guides in wilderness first-aid, bird identification, and visitor hospitality.",
      "Pilot launching of 6 community-managed trekking and birding circuits across pristine mountain ridges.",
    ],
    impactHighlights: [
      { value: "150+ Guides", label: "Village Youth", desc: "Trained in wilderness first-aid, birding, and cultural guiding." },
      { value: "6 Circuits", label: "Trekking Routes", desc: "Regulated high-altitude eco-trails through community cloud forests." },
      { value: "NEC / DoNER", label: "Regional Support", desc: "Funded by North Eastern Council under Ministry of Development of NE Region." },
      { value: "2025–2026", label: "Active Project", desc: "Current statewide capacity and policy development framework." },
    ],
    partnerAgencies: ["North Eastern Council (NEC)", "Ministry of DoNER, GoI", "Department of Tourism, Govt. of Nagaland"],
    targetDistricts: "Statewide across all tourism circuits in Nagaland",
    heroImage: "/mountain-windmills.png",
  },
];
