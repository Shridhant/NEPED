import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadAllProjects } from "@/lib/contentLoader";
import { fadeUpOnView } from "@/lib/motionVariants";
import { Search } from "lucide-react";
import { NEPED_PATHS } from "@/routes/paths";
import { ProjectTile } from "@/components/neped/ProjectTile";
import { SectionPill } from "@/components/shared/SectionPill";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { BlurReveal } from "@/components/ui/blur-reveal";

const GLASS_CARD =
  "rounded-[16px] bg-gradient-to-br from-white/20 to-white/[0.05] border border-white/25 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.3)]";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    document.title = "NEPED Projects Archive — Official Registry of Implemented Programs (1995–Present)";
  }, []);

  const allProjects = useMemo(() => loadAllProjects(), []);

  const categories = [
    "All",
    "Agroforestry",
    "Biodiversity & Climate",
    "Handicrafts & Livelihood",
    "Conservation",
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.fundingAgency.toLowerCase().includes(q) ||
        p.phase.toLowerCase().includes(q) ||
        p.period.toLowerCase().includes(q) ||
        (p.objective && p.objective.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, activeCategory, searchQuery]);

  const stats = [
    { value: `${allProjects.length} Projects`, label: "Documented Archive" },
    { value: "854", label: "Villages Reached" },
    { value: "7.8M+", label: "Trees Planted" },
    { value: "1995 – 2026", label: "Operational Span" },
  ];

  return (
    <div className="theme-neped w-full space-y-16 sm:space-y-20 pb-24">
      {/* 1. HERO — inset rounded photo panel with glass stat cards (NEPED homepage style) */}
      <section className="px-2.5 sm:px-4 pt-2.5 sm:pt-4">
        <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0f2a21] text-[#ffffff]">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img src="/forest.webp" alt="Nagaland Agroforestry & Ecology" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f18]/85 via-[#0b1f18]/50 to-[#0b1f18]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f18]/80 via-transparent to-[#0b1f18]/40" />
          </div>

          <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-14 pt-32 sm:pt-40 pb-6 sm:pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-[820px] space-y-6"
            >
              <span className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-[1584px] border border-white/45 text-[12px] sm:text-[13px]">
                <span>Autonomous Registered Society • Govt. of Nagaland</span>
                <span className="hidden sm:inline text-white/40">|</span>
                <span className="hidden sm:inline text-white/75">Official Project Registry</span>
              </span>
              <BlurReveal as="h1" className="text-[40px] sm:text-[64px] lg:text-[76px] font-light tracking-[-2px] leading-[1.02]">{"Projects Implemented Under NEPED"}</BlurReveal>
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

      {/* 2. FILTER & SEARCH */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#f5f5f5] rounded-[20px] p-3 sm:p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="relative flex-1 lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8d8d8d]" size={16} />
            <input
              type="text"
              placeholder="Search by project name, agency, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-16 py-3 bg-[#ffffff] border border-transparent focus:border-(--brand-accent) rounded-[1584px] text-[14px] text-[#000000] placeholder:text-[#8d8d8d] outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-[#666666] hover:text-[#000000] bg-[#f5f5f5] px-2.5 py-1 rounded-full cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[1584px] text-[13px] font-medium transition-all active:scale-[0.97] cursor-pointer ${
                  activeCategory === cat ? "bg-(--brand-accent) text-[#ffffff]" : "text-[#494949] hover:text-[#000000] hover:bg-[#ffffff]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[12px] font-mono text-[#8d8d8d] px-2">
          <span>
            Showing <strong className="text-[#000000] font-medium">{filteredProjects.length}</strong> of {allProjects.length} official projects
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </span>
          {searchQuery && (
            <span>
              Keyword: <span className="text-(--brand-accent)">"{searchQuery}"</span>
            </span>
          )}
        </div>
      </section>

      {/* 3. PROJECT CARDS GRID */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {filteredProjects.length === 0 ? (
          <div className="bg-[#f5f5f5] rounded-[20px] p-12 text-center flex flex-col items-center gap-4">
            <p className="text-[16px] text-[#666666]">No projects match your search or filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-[1584px] bg-(--brand-accent) hover:bg-(--brand-accent-hover) text-[14px] font-medium text-[#ffffff] cursor-pointer transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full [&>a]:h-full"
                >
                  <ProjectTile project={proj} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* 4. CROSS-NAVIGATION BANNER — dark green CTA to About Us */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative rounded-[24px] overflow-hidden bg-(--brand-surface) px-6 py-14 sm:px-12 sm:py-16 text-center">
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
