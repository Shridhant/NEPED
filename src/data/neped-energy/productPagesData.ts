/**
 * Product detail pages — ALL text verbatim from NEPeD/data.txt.
 * Exceptions: the "What is Hydroger?" paragraph uses the wording corrected on the NEPeD page
 * (leading "Impulse Reaction" caption removed), and the merged SALIENT FEATURES / USES lists
 * are split by their numbering. Product names: "Hydroger" (as on the NEPeD page) and the ELC heading.
 */
export type HydrogerPage = typeof HYDROGER_PAGE;
export type ElcPage = typeof ELC_PAGE;

export const HYDROGER_PAGE = {
  "slug": "hydroger-turbine-system",
  "name": "Hydroger",
  "heroImage": "/Hydroger (Impulse).jpeg",
  "what": {
    "heading": "What is Hydroger?",
    "text": "The technology is commonly called watermills. Based on the applicability in Nagaland, NEPeD coined the term ‘Hydroger’ (derived from the amalgamation of Hydro and Generator). The mechanism is unique in its simplicity. It comprises of cylindrical cast iron casing housing an alternator which is connected to the turbine through the shaft. Hydro (water) power is used to turn the turbine to generate energy. There are basically two types of turbines, Reaction and Impulse. Reaction turbine requires volume of water and less height and is suitable in low lying areas whereas Impulse turbine requires higher height and lower volume and is suitable for hilly areas."
  },
  "indigenization": {
    "heading": "Indigenization:",
    "paragraphs": [
      "Initially, NEPeD addressed its objectives by importing pico machines (Chinese make). However, the poor performance of these imported Reaction Turbinemachines could not help NEPeD in its mission. Faced with these challenges, the Team decided to do R&D on the existing machines and collaborated with The Nagaland Mini Tool room and Training Centre (NMTTC) Dimapur, now known as Nagaland Tool Room and Training Centre (NTTC) for use of their facilities and personnel. R&D was done on the Permanent magnets, Stator windings for the alternator and turbine blades. Prototypes of a 1kW Reaction and a 3kW Impulse Hydroger were produced in 2008. These were found to be more efficient than the Chinese machines. The prototypes were successfully tested at NEPeD’s Testing and Demo Site at Phesama, 8km from Kohima in the presence of the Development Commissioner of Nagaland, Advisor NTTC and Power Department Officials and duly certified by them. To this effect, an MoU was signed between NEPeD and NTTC in 2009 for indigenization.",
      "NEPeD’s hydroger replication program was also supported by NABARD under their Rural Innovation Fund (RIF), for procurement of coils, permanent magnets, shafts, guide vanes and casings."
    ]
  },
  "specifications": {
    "heading": "SPECIFICATIONS",
    "rows": [
      {
        "label": "Capacity",
        "value": "3Kw"
      },
      {
        "label": "Rate RPM",
        "value": "750"
      },
      {
        "label": "Frequency",
        "value": "50Hz single phase"
      },
      {
        "label": "Voltage",
        "value": "230 - 240V"
      },
      {
        "label": "Shaft & Nozzle Material",
        "value": "M/steel"
      },
      {
        "label": "Nozzles",
        "value": "1 or 2 depending on head & discharge"
      },
      {
        "label": "Bearing",
        "value": "2 nos, 1 roller bearing (top), 1 taper roller bearing (bottom)"
      },
      {
        "label": "Turbine Turgo Runners on steel hub",
        "value": "18 to 43 nos,depending  on discharge"
      },
      {
        "label": "Controller",
        "value": "Indigenous Electronic Load Controller (ELC)"
      },
      {
        "label": "Permanent magnetic core type",
        "value": "8 poles with copper winding alternators"
      },
      {
        "label": "Casting Materials",
        "value": "Cast iron"
      },
      {
        "label": "Discharge Range",
        "value": "10-40lts/sec"
      },
      {
        "label": "Head Range",
        "value": "9-35m"
      },
      {
        "label": "Pitch dia. of Turbine",
        "value": "16.14 to 31.5cm"
      },
      {
        "label": "Gross Weight",
        "value": "78 kilograms"
      }
    ]
  },
  "salientFeatures": {
    "heading": "SALIENT FEATURES",
    "items": [
      "Generates clean green energy",
      "Provided with Electronic Load",
      "Easily transportable",
      "Easy to install",
      "Environment friendly"
    ]
  },
  "uses": {
    "heading": "USES",
    "items": [
      "Lighting",
      "Computer/television",
      "Refrigerator",
      "Cooking",
      "Juicing",
      "Milling",
      "Battery/mobile charging"
    ]
  },
  "expectedBenefits": {
    "heading": "Expected benefits:",
    "paragraphs": [
      "Access to pico hydro units (Hydrogers) provide energy required for lighting up wayside amenities, juicing, milk chilling plant and poultry by the poor villagers with zero percent maintenance. Rural youth have started using electrically operated carpentry tools with the energy generated from hydrogers. Such income generating activities could be established in many villages with supply of reliable energy. The technology will also require maintenance for which selected youth could be trained and create scope to employ them through the creation of “Rural Engineers” a concept propounded by NEPeD.",
      "Economic disparity due to energy shortage could be reduced by making use of appropriate technology. Hydroger will introduce rural people to clean renewable energy and its utilization for improving the quality of life. It is observed that many villages have started conserving their water shed areas after installing hydrogers as the villagers attain logical understanding that water shed areas are very important for sustenance of perennial streams thereby sustaining energy generation from their hydrogers.",
      "Women’s every day schedule is always multi-tasking starting from fetching water in the morning, cooking, caring for the children, going to field and collecting firewood. Their evening is also as laborious as the day. Energy is required to ease and save women’s time spent in cooking, collecting and using wood as fuel. Using energy from hydroger at night will give women more time to work on marketable products like sorting vegetables, weaving and knitting at night. School going children will also have more time to study which will have an impact on rural education. Hydroger technology could be a useful tool for reduction of women drudgery."
    ]
  }
} as const;

export const ELC_PAGE = {
  "slug": "electronic-load-controller",
  "name": "Electronic Load Controller (ELC)",
  "heroImage": "/elc-device.png",
  "intro": "The Hydrogers were being installed without Electronic Load Controllers (ELC) which meant that a tricky balance between power generation and load given had to be maintained often resulting in fused bulbs and damaged appliances. Thus emerged the urgent need for the ELCs to be provided as part and parcel of Hydroger installation. The major constraint was the high cost and the complete lack of compatible ones in the internal markets.",
  "development": "NEPeD under its Entrepreneurship programme thus decided to fund and use the services of a private entrepreneur - an Electronic Engineer to do R&D on the ELC. He brought out a prototype in 2009 and field tested it with the ‘Made in Nagaland’ hydroger and the results were found to be very encouraging.",
  "parameters": {
    "intro": "Its main function is to give a steady power output using a simple electronic load censors to control the following parameters:",
    "items": [
      "(a) Constant Rpm of a generator",
      "(b) Required frequency",
      "(c) Overload",
      "(d) High voltage",
      "(e) Low voltage",
      "(f) Short circuiting"
    ]
  },
  "closing": "ELC can also be used as synchronizer for coupling parallel connection of hydrogers. It can be used for higher capacity of hydro turbines. It is a handy apparatus which weighs about 1 kilogram."
} as const;

/** Order used for previous / next navigation */
export const PRODUCT_PAGES = [
  { slug: HYDROGER_PAGE.slug, name: HYDROGER_PAGE.name },
  { slug: ELC_PAGE.slug, name: ELC_PAGE.name },
] as const;
