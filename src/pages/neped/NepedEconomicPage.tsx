import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wallet,
  Briefcase,
  GraduationCap,
  Store,
  PiggyBank,
  RefreshCw,
  Leaf,
  ArrowRight,
  Zap,
  FlaskConical,
} from "lucide-react";
import { SectionPill } from "@/components/shared/SectionPill";
// import { HoverRevealList } from "@/components/shared/HoverRevealList"; // used by the hidden section 1A
import { /* NEPED_SECTION_3, NEPED_PHASES_SECTION, */ NEPED_MILESTONES_SECTION } from "@/data/neped/nepedHomeSections";
// import { NEPED_PHASES } from "@/data/neped/nepedPhasesData"; // used by the hidden section 1C
// import { WideCardCarousel } from "@/components/shared/WideCardCarousel"; // used by the hidden section 1C
// import { PhaseBlogCard } from "@/components/neped/PhaseBlogCard"; // used by the hidden section 1C
import { HaloReel } from "@/components/ui/halo-reel";
import { NEPED_PRESENT_TEAM } from "@/data/neped/nepedTeamData";
import { ProjectTile } from "@/components/neped/ProjectTile";
import { FolderCard } from "@/components/ui/folder-cards";
import { BookDemoButton } from "@/components/ui/book-demo-button";
import { Marquee } from "@/components/ui/marquee";
import { GALLERY_ALBUMS_DATA } from "@/data/shared/galleryAlbumsData";
import { loadAllProjects } from "@/lib/contentLoader";
import { fadeUpOnView } from "@/lib/motionVariants";
import { NEPED_ENERGY_PATHS, NEPED_PATHS, SHARED_PATHS } from "@/routes/paths";
import { PartnerBand } from "@/components/shared/PartnerBand";

const H2 = "text-[30px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.12]";
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
const GALLERY_MARQUEE_ITEMS = GALLERY_ALBUMS_DATA.flatMap((album) =>
  album.photos.map((photo, i) => ({
    title: `${album.title} ${String(i + 1).padStart(2, "0")}`,
    image: photo.src,
  })),
);
// Homepage stat strip and themed grid — text verbatim from the homepage copy supplied by the NEPED team
const HOME_STATS = [
  { value: "1994", label: "Established by the Govt. of Nagaland" },
  { value: "7.8M", label: "Economic trees planted" },
  { value: "108", label: "Hydrogers installed (3 kW pico)" },
  { value: "854", label: "Villages reached in NEPED-I alone" },
];
const HOME_THEMES = [
  { title: "Livelihoods & Enterprise", text: "helping Naga farmers move from subsidy to self-reliance through cash crops, micro-credit and rural enterprise.", icon: Wallet, to: NEPED_PATHS.projects },
  { title: "Land, Water & Biodiversity", text: "agro-forestry on jhum land, watershed restoration, and community-led conservation.", icon: Leaf, to: NEPED_PATHS.projects },
  { title: "Energy", text: "'Made in Nagaland' Hydrogers bringing 24×7 clean power to off-grid and border villages.", icon: Zap, to: NEPED_ENERGY_PATHS.home },
  { title: "CERES", text: "our Centre of Excellence in Dimapur, where renewable technology is researched and built.", icon: FlaskConical, to: NEPED_ENERGY_PATHS.technology },
];

export function NepedEconomicPage() {
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    document.title = "NEPED — Heritage & Economic Development (1994–Present) • Master Archives";
  }, []);


  const allProjects = loadAllProjects();

  return (
    <div className="theme-neped w-full space-y-20 sm:space-y-28 pb-4">
      {/* 1. HERO — split layout (after cleanenergycouncil.org.au): dark panel with the headline, photo on the right.
          Phones / tablets: text first, photo below. Text verbatim from the homepage copy supplied by the NEPED team. */}
      <section className="grid grid-cols-1 lg:grid-cols-12 bg-(--brand-surface) lg:min-h-[calc(100svh-84px)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-6 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] lg:pr-12 xl:pr-20 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:py-16 xl:py-20"
        >
          <h1 className="max-w-[760px] font-serif font-normal text-[40px] sm:text-[58px] lg:text-[54px] xl:text-[68px] 2xl:text-[80px] leading-[1.02] tracking-[-0.5px] text-[#ffffff] text-balance">
            Nagaland's communities hold the solutions — we help them build.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-[620px] text-[17px] sm:text-[19px] xl:text-[21px] leading-[1.45] text-[#ffffff]/90">
            Since 1994, NEPED has worked alongside Naga communities to build livelihoods, protect biodiversity, and bring clean, home-grown energy to the villages that need it most.
          </p>

          <a href="#what-we-do" className="mt-9 sm:mt-10 xl:mt-12 group inline-flex items-center gap-5 w-fit">
            <span className="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24 shrink-0 rounded-full bg-(--brand-accent-on-dark) text-(--brand-surface) flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
              <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 ease-in-out group-hover:translate-x-1" strokeWidth={1.5} />
            </span>
            <span className="text-[16px] sm:text-[18px] text-[#ffffff]">Discover our work</span>
          </a>
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

      {/* HOMEPAGE STORY — mission line, stat strip, what we do, featured case study, across borders.
          All text verbatim from the homepage copy supplied by the NEPED team ("NEPeD Hydrogers" per the team). */}

      {/* MISSION LINE */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className="max-w-[980px] font-serif text-[28px] sm:text-[40px] lg:text-[46px] leading-[1.18] tracking-[-0.3px] text-[#1A2E23] text-balance">
          We are an autonomous Government of Nagaland society with one purpose: to bridge the state's development gaps through ideas, technology and partnership that put communities in charge of their own future.
        </p>
      </motion.section>

      {/* STAT STRIP — headline numbers */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#dbe5de]">
          {HOME_STATS.map((stat, i) => (
            <div
              key={stat.value}
              className={`pt-7 pb-2 pr-4 sm:pr-8 ${i % 2 === 1 ? "pl-4 sm:pl-8 border-l border-[#dbe5de]" : ""} ${i >= 2 ? "mt-8 lg:mt-0" : ""} ${i === 2 ? "lg:pl-8 lg:border-l" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-[44px] sm:text-[60px] font-light leading-none tracking-[-1.5px] text-[#1E6F4C]">{stat.value}</dd>
              <dd className="mt-3 text-[14px] sm:text-[15px] leading-snug text-[#5B6660]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </motion.section>

      {/* WHAT WE DO — themed grid */}
      <motion.section {...fadeUpOnView} id="what-we-do" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className={H2}>One society, many kinds of work.</h2>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HOME_THEMES.map(({ title, text, icon: Icon, to }) => (
            <Link
              key={title}
              to={to}
              className="group bg-[#F3F6F3] p-6 sm:p-7 flex flex-col gap-5 border border-transparent hover:border-[#dbe5de] transition-colors duration-300 ease-in-out"
            >
              <span className="h-11 w-11 rounded-full bg-[#1E6F4C] text-[#ffffff] flex items-center justify-center">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="text-[20px] font-normal tracking-[-0.3px] text-[#1A2E23]">{title}</h3>
              <p className="text-[15px] leading-relaxed text-[#5B6660] flex-1">{text}</p>
              <ArrowRight size={18} strokeWidth={1.5} className="text-[#1E6F4C] transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </motion.section>

      {/* FEATURED CASE STUDY — Kingjung */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[#F3F6F3]">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
            <img
              src="/20 Kingjung Village Energy Committee (2).webp"
              alt="Kingjung Village Energy Committee"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-7 sm:p-10 lg:p-14 flex flex-col justify-center gap-6">
            <h2 className="font-serif text-[32px] sm:text-[44px] leading-[1.08] tracking-[-0.3px] text-[#1A2E23] text-balance">
              Kingjung: a village powered by its own river
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#5B6660]">
              A community-managed 3 kW Hydroger delivers 24×7 off-grid power to Kingjung, Thonoknyu — run by a seven-member village energy committee and driving mills, blacksmithing and daily life.
            </p>
            <Link to={NEPED_ENERGY_PATHS.caseStudy("kingjung")} className="group inline-flex items-center gap-4 w-fit">
              <span className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full bg-[#1E6F4C] text-[#ffffff] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                <ArrowRight className="h-5 w-5 transition-transform duration-500 ease-in-out group-hover:translate-x-0.5" strokeWidth={1.5} />
              </span>
              <span className="text-[16px] text-[#1A2E23]">Read the Kingjung story</span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ACROSS BORDERS BAND */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className="max-w-[1000px] text-[22px] sm:text-[30px] lg:text-[34px] font-light leading-[1.3] tracking-[-0.5px] text-[#5B6660]">
          <span className="text-[#1A2E23]">Made in Nagaland, working beyond it.</span> NEPeD Hydrogers now run in Arunachal Pradesh, Meghalaya, Sikkim and as far as Ladakh — and Meghalaya has ordered 100 units.
        </p>
      </motion.section>

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
            <span className="inline-flex items-center px-4 py-2 border border-(--brand-accent)/40 text-[13px] text-(--brand-accent)">
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
        <div className="mt-10 sm:mt-12 bg-[#F3F6F3] overflow-hidden">
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
            captionClassName=" bg-[#ffffff] px-2.5 py-1 text-[11px] font-medium leading-tight text-[#23452a] shadow-[0_4px_14px_rgba(14,36,25,0.12)] whitespace-nowrap"
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
                className=" p-7 flex flex-col gap-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-[#ffffff] text-[#1A2E23]"
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

      {/* 8. GALLERY PREVIEW — photo marquee (pauses on hover); every photo opens the Gallery page */}
      <motion.section {...fadeUpOnView}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className={H2}>Gallery</h2>
          <div className="self-start sm:self-auto">
            <BookDemoButton to={SHARED_PATHS.gallery} variant="emerald">Click to see more</BookDemoButton>
          </div>
        </div>
        <Marquee duration={60} pauseOnHover fadeAmount={6}>
          {GALLERY_MARQUEE_ITEMS.map((item) => (
            <Link
              key={item.image}
              to={SHARED_PATHS.gallery}
              className="group mx-2 sm:mx-2.5 block w-[240px] sm:w-[320px] shrink-0"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F3F6F3]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
                />
              </div>
              <p className="mt-3 text-[14px] text-[#5B6660] transition-colors duration-300 group-hover:text-[#1A2E23]">{item.title}</p>
            </Link>
          ))}
        </Marquee>
      </motion.section>

      {/* PARTNER CTA — closing band (shared with the About page) */}
      <PartnerBand />
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
