export interface TechProductModel {
  name: string;
  capacity: string;
  head: string;
  discharge: string;
  output: string;
  rpm: string;
  alternator: string;
  weight: string;
  application: string;
}

export interface TechProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  origin: string;
  manufacturingHub: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  previewSpecs: { label: string; value: string }[];
  keyFeatures: { title: string; description: string }[];
  models?: TechProductModel[];
  specifications: { label: string; value: string }[];
  operationalPrinciples: string;
  protectionParameters?: string[];
  fieldDeploymentsCount: string;
  designLife: string;
}

export const TECH_PRODUCTS: TechProduct[] = [
  {
    id: "1",
    slug: "hydroger-turbine-system",
    name: "Indigenous Hydroger Pico-Turbine",
    tagline: "3kW to 10kW Run-of-the-River Impulse Hydro Generator",
    category: "Power Generation Hardware",
    origin: "Conceived & Standardized in Nagaland",
    manufacturingHub: "CERD Fabrication Facility, Dimapur / Kohima",
    heroImage: "/Hydroger (Impulse).jpeg",
    galleryImages: [
      "/Hydroger (Impulse).jpeg",
      "/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg",
      "/19 SP Tuensang with NEPeD Member at Deithung Hydroger site.jpg",
      "/microgrid.png",
    ],
    summary:
      "Pioneered and fabricated directly in Nagaland by NEPeD engineers, the Hydroger is a compact, high-efficiency pico-hydro turbine engineered specifically for rugged Himalayan mountain topography and silt-laden run-of-the-river streams.",
    previewSpecs: [
      { label: "Capacities", value: "3 kW / 5 kW / 10 kW" },
      { label: "Origin", value: "Nagaland (CERD Hub)" },
      { label: "Operating Life", value: "15+ Years" },
    ],
    keyFeatures: [
      {
        title: "Cast-Iron Modular Chassis",
        description:
          "Modular split-casing design allowing swift mountain porterage across footpaths without cranes or heavy vehicles.",
      },
      {
        title: "Silt-Resistant Impulse Runner",
        description:
          "Precision Pelton/Cross-flow stainless and alloy runner buckets designed to resist abrasive Himalayan sediment wear.",
      },
      {
        title: "Synchronous Brushless AC Alternator",
        description:
          "Class H tropicalized continuous-duty generator producing standard 230V single-phase / 415V three-phase grid-grade AC.",
      },
      {
        title: "Zero Environmental Disruption",
        description:
          "Pure run-of-the-river design requiring no large dams, reservoirs, or forest inundation. Diverted water returns 100% cleanly to the stream.",
      },
    ],
    models: [
      {
        name: "NEPeD Hydroger 3kW Model",
        capacity: "3 kW (3.0 kVA)",
        head: "25 – 45 Meters",
        discharge: "12 – 18 Litres/Sec",
        output: "230V Single Phase • 50 Hz",
        rpm: "1500 RPM (Belt / Direct Driven)",
        alternator: "Brushless synchronous AC alternator",
        weight: "~85 kg (Modular for mountain porterage)",
        application: "Single village hamlets (15–25 households) for household lighting, mobile charging & domestic processing.",
      },
      {
        name: "NEPeD Hydroger 5kW Model",
        capacity: "5 kW (5.0 kVA)",
        head: "35 – 60 Meters",
        discharge: "18 – 25 Litres/Sec",
        output: "230V Single Phase • 50 Hz",
        rpm: "1500 RPM synchronous",
        alternator: "Class H tropicalized brushless alternator",
        weight: "~110 kg (Modular cast assembly)",
        application: "Medium village clusters (30–50 households) + community agro-processing and wood-grinding mills.",
      },
      {
        name: "NEPeD Hydroger 10kW Model",
        capacity: "10 kW (10.0 kVA)",
        head: "50 – 90 Meters",
        discharge: "25 – 40 Litres/Sec",
        output: "415V Three Phase / 230V Single Phase",
        rpm: "1500 RPM synchronous",
        alternator: "Industrial continuous-duty alternator",
        weight: "~175 kg (Cast iron modular casing)",
        application: "Large village centers, multi-hamlet mini-grids, cottage weaving units, and small rural industrial hubs.",
      },
    ],
    specifications: [
      { label: "Turbine Type", value: "Impulse (Pelton / Turgo / Cross-flow variants)" },
      { label: "Rated Power Range", value: "3.0 kVA to 10.0 kVA" },
      { label: "Operating Head", value: "25 to 90 Meters" },
      { label: "Discharge Requirement", value: "12 to 40 Litres / Second" },
      { label: "Voltage Output", value: "230V (1-Phase) / 415V (3-Phase) ±2%" },
      { label: "Frequency", value: "50 Hz ± 0.5 Hz (governed by ELC)" },
      { label: "Transmission Line Type", value: "Low Voltage Overhead Distribution" },
      { label: "Design Life", value: "15+ Years Continuous Duty" },
      { label: "Manufacturing Standard", value: "CERD Standards • Made in Nagaland" },
    ],
    operationalPrinciples:
      "Water is diverted from a mountain stream into a small settling forebay tank, routed down a high-density penstock pipe to generate kinetic water velocity, and directed through a precision nozzle onto the Pelton runner cups. The shaft directly drives the AC alternator, while surplus power is continuously balanced by the solid-state Electronic Load Controller.",
    fieldDeploymentsCount: "75+ Sites across Nagaland, Meghalaya, Sikkim, and Arunachal Pradesh",
    designLife: "15+ Years",
  },
  {
    id: "2",
    slug: "electronic-load-controller",
    name: "Electronic Load Controller (ELC)",
    tagline: "Steady Power Output & Grid Synchronizer",
    category: "Power Electronics & Control Systems",
    origin: "NEPeD Entrepreneurship Programme",
    manufacturingHub: "Dimapur, Nagaland",
    heroImage: "/elc-device.png",
    galleryImages: [
      "/elc-device.png",
      "/microgrid.png",
      "/solar-field.png",
    ],
    summary:
      "The Hydrogers were being installed without Electronic Load Controllers (ELC) which meant that a tricky balance between power generation and load given had to be maintained often resulting in fused bulbs and damaged appliances. Thus emerged the urgent need for the ELCs to be provided as part and parcel of Hydroger installation. The major constraint was the high cost and the complete lack of compatible ones in the internal markets. NEPeD under its Entrepreneurship programme thus decided to fund and use the services of a private entrepreneur - an Electronic Engineer to do R&D on the ELC. He brought out a prototype in 2009 and field tested it with the ‘Made in Nagaland’ hydroger and the results were found to be very encouraging.",
    previewSpecs: [
      { label: "Weight", value: "About 1 kg" },
      { label: "Function", value: "Steady Power Output" },
      { label: "Application", value: "Hydroger & Parallel Coupling" },
    ],
    keyFeatures: [
      {
        title: "Steady Power Output",
        description:
          "Its main function is to give a steady power output using a simple electronic load censors.",
      },
      {
        title: "6-Parameter Protection",
        description:
          "Controls constant RPM of a generator, required frequency, overload, high voltage, low voltage, and short circuiting.",
      },
      {
        title: "Parallel Connection Synchronizer",
        description:
          "Can also be used as synchronizer for coupling parallel connection of hydrogers, and can be used for higher capacity of hydro turbines.",
      },
      {
        title: "Handy 1 Kilogram Apparatus",
        description:
          "A handy apparatus which weighs about 1 kilogram, overcoming the major constraint of high cost and lack of compatible ones in internal markets.",
      },
    ],
    specifications: [
      { label: "Apparatus Weight", value: "About 1 kilogram" },
      { label: "Main Function", value: "Steady power output using simple electronic load censors" },
      { label: "R&D Initiative", value: "NEPeD Entrepreneurship Programme (2009 Prototype)" },
      { label: "Coupling / Scalability", value: "Synchronizer for coupling parallel connection of hydrogers & higher capacity turbines" },
      { label: "Field Test Status", value: "Field tested with ‘Made in Nagaland’ hydroger with very encouraging results" },
      { label: "Controlled Parameters", value: "Constant RPM, Frequency, Overload, High Voltage, Low Voltage, Short Circuiting" },
    ],
    protectionParameters: [
      "(a) Constant Rpm of a generator",
      "(b) Required frequency",
      "(c) Overload",
      "(d) High voltage",
      "(e) Low voltage",
      "(f) Short circuiting",
    ],
    operationalPrinciples:
      "Its main function is to give a steady power output using a simple electronic load censors to control the following parameters: (a) Constant Rpm of a generator, (b) Required frequency, (c) Overload, (d) High voltage, (e) Low voltage, and (f) Short circuiting. ELC can also be used as synchronizer for coupling parallel connection of hydrogers. It can be used for higher capacity of hydro turbines. It is a handy apparatus which weighs about 1 kilogram.",
    fieldDeploymentsCount: "Field tested with ‘Made in Nagaland’ hydrogers",
    designLife: "Solid-State Electronic Apparatus",
  },

];
