import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
} from "@/components/ui/AkerPrimitives";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export function NepedAboutPage() {
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

  return (
    <div className="w-full space-y-20 sm:space-y-28 pt-28 sm:pt-32">
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
        </div>
      </motion.section>
    </div>
  );
}
