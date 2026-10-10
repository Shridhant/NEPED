import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECT_LIST, type ProjectTheme } from "@/data/neped/projectList";
import { NEPED_PATHS } from "@/routes/paths";
import { LogoCloud, type Logo } from "@/components/ui/logo-cloud-2";

type Filter = "All" | ProjectTheme;

const FILTERS: Filter[] = ["All", "Agroforestry", "Conservation", "Energy", "Livelihoods"];

const EASE = [0.65, 0, 0.35, 1] as const;

/** Homepage projects section: every project on one horizontal timeline, newest first, filterable by theme. */
export function ProjectTimeline() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = PROJECT_LIST.filter((p) => filter === "All" || p.theme === filter);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-4">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#12432E]">Our Projects</p>
          <h2 className="font-serif text-[36px] sm:text-[48px] leading-[1.05] tracking-[-0.3px] text-[#1A2E23]">
            {PROJECT_LIST.length} projects, 30 years
          </h2>
        </div>
        <div role="group" aria-label="Filter projects by theme" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f)}
                className={`min-h-10 rounded-full border px-4 text-[14px] font-medium transition-colors duration-300 ease-in-out cursor-pointer ${
                  on ? "border-[#12432E] bg-[#12432E] text-[#ffffff]" : "border-[#dbe5de] bg-[#ffffff] text-[#1A2E23] hover:border-[#1E6F4C]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline: scrolls sideways; four projects in view on desktop */}
      <div className="mt-10 -mx-4 sm:-mx-6 lg:mx-0 overflow-x-auto snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 lg:scroll-px-0 [scrollbar-width:thin]">
        <ol className="relative flex w-max min-w-full px-4 sm:px-6 lg:px-0 pb-4">
          <span aria-hidden className="absolute left-4 right-4 sm:left-6 sm:right-6 lg:left-0 lg:right-0 top-[9px] h-[3px] bg-[#12432E]" />
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((p) => (
              <motion.li
                key={p.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="snap-start shrink-0 w-[78vw] sm:w-[300px] lg:w-[calc((1200px-48px)/4)] max-w-[300px] pr-6"
              >
                <span aria-hidden className="relative z-10 block h-[21px] w-[21px] rounded-full border-2 border-[#12432E] bg-[#ffffff] p-[3px]">
                  <span className="block h-full w-full rounded-full bg-[#E8A33D]" />
                </span>
                <p className="mt-5 text-[13px] font-semibold text-[#8A5A12]">
                  {p.period} · {p.theme}
                </p>
                <h3 className="mt-2.5 text-[18px] font-semibold leading-snug text-[#1A2E23]">{p.name}</h3>
                {p.focus ? <p className="mt-3 text-[14.5px] leading-relaxed text-[#5B6660]">{p.focus}</p> : null}
                <p className="mt-4 text-[12.5px] leading-snug text-[#5B6660]">Funded by {p.funder}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to={NEPED_PATHS.projects}
          className="inline-flex min-h-12 items-center rounded-md border border-[#12432E] px-6 text-[15px] font-semibold text-[#12432E] hover:bg-[#12432E] hover:text-[#ffffff] transition-colors duration-300 ease-in-out"
        >
          View all {PROJECT_LIST.length} projects
        </Link>
      </div>
    </div>
  );
}

// Logos of the funders in the project list (public/logos). No Ministry of Textiles logo yet.
const FUNDERS: Logo[] = [
  { alt: "Canadian International Development Agency (CIDA)", src: "/logos/cida.jpeg", className: "max-h-12 max-w-[128px]" },
  { alt: "Ministry of Agriculture & Farmers Welfare, GoI", src: "/logos/ministry-of-agriculture.jpeg", className: "max-h-12 max-w-[132px]" },
  { alt: "Sir Dorabji Tata Trust", src: "/logos/sir-dorabji-tata-trust.jpeg", className: "max-h-12 max-w-[92px] scale-[1.28]" },
  { alt: "Tata Trusts", src: "/logos/tata-trusts.jpeg", className: "max-h-10 max-w-[132px]" },
  { alt: "Ministry of New and Renewable Energy (MNRE), GoI", src: "/logos/mnre.jpeg", className: "max-h-12 max-w-[132px]" },
  { alt: "North Eastern Council (NEC)", src: "/logos/nec.jpeg", className: "max-h-14 max-w-[72px]" },
  { alt: "KfW", src: "/logos/kfw.jpeg", className: "max-h-11 max-w-[132px]" },
];

/** "Funded & trusted by" logo grid under the homepage projects section; the label fills the first cell. */
export function FunderStrip() {
  return (
    <div className="border-y border-[#e5e4e4]">
      <LogoCloud
        className="mx-auto max-w-[1200px]"
        logos={FUNDERS}
        lead={
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-[#12432E]">Funded &amp; Trusted By</p>
        }
      />
    </div>
  );
}
