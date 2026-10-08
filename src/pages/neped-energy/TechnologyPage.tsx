import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { HYDROGER_PAGE, ELC_PAGE } from "@/data/neped-energy/productPagesData";
import {
  ArrowRight,
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
import { PageHero } from "@/components/shared/PageHero";
import { SectionSubnav } from "@/components/shared/SectionSubnav";
import { PartnerBand } from "@/components/shared/PartnerBand";

// Product cards: names and photos from productPagesData.ts (names from NEPeD/data.txt)
const PRODUCT_CARDS = [HYDROGER_PAGE, ELC_PAGE];

const EYEBROW = "text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1E6F4C]";

const SUBNAV = [
  { id: "hydroger", label: "What is a Hydroger?" },
  { id: "ceres-objectives", label: "CERES" },
  { id: "products-catalog", label: "Products" },
];

// Two turbines — text verbatim from the Technology copy ("NEPED's model" changed to "NEPeD's model" per the team)
const TURBINES = [
  {
    name: "Reaction turbine",
    kw: "1 kW",
    text: "Needs a good volume of water but little height; suited to low-lying sites. NEPeD's model: 1 kW.",
    terrain: (
      <svg viewBox="0 0 160 90" className="h-[90px] w-40" aria-hidden="true">
        <path d="M0 60 L160 60 L160 90 L0 90 Z" fill="#CFE0E6" />
        <path d="M10 52 C50 48 110 56 150 52" stroke="#5E8FA3" strokeWidth="3" fill="none" />
        <path d="M0 30 L160 38" stroke="#5B6660" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    name: "Impulse turbine",
    kw: "3 kW",
    text: "Needs greater height but less water; suited to steep hill streams. NEPeD's model: 3 kW.",
    terrain: (
      <svg viewBox="0 0 160 90" className="h-[90px] w-40" aria-hidden="true">
        <path d="M0 10 L60 10 L130 80 L160 80 L160 90 L0 90 Z" fill="#E3EAE5" />
        <path d="M20 8 C50 12 70 30 100 60 C112 72 126 78 150 78" stroke="#5E8FA3" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
];

const OBJECTIVE_ICONS = [Factory, Cpu, Lightbulb, GraduationCap, BookOpen, Store, TrendingUp, Waves];

export function TechnologyPage() {
  const [activeTab, setActiveTab] = useState<"3kw" | "5kw" | "10kw">("3kw");

  useEffect(() => {
    document.title = "What is a Hydroger? — NEPeD";
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
      {/* 1. HERO — What is a Hydroger? (text verbatim from the Technology copy supplied by the NEPED team) */}
      <PageHero
        eyebrow="Technology"
        title="What is a Hydroger?"
        intro="A Hydroger is a small water-powered generator — the age-old watermill, reinvented for Nagaland. The name joins two words: Hydro and Generator."
      >
        {/* Energy lineage tag */}
        <span className="inline-flex w-fit items-center gap-2 bg-[#E8A33D] py-1.5 pr-3.5 pl-1.5 text-[13px] font-bold text-[#12432E]">
          <img src="/NEPeD Logo High Res.webp" alt="" className="h-6 w-6 rounded-full bg-[#ffffff] object-cover" />
          Energy Development
        </span>
      </PageHero>

      <SectionSubnav items={SUBNAV} label="Technology" />

      {/* HOW IT WORKS — text verbatim; labelled schematic drawn from the same text (casing → shaft → turbine → alternator) */}
      <motion.section {...fadeUpOnView} id="hydroger" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-center gap-10 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className={EYEBROW}>How it works</span>
            <p className="text-[17px] sm:text-[19px] leading-[1.7] text-[#1A2E23]">
              The mechanism is elegantly simple. A cylindrical cast-iron casing houses an alternator, connected by a shaft to a turbine. Flowing water spins the turbine, the turbine drives the alternator, and the alternator produces electricity. No fuel. No combustion. Just the river at work.
            </p>
          </div>
          <figure className=" bg-[#F3F6F3] p-5 sm:p-8">
            <HydrogerSchematic />
          </figure>
        </div>
      </motion.section>

      {/* TWO TURBINES — text verbatim ("NEPeD's model" per the team) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.12] tracking-[-0.3px] text-[#12432E]">Two turbines for two terrains</h2>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {TURBINES.map((t) => (
            <article key={t.name} className="grid grid-cols-1 sm:grid-cols-[160px_minmax(0,1fr)] items-center gap-6 sm:gap-8 border border-[#dbe5de] p-7 sm:p-10">
              <div className="flex flex-col gap-4">
                {t.terrain}
                <span className="font-serif text-[48px] leading-none text-[#1E6F4C]">{t.kw}</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[22px] sm:text-[24px] font-normal tracking-[-0.3px] text-[#12432E]">{t.name}</h3>
                <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#1A2E23]">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* MADE IN NAGALAND — heading from the new copy; paragraphs kept from NEPeD/data.txt (Indigenization) until the team confirms the new facts */}
      <section className="bg-[#F3F6F3] px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <motion.div {...fadeUpOnView} className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <span className={EYEBROW}>Indigenization</span>
            <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.12] tracking-[-0.3px] text-[#12432E]">Made in Nagaland</h2>
            {HYDROGER_PAGE.indigenization.paragraphs.map((para) => (
              <p key={para} className="text-[16px] sm:text-[18px] leading-[1.7] text-[#1A2E23]">{para}</p>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to={NEPED_ENERGY_PATHS.product("hydroger-turbine-system")}
              className="group block w-full max-w-[380px] bg-[#ffffff] p-2.5 shadow-[0_24px_60px_rgba(18,67,46,0.16)]"
            >
              <img
                src="/Hydroger (Impulse).jpeg"
                alt="Hydroger (Impulse)"
                width={432}
                height={482}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. CERES OBJECTIVES — Who We Are header + Aims-style text cards */}
      <motion.section {...fadeUpOnView} id="ceres-objectives" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] space-y-5">
          <SectionPill>Institutional Charter • Industrial Estate, Dimapur</SectionPill>
          <h2 className="text-[30px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.12]">
            Objectives of CERES
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">
            <strong className="font-medium text-[#1A2E23]">NEPeD’s decision to indigenize/upscale its work led to the establishment of Centre of Excellence for Renewable Energy Studies (CERES), at Industrial Estate, Dimapur.</strong> CERES was set up with the following objectives:
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {ceresObjectives.map((obj, idx) => (
            <NumberedTextCard key={obj.num} icon={OBJECTIVE_ICONS[idx]} index={idx} title={obj.title} text={obj.desc} />
          ))}
        </div>
      </motion.section>

      {/* 3. PRODUCTS CATALOG — Products section style (pill + divider + large photo cards) */}
      <motion.section {...fadeUpOnView} id="products-catalog" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="pb-8 sm:pb-10 border-b border-[#e5e4e4] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-[760px] space-y-5">
            <SectionPill>CERES Production Lineup</SectionPill>
            <h2 className="text-[30px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.12]">
              Engineered Clean Tech Products
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">
              Hardware designed, manufactured, and tested at the CERES facility in Dimapur. Click any card to inspect full technical data sheets.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#5B6660] shrink-0">
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
      <section id="specs" className="w-full bg-[#12432E]">
        <motion.div {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <SectionPill dark>Turbine Engineering Specs</SectionPill>
            <h2 className="text-[34px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              Hydroger Capacity Comparison
            </h2>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 p-1 ">
              {(["3kw", "5kw", "10kw"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 py-2  text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === tab ? "bg-[#1E6F4C] text-[#ffffff]" : "text-[#e5e4e4]/80 hover:text-[#ffffff]"
                  }`}
                >
                  {tab.toUpperCase()} Unit
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
            <div className="lg:col-span-5 bg-[#ffffff] p-7 sm:p-8 flex flex-col gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <h3 className="text-[24px] sm:text-[28px] font-light text-[#1A2E23] tracking-[-0.5px] leading-tight">{currentSpec.name}</h3>
              <p className="text-[15px] text-[#5B6660] leading-relaxed">{currentSpec.ideal}</p>
              <div className="bg-[#F3F6F3] p-5 space-y-2 text-[14px]">
                <div className="text-[#5B6660] uppercase text-[11px] font-mono">Portability Profile</div>
                <p className="text-[#1A2E23] font-medium">{currentSpec.weight}</p>
                <p className="text-[#5B6660]">Designed for remote mountain transport without heavy machinery.</p>
              </div>
              <div className="mt-auto pt-2">
                <Link
                  to={NEPED_ENERGY_PATHS.product("hydroger-turbine-system")}
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#1E6F4C] hover:underline"
                >
                  <span>Open Full Hydroger Specification Page</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/[0.06] border border-white/15 p-4 sm:p-6">
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
              className="relative overflow-hidden bg-[#12432E] p-7 sm:p-10 flex flex-col justify-between gap-10 min-h-[340px]"
            >
              <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#1E6F4C]/15 rounded-full blur-3xl pointer-events-none" />
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

      <PartnerBand />
    </div>
  );
}

/** Labelled schematic of the mechanism described in the text: water → turbine → shaft → alternator (in the cast-iron casing) → electricity. */
function HydrogerSchematic() {
  const label = "fill-[#1A2E23] text-[15px]";
  const sub = "fill-[#5B6660] text-[12px]";
  return (
    <svg viewBox="0 0 640 400" className="w-full h-auto" role="img" aria-label="Hydroger schematic: flowing water spins the turbine, a shaft drives the alternator inside the cast-iron casing, and the alternator produces electricity">
      {/* casing */}
      <rect x="220" y="40" width="200" height="150" rx="18" fill="#ffffff" stroke="#12432E" strokeWidth="3" />
      {/* alternator */}
      <rect x="260" y="70" width="120" height="90" rx="10" fill="#1E6F4C" />
      <text x="320" y="121" textAnchor="middle" className="fill-[#ffffff] text-[15px]">Alternator</text>
      {/* shaft */}
      <rect x="312" y="190" width="16" height="90" fill="#5B6660" />
      {/* turbine */}
      <g transform="translate(320 300)">
        <circle r="38" fill="#ffffff" stroke="#12432E" strokeWidth="3" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <path key={a} d="M0 0 L0 -34 Q14 -26 10 -8 Z" fill="#E8A33D" transform={`rotate(${a})`} />
        ))}
        <circle r="7" fill="#12432E" />
      </g>
      {/* water */}
      <path d="M20 300 C80 290 150 310 272 300" stroke="#5E8FA3" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M368 300 C470 312 540 290 620 300" stroke="#5E8FA3" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.55" />
      <path d="M250 292 l18 8 -18 8" fill="none" stroke="#5E8FA3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* electricity */}
      <path d="M420 115 H540" stroke="#E8A33D" strokeWidth="4" strokeLinecap="round" />
      <path d="M552 95 l-14 24 h14 l-10 24" fill="none" stroke="#E8A33D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* labels */}
      <text x="220" y="26" className={label}>Cast-iron casing</text>
      <text x="345" y="240" className={label}>Shaft</text>
      <text x="370" y="360" className={label}>Turbine</text>
      <text x="20" y="276" className={label}>Flowing water</text>
      <text x="20" y="330" className={sub}>spins the turbine</text>
      <text x="470" y="170" className={label}>Electricity</text>
      <text x="470" y="190" className={sub}>no fuel, no combustion</text>
    </svg>
  );
}
