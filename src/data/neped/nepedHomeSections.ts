import type { HoverRevealItem } from "@/components/shared/HoverRevealList";

/**
 * PLACEHOLDER CONTENT — to be replaced with official text from "NEPED PDF.pdf".
 * Section after the NEPED hero (list + image that changes on hover).
 */
export const NEPED_SECTION_3 = {
  label: "Lorem ipsum dolor",
  heading: "Lorem ipsum dolor sit amet, consectetur",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      title: "Lorem ipsum dolor sit",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    },
    {
      title: "Consectetur adipiscing elit",
      text: "Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum, cras mattis consectetur purus sit amet.",
    },
    {
      title: "Sed do eiusmod tempor",
      text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper nullam quis risus.",
    },
    {
      title: "Ut labore et dolore",
      text: "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod, nullam id dolor id nibh ultricies.",
    },
  ] satisfies HoverRevealItem[],
};

/** PLACEHOLDER CONTENT — header of the phases carousel section. */
export const NEPED_PHASES_SECTION = {
  label: "Major Projects",
  heading: "",
  intro: "Major Projects Implemented by NEPED",
};

/** PLACEHOLDER CONTENT — header of the milestones (numbers) section. */
export const NEPED_MILESTONES_SECTION = {
  label: "Major Milestones",
  heading: "Milestones Achieved by NEPED",
};

/**
 * Chronicle section. Phase text verbatim from "NEPED - its history PDF.pdf" (letters lost in the PDF copy restored);
 * quote attribution verbatim from bigeneped.txt. Label, heading, intro and card titles are PLACEHOLDERS.
 */
export const NEPED_CHRONICLE_SECTION = {
  label: "Lorem ipsum",
  heading: "Lorem ipsum dolor sit amet",
  intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  quoteAttribution: "Shukla Commission Report: Government of India, March 1997.",
  phases: [
  {
    "name": "NEPED-I",
    "years": "1995 – 2000",
    "title": "Lorem ipsum dolor",
    "text": "The first phase of the project, NEPED-I undertook a project for planting trees along with jhum (slash and burn/ Shifting cultivation) practiced by different tribes in Nagaland. The project has established 1794 test plots (2 test plots each, measuring 3 hectares per village) in jhum fields in 854 villages across all the 8 districts covering all 16 tribes of Nagaland. More than 7.8 million economic trees were planted in 5500 hectares with replication ratio of 1:6. Through this project more than 7000 farmers and 2000 state government officials had undergone various training programmes for capacity development."
  },
  {
    "name": "NEPED-II",
    "years": "2001 – 2006",
    "title": "Lorem ipsum dolor",
    "text": "The second phase, NEPED-II had focus on creating a micro credit mechanism in the villages, through which a paradigm shift from subsidy oriented mindset of the people towards self-reliance was created. About 7888 farmers were benefited by growing cash crops with Rs 825 crores in all the 8 districts of Nagaland. The women groups and formal SHGs were also empowered to access the village funds. The women, for the first time in the history of Nagaland, had purchased 30 plots of lands by breaking the barriers of the traditional laws. They cultivate vegetable and other short term crops in these plots and recovered the loans by selling the farm produces."
  },
  {
    "name": "NEPED-III",
    "years": "2006 – 2012",
    "title": "Lorem ipsum dolor",
    "text": "The third phase, NEPED-III is concentrated on consolidating the achievements of the first two phases through watershed development. An area of 17,930 ha of arable and nonarable land was treated employing soil erosion control measures. Through this project another 6600 jhumias were assisted with a menu of land based livelihood activities such as piggery, poultry, goatery, rabbitry, apiculture, blacksmith, carpentry, weaving, rice mills, fishery, basketry, carving etc."
  }
],
};
