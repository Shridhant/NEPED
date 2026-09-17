import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
  TextArrowButton,
} from "@/components/ui/AkerPrimitives";
import { TECH_PRODUCTS } from "@/data/techProductsData";
import { ArrowRight } from "lucide-react";

export function TechnologyPage() {
  const [activeTab, setActiveTab] = useState<"3kw" | "5kw" | "10kw">("3kw");

  useEffect(() => {
    document.title = "CERES — Centre of Excellence for Renewable Energy Studies • NEPeD";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const ceresObjectives = [
    {
      num: "01",
      title: "Mass production of hydrogers",
      desc: "Fabricating standardized, modular pico-hydro turbines locally in Nagaland to meet rural off-grid demand.",
    },
    {
      num: "02",
      title: "Production of other essential hydroger components like Electronic Load Controller (ELC)",
      desc: "In-house manufacturing of solid-state dynamic ballast governors and grid stabilization electronics.",
    },
    {
      num: "03",
      title: "Focus on improving renewable technologies",
      desc: "Continuous R&D on blade aerodynamics, silt-resistant metallurgy, and high-efficiency permanent magnet alternators.",
    },
    {
      num: "04",
      title: "Training of “Rural Engineers”",
      desc: "Skilling local village youths in electro-mechanical assembly, powerhouse maintenance, and rapid troubleshooting.",
    },
    {
      num: "05",
      title: "Centre for trans-generational sharing, learning and research on hydro based technologies in the North East and beyond",
      desc: "A regional knowledge hub for grassroots innovators, universities, and Himalayan community power advocates.",
    },
    {
      num: "06",
      title: "Entrepreneurship development",
      desc: "Incubating local micro-enterprises, rural machinery fabricators, and village energy service providers.",
    },
    {
      num: "07",
      title: "Upscale production of hydroger to Small Hydro technology",
      desc: "Expanding technical capacity from sub-megawatt pico units into mini and small hydro power stations.",
    },
    {
      num: "08",
      title: "Easy availability of hydro technology and enabling state to harness the hydro potential rivers and streams of Nagaland",
      desc: "Democratizing renewable hardware access so every mountain community can tap its local river streams.",
    },
  ];

  const specs = {
    "3kw": {
      name: "NEPeD Hydroger 3kW Model",
      head: "25 – 45 Meters",
      discharge: "12 – 18 Litres/Sec",
      output: "3.0 kVA / 230V Single Phase",
      ideal: "Single village hamlets (15–25 households) for lighting & basic processing.",
      rpm: "1500 RPM (Belt-driven / Direct)",
      alternator: "Brushless synchronous AC generator",
      weight: "~85 kg (Modular for mountain porterage)",
    },
    "5kw": {
      name: "NEPeD Hydroger 5kW Model",
      head: "35 – 60 Meters",
      discharge: "18 – 25 Litres/Sec",
      output: "5.0 kVA / 230V Single Phase",
      ideal: "Medium village clusters (30–50 households) + community agro-mills.",
      rpm: "1500 RPM synchronous",
      alternator: "Class H insulation, tropicalized brushless",
      weight: "~110 kg (Modular cast assembly)",
    },
    "10kw": {
      name: "NEPeD Hydroger 10kW Model",
      head: "50 – 90 Meters",
      discharge: "25 – 40 Litres/Sec",
      output: "10.0 kVA / 415V Three Phase",
      ideal: "Large village centers, small cottage industries & multi-hamlet mini-grids.",
      rpm: "1500 RPM synchronous",
      alternator: "Industrial continuous duty alternator",
      weight: "~175 kg (Cast iron modular casing)",
    },
  };

  const currentSpec = specs[activeTab];

  return (
    <div className="w-full space-y-20 sm:space-y-28 pb-20">
      {/* 1. FULL-BLEED HERO BANNER */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/microgrid.png"
            alt="CERES Centre of Excellence for Renewable Energy Studies"
            className="w-full h-full object-cover opacity-50 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-16 sm:pt-20 max-w-[760px]"
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link
              to="/neped-energy"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[1584px] bg-white/[0.08] hover:bg-white/15 border border-white/18 text-[11px] font-mono text-[#e5e4e4] transition-colors"
            >
              <span>← NEPeD Energy Overview</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[1584px] bg-white/[0.08] border border-white/18 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#b75928] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#e5e4e4] font-mono">
                Centre of Excellence for Renewable Energy Studies (CERES)
              </span>
            </div>
          </div>

          <h1 className="text-[36px] sm:text-[54px] md:text-[62px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]">
            CERES — Centre of Excellence
          </h1>

          <p className="mt-4 text-[15px] sm:text-[16.5px] text-[#ffffff]/90 font-normal leading-relaxed">
            NEPeD’s decision to indigenize/upscale its work led to the establishment of Centre of Excellence for Renewable Energy Studies (CERES), at Industrial Estate, Dimapur.
          </p>

          <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#e5e4e4]/75 font-light leading-relaxed max-w-2xl">
            Established to mass-produce indigenous hydrogers, engineer Electronic Load Controllers (ELC), train rural engineers, and enable Nagaland to harness its vast Himalayan river potential.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#ceres-objectives"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[1584px] bg-[#ffffff] text-[#000000] text-[13px] font-medium hover:bg-[#e5e4e4] transition-all"
            >
              <span>CERES Institutional Objectives ↓</span>
            </a>
            <a
              href="#products-catalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[1584px] bg-white/10 border border-white/20 text-[#ffffff] text-[13px] font-medium hover:bg-white/15 transition-all"
            >
              <span>Explore Products Lineup</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#e5e4e4]/70"
        >
          <span>Industrial Estate, Dimapur • Established for Indigenous Clean Energy R&D • Govt. of Nagaland</span>
          <a href="#ceres-objectives" className="hover:text-white transition-colors">
            Scroll to 8 Mandates ↓
          </a>
        </motion.div>
      </section>

      {/* 2. CERES INSTITUTIONAL MANDATE & 8 CORE OBJECTIVES */}
      <motion.section {...fadeUpOnView} id="ceres-objectives" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-[#e5e4e4] pb-6 max-w-3xl">
            <SectionLabel>Institutional Charter • Industrial Estate, Dimapur</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              Objectives of CERES
            </SectionHeading>
            <p className="text-[15px] sm:text-[16px] text-[#262626] font-normal leading-relaxed mt-4">
              <strong>NEPeD’s decision to indigenize/upscale its work led to the establishment of Centre of Excellence for Renewable Energy Studies (CERES), at Industrial Estate, Dimapur.</strong> CERES was set up with the following objectives:
            </p>
          </div>

          {/* 8 Official Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ceresObjectives.map((obj) => (
              <div
                key={obj.num}
                className="p-5 rounded-[8px] bg-[#e5e4e4]/25 border border-[#e5e4e4] flex flex-col justify-between hover:border-[#1c1c1c] hover:bg-[#ffffff] transition-all group"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-[4px] bg-[#1c1c1c] text-[#ffffff] font-mono text-[11px] font-semibold">
                    {obj.num}
                  </span>
                  <h4 className="text-[15.5px] font-medium text-[#000000] leading-snug group-hover:text-[#b75928] transition-colors">
                    {obj.title}
                  </h4>
                </div>
                <p className="mt-3 text-[12.5px] text-[#666666] leading-relaxed border-t border-[#e5e4e4] pt-2.5">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. INTERACTIVE HARDWARE PRODUCTS CATALOG (CLICKABLE PRODUCT CARDS) */}
      <motion.section {...fadeUpOnView} id="products-catalog" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e5e4e4] pb-6">
          <div>
            <SectionLabel>CERES Production Lineup</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              Engineered Clean Tech Products
            </SectionHeading>
            <p className="text-[14.5px] text-[#666666] mt-2">
              Hardware designed, manufactured, and tested at the CERES facility in Dimapur. Click any card to inspect full technical data sheets.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8d8d8d] shrink-0">
            {TECH_PRODUCTS.length} Official Hardware Products
          </span>
        </div>

        {/* Clickable Product Cards Grid (Dynamically adapts to 1, 2, 3, 4+ cards) */}
        <div
          className={`grid gap-6 sm:gap-8 ${
            TECH_PRODUCTS.length === 1
              ? "max-w-md mx-auto grid-cols-1"
              : TECH_PRODUCTS.length === 2
              ? "max-w-4xl mx-auto grid-cols-1 md:grid-cols-2"
              : TECH_PRODUCTS.length === 3
              ? "max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {TECH_PRODUCTS.map((prod, idx) => (
            <Link
              key={prod.id}
              to={`/technology/product/${prod.slug}`}
              className="group bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1c1c1c] active:scale-[0.98] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Header with Tag */}
                <div className="relative aspect-[16/10] bg-[#1c1c1c] overflow-hidden">
                  <img
                    src={prod.heroImage}
                    alt={prod.name}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-[1584px] bg-black/70 backdrop-blur-md border border-white/20 text-[10.5px] font-mono text-white uppercase tracking-wider">
                      Product 0{idx + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4] truncate">
                    {prod.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-[22px] font-light text-[#000000] tracking-[-0.3px] group-hover:text-[#b75928] transition-colors leading-snug">
                      {prod.name}
                    </h3>
                    <p className="mt-1 text-[12px] font-mono text-[#b75928] uppercase tracking-wider truncate">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-[13.5px] text-[#494949] leading-relaxed line-clamp-3">
                    {prod.summary}
                  </p>

                  {/* Clean 3-Column Preview Specs Matrix */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#e5e4e4]/35 rounded-[6px] border border-[#e5e4e4] text-center">
                    {prod.previewSpecs.map((sp, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="text-[10px] font-mono text-[#8d8d8d] uppercase block truncate">
                          {sp.label}
                        </span>
                        <span className="text-[11.5px] font-semibold text-[#000000] block truncate">
                          {sp.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button Action */}
              <div className="p-6 pt-0">
                <div className="w-full py-3 px-5 rounded-[80px] bg-[#1c1c1c] group-hover:bg-[#070707] text-[#ffffff] text-[13px] font-medium transition-colors flex items-center justify-between shadow-sm">
                  <span>View Product Specifications</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* 3. INTERACTIVE TECHNICAL SPECIFICATIONS EXHIBIT */}
      <motion.section {...fadeUpOnView} id="specs" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-4 border-b border-[#e5e4e4] pb-6">
            <div>
              <SectionLabel>Turbine Engineering Specs</SectionLabel>
              <SectionHeading size="md" className="mt-1">
                Hydroger Capacity Comparison
              </SectionHeading>
            </div>

            {/* Pill Selector */}
            <div className="flex items-center gap-2 bg-[#e5e4e4]/50 p-1 rounded-[1584px]">
              {(["3kw", "5kw", "10kw"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-[1584px] text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#1c1c1c] text-[#ffffff]"
                      : "text-[#666666] hover:text-[#000000]"
                  }`}
                >
                  {tab.toUpperCase()} Unit
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-[24px] font-light text-[#000000]">{currentSpec.name}</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                {currentSpec.ideal}
              </p>
              <div className="p-4 bg-[#e5e4e4]/30 rounded-[8px] border border-[#e5e4e4] space-y-2 text-[13px]">
                <div className="text-[#8d8d8d] uppercase text-[11px] font-mono">Portability Profile</div>
                <p className="text-[#000000] font-medium">{currentSpec.weight}</p>
                <p className="text-[#666666]">Designed for remote mountain transport without heavy machinery.</p>
              </div>

              <div className="pt-2">
                <Link
                  to="/technology/product/hydroger-turbine-system"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#b75928] hover:underline"
                >
                  <span>Open Full Hydroger Specification Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <table className="w-full text-left text-[14px]">
                <tbody>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3 text-[#8d8d8d] font-normal w-1/3">Operating Head</td>
                    <td className="py-3 text-[#000000] font-mono">{currentSpec.head}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3 text-[#8d8d8d] font-normal">Water Flow Rate</td>
                    <td className="py-3 text-[#000000] font-mono">{currentSpec.discharge}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3 text-[#8d8d8d] font-normal">Rated Output</td>
                    <td className="py-3 text-[#000000] font-mono">{currentSpec.output}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3 text-[#8d8d8d] font-normal">Operating Speed</td>
                    <td className="py-3 text-[#000000] font-mono">{currentSpec.rpm}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3 text-[#8d8d8d] font-normal">Alternator Spec</td>
                    <td className="py-3 text-[#000000]">{currentSpec.alternator}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. MICROGRID ARCHITECTURE (Pine & Tide Surfaces) */}
      <motion.section {...fadeUpOnView} id="microgrids" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pine Card */}
          <div className="bg-[#193f32] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <SectionLabel dark={true} className="text-[#e5e4e4]">
                Off-Grid Architecture
              </SectionLabel>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-3">
                Decentralized Village Grids
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 mt-3 leading-relaxed">
                Distribution lines run directly from the powerhouse to village dwellings, eliminating expensive long-distance transmission line losses.
              </p>
            </div>
            <div className="pt-6">
              <TextArrowButton to="/technology/product/village-pico-microgrid" dark={true} variant="pill">
                Explore Microgrid System
              </TextArrowButton>
            </div>
          </div>

          {/* Tide Card */}
          <div className="bg-[#002934] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <SectionLabel dark={true} className="text-[#e5e4e4]">
                Zero Emission
              </SectionLabel>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-3">
                Run-of-the-River Impact
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 mt-3 leading-relaxed">
                No large dams or flooded valleys. Water is diverted through a small forebay tank, passed through the runner, and returned 100% cleanly to the stream.
              </p>
            </div>
            <div className="pt-6">
              <TextArrowButton to="/about" dark={true} variant="pill">
                Environmental Policy
              </TextArrowButton>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. EDITORIAL CROSS-NAVIGATION BANNER */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <SectionLabel dark={true} className="text-[#b75928]">
                Government Energy Schemes & Field Rollout
              </SectionLabel>
              <h2 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-tight leading-tight">
                Explore Government Sponsored Clean Energy Projects
              </h2>
              <p className="text-[14.5px] text-[#e5e4e4]/80 leading-relaxed max-w-2xl">
                Discover the 30+ watermill deployments funded by MNRE, Made-in-Nagaland R&D supported by the North Eastern Council (NEC), and climate adaptation funds across mountain catchments.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <TextArrowButton to="/energy-projects" dark={true} variant="pill">
                Explore Energy Projects →
              </TextArrowButton>
              <TextArrowButton to="/impact" dark={true} variant="pill" className="bg-white/5 border-white/15 hover:bg-white/10">
                Village Impact Directory
              </TextArrowButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
