export interface NepedProject {
  id: string;
  slug: string;
  phase: string;
  name: string;
  period: string;
  fundingAgency: string;
  category: "Agroforestry" | "Biodiversity & Climate" | "Handicrafts & Livelihood" | "Conservation";
  objective: string;
  heroImage: string;
}

// Verbatim from "Projects Implemented under NEPED" (source document table).
// Only fields present in that table are stored here — no invented stats, milestones, or narrative.
export const NEPED_PROJECTS: NepedProject[] = [
  {
    id: "1",
    slug: "neped-1-agroforestry-shifting-cultivation",
    phase: "NEPED I",
    name: "NEPED I",
    period: "1995 – 2000",
    fundingAgency: "Indo-Canada Environment Facility (ICEF) under Canadian International Development Agency (CIDA)",
    category: "Agroforestry",
    objective: "Planting trees along with jhum (slash and burn / Shifting cultivation) practiced.",
    heroImage: "/forest.webp",
  },
  {
    id: "2",
    slug: "neped-2-cash-crops-microfinance",
    phase: "NEPED II",
    name: "NEPED II",
    period: "2001 – 2006",
    fundingAgency: "Indo-Canada Environment Facility (ICEF) under Canadian International Development Agency (CIDA)",
    category: "Agroforestry",
    objective: "Reinforced Jhum through cash crop plantation (Micro Finance).",
    heroImage: "/mountain-windmills.webp",
  },
  {
    id: "3",
    slug: "neped-3-watershed-development-shifting-cultivation",
    phase: "NEPED III",
    name: "NEPED III – Watershed Development Project in Shifting Cultivation Areas (WDPSCA)",
    period: "2006 – 2012",
    fundingAgency: "Ministry of Agriculture, Govt. of India",
    category: "Conservation",
    objective: "Consolidating the achievements of NEPED-I and NEPED-II through watershed development.",
    heroImage: "/forest.webp",
  },
  {
    id: "4",
    slug: "neped-scen-biodiversity-traditional-knowledge",
    phase: "NEPED-SCEN",
    name: "NEPED-SCEN Program in Collaboration with Salim Ali Center for Ornithology and Natural History (SACON)",
    period: "2007 – 2010",
    fundingAgency: "Sir Dorabji Ratan Tata Trust (SDTT)",
    category: "Biodiversity & Climate",
    objective:
      "Strengthening of Community Conservation Areas (CCAs), developing biodiversity registers, resource maps and management plans, and developing the process by which biodiversity registers are legally protected; documentation of indigenous Ecological Knowledge.",
    heroImage: "/forest.webp",
  },
  {
    id: "5",
    slug: "community-piggery-foddorizer-project",
    phase: "Project 05",
    name: "Enhancing Livelihood through Community Based Piggery",
    period: "2012 – 2016",
    fundingAgency: "Navajbhai Ratan Tata Trust (NRTT)",
    category: "Handicrafts & Livelihood",
    objective: "Pig Breeders Concept.",
    heroImage: "/microgrid.webp",
  },
  {
    id: "6",
    slug: "thematic-exhibition-indian-handicrafts",
    phase: "Project 06",
    name: "Thematic Exhibition of Indian Handicraft in Kohima and Dimapur",
    period: "2021 – 22",
    fundingAgency: "Ministry of Textiles, Govt. of India",
    category: "Handicrafts & Livelihood",
    objective: "To provide marketing platform to showcase and test market the products developed by the artisans in cluster.",
    heroImage: "/solar-field.webp",
  },
  {
    id: "7",
    slug: "handicraft-heritage-fashion-show",
    phase: "Project 07",
    name: "Product Promotion Fashion Show",
    period: "2021 – 22",
    fundingAgency: "Ministry of Textiles, Govt. of India",
    category: "Handicrafts & Livelihood",
    objective: "To spread awareness about Indian handicrafts, the heritage, culture and tradition associated with it.",
    heroImage: "/52 NEPeD members at Nagaland Youth Summit 2016.webp",
  },
  {
    id: "8",
    slug: "artisan-brand-building-seminars",
    phase: "Project 08",
    name: "Seminar & Workshops",
    period: "2021 – 22",
    fundingAgency: "Ministry of Textiles, Govt. of India",
    category: "Handicrafts & Livelihood",
    objective: "To sensitize the artisans, and personnel of NGOs on importance of brand building of unique handicraft items of ethnic group.",
    heroImage: "/mountain-windmills.webp",
  },
  {
    id: "9",
    slug: "handicraft-emporia-tuensang",
    phase: "Project 09",
    name: "Setting up of Emporia at Tuensang",
    period: "2024 – 26",
    fundingAgency: "Ministry of Textiles, Govt. of India",
    category: "Handicrafts & Livelihood",
    objective: "To assist the local artisans to enhance their products.",
    heroImage: "/forest.webp",
  },
  {
    id: "10",
    slug: "value-addition-non-timber-forest-products",
    phase: "Project 10",
    name: "Value Addition to Non-Timber Forest Products (NTFP)",
    period: "2022 – 23",
    fundingAgency: "CCS National Institute of Agricultural Marketing (CCS NIAM), Ministry of Agriculture, Govt. of India",
    category: "Agroforestry",
    objective: "Sensitize farmers about the marketing activities of NTFP products.",
    heroImage: "/mountain-windmills.webp",
  },
  {
    id: "11",
    slug: "nafcc-climate-change-adaptation",
    phase: "Project 11",
    name: "NAFCC – National Adaptation Fund for Climate Change",
    period: "2018 – 26",
    fundingAgency: "Ministry of Agriculture, Govt. of India",
    category: "Biodiversity & Climate",
    objective: "",
    heroImage: "/forest.webp",
  },
  {
    id: "12",
    slug: "neped-4-forest-biodiversity-management-kfw",
    phase: "NEPED IV",
    name: "NEPED IV – Forest and Biodiversity Management in the Himalaya Nagaland Project (FBMP)",
    period: "2019 – Till Date",
    fundingAgency: "Federal Republic of Germany through KfW",
    category: "Biodiversity & Climate",
    objective:
      "Effective and sustainable management of Community Conserved Areas (CCAs) in selected landscapes in Nagaland for improved connectivity and conservation of biodiversity, while supporting forest dependent communities in their livelihood activities.",
    heroImage: "/forest.webp",
  },
];
