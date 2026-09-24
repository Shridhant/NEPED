/**
 * NEPED phases — text verbatim from NepedBige/bigeneped.txt ("more data").
 * Edits: "Draft" PDF watermark removed, "&amp;" rendered as "&", "Trogopan" → "Tragopan" (confirmed).
 * overview = first sentence of each description.
 */
/** An entry with its own detail page (phases, success stories, …). */
export type NepedArticle = {
  slug: string;
  title: string;
  overview: string;
  description: string;
  years?: string;
  amount?: string;
  funded?: string;
  /** Optional photo; a placeholder panel is shown until provided */
  image?: { src: string; alt: string };
};

export type NepedPhase = NepedArticle;

export const NEPED_PHASES: NepedPhase[] = [
  {
    "slug": "neped-i",
    "title": "NEPED-I",
    "years": "1995-2000",
    "overview": "NEPED-I undertook a project for planting trees along with jhum (slash and burn/ Shifting cultivation) practiced by different tribes in Nagaland.",
    "description": "NEPED-I undertook a project for planting trees along with jhum (slash and burn/ Shifting cultivation) practiced by different tribes in Nagaland. The project has established 1794 test plots (2 test plots each, measuring 3 hectares per village) in jhum fields in 854 villages across all (8) the districts covering all 16 tribes of Nagaland. More than 7.8 million economic trees were planted in 5500 hectares with replication ratio of 1:6. Through this project more than 7000 farmers and 2000 state government officials had undergone various training programmes for capacity development.",
    "amount": "Amount INR 1285 Lakhs = (Approx) USD 4,000,000.",
    "funded": "Funded by the ICEF (Indo-Canada Environment Facility) under CIDA, Building upon Traditional agriculture in Nagaland, 1995-2000."
  },
  {
    "slug": "neped-ii",
    "title": "NEPED-II",
    "years": "2001-2006",
    "overview": "NEPED-II had focus on creating a micro credit mechanism in the villages, through which a paradigm shift from subsidy oriented mindset of the people towards self-reliance was created.",
    "description": "NEPED-II had focus on creating a micro credit mechanism in the villages, through which a paradigm shift from subsidy oriented mindset of the people towards self-reliance was created. NEPED’s approach was a novel approach to acclimatize the people to a banking economy without a culture shock. The women groups and formal SHGs were also empowered to access the village funds, in the process, the villagers created permanent assets and adopted many forms of agro-forestry through cultivation of high valued perennial cash crop. They also cultivated vegetable and other short term crops in these plots and recovered the loans by selling the farm produces.",
    "amount": "Amount INR 1285 Lakhs = (Approx) USD 4,000,000.",
    "funded": "Funded by the ICEF (Indo-Canada Environment Facility) under CIDA, Adding value to Shifting cultivation in Nagaland. 2001-2006."
  },
  {
    "slug": "neped-iii",
    "title": "NEPED-III",
    "years": "2006-2012",
    "overview": "NEPED-III is concentrated on consolidating the achievements of the first two phases through watershed development.",
    "description": "NEPED-III is concentrated on consolidating the achievements of the first two phases through watershed development. An area of 17,930 ha of arable and non-arable land was treated employing soil erosion control measures, and Reforestation through nurtured natural regeneration and enrichment plantation, enhancing tree population in Jhum fallow, preservation of fire tolerant poles and encouraging maintenance of naturally regenerated tree saplings through selective weeding. Direct sowing of tree seeds, where there is less population, and also managing the coppices from cut stumps. These activities also acted in strengthening community Biodiversity conservation. Through this project another 6600 jhumias were assisted with a menu of land based livelihood activities such as piggery, poultry, goatery, rabbitry, apiculture, blacksmith, carpentry, weaving, rice mills, fishery, basketry, carving etc.",
    "amount": "Amount : INR 1782 Lakhs= (Approx) USD 4,000,000",
    "funded": "Funded by the Government of India, Ministry of Agriculture and Co-operation for Watershed Development Project in Shifting Cultivation Areas (WDPSCA), 2006-2012."
  },
  {
    "slug": "neped-scen",
    "title": "NEPED-SCEN",
    "years": "2007-2010",
    "overview": "To develop mechanisms for the community conservation efforts in Nagaland, NEPED had played advocacy role, wherein communities were advice to set aside areas within village lands, with restrictions on hunting, fishing and logging by way of resolutions passed by the village councils.",
    "description": "To develop mechanisms for the community conservation efforts in Nagaland, NEPED had played advocacy role, wherein communities were advice to set aside areas within village lands, with restrictions on hunting, fishing and logging by way of resolutions passed by the village councils. Conservation of our natural resources will strengthen biodiversity leading to livelihood benefits. NEPED in collaboration with Salim Ali Center for Ornithology & Natural History (SACON) has implemented NEPED-SCEN program in Nagaland with the following objectives of formation of joint community conservation areas, to assist villages, which have or propose to have community conservation areas, in developing biodiversity registers, resource maps and management plans, and develop the process by which biodiversity registers are legally protected. Advocate and assist in the establishment of community conservation areas where such efforts are currently lacking. Identify technical, developmental and financial requirements of community conservation areas. Provide necessary technical support and linkages to information, processes, markets and developmental programs to the villages that are developing community conservation areas. Use the Blyth’s Tragopan, which is the state bird of Nagaland, as a flag-ship species in enhancing conservation reach.",
    "amount": "Amount : INR 238 Lakhs = (Approx) USD 530,000",
    "funded": "Funded by Sir Dorabji Ratan Tata Trust (SDTT), Strengthening Community Conservation Efforts in Nagaland, 2007-2010"
  }
];
