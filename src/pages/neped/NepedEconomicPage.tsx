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
  ArrowRight,
} from "lucide-react";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
// import { HoverRevealList } from "@/components/shared/HoverRevealList"; // used by the hidden section 1A
import { /* NEPED_SECTION_3, NEPED_PHASES_SECTION, */ NEPED_MILESTONES_SECTION } from "@/data/neped/nepedHomeSections";
// import { NEPED_PHASES } from "@/data/neped/nepedPhasesData"; // used by the hidden section 1C
// import { WideCardCarousel } from "@/components/shared/WideCardCarousel"; // used by the hidden section 1C
// import { PhaseBlogCard } from "@/components/neped/PhaseBlogCard"; // used by the hidden section 1C
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
import { BorderGlow } from "@/components/ui/border-glow";
import { DotGrid } from "@/components/ui/dot-grid";
import { useOpenContact } from "@/lib/contact";

const H2 = "text-[30px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.12]";
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
  colors: ["#1E6F4C", "#E8A33D", "#12432E"] as [string, string, string],
};
// Aims cards: one uniform style from the site palette (Mist Wash card, Forest Green icon)
const AIM_CARD_STYLE = {
  background: "linear-gradient(145deg, #f3f6f3 0%, #dcebe1 100%)",
  folderColor: "#ffffff",
  borderColor: "#dbe5de",
  textColor: "#1a2e23",
  subTextColor: "#5b6660",
  iconColor: "#1e6f4c",
};
// Gallery preview: every photo in public/gallery, titled "<State> 01, 02…"; each opens the Gallery page
const GALLERY_WHEEL_ITEMS: WorksWheelItem[] = GALLERY_ALBUMS_DATA.flatMap((album) =>
  album.photos.map((photo, i) => ({
    title: `${album.title} ${String(i + 1).padStart(2, "0")}`,
    image: photo.src,
    href: SHARED_PATHS.gallery,
  })),
);
const GLASS_ROW = "rounded-[12px] bg-white/70 border border-[#12432E]/10 p-4";

export function NepedEconomicPage() {
  const isSmallScreen = useIsSmallScreen();
  const openContact = useOpenContact();

  useEffect(() => {
    document.title = "NEPED — Heritage & Economic Development (1994–Present) • Master Archives";
  }, []);


  const allProjects = loadAllProjects();

  return (
    <div className="theme-neped w-full space-y-20 sm:space-y-28 pb-4">
      {/* 1. HERO — split layout (after cleanenergycouncil.org.au): dark panel with the headline, photo on the right.
          Phones / tablets: text first, photo below. Text verbatim from the previous hero. */}
      <section className="grid grid-cols-1 lg:grid-cols-12 bg-(--brand-surface) lg:min-h-[calc(100svh-84px)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-6 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] lg:pr-12 xl:pr-20 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:py-16 xl:py-20"
        >
          <span className="text-[12px] sm:text-[13px] tracking-[0.04em] text-[#ffffff]/70">
            Foundational Heritage • Govt. of Nagaland (Est. 1994)
          </span>
          <h1 className="mt-5 sm:mt-6 max-w-[760px] font-serif font-normal text-[40px] sm:text-[58px] lg:text-[54px] xl:text-[68px] 2xl:text-[80px] leading-[1.02] tracking-[-0.5px] text-[#ffffff] text-balance">
            Nagaland Empowerment of People through Economic Development
          </h1>
          <p className="mt-6 sm:mt-8 max-w-[620px] text-[17px] sm:text-[19px] xl:text-[21px] leading-[1.45] text-[#ffffff]/90">
            NEPED — 30+ years of pioneering community agroforestry, shifting cultivation transformation, women's land equity, and biodiversity conservation under the NEPeD umbrella.
          </p>

          <div className="mt-9 sm:mt-10 xl:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <Link to={NEPED_PATHS.structure} className="group inline-flex items-center gap-5 w-fit">
              <span className="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24 shrink-0 rounded-full bg-(--brand-accent-on-dark) text-(--brand-surface) flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 ease-in-out group-hover:translate-x-1" strokeWidth={1.5} />
              </span>
              <span className="text-[16px] sm:text-[18px] text-[#ffffff]">Organisational Structure</span>
            </Link>
            <Link
              to={NEPED_PATHS.projects}
              className="w-fit text-[15px] sm:text-[16px] text-[#ffffff]/85 underline decoration-white/35 underline-offset-[6px] hover:text-[#ffffff] hover:decoration-white transition-colors duration-300 ease-in-out"
            >
              {allProjects.length} Official Projects Archive
            </Link>
          </div>

          {/* Society registration details */}
          <div className="mt-12 sm:mt-12 xl:mt-14 pt-6 border-t border-white/15 flex items-start sm:items-center gap-3.5 max-w-[640px]">
            <div className="h-11 w-11 rounded-[10px] bg-[#ffffff] p-1 flex items-center justify-center shrink-0">
              <img src="/NEPED Logo.jpg.webp" alt="NEPED Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="min-w-0 space-y-0.5">
              <span className="block text-[14px] font-medium text-[#ffffff]">NEPED Society (Govt. of Nagaland)</span>
              <span className="block text-[11.5px] font-mono text-[#ffffff]/70 leading-snug">
                Regd. NO. H/RS-4238 (19-04-2005) • Regd. NO. HOME/SRC-6751 (07-07-2014)
              </span>
              <span className="block text-[12px] text-[#ffffff]/65 leading-snug">
                Phase-I: <em>Nagaland Environment Protection and Economic Development through People's Action</em> (CIDA / ICEF)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Photo: Dzukou Valley. Resized WebP copies; the browser picks the size for the screen */}
        <div className="lg:col-span-5 relative overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto">
          <motion.img
            src="/dzukou-valley-1400.webp"
            srcSet="/dzukou-valley-800.webp 800w, /dzukou-valley-1400.webp 1400w, /dzukou-valley-2200.webp 2200w"
            sizes="(min-width: 1024px) 42vw, 100vw"
            alt="Dzukou Valley, Nagaland"
            fetchPriority="high"
            decoding="async"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 h-full w-full object-cover object-[28%_50%] lg:object-[22%_50%]"
          />
        </div>
      </section>

      {/* PROJECTS ARCHIVE — placed right after the hero */}
      <motion.section {...fadeUpOnView} id="projects" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="pb-8 sm:pb-10 border-b border-[#e5e4e4] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[760px] space-y-5">
            <SectionPill>Official Project Archive</SectionPill>
            <h2 className={H2}>Projects Implemented Under NEPED</h2>
            <p className="text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">
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

      {/* 1A. SECTION #3 (list + hover image) — hidden for now; placeholder lorem ipsum content (see nepedHomeSections.ts)
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[640px] space-y-5">
            <span className="inline-flex items-center px-4 py-2 rounded-[1584px] border border-(--brand-accent)/40 text-[13px] text-(--brand-accent)">
              {NEPED_SECTION_3.label}
            </span>
            <h2 className={H2}>{NEPED_SECTION_3.heading}</h2>
          </div>
          <p className="max-w-[460px] text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">{NEPED_SECTION_3.intro}</p>
        </div>
        <HoverRevealList items={NEPED_SECTION_3.items} />
      </motion.section>
      */}

      {/* 1B. ABOUT NEPED SOCIETY — ORIGIN, CHARTER & GOVERNANCE CULTURE (about text verbatim from NepedBige/bigeneped.txt) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="space-y-5">
          <SectionPill>Origin & Charter</SectionPill>
          <h2 className={H2}>About the NEPED Society</h2>
          <p className="text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">
            Nagaland Empowerment of People through Economic Development (NEPED) was formed by the Govt. of Nagaland in 1994 as an autonomous Government registered society vide Regd.NO.H/RS-4238 Dated 19-04-2005 and Regd.NO.HOME/SRC-6751 Dated 07-07-2014. It was established to bridge developmental gaps in various sectors for economic development and empowerment with a team of multi-disciplinary government employees known as Project Operations Unit (POU) with the aim to carry out studies across Nagaland and identify major issues and to encourage and spread new ideas for sustainable development of the state. The overall aim was envisaged at building a strong resilience towards the emerging Climate Change issues.
          </p>
        </div>

        {/* Team members on a rotating ring, with a link to the About Us page */}
        <div className="mt-10 sm:mt-12 rounded-[24px] bg-[#F3F6F3] overflow-hidden">
          <HaloReel
            items={NEPED_PRESENT_TEAM.map((member) => ({ src: member.image, alt: member.name, caption: member.name }))}
            aria-label="NEPED team members"
            cardWidth={isSmallScreen ? 96 : 110}
            cardHeight={isSmallScreen ? 96 : 110}
            radiusXRatio={isSmallScreen ? 0.3 : 0.45}
            minScale={0.4}
            radiusYRatio={0.38}
            // Few slots keep the photos spaced out (on phones, room for each name under its photo)
            maxCards={isSmallScreen ? NEPED_PRESENT_TEAM.length : 10}
            holdDuration={1400}
            stepDuration={700}
            cardClassName="rounded-full ring-4 ring-[#ffffff]"
            imageClassName="scale-[1.15] object-top"
            // Phones: name under each photo. Desktop: the front member's name inside the ring
            captionPlacement={isSmallScreen ? "card" : "ring"}
            captionClassName="rounded-full bg-[#ffffff] px-2.5 py-1 text-[11px] font-medium leading-tight text-[#23452a] shadow-[0_4px_14px_rgba(14,36,25,0.12)] whitespace-nowrap"
            ringCaptionClassName="max-w-[340px] text-[28px] lg:text-[34px] font-light tracking-[-0.8px] leading-[1.15] text-[#23452a]"
            interactiveCenterLabel
            centerLabel={
              <div className="flex flex-col items-center gap-5 text-center">
                <span className="text-[30px] sm:text-[52px] font-light tracking-[-1.2px] leading-none text-[#1A2E23] whitespace-nowrap">About Us</span>
                {/* Verbatim from "NEPED PDF.pdf" (About Us); hidden on phones, where the space beside the ring is too narrow */}
                <p className="hidden sm:block max-w-[400px] text-[15px] text-[#5B6660] leading-relaxed">
                  NEPED is made up of a team of multi-disciplinary government officers drawn from various government departments, who are called the Project Operations Unit (POU) Members, formed by the Government of Nagaland, with full autonomy.
                </p>
                <BookDemoButton to={NEPED_PATHS.about} variant="emerald">Read more</BookDemoButton>
              </div>
            }
            className="h-[460px] sm:h-[600px]"
          />
        </div>
      </motion.section>

      {/* 1C. NEPED PHASES carousel — hidden for now; the Official Project Archive section is used instead
      <motion.section {...fadeUpOnView}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[640px] space-y-5">
            <SectionPill>{NEPED_PHASES_SECTION.label}</SectionPill>
            <h2 className={H2}>{NEPED_PHASES_SECTION.heading}</h2>
          </div>
          <p className="max-w-[460px] text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">{NEPED_PHASES_SECTION.intro}</p>
        </div>
        <WideCardCarousel label="NEPED phases">
          {NEPED_PHASES.map((phase) => (
            <PhaseBlogCard key={phase.slug} phase={phase} />
          ))}
        </WideCardCarousel>
      </motion.section>
      */}

      {/* 1D. SUCCESS STORIES — staggered cards (inspo: "Why Axure"); text verbatim from bigeneped.txt */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-[36px] sm:text-[56px] font-light text-[#1A2E23] tracking-[-1.4px] leading-[1.05] mb-10 sm:mb-14">
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
              { value: "30", label: "plots of lands", text: "The women, for the first time in the history of Nagaland, had purchased 30 plots of lands by breaking the barriers of the traditional laws." },
              { value: "1.5 lac", label: "trees per year", text: "Another innovation, designed and developed by NEPED is ‘Foddorizer’ which is helping rural farmers in improving feed and feeding practices of pig and reduction in firewood consumption to a tune of 1.5 lac trees per year." },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[16px] p-7 flex flex-col gap-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-[#ffffff] text-[#1A2E23]"
              >
                <span className="text-[12px] uppercase font-mono text-[#5B6660]">{stat.label}</span>
                <div className="space-y-3">
                  <span className="text-[44px] sm:text-[52px] font-light tracking-[-1.2px] leading-none block">{stat.value}</span>
                  <p className="text-[13.5px] leading-relaxed text-[#5B6660]">{stat.text}</p>
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
              <h3 className="text-[28px] sm:text-[34px] font-light text-[#12432E] tracking-[-0.72px] leading-tight">
                The 'Foddorizer' & Livestock Service Providers (LSPs)
              </h3>
              <p className="text-[15px] text-[#3f5a4f] leading-relaxed">
                Assisted 4,200 resource-poor families with breeding stock, fattening stock, and low-cost scientific pig sties. To solve feed boiling and firewood depletion, NEPED designed and fabricated the <strong className="font-medium text-[#12432E]">‘Foddorizer’</strong>:
              </p>
              <div className="space-y-3 text-[14px] text-[#3f5a4f]">
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <Check size={16} className="text-(--brand-accent) shrink-0 mt-0.5" />
                  <span><strong className="font-medium text-[#12432E]">1.5 Lakh Trees Saved Annually:</strong> Drastically cuts domestic firewood consumption for boiling animal feed.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <Check size={16} className="text-(--brand-accent) shrink-0 mt-0.5" />
                  <span><strong className="font-medium text-[#12432E]">LSP Veterinary Model:</strong> Village youth trained as Livestock Service Providers contained Classical Swine Fever (CSF), preventing millions in annual losses.</span>
                </div>
              </div>
            </div>
            <div className="relative pt-6 border-t border-[#12432E]/10 mt-8 text-[11px] font-mono text-[#3f5a4f]/70">
              Supported by Navajbhai Ratan Tata Trust (NRTT) & State Plan
            </div>
          </div>
          </BorderGlow>

          {/* SACON & Community Conservation Areas */}
          <BorderGlow {...INNOVATION_GLOW} background={"white"} className="h-full">
          <div className="relative p-7 sm:p-10 flex flex-1 flex-col justify-between">
            <div className="relative space-y-5">
              <SectionPill>Community Conservation & SACON</SectionPill>
              <h3 className="text-[28px] sm:text-[34px] font-light text-[#12432E] tracking-[-0.72px] leading-tight">
                Community Conservation Areas (CCAs) & Blyth's Tragopan
              </h3>
              <p className="text-[15px] text-[#3f5a4f] leading-relaxed">
                In collaboration with the <strong className="font-medium text-[#12432E]">Salim Ali Center for Ornithology & Natural History (SACON)</strong> and Sir Dorabji Tata Trust, NEPED guided Village Councils in passing resolutions to restrict hunting, fishing, and logging:
              </p>
              <div className="space-y-3 text-[14px] text-[#3f5a4f]">
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent) shrink-0">1.</span>
                  <span>Developing legally protected <strong className="font-medium text-[#12432E]">People's Biodiversity Registers (PBRs)</strong> and resource maps.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent) shrink-0">2.</span>
                  <span>Documentation of <strong className="font-medium text-[#12432E]">Indigenous Ecological Knowledge (IEK)</strong>.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent) shrink-0">3.</span>
                  <span>Using <strong className="font-medium text-[#12432E]">Blyth’s Tragopan</strong> (State Bird of Nagaland) as the flagship conservation umbrella species.</span>
                </div>
              </div>
            </div>
            <div className="relative pt-6 border-t border-[#12432E]/10 mt-8 text-[11px] font-mono text-[#3f5a4f]/70">
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
            <h2 className="text-[30px] sm:text-[36px] font-light text-[#1A2E23] tracking-[-0.8px] leading-[1.12]">
              Core Aims & Objectives of NEPED
            </h2>
            <p className="text-[15px] text-[#5B6660] leading-relaxed">
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
              card={{ number: String(idx + 1).padStart(2, "0"), title: aim.title, description: aim.text, icon: aim.icon, ...AIM_CARD_STYLE }}
            />
          ))}
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
            <h2 className="text-[30px] sm:text-[48px] font-light text-[#1A2E23] tracking-[-1.2px] leading-[1.1]">
              From NEPED Agroforestry to NEPeD Clean Energy
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#1A2E23] leading-relaxed max-w-[680px]">
              As agro-enterprises expanded across Nagaland, the emerging need was clean, affordable energy to power post-harvest processing, mechanical grain mills, and cold storage to enable Naga farmers to compete globally.
            </p>
            <p className="text-[15px] text-[#5B6660] leading-relaxed font-serif italic max-w-[680px]">
              “This direct requirement gave birth to <strong className="font-medium not-italic text-[#1A2E23]">NEPeD Energy Division</strong> in 2007, which has now installed 108 indigenous hydrogers across remote mountain rivers.”
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
