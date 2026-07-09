import { motion } from "framer-motion";
import TeamShowcase, { type TeamMember } from "@/components/ui/team-showcase";

const revealVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function AboutPage() {
  const presentTeam: TeamMember[] = [
    { id: "1", name: "Mr. K. Libanthung Lotha", role: "Commissioner & Secretary (Team Leader) • 2018 - Present", image: "/people/Klibathung.jpg" },
    { id: "2", name: "Er. Renbenthung Humtsoe", role: "POU Member • Present", image: "/people/erenbeuthang.jpg" },
    { id: "3", name: "Ayong Chang", role: "POU Member • Present", image: "/people/ayongchang.jpg" },
    { id: "4", name: "David Yepthomi", role: "POU Member • Present", image: "/people/davidyepthomi.jpg" },
    { id: "5", name: "Takum Chang", role: "POU Member • Present", image: "/people/takum.jpg" },
    { id: "6", name: "Er. Moamanen Imchen", role: "POU Member • Present", image: "/people/ermoamanen.jpg" },
    { id: "7", name: "Er. Imnayanger Imchen", role: "Coordinator (NEPeD - CERES) • Present", image: "/people/erimyanger.jpg" },
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
    { name: "Mr. Temjen Toy (IAS)", period: "2007 - 2011" },
    { name: "Mr. H. K. Khulu", period: "2011 - 2012" },
    { name: "Mr. Amardeep Singh (IAS)", period: "2012 - 2013" },
    { name: "Mr. Menukhol John", period: "2013 - 2018" },
    { name: "Mr. K. Libanthung Lotha", period: "2018 - Present" },
  ];

  const memoriam = [
    { name: "Lt. Er. Shanchothung Odyuo", life: "11/12/1962 - 05/03/2010" },
    { name: "Lt. Raj K. Verma (NCS)", life: "13/04/1959 - 03/02/2012" },
  ];

  return (
    <div className="space-y-24 py-10">
      {/* Overview & Vision Section */}
      <section id="overview" className="scroll-mt-24 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">01 / About NEPeD</span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink mt-3">
            Empowerment through Green Energy
          </h1>
          <p className="mt-8 text-base sm:text-lg text-ink-soft leading-relaxed">
            Nagaland Empowerment of People through Energy Development (NEPeD) was established in 2007 as a multi-disciplinary program to bring clean, green, and affordable energy solutions to the remote villages of Nagaland. Building upon the legacy of livelihood and environmental initiatives, NEPeD targets sustainable energy as a key driver of rural economy and community resilience.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={revealVariants} className="bg-white border border-ink/5 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Vision Statement</h2>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">
              Nagaland has the unique distinction where people are empowered and have sustainable livelihoods by being part of a vibrant economy, driven by locally generated eco-friendly power that is being used for accelerated development. This enables Nagaland to leap-frog into the globalized world as a leader in sustainable development worthy of emulation.
            </p>
          </motion.div>
          <motion.div variants={revealVariants} className="bg-white border border-ink/5 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Mission Statement</h2>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">
              NEPeD works with local stakeholders to evolve a bottom-up approach, empowering communities to become active partners in green-energy utilization. By using need-based, people-centric infrastructure, NEPeD creates transparent, replicable development models that inspire self-reliance and environmental protection.
            </p>
          </motion.div>
        </motion.div>

        {/* Aims & Objectives lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-ink border-b border-ink/5 pb-2">Aims</h3>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                <span>Implement community-based pico/micro hydro projects of sub megawatt level.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                <span>Supplement and provide alternative energy needs in rural areas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                <span>Promote catchment area conservation in potential energy development sites.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center shrink-0 text-xs font-bold">4</span>
                <span>Empower people for sustainable livelihood through locally generated eco-friendly power.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center shrink-0 text-xs font-bold">5</span>
                <span>Empower youth and women in sustainable livelihoods.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center shrink-0 text-xs font-bold">6</span>
                <span>Provide technical skills and capacities for rural employment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-accent-amber/20 text-accent-amber flex items-center justify-center shrink-0 text-xs font-bold">7</span>
                <span>Facilitate entrepreneurship development and provide market linkages.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-ink border-b border-ink/5 pb-2">Objectives</h3>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-ink/5 text-ink flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                <span>Add value to past and current activities of NEPED and allied projects in Nagaland and the Northeast.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-ink/5 text-ink flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                <span>Promote research and development of the Hydroger technology developed by NEPeD.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-ink/5 text-ink flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                <span>Sustainably streamline production and installation of Hydrogers across the region.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-ink/5 text-ink flex items-center justify-center shrink-0 text-xs font-bold">4</span>
                <span>Collaborate with both government and non-government agencies and organizations in the field of energy and rural development.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-ink/5 text-ink flex items-center justify-center shrink-0 text-xs font-bold">5</span>
                <span>Ensure sustainable development through green technologies and watershed protection.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="scroll-mt-24 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">02 / People Behind the Mission</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mt-3">
            Our Team
          </h2>
          <p className="mt-4 text-sm text-ink-soft">
            NEPeD is driven by a committed team of administrators, technical experts, and project officers operating with a bottom-up community approach.
          </p>
        </motion.div>

        {/* Present Team Members Grid */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-ink uppercase tracking-wider">Present POU Members</h3>
          <TeamShowcase members={presentTeam} />
        </div>

        {/* Leaders Timeline Grid */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-ink uppercase tracking-wider">Historical Team Leaders</h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {teamLeaders.map((leader) => (
              <motion.div
                key={leader.name + leader.period}
                variants={revealVariants}
                className="bg-ink text-white rounded-2xl p-5 space-y-2"
              >
                <div className="text-xs text-white/50">{leader.period}</div>
                <div className="font-semibold text-sm leading-tight">{leader.name}</div>
                <div className="text-[10px] text-accent-amber uppercase tracking-widest">Team Leader</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* In Inception Team */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-ink uppercase tracking-wider">Team Members at Inception (2007)</h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
          >
            {inceptionTeam.map((member) => (
              <motion.div
                key={member.name}
                variants={revealVariants}
                className="bg-white/50 border border-ink/5 rounded-xl p-4 text-center"
              >
                <div className="font-semibold text-xs text-ink">{member.name}</div>
                <div className="text-[9px] text-ink-soft mt-1">{member.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* In Memoriam */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-dashed border-ink/15 bg-white p-6 sm:p-10 space-y-6 text-center max-w-xl mx-auto"
        >
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-amber/10 text-accent-amber">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H7M19 9H5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-ink">In Memoriam</h3>
            <p className="text-xs text-ink-soft max-w-md mx-auto leading-relaxed">
              We respectfully honor and remember our pioneer POU members who laid the core foundation of NEPeD's energy development programs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 pt-2">
            {memoriam.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="font-bold text-sm text-ink">{item.name}</div>
                <div className="text-[10px] text-accent-amber font-mono">{item.life}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
