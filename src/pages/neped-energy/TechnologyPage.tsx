import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { HYDROGER_PAGE, ELC_PAGE } from "@/data/neped-energy/productPagesData";
import {
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
import { MobileShowMore } from "@/components/shared/MobileShowMore";
import { SimpleLinkCard } from "@/components/shared/SimpleLinkCard";
import { NumberedTextCard } from "@/components/shared/NumberedTextCard";
import { PageHero } from "@/components/shared/PageHero";
import { SectionSubnav } from "@/components/shared/SectionSubnav";
import { PartnerBand } from "@/components/shared/PartnerBand";

// Product cards: names and photos from productPagesData.ts (names from NEPeD/data.txt)
const PRODUCT_CARDS = [HYDROGER_PAGE, ELC_PAGE];

const SUBNAV = [
  { id: "ceres-objectives", label: "CERES" },
  { id: "products-catalog", label: "Products" },
];

const OBJECTIVE_ICONS = [Factory, Cpu, Lightbulb, GraduationCap, BookOpen, Store, TrendingUp, Waves];

export function TechnologyPage() {
  useEffect(() => {
    document.title = "CERES — NEPeD";
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

  return (
    <div className="w-full space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO — the Hydroger explainer now lives on the Hydroger product page */}
      <PageHero eyebrow="Technology" title="Centre of Excellence for Renewable Energy Studies">
        {/* Energy lineage tag */}
        <span className="inline-flex w-fit items-center gap-2 bg-[#E8A33D] py-1.5 pr-3.5 pl-1.5 text-[13px] font-bold text-[#12432E]">
          <img src="/NEPeD Logo High Res.webp" alt="" className="h-6 w-6 rounded-full bg-[#ffffff] object-cover" />
          Energy Development
        </span>
      </PageHero>

      <SectionSubnav items={SUBNAV} label="Technology" />

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

        <MobileShowMore
          initialCount={4}
          showLabel="Show all CERES objectives"
          hideLabel="Show fewer CERES objectives"
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {ceresObjectives.map((obj, idx) => (
            <NumberedTextCard key={obj.num} icon={OBJECTIVE_ICONS[idx]} index={idx} title={obj.title} text={obj.desc} />
          ))}
        </MobileShowMore>
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

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PRODUCT_CARDS.map((prod, idx) => (
            <SimpleLinkCard
              key={prod.slug}
              to={NEPED_ENERGY_PATHS.product(prod.slug)}
              image={prod.heroImage}
              imageAlt={prod.name}
              fit="contain"
              badge={`Product 0${idx + 1}`}
              title={prod.name}
              action="View Product Specifications"
            />
          ))}
        </div>
      </motion.section>

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
