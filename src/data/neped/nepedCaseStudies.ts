import type { CaseStudy } from "@/data/neped-energy/caseStudiesData";
import type { CaseStudyFiveParts } from "@/data/neped-energy/caseStudyFiveParts";

/**
 * NEPED (non-energy) case studies — text verbatim from "NEPED Case Studies.pdf", in its order (case studies 1–7).
 * Left out: the "Photos: … NEPED to supply" notes, and case study 8 (Women and self-help groups), which the PDF
 * calls a framework with open [Confirm] / [NEPED to name…] items. overview = first sentence of "The place".
 * "womens-participation": text verbatim from WMENFOTO.pdf (Vizonyu Liezie), sorted into the five parts in the PDF's order;
 * it names no place and no owner, so parts 1 and 4 are left out (numbers kept). Edits: list items start with a capital,
 * sub-headings ("Women's Test Plots" …) lead their list item. overview = its first sentence.
 */
export const NEPED_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sungratsu",
    place: "Sungratsu",
    categories: ["Livelihoods", "Conservation / Agroforestry"],
    title: "Sungratsu: how a village traded its way from jhum to a wildlife reserve",
    overview: "Sungratsu is an Ao village about 20 km north-west of Mokokchung, with 4,374 people in 470 households.",
    sections: [],
  },
  {
    slug: "sakraba",
    place: "Sakraba",
    categories: ["Livelihoods"],
    title: "Sakraba: four harvests a year from one village",
    overview: "Sakraba is a village in Phek district, known for managing its land carefully.",
    sections: [],
  },
  {
    slug: "thetsumi",
    place: "Thetsumi",
    categories: ["Conservation / Agroforestry"],
    title: "Thetsumi: trees planted on jhum land pay back a decade later",
    overview: "Thetsumi is a village in Phek district, close to the Pfutsero administrative headquarters.",
    sections: [],
  },
  {
    slug: "ngangching",
    place: "Ngangching",
    categories: ["Conservation / Agroforestry"],
    title: "Ngangching: where trees are treated as a crop",
    overview: "Ngangching is a Konyak village in Mon district, 7 km from the road head at Aboi.",
    sections: [],
  },
  {
    slug: "leangkunger",
    place: "Leangkunger",
    categories: ["Livelihoods", "Farming systems"],
    title: "Leangkunger: five years on one field, without losing yield",
    overview: "Leangkunger is a Yimchunger village in Shamator sub-division, about 56 km from the Tuensang district headquarters, at 1,350 m.",
    sections: [],
  },
  {
    slug: "lazami",
    place: "Lazami",
    categories: ["Farming systems"],
    title: "Lazami: nine harvests from one plot",
    overview: "Lazami is the largest village in Zunheboto district, a Sema village of about 700 households and 5,000 people on a hilltop at 1,220 m.",
    sections: [],
  },
  {
    slug: "legume-rotation-trials",
    place: "Eight districts",
    categories: ["Farming systems"],
    title: "A fourth year of harvest: testing legume rotations in eight districts",
    overview: "Eight villages in eight districts of Nagaland, chosen near main roads so the plots could serve as demonstrations.",
    sections: [],
  },
  {
    slug: "womens-participation",
    place: "Nagaland",
    categories: ["Livelihoods", "Conservation / Agroforestry"],
    title: "Women's Participation in NEPED",
    overview: "The main thrust of the NEPED (Nagaland Environment Protection and Economic Development) activity is on development of villages through tree plantation and agricultural farming.",
    sections: [],
  },
];

export const NEPED_CASE_STUDY_FIVE_PARTS: Record<string, CaseStudyFiveParts> = {
  sungratsu: {
    lineage: "Economic Development",
    title: "Sungratsu: how a village traded its way from jhum to a wildlife reserve",
    location: "Sungratsu Village, Mokokchung District  ·  Nagaland",
    stats: [
      { value: "470", label: "Households in the village" },
      { value: "12 truckloads", label: "Passion fruit sold, 2004" },
      { value: "₹8–9 lakh", label: "Pig sales, 2004" },
      { value: "1998", label: "Wildlife Reserve set aside" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Sungratsu is an Ao village about 20 km north-west of Mokokchung, with 4,374 people in 470 households. Many more Sungratsu families, over 1,000 households, live outside the village in Mokokchung, Kohima and Dimapur." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "Like most Naga villages, Sungratsu once lived from jhum, on a nine-year cycle. The village wanted cash incomes that did not depend on clearing more land each year." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "The village found its own starting point: Anyüshi, a colocasia-leaf flavouring that Ao families prize, and Sungratsu's is known as the best. Traders who came for Anyüshi began buying the village's ginger, passion fruit and pigs too. The village council then set aside one jhum location, Lemchalu, as a \"Model Village\" for permanent cash-crop farming." },
          { type: "p", text: "NEPED selected Sungratsu just as this was happening. Its revolving fund let farmers buy planting material, trellis materials for passion fruit and vegetable seed. In 2004 the village sold 12 truckloads of passion fruit to the Longnak Fruit Factory at ₹8/kg. \"Without NEPED this would not have happened,\" the village authorities said." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "The village council runs the system. It fixed fair prices for live pigs, pork and piglets so traders keep coming. It installed a weighing machine in every khel. In 2004 it barred ginger from leaving the village so that seed stayed at home for expansion." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "Pig sales brought in an estimated ₹8–9 lakh in 2004. A farmer put it simply: \"It is more beneficial to have a pig at the backyard than a granary.\"",
              "20–25 women vegetable vendors earn about ₹500 a day each.",
              "Only about 50 of the 470 resident families still practise jhum. The jhum cycle has lengthened from 9 to 11 years.",
              "As jhum land fell out of use, forest returned. In 1998 the village turned a former jhum location into a Wildlife Reserve, and wild boar and deer are returning.",
              "The model spread. NEPED took farmers from Pholami and Sakraba on an IDRC-funded exposure visit to Sungratsu. Pholami's church elders went on to buy 79 piglets for villagers to rear, and Sakraba farmers started passion fruit (Case study 2).",
            ],
          },
        ],
      },
    ],
  },
  sakraba: {
    lineage: "Economic Development",
    title: "Sakraba: four harvests a year from one village",
    location: "Sakraba Village, Phek District  ·  Nagaland",
    stats: [
      { value: "2001", label: "Micro-credit introduced" },
      { value: "₹92/kg", label: "Cardamom price, 2006 (market: ₹45/kg)" },
      { value: "14", label: "Farmers who started passion fruit" },
      { value: "4", label: "Harvests a year" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Sakraba is a village in Phek district, known for managing its land carefully. Large alder reserve forests surround the village and supply its firewood." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "Rice gave Sakraba one harvest a year. Families needed more income without cutting into their village forests." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "In 2001 NEPED introduced its rural micro-credit mechanism to Sakraba and placed a corpus fund with the village. The villagers decided for themselves how to use it: they planted large cardamom under the shade of their village forest." },
          { type: "p", text: "Drying the harvest was the next problem. Local farmers designed their own cardamom dryer, which they call the Sago. Later, NEPED took Sakraba farmers to a passion-fruit processing factory at Punanamai in Manipur and to Sungratsu's passion fruit farms." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "The farmers own the crops, the fund and the dryer design. The village has sold Sago dryers to Government departments in Nagaland." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "Sago-dried cardamom is high quality. In 2006, when cardamom prices fell to ₹45/kg in some Nagaland markets, Sakraba sold at ₹92/kg and earned ₹70,000.",
              "After the exposure visit, 14 farmers each planted at least one acre of passion fruit, and more have followed.",
              "Sakraba now has four harvests a year instead of one: passion fruit (May–July), cardamom (October), rice, and ginger (February–March).",
              "The forest stays standing, because the cardamom needs its shade.",
            ],
          },
        ],
      },
    ],
  },
  thetsumi: {
    lineage: "Economic Development",
    title: "Thetsumi: trees planted on jhum land pay back a decade later",
    location: "Thetsumi Village, Phek District  ·  Nagaland",
    stats: [
      { value: "1997", label: "Trees planted under NEPED" },
      { value: "627", label: "Trees per hectare by 2007" },
      { value: "about 600 m³", label: "Firewood sold" },
      { value: "₹2 lakh+", label: "Earned from firewood" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Thetsumi is a village in Phek district, close to the Pfutsero administrative headquarters." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "In the 1990s, tree planting on jhum land usually meant handing out polybagged saplings. NEPED's own study of natural regeneration in 21 villages found the method hard on farmers. Saplings often had to be carried more than 5 km from the road, and the species did not always suit the site. The study also found that around 52 tree species regenerate naturally in a jhum field, and farmers know them well." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "NEPED moved to farmer-led afforestation: \"farmers know best.\" Farmers kept the seedlings that sprouted naturally, pollarded trees such as alder and Schima wallichii, and left tree poles standing in their fields. They also planted seedlings and seed that the project bought from local farmers. Each farmer chose the spacing and species for his own field." },
          { type: "p", text: "In 1997, Thetsumi planted trees on one of its jhum locations under the NEPED programme. Thetsumi's results, along with NEPED's regeneration study, shaped the farmer-led approach that NEPED uses in later phases." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "The village decides when the location is cultivated again and how the wood is used and sold. The village authority made the estimates below." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "By 2007 the site held about 627 trees per hectare, with an average volume of 190.68 m³/ha.",
              "When the village returned to jhum the site in 2007, the felled trees were used three ways: laid across the slope against soil erosion, left standing to support French beans, and cut for firewood.",
              "About 2,000–2,500 trees were harvested. The village sold around 600 m³ of firewood to Pfutsero and earned at least ₹2 lakh.",
              "The same year, about 70,000 trees, mostly firewood species, were planted again for the next cycle.",
            ],
          },
        ],
      },
    ],
  },
  ngangching: {
    lineage: "Economic Development",
    title: "Ngangching: where trees are treated as a crop",
    location: "Ngangching Village, Mon District  ·  Nagaland",
    stats: [
      { value: "211", label: "Households" },
      { value: "up to 3,000", label: "Young trees kept per hectare" },
      { value: "42", label: "Crops and varieties in one jhum field" },
      { value: "7 years", label: "Fallow period" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Ngangching is a Konyak village in Mon district, 7 km from the road head at Aboi. It has 211 households and 955 people (Village Profile 2001). The villagers say about 30% of their land is still primary forest." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "In many Mon villages, rice from jhum lasts only four to six months of the year. Development programmes often pushed tree species that officials chose, using incentives, without asking what farmers already knew." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "NEPED's team began by documenting what Konyak farmers already do, through transect walks and discussions with farmers during their field work." },
          {
            type: "list",
            items: [
              "Trees as a crop. Farmers protect the Macaranga seedlings that sprout in their jhum fields, thinning and lopping them so they don't shade the crops. Stands reach up to 3,000 trees per hectare. The trees later supply firewood, rafters, erosion-control poles and leaf plates.",
              "Crops that work together. Rice and colocasia are both staples, grown in the same field and harvested months apart. One field holds 42 crops and varieties, including 13 colocasia and 9 rice varieties.",
              "Islands of forest. Forest gardens, palm (toko pat) gardens that are sometimes over 100 years old, and protected ravines make up about a quarter of the jhum area.",
            ],
          },
          { type: "p", text: "NEPED then backed the farmers' own choice of cash crop. Through NEPED's credit mechanism, the village planted large cardamom in current jhum fields, to grow on under the Macaranga as the field returns to fallow. The women of the village guided this choice. Cardamom planted in 2002 bore fruit in 2003 and sold without difficulty." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "The land is privately owned by families. The village council controls commercial timber cutting and sets fire rules. A cardamom growers' group was being formed to market the crop together." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "Farmers started earning cash from cardamom within a year of planting, and planned to plant more the next season.",
              "Farmers say rice yields have stayed steady for half a century, which they credit to the seven-year tree fallow.",
              "Collecting firewood from nearby fallows and forest islands, rather than distant forest, eases women's workload.",
              "The lesson NEPED took forward: work with the farmers' own system, not against it. Coffee, promoted by others, was not adopted. Cardamom, chosen by the farmers, was.",
            ],
          },
        ],
      },
    ],
  },
  leangkunger: {
    lineage: "Economic Development",
    title: "Leangkunger: five years on one field, without losing yield",
    location: "Leangkunger Village, Shamator, Tuensang District  ·  Nagaland",
    stats: [
      { value: "119", label: "Households" },
      { value: "4–5", label: "Years cropped on one plot" },
      { value: "₹15,000–20,000", label: "Income from French beans, a season" },
      { value: "about 60%", label: "Villagers in French bean farming" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Leangkunger is a Yimchunger village in Shamator sub-division, about 56 km from the Tuensang district headquarters, at 1,350 m. It had 119 households and about 1,600 people when NEPED's team studied it. Its fields run from 700 to 1,450 m and have no natural forest cover left." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "Jhum land is scarce, and holdings shrink as land is divided among sons. Local food production in Tuensang district meets only about 60% of need, and many families run short in May and June." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "NEPED's team used PRA methods (group discussions, household interviews, timelines and transect walks) to document how Leangkunger farmers keep one field productive for four to five years instead of the usual one or two:" },
          {
            type: "list",
            items: [
              "They rotate legumes, French bean (kholar), soybean and rice bean, to put nitrogen back into the soil.",
              "They keep nitrogen-fixing trees such as alder and Albizzia standing in the field.",
              "They use wooden and living barriers and bury weeds along them to hold topsoil.",
            ],
          },
          { type: "p", text: "One farmer cropped the same plot for 20 years, at a 25-hectare location the villagers call Kiupe. NEPED shared these findings and tested legume rotations with farmers in eight districts (Case study 7)." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "The village council decides each year which land is opened for jhum and sets the burning day. Landowners lease land to landless farmers so that everyone can grow food." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "Yields are reported to stay constant through four to five years of cropping.",
              "French beans earn a family ₹15,000–20,000 a season. Farmers have used this income to build houses and send their children to school.",
              "About 60% of villagers now grow French beans for sale.",
              "The village plants trees in its jhum fields every year so the land recovers faster.",
            ],
          },
        ],
      },
    ],
  },
  lazami: {
    lineage: "Economic Development",
    title: "Lazami: nine harvests from one plot",
    location: "Lazami Village, Zunheboto District  ·  Nagaland",
    stats: [
      { value: "700", label: "Households" },
      { value: "9 years", label: "Longest cropping on one plot" },
      { value: "10–15 ft", label: "Contour bunds every" },
      { value: "15–16 years", label: "Fallow afterwards" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Lazami is the largest village in Zunheboto district, a Sema village of about 700 households and 5,000 people on a hilltop at 1,220 m. The village council decides each year where the whole village will cultivate, usually one block of 300–600 hectares." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "The usual jhum pattern is one or two years of crops followed by 8–12 years of fallow. That needs a lot of land." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "NEPED's team documented Lazami's second jhum system. On deep, firm, thatch-covered soils, farmers keep cultivating the same plot for 5–6 years, and up to nine years without any loss in paddy yield. Their methods:" },
          {
            type: "list",
            items: [
              "They clear the land early, in August–September, so the cut weeds rot into humus with the late monsoon before burning in November.",
              "They build contour bunds every 10–15 feet from poles, stumps and boulders. As the stumps rot after about three years, they are hoed back in as manure.",
              "They plant yam, ginger and maize just above the bunds and legumes such as soybean and cowpea just below.",
              "They pick weed flower buds before they seed and carry them out of the field.",
            ],
          },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "Land belongs to clans and families. Group labour of 20–25 people works each member's field in turn, and the group gives its morning hours to any family hit by illness or death." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "\"Shifting cultivation practised by us is a sign of prosperity,\" a Lazami farmer told the team. Yields are assured, and families grow everything they need for the year.",
              "NEPED took the lessons to other project villages where thatch was a problem, showing how deep ploughing to remove thatch roots helps keep the land in production.",
            ],
          },
        ],
      },
    ],
  },
  "legume-rotation-trials": {
    lineage: "Economic Development",
    title: "A fourth year of harvest: testing legume rotations in eight districts",
    location: "Mon, Tuensang, Mokokchung, Zunheboto, Wokha, Kohima, Dimapur and Phek  ·  Nagaland",
    stats: [
      { value: "8", label: "Districts" },
      { value: "5–8", label: "Farmers' fields per site" },
      { value: "2.1 t/ha", label: "Rice in year 4 (SARS trial)" },
      { value: "2.0 t/ha", label: "Rice in year 2 (SARS trial)" },
    ],
    parts: [
      {
        num: 1,
        heading: "The place",
        blocks: [
          { type: "p", text: "Eight villages in eight districts of Nagaland, chosen near main roads so the plots could serve as demonstrations." },
        ],
      },
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "With more people and less land, fallow periods were shrinking. Researchers at the State Agriculture Research Station (SARS), Yisemyong, had tried a model in Mokokchung: rice in years 1 and 2, a legume cover crop in year 3, then rice again in year 4. Rice in the fourth year yielded 2.1 t/ha, against 2.0 t/ha in the second year." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "NEPED's Project Operations Unit tested the model with 5–8 farmers at each site. It supplied legume seed (velvet bean, rice bean, soybean and French beans), let farmers choose what suited their land, gave technical support, and measured soil erosion on a plot in Wokha." },
        ],
      },
      {
        num: 4,
        heading: "Who owns it now",
        blocks: [
          { type: "p", text: "The farmers who took part decided what to keep. NEPED's job was to test the model with them and report honestly." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          {
            type: "list",
            items: [
              "Farmers liked growing legumes, and paddy did better where cover crops had been sown in the third year.",
              "But they found the full model hard. Keeping three or four fields at once needs more labour, wild animals and cattle damage isolated plots, and velvet bean had no market.",
              "NEPED's conclusion: the model works where fallows are already very short and the whole village takes part.",
              "The lasting result was bigger than the trial. Legumes were built into NEPED's and other Government rural livelihood programmes. The trials also helped the Government of Nagaland recognise French beans as a major commercial crop for the eastern districts.",
            ],
          },
        ],
      },
    ],
  },
  "womens-participation": {
    lineage: "Economic Development",
    title: "Women's Participation in NEPED",
    location: "Case study of women empowerment  ·  By Vizonyu Liezie",
    stats: [
      { value: "80", label: "Test plots established by women groups" },
      { value: "80", label: "Women's nurseries supported" },
      { value: "213", label: "Women from 123 villages given basic training" },
      { value: "30", label: "Women from 21 villages given advanced training" },
    ],
    parts: [
      {
        num: 2,
        heading: "The need",
        blocks: [
          { type: "p", text: "The main thrust of the NEPED (Nagaland Environment Protection and Economic Development) activity is on development of villages through tree plantation and agricultural farming. The interest of the villagers has already been aroused and massive plantation of trees was carried out in the State. The most critical component was availability of quantity and quality planting stock for success of any tree-planting programme. Therefore proper management of nursery and tree planting activities play a dominant role. Though the knowledge on local species of trees is yet quite poor, the POU (Project Operations Unit) has made some progress by raising nurseries throughout the state and documented them as well." },
          { type: "p", text: "Initially, in each of the districts, one nursery was established to try out some local species with a view to supplement requirement of saplings for the test plots. But nurseries so established could not succeed due to poor management and finally, the POU had to decide to wind up many of those nurseries, which could not show performance. In order to establish a good tree nursery, the site is first selected followed by initial preparation viz. Fencing, construction of rest shed, selection of species, procurement of seeds, arrangement of implements and other inputs, preparation of soil for sowing, raising saplings and maintenance. As nursery bed preparation starts with the onset of monsoon, training of nursery personnel need to be imparted well in advance." },
        ],
      },
      {
        num: 3,
        heading: "What NEPED brought",
        blocks: [
          { type: "p", text: "The component of gender dimension was not originally incorporated in the project proposal. It is however, globally accepted norm for inclusion of gender issue and at the instance of the IDRC (International Development Research Centre), was added at a later stage. A POU member was specifically entrusted to look after the issue. In order to build up local capability to conduct training in women empowerment and participation in development, another women coordinator was inducted to assist the lone member. The gender issue is a very vast subject. The extent of handling this issue within the project performance is minimal but effective during the short tenure of the project." },
          { type: "p", text: "There is a need to focus a classification of gender sharing in the nature of management of any productive project. This concept may probably be analysed on the basis of cultural life style of a natural society; division of works in particular. In order to solve the complexity of diverse nature of work in different ethnicity, projects of any sort may therefore be illustratively classified in term of light and heavy nature of work. The light works may be given to the women group and the heavy works assigned to the menfolk. This type of classificatory nature has a relative root in natural growth and physical strength of mankind. However, the concept does not mean to confine to womenfolk in such work such as nursery, the fact that establishment of a nursery project can be common to both sexes, for instance, shed construction will obviously be the work of menfolk and maintenance, or watering is suitable to gender domination. As far as the present sharing system is concerned, it is justified for the reason that the percentage of division is streamlined for the simplicity sake." },
          { type: "p", text: "There are 3 components for women's participation in the project:" },
          {
            type: "list",
            items: [
              "Women's Test Plots. The Village Councils were advised to allot one of the test plots to the women. If the women are very keen and capable, an additional test plot is also allowed. There are altogether 80 test plots established by the Women groups. In fact this idea occurred when one village was allotted a test plot to the women during 1995 in Kohima district. This test plot was performing very well.",
              "Women's Nursery. The women groups wherever willing and capable, were assisted to establish nurseries. The cash assistance is limited to Rs. 30,000 per nursery. Out of 80 nurseries supported, some have been continuing at good profit. The POU provided technical guidance through training and supervision. A recent decision was also taken to make the tree nurseries the 'hub' around which various awareness training for the women could be conducted.",
              "Women's Empowerment Training. A more positive role for women than just caring nurseries was in the component of women empowerment which was included as a separate item. The woman has a triple role to play as caretaker of farms, household and child care activities. Two courses were provided to the women in training namely the basic training and the advanced training of selected candidates from those who have undergone the basic course. So far, 213 women from 123 different villages and 30 women from 21 villages are given Basic and Advance empowerment training respectively. The empowerment includes letting women to choose in decision making process by actively participating in it. The training was emphasized on group participation and how best the problems could be solved mutually for the improvement of the quality of women's life. The POU has not yet applied their mind as to how to proceed beyond giving advance training to the women. The empowerment means building up self-reliance, confidence and participation in decision making process.",
            ],
          },
          { type: "p", text: "Exposure Trips. The exchange visits for women outside the state were organised by the POU in order to make them aware with what have been happening outside their homes. Accordingly, groups of women selected from different districts were taken to visit other projects. The participants were not just women farmers but they have certain initiatives and potentials to act as trainers in their respective villages to create awareness about the environment and related problem and women issues." },
        ],
      },
      {
        num: 5,
        heading: "What changed",
        blocks: [
          { type: "p", text: "Several issues emerged from the Women's empowerment training conducted:" },
          {
            type: "list",
            items: [
              "Some women have taken up the infrastructural projects such as building construction, rice mill and orchard as well from the 25% women's share of VDB fund.",
              "Some have taken up of livestock, apiculture, and other farming systems.",
              "Another group of women could impose fine on the owners of cattle against their nursery damage.",
              "Sometimes conflict issues come up which led to differences among the groups and with Village Council as well.",
            ],
          },
          { type: "callout", text: "The success rate of implementation of any developmental project for women if prepared as per need base is more successful." },
        ],
      },
    ],
  },
};
