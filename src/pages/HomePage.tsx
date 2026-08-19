import { useEffect } from "react";
import { Link } from "react-router-dom";
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

export function HomePage() {
  useEffect(() => {
    document.title = "NEPED — Nagaland Empowerment of People through Economic Development";
  }, []);

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* 1. FULL-BLEED HERO SECTION (As specified in design.md) */}
      <section className="relative w-full min-h-[92vh] sm:min-h-screen bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        {/* Full-bleed background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mountain-windmills.png"
            alt="Nagaland Mountain Landscape"
            className="w-full h-full object-cover opacity-60 filter brightness-[0.75] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        {/* Top Content (Intro paragraph top-left, under nav) */}
        <div className="relative z-10 pt-16 sm:pt-20 max-w-[420px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#b75928]" />
            <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/90 font-mono">
              Empowering Nagaland Since 1994
            </span>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#ffffff] font-normal leading-[1.5] tracking-[0.15px]">
            Delivering sustainable rural transformation, indigenous clean energy micro-hydro generators, community agroforestry, and local economic resilience across Nagaland.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <TextArrowButton to="/about" dark={true} variant="pill">
              Explore Our Story
            </TextArrowButton>
          </div>
        </div>

        {/* Bottom Content (Monumental Brand Wordmark at 168px weight 300) */}
        <div className="relative z-10 mt-auto pt-12">
          <div className="text-[12px] uppercase tracking-[0.15em] text-[#e5e4e4]/70 mb-2">
            Autonomous Registered Society • Govt. of Nagaland
          </div>
          <h1 className="text-whisper-display text-[#ffffff] font-light tracking-[-4.2px] select-none">
            NEPED
          </h1>
          <div className="mt-4 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[#e5e4e4]/70">
            <span>Kohima, Nagaland • Sub-Megawatt Pico Hydro & Micro-Grids</span>
            <div className="flex items-center gap-6">
              <a href="#initiatives" className="hover:text-white transition-colors">
                View Initiatives ↓
              </a>
              <Link to="/technology" className="text-[#b75928] hover:text-white transition-colors">
                Hydroger Specs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL BRAND STATEMENT (White Canvas, max-width 1200px) */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <SectionLabel>01 / Editorial Voice</SectionLabel>
            <SectionHeading size="md">
              A shifting paradigm in community power
            </SectionHeading>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              Energy is the catalyst cutting across development sectors. By replacing traditional dependency with self-governed local generation, NEPeD enables remote Himalayan communities to thrive on their own terms.
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
              <FilledDarkButton to="/about">
                Read the Inception Mandate
              </FilledDarkButton>
              <TextArrowButton to="/impact" variant="pill">
                Explore Village Impact
              </TextArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO-COLUMN FEATURE CARD ROW (As specified in design.md) */}
      <section id="initiatives" className="mx-auto max-w-[1200px] px-4 sm:px-6">
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
              <TextArrowButton to="/technology" variant="pill">
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
              <TextArrowButton to="/technology#elc" dark={true} variant="pill">
                Explore ELC Units
              </TextArrowButton>
              <span className="text-[12px] font-mono text-[#e5e4e4]/60">02 / ELC</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NUMBERED LIST SECTION ("What we do") with 1px Mist Hairlines */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
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
              to="/technology"
            />
            <NumberedItem
              num="02"
              title="Catchment Area Conservation"
              subtitle="Safeguarding mountain river basins through native forestry and village water management charters."
              to="/impact"
            />
            <NumberedItem
              num="03"
              title="Women's Empowerment & Night Livelihoods"
              subtitle="Powering cottage weaving looms, crop processing, and evening study hours to eliminate domestic drudgery."
              to="/impact"
            />
            <NumberedItem
              num="04"
              title="Rural Engineers Capacity Building"
              subtitle="Training village youth as certified hydro operators and regional technicians across the Northeast."
              to="/about"
            />
          </div>
        </div>
      </section>

      {/* 5. TONAL CARD VARIANT ROW (Pine & Tide card surfaces from design.md) */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
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
            <div className="pt-6">
              <TextArrowButton to="/impact" dark={true} variant="pill">
                Explore Regional Map
              </TextArrowButton>
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
              <TextArrowButton to="/blog" dark={true} variant="pill">
                Read Summit Stories
              </TextArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FULL-BLEED PHOTOGRAPHIC TRANSITION BAND */}
      <section className="relative w-full h-[450px] sm:h-[550px] bg-[#070707] flex items-center justify-center p-6 text-center overflow-hidden">
        <img
          src="/forest.png"
          alt="Nagaland Pristine Forest Catchment"
          className="absolute inset-0 w-full h-full object-cover opacity-45 filter brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-[#070707]/30" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <SectionLabel dark={true}>Ecological Stewardship</SectionLabel>
          <blockquote className="font-serif italic text-[22px] sm:text-[32px] text-[#ffffff] font-light leading-snug tracking-[0.01em]">
            “To ensure sustainable development through sustainable technologies and protection of the environment.”
          </blockquote>
          <p className="text-[13px] text-[#e5e4e4]/80 uppercase tracking-widest">
            NEPeD Core Objective • 2007
          </p>
        </div>
      </section>

      {/* 7. DYNAMIC DIAGONAL MARQUEE GALLERY EXHIBIT */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
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
      </section>

      {/* 8. FLAGSHIP HARDWARE PRODUCTS DECK */}
      <section id="products" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
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
      </section>
    </div>
  );
}
