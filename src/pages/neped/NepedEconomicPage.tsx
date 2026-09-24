import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TextArrowButton,
  LoraEditorialBlock,
} from "@/components/ui/AkerPrimitives";
import {
  ArrowDown,
  ArrowRight,
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
import { NumberedTextCard } from "@/components/shared/NumberedTextCard";
import { loadAllProjects } from "@/lib/contentLoader";
import { fadeUpOnView } from "@/lib/motionVariants";
import { NEPED_ENERGY_PATHS, NEPED_PATHS } from "@/routes/paths";

const H2 = "text-[30px] sm:text-[44px] font-light text-[#000000] tracking-[-1px] leading-[1.12]";
const DARK_CARD = "relative rounded-[16px] overflow-hidden bg-(--brand-surface) text-[#ffffff]";
const GLOW = "absolute top-0 right-0 w-[320px] h-[320px] bg-(--brand-accent-on-dark)/15 rounded-full blur-3xl pointer-events-none";
const GLASS_ROW = "rounded-[12px] bg-white/[0.07] border border-white/15 p-4";
const GLASS_TIER = "p-4 sm:p-5 rounded-[16px] bg-white/[0.07] border border-white/15 backdrop-blur-md text-center";
const PHASE_CARD = "bg-[#f5f5f5] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between border border-transparent hover:border-[#e5e4e4] transition-colors";
const PHASE_PILL = "shrink-0 px-3 py-1 rounded-[1584px] bg-(--brand-accent)/10 text-(--brand-accent) text-[11px] font-medium";

const teamLeaders = [
  { num: "01", name: "Padmashree A M Gokhale (IAS)", period: "Founding Advisor & Visionary", role: "Conceived the NEPED participatory model" },
  { num: "02", name: "Shri. R Kevichusa (IAS)", period: "1995 – 2000", role: "Team Leader (Phase I Inception)" },
  { num: "03", name: "Shri. Khekiye K Sema (IAS)", period: "2000 – 2003", role: "Team Leader (Phase II Expansion)" },
  { num: "04", name: "Shri. Alemtemshi Jamir (IAS)", period: "2003 – 2006", role: "Team Leader (Agro-Value Chains)" },
  { num: "05", name: "Shri Temjen Toy (IAS)", period: "2007 – 2011", role: "Team Leader" },
  { num: "06", name: "Shri Raj K. Verma (NCS)", period: "2007 – 2012", role: "Team Leader / Deputy Leader" },
  { num: "07", name: "Shri. H. K. Khulu (IAS)", period: "2011 – 2012", role: "Team Leader" },
  { num: "08", name: "Shri. Amardeep S. Bhatia (IAS)", period: "2012 – 2013", role: "Team Leader" },
  { num: "09", name: "Late Menukhol John", period: "2013 – 2018", role: "Principal Secretary, Govt. of Nagaland" },
  { num: "10", name: "Shri. K. Libanthung Lotha (IAS)", period: "2018 – 2025", role: "Commissioner & Secretary" },
  { num: "11", name: "Shri. Kovi Meyase (NCS)", period: "2025 – Present", role: "Team Leader (Current Incumbent)" },
];

const presentPouMembers = [
  { name: "Dr. Kezevituo Metha", designation: "Project Operations Unit (POU) Member" },
  { name: "Dr. Savio Krocha", designation: "Project Operations Unit (POU) Member" },
  { name: "Shri. Asa Tep", designation: "Project Operations Unit (POU) Member" },
  { name: "Er. Renbenthung Humtsoe", designation: "Project Operations Unit (POU) Member" },
  { name: "Shri. Atheo Ezung", designation: "Project Operations Unit (POU) Member" },
  { name: "Er. Moamanen Imchen", designation: "Project Operations Unit (POU) Member" },
];

export function NepedEconomicPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    document.title = "NEPED — Heritage & Economic Development (1994–Present) • Master Archives";
  }, []);

  const categories = ["All", "Agroforestry", "Biodiversity & Climate", "Handicrafts & Livelihood", "Conservation"];

  const allProjects = loadAllProjects();
  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="theme-neped w-full space-y-20 sm:space-y-28 pb-4">
      {/* 1. FULL-BLEED HERO WITH NEPED LOGO & REGISTRATION NUMBERS */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/forest.png"
            alt="Nagaland Agroforestry Heritage"
            className="w-full h-full object-cover opacity-45 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/50" />
        </div>

        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-16 sm:pt-20 max-w-[660px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#b75928]" />
            <span className="text-[12px] uppercase tracking-[0.12px] text-[#e5e4e4]/90 font-mono">
              Foundational Heritage • Govt. of Nagaland (Est. 1994)
            </span>
          </div>
          <h1 className="text-[38px] sm:text-[58px] md:text-[64px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]">
            NEPED — Heritage & Ecology
          </h1>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#e5e4e4]/90 font-normal leading-relaxed">
            Nagaland Empowerment of People through Economic Development (NEPED) — 30+ years of pioneering community agroforestry, shifting cultivation transformation, women's land equity, and biodiversity conservation under the NEPeD umbrella.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <TextArrowButton to="#history" dark={true} variant="pill">
              Explore 30-Year History
            </TextArrowButton>
            <TextArrowButton to={NEPED_PATHS.projects} dark={true} variant="pill" className="bg-white/10 border-white/20 hover:bg-white/15">
              {allProjects.length} Official Projects Archive →
            </TextArrowButton>
          </div>
        </motion.div>

        {/* Bottom Bar with Official Registration Details */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-[8px] bg-white p-1.5 border border-white/20 flex items-center justify-center shrink-0">
              <img
                src="/NEPED Logo.jpg.jpeg"
                alt="NEPED Heritage & Economic Development Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <span className="text-[14px] font-medium text-[#ffffff] block">
                NEPED Society (Govt. of Nagaland)
              </span>
              <span className="text-[12px] text-[#8d8d8d] font-mono">
                Regd. NO. H/RS-4238 (19-04-2005) • Regd. NO. HOME/SRC-6751 (07-07-2014)
              </span>
            </div>
          </div>

          <div className="text-[12px] text-[#8d8d8d] max-w-md">
            Phase-I: <em>Nagaland Environment Protection and Economic Development through People's Action</em> (CIDA / ICEF)
          </div>
        </motion.div>
      </section>

      {/* 1B. ABOUT NEPED SOCIETY — ORIGIN, CHARTER & GOVERNANCE CULTURE */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[820px] space-y-5">
          <SectionPill>Origin & Charter</SectionPill>
          <h2 className={H2}>About the NEPED Society</h2>
          <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
            Formed by the Government of Nagaland in 1994 as an autonomous registered society, NEPED went on to implement <strong className="font-medium text-[#262626]">Nagaland's first foreign-aided project</strong> — the Indo-Canada Environment Facility (ICEF) programme, funded by the Canadian International Development Agency (CIDA). Its Phase-I project was originally titled <em>Nagaland Environment Protection and Economic Development through People's Action</em>; from Phase II onward, the acronym was retained under its present name, Nagaland Empowerment of People through Economic Development (NEPED). The Society's overall aim was envisaged as building strong resilience towards emerging climate change issues while bridging developmental gaps for economic empowerment statewide.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="bg-[#f5f5f5] rounded-[16px] p-7 sm:p-10">
            <LoraEditorialBlock author="NEPED Society Charter" role="Purpose of the Society">
              To care and manage issues linked with sustainable development for employment generation, utilizing the human resources of the state by coordinating with all developmental departments. The Society seeks and implements external funding related to environmental issues and poverty reduction — carrying out studies to identify major issues and generate technologies that promote sustainable use of natural resources and improved livelihood options.
            </LoraEditorialBlock>
          </div>

          <div className={`${DARK_CARD} p-7 sm:p-10 space-y-5`}>
            <div className={GLOW} />
            <div className="relative space-y-5">
              <SectionPill dark>Governance Culture & Reach</SectionPill>
              <p className="text-[15px] text-[#e5e4e4]/85 leading-relaxed">
                The Project Operations Unit (POU) forms the hub of NEPED — a team of versatile, dedicated professionals drawn from various government line departments, headed by a Team Leader who mandatorily holds Secretary-level rank and above. The Unit is advised and supported by a Project Steering Committee headed by the Chief Secretary, within an informal and highly conducive work culture that strongly supports innovation.
              </p>
              <p className="text-[15px] text-[#e5e4e4]/85 leading-relaxed pt-5 border-t border-white/10">
                Acting as a coordinating hub across the state's developmental departments, NEPED has amassed considerable credibility over three decades — serving as a <strong className="font-medium text-[#ffffff]">knowledge bank</strong> for researchers, government departments, and NGOs within India and beyond national borders.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. MILESTONES BY THE NUMBERS — dark green band with stat cards */}
      <section className="relative w-full">
        <div className="absolute inset-x-0 top-0 bottom-[120px] sm:bottom-[140px] bg-(--brand-surface)" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 sm:pt-28">
          <motion.div {...fadeUpOnView} className="max-w-[820px] mx-auto text-center flex flex-col items-center gap-6">
            <SectionPill dark>Milestones by the Numbers</SectionPill>
            <h2 className="text-[34px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              Transforming Nagaland's Rural Landscape
            </h2>
          </motion.div>

          <motion.div {...fadeUpOnView} className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { value: "7.8M+", label: "Economic Trees Planted", text: "Across 5,500 hectares in jhum fields with a 1:6 replication ratio." },
              { value: "1,794", label: "Test Agro-Plots", text: "Set up in 854 villages across all 8 districts covering all 16 Naga tribes." },
              { value: "30 Plots", label: "Women's Land Equity", text: "Purchased by Women SHGs, breaking customary barriers for first time in state history.", accent: true },
              { value: "1.5 Lakh", label: "Trees Saved / Year", text: "Through the indigenous NEPED-invented 'Foddorizer' pig feed boiler." },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[16px] p-7 flex flex-col justify-between gap-10 min-h-[240px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] ${
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

      {/* 3. IN-DEPTH 30-YEAR HISTORY & PHASES */}
      <motion.section {...fadeUpOnView} id="history" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6 space-y-10 sm:space-y-12">
        <div className="pb-8 sm:pb-10 border-b border-[#e5e4e4] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[760px] space-y-5">
            <SectionPill>01 / Chronicle of 30 Years</SectionPill>
            <h2 className={H2}>The Evolution of NEPED Society</h2>
          </div>
          <p className="text-[15px] text-[#666666] leading-relaxed max-w-md">
            Established in 1994 with multidisciplinary officers to bridge developmental gaps, empower village governance, and build climate resilience.
          </p>
        </div>

        {/* Shukla Commission Lead Quote */}
        <div className="bg-[#f5f5f5] rounded-[16px] p-7 sm:p-10">
          <LoraEditorialBlock
            author="Government of India (Shukla Commission Report, March 1997)"
            role="High-Level Commission on Transforming Northeast India"
          >
            “NEPED's potential for mapping, conserving, developing and exploiting the enormous bio-diversity of the Northeast marks it out as a critical lead programme. The necessary funding, manpower development and other support required for its careful evaluation and refinement for replication or adoption elsewhere in the Region must be made available.”
          </LoraEditorialBlock>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Phase I */}
          <div className={PHASE_CARD}>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[12px] font-mono text-[#8d8d8d]">1995 – 2000</span>
                <span className={PHASE_PILL}>Phase I • ICEF/CIDA</span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-light text-[#000000] tracking-[-0.4px] leading-tight">
                Agroforestry in Shifting Cultivation
              </h3>
              <p className="text-[14px] text-[#494949] leading-relaxed">
                Planted trees directly into traditional <em>jhum</em> (slash and burn) fields. Established 1,794 test plots (2 per village, 3 ha each) in 854 villages across 8 districts, planting 7.8 million economic trees. Over 7,000 farmers and 2,000 state officers received intensive capacity development.
              </p>
              <div className="p-4 bg-[#ffffff] rounded-[12px] text-[13px] text-[#262626] leading-relaxed">
                <strong className="font-medium">Key Method:</strong> Revived Traditional Knowledge Systems (TKS) through participatory "Search & Find" micro-planning.
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#e5e4e4] text-[11px] font-mono text-[#8d8d8d]">Phase I Inception</div>
          </div>

          {/* Phase II */}
          <div className={PHASE_CARD}>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[12px] font-mono text-[#8d8d8d]">2001 – 2006</span>
                <span className={PHASE_PILL}>Phase II • Micro-Credit</span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-light text-[#000000] tracking-[-0.4px] leading-tight">
                Self-Reliance & Women's Land Equity
              </h3>
              <p className="text-[14px] text-[#494949] leading-relaxed">
                Created micro-credit mechanisms shifting mindsets from subsidy dependency to self-reliant investment. Benefited 7,888 farmers with ₹825 crores in cash crops.
              </p>
              <div className="p-4 bg-(--brand-accent)/10 border border-(--brand-accent)/30 rounded-[12px] text-[13px] text-[#000000] leading-relaxed">
                <strong className="font-medium">Historic Breakthrough:</strong> Women's SHGs accessed village funds and purchased <strong className="font-medium">30 plots of land</strong>, breaking customary legal barriers for the first time in Nagaland history.
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#e5e4e4] text-[11px] font-mono text-[#8d8d8d]">Phase II Expansion</div>
          </div>

          {/* Phase III */}
          <div className={PHASE_CARD}>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[12px] font-mono text-[#8d8d8d]">2006 – 2012</span>
                <span className={PHASE_PILL}>Phase III • WDPSCA</span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-light text-[#000000] tracking-[-0.4px] leading-tight">
                Watersheds & Allied Vocations
              </h3>
              <p className="text-[14px] text-[#494949] leading-relaxed">
                Treated 17,930 hectares of arable and non-arable land with soil erosion control. Assisted 6,600 jhumias across a diverse menu of 12 livelihood trades.
              </p>
              <div className="p-4 bg-[#ffffff] rounded-[12px] text-[13px] text-[#262626] leading-relaxed">
                <strong className="font-medium">Vocation Menu:</strong> Piggery, poultry, goatery, rabbitry, apiculture, blacksmithing, carpentry, weaving, rice mills, fisheries, and wood carving.
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-[#e5e4e4] text-[11px] font-mono text-[#8d8d8d]">Phase III Consolidation</div>
          </div>
        </div>
      </motion.section>

      {/* 4. INNOVATIONS SPOTLIGHT: FODDORIZER, LSPs, & SACON BLYTH'S TRAGOPAN — dark green cards */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {/* Foddorizer & Livestock Innovation */}
          <div className={`${DARK_CARD} p-7 sm:p-10 flex flex-col justify-between`}>
            <div className={GLOW} />
            <div className="relative space-y-5">
              <SectionPill dark>Indigenous Hardware Innovation</SectionPill>
              <h3 className="text-[28px] sm:text-[34px] font-light text-[#ffffff] tracking-[-0.72px] leading-tight">
                The 'Foddorizer' & Livestock Service Providers (LSPs)
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 leading-relaxed">
                Assisted 4,200 resource-poor families with breeding stock, fattening stock, and low-cost scientific pig sties. To solve feed boiling and firewood depletion, NEPED designed and fabricated the <strong className="font-medium text-[#ffffff]">‘Foddorizer’</strong>:
              </p>
              <div className="space-y-3 text-[14px] text-[#e5e4e4]">
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <Check size={16} className="text-(--brand-accent-on-dark) shrink-0 mt-0.5" />
                  <span><strong className="font-medium text-[#ffffff]">1.5 Lakh Trees Saved Annually:</strong> Drastically cuts domestic firewood consumption for boiling animal feed.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <Check size={16} className="text-(--brand-accent-on-dark) shrink-0 mt-0.5" />
                  <span><strong className="font-medium text-[#ffffff]">LSP Veterinary Model:</strong> Village youth trained as Livestock Service Providers contained Classical Swine Fever (CSF), preventing millions in annual losses.</span>
                </div>
              </div>
            </div>
            <div className="relative pt-6 border-t border-white/10 mt-8 text-[11px] font-mono text-[#e5e4e4]/60">
              Supported by Navajbhai Ratan Tata Trust (NRTT) & State Plan
            </div>
          </div>

          {/* SACON & Community Conservation Areas */}
          <div className={`${DARK_CARD} p-7 sm:p-10 flex flex-col justify-between`}>
            <div className={GLOW} />
            <div className="relative space-y-5">
              <SectionPill dark>Community Conservation & SACON</SectionPill>
              <h3 className="text-[28px] sm:text-[34px] font-light text-[#ffffff] tracking-[-0.72px] leading-tight">
                Community Conservation Areas (CCAs) & Blyth's Tragopan
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 leading-relaxed">
                In collaboration with the <strong className="font-medium text-[#ffffff]">Salim Ali Center for Ornithology & Natural History (SACON)</strong> and Sir Dorabji Tata Trust, NEPED guided Village Councils in passing resolutions to restrict hunting, fishing, and logging:
              </p>
              <div className="space-y-3 text-[14px] text-[#e5e4e4]">
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent-on-dark) shrink-0">1.</span>
                  <span>Developing legally protected <strong className="font-medium text-[#ffffff]">People's Biodiversity Registers (PBRs)</strong> and resource maps.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent-on-dark) shrink-0">2.</span>
                  <span>Documentation of <strong className="font-medium text-[#ffffff]">Indigenous Ecological Knowledge (IEK)</strong>.</span>
                </div>
                <div className={`${GLASS_ROW} flex items-start gap-3`}>
                  <span className="font-mono text-(--brand-accent-on-dark) shrink-0">3.</span>
                  <span>Using <strong className="font-medium text-[#ffffff]">Blyth’s Tragopan</strong> (State Bird of Nagaland) as the flagship conservation umbrella species.</span>
                </div>
              </div>
            </div>
            <div className="relative pt-6 border-t border-white/10 mt-8 text-[11px] font-mono text-[#e5e4e4]/60">
              Sir Dorabji Ratan Tata Trust (SDTT) • NEPED-SCEN
            </div>
          </div>
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
            <NumberedTextCard key={aim.title} icon={aim.icon} index={idx} title={aim.title} text={aim.text} />
          ))}
        </div>
      </motion.section>

      {/* 6. ORGANIZATIONAL STRUCTURE — dark green panel with glass tiers */}
      <motion.section {...fadeUpOnView} id="structure" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className={`${DARK_CARD} rounded-[24px] px-5 py-12 sm:px-12 sm:py-16`}>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-(--brand-accent-on-dark)/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-[720px] mx-auto text-center flex flex-col items-center gap-5 mb-10 sm:mb-12">
            <SectionPill dark>Governance Architecture</SectionPill>
            <h2 className="text-[30px] sm:text-[44px] font-light text-[#ffffff] tracking-[-1px] leading-[1.1]">
              NEPED Organizational Structure
            </h2>
            <p className="text-[15px] text-[#e5e4e4]/80 leading-relaxed">
              A streamlined hierarchical and participatory governance model linking apex state leadership with grassroots village councils.
            </p>
          </div>

          <div className="relative space-y-3 max-w-3xl mx-auto">
            <div className={`${GLASS_TIER}`}>
              <span className="text-[11px] font-mono text-[#e5e4e4]/60 uppercase block">Apex Authority</span>
              <span className="text-[16px] sm:text-[17px] text-[#ffffff]">Chief Minister of Nagaland</span>
            </div>
            <TierArrow />
            <div className={`${GLASS_TIER}`}>
              <span className="text-[11px] font-mono text-[#e5e4e4]/60 uppercase block">Administrative Head</span>
              <span className="text-[16px] sm:text-[17px] text-[#ffffff]">Chief Secretary, Govt. of Nagaland</span>
            </div>
            <TierArrow />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`${GLASS_TIER}`}>
                <span className="text-[11px] font-mono text-[#e5e4e4]/60 uppercase block">Executive Director</span>
                <span className="text-[15px] sm:text-[16px] text-[#ffffff]">APC / Mission Director</span>
              </div>
              <div className={`${GLASS_TIER} bg-white/[0.12]`}>
                <span className="text-[11px] font-mono text-[#e5e4e4]/60 uppercase block">Advisory Body</span>
                <span className="text-[15px] sm:text-[16px] text-[#ffffff]">Project Steering Committee (PSC)</span>
              </div>
            </div>
            <TierArrow />
            <div className={`${GLASS_TIER} border-(--brand-accent-on-dark)/50`}>
              <span className="text-[11px] font-mono text-(--brand-accent-on-dark) uppercase block">Operational Head</span>
              <span className="text-[16px] sm:text-[17px] text-[#ffffff]">Team Leader (Secretary Level & Above)</span>
            </div>
            <TierArrow />
            <div className={`${GLASS_TIER}`}>
              <span className="text-[11px] font-mono text-[#e5e4e4]/60 uppercase block">Multidisciplinary Officers</span>
              <span className="text-[16px] sm:text-[17px] text-[#ffffff]">Project Operations Unit (POU) Members</span>
            </div>
            <TierArrow />
            <div className="p-5 sm:p-6 bg-[#ffffff] text-[#000000] rounded-[16px] text-center">
              <span className="text-[11px] font-mono text-[#666666] uppercase block">Grassroots Partners</span>
              <span className="text-[14px] sm:text-[15px] block mt-1 leading-relaxed">
                Village Councils • Village Development Boards (VDBs) • Farmers • NGOs • Women Groups • SHGs • Youth • Local Entrepreneurs
              </span>
            </div>
          </div>
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
            <ArrowPillButton to={NEPED_PATHS.projects} variant="outline">Open Fullscreen Dedicated Projects Archive</ArrowPillButton>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#f5f5f5] p-1.5 rounded-[20px] lg:max-w-[460px]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[1584px] text-[13px] font-medium transition-all cursor-pointer ${
                  activeCategory === cat ? "bg-(--brand-accent) text-[#ffffff]" : "text-[#494949] hover:text-[#000000] hover:bg-[#ffffff]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.id}
              to={NEPED_PATHS.project(proj.slug)}
              className="group bg-[#f5f5f5] rounded-[16px] overflow-hidden flex flex-col border border-transparent hover:border-[#e5e4e4] transition-colors"
            >
              <div className="relative m-2.5 mb-0 aspect-[16/9] rounded-[12px] overflow-hidden bg-[#1c1c1c]">
                <img
                  src={proj.heroImage}
                  alt={proj.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/70 via-transparent to-[#070707]/20" />
                <span className="absolute left-3 top-3 rounded-[1584px] border border-white/25 bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase text-[#ffffff]">
                  {proj.phase}
                </span>
                <span className="absolute right-3 top-3 max-w-[55%] truncate rounded-[1584px] border border-white/25 bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase text-[#ffffff]">
                  {proj.category}
                </span>
                <span className="absolute left-3 bottom-3 text-[11px] font-mono text-[#ffffff]/85 uppercase">{proj.period}</span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col gap-4">
                <h3 className="text-[18px] sm:text-[20px] font-light leading-snug text-[#000000] tracking-[-0.3px]">{proj.name}</h3>
                {proj.objective ? (
                  <p className="text-[14px] leading-relaxed text-[#666666] line-clamp-4 flex-1">{proj.objective}</p>
                ) : (
                  <p className="text-[14px] italic leading-relaxed text-[#8d8d8d] flex-1">
                    No objective statement recorded in the source register for this project.
                  </p>
                )}
                <div className="pt-4 border-t border-[#e5e4e4] text-[13px]">
                  <span className="font-mono uppercase tracking-wider text-[10px] text-[#8d8d8d] block">Funding Agency</span>
                  <span className="text-[#262626]">{proj.fundingAgency}</span>
                </div>
                <div className="flex items-center justify-between text-[14px] font-medium text-[#000000]">
                  <span>View Project Record</span>
                  <span className="w-9 h-9 rounded-full bg-(--brand-accent) text-[#ffffff] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* 8. TEAM LEADERS & PRESENT POU MEMBERS */}
      <motion.section {...fadeUpOnView} id="team" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] space-y-5">
          <SectionPill>04 / Institutional Leadership</SectionPill>
          <h2 className={H2}>Team Leaders & Present Members</h2>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Complete 11 Team Leaders Roll */}
          <div className="lg:col-span-7 bg-[#f5f5f5] rounded-[16px] p-7 sm:p-10 space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block">1995 – Present</span>
              <h3 className="text-[26px] sm:text-[30px] font-light text-[#000000] tracking-[-0.5px] mt-1">Honor Roll of Team Leaders</h3>
            </div>
            <div className="space-y-1">
              {teamLeaders.map((lead) => (
                <div
                  key={lead.name}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e5e4e4] last:border-0 py-3 gap-1"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[11px] font-mono text-[#8d8d8d] w-5 shrink-0">{lead.num}</span>
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] text-[#000000]">{lead.name}</h4>
                      <p className="text-[13px] text-[#666666]">{lead.role}</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-mono text-[#8d8d8d] pl-8 sm:pl-0 shrink-0">{lead.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Present POU Members + current team leader */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[16px] p-7 sm:p-8 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block">Current Incumbents</span>
                <h3 className="text-[26px] sm:text-[30px] font-light text-[#000000] tracking-[-0.5px] mt-1">Present POU Members</h3>
              </div>
              <div className="space-y-2.5">
                {presentPouMembers.map((member, idx) => (
                  <div key={member.name} className="p-4 bg-[#f5f5f5] rounded-[12px] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[15px] text-[#000000] block">{member.name}</span>
                      <span className="text-[12px] text-[#8d8d8d]">{member.designation}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8d8d8d]">0{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${DARK_CARD} p-7 space-y-3`}>
              <div className={GLOW} />
              <span className="relative block text-[11px] uppercase tracking-wider text-(--brand-accent-on-dark) font-mono">
                Current Team Leader (2025 – Present)
              </span>
              <h4 className="relative text-[22px] sm:text-[24px] font-light text-[#ffffff]">Shri. Kovi Meyase (NCS)</h4>
              <p className="relative text-[14px] text-[#e5e4e4]/80 leading-relaxed">
                Leading the multidisciplinary unit in advancing community agroforestry, KfW German Development Bank biodiversity partnerships, and sustainable livelihoods.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. THE EVOLUTIONARY BRIDGE: NEPED → NEPeD — NEPeD CTA style, in NEPeD colours */}
      <motion.section {...fadeUpOnView} className="theme-neped-energy mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative rounded-[24px] overflow-hidden bg-(--brand-surface) px-6 py-16 sm:px-12 sm:py-20 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-(--brand-accent)/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-[820px] mx-auto flex flex-col items-center gap-6">
            <SectionPill dark>The Energy Nexus • 108 Hydrogers Deployed</SectionPill>
            <h2 className="text-[30px] sm:text-[48px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
              From NEPED Agroforestry to NEPeD Clean Energy
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#e5e4e4]/85 leading-relaxed max-w-[680px]">
              As agro-enterprises expanded across Nagaland, the emerging need was clean, affordable energy to power post-harvest processing, mechanical grain mills, and cold storage to enable Naga farmers to compete globally.
            </p>
            <p className="text-[15px] text-[#e5e4e4]/75 leading-relaxed font-serif italic max-w-[680px]">
              “This direct requirement gave birth to <strong className="font-medium not-italic text-[#ffffff]">NEPeD Energy Division</strong> in 2007, which has now installed 108 indigenous hydrogers across remote mountain rivers.”
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <ArrowPillButton to={NEPED_ENERGY_PATHS.home} arrow="up-right">Explore NEPeD Energy Portal</ArrowPillButton>
              <ArrowPillButton to={NEPED_ENERGY_PATHS.technology} variant="link">Hydroger Technology & Specs</ArrowPillButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function TierArrow() {
  return (
    <div className="flex justify-center">
      <span className="w-8 h-8 rounded-full bg-white/10 text-[#e5e4e4]/70 flex items-center justify-center">
        <ArrowDown size={14} />
      </span>
    </div>
  );
}
