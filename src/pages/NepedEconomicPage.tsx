import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SectionLabel,
  SectionHeading,
  TextArrowButton,
  NumberedItem,
  PillBadge,
  LoraEditorialBlock,
} from "@/components/ui/AkerPrimitives";
import { loadAllProjects } from "@/lib/contentLoader";
import { fadeUpOnView } from "@/lib/motionVariants";

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
    <div className="w-full space-y-20 sm:space-y-28">
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
            <TextArrowButton to="/projects" dark={true} variant="pill" className="bg-white/10 border-white/20 hover:bg-white/15">
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

      {/* 1B. ABOUT NEPED SOCIETY — ORIGIN, CHARTER & GOVERNANCE CULTURE (From NEPED PDF & History PDF) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8 max-w-[720px]">
          <SectionLabel>Origin & Charter</SectionLabel>
          <SectionHeading size="md" className="mt-1">
            About the NEPED Society
          </SectionHeading>
          <p className="text-[15px] text-[#666666] leading-relaxed mt-4">
            Formed by the Government of Nagaland in 1994 as an autonomous registered society, NEPED went on to implement <strong>Nagaland's first foreign-aided project</strong> — the Indo-Canada Environment Facility (ICEF) programme, funded by the Canadian International Development Agency (CIDA). Its Phase-I project was originally titled <em>Nagaland Environment Protection and Economic Development through People's Action</em>; from Phase II onward, the acronym was retained under its present name, Nagaland Empowerment of People through Economic Development (NEPED). The Society's overall aim was envisaged as building strong resilience towards emerging climate change issues while bridging developmental gaps for economic empowerment statewide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#e5e4e4]/30 border border-[#e5e4e4] rounded-[8px] p-8 sm:p-10">
            <LoraEditorialBlock author="NEPED Society Charter" role="Purpose of the Society">
              To care and manage issues linked with sustainable development for employment generation, utilizing the human resources of the state by coordinating with all developmental departments. The Society seeks and implements external funding related to environmental issues and poverty reduction — carrying out studies to identify major issues and generate technologies that promote sustainable use of natural resources and improved livelihood options.
            </LoraEditorialBlock>
          </div>

          <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-10 space-y-4">
            <SectionLabel dark={true} className="text-[#b75928]">
              Governance Culture & Reach
            </SectionLabel>
            <p className="text-[14px] text-[#e5e4e4]/85 leading-relaxed">
              The Project Operations Unit (POU) forms the hub of NEPED — a team of versatile, dedicated professionals drawn from various government line departments, headed by a Team Leader who mandatorily holds Secretary-level rank and above. The Unit is advised and supported by a Project Steering Committee headed by the Chief Secretary, within an informal and highly conducive work culture that strongly supports innovation.
            </p>
            <p className="text-[14px] text-[#e5e4e4]/85 leading-relaxed pt-3 border-t border-white/10">
              Acting as a coordinating hub across the state's developmental departments, NEPED has amassed considerable credibility over three decades — serving as a <strong>knowledge bank</strong> for researchers, government departments, and NGOs within India and beyond national borders.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 2. HISTORICAL NUMERICAL IMPACT MATRIX (From PDF) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border border-[#e5e4e4] rounded-[8px] bg-[#ffffff] p-6 sm:p-10">
          <div className="mb-6">
            <SectionLabel>Milestones by the Numbers</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Transforming Nagaland's Rural Landscape
            </SectionHeading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-4 border-t border-[#e5e4e4]">
            <div className="space-y-1">
              <span className="text-[32px] sm:text-[40px] font-light text-[#000000] tracking-tight block">
                7.8M+
              </span>
              <span className="text-[12px] uppercase font-mono text-[#8d8d8d] block">
                Economic Trees Planted
              </span>
              <p className="text-[12px] text-[#666666]">
                Across 5,500 hectares in jhum fields with a 1:6 replication ratio.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[32px] sm:text-[40px] font-light text-[#000000] tracking-tight block">
                1,794
              </span>
              <span className="text-[12px] uppercase font-mono text-[#8d8d8d] block">
                Test Agro-Plots
              </span>
              <p className="text-[12px] text-[#666666]">
                Set up in 854 villages across all 8 districts covering all 16 Naga tribes.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[32px] sm:text-[40px] font-light text-[#000000] tracking-tight block">
                30 Plots
              </span>
              <span className="text-[12px] uppercase font-mono text-[#b75928] block font-semibold">
                Women's Land Equity
              </span>
              <p className="text-[12px] text-[#666666]">
                Purchased by Women SHGs, breaking customary barriers for first time in state history.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[32px] sm:text-[40px] font-light text-[#000000] tracking-tight block">
                1.5 Lakh
              </span>
              <span className="text-[12px] uppercase font-mono text-[#8d8d8d] block">
                Trees Saved / Year
              </span>
              <p className="text-[12px] text-[#666666]">
                Through the indigenous NEPED-invented 'Foddorizer' pig feed boiler.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. IN-DEPTH 30-YEAR HISTORY & PHASES (From History PDF) */}
      <motion.section {...fadeUpOnView} id="history" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#e5e4e4] pb-6">
          <div>
            <SectionLabel>01 / Chronicle of 30 Years</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              The Evolution of NEPED Society
            </SectionHeading>
          </div>
          <p className="text-[14px] text-[#666666] max-w-md">
            Established in 1994 with multidisciplinary officers to bridge developmental gaps, empower village governance, and build climate resilience.
          </p>
        </div>

        {/* Shukla Commission Lead Quote */}
        <LoraEditorialBlock
          author="Government of India (Shukla Commission Report, March 1997)"
          role="High-Level Commission on Transforming Northeast India"
        >
          “NEPED's potential for mapping, conserving, developing and exploiting the enormous bio-diversity of the Northeast marks it out as a critical lead programme. The necessary funding, manpower development and other support required for its careful evaluation and refinement for replication or adoption elsewhere in the Region must be made available.”
        </LoraEditorialBlock>

        {/* Phase Timeline Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase I */}
          <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#000000] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8d8d8d]">1995 – 2000</span>
                <PillBadge>Phase I • ICEF/CIDA</PillBadge>
              </div>
              <h3 className="text-[20px] font-medium text-[#000000] tracking-tight">
                Agroforestry in Shifting Cultivation
              </h3>
              <p className="text-[13px] text-[#494949] leading-relaxed">
                Planted trees directly into traditional <em>jhum</em> (slash and burn) fields. Established 1,794 test plots (2 per village, 3 ha each) in 854 villages across 8 districts, planting 7.8 million economic trees. Over 7,000 farmers and 2,000 state officers received intensive capacity development.
              </p>
              <div className="p-3 bg-[#e5e4e4]/30 rounded-[6px] text-[12px] text-[#262626]">
                <strong>Key Method:</strong> Revived Traditional Knowledge Systems (TKS) through participatory "Search & Find" micro-planning.
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#e5e4e4] text-[11px] font-mono text-[#8d8d8d]">
              Phase I Inception
            </div>
          </div>

          {/* Phase II */}
          <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#000000] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8d8d8d]">2001 – 2006</span>
                <PillBadge>Phase II • Micro-Credit</PillBadge>
              </div>
              <h3 className="text-[20px] font-medium text-[#000000] tracking-tight">
                Self-Reliance & Women's Land Equity
              </h3>
              <p className="text-[13px] text-[#494949] leading-relaxed">
                Created micro-credit mechanisms shifting mindsets from subsidy dependency to self-reliant investment. Benefited 7,888 farmers with ₹825 crores in cash crops.
              </p>
              <div className="p-3 bg-[#b75928]/10 border border-[#b75928]/30 rounded-[6px] text-[12px] text-[#000000]">
                <strong>Historic Breakthrough:</strong> Women's SHGs accessed village funds and purchased <strong>30 plots of land</strong>, breaking customary legal barriers for the first time in Nagaland history.
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#e5e4e4] text-[11px] font-mono text-[#8d8d8d]">
              Phase II Expansion
            </div>
          </div>

          {/* Phase III */}
          <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#000000] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8d8d8d]">2006 – 2012</span>
                <PillBadge>Phase III • WDPSCA</PillBadge>
              </div>
              <h3 className="text-[20px] font-medium text-[#000000] tracking-tight">
                Watersheds & Allied Vocations
              </h3>
              <p className="text-[13px] text-[#494949] leading-relaxed">
                Treated 17,930 hectares of arable and non-arable land with soil erosion control. Assisted 6,600 jhumias across a diverse menu of 12 livelihood trades.
              </p>
              <div className="p-3 bg-[#e5e4e4]/30 rounded-[6px] text-[12px] text-[#262626]">
                <strong>Vocation Menu:</strong> Piggery, poultry, goatery, rabbitry, apiculture, blacksmithing, carpentry, weaving, rice mills, fisheries, and wood carving.
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#e5e4e4] text-[11px] font-mono text-[#8d8d8d]">
              Phase III Consolidation
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. INNOVATIONS SPOTLIGHT: FODDORIZER, LSPs, & SACON BLYTH'S TRAGOPAN */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Foddorizer & Livestock Innovation */}
          <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <SectionLabel dark={true} className="text-[#b75928]">
                Indigenous Hardware Innovation
              </SectionLabel>
              <h3 className="text-[26px] sm:text-[32px] font-light text-[#ffffff] tracking-tight">
                The 'Foddorizer' & Livestock Service Providers (LSPs)
              </h3>
              <p className="text-[14px] text-[#e5e4e4]/80 leading-relaxed">
                Assisted 4,200 resource-poor families with breeding stock, fattening stock, and low-cost scientific pig sties. To solve feed boiling and firewood depletion, NEPED designed and fabricated the <strong>‘Foddorizer’</strong>:
              </p>
              <div className="space-y-2 text-[13px] text-[#e5e4e4]">
                <div className="flex items-start gap-2">
                  <span className="text-[#b75928] font-bold">✓</span>
                  <span><strong>1.5 Lakh Trees Saved Annually:</strong> Drastically cuts domestic firewood consumption for boiling animal feed.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#b75928] font-bold">✓</span>
                  <span><strong>LSP Veterinary Model:</strong> Village youth trained as Livestock Service Providers contained Classical Swine Fever (CSF), preventing millions in annual losses.</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 text-[11px] font-mono text-[#8d8d8d]">
              Supported by Navajbhai Ratan Tata Trust (NRTT) & State Plan
            </div>
          </div>

          {/* SACON & Community Conservation Areas */}
          <div className="bg-[#193f32] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <SectionLabel dark={true} className="text-[#e5e4e4]">
                Community Conservation & SACON
              </SectionLabel>
              <h3 className="text-[26px] sm:text-[32px] font-light text-[#ffffff] tracking-tight">
                Community Conservation Areas (CCAs) & Blyth's Tragopan
              </h3>
              <p className="text-[14px] text-[#e5e4e4]/80 leading-relaxed">
                In collaboration with the <strong>Salim Ali Center for Ornithology & Natural History (SACON)</strong> and Sir Dorabji Tata Trust, NEPED guided Village Councils in passing resolutions to restrict hunting, fishing, and logging:
              </p>
              <div className="space-y-1.5 text-[12px] text-[#e5e4e4]/90">
                <div className="flex items-start gap-2">
                  <span className="text-[#e5e4e4] font-bold">1.</span>
                  <span>Developing legally protected <strong>People's Biodiversity Registers (PBRs)</strong> and resource maps.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#e5e4e4] font-bold">2.</span>
                  <span>Documentation of <strong>Indigenous Ecological Knowledge (IEK)</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#e5e4e4] font-bold">3.</span>
                  <span>Using <strong>Blyth’s Tragopan</strong> (State Bird of Nagaland) as the flagship conservation umbrella species.</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 text-[11px] font-mono text-[#e5e4e4]/70">
              Sir Dorabji Ratan Tata Trust (SDTT) • NEPED-SCEN
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. SEVEN OFFICIAL AIMS & OBJECTIVES */}
      <motion.section {...fadeUpOnView} id="aims" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8">
          <SectionLabel>02 / Official Objectives</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Core Aims & Objectives of NEPED
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <p className="text-[15px] text-[#666666] leading-relaxed">
              These 7 core mandates guide every project implemented by NEPED — shifting the state from subsidy dependence toward self-sustaining community investment.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-1">
            <NumberedItem
              num="01"
              title="Enhance Financial Incomes Through Livelihood Activities"
              subtitle="Diversifying agro-forestry and farm enterprise models to generate steady rural cash flows."
            />
            <NumberedItem
              num="02"
              title="Create Opportunities for Self-Employment"
              subtitle="Empowering youth and village entrepreneurs in sustainable agri-business and forest products."
            />
            <NumberedItem
              num="03"
              title="Enhance Capacities of Local Entrepreneurs"
              subtitle="Providing technical training, packaging, quality control, and business scaling guidance."
            />
            <NumberedItem
              num="04"
              title="Establish Viable Market Linkages"
              subtitle="Connecting Naga produce and unique ethnic handicrafts directly with regional and national buyers."
            />
            <NumberedItem
              num="05"
              title="Encourage Thrift Savings Amongst Farmers & SHGs"
              subtitle="Fostering micro-credit revolving funds and community financial discipline."
            />
            <NumberedItem
              num="06"
              title="Transform Mindsets: From Subsidy-Dependent to Self-Dependent Investment"
              subtitle="Instilling community ownership where villages invest in their own long-term assets."
            />
            <NumberedItem
              num="07"
              title="Sustained Community Biodiversity Conservation"
              subtitle="Ensuring that all economic activities directly protect Nagaland's rich botanical and wildlife ecosystems."
            />
          </div>
        </div>
      </motion.section>

      {/* 6. ORGANIZATIONAL STRUCTURE */}
      <motion.section {...fadeUpOnView} id="structure" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-xl mb-10">
            <SectionLabel dark={true} className="text-[#b75928]">
              Governance Architecture
            </SectionLabel>
            <h3 className="text-[32px] sm:text-[40px] font-light text-[#ffffff] tracking-[-0.72px] mt-2">
              NEPED Organizational Structure
            </h3>
            <p className="text-[14px] text-[#e5e4e4]/80 mt-2 leading-relaxed">
              A streamlined hierarchical and participatory governance model linking apex state leadership with grassroots village councils.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Level 1: Chief Minister */}
            <div className="p-4 bg-[#262626] border border-white/10 rounded-[6px] text-center">
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase block">Apex Authority</span>
              <span className="text-[16px] font-medium text-[#ffffff]">Chief Minister of Nagaland</span>
            </div>

            <div className="text-center text-[#8d8d8d] text-[16px]">↓</div>

            {/* Level 2: Chief Secretary */}
            <div className="p-4 bg-[#262626] border border-white/10 rounded-[6px] text-center">
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase block">Administrative Head</span>
              <span className="text-[16px] font-medium text-[#ffffff]">Chief Secretary, Govt. of Nagaland</span>
            </div>

            <div className="text-center text-[#8d8d8d] text-[16px]">↓</div>

            {/* Level 3: APC & Project Steering Committee */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#262626] border border-white/10 rounded-[6px] text-center">
                <span className="text-[11px] font-mono text-[#8d8d8d] uppercase block">Executive Director</span>
                <span className="text-[15px] font-medium text-[#ffffff]">APC / Mission Director</span>
              </div>
              <div className="p-4 bg-[#776157]/40 border border-white/10 rounded-[6px] text-center">
                <span className="text-[11px] font-mono text-[#e5e4e4]/70 uppercase block">Advisory Body</span>
                <span className="text-[15px] font-medium text-[#ffffff]">Project Steering Committee (PSC)</span>
              </div>
            </div>

            <div className="text-center text-[#8d8d8d] text-[16px]">↓</div>

            {/* Level 4: Team Leader */}
            <div className="p-4 bg-[#262626] border border-[#b75928]/40 rounded-[6px] text-center">
              <span className="text-[11px] font-mono text-[#b75928] uppercase block">Operational Head</span>
              <span className="text-[16px] font-medium text-[#ffffff]">Team Leader (Secretary Level & Above)</span>
            </div>

            <div className="text-center text-[#8d8d8d] text-[16px]">↓</div>

            {/* Level 5: POU */}
            <div className="p-4 bg-[#262626] border border-white/10 rounded-[6px] text-center">
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase block">Multidisciplinary Officers</span>
              <span className="text-[16px] font-medium text-[#ffffff]">Project Operations Unit (POU) Members</span>
            </div>

            <div className="text-center text-[#8d8d8d] text-[16px]">↓</div>

            {/* Level 6: Community Base */}
            <div className="p-5 bg-[#ffffff] text-[#000000] rounded-[6px] text-center">
              <span className="text-[11px] font-mono text-[#666666] uppercase block">Grassroots Partners</span>
              <span className="text-[14px] font-medium block mt-1">
                Village Councils • Village Development Boards (VDBs) • Farmers • NGOs • Women Groups • SHGs • Youth • Local Entrepreneurs
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. PROJECTS ARCHIVE */}
      <motion.section {...fadeUpOnView} id="projects" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#e5e4e4] pb-6 mb-8">
          <div>
            <SectionLabel>Official Project Archive</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              Projects Implemented Under NEPED
            </SectionHeading>
            <p className="text-[14px] text-[#666666] mt-2">
              Comprehensive registry of {allProjects.length} landmark projects across international, national, and state funding agencies.
            </p>
            <div className="mt-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[12.5px] font-medium text-[#b75928] hover:text-[#000000] transition-colors"
              >
                <span>Open Fullscreen Dedicated Projects Archive</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[1584px] text-[12px] font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#1c1c1c] text-[#ffffff]"
                    : "bg-[#e5e4e4]/60 text-[#000000] hover:bg-[#e5e4e4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid — same glassmorphic dark-card language as the homepage hero spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.id}
              to={`/neped-economic/project/${proj.slug}`}
              className="group rounded-[8px] border border-[#1c1c1c]/10 bg-[#070707] shadow-lg shadow-black/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Image banner with project tag + period */}
              <div className="relative h-[110px] overflow-hidden bg-[#1c1c1c]">
                <img
                  src={proj.heroImage}
                  alt={proj.name}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/20 to-transparent" />
                <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
                  <span className="rounded-[80px] border border-white/20 bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.12px] text-[#ffffff]">
                    {proj.phase}
                  </span>
                </div>
                <div className="absolute right-3.5 top-3.5">
                  <PillBadge dark={true}>{proj.category}</PillBadge>
                </div>
                <div className="absolute left-3.5 bottom-3 text-[10px] font-mono text-[#e5e4e4]/70 uppercase">
                  {proj.period}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col">
                <h3 className="text-[16px] sm:text-[17px] font-light leading-[1.25] text-[#ffffff] tracking-[-0.2px]">
                  {proj.name}
                </h3>

                {proj.objective ? (
                  <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#e5e4e4]/75 line-clamp-4 flex-1">
                    {proj.objective}
                  </p>
                ) : (
                  <p className="text-[12.5px] italic leading-relaxed text-[#8d8d8d] flex-1">
                    No objective statement recorded in the source register for this project.
                  </p>
                )}

                <div className="pt-3 border-t border-white/10 text-[11px] text-[#8d8d8d]">
                  <span className="font-mono uppercase tracking-wider text-[10px] text-[#8d8d8d]/80 block">
                    Funding Agency
                  </span>
                  <span className="text-[#e5e4e4]/90">{proj.fundingAgency}</span>
                </div>

                <div className="pt-1 flex items-center justify-between text-[12px] sm:text-[13px] text-[#ffffff] group-hover:text-[#b75928] transition-colors">
                  <span className="font-medium">View Project Record</span>
                  <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* 8. TEAM LEADERS & PRESENT POU MEMBERS */}
      <motion.section {...fadeUpOnView} id="team" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-10">
          <SectionLabel>04 / Institutional Leadership</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Team Leaders & Present Members
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Complete 11 Team Leaders Roll */}
          <div className="lg:col-span-7 bg-[#e5e4e4]/30 border border-[#e5e4e4] rounded-[8px] p-8 space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block">1995 – Present</span>
              <h3 className="text-[26px] font-light text-[#000000] tracking-[-0.5px] mt-1">
                Honor Roll of Team Leaders
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {teamLeaders.map((lead) => (
                <div
                  key={lead.name}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e5e4e4] pb-3 gap-1"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[11px] font-mono text-[#8d8d8d] w-5 shrink-0">{lead.num}</span>
                    <div>
                      <h4 className="text-[15px] font-medium text-[#000000]">{lead.name}</h4>
                      <p className="text-[12px] text-[#666666]">{lead.role}</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-mono text-[#8d8d8d] pl-8 sm:pl-0">{lead.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Present POU Members */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-8 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#8d8d8d] block">Current Incumbents</span>
                <h3 className="text-[26px] font-light text-[#000000] tracking-[-0.5px] mt-1">
                  Present POU Members
                </h3>
              </div>

              <div className="space-y-3">
                {presentPouMembers.map((member, idx) => (
                  <div
                    key={member.name}
                    className="p-3.5 bg-[#e5e4e4]/30 rounded-[6px] border border-[#e5e4e4] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[14px] font-medium text-[#000000] block">
                        {member.name}
                      </span>
                      <span className="text-[11px] text-[#8d8d8d]">
                        {member.designation}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8d8d8d]">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Team Leader Highlight */}
            <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-6 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#b75928] font-mono">
                Current Team Leader (2025 – Present)
              </span>
              <h4 className="text-[20px] font-light text-[#ffffff]">
                Shri. Kovi Meyase (NCS)
              </h4>
              <p className="text-[13px] text-[#e5e4e4]/80 leading-relaxed">
                Leading the multidisciplinary unit in advancing community agroforestry, KfW German Development Bank biodiversity partnerships, and sustainable livelihoods.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. THE EVOLUTIONARY BRIDGE: HOW NEPED HERITAGE GAVE RISE TO NEPeD CLEAN ENERGY */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#002934] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <SectionLabel dark={true} className="text-[#e5e4e4]">
              The Energy Nexus • 108 Hydrogers Deployed
            </SectionLabel>
            <h3 className="text-[30px] sm:text-[38px] font-light text-[#ffffff] tracking-[-0.72px] leading-tight">
              From NEPED Agroforestry to NEPeD Clean Energy
            </h3>
            <p className="text-[15px] text-[#e5e4e4]/90 leading-relaxed">
              As agro-enterprises expanded across Nagaland, the emerging need was clean, affordable energy to power post-harvest processing, mechanical grain mills, and cold storage to enable Naga farmers to compete globally.
            </p>
            <p className="text-[14px] text-[#e5e4e4]/80 leading-relaxed font-serif italic">
              “This direct requirement gave birth to <strong>NEPeD Energy Division</strong> in 2007, which has now installed 108 indigenous hydrogers across remote mountain rivers.”
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <TextArrowButton to="/" dark={true} variant="pill">
                Explore NEPeD Energy Portal
              </TextArrowButton>
              <TextArrowButton to="/technology" dark={true} variant="inline">
                Hydroger Technology & Specs →
              </TextArrowButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
