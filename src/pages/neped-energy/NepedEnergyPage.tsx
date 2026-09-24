import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  Zap,
  Users,
  ArrowRight,
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
} from "lucide-react";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";
import { CardSlider } from "@/components/shared/CardSlider";
import { NumberedTextCard } from "@/components/shared/NumberedTextCard";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { ProductImageCard } from "@/components/shared/ProductImageCard";
import { BookDemoButton } from "@/components/ui/book-demo-button";
import { ScrollStackDeck, type ProjectItem } from "@/components/ui/scroll-stack-deck";
import { CASE_STUDIES } from "@/data/neped-energy/caseStudiesData";

// Case studies deck: NEPeD tones; village photos where the site has one, gradient panel otherwise
const CASE_DECK_STYLE: Record<string, { color: string; panel: string; image?: string; imageAlt?: string }> = {
  kingjung: { color: "#cfe6e8", panel: "", image: "/20 Kingjung Village Energy Committee (2).webp", imageAlt: "Kingjung Village Energy Committee" },
  kingpao: { color: "#f3dcc8", panel: "", image: "/gallery-photos/nagaland/12 Rural Engineer after hydroger installation at Kinpoa Village.webp", imageAlt: "Rural Engineer after hydroger installation at Kinpoa Village" },
  pang: { color: "#ece4c9", panel: "linear-gradient(145deg, #f7f1dd 0%, #d9c98f 100%)" },
  aniashu: { color: "#d6e4ec", panel: "linear-gradient(145deg, #eaf2f7 0%, #9fc0d2 100%)" },
  kaha: { color: "#efd6cd", panel: "linear-gradient(145deg, #f8e8e2 0%, #d99f8a 100%)" },
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
      {/* 1. HERO SECTION — centred headline over full-bleed photo, glass info cards along the bottom */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#070707]">
        {/* Background photo with soft legibility gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero1.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070707]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/50 via-[#070707]/10 to-[#070707]/45" />
        </div>

        {/* Centred headline block */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-10"
        >
          {/* Nomenclature Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.12] border border-white/25 backdrop-blur-md mb-6">
            <img
              src="/NEPeD Logo High Res.webp"
              alt="NEPeD Logo"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-[#b75928] animate-pulse" />
            <span className="text-[11px] sm:text-[12px] tracking-[0.14em] text-[#ffffff] font-mono">
              NEPeD • Est. 2007
            </span>
          </div>

          <h1 className="max-w-[980px] text-[36px] sm:text-[56px] md:text-[64px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]">
            Nagaland Empowerment of People through Energy Development
          </h1>

          <p className="mt-6 max-w-[760px] text-[15px] sm:text-[17px] text-[#ffffff]/90 font-normal leading-relaxed">
            The “Nagaland Empowerment of People through Energy Development” (NEPeD) was formed in 2007 by the Government of Nagaland, with full autonomy as an independent registered society (NGO), to address the energy challenges in the state. 
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ArrowPillButton href="#energy-imperative" arrow="down">The Energy Imperative</ArrowPillButton>
            <ArrowPillButton to={NEPED_ENERGY_PATHS.technology} variant="glass">Visit CERES Centre of Excellence</ArrowPillButton>
          </div>
        </motion.div>

        {/* Glass info cards */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 pb-6 sm:pb-10 grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4"
        >
          {/* NEPED ↔ NEPeD lineage card */}
          <div className="col-span-2 md:col-span-6 rounded-[16px] bg-gradient-to-br from-white/25 to-white/[0.06] border border-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)] p-3 flex flex-col sm:flex-row gap-5">
            <div className="sm:w-[42%] shrink-0 rounded-[10px] bg-[#ffffff]/95 flex items-center justify-center gap-4 p-4 sm:p-5 aspect-[16/6] sm:aspect-auto">
              <img src="/NEPED Logo.jpg.webp" alt="NEPED Logo" className="h-12 sm:h-20 w-auto object-contain" />
              <ArrowRight size={16} className="text-[#8d8d8d] shrink-0" />
              <img src="/NEPeD Logo High Res.webp" alt="NEPeD Logo" className="h-12 sm:h-20 w-auto object-contain" />
            </div>
            <div className="flex flex-col justify-center gap-2 px-2 pb-3 sm:py-3 sm:pr-4 text-left">
              <span className="font-mono text-[13px] text-[#ffffff] font-medium">NEPeD vs NEPED:</span>
              <p className="text-[15px] text-[#ffffff]/85 leading-relaxed">
                Retaining the trusted acronym, evolved from Economic (1994) to Energy (2007) Development.
              </p>
            </div>
          </div>

          {/* Team size card */}
          <div className="col-span-1 md:col-span-3 rounded-[16px] bg-gradient-to-br from-white/25 to-white/[0.06] border border-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)] p-5 sm:p-6 flex flex-col items-center justify-center text-center">
            <span className="text-[48px] sm:text-[64px] font-light text-[#ffffff] leading-none tracking-[-1.5px]">7</span>
            <span className="mt-2 text-[14px] text-[#ffffff]/85">Multi-Disciplinary Members</span>
          </div>

          {/* Location card */}
          <div className="col-span-1 md:col-span-3 rounded-[16px] bg-gradient-to-br from-white/25 to-white/[0.06] border border-white/30 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)] p-5 sm:p-6 flex flex-col justify-center gap-3 sm:gap-4 text-left">
            <span className="w-12 h-12 rounded-full bg-[#b75928] text-[#ffffff] flex items-center justify-center">
              <MapPin size={20} />
            </span>
            <span className="text-[16px] sm:text-[20px] font-light text-[#ffffff] tracking-[-0.3px]">Industrial Estate, Dimapur</span>
          </div>
        </motion.div>
      </section>

      {/* 2. WHO WE ARE — NEPeD description + objectives slider (text verbatim from NEPeD/data.txt) */}
      <motion.section {...fadeUpOnView} id="who-we-are" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] space-y-5">
          <div className="inline-flex items-center gap-1.5">
            <SectionPill>Who We Are</SectionPill>
          </div>
          <h2 className="text-[30px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-[1.12]">
            Nagaland Empowerment of People through Energy Development (NEPeD)
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
            The previous phases of Nagaland Empowerment of People through Economic Development (NEPED), with a focus on livelihood and environment, created a need for energy as an essential requirement for adding value to farmer produce. Thus retaining the well-established acronym Nagaland Empowerment of People through Energy Development (NEPeD) came into being in 2007 comprising a multi-disciplinary team of 7 members.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 space-y-5">
          <h3 className="text-[20px] sm:text-[24px] font-light text-[#000000] tracking-[-0.4px]">
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
        <div className="absolute inset-x-0 top-0 bottom-[120px] sm:bottom-[160px] bg-[#002934]" />
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
            <div className="bg-[#ffffff] rounded-[16px] p-7 sm:p-8 flex flex-col justify-between gap-10 min-h-[240px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <span className="w-12 h-12 rounded-full bg-[#b75928] text-[#ffffff] flex items-center justify-center">
                <Gauge size={20} />
              </span>
              <div>
                <span className="text-[15px] text-[#666666]">Capacity</span>
                <div className="mt-2 text-[56px] sm:text-[64px] font-light text-[#000000] tracking-[-1.5px] leading-none">3Kw</div>
              </div>
            </div>

            {/* Voltage */}
            <div className="bg-[#b75928] rounded-[16px] p-7 sm:p-8 flex flex-col justify-between gap-10 min-h-[240px] shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <span className="w-12 h-12 rounded-full bg-white/20 text-[#ffffff] flex items-center justify-center">
                <Zap size={20} />
              </span>
              <div>
                <span className="text-[15px] text-[#ffffff]/80">Voltage</span>
                <div className="mt-2 text-[44px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-none">230 - 240V</div>
              </div>
            </div>

            {/* Gross Weight with Hydroger photo */}
            <div className="bg-[#ffffff] rounded-[16px] p-3 flex flex-col gap-5 min-h-[300px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <div className="rounded-[12px] overflow-hidden aspect-[4/3] bg-[#e5e4e4]">
                <img
                  src="/Hydroger (Impulse).jpeg"
                  alt="Hydroger (Impulse)"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 pb-4">
                <span className="text-[15px] text-[#666666]">Gross Weight</span>
                <div className="mt-2 text-[40px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-none">78 kilograms</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. AIMS — text-only cards (text verbatim from NEPeD/data.txt) */}
      <motion.section {...fadeUpOnView} id="aims" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="flex items-start px-2 sm:px-0 sm:pr-4 lg:pt-2">
            <h2 className="text-[34px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-[1.1]">
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
          <p className="max-w-[760px] text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
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

      {/* 7. CTA — CERES (centred dark banner, reference-inspired) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative rounded-[24px] overflow-hidden bg-[#002934] px-6 py-16 sm:px-12 sm:py-20 md:py-24 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-[#b75928]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-[820px] mx-auto flex flex-col items-center gap-6">
            <SectionPill dark>Core Engineering Facility</SectionPill>
            <h2 className="text-[30px] sm:text-[48px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              CERES — Centre of Excellence for Renewable Energy Studies
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#e5e4e4]/80 leading-relaxed max-w-[680px]">
              Located at Industrial Estate, Dimapur, CERES is NEPeD’s dedicated engineering and manufacturing laboratory. It anchors the mass production of indigenous hydrogers, Electronic Load Controllers (ELC), and the technical skilling of local "Rural Engineers".
            </p>
            <div className="mt-2 inline-flex p-1.5 rounded-[1584px] bg-white/[0.08] border border-white/15">
              <ArrowPillButton to={NEPED_ENERGY_PATHS.technology} arrow="up-right">Visit CERES Tech & Hardware Page</ArrowPillButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
