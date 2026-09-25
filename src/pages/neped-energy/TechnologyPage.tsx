import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { HYDROGER_PAGE, ELC_PAGE } from "@/data/neped-energy/productPagesData";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  FlaskConical,
  Landmark,
  Factory,
  Cpu,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Store,
  TrendingUp,
  Waves,
} from "lucide-react";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { ProductImageCard } from "@/components/shared/ProductImageCard";
import { NumberedTextCard } from "@/components/shared/NumberedTextCard";
import { BlurReveal } from "@/components/ui/blur-reveal";

const GLASS_CARD =
  "rounded-[16px] bg-gradient-to-br from-white/25 to-white/[0.06] border border-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)]";

// Product cards: names and photos from productPagesData.ts (names from NEPeD/data.txt)
const PRODUCT_CARDS = [HYDROGER_PAGE, ELC_PAGE];

const OBJECTIVE_ICONS = [Factory, Cpu, Lightbulb, GraduationCap, BookOpen, Store, TrendingUp, Waves];

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
      {/* 1. HERO — centred headline over full-bleed photo, glass info cards along the bottom (NEPeD overview style) */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#070707]">
        <div className="absolute inset-0 z-0">
          <img
            src="/microgrid.webp"
            alt="CERES Centre of Excellence for Renewable Energy Studies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070707]/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/60 via-[#070707]/15 to-[#070707]/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Link
              to={NEPED_ENERGY_PATHS.home}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.12] hover:bg-white/20 border border-white/25 backdrop-blur-md text-[11px] sm:text-[12px] font-mono text-[#ffffff] transition-colors"
            >
              <ArrowLeft size={12} />
              <span>NEPeD Energy Overview</span>
            </Link>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.12] border border-white/25 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b75928] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] tracking-[0.14em] text-[#ffffff] font-mono">
                Centre of Excellence for Renewable Energy Studies (CERES)
              </span>
            </div>
          </div>

          <BlurReveal as="h1" className="max-w-[980px] text-[36px] sm:text-[56px] md:text-[64px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]">{"CERES — Centre of Excellence"}</BlurReveal>

          <p className="mt-6 max-w-[760px] text-[15px] sm:text-[17px] text-[#ffffff]/90 font-normal leading-relaxed">
            NEPeD’s decision to indigenize/upscale its work led to the establishment of Centre of Excellence for Renewable Energy Studies (CERES), at Industrial Estate, Dimapur.
          </p>

          <p className="mt-3 max-w-[680px] text-[14px] sm:text-[15px] text-[#e5e4e4]/80 font-light leading-relaxed">
            Established to mass-produce indigenous hydrogers, engineer Electronic Load Controllers (ELC), train rural engineers, and enable Nagaland to harness its vast Himalayan river potential.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ArrowPillButton href="#ceres-objectives" arrow="down">CERES Institutional Objectives</ArrowPillButton>
            <ArrowPillButton href="#products-catalog" variant="glass">Explore Products Lineup</ArrowPillButton>
            <ArrowPillButton href="#ceres-objectives" variant="link" arrow="down">Scroll to 8 Mandates</ArrowPillButton>
          </div>
        </motion.div>

        {/* Glass info cards (from the former hero bottom bar) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 pb-6 sm:pb-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { icon: MapPin, text: "Industrial Estate, Dimapur" },
            { icon: FlaskConical, text: "Established for Indigenous Clean Energy R&D" },
            { icon: Landmark, text: "Govt. of Nagaland" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className={`${GLASS_CARD} p-5 sm:p-6 flex items-center gap-4 text-left`}>
              <span className="w-12 h-12 rounded-full bg-[#b75928] text-[#ffffff] flex items-center justify-center shrink-0">
                <Icon size={20} />
              </span>
              <span className="text-[16px] sm:text-[18px] font-light text-[#ffffff] tracking-[-0.3px] leading-snug">{text}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 2. CERES OBJECTIVES — Who We Are header + Aims-style text cards */}
      <motion.section {...fadeUpOnView} id="ceres-objectives" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] space-y-5">
          <SectionPill>Institutional Charter • Industrial Estate, Dimapur</SectionPill>
          <h2 className="text-[30px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-[1.12]">
            Objectives of CERES
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
            <strong className="font-medium text-[#262626]">NEPeD’s decision to indigenize/upscale its work led to the establishment of Centre of Excellence for Renewable Energy Studies (CERES), at Industrial Estate, Dimapur.</strong> CERES was set up with the following objectives:
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ceresObjectives.map((obj, idx) => (
            <NumberedTextCard key={obj.num} icon={OBJECTIVE_ICONS[idx]} index={idx} title={obj.title} text={obj.desc} />
          ))}
        </div>
      </motion.section>

      {/* 3. PRODUCTS CATALOG — Products section style (pill + divider + large photo cards) */}
      <motion.section {...fadeUpOnView} id="products-catalog" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="pb-8 sm:pb-10 border-b border-[#e5e4e4] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-[760px] space-y-5">
            <SectionPill>CERES Production Lineup</SectionPill>
            <h2 className="text-[30px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-[1.12]">
              Engineered Clean Tech Products
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
              Hardware designed, manufactured, and tested at the CERES facility in Dimapur. Click any card to inspect full technical data sheets.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8d8d8d] shrink-0">
            {PRODUCT_CARDS.length} Official Hardware Products
          </span>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
          {PRODUCT_CARDS.map((prod, idx) => (
            <div key={prod.slug} className="space-y-5">
              <ProductImageCard
                to={NEPED_ENERGY_PATHS.product(prod.slug)}
                image={prod.heroImage}
                title={prod.name}
                tag={`Product 0${idx + 1}`}
              />
              <div className="px-1">
                <ArrowPillButton to={NEPED_ENERGY_PATHS.product(prod.slug)} variant="outline">View Product Specifications</ArrowPillButton>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. TECHNICAL SPECIFICATIONS — dark band (What is Hydroger? style) */}
      <section id="specs" className="w-full bg-[#002934]">
        <motion.div {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <SectionPill dark>Turbine Engineering Specs</SectionPill>
            <h2 className="text-[34px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              Hydroger Capacity Comparison
            </h2>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 p-1 rounded-[1584px]">
              {(["3kw", "5kw", "10kw"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2 rounded-[1584px] text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === tab ? "bg-[#b75928] text-[#ffffff]" : "text-[#e5e4e4]/80 hover:text-[#ffffff]"
                  }`}
                >
                  {tab.toUpperCase()} Unit
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
            <div className="lg:col-span-5 bg-[#ffffff] rounded-[16px] p-7 sm:p-8 flex flex-col gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <h3 className="text-[24px] sm:text-[28px] font-light text-[#000000] tracking-[-0.5px] leading-tight">{currentSpec.name}</h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">{currentSpec.ideal}</p>
              <div className="bg-[#f5f5f5] rounded-[12px] p-5 space-y-2 text-[14px]">
                <div className="text-[#8d8d8d] uppercase text-[11px] font-mono">Portability Profile</div>
                <p className="text-[#000000] font-medium">{currentSpec.weight}</p>
                <p className="text-[#666666]">Designed for remote mountain transport without heavy machinery.</p>
              </div>
              <div className="mt-auto pt-2">
                <Link
                  to={NEPED_ENERGY_PATHS.product("hydroger-turbine-system")}
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#b75928] hover:underline"
                >
                  <span>Open Full Hydroger Specification Page</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-[16px] bg-white/[0.06] border border-white/15 p-4 sm:p-6">
              <table className="w-full text-left text-[14px] sm:text-[15px]">
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal w-1/3">Operating Head</td>
                    <td className="py-4 text-[#ffffff] font-mono">{currentSpec.head}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Water Flow Rate</td>
                    <td className="py-4 text-[#ffffff] font-mono">{currentSpec.discharge}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Rated Output</td>
                    <td className="py-4 text-[#ffffff] font-mono">{currentSpec.output}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Operating Speed</td>
                    <td className="py-4 text-[#ffffff] font-mono">{currentSpec.rpm}</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Alternator Spec</td>
                    <td className="py-4 text-[#ffffff]">{currentSpec.alternator}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. MICROGRID ARCHITECTURE — dark teal cards */}
      <motion.section {...fadeUpOnView} id="microgrids" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {[
            {
              label: "Off-Grid Architecture",
              title: "Decentralized Village Grids",
              body: "Distribution lines run directly from the powerhouse to village dwellings, eliminating expensive long-distance transmission line losses.",
            },
            {
              label: "Zero Emission",
              title: "Run-of-the-River Impact",
              body: "No large dams or flooded valleys. Water is diverted through a small forebay tank, passed through the runner, and returned 100% cleanly to the stream.",
              
              cta: "Environmental Policy",
            },
          ].map((card: { label: string; title: string; body: string; to?: string; cta?: string }) => (
            <div
              key={card.title}
              className="relative rounded-[16px] overflow-hidden bg-[#002934] p-7 sm:p-10 flex flex-col justify-between gap-10 min-h-[340px]"
            >
              <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#b75928]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative space-y-4">
                <SectionPill dark>{card.label}</SectionPill>
                <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] leading-tight">{card.title}</h3>
                <p className="text-[15px] sm:text-[16px] text-[#e5e4e4]/80 leading-relaxed">{card.body}</p>
              </div>
              {card.to && card.cta && (
                <div className="relative">
                  <ArrowPillButton to={card.to} variant="glass">{card.cta}</ArrowPillButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
