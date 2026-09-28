import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { SectionPill } from "@/components/shared/SectionPill";
import { NEPED_PRESENT_TEAM as presentTeam, type TeamMember } from "@/data/neped/nepedTeamData";
import { BlurReveal } from "@/components/ui/blur-reveal";


export function NepedAboutPage() {
  useEffect(() => {
    document.title = "About Us • NEPED";
  }, []);


  // Team Leader first, then the POU members in their listed order
  const teamInOrder = [...presentTeam].sort((a, b) => Number(b.role === "Team Leader") - Number(a.role === "Team Leader"));

  const teamLeaders = [
    { name: "Late A M Gokhale (IAS)", period: "Founding Visionary", title: "Founding Advisor & Pioneer", image: "/Team Leaders/A.M. Gokhale, IAS - Team Leader.webp" },
    { name: "Shri. R Kevichusa (IAS)", period: "1995 – 2000", title: "Team Leader" },
    { name: "Shri. Khekiye K Sema (IAS)", period: "2000 – 2003", title: "Team Leader" },
    { name: "Shri. Alemtemshi Jamir (IAS)", period: "2003 – 2006", title: "Team Leader", image: "/Team Leaders/Alemtemshi Jamir, IAS - Team Leader.jpg.webp" },
    { name: "Late Temjen Toy (IAS)", period: "2007 – 2011", title: "Team Leader", image: "/Team Leaders/Temjen Toy, IAS - Team Leader.jpg.webp" },
    { name: "Late Raj K. Verma (NCS)", period: "2007 – 2012", title: "Team Leader / Deputy Leader", image: "/Team Leaders/2 Mr. Raj K. Verma, NCS, Deputy Team Leader.jpg.webp" },
    { name: "Shri. H. K. Khulu (IAS)", period: "2011 – 2012", title: "Team Leader", image: "/Team Leaders/H.K. Khulu, IAS - Team Leader.jpg.webp" },
    { name: "Shri. Amardeep S. Bhatia (IAS)", period: "2012 – 2013", title: "Team Leader", image: "/Team Leaders/A.S. Bhatia, IAS - Team Leader.jpg.webp" },
    { name: "Late Menukhol John", period: "2013 – 2018", title: "Principal Secretary, Govt. of Nagaland", image: "/Team Leaders/Menukhol John - Team Leader.jpg.webp" },
    { name: "Shri. K. Libanthung Lotha (IAS)", period: "2018 – 2025", title: "Commissioner & Secretary", image: "/Team Leaders/Libanthung Lotha, IAS - Team Leader.jpg.webp" },
    { name: "Shri. Kovi Meyase (NCS)", period: "2025 – Present", title: "Team Leader (Current Incumbent)", image: "/Team Leaders/Kovi Keyase, NCS -  - Team Leader.jpg.webp" },
  ];

  return (
    <div className="theme-neped w-full space-y-20 sm:space-y-28 pb-24">
      {/* 1. HERO — About Us (text verbatim as provided) */}
      <section className="px-2.5 sm:px-4 pt-2.5 sm:pt-4">
        <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-(--brand-surface) text-[#ffffff]">
          <div className="absolute inset-0 z-0">
            <img src="/forest.webp" alt="" className="w-full h-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12432E]/90 via-[#12432E]/60 to-[#12432E]/30" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-14 pt-14 sm:pt-20 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-8 space-y-6"
            >
              <BlurReveal as="h1" className="text-[44px] sm:text-[72px] font-light tracking-[-2px] leading-[1.02]">{"About Us"}</BlurReveal>
              <p className="max-w-[680px] text-[16px] sm:text-[19px] text-[#ffffff]/90 leading-relaxed">
                Nagaland Empowerment of People through Economic Development (NEPED) is a Government of Nagaland programme project set up in 1994. Initially it implemented the ICEF project, the first ever foreign funded project in Nagaland.
              </p>
            </motion.div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="h-40 w-40 sm:h-48 sm:w-48 rounded-[24px] bg-[#ffffff] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <img src="/NEPED Logo.jpg.webp" alt="NEPED Logo" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRESENT MULTIDISCIPLINARY TEAM (Gallery Wall of Portraits) */}
      <motion.section {...fadeUpOnView} id="team" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] mx-auto text-center flex flex-col items-center gap-5 mb-10 sm:mb-14">
          <SectionPill> Leadership & Officers</SectionPill>
          <h2 className="text-[34px] sm:text-[56px] font-light text-[#1A2E23] tracking-[-1.4px] leading-[1.05]">
            Multidisciplinary Team
          </h2>
          <p className="text-[15px] text-[#5B6660] max-w-md leading-relaxed">
            Project Operations Unit (POU) members combining administrative leadership, electrical engineering, and rural outreach.
          </p>
        </div>

        {/* Equal-size cards, Team Leader first; a short last row is centred */}
        <div className="flex flex-wrap justify-center gap-5">
          {teamInOrder.map((member) => (
            <div key={member.id} className="w-full sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]">
              <TeamCard member={member} highlight={member.role === "Team Leader"} />
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUpOnView} id="leaders" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1">
          {/* Past Team Leaders */}
          <div className="bg-[#F3F6F3] rounded-[16px] p-7 sm:p-10 space-y-6">
            <div>
              <SectionPill>Historical Archive</SectionPill>
              <h3 className="text-[28px] font-light text-[#1A2E23] tracking-[-0.72px] mt-1">
                Past Team Leaders
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4 pt-2">
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
                        <span className="text-[11px] font-medium text-[#5B6660]">
                          {lead.name.replace(/^(Shri\.?|Late|Padmashree)\s*/i, "").charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[15px] font-medium text-[#1A2E23] truncate">{lead.name}</h4>
                      <span className="text-[12px] text-[#5B6660]">{lead.title}</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-mono text-[#5B6660] shrink-0">{lead.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

/** Team card — photo bottom-right; the Team Leader's card is dark (same size as the rest). */
function TeamCard({ member, highlight = false }: { member: TeamMember; highlight?: boolean }) {
  const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLElement).style.display = "none";
  };

  return (
    <div
      className={`group relative h-[300px] rounded-[20px] overflow-hidden p-7 sm:p-8 ${
        highlight ? "bg-(--brand-surface) text-[#ffffff]" : "bg-[#F3F6F3] text-[#1A2E23]"
      }`}
    >
      {highlight ? (
        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/3 w-[320px] h-[320px] rounded-full bg-(--brand-accent)/60 blur-3xl pointer-events-none" />
      ) : null}
      <div className="relative z-10">
        <h3 className="text-[20px] sm:text-[22px] font-medium tracking-[-0.3px]">{member.name}</h3>
        <p className={`text-[14px] mt-1 ${highlight ? "text-[#ffffff]/75" : "text-[#5B6660]"}`}>{member.role}</p>
      </div>
      <div className="absolute right-0 bottom-0 w-[44%] h-[64%] rounded-tl-[16px] overflow-hidden">
        {/* scale crops the white border of the passport-style photos */}
        <img
          src={member.image}
          alt={member.name}
          onError={hideOnError}
          className="w-full h-full object-cover object-top scale-[1.12] origin-top transition-transform duration-500 group-hover:scale-[1.18]"
        />
      </div>
    </div>
  );
}
