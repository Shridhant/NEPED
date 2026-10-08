/**
 * Case studies in the five-part template (1 The place · 2 The need · 3 What NEPeD brought · 4 Who owns it now · 5 What changed).
 * - Kingjung: text verbatim from the five-part copy supplied by the NEPED team ("NEPED" → "NEPeD" for the Hydroger, per the team).
 * - Kingpao, Pang, Aniashu, Kaha: the existing text from NEPeD/casestudies.txt (same as caseStudiesData.ts), word for word,
 *   sorted into the five parts. Nothing is added; a part with no source text is left out (its number is kept), and stats
 *   are figures stated in that study's own text.
 * Editor's notes and [PLACEHOLDER] lines are never published. Studies without an entry keep the older layout.
 */
export type CaseStudyBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "quote"; text: string; by: string };

export type CaseStudyFiveParts = {
  lineage: "Energy Development" | "Economic Development";
  title: string;
  location: string;
  /** Full-bleed hero photo; omitted when the only photos are too small to fill the hero (they show further down) */
  heroImage?: { src: string; alt: string };
  stats: { value: string; label: string }[];
  /** num = position in the five-part template (kept when a part has no source text) */
  parts: { num: 1 | 2 | 3 | 4 | 5; heading: string; blocks: CaseStudyBlock[] }[];
};

export const CASE_STUDY_FIVE_PARTS: Record<string, CaseStudyFiveParts> = {
  kingjung: {
    lineage: "Energy Development",
    title: "Kingjung: a village powered by its own river",
    location: "Kingjung Village, Thonoknyu  ·  Nagaland",
    heroImage: { src: "/20 Kingjung Village Energy Committee (2).webp", alt: "Kingjung Village Energy Committee" },
    stats: [
      { value: "3 kW", label: "Hydroger capacity" },
      { value: "24×7", label: "Off-grid power" },
      { value: "₹20/mo", label: "Per household" },
      { value: "7", label: "Energy committee members" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          {
            type: "p",
            text: "Kingjung is a small village in Thonoknyu, one of the more remote areas of Nagaland's eastern hills. The landscape is steep, forested, and cut through with fast-running streams — typical of the Indo-Myanmar border region. Like many villages in these hills, Kingjung had no connection to the state electricity grid. After dark, the village went dark.",
          },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          {
            type: "p",
            text: "Without electricity, daily life in Kingjung was shaped by daylight. Farmers could not process their produce — no milling, no husking, no juicing. Blacksmiths and carpenters worked by hand and by firelight. Children studied by kerosene lamp. The village had the raw material for power — a strong, year-round stream running through the hills below — but no way to turn it into electricity.",
          },
        ],
      },
      {
        num: 3,
        heading: "What NEPeD brought",
        blocks: [
          {
            type: "p",
            text: "NEPeD installed a 3 kW impulse Hydroger — a pico-hydro generator designed and manufactured in Nagaland — using a run-of-the-river system. The machine sits in the stream below the village, connected by a penstock pipe to an intake tank that channels the water flow. No dam, no reservoir, no fuel. The river does the work.",
          },
          {
            type: "p",
            text: "The installation included an Electronic Load Controller (ELC), also built at CERES in Dimapur, which stabilises the electricity supply as household demand rises and falls through the day. The result: reliable, round-the-clock power from a machine the village can maintain with locally trained hands.",
          },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          {
            type: "p",
            text: "Kingjung's Hydroger is managed by a seven-member village energy committee — five men and two women. The committee collects a monthly energy bill of ₹20 per household and uses that revenue to pay two rural engineers a remuneration of ₹500 per month. These engineers were trained on-site by NEPeD and handle all routine maintenance and minor repairs.",
          },
          {
            type: "p",
            text: "This is not a project that NEPeD runs from Kohima or Dimapur. The village runs it. NEPeD provided the technology, the training and the initial installation. The community provides the governance, the labour and the ongoing commitment.",
          },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          { type: "p", text: "Today, Kingjung has uninterrupted electricity — 24 hours a day, 7 days a week. The difference is visible:" },
          {
            type: "list",
            items: [
              "Homes, the school and the health post have electric light.",
              "Farmers use electricity for milling, husking, juicing and drip irrigation — adding value to produce that used to be sold raw or consumed unprocessed.",
              "Blacksmiths and carpenters use powered tools.",
              "The village generates its own revenue from the energy system — no ongoing subsidy.",
            ],
          },
          {
            type: "callout",
            text: "The most telling sign of what changed is what happened a decade after installation. In 2019, the original bamboo penstock pipes had deteriorated. The village energy committee — using the revenue it had collected over the years — upgraded to galvanised iron (GI) pipes and rebuilt the power house and intake tank. No external funding. No NEPeD intervention. The community invested in its own infrastructure because the system had proved its worth.",
          },
        ],
      },
    ],
  },
  kingpao: {
    lineage: "Energy Development",
    title: "The Kingpao Hydroger Story",
    location: "Kingpao Village, Noklak Sub-Division, Tuensang District  ·  Nagaland",
    stats: [
      { value: "27", label: "Households" },
      { value: "2014", label: "Hydroger installed (April)" },
      { value: "1768m", label: "Elevation" },
      { value: "35 km", label: "To the nearest medical facilities" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Kingpao is a peaceful village of 27 household located in the mountainous part bordering Myanmar. It is situated south east of Noklak Sub-Division under Tuensang District, Nagaland having an elevation-1768m and Co-ordinates of N26°06.728’ E095°04.708. The main agricultural products here are upland rice, vegetables, corn and some other crops." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "The village is still without road connectivity and any hopes of getting any electricity from the nearest power grid location i.e. from Noku (EAC outpost- about 15 km) is still a distant dream. The village is fortunate to have primary school but other services in the area of health are hard to come by. Patients have to travel 35 km, passing through rough and dangerous roads before they have access to medical facilities." },
        ],
      },
      {
        num: 3,
        heading: "What NEPeD brought",
        blocks: [
          { type: "p", text: "The successful installation of hydroger at the Kingpao Village in April 2014, was made possible through the active participation of the village womenfolks community. This was due to the ripple effect of the Kingjung Village installation which served as a catalyst that captured the imagination of the residents of Kingpao and other surrounding villages. They were convinced that village level hydropower generation was possible." },
          { type: "p", text: "Due to the lack of road connectivity to Kingpao Village, the villagers had to transport all the machineries by carrying them on their heads right from the Aniashu Village, which is 5 km away. This installation stage was perhaps one of the most memorable moments in the history of the people of Kingpao. There was a remarkable display of collective dedication and profound commitment to one common undertaking aimed at improving the quality of their lives." },
          { type: "p", text: "Women participated in digging up the power channels from the source to the forebay tank. In-situ training on hydroger installation, feasibility, operation & maintenance was provided to the villagers." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          {
            type: "list",
            items: [
              "NEPeD Energy Committee formed along with women representatives.",
              "Revenue generation initiated for operation & maintenance and salary of the operators.",
            ],
          },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "Revitalized social dynamics, community interaction and community bonding.",
              "Women empowered on health, sanitation and decision making.",
              "Longer study hours of school going children.",
              "Man hours increased in livelihood activities (Basketry, weaving etc.).",
              "The community has resolved to conserve and protect the catchment areas/biodiversity.",
            ],
          },
        ],
      },
    ],
  },
  pang: {
    lineage: "Energy Development",
    title: "The Pang Story",
    location: "Pang Village, along the Indo Myanmar border  ·  Nagaland",
    stats: [
      { value: "94", label: "Households" },
      { value: "3 kW", label: "Hydroger capacity" },
      { value: "2013", label: "Hydroger installed (December)" },
      { value: "150 km", label: "South east of Noklak" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Pang is a village of 94 households, situated along the Indo Myanmar border about 150 kms south east of Noklak with a coordinates of N-25° 56’ 19”, E-094° 57’ 40”. The village has been connected by road only as late as of Sept’ 2013." },
        ],
      },
      {
        num: 3,
        heading: "What NEPeD brought",
        blocks: [
          { type: "p", text: "NEPeD’s Energy Team installed a 3Kw hydroger in the first week of Dec’ 2013. Community participation was tremendous in all facets of installation, from the cutting of the power channels, digging and de-silting the forebay tanks, erecting and setting up the transmission lines and the construction of the power house. The Rural engineers from Kingjung village did a remarkable job in laying the transmission lines and electrifying the households. They also helped NEPeD to identify the energy committee members to whom basic training was imparted." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          {
            type: "list",
            items: [
              "NEPeD energy committee created with involvement of women representatives.",
              "Revenue generation for operation & maintenance of the hydroger/ salary component of the operators.",
            ],
          },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "Generation of sustainable clean green energy",
              "Change in mindset of the community, social bonding, and happiness quotient up.",
              "Villagers learn to share the power generated.",
              "NEPeD’s intervention on women empowerment, health and sanitation, decision making and child care.",
              "Children have longer study hours.",
              "Increase in man hours for livelihood activities",
              "Awareness created on protection of the bio-diversity and catchment areas.",
            ],
          },
        ],
      },
    ],
  },
  aniashu: {
    lineage: "Energy Development",
    title: "Aniashu Hydroger Project",
    location: "Aniashu Village  ·  Nagaland",
    stats: [
      { value: "3 kW", label: "Hydroger capacity" },
      { value: "2014", label: "Hydroger installed (April)" },
      { value: "2", label: "Women representatives on the energy committee" },
      { value: "Rs. 750/-", label: "Salary of each operator, from revenue collected" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Aniashu a Khiamniungan village is located 65 kms south east of Noklak at an altitude of 1137 with coordinates N26º 07.551’ E095º 04.695’. The village got road connectivity only recently in 2013." },
        ],
      },
      {
        num: 3,
        heading: "What NEPeD brought",
        blocks: [{ type: "p", text: "A 3Kw hydroger was installed in the first week of April 2014 by the team with active support from the villagers." }],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "A NEPeD Energy Committee was setup with two women representative as part of the mission policy to uplift and empower women in the decision making. The community had also appointed two youths from the Committee for operation & maintenance with a salary of Rs. 750/- each, from the revenue collected." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          { type: "p", text: "After providing light to the village, it was seen that the children find it very convenient to study at night, while the grownups especially the women are enjoying the experience of engaging in more productive activities due to presence of sufficient lighting throughout the night while men folks have more hours to put into improving their handicrafts and blacksmith works." },
          { type: "p", text: "The communities are now aware of the importance of forest conservation for sustainability of the hydropower which will surely have impact for the future generation." },
        ],
      },
    ],
  },
  kaha: {
    lineage: "Energy Development",
    title: "Kaha Hydroger Project",
    location: "Kaha Village, Kiphire District  ·  Nagaland",
    stats: [
      { value: "24", label: "Households" },
      { value: "95 km", label: "From Pungro town" },
      { value: "1 day", label: "Walk to the nearest town for basic needs" },
      { value: "Rs.10,000/-", label: "Fine for violating the orchid conservation norms" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "A small village of 24 household under Kiphire district is a place inhabited by Yimchungers. It is about 95 kilometres from Pungro town and about 10 km from Mimi village. The villagers are among the most under privileged in the area and are still without road and grid connectivity." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "Before the hydroger was installed, the villagers depended only on pine sticks as a means of lighting at night as they could not effort to buy candles and kerosene." },
          { type: "p", text: "Moreover to buy their basic needs, they had to walk one whole day to reach Pungro which is the nearest town." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          { type: "quote", text: "Hydroger has brought smiles and hope for the community, which will go down in the history of Kaha people", by: "G.B. Kaha" },
          { type: "p", text: "Earlier the communities were fully dependent on farming, hunting and forest produce, but now they have started different livelihood activities like handicrafts basketry and weaving, thus creating different pathways for income generation." },
          { type: "p", text: "Mention may be made that the areas around the village is a biodiversity hot spot for Orchids of various species. The villagers have passed a resolution for their conservation and a sum of Rs.10,000/- as fine is imposed on the perpetrators who decide to violate the accepted conservation norms." },
        ],
      },
    ],
  },
};
