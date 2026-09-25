import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
  NumberedItem,
} from "@/components/ui/AkerPrimitives";
import { BlurReveal } from "@/components/ui/blur-reveal";

export function NepedEnergyAboutPage() {
  useEffect(() => {
    document.title = "About NEPeD";
  }, []);

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

  const memoriam = [
    {
      name: "Lt. Er. Shanchothung Odyuo",
      role: "POU Member (Pioneer Hydro Engineer)",
      life: "11/12/1962 – 05/03/2010",
      tribute: "A foundational pillar in designing and manufacturing the first generation of indigenous Nagaland Hydrogers.",
    },
    {
      name: "Lt. Raj K. Verma (NCS)",
      role: "Deputy Team Leader",
      life: "13/04/1959 – 03/02/2012",
      tribute: "Instrumental in establishing community frameworks and village energy committees across remote districts.",
    },
  ];

  return (
    <div className="w-full space-y-20 sm:space-y-28">
      {/* 1. FULL-BLEED SECTION HERO */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-windmill.webp"
            alt="NEPeD Inception History"
            className="w-full h-full object-cover opacity-50 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 pt-16 sm:pt-20 max-w-[480px]"
        >
          <SectionLabel dark={true} className="mb-2">
            01 / Background & Heritage
          </SectionLabel>
          <BlurReveal as="h1" className="text-[36px] sm:text-[56px] font-light text-[#ffffff] tracking-[-1.55px] leading-tight">{"Empowerment Through Energy"}</BlurReveal>
          <p className="mt-4 text-[15px] text-[#e5e4e4]/80 leading-relaxed">
            Formed in 2007 as a specialized multidisciplinary team, NEPeD evolved from economic development to green power generation for sustainable village self-reliance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-[#e5e4e4]/70"
        >
          <span>7-Member Multidisciplinary Cell • Government of Nagaland Initiative</span>
          <a href="#vision" className="hover:text-white transition-colors">
            Scroll to Statements ↓
          </a>
        </motion.div>
      </section>

      {/* 2. VISION & MISSION CARDS (2-Column Grid with Mist card) */}
      <motion.section {...fadeUpOnView} id="vision" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8">
          <SectionLabel>02 / Mandate</SectionLabel>
          <SectionHeading size="lg" className="mt-1">
            Vision & Mission Framework
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="bg-[#e5e4e4] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-mono text-[#666666] uppercase tracking-wider">
                Our Vision
              </span>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#000000] tracking-[-0.72px] mt-3">
                A Vibrant Himalayan Economy
              </h3>
              <p className="font-serif italic text-[16px] sm:text-[17px] text-[#262626] leading-[1.6] mt-4">
                “Nagaland has the unique distinction where people are empowered and have sustainable livelihoods by being part of a vibrant economy, driven by locally generated eco-friendly power that is being used for accelerated development.”
              </p>
            </div>
            <div className="pt-6 border-t border-[#000000]/10 text-[12px] text-[#666666]">
              Leader in Sustainable Development
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-mono text-[#8d8d8d] uppercase tracking-wider">
                Our Mission
              </span>
              <h3 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-[-0.72px] mt-3">
                People-Centric Partnership
              </h3>
              <p className="font-serif italic text-[16px] sm:text-[17px] text-[#e5e4e4] leading-[1.6] mt-4">
                “To evolve a bottom-up approach to empower stakeholders to become partners in development, create awareness about green-energy utilization, and judiciously create need-based infrastructure that becomes a replicable model.”
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-[12px] text-[#8d8d8d]">
              Transparent & Replicable Development Model
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. AIMS & OBJECTIVES (Numbered List Rows with Mist Hairlines) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <SectionLabel>03 / Strategic Pillars</SectionLabel>
            <SectionHeading size="md">
              Core Aims & Technology Objectives
            </SectionHeading>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              Guiding principles framed at inception in 2007 to ensure technical precision, environmental protection, and community sovereignty.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-1">
            <NumberedItem
              num="01"
              title="Community-Based Pico/Micro Hydro"
              subtitle="Implement sub-megawatt micro-turbines designed for rugged mountain water channels."
            />
            <NumberedItem
              num="02"
              title="Catchment Area Conservation"
              subtitle="Promote ecological watershed protection in all energy generation sites."
            />
            <NumberedItem
              num="03"
              title="R&D of Indigenous Hydroger Tech"
              subtitle="Continuously advance locally engineered turbines and electronic load controllers."
            />
            <NumberedItem
              num="04"
              title="Capacity Building for Rural Engineers"
              subtitle="Provide youth and women with technical skills, operation certs, and market linkages."
            />
            <NumberedItem
              num="05"
              title="Cross-State Regional Collaboration"
              subtitle="Partner with government and non-government agencies across Northeast India."
            />
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUpOnView} id="inception" className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Inception Members */}
          <div className="bg-[#e5e4e4]/30 border border-[#e5e4e4] rounded-[8px] p-8 sm:p-10 space-y-6">
            <div>
              <SectionLabel>2007 Founding Unit</SectionLabel>
              <h3 className="text-[28px] font-light text-[#000000] tracking-[-0.72px] mt-1">
                Inception POU Cell
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {inceptionTeam.map((mem) => (
                <div
                  key={mem.name}
                  className="p-3 bg-[#ffffff] border border-[#e5e4e4] rounded-[6px]"
                >
                  <h4 className="text-[14px] font-medium text-[#000000]">{mem.name}</h4>
                  <span className="text-[11px] text-[#8d8d8d]">{mem.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. IN MEMORIAM EXHIBIT (Dark gallery tribute card) */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-xl mb-8">
            <span className="text-[12px] uppercase tracking-[0.12px] text-[#b75928]">
              In Memoriam & Dedication
            </span>
            <h3 className="text-[32px] sm:text-[40px] font-light text-[#ffffff] tracking-[-0.72px] mt-2">
              Remembering Our Pioneers
            </h3>
            <p className="text-[14px] text-[#e5e4e4]/80 mt-2 leading-relaxed">
              We honor the visionaries whose engineering breakthroughs and dedication laid the groundwork for rural hydro power across Nagaland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memoriam.map((item) => (
              <div
                key={item.name}
                className="bg-[#262626] border border-white/10 rounded-[8px] p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#b75928]">{item.life}</span>
                  <span className="text-[11px] text-[#8d8d8d]">Honour Roll</span>
                </div>
                <h4 className="text-[18px] font-medium text-[#ffffff]">{item.name}</h4>
                <p className="text-[12px] text-[#e5e4e4]/70">{item.role}</p>
                <p className="text-[13px] text-[#e5e4e4]/90 pt-2 border-t border-white/10 leading-relaxed font-serif italic">
                  “{item.tribute}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
