import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import microgrid from "@/assets/microgrid.png";
import forest from "@/assets/forest.png";

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

function StripeCard({
  tag,
  title,
  body,
  imageSrc,
  linkHref = "#",
  linkLabel = "Learn more",
}: {
  tag: string;
  title: string;
  body: string;
  imageSrc: string;
  linkHref?: string;
  linkLabel?: string;
}) {
  return (
    <motion.div 
      variants={revealVariants}
      className="w-full h-[480px] group mx-auto bg-white border border-ink/5 overflow-hidden rounded-3xl text-ink shadow-sm hover:shadow-md transition-shadow"
    >
      <figure className="w-full h-76 group-hover:h-68 transition-all duration-300 bg-canvas p-2 rounded-2xl relative overflow-hidden">
        <div
          style={{
            background: "linear-gradient(123.9deg, #f59e0b 1.52%, rgba(0, 0, 0, 0) 68.91%)",
          }}
          className="absolute top-0 left-0 w-full h-full group-hover:opacity-40 opacity-0 transition-all duration-300 mix-blend-multiply"
        />
        <img
          src={imageSrc}
          alt={title}
          className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-60 w-[85%] group-hover:border-4 border-4 border-[#76aaf82d] group-hover:border-accent-amber/20 rounded-2xl object-cover transition-all duration-300"
        />
      </figure>
      <article className="p-5 space-y-2">
        <div className="inline-flex px-3 py-1 rounded-full bg-accent-amber/15 text-accent-amber text-[10px] font-bold uppercase tracking-wider">
          {tag}
        </div>
        <h4 className="text-xl font-bold capitalize text-ink">{title}</h4>
        <p className="text-xs text-ink-soft leading-relaxed line-clamp-3">
          {body}
        </p>
        <a
          href={linkHref}
          className="text-xs text-[#0B65ED] font-semibold group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-1 flex items-center gap-1 transition-all duration-300"
        >
          {linkLabel}
          <span>
            <ChevronRight size={14} />
          </span>
        </a>
      </article>
    </motion.div>
  );
}

export function TechnologyPage() {
  const specs = [
    { name: "Capacity", value: "3 kW" },
    { name: "Rate RPM", value: "750" },
    { name: "Frequency", value: "50Hz (Single Phase)" },
    { name: "Voltage", value: "230 - 240 V" },
    { name: "Shaft & Nozzle Material", value: "M/steel" },
    { name: "Nozzles", value: "1 or 2 depending on head & discharge" },
    { name: "Bearings", value: "2 nos (1 roller bearing top, 1 taper roller bearing bottom)" },
    { name: "Turbine Turgo Runners", value: "18 to 43 nos, depending on discharge on steel hub" },
    { name: "Controller", value: "Indigenous Electronic Load Controller (ELC)" },
    { name: "Permanent Magnetic Core", value: "8 poles with copper winding alternators" },
    { name: "Casting Materials", value: "Cast iron" },
    { name: "Discharge Range", value: "10 - 40 lts/sec" },
    { name: "Head Range", value: "9 - 35 m" },
    { name: "Pitch Diameter of Turbine", value: "16.14 to 31.5 cm" },
    { name: "Gross Weight", value: "78 kg" },
  ];

  const elcFunctions = [
    { letter: "A", title: "Constant RPM", desc: "Regulates generator speeds under dynamic loading." },
    { letter: "B", title: "Required Frequency", desc: "Locks system output directly at 50Hz single-phase." },
    { letter: "C", title: "Overload Shielding", desc: "Senses power peaks and redirects energy to dummy load." },
    { letter: "D", title: "Voltage Regulation", desc: "Keeps output between 230-240V, avoiding low/high surges." },
    { letter: "E", title: "Short Circuit Protection", desc: "Auto-disconnects output during severe network faults." },
    { letter: "F", title: "Parallel Coupling", desc: "Functions as a synchronizer for coupling parallel connections." },
  ];

  const uses = [
    "General lighting & wayside amenities",
    "Computers, TV, and electronics support",
    "Refrigeration & cold storage",
    "Household cooking & heating",
    "Fruit juicing & community mills",
    "Agricultural milling machines",
    "Battery & mobile device charging hubs",
  ];

  return (
    <div className="space-y-24 py-10">
      {/* Hydrogers Section */}
      <section id="hydrogers" className="scroll-mt-24 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">01 / Mechanical Innovation</span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink mt-3">
            Hydroger Technology
          </h1>
          <p className="mt-8 text-base sm:text-lg text-ink-soft leading-relaxed">
            Coined from the amalgamation of <strong>Hydro</strong> and <strong>Generator</strong>, the "Hydroger" is a simplified watermill mechanism designed specifically for the rugged terrain of Nagaland. Comprising a cylindrical cast iron casing housing an alternator, it converts mountain stream power into clean electrical energy.
          </p>
        </motion.div>

        {/* Impulse vs Reaction Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <StripeCard
            tag="Hilly Streams"
            title="Impulse Turbines"
            body="Designed for high head (height) and low volume locations. Ideal for mountainous streams with steep drops, utilizing high velocity jet nozzles to turn turbine runners (like Turgo runners) mounted on a steel hub."
            imageSrc={microgrid}
            linkHref="#hydrogers"
            linkLabel="Explore Impulse Designs"
          />
          <StripeCard
            tag="Low Lying Regions"
            title="Reaction Turbines"
            body="Best suited for low head height and large volume flows. These turbines run completely submerged, utilizing pressure differences and volume flow to generate power in valley and river basin sites."
            imageSrc={forest}
            linkHref="#hydrogers"
            linkLabel="Explore Reaction Designs"
          />
        </motion.div>

        {/* Indigenization R&D Story */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="rounded-3xl bg-ink p-8 text-white space-y-6 sm:p-12"
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent-amber font-mono">The Indigenization Journey</span>
            <h3 className="text-3xl font-semibold leading-tight">Made in Nagaland</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Faced with poor performance from imported pico turbines, the NEPeD team launched a custom R&D initiative in 2008 in collaboration with the Nagaland Tool Room and Training Centre (NTTC) Dimapur. Re-engineering permanent magnets, stator windings, and turbine blade materials, they successfully designed 1kW Reaction and 3kW Impulse prototypes. Tested and certified at Phesama, an MOU in 2009 laid the pathway for 100% local production, backed by NABARD's Rural Innovation Fund.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ELC Section */}
      <section id="elc" className="scroll-mt-24 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">02 / Electrical Stability</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mt-3">
            Electronic Load Controllers
          </h2>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            Running standalone generators without regulation often causes voltage surges, damaged appliances, and fused bulbs. To solve this, NEPeD designed its own light, 1kg Electronic Load Controller (ELC). By balancing generator output with demand automatically, the ELC provides steady, safe voltage.
          </p>
        </motion.div>

        {/* ELC Functions Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {elcFunctions.map((func) => (
            <motion.div
              key={func.title}
              variants={revealVariants}
              className="bg-white border border-ink/5 rounded-2xl p-6 shadow-sm flex gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-amber/20 text-accent-amber font-mono font-bold text-sm">
                {func.letter}
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-ink">{func.title}</h4>
                <p className="text-[11px] text-ink-soft leading-relaxed">{func.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical specifications and uses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Specs sheet table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="lg:col-span-7 bg-white rounded-3xl border border-ink/5 overflow-hidden shadow-sm"
          >
            <div className="p-6 border-b border-ink/5 bg-ink/5">
              <h3 className="font-bold text-base text-ink">Technical Specifications</h3>
              <p className="text-[10px] text-ink-soft mt-1">Standard 3kW Pico Hydroger System specifications</p>
            </div>
            <div className="divide-y divide-ink/5 text-xs">
              {specs.map((item) => (
                <div key={item.name} className="grid grid-cols-12 p-3.5 hover:bg-ink/5 transition-colors">
                  <div className="col-span-5 font-semibold text-ink-soft">{item.name}</div>
                  <div className="col-span-7 font-medium text-ink">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Uses & Salient Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white border border-ink/5 rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-ink">Salient Features</h3>
              <ul className="space-y-3.5 text-xs text-ink-soft">
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-accent-amber shrink-0">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 6l1.5 1.5L8 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>100% clean, green, renewable energy</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-accent-amber shrink-0">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 6l1.5 1.5L8 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Pre-bundled with smart ELC regulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-accent-amber shrink-0">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 6l1.5 1.5L8 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Lightweight (78kg gross) and highly transportable</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-accent-amber shrink-0">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 6l1.5 1.5L8 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>No heavy civil works; easy to install & maintain</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-ink/5 rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-ink">Supported Energy Uses</h3>
              <div className="grid grid-cols-1 gap-2.5">
                {uses.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-amber shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
