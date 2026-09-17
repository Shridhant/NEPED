import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
  TextArrowButton,
  PillBadge,
} from "@/components/ui/AkerPrimitives";

interface LocationGroup {
  region: string;
  state: "Nagaland" | "Neighbouring States";
  villages: string[];
}

const locations: LocationGroup[] = [
  {
    region: "Kohima",
    state: "Nagaland",
    villages: ["Khiyokie", "Tsiepama", "Logwesunyu", "Phesama", "Sendenyu Model Farm Village"],
  },
  {
    region: "Tuensang",
    state: "Nagaland",
    villages: ["Langnok", "Chiphur", "Shopelak", "Longra", "Kingjung", "Aniashu", "Kingpao", "Deithung", "Pang"],
  },
  {
    region: "Mokokchung",
    state: "Nagaland",
    villages: ["Salulamang", "Longkong", "Longkhum", "Kubolong"],
  },
  {
    region: "Kiphire",
    state: "Nagaland",
    villages: ["Achumse's farm", "Hurong (Chemlongse's farm)", "Kaha", "Tukhinkiu Village"],
  },
  {
    region: "Longleng",
    state: "Nagaland",
    villages: ["Yanglok", "Anaki C (L. Bulom's Farm)", "Yongyah"],
  },
  {
    region: "Mon",
    state: "Nagaland",
    villages: ["Sheangha wamsa", "Nyanhyu"],
  },
  {
    region: "Zunheboto",
    state: "Nagaland",
    villages: ["Kheshepu", "Phushito's farm - Xuivi village"],
  },
  {
    region: "Dimapur",
    state: "Nagaland",
    villages: ["Seithekima R&D Base"],
  },
  {
    region: "Peren",
    state: "Nagaland",
    villages: ["Datui’s Farm"],
  },
  {
    region: "Meghalaya",
    state: "Neighbouring States",
    villages: ["Sakhri Village", "Mawlyngbna"],
  },
  {
    region: "Sikkim",
    state: "Neighbouring States",
    villages: ["Martam"],
  },
  {
    region: "Arunachal Pradesh",
    state: "Neighbouring States",
    villages: ["Pongging village"],
  },
];

export function ImpactPage() {
  const [activeRegion, setActiveRegion] = useState<string>("Kohima");

  useEffect(() => {
    document.title = "Impact & Village Deployments — NEPeD";
  }, []);

  const selectedLocation = locations.find((l) => l.region === activeRegion) || locations[0];

  const pillars = [
    {
      num: "01",
      title: "Reduction of Women's Drudgery",
      desc: "Clean light eliminates dangerous evening firewood collection routines. Hydroger energy eases household cooking, water pumping, and manual grain milling.",
    },
    {
      num: "02",
      title: "Night-Time Cottage Livelihoods",
      desc: "Lighting gives weavers, knitters, and artisans extra productive evening hours. Rural carpenters use electric grinding and cutting tools to launch local enterprises.",
    },
    {
      num: "03",
      title: "Rural Engineers Program",
      desc: "Local youths are trained as certified hydro operators and maintenance engineers, establishing skilled, long-term employment directly inside rural villages.",
    },
    {
      num: "04",
      title: "Catchment Forest Conservation",
      desc: "Recognizing that uninterrupted streamflow directly guarantees electricity, village councils establish legally protected watershed preservation belts.",
    },
  ];

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* 1. FULL-BLEED HERO */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/20 Kingjung Village Energy Committee (2).jpg"
            alt="Village Energy Committee"
            className="w-full h-full object-cover opacity-50 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-16 sm:pt-20 max-w-[500px]"
        >
          <SectionLabel dark={true} className="mb-2">
            01 / Community Footprint
          </SectionLabel>
          <h1 className="text-[36px] sm:text-[56px] font-light text-[#ffffff] tracking-[-1.55px] leading-tight">
            Village Impact & Transformations
          </h1>
          <p className="mt-4 text-[15px] text-[#e5e4e4]/80 leading-relaxed">
            From remote hilltops in Tuensang to neighbouring Himalayan states, NEPeD hydrogers power off-grid communities with sustainable green electricity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#e5e4e4]/70"
        >
          <span>75+ Installed Micro-Hydro Sites • 12 Districts & 3 States</span>
          <a href="#villages" className="hover:text-white transition-colors">
            Explore Village Directory ↓
          </a>
        </motion.div>
      </section>

      {/* 2. FOUR IMPACT PILLARS (2-Column Grid with Mist & White cards) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8">
          <SectionLabel>02 / Transformation Pillars</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Empowering grassroots development
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:border-[#000000]"
            >
              <div>
                <span className="text-[12px] font-mono text-[#8d8d8d] uppercase tracking-wider">
                  Pillar {p.num}
                </span>
                <h3 className="text-[24px] sm:text-[28px] font-light text-[#000000] tracking-[-0.5px] mt-2">
                  {p.title}
                </h3>
                <p className="text-[15px] text-[#666666] mt-3 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-[#e5e4e4] flex items-center justify-between text-[12px] text-[#8d8d8d]">
                <span>Grassroots Impact</span>
                <span className="text-[#b75928] font-medium">NEPeD Model</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. INTERACTIVE REGIONAL VILLAGE DIRECTORY */}
      <motion.section {...fadeUpOnView} id="villages" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#e5e4e4]/40 border border-[#e5e4e4] rounded-[8px] p-8 sm:p-12">
          <div className="max-w-xl mb-8">
            <SectionLabel>Field Installation Registry</SectionLabel>
            <SectionHeading size="md" className="mt-1">
              Select a District or State
            </SectionHeading>
            <p className="text-[14px] text-[#666666] mt-2">
              Browse hydroger installations, village committees, and micro-grid sites across the region.
            </p>
          </div>

          {/* Pill Selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {locations.map((loc) => (
              <button
                key={loc.region}
                type="button"
                onClick={() => setActiveRegion(loc.region)}
                className={`px-4 py-2 rounded-[1584px] text-[13px] font-medium transition-all ${
                  activeRegion === loc.region
                    ? "bg-[#1c1c1c] text-[#ffffff]"
                    : "bg-[#ffffff] text-[#000000] border border-[#e5e4e4] hover:border-[#000000]"
                }`}
              >
                {loc.region}
                <span className="ml-1.5 text-[11px] opacity-70">
                  ({loc.villages.length})
                </span>
              </button>
            ))}
          </div>

          {/* Selected Region Card */}
          <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#e5e4e4] pb-4 mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8d8d8d] font-mono">
                  {selectedLocation.state}
                </span>
                <h3 className="text-[26px] font-light text-[#000000]">
                  {selectedLocation.region} Deployments
                </h3>
              </div>
              <PillBadge>{selectedLocation.villages.length} Sites Documented</PillBadge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedLocation.villages.map((village, idx) => (
                <div
                  key={village}
                  className="p-4 bg-[#e5e4e4]/30 rounded-[6px] border border-[#e5e4e4] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#8d8d8d]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-medium text-[#000000]">
                      {village}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#b75928]">Active Grid</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. TONAL FEATURE PANEL (Char #1c1c1c Gallery Card) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-xl space-y-4">
            <SectionLabel dark={true} className="text-[#b75928]">
              Rural Sustainability Concept
            </SectionLabel>
            <h3 className="text-[32px] sm:text-[40px] font-light text-[#ffffff] tracking-[-0.72px] leading-tight">
              The 'Rural Engineers' Framework
            </h3>
            <p className="text-[15px] text-[#e5e4e4]/80 leading-relaxed font-serif italic">
              “Empowerment is incomplete without local autonomy. By training village youth to assemble, troubleshoot, and operate hydrogers without outside dependencies, NEPeD turns recipients into engineers.”
            </p>
            <div className="pt-4 flex items-center gap-4">
              <TextArrowButton to="/about" dark={true} variant="pill">
                About the Society
              </TextArrowButton>
              <TextArrowButton to="/technology" dark={true} variant="inline">
                View Turbine Specs
              </TextArrowButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
