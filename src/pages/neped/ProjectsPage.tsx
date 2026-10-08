import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { loadAllProjects } from "@/lib/contentLoader";
import { fadeUpOnView } from "@/lib/motionVariants";
import { NEPED_PATHS } from "@/routes/paths";
import { ProjectsTable } from "@/components/neped/ProjectsTable";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { BlurReveal } from "@/components/ui/blur-reveal";

const GLASS_CARD =
  " bg-gradient-to-br from-white/20 to-white/[0.05] border border-white/25 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.3)]";

export function ProjectsPage() {
  useEffect(() => {
    document.title = "Our Work — NEPED";
  }, []);

  const allProjects = useMemo(() => loadAllProjects(), []);

  const stats = [
    { value: `${allProjects.length} Projects`, label: "Documented Archive" },
    { value: "854", label: "Villages Reached" },
    { value: "7.8M+", label: "Trees Planted" },
    { value: "1995 – 2026", label: "Operational Span" },
  ];

  return (
    <div className="theme-neped w-full space-y-16 sm:space-y-20 pb-24">
      {/* 1. HERO — inset  photo panel with glass stat cards (NEPED homepage style) */}
      <section className="px-2.5 sm:px-4 pt-2.5 sm:pt-4">
        <div className="relative overflow-hidden bg-[#12432E] text-[#ffffff]">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img src="/forest.webp" alt="Nagaland Agroforestry & Ecology" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12432E]/85 via-[#12432E]/50 to-[#12432E]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12432E]/80 via-transparent to-[#12432E]/40" />
          </div>

          <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-14 pt-14 sm:pt-20 pb-6 sm:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-[820px] space-y-6"
            >
              <span className="inline-flex flex-wrap items-center gap-2 px-4 py-2 border border-white/45 text-[12px] sm:text-[13px]">
                <span>Autonomous Registered Society • Govt. of Nagaland</span>
                <span className="hidden sm:inline text-white/40">|</span>
                <span className="hidden sm:inline text-white/75">Official Project Registry</span>
              </span>
              <BlurReveal as="h1" className="text-[40px] sm:text-[64px] lg:text-[76px] font-light tracking-[-2px] leading-[1.02]">{"Our Work"}</BlurReveal>
              <p className="max-w-[640px] text-[15px] sm:text-[17px] text-[#ffffff]/90 leading-relaxed">
                Three decades of landmark interventions in community agroforestry, shifting cultivation transformation, clean micro-hydro engineering, biodiversity conservation, and artisan economic empowerment across Nagaland.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className={`${GLASS_CARD} p-5 sm:p-6 space-y-2`}>
                  <span className="text-[24px] sm:text-[32px] font-light tracking-[-0.6px] leading-none block">{stat.value}</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#ffffff]/70 block">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROJECTS IMPLEMENTED — one table for NEPED and NEPeD projects, filterable by lineage and searchable */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <ProjectsTable projects={allProjects} />
      </section>

      {/* 4. CROSS-NAVIGATION BANNER — dark green CTA to About Us */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative overflow-hidden bg-(--brand-surface) px-6 py-14 sm:px-12 sm:py-16 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-(--brand-accent-on-dark)/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-[760px] mx-auto flex flex-col items-center gap-6">
            <SectionPill dark>NEPED</SectionPill>
            <h2 className="text-[28px] sm:text-[44px] font-light text-[#ffffff] tracking-[-1px] leading-[1.1]">
              About NEPED
            </h2>
            <ArrowPillButton to={NEPED_PATHS.about} arrow="up-right">About Us</ArrowPillButton>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
