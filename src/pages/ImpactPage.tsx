import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

interface LocationGroup {
  region: string;
  state: "Nagaland" | "Neighbouring States";
  villages: string[];
}

const locations: LocationGroup[] = [
  { region: "Kohima", state: "Nagaland", villages: ["Khiyokie", "Tsiepama", "Logwesunyu", "Phesama", "Sendenyu Model Farm Village"] },
  { region: "Tuensang", state: "Nagaland", villages: ["Langnok", "Chiphur", "Shopelak", "Longra", "Kingjung", "Aniashu", "Kingpao", "Deithung", "Pang"] },
  { region: "Mokokchung", state: "Nagaland", villages: ["Salulamang", "Longkong", "Longkhum", "Kubolong"] },
  { region: "Kiphire", state: "Nagaland", villages: ["Achumse's farm", "Hurong (Chemlongse's farm)", "Kaha", "Tukhinkiu Village"] },
  { region: "Longleng", state: "Nagaland", villages: ["Yanglok", "Anaki C (L. Bulom's Farm)", "Yongyah"] },
  { region: "Mon", state: "Nagaland", villages: ["Sheangha wamsa", "Nyanhyu"] },
  { region: "Zunheboto", state: "Nagaland", villages: ["Kheshepu", "Phushito's farm - Xuivi village"] },
  { region: "Dimapur", state: "Nagaland", villages: ["Seithekima"] },
  { region: "Peren", state: "Nagaland", villages: ["Datui’s Farm"] },
  { region: "Meghalaya", state: "Neighbouring States", villages: ["Sakhri Village", "Mawlyngbna"] },
  { region: "Sikkim", state: "Neighbouring States", villages: ["Martam"] },
  { region: "Arunachal Pradesh", state: "Neighbouring States", villages: ["Pongging village"] }
];

export function ImpactPage() {
  const [activeRegion, setActiveRegion] = useState<string | null>("Kohima");

  const benefits = [
    {
      title: "Reduction of Women's Drudgery",
      desc: "Clean light saves hours collected for firewood, making evening routines safer. Villagers use hydroger energy to ease cooking, fetching water, and sorting crops.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-amber">
          <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 12c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Night-Time Cottage Livelihoods",
      desc: "Lighting gives weavers, knitters, and farmers extra hours to produce marketable goods at night. Rural carpenters use electrical tools to run cottage industries.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-amber">
          <path d="M2 22h20M12 2v20M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Rural Employment & 'Rural Engineers'",
      desc: "Youth are selected and trained locally to run and maintain hydrogers, creating dedicated scope for rural employment under NEPeD's 'Rural Engineers' concept.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-amber">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Water Catchment Area Conservation",
      desc: "Knowing streamflow is key to power, villages set up protected catchment zones. Hydrogers introduce logical understanding of forest preservation to safeguard water supplies.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-amber">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-24 py-10">
      {/* Benefits Section */}
      <section id="benefits" className="scroll-mt-24 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">01 / Social & Economic Upliftment</span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink mt-3">
            Impact & Community Benefits
          </h1>
          <p className="mt-8 text-base sm:text-lg text-ink-soft leading-relaxed">
            Beyond electricity, pico hydro projects foster social change. Communities taking part build greater resilience to external market forces, protect water resources, and establish self-sustaining revenue systems that allow them to determine their own standard of living.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-white border border-ink/5 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-amber/10">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-ink">{benefit.title}</h3>
              <p className="text-xs text-ink-soft leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deployments Section */}
      <section id="deployments" className="scroll-mt-24 space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">02 / Regional Footprint</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mt-3">
            Deployments Directory
          </h2>
          <p className="mt-4 text-sm text-ink-soft">
            NEPeD has successfully replicated and deployed indigenously made Hydroger units in remote rural areas across Nagaland and neighbouring Northeast states.
          </p>
        </motion.div>

        {/* Interactive accordion/tab listing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Navigation regions list */}
          <div className="md:col-span-4 flex flex-wrap md:flex-col gap-1.5">
            <div className="w-full text-xs font-bold text-ink-soft uppercase tracking-wider mb-2 px-3 hidden md:block">
              District / State
            </div>
            {locations.map((loc) => {
              const isActive = activeRegion === loc.region;
              return (
                <button
                  key={loc.region}
                  onClick={() => setActiveRegion(loc.region)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold text-left transition-all active-scale cursor-pointer ${
                    isActive
                      ? "bg-ink text-white shadow-sm"
                      : "bg-white text-ink border border-ink/5 hover:bg-ink/5"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>{loc.region}</span>
                    <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full ${
                      isActive ? "bg-accent-amber text-ink" : "bg-ink/5 text-ink-soft"
                    }`}>
                      {loc.villages.length}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Villages panel */}
          <div className="md:col-span-8 bg-white border border-ink/5 rounded-3xl p-6 sm:p-10 shadow-sm min-h-[300px]">
            <AnimatePresence mode="wait">
              {locations
                .filter((loc) => loc.region === activeRegion)
                .map((loc) => (
                  <motion.div
                    key={loc.region}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="text-[10px] text-accent-amber font-bold uppercase tracking-widest">{loc.state}</div>
                      <h3 className="text-2xl font-bold text-ink mt-1">{loc.region}</h3>
                      <p className="text-xs text-ink-soft mt-1">
                        Active Hydroger installations supporting households and local mills:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-ink/5">
                      {loc.villages.map((village, idx) => (
                        <div
                          key={village}
                          className="flex items-center gap-3 p-3 bg-canvas/30 border border-ink/5 rounded-2xl hover:bg-canvas transition-colors"
                        >
                          <span className="h-6 w-6 rounded-full bg-accent-amber/15 text-accent-amber flex items-center justify-center text-xs font-bold font-mono">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-semibold text-ink leading-tight">{village}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
