import { useEffect, useState } from "react";
import {
  SectionLabel,
  SectionHeading,
  TextArrowButton,
} from "@/components/ui/AkerPrimitives";

export function TechnologyPage() {
  const [activeTab, setActiveTab] = useState<"3kw" | "5kw" | "10kw">("3kw");

  useEffect(() => {
    document.title = "Technology & Hydrogers — NEPeD Indigenous Micro-Hydro";
  }, []);

  const specs = {
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

  const currentSpec = specs[activeTab];

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* 1. FULL-BLEED HERO */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/microgrid.png"
            alt="Hydroger Technology"
            className="w-full h-full object-cover opacity-50 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        <div className="relative z-10 pt-16 sm:pt-20 max-w-[500px]">
          <SectionLabel dark={true} className="mb-2">
            01 / Indigenous Engineering
          </SectionLabel>
          <h1 className="text-[36px] sm:text-[56px] font-light text-[#ffffff] tracking-[-1.55px] leading-tight">
            The Hydroger & ELC System
          </h1>
          <p className="mt-4 text-[15px] text-[#e5e4e4]/80 leading-relaxed">
            Pioneered and manufactured in Nagaland, our pico-hydro turbines harness high-velocity mountain streams to deliver clean 230V baseload electricity.
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#e5e4e4]/70">
          <span>Sub-Megawatt Pico Hydro • Solid-State Electronic Load Balancing</span>
          <a href="#specs" className="hover:text-white transition-colors">
            View Technical Specs ↓
          </a>
        </div>
      </section>

      {/* 2. TWO-COLUMN FEATURE CARDS (Hydroger + ELC) */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8">
          <SectionLabel>02 / Core Components</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Precision engineering for off-grid resilience
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Mist (#e5e4e4) Hydroger Card */}
          <div className="bg-[#e5e4e4] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              <span className="text-[12px] font-mono text-[#666666] uppercase tracking-wider">
                Component A
              </span>
              <h3 className="text-[30px] sm:text-[36px] font-light text-[#000000] tracking-[-0.72px] mt-3">
                Indigenous Hydroger
              </h3>
              <p className="text-[15px] text-[#494949] mt-3 leading-relaxed">
                The Hydroger turbine incorporates an impulse Pelton/cross-flow runner encased in a modular chassis. Built to withstand silted mountain water with minimal maintenance.
              </p>

              <div className="mt-6 space-y-2 border-t border-[#000000]/10 pt-4 text-[13px] text-[#262626]">
                <div className="flex justify-between">
                  <span>Available Capacities:</span>
                  <span className="font-mono font-medium">3 kW / 5 kW / 10 kW</span>
                </div>
                <div className="flex justify-between">
                  <span>Manufacturing:</span>
                  <span className="font-mono font-medium">Fabricated in Nagaland</span>
                </div>
                <div className="flex justify-between">
                  <span>Design Life:</span>
                  <span className="font-mono font-medium">15+ Years Continuous</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <TextArrowButton to="#specs" variant="pill">
                Explore Capacities
              </TextArrowButton>
            </div>
          </div>

          {/* Card 2: Char (#1c1c1c) ELC Card with Hardware Image */}
          <div id="elc" className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono text-[#8d8d8d] uppercase tracking-wider">
                  Component B • Dimapur R&D
                </span>
                <span className="text-[11px] font-mono bg-white/10 text-[#ffffff] px-2 py-0.5 rounded-[1584px]">
                  ~1 kg Apparatus
                </span>
              </div>
              <h3 className="text-[30px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-3">
                Electronic Load Controller (ELC)
              </h3>
              <p className="text-[14px] text-[#e5e4e4]/80 mt-3 leading-relaxed">
                Originally, Hydrogers lacked ELCs, requiring tricky manual load balancing that often fused bulbs and damaged appliances. Under its Entrepreneurship Programme, NEPeD funded a local Electronic Engineer who built a working prototype in 2009.
              </p>

              <div className="my-4 aspect-[16/9] rounded-[6px] overflow-hidden bg-[#070707] border border-white/10">
                <img
                  src="/elc-device.png"
                  alt="NEPeD Electronic Load Controller Device"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-1.5 text-[12px] text-[#e5e4e4]">
                <div className="font-medium text-[#b75928]">Controls 6 Parameters:</div>
                <div className="grid grid-cols-2 gap-1 text-[12px] text-[#8d8d8d]">
                  <span>(a) Constant Generator RPM</span>
                  <span>(b) Frequency (12–60Hz)</span>
                  <span>(c) Overload Protection</span>
                  <span>(d) High Voltage Cutoff</span>
                  <span>(e) Low Voltage Regulation</span>
                  <span>(f) Short Circuit Protection</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="text-[12px] text-[#8d8d8d]">Parallel Hydroger Synchronizer</span>
              <TextArrowButton to="#specs" dark={true} variant="pill">
                Turbine Specs
              </TextArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TECHNICAL SPECIFICATIONS EXHIBIT */}
      <section id="specs" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-4 border-b border-[#e5e4e4] pb-6">
            <div>
              <SectionLabel>Technical Data Sheet</SectionLabel>
              <SectionHeading size="md" className="mt-1">
                Hydroger Turbine Specifications
              </SectionHeading>
            </div>

            {/* Pill Selector */}
            <div className="flex items-center gap-2 bg-[#e5e4e4]/50 p-1 rounded-[1584px]">
              {(["3kw", "5kw", "10kw"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-[1584px] text-[13px] font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#1c1c1c] text-[#ffffff]"
                      : "text-[#666666] hover:text-[#000000]"
                  }`}
                >
                  {tab.toUpperCase()} Unit
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-[24px] font-light text-[#000000]">{currentSpec.name}</h3>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                {currentSpec.ideal}
              </p>
              <div className="p-4 bg-[#e5e4e4]/30 rounded-[8px] border border-[#e5e4e4] space-y-2 text-[13px]">
                <div className="text-[#8d8d8d] uppercase text-[11px] font-mono">Portability Profile</div>
                <p className="text-[#000000]">{currentSpec.weight}</p>
                <p className="text-[#666666]">Designed for remote mountain transport without heavy machinery.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <table className="w-full text-left text-[14px]">
                <tbody>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3.5 text-[#8d8d8d] font-normal w-1/3">Operating Head</td>
                    <td className="py-3.5 text-[#000000] font-mono">{currentSpec.head}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3.5 text-[#8d8d8d] font-normal">Water Flow Rate</td>
                    <td className="py-3.5 text-[#000000] font-mono">{currentSpec.discharge}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3.5 text-[#8d8d8d] font-normal">Rated Output</td>
                    <td className="py-3.5 text-[#000000] font-mono">{currentSpec.output}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3.5 text-[#8d8d8d] font-normal">Operating Speed</td>
                    <td className="py-3.5 text-[#000000] font-mono">{currentSpec.rpm}</td>
                  </tr>
                  <tr className="border-b border-[#e5e4e4]">
                    <td className="py-3.5 text-[#8d8d8d] font-normal">Alternator Spec</td>
                    <td className="py-3.5 text-[#000000]">{currentSpec.alternator}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MICROGRID ARCHITECTURE (Pine & Tide Surfaces) */}
      <section id="microgrids" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pine Card */}
          <div className="bg-[#193f32] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <SectionLabel dark={true} className="text-[#e5e4e4]">
                Off-Grid Architecture
              </SectionLabel>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-3">
                Decentralized Village Grids
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 mt-3 leading-relaxed">
                Distribution lines run directly from the powerhouse to village dwellings, eliminating expensive long-distance transmission line losses.
              </p>
            </div>
            <div className="pt-6">
              <TextArrowButton to="/impact" dark={true} variant="pill">
                View Village Case Studies
              </TextArrowButton>
            </div>
          </div>

          {/* Tide Card */}
          <div className="bg-[#002934] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <SectionLabel dark={true} className="text-[#e5e4e4]">
                Zero Emission
              </SectionLabel>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-3">
                Run-of-the-River Impact
              </h3>
              <p className="text-[15px] text-[#e5e4e4]/80 mt-3 leading-relaxed">
                No large dams or flooded valleys. Water is diverted through a small forebay tank, passed through the runner, and returned 100% cleanly to the stream.
              </p>
            </div>
            <div className="pt-6">
              <TextArrowButton to="/about" dark={true} variant="pill">
                Environmental Policy
              </TextArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS IMPLEMENTED UNDER NEPeD (ENERGY DEVELOPMENT) */}
      <section id="energy-projects" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border border-[#e5e4e4] rounded-[8px] bg-[#ffffff] p-8 sm:p-12">
          <div className="mb-8">
            <SectionLabel>Government Sponsored Schemes</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Projects Implemented Under NEPeD (Energy Division)
            </SectionHeading>
            <p className="text-[14px] text-[#666666] mt-2 max-w-xl">
              Official energy technology deployments funded by central ministries and regional development councils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#e5e4e4]/30 rounded-[8px] border border-[#e5e4e4] space-y-3">
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase">2015 – 2016 • MNRE</span>
              <h4 className="text-[17px] font-medium text-[#000000]">
                Installation of 30 Watermills / Pico Hydrogers
              </h4>
              <div className="text-[12px] text-[#b75928] font-medium">
                Ministry of New and Renewable Energy (MNRE), GoI
              </div>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Upgraded and deployed 30 indigenous pico-hydro installations across remote hill villages in Nagaland.
              </p>
            </div>

            <div className="p-6 bg-[#e5e4e4]/30 rounded-[8px] border border-[#e5e4e4] space-y-3">
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase">2017 – 2019 • NEC</span>
              <h4 className="text-[17px] font-medium text-[#000000]">
                Development of Made-in-Nagaland Hydrogers
              </h4>
              <div className="text-[12px] text-[#b75928] font-medium">
                North Eastern Council (NEC)
              </div>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                R&D initiative to standardise and fabricate indigenous Pico Hydro (Hydroger) turbines locally in Nagaland.
              </p>
            </div>

            <div className="p-6 bg-[#e5e4e4]/30 rounded-[8px] border border-[#e5e4e4] space-y-3">
              <span className="text-[11px] font-mono text-[#8d8d8d] uppercase">2018 – 2026 • NAFCC</span>
              <h4 className="text-[17px] font-medium text-[#000000]">
                National Adaptation Fund for Climate Change
              </h4>
              <div className="text-[12px] text-[#b75928] font-medium">
                Ministry of Agriculture, Govt. of India
              </div>
              <p className="text-[13px] text-[#666666] leading-relaxed">
                Empowering mountain villages to mitigate seasonal flow fluctuations and secure sustainable power.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
