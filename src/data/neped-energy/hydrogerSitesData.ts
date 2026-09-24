/**
 * Hydroger installation sites, as provided by NEPeD (names verbatim), grouped by district / state.
 *
 * NOTE: individual site coordinates were not provided. Each group's marker is placed at the
 * APPROXIMATE location of its district headquarters (Nagaland) or state capital (other states),
 * so the globe shows the district/state, not the exact site. Replace with exact site
 * coordinates when available.
 */
export type HydrogerSiteGroup = {
  id: string;
  /** District (Nagaland) or state name, as provided */
  name: string;
  /** Approximate marker position — district HQ / state capital */
  lat: number;
  lng: number;
  sites: string[];
};

export const HYDROGER_SITE_GROUPS: HydrogerSiteGroup[] = [
  {
    id: "tuensang",
    name: "TUENSANG",
    lat: 26.27,
    lng: 94.83,
    sites: ["Langnok", "Chiphur", "Shopelak", "Longra", "Kingjung", "Aniashu", "Kingpao", "Deithung", "Pang"],
  },
  {
    id: "longleng",
    name: "LONGLENG",
    lat: 26.49,
    lng: 94.82,
    sites: ["Yanglok", "Anaki C (L. Bulom's Farm)", "Yongyah"],
  },
  {
    id: "kiphire",
    name: "KIPHIRE",
    lat: 25.9,
    lng: 94.78,
    sites: ["Achumse's farm", "Hurong (Chemlongse's farm)", "Kaha", "Tukhinkiu Village"],
  },
  {
    id: "mon",
    name: "MON",
    lat: 26.73,
    lng: 95.03,
    sites: ["Sheangha wamsa", "Nyanhyu"],
  },
  {
    id: "kohima",
    name: "KOHIMA",
    lat: 25.67,
    lng: 94.11,
    sites: ["Khiyokie", "Tsiepama", "Logwesunyu", "Phesama", "Sendenyu Model Farm Village"],
  },
  {
    id: "mokokchung",
    name: "MOKOKCHUNG",
    lat: 26.32,
    lng: 94.51,
    sites: ["Salulamang", "Longkong", "Longkhum", "Kubolong"],
  },
  {
    id: "dimapur",
    name: "DIMAPUR",
    lat: 25.91,
    lng: 93.73,
    sites: ["Seithekima"],
  },
  {
    id: "peren",
    name: "PEREN",
    lat: 25.51,
    lng: 93.74,
    sites: ["Datui’s Farm"],
  },
  {
    id: "zunheboto",
    name: "ZUNHEBOTO",
    lat: 26.01,
    lng: 94.52,
    sites: ["Kheshepu", "Phushito's farm - Xuivi village"],
  },
  {
    id: "meghalaya",
    name: "MEGHALAYA",
    lat: 25.58,
    lng: 91.89,
    sites: ["Sakhri Village", "Mawlyngbna"],
  },
  {
    id: "sikkim",
    name: "SIKKIM",
    lat: 27.34,
    lng: 88.61,
    sites: ["Martam"],
  },
  {
    id: "arunachal-pradesh",
    name: "ARUNACHAL PRADESH",
    lat: 27.08,
    lng: 93.61,
    sites: ["Pongging village"],
  },
];
