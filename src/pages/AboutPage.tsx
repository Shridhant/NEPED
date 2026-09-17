import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
  NumberedItem,
} from "@/components/ui/AkerPrimitives";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export function AboutPage() {
  useEffect(() => {
    document.title = "About NEPED — History, Vision & Leadership";
  }, []);

  const presentTeam: TeamMember[] = [
    {
      id: "1",
      name: "Atheo Ezung",
      role: "POU Member",
      image: "/POU/Atheo Ezung - POU member.jpg.jpeg",
    },
    {
      id: "2",
      name: "Asa Tep",
      role: "POU Member",
      image: "/POU/Asa Tep - POU member.jpg.jpeg",
    },
    {
      id: "3",
      name: "Dr. Kezevituo Metha",
      role: "POU Member",
      image: "/POU/Dr. Kezevituo Metha - POU member.jpg.jpeg",
    },
    {
      id: "4",
      name: "Dr. Savio Krocha",
      role: "POU Member",
      image: "/POU/Dr. Savio Krocha - POU member.jpg.jpeg",
    },
    {
      id: "5",
      name: "Er. Renbenthung Humtsoe",
      role: "POU Member",
      image: "/POU/Er. Renbenthung Humtsoe - POU member.jpg.jpeg",
    },
    {
      id: "6",
      name: "Er. Moamanen Imchen",
      role: "POU Member",
      image: "/POU/Er. Moamanen Imchen - POU member.jpg.jpeg",
    },
  ];

  const inceptionTeam = [
    { name: "Mr. Temjen Toy (IAS)", role: "Team Leader" },
    { name: "Lt. Mr. Raj K. Verma (NCS)", role: "Deputy Team Leader" },
    { name: "Lt. Er. Shanchothung Odyuo", role: "POU Member" },
    { name: "Mr. Ari Jamir", role: "POU Member" },
    { name: "Mr. Mingthungo Ezung", role: "POU Member" },
    { name: "Ms. Ayong Chang", role: "POU Member" },
    { name: "Er. Cheong Konyak", role: "POU Member" },
    { name: "Renilo Nuh", role: "POU Member" },
    { name: "Takum Chang", role: "POU Member" },
  ];

  const teamLeaders = [
    { name: "Padmashree A M Gokhale (IAS)", period: "Founding Visionary", title: "Founding Advisor & Pioneer", image: "/Team Leaders/A.M. Gokhale, IAS - Team Leader.png" },
    { name: "Shri. R Kevichusa (IAS)", period: "1995 – 2000", title: "Team Leader" },
    { name: "Shri. Khekiye K Sema (IAS)", period: "2000 – 2003", title: "Team Leader" },
    { name: "Shri. Alemtemshi Jamir (IAS)", period: "2003 – 2006", title: "Team Leader", image: "/Team Leaders/Alemtemshi Jamir, IAS - Team Leader.jpg.jpeg" },
    { name: "Shri Temjen Toy (IAS)", period: "2007 – 2011", title: "Team Leader", image: "/Team Leaders/Temjen Toy, IAS - Team Leader.jpg.jpeg" },
    { name: "Shri Raj K. Verma (NCS)", period: "2007 – 2012", title: "Team Leader / Deputy Leader", image: "/Team Leaders/2 Mr. Raj K. Verma, NCS, Deputy Team Leader.jpg.jpeg" },
    { name: "Shri. H. K. Khulu (IAS)", period: "2011 – 2012", title: "Team Leader", image: "/Team Leaders/H.K. Khulu, IAS - Team Leader.jpg.jpeg" },
    { name: "Shri. Amardeep S. Bhatia (IAS)", period: "2012 – 2013", title: "Team Leader", image: "/Team Leaders/A.S. Bhatia, IAS - Team Leader.jpg.jpeg" },
    { name: "Late Menukhol John", period: "2013 – 2018", title: "Principal Secretary, Govt. of Nagaland", image: "/Team Leaders/Menukhol John - Team Leader.jpg.jpeg" },
    { name: "Shri. K. Libanthung Lotha (IAS)", period: "2018 – 2025", title: "Commissioner & Secretary", image: "/Team Leaders/Libanthung Lotha, IAS - Team Leader.jpg.jpeg" },
    { name: "Shri. Kovi Meyase (NCS)", period: "2025 – Present", title: "Team Leader (Current Incumbent)", image: "/Team Leaders/Kovi Keyase, NCS -  - Team Leader.jpg.jpeg" },
  ];

  const memoriam = [
    {
      name: "Lt. Er. Shanchothung Odyuo",
      role: "POU Member (Pioneer Hydro Engineer)",
      life: "11/12/1962 – 05/03/2010",
      tribute: "A foundational pillar in designing and manufacturing the first generation of indigenous Nagaland Hydrogers.",
    },
    {
      name: "Lt. Raj K. Verma (NCS)",
      role: "Deputy Team Leader",
      life: "13/04/1959 – 03/02/2012",
      tribute: "Instrumental in establishing community frameworks and village energy committees across remote districts.",
    },
  ];

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* 1. FULL-BLEED SECTION HERO */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-windmill.png"
            alt="NEPeD Inception History"
            className="w-full h-full object-cover opacity-50 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-16 sm:pt-20 max-w-[480px]"
        >
          <SectionLabel dark={true} className="mb-2">
            01 / Background & Heritage
          </SectionLabel>
          <h1 className="text-[36px] sm:text-[56px] font-light text-[#ffffff] tracking-[-1.55px] leading-tight">
            Empowerment Through Energy
          </h1>
          <p className="mt-4 text-[15px] text-[#e5e4e4]/80 leading-relaxed">
            Formed in 2007 as a specialized multidisciplinary team, NEPeD evolved from economic development to green power generation for sustainable village self-reliance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#e5e4e4]/70"
        >
          <span>7-Member Multidisciplinary Cell • Government of Nagaland Initiative</span>
          <a href="#vision" className="hover:text-white transition-colors">
            Scroll to Statements ↓
          </a>
        </motion.div>
      </section>

      {/* 2. VISION & MISSION CARDS (2-Column Grid with Mist card) */}
      <motion.section {...fadeUpOnView} id="vision" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8">
          <SectionLabel>02 / Mandate</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Vision & Mission Framework
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="bg-[#e5e4e4] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-mono text-[#666666] uppercase tracking-wider">
                Our Vision
              </span>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#000000] tracking-[-0.72px] mt-3">
                A Vibrant Himalayan Economy
              </h3>
              <p className="font-serif italic text-[16px] sm:text-[17px] text-[#262626] leading-[1.6] mt-4">
                “Nagaland has the unique distinction where people are empowered and have sustainable livelihoods by being part of a vibrant economy, driven by locally generated eco-friendly power that is being used for accelerated development.”
              </p>
            </div>
            <div className="pt-6 border-t border-[#000000]/10 text-[12px] text-[#666666]">
              Leader in Sustainable Development
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-mono text-[#8d8d8d] uppercase tracking-wider">
                Our Mission
              </span>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-3">
                People-Centric Partnership
              </h3>
              <p className="font-serif italic text-[16px] sm:text-[17px] text-[#e5e4e4] leading-[1.6] mt-4">
                “To evolve a bottom-up approach to empower stakeholders to become partners in development, create awareness about green-energy utilization, and judiciously create need-based infrastructure that becomes a replicable model.”
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-[12px] text-[#8d8d8d]">
              Transparent & Replicable Development Model
            </div>
          </div>
        </div>
      </motion.section>

      {/* NEPED HERITAGE & ECONOMIC DEVELOPMENT HISTORICAL BRIDGE */}
      <motion.section {...fadeUpOnView} id="neped-economic" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border border-[#e5e4e4] rounded-[8px] bg-[#ffffff] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-full max-w-[280px] aspect-square rounded-[8px] overflow-hidden border border-[#e5e4e4] p-4 bg-[#ffffff] flex items-center justify-center">
                <img
                  src="/NEPED Logo.jpg.jpeg"
                  alt="NEPED Heritage & Economic Development Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[11px] font-mono text-[#8d8d8d] mt-3 uppercase tracking-wider">
                Foundational Heritage • Established 1994
              </span>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <SectionLabel>Heritage & Evolutionary Lineage</SectionLabel>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#000000] tracking-[-0.72px] leading-tight">
                NEPED Heritage to NEPeD Clean Energy Development
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                The landmark foundational program, <strong>NEPED (Nagaland Empowerment of People through Economic Development)</strong>, with its revolutionary focus on agroforestry, biodiversity, participatory village land-use, and community livelihoods, transformed rural Nagaland.
              </p>
              <p className="font-serif italic text-[16px] text-[#262626] leading-relaxed border-l-2 border-[#b75928] pl-4">
                “The tremendous agricultural and economic success of NEPED created an essential requirement for decentralized clean energy to process, grind, and add value to farmer produce right in the villages. Thus, retaining and evolving the well-established acronym, NEPeD (Clean Energy Development) was constituted in 2007.”
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-[13px] text-[#8d8d8d]">
                <span>NEPED Heritage: 1994 – Present (Agroforestry & Eco-Enterprises)</span>
                <span>•</span>
                <span className="text-[#000000] font-medium">NEPeD Energy: 2007 – Present (Hydrogers & Rural Micro-Grids)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. AIMS & OBJECTIVES (Numbered List Rows with Mist Hairlines) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <SectionLabel>03 / Strategic Pillars</SectionLabel>
            <SectionHeading size="md">
              Core Aims & Technology Objectives
            </SectionHeading>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              Guiding principles framed at inception in 2007 to ensure technical precision, environmental protection, and community sovereignty.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-1">
            <NumberedItem
              num="01"
              title="Community-Based Pico/Micro Hydro"
              subtitle="Implement sub-megawatt micro-turbines designed for rugged mountain water channels."
            />
            <NumberedItem
              num="02"
              title="Catchment Area Conservation"
              subtitle="Promote ecological watershed protection in all energy generation sites."
            />
            <NumberedItem
              num="03"
              title="R&D of Indigenous Hydroger Tech"
              subtitle="Continuously advance locally engineered turbines and electronic load controllers."
            />
            <NumberedItem
              num="04"
              title="Capacity Building for Rural Engineers"
              subtitle="Provide youth and women with technical skills, operation certs, and market linkages."
            />
            <NumberedItem
              num="05"
              title="Cross-State Regional Collaboration"
              subtitle="Partner with government and non-government agencies across Northeast India."
            />
          </div>
        </div>
      </motion.section>

      {/* 4. PRESENT MULTIDISCIPLINARY TEAM (Gallery Wall of Portraits) */}
      <motion.section {...fadeUpOnView} id="team" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>04 / Leadership & Officers</SectionLabel>
            <SectionHeading size="lg" className="mt-1">
              Multidisciplinary Team
            </SectionHeading>
          </div>
          <p className="text-[14px] text-[#666666] max-w-sm">
            Project Operations Unit (POU) members combining administrative leadership, electrical engineering, and rural outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {presentTeam.map((member) => (
            <div
              key={member.id}
              className="group bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-[#000000]"
            >
              <div className="w-full aspect-[4/5] bg-[#e5e4e4] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div className="p-4 bg-[#ffffff]">
                <div className="text-[11px] uppercase tracking-wider text-[#8d8d8d]">
                  POU Member
                </div>
                <h3 className="text-[16px] font-medium text-[#000000] mt-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[12px] text-[#666666] mt-1 leading-snug">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 5. HISTORICAL LEADERSHIP & INCEPTION TEAM (Clean Architectural Panels) */}
      <motion.section {...fadeUpOnView} id="leaders" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Past Team Leaders */}
          <div className="bg-[#e5e4e4]/30 border border-[#e5e4e4] rounded-[8px] p-8 sm:p-10 space-y-6">
            <div>
              <SectionLabel>Historical Archive</SectionLabel>
              <h3 className="text-[28px] font-light text-[#000000] tracking-[-0.72px] mt-1">
                Past Team Leaders
              </h3>
            </div>
            <div className="space-y-4 pt-2">
              {teamLeaders.map((lead) => (
                <div
                  key={lead.name}
                  className="flex items-center justify-between gap-4 border-b border-[#e5e4e4] pb-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-[#e5e4e4] overflow-hidden shrink-0 flex items-center justify-center">
                      {lead.image ? (
                        <img
                          src={lead.image}
                          alt={lead.name}
                          className="h-full w-full object-cover grayscale"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="text-[11px] font-medium text-[#8d8d8d]">
                          {lead.name.replace(/^(Shri\.?|Late|Padmashree)\s*/i, "").charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[15px] font-medium text-[#000000] truncate">{lead.name}</h4>
                      <span className="text-[12px] text-[#666666]">{lead.title}</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-mono text-[#8d8d8d] shrink-0">{lead.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inception Members */}
          <div className="bg-[#e5e4e4]/30 border border-[#e5e4e4] rounded-[8px] p-8 sm:p-10 space-y-6">
            <div>
              <SectionLabel>2007 Founding Unit</SectionLabel>
              <h3 className="text-[28px] font-light text-[#000000] tracking-[-0.72px] mt-1">
                Inception POU Cell
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {inceptionTeam.map((mem) => (
                <div
                  key={mem.name}
                  className="p-3 bg-[#ffffff] border border-[#e5e4e4] rounded-[6px]"
                >
                  <h4 className="text-[14px] font-medium text-[#000000]">{mem.name}</h4>
                  <span className="text-[11px] text-[#8d8d8d]">{mem.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. IN MEMORIAM EXHIBIT (Dark gallery tribute card) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-xl mb-8">
            <span className="text-[12px] uppercase tracking-[0.12px] text-[#b75928]">
              In Memoriam & Dedication
            </span>
            <h3 className="text-[32px] sm:text-[40px] font-light text-[#ffffff] tracking-[-0.72px] mt-2">
              Remembering Our Pioneers
            </h3>
            <p className="text-[14px] text-[#e5e4e4]/80 mt-2 leading-relaxed">
              We honor the visionaries whose engineering breakthroughs and dedication laid the groundwork for rural hydro power across Nagaland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memoriam.map((item) => (
              <div
                key={item.name}
                className="bg-[#262626] border border-white/10 rounded-[8px] p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#b75928]">{item.life}</span>
                  <span className="text-[11px] text-[#8d8d8d]">Honour Roll</span>
                </div>
                <h4 className="text-[18px] font-medium text-[#ffffff]">{item.name}</h4>
                <p className="text-[12px] text-[#e5e4e4]/70">{item.role}</p>
                <p className="text-[13px] text-[#e5e4e4]/90 pt-2 border-t border-white/10 leading-relaxed font-serif italic">
                  “{item.tribute}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
