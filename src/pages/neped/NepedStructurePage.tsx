import { useEffect } from "react";
import { motion } from "framer-motion";
import { NEPED_PRESENT_TEAM as presentTeam, type TeamMember } from "@/data/neped/nepedTeamData";
import { MobileShowMore } from "@/components/shared/MobileShowMore";
import { fadeUpOnView } from "@/lib/motionVariants";
import { SectionPill } from "@/components/shared/SectionPill";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { OrgStructureChart } from "@/components/neped/OrgStructureChart";

// Light card: white washed with a green glow in the top-left corner and a warm tint below it
const CARD_BACKGROUND = [
  "radial-gradient(55% 45% at 0% 0%, rgba(45,125,58,0.32) 0%, transparent 70%)",
  "radial-gradient(38% 34% at 0% 44%, rgba(222,170,90,0.24) 0%, transparent 70%)",
  "radial-gradient(50% 40% at 100% 100%, rgba(45,125,58,0.10) 0%, transparent 70%)",
  "linear-gradient(165deg, #eaf5e6 0%, #f7fbf5 45%, #ffffff 100%)",
].join(", ");

export function NepedStructurePage() {
  useEffect(() => {
    document.title = "Our Team • NEPED";
    window.scrollTo({ top: 0 });
  }, []);

  // Team Leader first, then Dr. Kezevituo Metha, then the other POU members in their listed order
  const rank = (m: TeamMember) => (m.role === "Team Leader" ? 0 : m.name === "Dr. Kezevituo Metha" ? 1 : 2);
  const teamInOrder = [...presentTeam].sort((a, b) => rank(a) - rank(b));

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
    <div className="theme-neped w-full space-y-10 sm:space-y-14 pt-10 sm:pt-14 pb-24">
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-6">
        <SectionPill>NEPED</SectionPill>
        <BlurReveal as="h1" className="text-[40px] sm:text-[64px] font-light text-[#1A2E23] tracking-[-1.55px] leading-[1.05]">
          {"Our Team"}
        </BlurReveal>
      </section>

      {/* 1. MULTIDISCIPLINARY TEAM */}
      <motion.section {...fadeUpOnView} id="team" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
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
        <MobileShowMore
          initialCount={4}
          showLabel="Show all team members"
          hideLabel="Show fewer team members"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {teamInOrder.map((member) => (
            <TeamCard key={member.id} member={member} highlight={member.role === "Team Leader"} />
          ))}
        </MobileShowMore>
      </motion.section>

      {/* 2. PAST TEAM LEADERS */}
      <motion.section {...fadeUpOnView} id="leaders" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1">
          {/* Past Team Leaders */}
          <div className="bg-[#F3F6F3] p-7 sm:p-10 space-y-6">
            <div>
              <SectionPill>Historical Archive</SectionPill>
              <h3 className="text-[32px] sm:text-[40px] font-light text-[#1A2E23] tracking-[-0.9px] mt-1">
                Past Team Leaders
              </h3>
            </div>
            <MobileShowMore
              initialCount={5}
              showLabel="Show all past leaders"
              hideLabel="Show fewer past leaders"
              className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-5 pt-2"
            >
              {teamLeaders.map((lead) => (
                <div
                  key={lead.name}
                  className="flex items-center justify-between gap-4 border-b border-[#e5e4e4] pb-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#e5e4e4] overflow-hidden shrink-0 flex items-center justify-center">
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
                        <span className="text-[15px] font-medium text-[#5B6660]">
                          {lead.name.replace(/^(Shri\.?|Late|Padmashree)\s*/i, "").charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[17px] sm:text-[18px] font-medium text-[#1A2E23] truncate">{lead.name}</h4>
                      <span className="text-[14px] sm:text-[15px] text-[#5B6660]">{lead.title}</span>
                    </div>
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-mono text-[#5B6660] shrink-0">{lead.period}</span>
                </div>
              ))}
            </MobileShowMore>
          </div>
        </div>
      </motion.section>

      {/* 3. ORGANISATIONAL STRUCTURE */}
      <motion.section {...fadeUpOnView} id="structure" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-[34px] sm:text-[56px] font-light text-[#1A2E23] tracking-[-1.4px] leading-[1.05] text-center mb-10 sm:mb-14">
          Organisational Structure
        </h2>
        <div
          className=" border border-[#e3eee0] px-4 py-10 sm:px-14 sm:py-16"
          style={{ background: CARD_BACKGROUND }}
        >
          <div className="mx-auto max-w-[900px]">
            <OrgStructureChart />
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
      className={`group relative h-[300px]  overflow-hidden p-7 sm:p-8 ${
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
      <div className="absolute right-0 bottom-0 w-[44%] h-[64%] overflow-hidden">
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
