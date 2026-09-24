import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
  TextArrowButton,
  FilledDarkButton,
  NumberedItem,
  PillBadge,
  LoraEditorialBlock,
} from "@/components/ui/AkerPrimitives";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import DiagonalMarqueeCarousel from "@/components/ui/great-ui-diagonal-marquee-carousel";
import { NEPED_ENERGY_PATHS, NEPED_PATHS, SHARED_PATHS } from "@/routes/paths";

export function HomePage() {
  useEffect(() => {
    document.title = "NEPED — Nagaland Empowerment of People through Economic Development";
  }, []);

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* 1. FULL-BLEED HERO SECTION (Elevated Brand Identity & Viewport Fit) */}
      <section className="relative w-full min-h-[92vh] sm:min-h-screen bg-[#070707] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden">
        {/* Full-bleed background photo with multi-stop vignette gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/mountain-windmills.png"
            alt="Nagaland Mountain Landscape"
            className="w-full h-full object-cover opacity-55 filter brightness-[0.72] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-[#070707]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/70 via-transparent to-[#070707]/60" />
        </div>

        {/* Main Hero Content Grid (Vertically centered & balanced) */}
        <div className="relative z-10 pt-16 sm:pt-20 lg:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Column: Brand Identity, Monumental Title, Expansion & Narrative */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
            {/* Authority Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] border border-white/18 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#b75928] animate-pulse" />
              
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.1em] text-[#e5e4e4]/70 font-mono">
                Est. 1994
              </span>
            </motion.div>

            {/* Monumental Brand Heading & Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="text-[52px] sm:text-[76px] md:text-[96px] lg:text-[108px] xl:text-[120px] font-light text-[#ffffff] tracking-[-0.04em] leading-[0.88] select-none">
                NEPED
              </h1>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-mono uppercase tracking-[0.12em] text-[#e5e4e4]/85 leading-snug">
                Nagaland Empowerment of People through Economic Development
              </p>
            </motion.div>

            {/* Core Narrative / Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="text-[15px] sm:text-[16px] text-[#ffffff]/90 font-normal leading-[1.6] max-w-[560px] tracking-[0.15px]"
            >
              Delivering sustainable rural transformation, indigenous clean energy micro-hydro generators, community agroforestry, and local economic resilience across Nagaland for over 30 years.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <TextArrowButton to={NEPED_PATHS.about} dark={true} variant="pill">
                Explore Our Story
              </TextArrowButton>
              <TextArrowButton to={NEPED_ENERGY_PATHS.technology} dark={true} variant="pill" className="bg-white/5 border-white/15 hover:bg-white/10">
                Hydroger Technology
              </TextArrowButton>
            </motion.div>
          </div>

          {/* Right Column: Refined Glassmorphic Featured Project Spotlight & Live Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex lg:justify-end"
          >
            <div className="w-full max-w-[360px] rounded-[8px] border border-white/18 bg-[#070707]/60 shadow-2xl shadow-black/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/30">
              {/* Image banner with phase tag */}
              <div className="relative h-[115px] sm:h-[125px] overflow-hidden bg-[#1c1c1c]">
                <img
                  src="/forest.png"
                  alt="NEPED agroforestry project landscape"
                  className="h-full w-full object-cover opacity-85 transition-transform duration-500 hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/90 via-transparent to-transparent" />
                <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
                  <span className="rounded-[80px] border border-white/20 bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.12px] text-[#ffffff]">
                    Featured Heritage
                  </span>
                  <span className="text-[10px] font-mono text-[#e5e4e4]/70 uppercase">
                    Phase I (1995–2000)
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-3.5">
                <div>
                  <h3 className="text-[17px] sm:text-[18px] font-light leading-[1.2] text-[#ffffff] tracking-[-0.2px]">
                    Agroforestry in Shifting Cultivation
                  </h3>
                  <p className="mt-1.5 text-[12px] sm:text-[13px] leading-relaxed text-[#e5e4e4]/75">
                    The founding ICEF/CIDA initiative enriched traditional jhum fields with economic trees across village-managed test plots.
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 border-t border-white/12 pt-3">
                  <div className="bg-white/[0.04] p-2.5 rounded-[4px] border border-white/8">
                    <div className="text-[18px] sm:text-[20px] font-light text-[#ffffff] tracking-tight">7.8M+</div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Trees Planted</div>
                  </div>
                  <div className="bg-white/[0.04] p-2.5 rounded-[4px] border border-white/8">
                    <div className="text-[18px] sm:text-[20px] font-light text-[#ffffff] tracking-tight">854</div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Villages Reached</div>
                  </div>
                </div>

                {/* Bottom link */}
                <Link
                  to={NEPED_PATHS.project("neped-1-agroforestry-shifting-cultivation")}
                  className="pt-1 flex items-center justify-between text-[12px] sm:text-[13px] text-[#ffffff] hover:text-[#b75928] transition-colors group cursor-pointer"
                >
                  <span className="font-medium">Explore Project Case Study</span>
                  <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Dock Bar (Clean hairlined metadata & navigation anchors) */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-4 sm:pt-6 border-t border-white/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] sm:text-[13px] text-[#e5e4e4]/70"
        >
          <div className="flex items-center gap-2">
            <span className="text-white/90">Kohima, Nagaland</span>
            <span>•</span>
            <span>Sub-Megawatt Pico Hydro & Micro-Grids</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-white/50 font-mono text-[11px]">Regd. No. H/RS-4238</span>
          </div>
          <div className="flex items-center gap-5 sm:gap-6">
            <a href="#initiatives" className="hover:text-white transition-colors">
              View Initiatives ↓
            </a>
            <Link to={NEPED_PATHS.home} className="text-[#b75928] hover:text-white transition-colors">
              30-Year Archives →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. EDITORIAL BRAND STATEMENT (White Canvas, max-width 1200px) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <SectionLabel>01 / Editorial Voice</SectionLabel>
            <SectionHeading size="md">
              A shifting paradigm in community power
            </SectionHeading>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              Formed in 1994 as an autonomous Government of Nagaland society, NEPED set out to close developmental gaps across the state. Energy became the catalyst — by replacing dependency with self-governed local generation, NEPeD lets remote Himalayan communities thrive on their own terms.
            </p>
          </div>

          <div className="lg:col-span-8 lg:pl-8 space-y-6">
            <LoraEditorialBlock
              author="Nagaland Empowerment of People through Energy Development"
              role="Vision Statement • 2007"
            >
              Nagaland has the unique distinction where people are empowered and have sustainable livelihoods by being part of a vibrant economy, driven by locally generated eco-friendly power that is being used for accelerated development.
            </LoraEditorialBlock>

            <div className="pt-4 flex flex-wrap gap-4">
              <FilledDarkButton to={NEPED_ENERGY_PATHS.about}>
                Read the Inception Mandate
              </FilledDarkButton>
            </div>

            <div className="pt-6 mt-2 border-t border-[#e5e4e4]">
              <Link to={NEPED_PATHS.home} className="group inline-block">
                <span className="text-[12px] font-mono text-[#8d8d8d] uppercase tracking-wider block group-hover:text-[#000000] transition-colors">
                  1994 → NEPED Founded
                </span>
                <span className="text-[13px] text-[#666666] block mt-1 max-w-[420px]">
                  Autonomous Govt. of Nagaland society bridging developmental gaps statewide.
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. TWO-COLUMN FEATURE CARD ROW (As specified in design.md) */}
      <motion.section {...fadeUpOnView} id="initiatives" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8">
          <SectionLabel>02 / Core Focus</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Engineered for mountain topography
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Card: Mist background (#e5e4e4) with 8px radius */}
          <div className="bg-[#e5e4e4] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
            <div>
              <SectionLabel className="text-[#666666]">Indigenous Technology</SectionLabel>
              <h3 className="text-[32px] sm:text-[40px] font-light text-[#000000] tracking-[-0.72px] leading-[1.15] mt-4">
                The Hydroger System
              </h3>
              <p className="text-[15px] text-[#494949] mt-4 leading-relaxed max-w-md">
                Locally developed 3kW to 10kW pico-hydro turbines fabricated right in Nagaland. Designed to generate reliable baseload electricity from steep mountain streams.
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between">
              <TextArrowButton to={NEPED_ENERGY_PATHS.technology} variant="pill">
                Technical Specifications
              </TextArrowButton>
              <span className="text-[12px] font-mono text-[#666666]">01 / TECH</span>
            </div>
          </div>

          {/* Right Card: Full-bleed photo with 8px radius and overlaid text */}
          <div className="relative rounded-[8px] overflow-hidden min-h-[400px] flex flex-col justify-between p-8 sm:p-10 bg-[#1c1c1c]">
            <img
              src="/microgrid.png"
              alt="Electronic Load Controller Microgrid"
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/30" />

            <div className="relative z-10">
              <SectionLabel dark={true} className="text-[#e5e4e4]">
                Power Stability
              </SectionLabel>
              <h3 className="text-[32px] sm:text-[40px] font-light text-[#ffffff] tracking-[-0.72px] leading-[1.15] mt-4">
                Smart Electronic Load Controllers
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 mt-4 leading-relaxed max-w-md">
                Solid-state ELC units dynamically divert surplus hydropower to dump loads, ensuring unvarying 230V frequency without mechanical governors.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between">
              <TextArrowButton to={`${NEPED_ENERGY_PATHS.technology}#elc`} dark={true} variant="pill">
                Explore ELC Units
              </TextArrowButton>
              <span className="text-[12px] font-mono text-[#e5e4e4]/60">02 / ELC</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. NUMBERED LIST SECTION ("What we do") with 1px Mist Hairlines */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <SectionLabel>03 / What We Do</SectionLabel>
            <SectionHeading size="md">
              A comprehensive rural electrification pipeline
            </SectionHeading>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              Every project integrates indigenous engineering, community water rights, forest catchment preservation, and artisan capacity building.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-2">
            <NumberedItem
              num="01"
              title="Community Pico-Hydro Implementation"
              subtitle="Deploying sub-megawatt micro-turbines in remote off-grid settlements with zero environmental disruption."
              to={NEPED_ENERGY_PATHS.technology}
            />
            <NumberedItem
              num="02"
              title="Catchment Area Conservation"
              subtitle="Safeguarding mountain river basins through native forestry and village water management charters."
            />
            <NumberedItem
              num="03"
              title="Women's Empowerment & Night Livelihoods"
              subtitle="Powering cottage weaving looms, crop processing, and evening study hours to eliminate domestic drudgery."
            />
            <NumberedItem
              num="04"
              title="Rural Engineers Capacity Building"
              subtitle="Training village youth as certified hydro operators and regional technicians across the Northeast."
              to={NEPED_ENERGY_PATHS.about}
            />
          </div>
        </div>
      </motion.section>

      {/* 5. TONAL CARD VARIANT ROW (Pine & Tide card surfaces from design.md) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Pine (#193f32) Dark Green Feature Card */}
          <div className="bg-[#193f32] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/70">
                  Regional Extension
                </span>
                <PillBadge dark={true}>Northeast India</PillBadge>
              </div>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-4 leading-tight">
                Sharing clean technology across state borders
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 mt-3 leading-relaxed">
                NEPeD hydrogers now generate clean energy in Meghalaya, Sikkim, Arunachal Pradesh, and beyond — building regional energy resilience.
              </p>
            </div>
          </div>

          {/* Tide (#002934) Deep Teal Card */}
          <div className="bg-[#002934] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/70">
                  Youth & Skill Summit
                </span>
                <PillBadge dark={true}>Capacity Building</PillBadge>
              </div>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-4 leading-tight">
                Empowering the next generation of technicians
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 mt-3 leading-relaxed">
                Over 500+ rural youths trained in mechanical maintenance, precision wiring, and grid synchronisation.
              </p>
            </div>
            <div className="pt-6">
              <TextArrowButton to={SHARED_PATHS.blog} dark={true} variant="pill">
                Read Summit Stories
              </TextArrowButton>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. FULL-BLEED PHOTOGRAPHIC TRANSITION BAND */}
      <motion.section {...fadeUpOnView} className="relative w-full h-[450px] sm:h-[550px] bg-[#070707] flex items-center justify-center p-6 text-center overflow-hidden">
        <img
          src="/forest.png"
          alt="Nagaland Pristine Forest Catchment"
          className="absolute inset-0 w-full h-full object-cover opacity-45 filter brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-[#070707]/30" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <SectionLabel dark={true}>Ecological Stewardship</SectionLabel>
          <blockquote className="font-serif italic text-[22px] sm:text-[32px] text-[#ffffff] font-normal leading-snug tracking-[0.01em]">
            “To ensure sustainable development through sustainable technologies and protection of the environment.”
          </blockquote>
          <p className="text-[13px] text-[#e5e4e4]/80 uppercase tracking-widest">
            NEPeD Core Objective • 2007
          </p>
        </div>
      </motion.section>

      {/* 7. DYNAMIC DIAGONAL MARQUEE GALLERY EXHIBIT */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <SectionLabel>04 / Field Gallery & Archival Imagery</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              Glimpses from the Himalayan Frontier
            </SectionHeading>
          </div>
          <p className="text-[14px] text-[#666666] max-w-sm">
            Dynamic field installations, mountain watershed streams, village committees, and micro-hydro deployments captured across Nagaland.
          </p>
        </div>

        {/* Diagonal Marquee Component */}
        <DiagonalMarqueeCarousel />
      </motion.section>

      {/* 8. FLAGSHIP HARDWARE PRODUCTS DECK */}
      <motion.section {...fadeUpOnView} id="products" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border border-[#e5e4e4] rounded-[8px] bg-[#ffffff] p-6 sm:p-12 flex flex-col items-center">
          <div className="text-center max-w-xl mb-8">
            <SectionLabel>05 / Indigenous Hardware & Products</SectionLabel>
            <SectionHeading size="md" className="mt-2">
              The Hydroger & ELC Hardware Deck
            </SectionHeading>
            <p className="mt-2 text-[14px] text-[#666666]">
              Cycle through the cards to inspect the Electronic Load Controller (ELC), indigenous Hydroger turbines, and decentralized village microgrids.
            </p>
          </div>

          {/* Large Expanded Interactive Card Stack */}
          <AnimatedCardStack />
        </div>
      </motion.section>
    </div>
  );
}
