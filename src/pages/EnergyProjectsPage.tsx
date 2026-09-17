import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SectionLabel,
  SectionHeading,
  TextArrowButton,
} from "@/components/ui/AkerPrimitives";
import { fadeUpOnView } from "@/lib/motionVariants";
import { ArrowRight } from "lucide-react";

export function EnergyProjectsPage() {
  useEffect(() => {
    document.title = "Government Sponsored Energy Projects — NEPeD Clean Energy Schemes";
  }, []);

  const energyProjects = [
    {
      id: "mnre-30-hydrogers",
      num: "01",
      scheme: "Ministry of New and Renewable Energy (MNRE), GoI",
      period: "2015 – 2016",
      badge: "Central Scheme",
      title: "Installation of 30 Watermills / Pico Hydrogers",
      summary:
        "A milestone central government scheme that funded the deployment and operational upgrade of 30 indigenous pico-hydro installations across remote, un-electrified hill hamlets in Nagaland.",
      impactPoints: [
        "30 off-grid mountain hamlets electrified with clean 230V baseload power.",
        "Village Energy Committees (VECs) constituted to manage tariffs and maintenance funds.",
        "Replaced diesel generators and kerosene lamps with zero-carbon river hydrogers.",
      ],
      techSpecs: "3kW & 5kW Indigenous Hydrogers • Run-of-the-River Penstocks",
      image: "/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg",
    },
    {
      id: "nec-made-in-nagaland",
      num: "02",
      scheme: "North Eastern Council (NEC), Ministry of DoNER, GoI",
      period: "2017 – 2019",
      badge: "Regional R&D",
      title: "Development of Made-in-Nagaland Hydrogers",
      summary:
        "A dedicated research, development, and standardisation initiative to establish local casting, machining, and assembly of Pico Hydro (Hydroger) turbines directly in Nagaland.",
      impactPoints: [
        "Standardised Pelton and Cross-Flow impulse runners for varied Himalayan head ranges.",
        "Established the CERD fabrication hub and trained local mechanics in precision tolerances.",
        "Significantly lowered capital costs compared to imported European/Chinese micro-turbines.",
      ],
      techSpecs: "Indigenous CERD Hub • Cast-Iron Modular Casings • Synchronous AC Alternators",
      image: "/19 SP Tuensang with NEPeD Member at Deithung Hydroger site.jpg",
    },
    {
      id: "nafcc-climate-adaptation",
      num: "03",
      scheme: "Ministry of Agriculture & Farmers Welfare, GoI / NABARD",
      period: "2018 – 2026",
      badge: "Active Mission",
      title: "National Adaptation Fund for Climate Change (NAFCC)",
      summary:
        "An ambitious climate resilience initiative empowering mountain villages to combat erratic monsoon patterns, protect river catchment basins, and secure uninterrupted year-round micro-hydro generation.",
      impactPoints: [
        "Enforced community watershed protection charters prohibiting deforestation near stream intakes.",
        "Constructed silt-trapping forebay tanks to maintain water quality during heavy flash rains.",
        "Created drought-resilient micro-irrigation and village power continuity mechanisms.",
      ],
      techSpecs: "Catchment Preservation Belts • Desilting Forebays • Automated ELC Governors",
      image: "/forest.png",
    },
      
  ];

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-20">
      {/* 1. FULL-BLEED HERO BANNER */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden">
        {/* Background image with subtle vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/microgrid.png"
            alt="NEPeD Clean Energy Grid"
            className="w-full h-full object-cover opacity-45 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-[#070707]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/70 via-transparent to-[#070707]/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-16 sm:pt-20 lg:pt-24 max-w-[820px]">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link
              to="/neped-energy"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[1584px] bg-white/[0.08] hover:bg-white/15 border border-white/18 text-[11px] font-mono text-[#e5e4e4] transition-colors"
            >
              <span>← NEPeD Clean Energy</span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] border border-white/18 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#b75928] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5e4e4] font-mono font-medium">
                Clean Energy Wing • Govt. of Nagaland
              </span>
              <span className="hidden sm:inline text-white/30 font-mono">|</span>
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.1em] text-[#e5e4e4]/70 font-mono">
                NEPeD Energy Schemes
              </span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-[36px] sm:text-[56px] md:text-[66px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]"
          >
            Government Sponsored Energy Schemes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="mt-4 text-[15px] sm:text-[16px] text-[#e5e4e4]/90 font-normal leading-relaxed max-w-[700px]"
          >
            Official clean energy installations, indigenous engineering R&D, and climate adaptation missions implemented under NEPeD in collaboration with central ministries and regional development councils.
          </motion.p>
        </div>

        {/* Hero Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-6 border-t border-white/12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#ffffff]"
        >
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">30+ Units</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">MNRE Installations</div>
          </div>
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">4 Programs</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Central & NEC Schemes</div>
          </div>
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">100%</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Made-in-Nagaland R&D</div>
          </div>
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">2015 – 2026</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Program Horizon</div>
          </div>
        </motion.div>
      </section>

      {/* 2. SCHEMES & PROGRAMS SHOWCASE */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
        <div className="border-b border-[#e5e4e4] pb-6">
          <SectionLabel>Institutional Portfolio</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Major Energy Schemes Implemented
          </SectionHeading>
          <p className="text-[14.5px] text-[#666666] mt-2 max-w-2xl">
            Detailed overview of centrally funded and regional development schemes executed by the Project Operations Unit (POU) energy engineering division.
          </p>
        </div>

        <div className="space-y-8">
          {energyProjects.map((proj) => (
            <motion.div
              key={proj.id}
              {...fadeUpOnView}
              className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Image & Badges */}
              <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full bg-[#1c1c1c] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#070707]/30" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-[80px] border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-white">
                    {proj.badge}
                  </span>
                </div>
                <div className="absolute left-4 bottom-4 text-[12px] font-mono text-[#e5e4e4] uppercase bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-[4px]">
                  {proj.period}
                </div>
              </div>

              {/* Right Column: Detailed Body */}
              <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-[12px] font-mono text-[#8d8d8d] uppercase tracking-wider mb-2">
                    <span className="text-[#b75928] font-bold">{proj.num}</span>
                    <span>•</span>
                    <span>{proj.scheme}</span>
                  </div>

                  <h3 className="text-[22px] sm:text-[26px] font-light text-[#000000] tracking-[-0.4px] leading-tight">
                    {proj.title}
                  </h3>

                  <p className="mt-3 text-[14px] text-[#494949] leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Impact Bullets */}
                  <div className="mt-5 space-y-2.5 pt-4 border-t border-[#e5e4e4]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8d8d8d]">
                      Key Strategic Deliverables & Outcomes
                    </div>
                    {proj.impactPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#262626]">
                        <span className="text-[#b75928] font-bold mt-0.5">✓</span>
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Profile Footer */}
                <div className="pt-4 border-t border-[#e5e4e4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12px]">
                  <div className="text-[#666666]">
                    <span className="font-mono text-[#8d8d8d] uppercase text-[11px] mr-1.5">Technology Profile:</span>
                    <span className="text-[#000000] font-medium">{proj.techSpecs}</span>
                  </div>
                  <Link
                    to="/technology"
                    className="inline-flex items-center gap-1.5 font-medium text-[#b75928] hover:text-[#000000] transition-colors shrink-0"
                  >
                    <span>View Turbine Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CROSS-NAVIGATION EDITORIAL BANNER */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <SectionLabel dark={true} className="text-[#b75928]">
                Indigenous Hardware & Master Archives
              </SectionLabel>
              <h2 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-tight leading-tight">
                Inspect the Hardware or Browse the 30-Year Heritage
              </h2>
              <p className="text-[14.5px] text-[#e5e4e4]/80 leading-relaxed max-w-2xl">
                Explore the technical data sheet for 3kW, 5kW, and 10kW Hydroger turbines, Electronic Load Controllers (ELC), or access the master archive of all 11 official NEPED projects.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <TextArrowButton to="/technology" dark={true} variant="pill">
                Hydroger Technical Specs
              </TextArrowButton>
              <TextArrowButton to="/projects" dark={true} variant="pill" className="bg-white/5 border-white/15 hover:bg-white/10">
                Master Projects Archive
              </TextArrowButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
