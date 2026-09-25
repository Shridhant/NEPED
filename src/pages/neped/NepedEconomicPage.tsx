import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  Wallet,
  Briefcase,
  GraduationCap,
  Store,
  PiggyBank,
  RefreshCw,
  Leaf,
} from "lucide-react";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { HoverRevealList } from "@/components/shared/HoverRevealList";
import { ProjectCard } from "@/components/neped/ProjectCard";
import { NEPED_SECTION_3, NEPED_PHASES_SECTION, NEPED_MILESTONES_SECTION } from "@/data/neped/nepedHomeSections";
import { NEPED_PHASES } from "@/data/neped/nepedPhasesData";
import { WideCardCarousel } from "@/components/shared/WideCardCarousel";
import { PhaseBlogCard } from "@/components/neped/PhaseBlogCard";
import { StaggeredCards } from "@/components/shared/StaggeredCards";
import { HaloReel } from "@/components/ui/halo-reel";
import { NEPED_PRESENT_TEAM } from "@/data/neped/nepedTeamData";
import { ProjectTile } from "@/components/neped/ProjectTile";
import { FolderCard } from "@/components/ui/folder-cards";
import { BookDemoButton } from "@/components/ui/book-demo-button";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import { GALLERY_ALBUMS_DATA } from "@/data/shared/galleryAlbumsData";
import { NEPED_SUCCESS_STORIES } from "@/data/neped/nepedSuccessStoriesData";
import { loadAllProjects } from "@/lib/contentLoader";
import { fadeUpOnView } from "@/lib/motionVariants";
import { NEPED_ENERGY_PATHS, NEPED_PATHS, SHARED_PATHS } from "@/routes/paths";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { BorderGlow } from "@/components/ui/border-glow";
import { DotGrid } from "@/components/ui/dot-grid";
import { useOpenContact } from "@/lib/contact";

const H2 = "text-[30px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-[1.12]";
// Innovation cards: white washed with soft NEPED greens; border glow follows the pointer (BorderGlow)
// const INNOVATION_CARD_BG = [
//   "radial-gradient(70% 60% at 0% 0%, rgba(159,214,143,0.45) 0%, transparent 70%), linear-gradient(160deg, #eef7ea 0%, #ffffff 60%, #f3f9f0 100%)",
//   "radial-gradient(70% 60% at 100% 0%, rgba(126,200,178,0.40) 0%, transparent 70%), linear-gradient(200deg, #ebf6f1 0%, #ffffff 60%, #f1f8f4 100%)",
// ];
const INNOVATION_GLOW = {
  light: true,
  borderRadius: 20,
  glowColor: "130 50 45",
  glowRadius: 40,
  glowIntensity: 1.2,
  edgeSensitivity: 28,
  coneSpread: 25,
  colors: ["#2d7d3a", "#9fd68f", "#2f9aa0"] as [string, string, string],
};
// Aims cards: light gradients in matched greens / earth tones (NEPED palette)
const AIM_PALETTES = [
  { background: "linear-gradient(145deg, #e4f2d6 0%, #b9dca3 100%)", folderColor: "#f1f8ea", borderColor: "#d6ebc6", textColor: "#23452a", subTextColor: "rgba(35,69,42,0.72)", iconColor: "#2d7d3a" },
  { background: "linear-gradient(145deg, #dcf1ea 0%, #a9d9c6 100%)", folderColor: "#eef8f4", borderColor: "#c9e8dc", textColor: "#1e4a3c", subTextColor: "rgba(30,74,60,0.72)", iconColor: "#2a7a5f" },
  { background: "linear-gradient(145deg, #eef2d4 0%, #d3dea0 100%)", folderColor: "#f7f9ea", borderColor: "#e2e8bf", textColor: "#3e4a1a", subTextColor: "rgba(62,74,26,0.72)", iconColor: "#6b7f22" },
  { background: "linear-gradient(145deg, #f5ecd9 0%, #e2cfa4 100%)", folderColor: "#faf5ea", borderColor: "#ecdfc2", textColor: "#4d3e22", subTextColor: "rgba(77,62,34,0.72)", iconColor: "#8a6a2c" },
  { background: "linear-gradient(145deg, #e2efe0 0%, #b6d4b2 100%)", folderColor: "#f0f7ef", borderColor: "#cfe3cc", textColor: "#24442a", subTextColor: "rgba(36,68,42,0.72)", iconColor: "#3f7a45" },
  { background: "linear-gradient(145deg, #daefec 0%, #a6d5cf 100%)", folderColor: "#edf7f6", borderColor: "#c6e6e2", textColor: "#1c4a47", subTextColor: "rgba(28,74,71,0.72)", iconColor: "#237a72" },
  { background: "linear-gradient(145deg, #e8f4da 0%, #c4e2a3 100%)", folderColor: "#f3f9ec", borderColor: "#d8ebc3", textColor: "#2c4a1c", subTextColor: "rgba(44,74,28,0.72)", iconColor: "#4a8a2a" },
];
// Gallery preview: every photo in public/gallery, titled "<State> 01, 02…"; each opens the Gallery page
const GALLERY_WHEEL_ITEMS: WorksWheelItem[] = GALLERY_ALBUMS_DATA.flatMap((album) =>
  album.photos.map((photo, i) => ({
    title: `${album.title} ${String(i + 1).padStart(2, "0")}`,
    image: photo.src,
    href: SHARED_PATHS.gallery,
  })),
);
const GLASS_ROW = "rounded-[12px] bg-white/70 border border-[#193f32]/10 p-4";

export function NepedEconomicPage() {
  const isSmallScreen = useIsSmallScreen();
  const openContact = useOpenContact();

  useEffect(() => {
    document.title = "NEPED — Heritage & Economic Development (1994–Present) • Master Archives";
  }, []);


  const allProjects = loadAllProjects();

  return (
    <div className="theme-neped w-full space-y-20 sm:space-y-28 pb-4">
      {/* 1. HERO — inset rounded photo panel with a floating society card (inspired by inspo.webp) */}
      <section className="px-2.5 sm:px-4 pt-2.5 sm:pt-4">
        <div data-intro-hero className="relative w-full min-h-[calc(100svh-20px)] sm:min-h-[calc(100svh-32px)] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0f2a21] flex flex-col">
          {/* Background photo with a minimal dark overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/bg2.webp"
              alt=""
              className="w-full h-full object-cover saturate-[0.9]"
            />
            {/* Minimal dark overlay: just enough for white text */}
            <div className="absolute inset-0 bg-[#0b1f18]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f18]/45 via-[#0b1f18]/15 to-transparent" />
          </div>

          <div className="relative z-10 flex-1 w-full max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-14 pt-28 sm:pt-36 pb-6 sm:pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            {/* Headline block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7 lg:self-center space-y-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-[1584px] border border-white/40 bg-white/10 backdrop-blur-sm text-[12px] sm:text-[13px] text-[#ffffff]">
                Foundational Heritage • Govt. of Nagaland (Est. 1994)
              </span>
              <BlurReveal as="h1" className="text-[44px] sm:text-[68px] lg:text-[84px] font-light text-[#ffffff] tracking-[-2px] leading-[1.02] [text-shadow:0_2px_24px_rgba(0,0,0,0.18)]">{"NEPED"}</BlurReveal>
              <p className="max-w-[560px] text-[15px] sm:text-[17px] text-[#ffffff]/95 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
                Nagaland Empowerment of People through Economic Development (NEPED) — 30+ years of pioneering community agroforestry, shifting cultivation transformation, women's land equity, and biodiversity conservation under the NEPeD umbrella.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to={NEPED_PATHS.structure}
                  className="inline-flex items-center px-6 py-3.5 rounded-[1584px] bg-(--brand-accent) hover:bg-(--brand-accent-hover) text-[15px] font-medium text-[#ffffff] transition-colors"
                >
                  Organisational Structure
                </Link>
                <Link
                  to={NEPED_PATHS.projects}
                  className="inline-flex items-center px-6 py-3.5 rounded-[1584px] border border-white/60 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-[15px] font-medium text-[#ffffff] transition-colors"
                >
                  {allProjects.length} Official Projects Archive
                </Link>
              </div>

              {/* Society registration details */}
              <div className="pt-5 mt-2 border-t border-white/25 flex items-center gap-3.5 max-w-[620px]">
                <div className="h-12 w-12 rounded-[12px] bg-[#ffffff] p-1 flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(14,36,25,0.12)]">
                  <img
                    src="/NEPED Logo.jpg.webp"
                    alt="NEPED Heritage & Economic Development Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="min-w-0 space-y-0.5">
                  <span className="block text-[14px] font-medium text-[#ffffff]">NEPED Society (Govt. of Nagaland)</span>
                  <span className="block text-[11.5px] font-mono text-[#ffffff]/80 leading-snug">
                    Regd. NO. H/RS-4238 (19-04-2005) • Regd. NO. HOME/SRC-6751 (07-07-2014)
                  </span>
                  <span className="block text-[12px] text-[#ffffff]/75 leading-snug">
                    Phase-I: <em>Nagaland Environment Protection and Economic Development through People's Action</em> (CIDA / ICEF)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating project card (same card as the Projects page) */}
            {allProjects[0] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="lg:col-span-5 lg:justify-self-end w-full max-w-[400px]"
              >
                <ProjectCard project={allProjects[0]} tone="glass" className="shadow-[0_24px_60px_rgba(14,36,25,0.25)]" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 1A. SECTION #3 (inspo) — list + image that changes on hover. PLACEHOLDER CONTENT (see nepedHomeSections.ts) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[640px] space-y-5">
            <span className="inline-flex items-center px-4 py-2 rounded-[1584px] border border-(--brand-accent)/40 text-[13px] text-(--brand-accent)">
              {NEPED_SECTION_3.label}
            </span>
            <h2 className={H2}>{NEPED_SECTION_3.heading}</h2>
          </div>
          <p className="max-w-[460px] text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">{NEPED_SECTION_3.intro}</p>
        </div>
        <HoverRevealList items={NEPED_SECTION_3.items} />
      </motion.section>

      {/* 1B. ABOUT NEPED SOCIETY — ORIGIN, CHARTER & GOVERNANCE CULTURE (about text verbatim from NepedBige/bigeneped.txt) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="space-y-5">
          <SectionPill>Origin & Charter</SectionPill>
          <h2 className={H2}>About the NEPED Society</h2>
          <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
            Nagaland Empowerment of People through Economic Development (NEPED) was formed by the Govt. of Nagaland in 1994 as an autonomous Government registered society vide Regd.NO.H/RS-4238 Dated 19-04-2005 and Regd.NO.HOME/SRC-6751 Dated 07-07-2014. It was established to bridge developmental gaps in various sectors for economic development and empowerment with a team of multi-disciplinary government employees known as Project Operations Unit (POU) with the aim to carry out studies across Nagaland and identify major issues and to encourage and spread new ideas for sustainable development of the state. The overall aim was envisaged at building a strong resilience towards the emerging Climate Change issues.
          </p>
        </div>

        {/* Team members on a rotating ring, with a link to the About Us page */}
        <div className="mt-10 sm:mt-12 rounded-[24px] bg-[#f5f5f5] overflow-hidden">
          <HaloReel
            items={NEPED_PRESENT_TEAM.map((member) => ({ src: member.image, alt: member.name }))}
            aria-label="NEPED team members"
            cardWidth={isSmallScreen ? 110 : 150}
            cardHeight={isSmallScreen ? 110 : 150}
            radiusXRatio={isSmallScreen ? 0.3 : 0.45}
            minScale={0.4}
            radiusYRatio={0.36}
            holdDuration={1400}
            stepDuration={700}
            cardClassName="rounded-full ring-4 ring-[#ffffff]"
            imageClassName="scale-[1.15] object-top"
            interactiveCenterLabel
            centerLabel={
              <div className="flex flex-col items-center gap-5 text-center">
                <span className="text-[30px] sm:text-[52px] font-light tracking-[-1.2px] leading-none text-[#000000] whitespace-nowrap">About Us</span>
                {/* Verbatim from "NEPED PDF.pdf" (About Us); hidden on phones, where the space beside the ring is too narrow */}
                <p className="hidden sm:block max-w-[400px] text-[15px] text-[#666666] leading-relaxed">
                  NEPED is made up of a team of multi-disciplinary government officers drawn from various government departments, who are called the Project Operations Unit (POU) Members, formed by the Government of Nagaland, with full autonomy.
                </p>
                <BookDemoButton to={NEPED_PATHS.about} variant="emerald">Read more</BookDemoButton>
              </div>
            }
            className="h-[420px] sm:h-[520px]"
          />
        </div>
      </motion.section>

      {/* 1C. NEPED PHASES — wide blog-card carousel (cards verbatim from bigeneped.txt; header PLACEHOLDER) */}
      <motion.section {...fadeUpOnView}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[640px] space-y-5">
            <SectionPill>{NEPED_PHASES_SECTION.label}</SectionPill>
            <h2 className={H2}>{NEPED_PHASES_SECTION.heading}</h2>
          </div>
          <p className="max-w-[460px] text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">{NEPED_PHASES_SECTION.intro}</p>
        </div>
        <WideCardCarousel label="NEPED phases">
          {NEPED_PHASES.map((phase) => (
            <PhaseBlogCard key={phase.slug} phase={phase} />
          ))}
        </WideCardCarousel>
      </motion.section>

      {/* 1D. SUCCESS STORIES — staggered cards (inspo: "Why Axure"); text verbatim from bigeneped.txt */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-[36px] sm:text-[56px] font-light text-[#000000] tracking-[-1.4px] leading-[1.05] mb-10 sm:mb-14">
          Success stories
        </h2>
        <StaggeredCards
          items={NEPED_SUCCESS_STORIES.map((story) => ({
            title: story.title,
            text: story.overview,
            to: NEPED_PATHS.successStory(story.slug),
          }))}
        />
      </motion.section>

      {/* 2. MILESTONES — dark green band with stat cards (descriptions verbatim from bigeneped.txt / History PDF; header PLACEHOLDER) */}
      <section className="relative w-full">
        <div className="absolute inset-x-0 top-0 bottom-[120px] sm:bottom-[140px] bg-(--brand-surface)" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 sm:pt-28">
          <motion.div {...fadeUpOnView} className="max-w-[820px] mx-auto text-center flex flex-col items-center gap-6">
            <SectionPill dark>{NEPED_MILESTONES_SECTION.label}</SectionPill>
            <h2 className="text-[34px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              {NEPED_MILESTONES_SECTION.heading}
            </h2>
          </motion.div>

          <motion.div {...fadeUpOnView} className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { value: "7.8 million", label: "economic trees", text: "More than 7.8 million economic trees were planted in 5500 hectares with replication ratio of 1:6." },
              { value: "1794", label: "test plots", text: "The project has established 1794 test plots (2 test plots each, measuring 3 hectares per village) in jhum fields in 854 villages across all (8) the districts covering all 16 tribes of Nagaland." },
              { value: "30", label: "plots of lands", text: "The women, for the first time in the history of Nagaland, had purchased 30 plots of lands by breaking the barriers of the traditional laws.", accent: true },
              { value: "1.5 lac", label: "trees per year", text: "Another innovation, designed and developed by NEPED is ‘Foddorizer’ which is helping rural farmers in improving feed and feeding practices of pig and reduction in firewood consumption to a tune of 1.5 lac trees per year." },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[16px] p-7 flex flex-col gap-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ${
                  stat.accent ? "bg-(--brand-accent) text-[#ffffff]" : "bg-[#ffffff] text-[#000000]"
                }`}
              >
                <span className={`text-[12px] uppercase font-mono ${stat.accent ? "text-[#ffffff]/80" : "text-[#8d8d8d]"}`}>{stat.label}</span>
                <div className="space-y-3">
                  <span className="text-[44px] sm:text-[52px] font-light tracking-[-1.2px] leading-none block">{stat.value}</span>
                  <p className={`text-[13.5px] leading-relaxed ${stat.accent ? "text-[#ffffff]/85" : "text-[#666666]"}`}>{stat.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

   

      {/* 4. INNOVATIONS SPOTLIGHT: FODDORIZER, LSPs, & SACON BLYTH'S TRAGOPAN — light green cards with a pointer-following border glow */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {/* Foddorizer & Livestock Innovation */}
          <BorderGlow {...INNOVATION_GLOW} background={"white"} className="h-full">
          <div className="relative p-7 sm:p-10 flex flex-1 flex-col justify-between">
            <div className="relative space-y-5">
              <SectionPill>Indigenous Hardware Innovation</SectionPill>
              <h3 className="text-[28px] sm:text-[34px] font-light text-[#193f32] tracking-[-0.72px] leading-tight">
                The 'Foddorizer' & Livestock Service Providers (LSPs)
              </h3>
              <p className="text-[15px] text-[#3f5a4f] leading-relaxed">
                Assisted 4,200 resource-poor families with breeding stock, fattening stock, and low-cost scientific pig sties. To solve feed boiling and firewood depletion, NEPED designed and fabricated the <strong className="font-medium text-[#193f32]">‘Foddorizer’</strong>:
              </p>
              <div className="space-y-3 text-[14px] text-[#3f5a4f]">
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <Check size={16} className="text-(--brand-accent) shrink-0 mt-0.5" />
                  <span><strong className="font-medium text-[#193f32]">1.5 Lakh Trees Saved Annually:</strong> Drastically cuts domestic firewood consumption for boiling animal feed.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <Check size={16} className="text-(--brand-accent) shrink-0 mt-0.5" />
                  <span><strong className="font-medium text-[#193f32]">LSP Veterinary Model:</strong> Village youth trained as Livestock Service Providers contained Classical Swine Fever (CSF), preventing millions in annual losses.</span>
                </div>
              </div>
            </div>
            <div className="relative pt-6 border-t border-[#193f32]/10 mt-8 text-[11px] font-mono text-[#3f5a4f]/70">
              Supported by Navajbhai Ratan Tata Trust (NRTT) & State Plan
            </div>
          </div>
          </BorderGlow>

          {/* SACON & Community Conservation Areas */}
          <BorderGlow {...INNOVATION_GLOW} background={"white"} className="h-full">
          <div className="relative p-7 sm:p-10 flex flex-1 flex-col justify-between">
            <div className="relative space-y-5">
              <SectionPill>Community Conservation & SACON</SectionPill>
              <h3 className="text-[28px] sm:text-[34px] font-light text-[#193f32] tracking-[-0.72px] leading-tight">
                Community Conservation Areas (CCAs) & Blyth's Tragopan
              </h3>
              <p className="text-[15px] text-[#3f5a4f] leading-relaxed">
                In collaboration with the <strong className="font-medium text-[#193f32]">Salim Ali Center for Ornithology & Natural History (SACON)</strong> and Sir Dorabji Tata Trust, NEPED guided Village Councils in passing resolutions to restrict hunting, fishing, and logging:
              </p>
              <div className="space-y-3 text-[14px] text-[#3f5a4f]">
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent) shrink-0">1.</span>
                  <span>Developing legally protected <strong className="font-medium text-[#193f32]">People's Biodiversity Registers (PBRs)</strong> and resource maps.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent) shrink-0">2.</span>
                  <span>Documentation of <strong className="font-medium text-[#193f32]">Indigenous Ecological Knowledge (IEK)</strong>.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent) shrink-0">3.</span>
                  <span>Using <strong className="font-medium text-[#193f32]">Blyth’s Tragopan</strong> (State Bird of Nagaland) as the flagship conservation umbrella species.</span>
                </div>
              </div>
            </div>
            <div className="relative pt-6 border-t border-[#193f32]/10 mt-8 text-[11px] font-mono text-[#3f5a4f]/70">
              Sir Dorabji Ratan Tata Trust (SDTT) • NEPED-SCEN
            </div>
          </div>
          </BorderGlow>
        </div>
      </motion.section>

      {/* 5. SEVEN OFFICIAL AIMS & OBJECTIVES — NEPeD Aims grid (heading cell + text cards) */}
      <motion.section {...fadeUpOnView} id="aims" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="flex flex-col gap-5 px-2 sm:px-0 sm:pr-4 lg:pt-2">
            <SectionPill>02 / Official Objectives</SectionPill>
            <h2 className="text-[30px] sm:text-[36px] font-light text-[#000000] tracking-[-0.8px] leading-[1.12]">
              Core Aims & Objectives of NEPED
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              These 7 core mandates guide every project implemented by NEPED — shifting the state from subsidy dependence toward self-sustaining community investment.
            </p>
          </div>
          {[
            { icon: Wallet, title: "Enhance Financial Incomes Through Livelihood Activities", text: "Diversifying agro-forestry and farm enterprise models to generate steady rural cash flows." },
            { icon: Briefcase, title: "Create Opportunities for Self-Employment", text: "Empowering youth and village entrepreneurs in sustainable agri-business and forest products." },
            { icon: GraduationCap, title: "Enhance Capacities of Local Entrepreneurs", text: "Providing technical training, packaging, quality control, and business scaling guidance." },
            { icon: Store, title: "Establish Viable Market Linkages", text: "Connecting Naga produce and unique ethnic handicrafts directly with regional and national buyers." },
            { icon: PiggyBank, title: "Encourage Thrift Savings Amongst Farmers & SHGs", text: "Fostering micro-credit revolving funds and community financial discipline." },
            { icon: RefreshCw, title: "Transform Mindsets: From Subsidy-Dependent to Self-Dependent Investment", text: "Instilling community ownership where villages invest in their own long-term assets." },
            { icon: Leaf, title: "Sustained Community Biodiversity Conservation", text: "Ensuring that all economic activities directly protect Nagaland's rich botanical and wildlife ecosystems." },
          ].map((aim, idx) => (
            <FolderCard
              key={aim.title}
              card={{ number: String(idx + 1).padStart(2, "0"), title: aim.title, description: aim.text, icon: aim.icon, ...AIM_PALETTES[idx % AIM_PALETTES.length] }}
            />
          ))}
        </div>
      </motion.section>

      {/* 7. PROJECTS ARCHIVE */}
      <motion.section {...fadeUpOnView} id="projects" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="pb-8 sm:pb-10 border-b border-[#e5e4e4] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[760px] space-y-5">
            <SectionPill>Official Project Archive</SectionPill>
            <h2 className={H2}>Projects Implemented Under NEPED</h2>
            <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
              Comprehensive registry of {allProjects.length} landmark projects across international, national, and state funding agencies.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {allProjects.slice(0, 3).map((proj) => (
            <ProjectTile key={proj.id} project={proj} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <BookDemoButton to={NEPED_PATHS.projects} variant="emerald">See more projects</BookDemoButton>
        </div>
      </motion.section>

      {/* 8. GALLERY PREVIEW — works wheel of the photos in public/gallery; links to the Gallery page */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="rounded-[24px] overflow-hidden border border-[#e5e4e4]">
          <WorksWheel items={GALLERY_WHEEL_ITEMS} label="Gallery" action="View" className="h-[520px] sm:h-[640px]" />
        </div>
        <div className="mt-8 flex justify-center">
          <BookDemoButton to={SHARED_PATHS.gallery} variant="emerald">Click to see more</BookDemoButton>
        </div>
      </motion.section>

      {/* 9. THE EVOLUTIONARY BRIDGE: NEPED → NEPeD — light dot-grid card, NEPeD accent colours */}
      <motion.section {...fadeUpOnView} className="theme-neped-energy mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative rounded-[24px] overflow-hidden bg-[#f7f9f7] border border-[#e5e4e4] px-6 py-16 sm:px-12 sm:py-20 text-center">
          <DotGrid dotSize={4} gap={22} color="#d8e3dc" />
          {/* Soft white centre so the text stays easy to read over the dots */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.7)_40%,rgba(255,255,255,0)_75%)]" />
          <div className="relative max-w-[820px] mx-auto flex flex-col items-center gap-6">
            <SectionPill>The Energy Nexus • 108 Hydrogers Deployed</SectionPill>
            <h2 className="text-[30px] sm:text-[48px] font-light text-[#000000] tracking-[-1.2px] leading-[1.1]">
              From NEPED Agroforestry to NEPeD Clean Energy
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#494949] leading-relaxed max-w-[680px]">
              As agro-enterprises expanded across Nagaland, the emerging need was clean, affordable energy to power post-harvest processing, mechanical grain mills, and cold storage to enable Naga farmers to compete globally.
            </p>
            <p className="text-[15px] text-[#666666] leading-relaxed font-serif italic max-w-[680px]">
              “This direct requirement gave birth to <strong className="font-medium not-italic text-[#000000]">NEPeD Energy Division</strong> in 2007, which has now installed 108 indigenous hydrogers across remote mountain rivers.”
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <ArrowPillButton to={NEPED_ENERGY_PATHS.home} arrow="up-right">Explore NEPeD Energy Portal</ArrowPillButton>
              <ArrowPillButton onClick={openContact} variant="outline" arrow="mail">Contact Us</ArrowPillButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

/** True below the sm breakpoint (640px); updates on resize. */
function useIsSmallScreen() {
  const query = "(max-width: 639px)";
  const [small, setSmall] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setSmall(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return small;
}
