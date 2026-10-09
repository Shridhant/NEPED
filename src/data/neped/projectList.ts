export type ProjectTheme = "Agroforestry" | "Conservation" | "Energy" | "Livelihoods";

export interface ProjectListItem {
  name: string;
  /** Short description after the name */
  focus: string;
  period: string;
  funder: string;
  /** Homepage filter chip */
  theme: ProjectTheme;
}

// Project list as supplied by the NEPED team (Oct 2026), oldest first. Shown on the homepage timeline and the Projects page table.
export const PROJECT_LIST: ProjectListItem[] = [
  { name: "NEPED-I", focus: "Tree planting on jhum land", period: "1995–2000", funder: "ICEF / CIDA (Canada)", theme: "Agroforestry" },
  { name: "NEPED-II", focus: "Cash crops & micro-finance", period: "2001–2006", funder: "ICEF / CIDA (Canada)", theme: "Agroforestry" },
  { name: "NEPED-III (WDPSCA)", focus: "Watershed development", period: "2006–2012", funder: "Ministry of Agriculture, GoI", theme: "Conservation" },
  { name: "NEPED-SCEN", focus: "Community Conserved Areas", period: "2007–2010", funder: "Sir Dorabji Tata Trust (SDTT)", theme: "Conservation" },
  { name: "Community-based piggery", focus: "", period: "2012–2016", funder: "Navajbhai Ratan Tata Trust (NRTT)", theme: "Livelihoods" },
  { name: "Pico Hydroger/Watermill installation (30 nos)", focus: "", period: "2015–2016", funder: "MNRE, GoI", theme: "Energy" },
  { name: "Development of Hydrogen", focus: "", period: "2017–2019", funder: "NEC", theme: "Energy" },
  { name: "NAFCC", focus: "Climate adaptation", period: "2018–2026", funder: "Ministry of Agriculture, GoI", theme: "Conservation" },
  { name: "NEPED-IV / FBMP", focus: "Forest & biodiversity (35 villages)", period: "2019–present", funder: "Federal Republic of Germany via KfW", theme: "Conservation" },
  { name: "Handicraft / NTFP / Emporia", focus: "", period: "2021–2025", funder: "Ministry of Textiles, GoI", theme: "Livelihoods" },
  { name: "Eco-tourism", focus: "", period: "2025–2026", funder: "North Eastern Council (NEC)", theme: "Livelihoods" },
];
