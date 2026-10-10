import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { SectionPill } from "@/components/shared/SectionPill";

// Moved from the Technology page: "What is a Hydroger?" explainer, turbines and capacity comparison.

const EYEBROW = "text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1E6F4C]";

// Two turbines — text verbatim from the Technology copy ("NEPED's model" changed to "NEPeD's model" per the team)
const TURBINES = [
  {
    name: "Reaction turbine",
    kw: "1 kW",
    text: "Needs a good volume of water but little height; suited to low-lying sites. NEPeD's model: 1 kW.",
    terrain: (
      <svg viewBox="0 0 160 90" className="h-[90px] w-40" aria-hidden="true">
        <path d="M0 60 L160 60 L160 90 L0 90 Z" fill="#CFE0E6" />
        <path d="M10 52 C50 48 110 56 150 52" stroke="#5E8FA3" strokeWidth="3" fill="none" />
        <path d="M0 30 L160 38" stroke="#5B6660" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    name: "Impulse turbine",
    kw: "3 kW",
    text: "Needs greater height but less water; suited to steep hill streams. NEPeD's model: 3 kW.",
    terrain: (
      <svg viewBox="0 0 160 90" className="h-[90px] w-40" aria-hidden="true">
        <path d="M0 10 L60 10 L130 80 L160 80 L160 90 L0 90 Z" fill="#E3EAE5" />
        <path d="M20 8 C50 12 70 30 100 60 C112 72 126 78 150 78" stroke="#5E8FA3" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
];

const SPECS = {
  "3kw": {
    name: "NEPeD Hydroger 3kW Model",
    head: "25 – 45 Meters",
    discharge: "12 – 18 Litres/Sec",
    output: "3.0 kVA / 230V Single Phase",
    ideal: "Single village hamlets (15–25 households) for lighting & basic processing.",
    rpm: "1500 RPM (Belt-driven / Direct)",
    alternator: "Brushless synchronous AC generator",
    weight: "~85 kg (Modular for mountain porterage)",
  },
  "5kw": {
    name: "NEPeD Hydroger 5kW Model",
    head: "35 – 60 Meters",
    discharge: "18 – 25 Litres/Sec",
    output: "5.0 kVA / 230V Single Phase",
    ideal: "Medium village clusters (30–50 households) + community agro-mills.",
    rpm: "1500 RPM synchronous",
    alternator: "Class H insulation, tropicalized brushless",
    weight: "~110 kg (Modular cast assembly)",
  },
  "10kw": {
    name: "NEPeD Hydroger 10kW Model",
    head: "50 – 90 Meters",
    discharge: "25 – 40 Litres/Sec",
    output: "10.0 kVA / 415V Three Phase",
    ideal: "Large village centers, small cottage industries & multi-hamlet mini-grids.",
    rpm: "1500 RPM synchronous",
    alternator: "Industrial continuous duty alternator",
    weight: "~175 kg (Cast iron modular casing)",
  },
};

/** What is a Hydroger + how it works — text verbatim; labelled schematic drawn from the same text. */
export function HydrogerHowItWorks() {
  return (
    <motion.section {...fadeUpOnView} id="how-it-works" className="scroll-mt-40 mx-auto max-w-[1200px] px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-center gap-10 lg:gap-16">
        <div className="flex flex-col gap-5">
          <span className={EYEBROW}>How it works</span>
          <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.12] tracking-[-0.3px] text-[#12432E]">What is a Hydroger?</h2>
          <p className="text-[17px] sm:text-[19px] leading-[1.7] text-[#1A2E23]">
            A Hydroger is a small water-powered generator — the age-old watermill, reinvented for Nagaland. The name joins two words: Hydro and Generator.
          </p>
          <p className="text-[17px] sm:text-[19px] leading-[1.7] text-[#1A2E23]">
            The mechanism is elegantly simple. A cylindrical cast-iron casing houses an alternator, connected by a shaft to a turbine. Flowing water spins the turbine, the turbine drives the alternator, and the alternator produces electricity. No fuel. No combustion. Just the river at work.
          </p>
        </div>
        <figure className="bg-[#F3F6F3] p-5 sm:p-8">
          <HydrogerSchematic />
        </figure>
      </div>
    </motion.section>
  );
}

export function HydrogerTurbines() {
  return (
    <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
      <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.12] tracking-[-0.3px] text-[#12432E]">Two turbines for two terrains</h2>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {TURBINES.map((t) => (
          <article key={t.name} className="grid grid-cols-1 sm:grid-cols-[160px_minmax(0,1fr)] items-center gap-6 sm:gap-8 border border-[#dbe5de] p-7 sm:p-10">
            <div className="flex flex-col gap-4">
              {t.terrain}
              <span className="font-serif text-[48px] leading-none text-[#1E6F4C]">{t.kw}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[22px] sm:text-[24px] font-normal tracking-[-0.3px] text-[#12432E]">{t.name}</h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#1A2E23]">{t.text}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

/** Dark band with a 3 / 5 / 10 kW tab switch. */
export function HydrogerCapacityComparison() {
  const [activeTab, setActiveTab] = useState<keyof typeof SPECS>("3kw");
  const currentSpec = SPECS[activeTab];

  return (
    <section id="capacity" className="w-full bg-[#12432E]">
      <motion.div {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center gap-6">
          <SectionPill dark>Turbine Engineering Specs</SectionPill>
          <h2 className="text-[34px] sm:text-[52px] font-light text-[#ffffff] tracking-[-1.2px] leading-[1.1]">
            Hydroger Capacity Comparison
          </h2>
          <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 p-1">
            {(["3kw", "5kw", "10kw"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-2 text-[13px] font-medium transition-all cursor-pointer ${
                  activeTab === tab ? "bg-[#1E6F4C] text-[#ffffff]" : "text-[#e5e4e4]/80 hover:text-[#ffffff]"
                }`}
              >
                {tab.toUpperCase()} Unit
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <div className="lg:col-span-5 bg-[#ffffff] p-7 sm:p-8 flex flex-col gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <h3 className="text-[24px] sm:text-[28px] font-light text-[#1A2E23] tracking-[-0.5px] leading-tight">{currentSpec.name}</h3>
            <p className="text-[15px] text-[#5B6660] leading-relaxed">{currentSpec.ideal}</p>
            <div className="bg-[#F3F6F3] p-5 space-y-2 text-[14px]">
              <div className="text-[#5B6660] uppercase text-[11px] font-mono">Portability Profile</div>
              <p className="text-[#1A2E23] font-medium">{currentSpec.weight}</p>
              <p className="text-[#5B6660]">Designed for remote mountain transport without heavy machinery.</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.06] border border-white/15 p-4 sm:p-6">
            <table className="w-full text-left text-[14px] sm:text-[15px]">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal w-1/3">Operating Head</td>
                  <td className="py-4 text-[#ffffff] font-mono">{currentSpec.head}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Water Flow Rate</td>
                  <td className="py-4 text-[#ffffff] font-mono">{currentSpec.discharge}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Rated Output</td>
                  <td className="py-4 text-[#ffffff] font-mono">{currentSpec.output}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Operating Speed</td>
                  <td className="py-4 text-[#ffffff] font-mono">{currentSpec.rpm}</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-[#e5e4e4]/70 font-normal">Alternator Spec</td>
                  <td className="py-4 text-[#ffffff]">{currentSpec.alternator}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/** Labelled schematic of the mechanism described in the text: water → turbine → shaft → alternator (in the cast-iron casing) → electricity. */
function HydrogerSchematic() {
  const label = "fill-[#1A2E23] text-[15px]";
  const sub = "fill-[#5B6660] text-[12px]";
  return (
    <svg viewBox="0 0 640 400" className="w-full h-auto" role="img" aria-label="Hydroger schematic: flowing water spins the turbine, a shaft drives the alternator inside the cast-iron casing, and the alternator produces electricity">
      {/* casing */}
      <rect x="220" y="40" width="200" height="150" rx="18" fill="#ffffff" stroke="#12432E" strokeWidth="3" />
      {/* alternator */}
      <rect x="260" y="70" width="120" height="90" rx="10" fill="#1E6F4C" />
      <text x="320" y="121" textAnchor="middle" className="fill-[#ffffff] text-[15px]">Alternator</text>
      {/* shaft */}
      <rect x="312" y="190" width="16" height="90" fill="#5B6660" />
      {/* turbine */}
      <g transform="translate(320 300)">
        <circle r="38" fill="#ffffff" stroke="#12432E" strokeWidth="3" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <path key={a} d="M0 0 L0 -34 Q14 -26 10 -8 Z" fill="#E8A33D" transform={`rotate(${a})`} />
        ))}
        <circle r="7" fill="#12432E" />
      </g>
      {/* water */}
      <path d="M20 300 C80 290 150 310 272 300" stroke="#5E8FA3" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M368 300 C470 312 540 290 620 300" stroke="#5E8FA3" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.55" />
      <path d="M250 292 l18 8 -18 8" fill="none" stroke="#5E8FA3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* electricity */}
      <path d="M420 115 H540" stroke="#E8A33D" strokeWidth="4" strokeLinecap="round" />
      <path d="M552 95 l-14 24 h14 l-10 24" fill="none" stroke="#E8A33D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* labels */}
      <text x="220" y="26" className={label}>Cast-iron casing</text>
      <text x="345" y="240" className={label}>Shaft</text>
      <text x="370" y="360" className={label}>Turbine</text>
      <text x="20" y="276" className={label}>Flowing water</text>
      <text x="20" y="330" className={sub}>spins the turbine</text>
      <text x="470" y="170" className={label}>Electricity</text>
      <text x="470" y="190" className={sub}>no fuel, no combustion</text>
    </svg>
  );
}
