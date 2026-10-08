import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  Zap,
  Users,
  MapPin,
  Gauge,
  Layers,
  FlaskConical,
  Factory,
  Handshake,
  Leaf,
  IndianRupee,
  Waves,
  BatteryCharging,
  Trees,
  Sprout,
  Wrench,
  Store,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";
import { CardSlider } from "@/components/shared/CardSlider";
import { NumberedTextCard } from "@/components/shared/NumberedTextCard";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { ProductImageCard } from "@/components/shared/ProductImageCard";
import { BookDemoButton } from "@/components/ui/book-demo-button";
import { ScrollStackDeck, type ProjectItem } from "@/components/ui/scroll-stack-deck";
import { CASE_STUDIES } from "@/data/neped-energy/caseStudiesData";
import { useOpenContact } from "@/lib/contact";
import { DotGrid } from "@/components/ui/dot-grid";

// Case studies deck: NEPeD tones; village photos where the site has one, gradient panel otherwise
// Every card uses the same Mist Wash colour; cards without a photo get the same soft green panel
const CASE_DECK_COLOR = "#dcebe1";
const CASE_DECK_PANEL = "linear-gradient(145deg, #f3f6f3 0%, #b9d6c3 100%)";
const CASE_DECK_STYLE: Record<string, { color: string; panel: string; image?: string; imageAlt?: string }> = {
  kingjung: { color: CASE_DECK_COLOR, panel: "", image: "/20 Kingjung Village Energy Committee (2).webp", imageAlt: "Kingjung Village Energy Committee" },
  kingpao: { color: CASE_DECK_COLOR, panel: "", image: "/gallery-photos/nagaland/12 Rural Engineer after hydroger installation at Kinpoa Village.webp", imageAlt: "Rural Engineer after hydroger installation at Kinpoa Village" },
  pang: { color: CASE_DECK_COLOR, panel: CASE_DECK_PANEL },
  aniashu: { color: CASE_DECK_COLOR, panel: CASE_DECK_PANEL },
  kaha: { color: CASE_DECK_COLOR, panel: CASE_DECK_PANEL },
};
const CASE_STUDY_DECK: ProjectItem[] = CASE_STUDIES.map((study, i) => ({
  id: study.slug,
  tabTitle: `${String(i + 1).padStart(2, "0")} · ${study.place}`,
  title: study.title,
  description: study.overview,
  to: NEPED_ENERGY_PATHS.caseStudy(study.slug),
  ...CASE_DECK_STYLE[study.slug],
}));

export function NepedEnergyPage() {
  const openContact = useOpenContact();
  useEffect(() => {
    document.title =
      "NEPeD — Nagaland Empowerment of People through Energy Development • Clean Energy Division (Est. 2007)";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Common sectoral impacts (verbatim from the NEPeD sectoral impacts image)
  const sectoralImpacts = [
    { title: "Social", image: { src: "/social.webp", alt: "Social" }, icon: Users, points: ["Revitalized Social Dynamics- Greater Community Bonding & Interactions", "Health and Sanitation related impact", "Empowerment and involvement of Women in the Decision Making Process"] },
    { title: "Economic", image: { src: "/economic.webp", alt: "Economic", fit: "contain" as const }, icon: IndianRupee, points: ["Source of Revenue Generation for the Community", "Employment of Individuals", "Increased man hours of industries such as Handicrafts"] },
    { title: "Environment", image: { src: "/mountain-windmills.webp", alt: "Environment" }, icon: Leaf, points: ["Generation of clean sustainable energy", "Decreased Dependence on Fossil Fuels", "Spreading/Creating Awareness on Environmental fronts", "Community commitments to conserve and protect catchment areas and Biodiversity"] },
  ];

  // NEPeD products (names from NEPeD/data.txt)
  const products = [
    { name: "Hydroger", image: "/Hydroger (Impulse).jpeg", to: NEPED_ENERGY_PATHS.product("hydroger-turbine-system") },
    { name: "Electronic Load Controller (ELC)", image: "/elc-device.webp", to: NEPED_ENERGY_PATHS.product("electronic-load-controller") },
  ];

  // NEPeD Aims (verbatim from NEPeD/data.txt)
  const aims = [
    { icon: Waves, text: "To implement community-based pico/micro hydro projects of sub megawatt level." },
    { icon: BatteryCharging, text: "To supplement and provide alternative energy needs in rural areas." },
    { icon: Trees, text: "To promote catchment area conservation in potential energy development sites" },
    { icon: Sprout, text: "To empower people for sustainable livelihood through locally generated eco-friendly power." },
    { icon: Users, text: "To empower youth and women in sustainable livelihoods." },
    { icon: Wrench, text: "To provide technical skills and capacities for rural employment." },
    { icon: Store, text: "To facilitate entrepreneurship development and provide market linkages" },
  ];

  // NEPeD Objectives (verbatim from NEPeD/data.txt)
  const objectives = [
    { icon: Layers, text: "To add value to the past and current activities of NEPED and allied projects in Nagaland and the northeast;" },
    { icon: FlaskConical, text: "To further promote research and development of the hydroger technology developed by NEPeD" },
    { icon: Factory, text: "To sustainably streamline production and installation of the technology across the region" },
    { icon: Handshake, text: "To collaborate with both government and non-government agencies and organizations in the field of energy and rural development" },
    { icon: Leaf, text: "To ensure sustainable development through sustainable technologies and protection of the environment." },
  ];

  return (
    <div className="w-full space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO — split layout like the NEPED homepage: dark panel with the headline, Hydroger product photo on the right.
          Text verbatim from the previous hero. The product photo is small (432px), so it is shown framed, not full-bleed. */}
      <section className="grid grid-cols-1 lg:grid-cols-12 bg-(--brand-surface) lg:min-h-[calc(100svh-84px)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-6 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] lg:pr-12 xl:pr-20 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:py-16 xl:py-20"
        >
          <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[0.04em] text-[#ffffff]/70">
            <img src="/NEPeD Logo High Res.webp" alt="" className="h-5 w-5 rounded-full object-cover" />
            NEPeD • Est. 2007
          </span>
          <h1 className="mt-5 sm:mt-6 max-w-[760px] font-serif font-normal text-[40px] sm:text-[58px] lg:text-[54px] xl:text-[68px] 2xl:text-[80px] leading-[1.02] tracking-[-0.5px] text-[#ffffff] text-balance">
            Nagaland Empowerment of People through Energy Development
          </h1>
          <p className="mt-6 sm:mt-8 max-w-[620px] text-[17px] sm:text-[19px] xl:text-[21px] leading-[1.45] text-[#ffffff]/90">
            The “Nagaland Empowerment of People through Energy Development” (NEPeD) was formed in 2007 by the Government of Nagaland, with full autonomy as an independent registered society (NGO), to address the energy challenges in the state.
          </p>

          <div className="mt-9 sm:mt-10 xl:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <Link to={NEPED_ENERGY_PATHS.technology} className="group inline-flex items-center gap-5 w-fit">
              <span className="h-16 w-16 sm:h-20 sm:w-20 2xl:h-24 2xl:w-24 shrink-0 rounded-full bg-(--brand-accent-on-dark) text-(--brand-surface) flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
                <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 ease-in-out group-hover:translate-x-1" strokeWidth={1.5} />
              </span>
              <span className="text-[16px] sm:text-[18px] text-[#ffffff]">Visit CERES Centre of Excellence</span>
            </Link>
            <a
              href="#energy-imperative"
              className="w-fit text-[15px] sm:text-[16px] text-[#ffffff]/85 underline decoration-white/35 underline-offset-[6px] hover:text-[#ffffff] hover:decoration-white transition-colors duration-300 ease-in-out"
            >
              The Energy Imperative
            </a>
          </div>

          {/* Key facts */}
          <div className="mt-12 xl:mt-14 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-10 gap-y-4 max-w-[640px]">
            <div className="flex items-baseline gap-3">
              <span className="text-[36px] font-light leading-none text-[#ffffff]">7</span>
              <span className="text-[14px] text-[#ffffff]/75">Multi-Disciplinary Members</span>
            </div>
            <div className="flex items-center gap-2.5 text-[14px] text-[#ffffff]/75">
              <MapPin size={18} className="text-(--brand-accent-on-dark)" />
              Industrial Estate, Dimapur
            </div>
          </div>
        </motion.div>

        {/* Hydroger product photo, framed on a light panel */}
        <div className="lg:col-span-5 bg-[#F3F6F3] flex items-center justify-center px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-[340px] sm:max-w-[380px]"
          >
            <Link
              to={NEPED_ENERGY_PATHS.product("hydroger-turbine-system")}
              className="group block overflow-hidden bg-[#ffffff] p-2.5 shadow-[0_24px_60px_rgba(18,67,46,0.18)]"
            >
              <img
                src="/Hydroger (Impulse).jpeg"
                alt="Hydroger (Impulse)"
                width={432}
                height={482}
                fetchPriority="high"
                className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
              />
            </Link>
            <figcaption className="mt-5 space-y-1.5">
              <span className="block font-mono text-[13px] font-medium text-[#1E6F4C]">Hydroger</span>
              <span className="block text-[15px] leading-relaxed text-[#1A2E23]">
                NEPeD coined the term ‘Hydroger’ (derived from the amalgamation of Hydro and Generator).
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* 2. WHO WE ARE — NEPeD description + objectives slider (text verbatim from NEPeD/data.txt) */}
      <motion.section {...fadeUpOnView} id="who-we-are" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] space-y-5">
          <div className="inline-flex items-center gap-1.5">
            <SectionPill>Who We Are</SectionPill>
          </div>
          <h2 className="text-[30px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.12]">
            Nagaland Empowerment of People through Energy Development (NEPeD)
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">
            The previous phases of Nagaland Empowerment of People through Economic Development (NEPED), with a focus on livelihood and environment, created a need for energy as an essential requirement for adding value to farmer produce. Thus retaining the well-established acronym Nagaland Empowerment of People through Energy Development (NEPeD) came into being in 2007 comprising a multi-disciplinary team of 7 members.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 space-y-5">
          <h3 className="text-[20px] sm:text-[24px] font-light text-[#1A2E23] tracking-[-0.4px]">
            Objectives:
          </h3>
          <CardSlider label="NEPeD objectives">
            {objectives.map((objective, idx) => (
              <NumberedTextCard key={objective.text} icon={objective.icon} index={idx} text={objective.text} />
            ))}
          </CardSlider>
        </div>
      </motion.section>

      {/* 3. WHAT IS HYDROGER? — dark band with key specifications (text verbatim from NEPeD/data.txt) */}
      <section id="hydroger" className="relative w-full">
        <div className="absolute inset-x-0 top-0 bottom-[120px] sm:bottom-[160px] bg-[#12432E]" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 sm:pt-28">
          <motion.div {...fadeUpOnView} className="max-w-[820px] mx-auto text-center space-y-6">
            <h2 className="text-[34px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              What is Hydroger?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#e5e4e4]/80 leading-relaxed">
             The technology is commonly called watermills. Based on the applicability in Nagaland, NEPeD coined the term ‘Hydroger’ (derived from the amalgamation of Hydro and Generator). The mechanism is unique in its simplicity. It comprises of cylindrical cast iron casing housing an alternator which is connected to the turbine through the shaft. Hydro (water) power is used to turn the turbine to generate energy. There are basically two types of turbines, Reaction and Impulse. Reaction turbine requires volume of water and less height and is suitable in low lying areas whereas Impulse turbine requires higher height and lower volume and is suitable for hilly areas.
            </p>
          </motion.div>

          <motion.div {...fadeUpOnView} className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Capacity */}
            <div className="bg-[#ffffff] p-7 sm:p-8 flex flex-col justify-between gap-10 min-h-[240px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <span className="w-12 h-12 rounded-full bg-[#1E6F4C] text-[#ffffff] flex items-center justify-center">
                <Gauge size={20} />
              </span>
              <div>
                <span className="text-[15px] text-[#5B6660]">Capacity</span>
                <div className="mt-2 text-[56px] sm:text-[64px] font-light text-[#1A2E23] tracking-[-1.5px] leading-none">3Kw</div>
              </div>
            </div>

            {/* Voltage */}
            <div className="bg-[#1E6F4C] p-7 sm:p-8 flex flex-col justify-between gap-10 min-h-[240px] shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <span className="w-12 h-12 rounded-full bg-white/20 text-[#ffffff] flex items-center justify-center">
                <Zap size={20} />
              </span>
              <div>
                <span className="text-[15px] text-[#ffffff]/80">Voltage</span>
                <div className="mt-2 text-[44px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-none">230 - 240V</div>
              </div>
            </div>

            {/* Gross Weight with Hydroger photo */}
            <div className="bg-[#ffffff] p-3 flex flex-col gap-5 min-h-[300px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <div className=" overflow-hidden aspect-[4/3] bg-[#e5e4e4]">
                <img
                  src="/Hydroger (Impulse).jpeg"
                  alt="Hydroger (Impulse)"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 pb-4">
                <span className="text-[15px] text-[#5B6660]">Gross Weight</span>
                <div className="mt-2 text-[40px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-none">78 kilograms</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AIMS — text-only cards (text verbatim from NEPeD/data.txt) */}
      <motion.section {...fadeUpOnView} id="aims" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="flex items-start px-2 sm:px-0 sm:pr-4 lg:pt-2">
            <h2 className="text-[34px] sm:text-[44px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.1]">
              Aims:
            </h2>
          </div>
          {aims.map((aim, idx) => (
            <NumberedTextCard key={aim.text} icon={aim.icon} index={idx} text={aim.text} />
          ))}
        </div>
      </motion.section>

      {/* 5. PRODUCTS — the two NEPeD products (names from NEPeD/data.txt) */}
      <motion.section {...fadeUpOnView} id="products" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center gap-1.5 pb-8 sm:pb-10 border-b border-[#e5e4e4]">
          <SectionPill>PRODUCTS</SectionPill>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {products.map((product) => (
            <ProductImageCard key={product.name} to={product.to} image={product.image} title={product.name} />
          ))}
        </div>
      </motion.section>

      {/* 6. IMPACTS — short description + sectoral impact cards in the Aims card style (text verbatim from NEPeD/data.txt and the sectoral impacts image) */}
      <motion.section {...fadeUpOnView} id="impacts" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="pb-8 sm:pb-10 border-b border-[#e5e4e4] space-y-5">
          <div className="flex items-center gap-1.5">
            <SectionPill>Impacts</SectionPill>
          </div>
          <p className="max-w-[760px] text-[15px] sm:text-[16px] text-[#5B6660] leading-relaxed">
            There are many dimensions to this Hydroger project. Not only does it help address basic power needs of people living in the villages but it has impacts in the environment, social and economic sectors.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {sectoralImpacts.map((sector, idx) => (
            <NumberedTextCard key={sector.title} icon={sector.icon} index={idx} title={sector.title} points={sector.points} image={sector.image} />
          ))}
        </div>
      </motion.section>

  
    


      {/* CASE STUDIES — first 4 as a scroll-stacking deck, button to all case studies */}
      <motion.section {...fadeUpOnView} id="case-studies" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="pb-8 sm:pb-10 border-b border-[#e5e4e4]">
          <SectionPill>Case Studies</SectionPill>
        </div>
      </motion.section>
      <ScrollStackDeck projects={CASE_STUDY_DECK.slice(0, 4)} className="!mt-0" />
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex justify-center">
          <BookDemoButton to={NEPED_ENERGY_PATHS.caseStudies} variant="orange">Click for more case studies</BookDemoButton>
        </div>
      </motion.section>

      {/* 7. CTA — CERES (centred light dot-grid banner) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative overflow-hidden bg-[#F3F6F3] border border-[#e5e4e4] px-6 py-16 sm:px-12 sm:py-20 md:py-24 text-center">
          <DotGrid dotSize={4} gap={22} color="#d3e2d8" />
          {/* Soft white centre so the text stays easy to read over the dots */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.7)_40%,rgba(255,255,255,0)_75%)]" />
          <div className="relative max-w-[820px] mx-auto flex flex-col items-center gap-6">
            <SectionPill>Core Engineering Facility</SectionPill>
            <h2 className="text-[30px] sm:text-[48px] font-light text-[#1A2E23] tracking-[-1.2px] leading-[1.1]">
              CERES — Centre of Excellence for Renewable Energy Studies
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#1A2E23] leading-relaxed max-w-[680px]">
              Located at Industrial Estate, Dimapur, CERES is NEPeD’s dedicated engineering and manufacturing laboratory. It anchors the mass production of indigenous hydrogers, Electronic Load Controllers (ELC), and the technical skilling of local "Rural Engineers".
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="inline-flex p-1.5 bg-[#000000]/[0.04] border border-[#e5e4e4]">
                <ArrowPillButton to={NEPED_ENERGY_PATHS.technology} arrow="up-right">Visit CERES Tech & Hardware Page</ArrowPillButton>
              </div>
              <ArrowPillButton onClick={openContact} variant="outline" arrow="mail">Contact Us</ArrowPillButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
