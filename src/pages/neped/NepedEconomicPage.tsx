import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wallet,
  Leaf,
  ArrowRight,
  Zap,
  FlaskConical,
} from "lucide-react";
// import { SectionPill } from "@/components/shared/SectionPill"; // used by the hidden section 1C
import { MobileShowMore } from "@/components/shared/MobileShowMore";
// import { HoverRevealList } from "@/components/shared/HoverRevealList"; // used by the hidden section 1A
// import { NEPED_SECTION_3, NEPED_PHASES_SECTION } from "@/data/neped/nepedHomeSections"; // used by the hidden sections 1A / 1C
// import { NEPED_PHASES } from "@/data/neped/nepedPhasesData"; // used by the hidden section 1C
// import { WideCardCarousel } from "@/components/shared/WideCardCarousel"; // used by the hidden section 1C
// import { PhaseBlogCard } from "@/components/neped/PhaseBlogCard"; // used by the hidden section 1C
import { HaloReel } from "@/components/ui/halo-reel";
import { NEPED_PRESENT_TEAM } from "@/data/neped/nepedTeamData";
import { FunderStrip, ProjectTimeline } from "@/components/neped/ProjectTimeline";
import { fadeUpOnView } from "@/lib/motionVariants";
import { NEPED_ENERGY_PATHS, NEPED_PATHS } from "@/routes/paths";
import { PartnerBand } from "@/components/shared/PartnerBand";
import { useOpenContact } from "@/lib/contact";

// Small uppercase label above each homepage section
const EYEBROW = "text-[13px] font-semibold uppercase tracking-[0.14em] text-[#12432E]";
const H2 = "text-[30px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.12]";
// CERES products on the homepage (text as in the supplied design)
const CERES_PRODUCTS = [
  { name: "Hydroger", text: "3 kW pico-hydro generator, certified at IIT Roorkee.", image: "/Hydroger (Impulse).jpeg" },
  { name: "Electronic Load Controller", text: "Keeps the supply stable as demand rises and falls.", image: "/elc-device.webp" },
];
// The seven aims, shortened (text as in the supplied design)
const AIMS = [
  { title: "Raise rural incomes", text: "Diversified agro-forestry and farm enterprise." },
  { title: "Create self-employment", text: "Youth and village entrepreneurs in agri-business." },
  { title: "Build entrepreneur skills", text: "Training, packaging, quality and scaling." },
  { title: "Link to markets", text: "Naga produce and crafts to national buyers." },
  { title: "Encourage thrift savings", text: "Revolving funds for farmers and SHGs." },
  { title: "Shift mindsets", text: "Villages investing in their own assets." },
  { title: "Conserve biodiversity", text: "Every activity protects forests and wildlife." },
];
// Homepage stat strip and themed grid — text verbatim from the homepage copy supplied by the NEPED team
const HOME_STATS = [
  { value: "1995", label: "Established by the Govt. of Nagaland" },
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
  const openContact = useOpenContact();

  useEffect(() => {
    document.title = "NEPED — Heritage & Economic Development (1995–Present) • Master Archives";
  }, []);


  return (
    <div className="theme-neped w-full space-y-20 sm:space-y-28 pb-4">
      {/* 1. HERO — split layout (after cleanenergycouncil.org.au): headline panel on the left, photo on the right.
          The photo runs behind the whole hero; the left panel is frosted glass over it.
          Phones / tablets: text first, photo below. Text verbatim from the homepage copy supplied by the NEPED team. */}
      <section className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-(--brand-surface) lg:min-h-[calc(100svh-84px)]">
        {/* Photo: Dzukou Valley. Resized WebP copies; the browser picks the size for the screen */}
        <motion.img
          src="/dzukou-valley-1400.webp"
          srcSet="/dzukou-valley-800.webp 800w, /dzukou-valley-1400.webp 1400w, /dzukou-valley-2200.webp 2200w"
          sizes="100vw"
          alt="Dzukou Valley, Nagaland"
          fetchPriority="high"
          decoding="async"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 h-full w-full object-cover object-[60%_50%]"
        />

        {/* Left panel: frosted glass over the photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="relative lg:col-span-6 flex flex-col justify-center items-center overflow-hidden bg-[#12432E]/25 backdrop-blur-[6px] backdrop-saturate-125 lg:border-r lg:border-white/20 lg:shadow-[inset_-1px_0_0_rgba(255,255,255,0.12),24px_0_60px_rgba(5,25,15,0.25)] px-4 sm:px-6 lg:px-12 xl:px-16 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:py-16 xl:py-20"
        >
          {/* Soft sheen across the glass */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          {/* Text block centred in the panel (text itself stays left-aligned) */}
          <div className="relative w-full max-w-[760px]">
            <h1 className="max-w-[760px] font-serif font-normal text-[40px] sm:text-[58px] lg:text-[54px] xl:text-[68px] 2xl:text-[80px] leading-[1.02] tracking-[-0.5px] text-[#ffffff] text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]">
              Nagaland's communities hold the solutions — we help them build.
            </h1>
            <p className="mt-6 sm:mt-8 max-w-[620px] text-[17px] sm:text-[19px] xl:text-[21px] leading-[1.45] text-[#ffffff] [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              Since 1995, NEPED has worked alongside Naga communities to build livelihoods, protect biodiversity, and bring clean, home-grown energy to the villages that need it most.
            </p>

            <div className="mt-9 sm:mt-10 xl:mt-12 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#what-we-do"
                className="inline-flex min-h-12 items-center rounded-md bg-(--brand-accent-on-dark) px-6 text-[15px] sm:text-[16px] font-semibold text-(--brand-surface) hover:bg-[#f0b95e] transition-colors duration-300 ease-in-out"
              >
                Discover our work
              </a>
              <button
                type="button"
                onClick={openContact}
                className="inline-flex min-h-12 items-center rounded-md border border-white/70 bg-white/10 px-6 text-[15px] sm:text-[16px] font-semibold text-[#ffffff] hover:bg-[#ffffff] hover:text-(--brand-surface) transition-colors duration-300 ease-in-out cursor-pointer"
              >
                Partner with us
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right side: the photo, unblurred (gives the hero its height on phones / tablets) */}
        <div aria-hidden className="relative lg:col-span-6 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto" />
      </section>

      {/* HOMEPAGE STORY — mission line, stat strip, what we do, featured case study, across borders.
          All text verbatim from the homepage copy supplied by the NEPED team ("NEPeD Hydrogers" per the team). */}

      {/* MISSION LINE */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className={`mb-5 sm:mb-6 ${EYEBROW}`}>Who we are</p>
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
        <p className={`mb-5 sm:mb-6 ${EYEBROW}`}>What we do</p>
        <h2 className={H2}>One society, many kinds of work.</h2>
        <MobileShowMore
          initialCount={3}
          showLabel="Show all work areas"
          hideLabel="Show fewer work areas"
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 sm:auto-rows-fr"
        >
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
        </MobileShowMore>
      </motion.section>

      {/* FEATURED CASE STUDY — Kingjung */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className={`mb-5 sm:mb-6 ${EYEBROW}`}>Stories from the field</p>
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

      {/* CERES PRODUCTS — the two products built at CERES, Dimapur */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className={`mb-5 sm:mb-6 ${EYEBROW}`}>CERES · Made in Nagaland</p>
            <h2 className="font-serif text-[32px] sm:text-[44px] leading-[1.08] tracking-[-0.3px] text-[#1A2E23] text-balance">
              Renewable technology, built in Dimapur
            </h2>
          </div>
          <Link
            to={NEPED_ENERGY_PATHS.technology}
            className="shrink-0 text-[16px] font-semibold text-[#1E6F4C] underline underline-offset-4 hover:text-[#12432E] transition-colors duration-300"
          >
            See all products →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CERES_PRODUCTS.map((p) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-md border border-[#dbe5de] bg-[#ffffff]">
              <div className="h-[220px] sm:h-[260px] bg-[#F3F6F3]">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <h3 className="text-[20px] font-semibold text-[#1A2E23]">{p.name}</h3>
                <p className="text-[15px] leading-relaxed text-[#5B6660] flex-1">{p.text}</p>
                <button
                  type="button"
                  onClick={openContact}
                  className="mt-2 w-fit text-[15px] font-semibold text-[#1E6F4C] underline underline-offset-4 hover:text-[#12432E] transition-colors duration-300 cursor-pointer"
                >
                  Enquire →
                </button>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* ACROSS BORDERS BAND */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <p className={`mb-5 sm:mb-6 ${EYEBROW}`}>Beyond Nagaland</p>
        <p className="max-w-[1000px] text-[22px] sm:text-[30px] lg:text-[34px] font-light leading-[1.3] tracking-[-0.5px] text-[#5B6660]">
          <span className="text-[#1A2E23]">Made in Nagaland, working beyond it.</span> NEPeD Hydrogers now run in Arunachal Pradesh, Meghalaya, Sikkim and as far as Ladakh — and Meghalaya has ordered 100 units.
        </p>
      </motion.section>

      {/* PROJECTS — timeline of every project, oldest first, with the funder strip below */}
      <motion.section {...fadeUpOnView} id="projects" className="scroll-mt-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pb-16 sm:pb-20">
          <ProjectTimeline />
        </div>
        <FunderStrip />
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
          <p className={EYEBROW}>Origin & Charter</p>
          <h2 className={H2}>About the NEPED Society</h2>
          <p className="text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">
            Nagaland Empowerment of People through Economic Development (NEPED) was formed by the Govt. of Nagaland in 1995 as an autonomous Government registered society vide Regd.NO.H/RS-4238 Dated 19-04-2005 and Regd.NO.HOME/SRC-6751 Dated 07-07-2014. It was established to bridge developmental gaps in various sectors for economic development and empowerment with a team of multi-disciplinary government employees known as Project Operations Unit (POU) with the aim to carry out studies across Nagaland and identify major issues and to encourage and spread new ideas for sustainable development of the state. The overall aim was envisaged at building a strong resilience towards the emerging Climate Change issues.
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
                <Link
                  to={NEPED_PATHS.about}
                  className="inline-flex min-h-12 items-center rounded-md border border-[#12432E] px-6 text-[15px] font-semibold text-[#12432E] hover:bg-[#12432E] hover:text-[#ffffff] transition-colors duration-300 ease-in-out"
                >
                  Read more
                </Link>
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

      {/* 5. AIMS & OBJECTIVES — heading on the left, the seven aims in a compact numbered list */}
      <motion.section {...fadeUpOnView} id="aims" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4 space-y-5">
          <p className={EYEBROW}>What we aim to do</p>
          <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.12] tracking-[-0.3px] text-[#1A2E23] text-balance">
            Seven aims, one shift: from subsidy to self-reliance
          </h2>
          <p className="text-[15px] text-[#5B6660] leading-relaxed">Every NEPED project is measured against these seven aims.</p>
        </div>
        <ol className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {AIMS.map((aim, i) => (
            <li key={aim.title} className="flex gap-4 border-t border-[#e5e4e4] py-5">
              <span className="w-8 shrink-0 font-serif text-[22px] leading-none text-[#8A5A12]">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[15px] font-semibold text-[#1A2E23]">{aim.title}</h3>
                <p className="mt-1 text-[13.5px] leading-snug text-[#5B6660]">{aim.text}</p>
              </div>
            </li>
          ))}
        </ol>
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
