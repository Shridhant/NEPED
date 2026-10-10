import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, GraduationCap, Sprout, TrendingUp, type LucideIcon } from "lucide-react";
import { fadeUpOnView } from "@/lib/motionVariants";
import { SectionPill } from "@/components/shared/SectionPill";
import { NEPED_PRESENT_TEAM as presentTeam, type TeamMember } from "@/data/neped/nepedTeamData";
import { PartnerBand } from "@/components/shared/PartnerBand";
import { SectionSubnav } from "@/components/shared/SectionSubnav";
import { MobileShowMore } from "@/components/shared/MobileShowMore";
import { NEPED_PATHS } from "@/routes/paths";


const EYEBROW = "text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1E6F4C]";

// Timeline — text verbatim from the About copy supplied by the NEPED team
const TIMELINE: { year: string; body: string; logo?: "neped" | "neped-energy" }[] = [
  { year: "Today", body: "One society across livelihoods, land and energy." },
  { year: "2019–present", body: "NEPED-IV / Forest & Biodiversity Management (KfW)." },
  { year: "2007", body: "Energy Development branch established; CERES set up in Dimapur.", logo: "neped-energy" },
  { year: "2006–2012", body: "NEPED-III: watershed development (Min. of Agriculture)." },
  { year: "2001–2006", body: "NEPED-II: cash crops & micro-finance (ICEF/CIDA)." },
  { year: "1995–2000", body: "NEPED-I: tree-planting on jhum land (ICEF/CIDA)." },
  { year: "1995", body: "NEPED founded by the Government of Nagaland.", logo: "neped" },
];

// Aims & Objectives — verbatim from "NEPED PDF.pdf"
const AIMS = [
  "To enhance financial incomes through livelihood activities",
  "To create opportunities for self-employment for sustainable development",
  "To enhance capacities of Local Entrepreneurs",
  "To establish viable market linkages",
  "To encourage thrift saving amongst Farmers/SHG’s",
  "To change people’s mindset from subsidy dependent to self-dependent Investment",
  "The above activities so undertaken leads to sustained community biodiversity conservation efforts in Nagaland.",
];

// Theory of Change — text verbatim from the copy supplied by the NEPED team
const CHANGE_STAGES: { title: string; text: string; example: string; icon: LucideIcon }[] = [
  {
    title: "Work with the community, not for it",
    text: "Every NEPED project begins with the village council. Communities identify their own needs, contribute labour, materials and governance, and take ownership from day one. NEPED provides the technical knowledge and the connection to funding — the community provides the mandate and the commitment.",
    example: "In Kingjung village, a seven-member energy committee (five men, two women) manages the Hydroger, collects ₹20 per household per month, and pays two village-trained rural engineers. NEPED installed the machine; the village runs it.",
    icon: Handshake,
  },
  {
    title: "Build local capacity to sustain the work",
    text: "NEPED trains farmers, village engineers, Self-Help Groups and government field staff — not as one-off events, but as an embedded part of every project cycle. Across three phases, more than 7,000 farmers and 2,000 state government officials completed capacity-building programmes. In the energy programme, rural engineers are trained on-site so that every Hydroger can be maintained and repaired within the village, without waiting for an external technician.",
    example: "When Kingjung's original bamboo penstock pipes deteriorated, the village committee and its trained engineers upgraded to GI pipes and rebuilt the power house in 2019 — a decade after installation — using the revenue the community had collected.",
    icon: GraduationCap,
  },
  {
    title: "Prove the model, then spread it",
    text: "Each NEPED intervention is designed to demonstrate a replicable model — not a one-off project. NEPED-I planted 7.8 million trees on 1,794 test plots, with a replication ratio of 1:6. That means for every test plot NEPED supported, neighbouring farmers replicated the approach six times on their own land. The Hydroger programme follows the same logic: prove the technology and the community-ownership model in one village, then equip the next village to adopt it.",
    example: "After proving the Hydroger in Nagaland's border villages, demand spread to other states. Meghalaya has ordered 100 units; installations now run in Arunachal Pradesh, Sikkim and Ladakh.",
    icon: Sprout,
  },
  {
    title: "Shift the baseline permanently",
    text: "The measure of NEPED's work is not whether a project runs, but whether the change outlasts the project. Women in NEPED-II villages purchased land in their own names for the first time in Nagaland's history — that is a permanent shift in economic agency. Villages that adopted agro-forestry under NEPED-I continue to harvest from those trees three decades later. Hydroger-powered villages have uninterrupted energy and the revenue model to maintain it indefinitely.",
    example: "The Shukla Commission (Government of India, March 1997) called NEPED 'a critical lead programme' for the region — not because of one project, but because the model itself was worth replicating across the Northeast.",
    icon: TrendingUp,
  },
];

const SUBNAV = [
  { id: "story", label: "Our Story" },
  { id: "timeline", label: "Timeline" },
  { id: "aims", label: "Aims & Objectives" },
  { id: "change", label: "Theory of Change" },
  { id: "team", label: "Organisation & Team" },
];

function TimelineLogo({ logo, small = false }: { logo: "neped" | "neped-energy"; small?: boolean }) {
  const src = logo === "neped" ? "/logos/neped-logo.webp" : "/NEPeD Logo High Res.webp";
  const alt = logo === "neped" ? "NEPED logo" : "NEPeD logo";
  return (
    <span className={`${small ? "h-9 w-9" : "h-12 w-12"} rounded-full bg-[#ffffff] ring-1 ring-[#dbe5de] p-1 flex items-center justify-center shrink-0`}>
      <img src={src} alt={alt} className="h-full w-full rounded-full object-contain" />
    </span>
  );
}

export function NepedAboutPage() {
  useEffect(() => {
    document.title = "Our Story — NEPED";
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
    <div className="theme-neped w-full space-y-20 sm:space-y-28 pb-24">
      {/* 1. HERO — Our Story (text verbatim from the About copy supplied by the NEPED team) */}
      <section className="px-2.5 sm:px-4 pt-2.5 sm:pt-4">
        <div className="relative overflow-hidden bg-(--brand-surface) text-[#ffffff]">
          <div className="absolute inset-0 z-0">
            <img src="/forest.webp" alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12432E]/95 via-[#12432E]/70 to-[#12432E]/35" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-14 pt-14 sm:pt-20 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-8 space-y-6"
            >
              <span className="block text-[13px] font-semibold uppercase tracking-[0.14em] text-(--brand-accent-on-dark)">About NEPED</span>
              <h1 className="font-serif text-[52px] sm:text-[80px] leading-[1] tracking-[-0.5px]">Our Story</h1>
              <p className="max-w-[720px] text-[17px] sm:text-[20px] text-[#ffffff]/90 leading-[1.55]">
                NEPED began with a simple conviction: that Nagaland's communities deserve institutions built specifically for them — not adapted versions of programmes designed elsewhere. For three decades, one team has carried that conviction forward, its mandate growing with the needs of the state.
              </p>
            </motion.div>
            <div className="lg:col-span-4 hidden lg:flex lg:justify-end">
              <div className="h-48 w-48 bg-[#ffffff] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <img src="/logos/neped-logo.webp" alt="NEPED Logo" className="max-h-full max-w-full rounded-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBNAV — jumps to each part of the page; the current part is underlined while scrolling */}
      <SectionSubnav items={SUBNAV} label="About" />

      {/* ONE INSTITUTION, AN EVOLVING MANDATE */}
      <motion.section {...fadeUpOnView} id="story" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-10 lg:gap-20">
          <div className="flex flex-col gap-4 lg:sticky lg:top-44 lg:self-start">
            <span className={EYEBROW}>Since 1995</span>
            <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.12] tracking-[-0.3px] text-[#12432E]">
              One institution, an evolving mandate
            </h2>
          </div>
          <div className="max-w-[760px] flex flex-col gap-7 text-[17px] sm:text-[19px] leading-[1.7] text-[#1A2E23]">
            <p>
              Nagaland Empowerment of People through Economic Development (NEPED) was formed by the Government of Nagaland in 1995 as an autonomous, government-registered society, with its project set up in 1995 to implement the ICEF project — the first foreign-funded project ever undertaken in Nagaland, supported by the India-Canada Environment Facility under the Canadian International Development Agency.
            </p>
            <p>
              The society is run by a Project Operations Unit (POU): a multi-disciplinary team of officers seconded from across state government departments, given full autonomy, headed by a senior Secretary-level Team Leader and supported by a Project Steering Committee under the Chief Secretary.
            </p>
            <p>
              The first phase was called Nagaland Environment Protection and Economic Development through People's Action. From the second phase, the society became known as Nagaland Empowerment of People through Economic Development.
            </p>
            <p>
              As the livelihood work deepened, one need surfaced everywhere: energy. So in 2007 the society established an energy branch — Nagaland Empowerment of People through Energy Development — and set up CERES, its Centre of Excellence for Renewable Energy Studies, in Dimapur. The branch carries its own name and logo, but it is run by the same team, from the same office, under the same Team Leader.
            </p>
            <p className="border-t-2 border-[#E8A33D] pt-7 font-serif text-[22px] sm:text-[26px] leading-[1.45] text-[#12432E]">
              The society had extended its reach, but it had not divided. That is why the acronym never changed. Today the 1995 society works across livelihoods, land and energy as a single NEPED, from Nagaland's forests to its rivers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TIMELINE — horizontal on large screens, vertical on phones / tablets */}
      <section id="timeline" className="scroll-mt-40 bg-[#F3F6F3] px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-12 lg:gap-14">
          <span className={EYEBROW}>Timeline</span>
          <ol className="relative list-none grid grid-cols-1 lg:grid-cols-7 gap-0 lg:gap-5">
            {/* the line: vertical beside the dots on small screens, horizontal through the dots on large ones */}
            <li aria-hidden className="absolute left-[10px] top-2 bottom-2 w-px bg-[#cfdcd3] lg:left-0 lg:right-0 lg:top-[78px] lg:bottom-auto lg:w-auto lg:h-px" />
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                className="relative grid grid-cols-[22px_minmax(0,1fr)] gap-x-5 pb-10 last:pb-0 lg:flex lg:flex-col lg:gap-3.5 lg:pb-0"
              >
                {/* logo slot (large screens: above the line) */}
                <div className="hidden lg:flex h-14 items-end">
                  {t.logo ? <TimelineLogo logo={t.logo} /> : null}
                </div>
                <span className="relative z-10 mt-1.5 lg:mt-0 h-[22px] w-[22px] rounded-full border-4 border-[#F3F6F3] bg-[#1E6F4C]" />
                <div className="flex flex-col gap-2 lg:contents">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-[26px] lg:text-[28px] leading-none text-[#12432E]">{t.year}</span>
                    {t.logo ? <span className="lg:hidden"><TimelineLogo logo={t.logo} small /></span> : null}
                  </div>
                  <p className="text-[16px] leading-snug text-[#1A2E23] max-w-[420px]">{t.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* AIMS & OBJECTIVES — verbatim from "NEPED PDF.pdf" */}
      <motion.section {...fadeUpOnView} id="aims" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-44 lg:self-start">
            <span className={EYEBROW}>Aims &amp; Objectives</span>
          </div>
          <ol className="list-none border-t border-[#dbe5de]">
            {AIMS.map((aim, i) => (
              <li key={aim} className="grid grid-cols-[48px_minmax(0,1fr)] sm:grid-cols-[64px_minmax(0,1fr)] items-baseline gap-4 py-6 border-b border-[#dbe5de]">
                <span className="font-serif text-[24px] sm:text-[28px] leading-none text-[#1E6F4C]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] sm:text-[19px] leading-[1.5] text-[#1A2E23]">{aim}</span>
              </li>
            ))}
          </ol>
        </div>
      </motion.section>

      {/* THEORY OF CHANGE — vertical flow of four stages, each with an icon and one real example (text verbatim) */}
      <section id="change" className="scroll-mt-40 bg-[#F3F6F3] px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-10 lg:gap-20">
          <motion.div {...fadeUpOnView} className="flex flex-col gap-4 lg:sticky lg:top-44 lg:self-start">
            <span className={EYEBROW}>Theory of Change</span>
            <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.12] tracking-[-0.3px] text-[#12432E]">How change happens</h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#1A2E23]">
              NEPED does not deliver outcomes by itself. It creates the conditions — knowledge, tools, infrastructure, ownership — for communities to drive their own development. Every programme follows the same logic:
            </p>
          </motion.div>

          <div>
            <ol className="list-none">
              {CHANGE_STAGES.map(({ title, text, example, icon: Icon }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                  className="relative grid grid-cols-[48px_minmax(0,1fr)] sm:grid-cols-[56px_minmax(0,1fr)] gap-x-5 sm:gap-x-7 pb-12 last:pb-0"
                >
                  {/* flow line to the next stage */}
                  {i < CHANGE_STAGES.length - 1 ? (
                    <span aria-hidden className="absolute left-[23.5px] sm:left-[27.5px] top-14 sm:top-16 bottom-0 w-px bg-[#b9d6c3]" />
                  ) : null}
                  <span className="relative z-10 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#1E6F4C] text-[#ffffff] flex items-center justify-center">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <div className="flex flex-col gap-4 pt-1">
                    <h3 className="text-[20px] sm:text-[24px] font-normal leading-[1.25] tracking-[-0.3px] text-[#12432E]">
                      <span className="text-[#1E6F4C]">{i + 1}.</span> {title}
                    </h3>
                    <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#1A2E23]">{text}</p>
                    <div className=" bg-[#ffffff] border-l-[3px] border-[#E8A33D] px-5 py-4 sm:px-6 sm:py-5">
                      <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#1A2E23]">
                        <span className="font-semibold text-[#12432E]">Example: </span>
                        {example}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.p {...fadeUpOnView} className="mt-14 border-t-2 border-[#E8A33D] pt-7 font-serif text-[22px] sm:text-[26px] leading-[1.45] text-[#12432E]">
              This is how community-led development works: external support creates the spark; community ownership carries the fire forward.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ORGANISATION & TEAM */}
      {/* 4. PRESENT MULTIDISCIPLINARY TEAM (Gallery Wall of Portraits) */}
      <motion.section {...fadeUpOnView} id="team" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[760px] mx-auto text-center flex flex-col items-center gap-5 mb-10 sm:mb-14">
          <SectionPill> Leadership & Officers</SectionPill>
          <h2 className="text-[34px] sm:text-[56px] font-light text-[#1A2E23] tracking-[-1.4px] leading-[1.05]">
            Multidisciplinary Team
          </h2>
          <p className="text-[15px] text-[#5B6660] max-w-md leading-relaxed">
            Project Operations Unit (POU) members combining administrative leadership, electrical engineering, and rural outreach.
          </p>
          <Link to={NEPED_PATHS.structure} className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#1E6F4C]">
           Our Team
            <ArrowRight size={16} className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
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

      <motion.section {...fadeUpOnView} id="leaders" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1">
          {/* Past Team Leaders */}
          <div className="bg-[#F3F6F3] p-7 sm:p-10 space-y-6">
            <div>
              <SectionPill>Historical Archive</SectionPill>
              <h3 className="text-[28px] font-light text-[#1A2E23] tracking-[-0.72px] mt-1">
                Past Team Leaders
              </h3>
            </div>
            <MobileShowMore
              initialCount={5}
              showLabel="Show all past leaders"
              hideLabel="Show fewer past leaders"
              className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4 pt-2"
            >
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
            </MobileShowMore>
          </div>
        </div>
      </motion.section>

      <PartnerBand />
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
