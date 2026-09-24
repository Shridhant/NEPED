export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  category: "Technology" | "Field Reports" | "Community" | "Policy";
  date: string;
  readTime: string;
  image: string;
  summary: string;
  author: BlogAuthor;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      highlightQuote?: string;
    }[];
    takeaways: string[];
  };
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    id: "1",
    slug: "how-elc-systems-regulate-off-grid-microgrids",
    title: "How ELC Systems Regulate Off-Grid Micro-Grids in Rugged Terrains",
    category: "Technology",
    date: "July 28, 2026",
    readTime: "6 min read",
    image: "/solar-field.webp",
    summary:
      "Locally manufactured Electronic Load Controllers ensure constant voltage and frequency stability despite seasonal mountain stream fluctuations.",
    author: {
      name: "NEPeD Engineering Cell",
      role: "Technical R&D Division",
    },
    tags: ["ELC", "Hydrogers", "Voltage Regulation", "Microgrids", "CERD"],
    content: {
      intro:
        "In the isolated, high-altitude terrain of Nagaland and the Eastern Himalayas, micro-hydro systems (Hydrogers) represent the most dependable source of continuous baseload electricity. However, run-of-the-river pico turbines operate under continuous water flow. When consumer household demand changes abruptly, generators can experience dangerous over-speeding and severe voltage spikes that damage domestic appliances and blow light bulbs. The locally engineered Electronic Load Controller (ELC) is the technological brain that solved this fundamental challenge.",
      sections: [
        {
          heading: "The Engineering Challenge of Variable Mountain Loads",
          body: [
            "Unlike large national grid networks with immense spinning reserves, a standalone 3kW village microgrid has negligible electrical inertia. If a village rice mill switches off or lights are turned off at night, the turbine suddenly loses its electrical resistance. Without automatic intervention, the alternator RPM accelerates rapidly, driving line voltage past 280V and spiking frequency above 65Hz.",
            "Imported mechanical governors from international markets were expensive, bulky, and prone to mechanical jamming from mountain humidity. In 2008, NEPeD's technical team partnered with local electronic innovators to design a solid-state, 1-kilogram Electronic Load Controller specifically calibrated for rugged hill conditions.",
          ],
          highlightQuote:
            "A standalone 3kW village microgrid requires precision solid-state regulation that operates with zero mechanical latency.",
        },
        {
          heading: "Principles of Dynamic Ballast Load Diversion",
          body: [
            "The NEPeD Electronic Load Controller functions on the principle of dynamic proportional power dumping. It continuously samples output voltage and frequency at millisecond intervals using high-speed microprocessor circuitry.",
            "Whenever the primary consumer load drops, the ELC instantaneously diverts the exact surplus wattage into an auxiliary ballast dump load—typically an insulated water-heating tank or resistive ceramic bank. By ensuring that total electrical load on the alternator remains exactly 100% constant, generator RPM stays locked at 750 RPM, and voltage remains steady at 230V ±2%.",
          ],
        },
        {
          heading: "Multi-Unit Synchronization & Scalability",
          body: [
            "Beyond basic load regulation, the modern Made-in-Nagaland ELC serves as an automatic phase synchronizer. This allows two or three separate 3kW hydrogers installed along the same river gorge to be coupled in parallel onto a single common distribution busbar, creating a robust 6kW to 9kW village microgrid without complex industrial switchgear.",
            "Every ELC fabricated at the CERD laboratory weighs less than 1.2 kilograms, features conformal coating against monsoon moisture, and incorporates plug-and-play modular circuit boards for quick field replacement by trained village technicians.",
          ],
        },
      ],
      takeaways: [
        "Continuous 230V / 50Hz frequency stabilization with millisecond response time.",
        "Zero mechanical moving parts, preventing wear and moisture degradation in mountain climates.",
        "Diverts surplus energy into community hot water baths and agricultural dryers.",
        "Supports parallel multi-hydroger synchronization for microgrid expansion.",
      ],
    },
  },
  {
    id: "2",
    slug: "youth-empowerment-and-rural-engineers-in-nagaland",
    title: "Youth Empowerment & Local Artisan Skill Building in Nagaland",
    category: "Community",
    date: "June 14, 2026",
    readTime: "4 min read",
    image: "/52 NEPeD members at Nagaland Youth Summit 2016.webp",
    summary:
      "Capacity building workshops equip rural youth to operate, service, and maintain micro-hydro generators independently without outside reliance.",
    author: {
      name: "Community Outreach Cell",
      role: "Training & Capacity Division",
    },
    tags: ["Youth Summit", "Skill Development", "Rural Engineers", "Community"],
    content: {
      intro:
        "Technological infrastructure in remote rural regions often fails due to a lack of localized maintenance capacity. When equipment breaks down hundreds of kilometers from urban service centers, systems often fall into disuse. NEPeD broke this cycle by pioneering the 'Rural Engineers' human development paradigm, transforming village youth into certified renewable energy stewards.",
      sections: [
        {
          heading: "Building Grassroots Technical Sovereignty",
          body: [
            "Through intensive district masterclasses and the landmark Nagaland Youth Summits, NEPeD trained young men and women from across all 16 recognized tribes in electrical wiring, runner maintenance, bearing lubrication, and penstock jointing.",
            "Participants learn not merely how to flip switches, but the fundamental physics of head, discharge, stator windings, and circuit diagnostics. This localized expertise ensures that 95% of operational anomalies are resolved within the village within hours.",
          ],
          highlightQuote:
            "Energy sovereignty cannot exist without technical self-reliance at the village council level.",
        },
        {
          heading: "From Technicians to Village Entrepreneurs",
          body: [
            "Trained youth operators are empowered through Village Energy Committees (VECs) with sustainable revenue models. By collecting nominal monthly tariffs for lighting and daytime milling power, the youth receive monthly stipends while maintaining a dedicated reserve fund for spare parts.",
            "Many summit alumni have established their own off-grid micro-enterprises—operating battery-charging stations, motorized carpentry workshops, and digital printing hubs in villages previously devoid of electricity.",
          ],
        },
      ],
      takeaways: [
        "Over 500+ rural youth certified in hydroger mechanics and electrical safety.",
        "Elimination of outside technician dependency for day-to-day power operations.",
        "Creation of sustainable monthly livelihood stipends through village energy tariffs.",
        "Establishment of youth-led carpentry, milling, and electronic repair hubs.",
      ],
    },
  },
  {
    id: "3",
    slug: "scaling-made-in-nagaland-clean-energy-across-ne-india",
    title: "Scaling Made-in-Nagaland Clean Energy Tech Across NE India",
    category: "Field Reports",
    date: "May 05, 2026",
    readTime: "8 min read",
    image: "/mountain-windmills.webp",
    summary:
      "Partnering with state agencies across Meghalaya, Sikkim, and Arunachal Pradesh to deploy indigenous micro-hydro solutions.",
    author: {
      name: "Project Directorate",
      role: "Inter-State Coordination Cell",
    },
    tags: ["Northeast India", "Inter-State", "Hydrogers", "Field Reports", "NABARD"],
    content: {
      intro:
        "What began as an indigenous experiment in the hills of Nagaland has expanded into a recognized clean energy model across the Eastern Himalayas. NEPeD's lightweight, high-efficiency Hydroger systems are now generating green electricity across Meghalaya, Sikkim, Arunachal Pradesh, Manipur, and Jammu & Kashmir.",
      sections: [
        {
          heading: "The Regional Suitability of Pico-Hydro",
          body: [
            "The Eastern Himalayan geography is characterized by steep micro-catchments, high rainfall, and widely dispersed tribal settlements. Extending centralized high-voltage transmission lines through dense forests is financially prohibitive and ecologically destructive.",
            "NEPeD's 3kW Hydroger requires only a 10 to 40 liter-per-second water discharge and can be transported by hand over footbridges and mountain trails. This has made it the technology of choice for regional renewable energy development agencies across the Northeast.",
          ],
          highlightQuote:
            "The simplicity of Made-in-Nagaland pico-hydro is its greatest engineering strength.",
        },
        {
          heading: "Collaborations with Regional State Missions",
          body: [
            "NEPeD has conducted inter-state installation tours, fabricating and shipping customized turbine units from the CERD fabrication center in Dimapur to partner departments in neighboring states.",
            "In Meghalaya's Khasi and Garo Hills, NEPeD hydrogers power remote spice processing centers. In Arunachal Pradesh's border outposts, units provide uninterrupted 24/7 power for communication stations and village health clinics.",
          ],
        },
      ],
      takeaways: [
        "Successful technology transfer to 5 sister states across Northeast India.",
        "Zero environmental footprint with non-damming run-of-the-river diversion.",
        "Fabricated at the Nagaland Tool Room & Training Centre (NTTC) Dimapur.",
        "Recognized by Ministry of New and Renewable Energy (MNRE) and NABARD.",
      ],
    },
  },
  {
    id: "4",
    slug: "preserving-mountain-watersheds-and-forest-catchments",
    title: "Preserving Mountain Watersheds & Forest Catchments",
    category: "Policy",
    date: "April 19, 2026",
    readTime: "5 min read",
    image: "/forest.webp",
    summary:
      "Community watershed management protocols safeguard perpetual river flow for multi-generational village electrification.",
    author: {
      name: "Environmental Cell",
      role: "Ecological Sustainability Wing",
    },
    tags: ["Watersheds", "Catchment", "Conservation", "Policy", "CCAs"],
    content: {
      intro:
        "Hydropower and forest ecology are inextricably linked: without dense, mature forest cover in upper mountain catchments, streams experience torrential monsoon flash floods followed by bone-dry winter droughts. NEPeD established that village energy independence is the strongest economic incentive for permanent forest conservation.",
      sections: [
        {
          heading: "The Ecological Nexus of Water and Watts",
          body: [
            "When a village invests its collective labor into commissioning a hydroger, the community quickly realizes that their electricity depends directly on the health of the upstream mountain sponge.",
            "In dozens of project sites, Village Councils have passed binding customary resolutions declaring upstream catchment zones as strictly protected Community Conserved Areas (CCAs), banning timber logging, jhum fires, and wild animal hunting in recharge zones.",
          ],
          highlightQuote:
            "Villages protect upstream forests because they understand that a dry stream means a dark village.",
        },
        {
          heading: "Synergy Between Heritage Agroforestry and Energy",
          body: [
            "This policy integrates seamlessly with NEPED's 30-year legacy of agroforestry and tree planting. Alder trees (*Alnus nepalensis*) planted along slope contours fix soil nitrogen, stabilize landslide-prone terrain, and promote groundwater percolation that recharges mountain springs.",
            "The result is a self-reinforcing socio-ecological cycle: protected forests preserve water, water powers hydrogers, and clean power elevates village livelihoods.",
          ],
        },
      ],
      takeaways: [
        "Over 40,000+ hectares of mountain watersheds safeguarded under village conservation charters.",
        "Year-round perennial stream discharge maintained even through dry winter months.",
        "Integration of indigenous Alder agroforestry with water percolation trenches.",
        "Binding customary protection enforced by Village Councils with zero government policing cost.",
      ],
    },
  },
  {
    id: "5",
    slug: "neped-demonstrations-at-republic-day-and-youth-summits",
    title: "NEPeD Demonstration at Republic Day & Youth Summit",
    category: "Field Reports",
    date: "March 11, 2026",
    readTime: "4 min read",
    image: "/47 NEPeD's stall at Republic Day 2016.jpg",
    summary:
      "Showcasing working hydroger scale models to farmers, government dignitaries, and aspiring young engineers.",
    author: {
      name: "Exhibition Cell",
      role: "Public Engagement & Media",
    },
    tags: ["Republic Day", "Youth Summit", "Exhibition", "Public Outreach"],
    content: {
      intro:
        "Public demonstrations and state exhibitions have served as vital conduits for demystifying renewable technology, sparking interest among rural farming delegates, and garnering institutional backing from state leadership.",
      sections: [
        {
          heading: "Interactive Live Demonstrations",
          body: [
            "At the annual Republic Day celebrations and State Youth Summits in Kohima, NEPeD erected fully operational cutaway hydroger testing rigs. Visitors witnessed running water drive the Turgo runner, while active electrical loads—bulbs, heaters, and grinders—were balanced in real-time by the Electronic Load Controller.",
            "For thousands of visiting village council members, seeing indigenous machinery built entirely in Nagaland running with zero emissions provided compelling proof of indigenous capability.",
          ],
          highlightQuote:
            "Witnessing Made-in-Nagaland machinery generate clean electricity instills immense pride and confidence in rural communities.",
        },
        {
          heading: "Catalyzing Demand from Remote Districts",
          body: [
            "These exhibition pavilions resulted in direct applications from over 60 village councils requesting site feasibility surveys for their own mountain streams.",
            "NEPeD engineers used the venue to distribute comprehensive field survey manuals, guiding village leaders on how to calculate hydraulic head and flow discharge using simple bucket-and-stopwatch methods.",
          ],
        },
      ],
      takeaways: [
        "Live operational demonstrations witnessed by thousands of citizens and officials.",
        "Direct catalyst for dozens of new village hydroger applications.",
        "Distributed indigenous hydrology survey guides to village leaders.",
        "Strengthened partnership between civil society, academia, and government departments.",
      ],
    },
  },
  {
    id: "6",
    slug: "sharpening-daos-and-powering-mountain-cottage-mills",
    title: "Sharpening Daos & Powering Mountain Cottage Mills",
    category: "Community",
    date: "February 02, 2026",
    readTime: "5 min read",
    image: "/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
    summary:
      "How electricity directly translates into agricultural value addition: tool sharpening, grain hulling, and evening timber processing.",
    author: {
      name: "Livelihood Cell",
      role: "Rural Micro-Economy Division",
    },
    tags: ["Livelihood", "Agriculture", "Dao Sharpening", "Micro-Milling", "Women Drudgery"],
    content: {
      intro:
        "Electricity in rural Nagaland is not merely a lifestyle amenity for illumination; it is a direct productive input for farming operations, artisan craftsmanship, and domestic labor reduction.",
      sections: [
        {
          heading: "Transforming Daily Agricultural Labor",
          body: [
            "The machete or 'dao' is the universal tool of every Naga farmer, used daily for clearing fields, harvesting crops, carving timber, and domestic chores. Historically, sharpening heavy steel daos on river whetstones required hours of exhaustive manual effort every evening.",
            "By connecting electric bench grinders to hydroger circuits during daytime hours, farmers sharpen tools with precision in minutes, dramatically increasing field productivity and reducing daily physical strain.",
          ],
          highlightQuote:
            "Productive daytime power transforms the economic return of every unit of village water.",
        },
        {
          heading: "Drudgery Reduction for Village Women",
          body: [
            "The introduction of motorized mini rice hullers, spice pulverizers, and corn mills powered by pico-hydro has lifted an immense physical burden from village women.",
            "Hours previously spent pounding grains by hand in wooden mortars are now repurposed for weaving traditional handlooms, managing cash crop gardens, and participating in village council affairs.",
          ],
        },
      ],
      takeaways: [
        "Daytime agricultural tool grinding cuts tool preparation time by 80%.",
        "Mini rice hullers and grain mills liberate hours of manual labor for women.",
        "Motorized carpentry enables local furniture fabrication from plantation timber.",
        "Generates daytime revenue for Village Energy Committee maintenance funds.",
      ],
    },
  },
];
