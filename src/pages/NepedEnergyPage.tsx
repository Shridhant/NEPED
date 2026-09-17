import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/AkerPrimitives";
import {
  Zap,
  Cpu,
  Users,
  Sprout,
  Droplets,
  HeartPulse,
  GraduationCap,
  Scale,
  ShieldCheck,
  TrendingUp,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function NepedEnergyPage() {
  useEffect(() => {
    document.title =
      "NEPeD — Nagaland Empowerment of People through Energy Development • Clean Energy Division (Est. 2007)";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 9 Cross-cutting sectors impacted by Energy (from user text)
  const crossCuttingSectors = [
    {
      icon: Users,
      title: "Social Empowerment",
      desc: "Empowering rural communities by enabling self-determination and decentralized local governance over their power infrastructure.",
    },
    {
      icon: TrendingUp,
      title: "Economic Growth",
      desc: "Creating localized micro-economies, rural workshop hubs, and energy-based entrepreneurship in remote mountain hamlets.",
    },
    {
      icon: Sprout,
      title: "Environmental Protection",
      desc: "Zero-carbon run-of-the-river hydro generation that protects fragile Himalayan forest catchments without large dams.",
    },
    {
      icon: Droplets,
      title: "Access to Clean Water",
      desc: "Harnessing gravity-fed mountain streams and penstock channels to secure clean domestic water and irrigation.",
    },
    {
      icon: HeartPulse,
      title: "Health & Sanitation",
      desc: "Powering rural clinics, vaccine refrigeration, clean indoor lighting, and eliminating toxic kerosene fumes.",
    },
    {
      icon: GraduationCap,
      title: "Education & Study",
      desc: "Providing reliable nighttime lighting for village students and powering digital infrastructure in mountain schools.",
    },
    {
      icon: Scale,
      title: "Gender Equity",
      desc: "Alleviating the manual drudgery of post-harvest processing and empowering women through community energy governance.",
    },
    {
      icon: Zap,
      title: "Agricultural Productivity",
      desc: "Direct power for rice hulling, cardamom drying, oil expellers, and tool sharpening to add maximum value to farmer produce.",
    },
    {
      icon: ShieldCheck,
      title: "Resilient Livelihoods",
      desc: "Shielding indigenous communities from global market shocks through community-owned, self-sustaining energy assets.",
    },
  ];

  // 4 Core Operational Wings under NEPeD
  const operationalWings = [
    {
      num: "01",
      title: "CERES (Centre of Excellence)",
      subtitle: "Renewable Energy Studies & Fabrication",
      desc: "State-of-the-art facility at Industrial Estate, Dimapur for standardized mass fabrication of hydrogers and Electronic Load Controllers (ELC).",
      link: "/technology",
      linkText: "Explore CERES Lab & Tech",
      icon: Cpu,
      badge: "Dimapur Hub",
    },
    {
      num: "02",
      title: "Pico Micro-Grids",
      subtitle: "Decentralized Village Electrification",
      desc: "Off-grid, run-of-the-river pico-hydro generation grids delivering reliable 230V AC power directly to isolated Himalayan settlements.",
      link: "/technology/product/village-pico-microgrid",
      linkText: "Inspect Microgrid System",
      icon: Zap,
      badge: "Off-Grid Power",
    },
    {
      num: "03",
      title: "Village Energy Committees (VEC)",
      subtitle: "Grassroots Ownership & Governance",
      desc: "Democratized village bodies managing power distribution, maintenance tariffs, and river catchment preservation.",
      link: "/impact",
      linkText: "View Community Impact",
      icon: Users,
      badge: "Community Led",
    },
    {
      num: "04",
      title: "Government Sponsored Projects",
      subtitle: "Central & Regional Clean Energy Schemes",
      desc: "Flagship deployments including MNRE 30 Hydrogers Scheme, NEC 'Made in Nagaland' turbines, and NAFCC Climate Adaptation.",
      link: "/energy-projects",
      linkText: "View Energy Projects",
      icon: Building2,
      badge: "National Schemes",
    },
  ];

  return (
    <div className="w-full space-y-20 sm:space-y-28 pb-20">
      {/* 1. HERO SECTION: CLEAN ENERGY AESTHETIC & NOMENCLATURE */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        {/* Background Image & Dynamic Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/microgrid.png"
            alt="NEPeD Clean Energy Grid"
            className="w-full h-full object-cover opacity-35 filter brightness-[0.75] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-transparent" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b75928]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Top Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-16 sm:pt-20 max-w-[820px]"
        >
          {/* Nomenclature Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] border border-white/20 backdrop-blur-md mb-5">
            <img
              src="/NEPeD Logo High Res.png"
              alt="NEPeD Logo"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-[#b75928] animate-pulse" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5e4e4] font-mono">
              NEPeD (Lowercase 'e') • Clean Energy Division • Est. 2007
            </span>
          </div>

          <h1 className="text-[36px] sm:text-[56px] md:text-[66px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]">
            Nagaland Empowerment of People through Energy Development
          </h1>

          <p className="mt-5 text-[16px] sm:text-[18px] text-[#ffffff]/90 font-normal leading-relaxed max-w-2xl">
            In 2007, recognizing energy as the indispensable catalyst to add value to farmer produce, NEPeD was established with a 7-member multi-disciplinary team to pioneer decentralized mountain clean energy.
          </p>

          {/* Quick CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#energy-imperative"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[1584px] bg-[#ffffff] text-[#000000] text-[13px] font-medium hover:bg-[#e5e4e4] transition-all"
            >
              <span>The Energy Imperative ↓</span>
            </a>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[1584px] bg-white/10 border border-white/20 text-[#ffffff] text-[13px] font-medium hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <span>Visit CERES Centre of Excellence</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/energy-projects"
              className="inline-flex items-center gap-2 text-[13px] text-[#b75928] hover:text-[#ffffff] transition-colors font-medium px-2 py-3"
            >
              <span>Government Schemes ↗</span>
            </Link>
          </div>
        </motion.div>

        {/* Hero Bottom Bar: Contrast against NEPED Master */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-[#e5e4e4]/75"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-white font-medium">NEPeD vs NEPED:</span>
            <span>Retaining the trusted acronym, evolved from Economic (1994) to Energy (2007) Development.</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] text-[#8d8d8d]">
            <span>7 Multi-Disciplinary Members</span>
            <span>•</span>
            <span>Industrial Estate, Dimapur</span>
          </div>
        </motion.div>
      </section>

      {/* 2. THE ENERGY IMPERATIVE (USER-PROVIDED FOUNDATIONAL TEXT) */}
      <motion.section
        {...fadeUpOnView}
        id="energy-imperative"
        className="mx-auto max-w-[1200px] px-4 sm:px-6"
      >
        <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-8 sm:p-12 md:p-14 shadow-sm space-y-10">
          <div className="max-w-3xl space-y-4 border-b border-[#e5e4e4] pb-8">
            <SectionLabel>Foundational Charter • The Energy Imperative</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              Energy as a Cross-Cutting Catalyst
            </SectionHeading>
            <p className="text-[16px] sm:text-[18px] text-[#262626] font-normal leading-relaxed">
              Energy plays a key role cutting across sectors and impacting various aspects of development. Different aspects of development—social, economic, environment, access to water, health, education, gender, agricultural productivity, and livelihoods—are directly or indirectly impacted by the energy sector.
            </p>
          </div>

          {/* 9-Sector Cross-Cutting Impact Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.12em] font-mono text-[#8d8d8d]">
                9 Development Sectors Impacted by NEPeD
              </span>
              <span className="text-[11px] font-mono text-[#b75928]">
                Integrated Impact Framework
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {crossCuttingSectors.map((sector, idx) => {
                const IconComponent = sector.icon;
                return (
                  <div
                    key={sector.title}
                    className="p-6 rounded-[8px] bg-[#f9f9f9] border border-[#e5e4e4] hover:border-[#1c1c1c] hover:bg-[#ffffff] transition-all group duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-[6px] bg-[#1c1c1c] text-[#ffffff] flex items-center justify-center group-hover:bg-[#b75928] transition-colors">
                        <IconComponent size={18} />
                      </div>
                      <span className="text-[11px] font-mono text-[#8d8d8d]">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-medium text-[#000000] mb-2 group-hover:text-[#b75928] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-[13px] text-[#666666] leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. THE SHIFTING PARADIGM: FACILITATOR VS PROVIDER (USER TEXT) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 md:p-14 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#b75928]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[1584px] bg-white/10 border border-white/15 text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]">
              <Sparkles size={12} className="text-[#b75928]" />
              <span>Development Philosophy</span>
            </div>

            <h2 className="text-[30px] sm:text-[44px] font-light tracking-[-1px] leading-[1.15] text-[#ffffff]">
              A Shifting Paradigm: Government as Facilitator, Community as Owner
            </h2>

            <blockquote className="font-serif italic text-[18px] sm:text-[21px] text-[#e5e4e4] leading-relaxed border-l-2 border-[#b75928] pl-5 sm:pl-6 my-6">
              “There is also a shifting paradigm where communities and people are being empowered by allowing them to choose how they wish to develop their resources. The Government here plays the role of a facilitator in comparison to the traditional role of being a provider.”
            </blockquote>

            <p className="text-[14.5px] sm:text-[15.5px] text-[#e5e4e4]/80 leading-relaxed font-normal">
              The empowerment of people in developing nations is very critical. Such initiatives help communities build greater resilience to negative changes, helps them withstand the onslaught of global market forces and most important of all, allows them to ensure an assured standard of quality life.
            </p>
          </div>

          {/* Side-by-side Structural Comparison */}
          <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
            {/* Old Conventional Model */}
            <div className="p-6 rounded-[8px] bg-white/[0.03] border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8d8d8d] block mb-2">
                Traditional Paradigm
              </span>
              <h4 className="text-[17px] font-medium text-white/70 mb-3">
                Government as Provider
              </h4>
              <ul className="space-y-2.5 text-[13px] text-[#8d8d8d]">
                <li className="flex items-start gap-2">
                  <span className="text-white/40">•</span>
                  <span>Top-down central infrastructure with high transmission losses in mountainous terrains.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">•</span>
                  <span>Communities remain passive recipients without technical or administrative agency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">•</span>
                  <span>Vulnerability to external breakdown with long repair cycles from distant hubs.</span>
                </li>
              </ul>
            </div>

            {/* NEPeD Facilitator Model */}
            <div className="p-6 rounded-[8px] bg-[#b75928]/10 border border-[#b75928]/30">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#b75928] block mb-2">
                NEPeD Paradigm
              </span>
              <h4 className="text-[17px] font-medium text-white mb-3">
                Government as Facilitator
              </h4>
              <ul className="space-y-2.5 text-[13px] text-[#e5e4e4]">
                <li className="flex items-start gap-2">
                  <span className="text-[#b75928]">✓</span>
                  <span>Communities choose, install, and manage their own local river hydroger assets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b75928]">✓</span>
                  <span>Village Energy Committees (VECs) collect tariffs for maintenance funds and self-reliance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b75928]">✓</span>
                  <span>Resilience against market shocks with localized value addition for rural produce.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. THE 2007 GENESIS & TRANSITION (USER TEXT) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-8 sm:p-12 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 space-y-6">
              <SectionLabel>Historical Transition • 2007 Inception</SectionLabel>
              <SectionHeading size="lg">
                The Genesis of NEPeD (2007)
              </SectionHeading>

              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#262626] leading-relaxed">
                <p className="font-medium text-[#000000]">
                  The previous phases of Nagaland Empowerment of People through Economic Development (NEPED), with a focus on livelihood and environment, created a need for energy as an essential requirement for adding value to farmer produce.
                </p>
                <p>
                  Thus retaining the well-established acronym, <strong className="text-[#000000]">Nagaland Empowerment of People through Energy Development (NEPeD)</strong> came into being in 2007 comprising a multi-disciplinary team of 7 members.
                </p>
              </div>

              {/* Milestones Bridge */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-[6px] bg-[#f9f9f9] border border-[#e5e4e4]">
                  <span className="text-[11px] font-mono text-[#8d8d8d] block uppercase">
                    Phase I & II (1994–2006)
                  </span>
                  <p className="text-[14px] font-medium text-[#000000] mt-1">
                    NEPED
                  </p>
                  <p className="text-[12px] text-[#666666] mt-0.5">
                    Economic Development, Agroforestry & Jhum Enrichment
                  </p>
                </div>

                <div className="p-4 rounded-[6px] bg-[#b75928]/10 border border-[#b75928]/25">
                  <span className="text-[11px] font-mono text-[#b75928] block uppercase font-medium">
                    Clean Energy Wing (2007–Present)
                  </span>
                  <p className="text-[14px] font-medium text-[#000000] mt-1">
                    NEPeD
                  </p>
                  <p className="text-[12px] text-[#666666] mt-0.5">
                    Energy Development, Hydrogers, Micro-Grids & CERES
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Image Card: Farmer value addition in action */}
            <div className="lg:col-span-5">
              <div className="rounded-[8px] overflow-hidden border border-[#e5e4e4] bg-[#1c1c1c] shadow-md group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg"
                    alt="Villagers using hydroger power for tool sharpening"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono bg-[#b75928] text-white px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
                      Value Addition in the Field
                    </span>
                    <p className="text-[12px] text-white/90 mt-1 leading-snug">
                      Villagers sharpening agricultural implements and daos on an electric grinder powered by an indigenous hydroger.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-[#ffffff] border-t border-[#e5e4e4] flex items-center justify-between text-[12px]">
                  <span className="text-[#666666]">Multi-Disciplinary Team: 7 Members</span>
                  <span className="font-mono text-[#b75928]">Est. 2007</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. OPERATIONAL WINGS & SUB-DESTINATIONS (GATEWAYS) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e5e4e4] pb-6">
          <div>
            <SectionLabel>Infrastructure & Initiatives</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              NEPeD Operational Ecosystem
            </SectionHeading>
            <p className="text-[14.5px] text-[#666666] mt-2 max-w-2xl">
              From precision turbine fabrication at CERES Dimapur to community micro-grids and central energy schemes across Nagaland.
            </p>
          </div>
          <span className="text-[12px] font-mono text-[#8d8d8d] shrink-0">
            4 Core Divisions
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operationalWings.map((wing) => {
            const IconComp = wing.icon;
            return (
              <div
                key={wing.num}
                className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-[#1c1c1c] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[6px] bg-[#1c1c1c] text-[#ffffff] flex items-center justify-center group-hover:bg-[#b75928] transition-colors">
                        <IconComp size={18} />
                      </div>
                      <span className="text-[11px] font-mono text-[#8d8d8d]">
                        {wing.num}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-[1584px] bg-[#e5e4e4] text-[#000000] font-medium">
                      {wing.badge}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors">
                    {wing.title}
                  </h3>
                  <p className="text-[12.5px] font-mono text-[#8d8d8d] mt-0.5">
                    {wing.subtitle}
                  </p>
                  <p className="text-[13.5px] text-[#666666] mt-3 leading-relaxed">
                    {wing.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e5e4e4]">
                  <Link
                    to={wing.link}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[#000000] group-hover:text-[#b75928] transition-colors"
                  >
                    <span>{wing.linkText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 6. SPOTLIGHT ON CERES FABRICATION LAB (THE HUB) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#0f1714] text-white rounded-[8px] p-8 sm:p-12 md:p-14 relative overflow-hidden border border-[#1b3028]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[1584px] bg-white/10 border border-white/15 text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                <span>Core Engineering Facility</span>
              </div>
              <h2 className="text-[28px] sm:text-[40px] font-light text-white tracking-[-1px] leading-tight">
                CERES — Centre of Excellence for Renewable Energy Studies
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-white/80 leading-relaxed max-w-2xl font-normal">
                Located at Industrial Estate, Dimapur, CERES is NEPeD’s dedicated engineering and manufacturing laboratory. It anchors the mass production of indigenous hydrogers, Electronic Load Controllers (ELC), and the technical skilling of local "Rural Engineers".
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/technology"
                className="w-full text-center px-6 py-3.5 rounded-[1584px] bg-[#ffffff] text-[#000000] text-[13px] font-medium hover:bg-[#e5e4e4] transition-all"
              >
                Visit CERES Tech & Hardware Page →
              </Link>
              <Link
                to="/technology/product/hydroger-turbine-system"
                className="w-full text-center px-6 py-3 rounded-[1584px] bg-white/10 border border-white/20 text-[#ffffff] text-[13px] font-medium hover:bg-white/15 transition-all"
              >
                Inspect Hydroger Turbines (3kW / 5kW / 10kW)
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
