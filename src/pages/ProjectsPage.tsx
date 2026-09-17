import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionLabel,
  TextArrowButton,
  PillBadge,
} from "@/components/ui/AkerPrimitives";
import { loadAllProjects } from "@/lib/contentLoader";
import { fadeUpOnView } from "@/lib/motionVariants";
import { Search } from "lucide-react";

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

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-20">
      {/* 1. FULL-BLEED HERO BANNER */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] bg-[#070707] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden">
        {/* Full-bleed background photo with vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/forest.png"
            alt="Nagaland Agroforestry & Ecology"
            className="w-full h-full object-cover opacity-45 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-[#070707]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/70 via-transparent to-[#070707]/60" />
        </div>

        {/* Hero Top Content */}
        <div className="relative z-10 pt-16 sm:pt-20 lg:pt-24 max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] border border-white/18 backdrop-blur-md mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#b75928] animate-pulse" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#e5e4e4] font-mono font-medium">
              Autonomous Registered Society • Govt. of Nagaland
            </span>
            <span className="hidden sm:inline text-white/30 font-mono">|</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-[0.1em] text-[#e5e4e4]/70 font-mono">
              Official Project Registry
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-[36px] sm:text-[56px] md:text-[68px] font-light text-[#ffffff] tracking-[-1.55px] leading-[1.05]"
          >
            Projects Implemented Under NEPED
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="mt-4 text-[15px] sm:text-[16px] text-[#e5e4e4]/90 font-normal leading-relaxed max-w-[680px]"
          >
            Three decades of landmark interventions in community agroforestry, shifting cultivation transformation, clean micro-hydro engineering, biodiversity conservation, and artisan economic empowerment across Nagaland.
          </motion.p>
        </div>

        {/* Hero Bottom Bar with Live Statistics */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 mt-auto pt-6 border-t border-white/12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#ffffff]"
        >
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">{allProjects.length} Projects</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Documented Archive</div>
          </div>
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">854</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Villages Reached</div>
          </div>
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">7.8M+</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Trees Planted</div>
          </div>
          <div>
            <div className="text-[20px] sm:text-[24px] font-light tracking-tight">1995 – 2026</div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#e5e4e4]/60">Operational Span</div>
          </div>
        </motion.div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#ffffff] border border-[#e5e4e4] rounded-[8px] p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8d8d8d]" size={16} />
            <input
              type="text"
              placeholder="Search by project name, agency, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#e5e4e4]/30 hover:bg-[#e5e4e4]/50 focus:bg-[#ffffff] border border-[#e5e4e4] focus:border-[#000000] rounded-[80px] text-[13.5px] text-[#000000] placeholder:text-[#8d8d8d] outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-[#8d8d8d] hover:text-[#000000] bg-black/5 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[1584px] text-[12px] font-medium transition-all active:scale-[0.97] cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#1c1c1c] text-[#ffffff] shadow-sm"
                    : "bg-[#e5e4e4]/50 text-[#494949] hover:bg-[#e5e4e4] hover:text-[#000000]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Metadata indicator */}
        <div className="mt-4 flex items-center justify-between text-[12px] font-mono text-[#8d8d8d] px-1">
          <span>
            Showing <strong className="text-[#000000]">{filteredProjects.length}</strong> of {allProjects.length} official projects
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </span>
          {searchQuery && (
            <span>
              Keyword: <span className="text-[#b75928]">"{searchQuery}"</span>
            </span>
          )}
        </div>
      </section>

      {/* 3. PROJECT CARDS GRID */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {filteredProjects.length === 0 ? (
          <div className="bg-[#e5e4e4]/20 border border-[#e5e4e4] rounded-[8px] p-12 text-center space-y-3">
            <p className="text-[16px] text-[#666666]">No projects match your search or filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="text-[13px] font-medium text-[#b75928] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    to={`/neped-economic/project/${proj.slug}`}
                    className="group h-full rounded-[8px] border border-[#1c1c1c]/10 bg-[#070707] shadow-lg shadow-black/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 hover:border-white/25"
                  >
                    {/* Image banner with phase tag + period */}
                    <div className="relative h-[130px] overflow-hidden bg-[#1c1c1c]">
                      <img
                        src={proj.heroImage}
                        alt={proj.name}
                        className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/20 to-transparent" />
                      <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
                        <span className="rounded-[80px] border border-white/20 bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.12px] text-[#ffffff]">
                          {proj.phase}
                        </span>
                      </div>
                      <div className="absolute right-3.5 top-3.5">
                        <PillBadge dark={true}>{proj.category}</PillBadge>
                      </div>
                      <div className="absolute left-3.5 bottom-3 text-[10px] font-mono text-[#e5e4e4]/70 uppercase">
                        {proj.period}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-[17px] font-light leading-[1.25] text-[#ffffff] tracking-[-0.2px] group-hover:text-white transition-colors">
                          {proj.name}
                        </h3>

                        {proj.objective ? (
                          <p className="text-[13px] leading-relaxed text-[#e5e4e4]/75 line-clamp-4">
                            {proj.objective}
                          </p>
                        ) : (
                          <p className="text-[12.5px] italic leading-relaxed text-[#8d8d8d]">
                            No objective statement recorded in the source register for this project.
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-white/10 space-y-3">
                        <div className="text-[11px] text-[#8d8d8d]">
                          <span className="font-mono uppercase tracking-wider text-[10px] text-[#8d8d8d]/80 block">
                            Funding Agency
                          </span>
                          <span className="text-[#e5e4e4]/90 font-medium">{proj.fundingAgency}</span>
                        </div>

                        <div className="pt-1 flex items-center justify-between text-[12.5px] sm:text-[13px] text-[#ffffff] group-hover:text-[#b75928] transition-colors">
                          <span className="font-medium">View Project Details</span>
                          <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* 4. CROSS-NAVIGATION EDITORIAL BANNER */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="bg-[#1c1c1c] text-[#ffffff] rounded-[8px] p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <SectionLabel dark={true} className="text-[#b75928]">
                Master Archives & Governance
              </SectionLabel>
              <h2 className="text-[28px] sm:text-[36px] font-light text-[#ffffff] tracking-tight leading-tight">
                Explore the Complete 30-Year History of NEPED
              </h2>
              <p className="text-[14.5px] text-[#e5e4e4]/80 leading-relaxed max-w-2xl">
                Read the inception mandate, honor roll of 11 Team Leaders, multidisciplinary Project Operations Unit (POU) governance culture, and foundational ICEF/CIDA milestones.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <TextArrowButton to="/neped-economic" dark={true} variant="pill">
                30-Year Heritage Archive
              </TextArrowButton>
              <TextArrowButton to="/gallery" dark={true} variant="pill" className="bg-white/5 border-white/15 hover:bg-white/10">
                Field Exhibit Gallery
              </TextArrowButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
