import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import type { NepedProject, ProjectOrg } from "@/data/neped/nepedProjectsData";
import { NEPED_PATHS } from "@/routes/paths";

type Lineage = "Economic" | "Energy" | "Both";
type ProjectRow = { project: string; period: string; funder: string; lineage: Lineage; href?: string };

const lineageOf = (orgs: ProjectOrg[]): Lineage =>
  orgs.includes("NEPED") && orgs.includes("NEPeD") ? "Both" : orgs.includes("NEPeD") ? "Energy" : "Economic";

// "Projects implemented under NEPeD" in "NEPED PDF.pdf" that have no project page yet (text verbatim from the PDF)
const NEPED_ENERGY_ONLY_ROWS: ProjectRow[] = [
  { project: "Installation of 30 watermills/Pico Hydrogers in Nagaland", period: "2015-16", funder: "Ministry of New and Renewable Energy (MNRE), GoI", lineage: "Energy" },
  { project: "Development of Hydrogen, Nagaland", period: "2017-19", funder: "North Eastern Council (NEC)", lineage: "Energy" },
];

const FILTERS: { key: Lineage | "All"; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Economic", label: "Economic" },
  { key: "Energy", label: "Energy" },
  { key: "Both", label: "Economic + Energy" },
];

const EASE = [0.65, 0, 0.35, 1] as const;

/**
 * All projects in one table, filterable by lineage (NEPED = Economic, NEPeD = Energy) and searchable.
 * Rows = the site's project records + the NEPeD-only projects from the PDF, oldest first. Phones get one card per project.
 */
export function ProjectsTable({ projects }: { projects: NepedProject[] }) {
  const rows = useMemo<ProjectRow[]>(() => {
    const fromContent = projects.map((p) => ({
      project: p.name,
      period: p.period,
      funder: p.fundingAgency,
      lineage: lineageOf(p.implementedBy?.length ? p.implementedBy : ["NEPED"]),
      href: NEPED_PATHS.project(p.slug),
    }));
    const startYear = (r: ProjectRow) => parseInt(r.period, 10) || 0;
    return [...fromContent, ...NEPED_ENERGY_ONLY_ROWS].sort((a, b) => startYear(a) - startYear(b));
  }, [projects]);

  const [filter, setFilter] = useState<Lineage | "All">("All");
  const [query, setQuery] = useState("");
  const q = query.toLowerCase().trim();
  const matchesQuery = (r: ProjectRow) => !q || [r.project, r.funder, r.period].some((v) => v.toLowerCase().includes(q));
  const shown = rows.filter((r) => (filter === "All" || r.lineage === filter) && matchesQuery(r));

  return (
    <div className="flex flex-col gap-7 sm:gap-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div role="group" aria-label="Filter by lineage" className="flex flex-wrap gap-2 sm:gap-2.5">
          {FILTERS.map((f) => {
            const count = rows.filter((r) => (f.key === "All" || r.lineage === f.key) && matchesQuery(r)).length;
            const on = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f.key)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border-[1.5px] px-4 sm:px-[18px] text-[14px] sm:text-[15px] font-semibold transition-colors duration-300 ease-in-out cursor-pointer ${
                  on ? "border-[#12432E] bg-[#12432E] text-[#ffffff]" : "border-[#dbe5de] bg-[#ffffff] text-[#12432E] hover:border-[#1E6F4C]"
                }`}
              >
                {f.label}
                <span className="text-[13px] opacity-75">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="relative w-full lg:w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5B6660]" size={16} />
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Search by project name, agency, or keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full min-h-11 pl-11 pr-4 bg-[#F3F6F3] border-[1.5px] border-transparent focus:border-[#1E6F4C] focus:bg-[#ffffff] rounded-full text-[14px] text-[#1A2E23] placeholder:text-[#5B6660] outline-none transition-colors duration-300"
          />
        </div>
      </div>

      <p className="text-[14px] sm:text-[15px] text-[#5B6660] -mt-2" aria-live="polite">
        Showing {shown.length} of {rows.length} projects
      </p>

      {shown.length === 0 ? (
        <div className="rounded-[20px] bg-[#F3F6F3] p-10 sm:p-12 text-center flex flex-col items-center gap-4">
          <p className="text-[16px] text-[#5B6660]">No projects match your search or filter criteria.</p>
          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="min-h-11 px-5 rounded-full bg-[#1E6F4C] hover:bg-[#185A3E] text-[14px] font-medium text-[#ffffff] cursor-pointer transition-colors"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <>
          {/* Tablets and up: table */}
          <div className="hidden md:block">
            <table className="w-full table-fixed border-collapse text-[16px]">
              <thead>
                <tr>
                  {[
                    ["Project", "w-[38%]"],
                    ["Period", "w-[13%]"],
                    ["Funder", "w-[29%]"],
                    ["Lineage", "w-[20%]"],
                  ].map(([h, w]) => (
                    <th key={h} className={`border-b-2 border-[#12432E] pb-3.5 pr-4 text-left text-[12px] font-bold tracking-[0.12em] text-[#5B6660] uppercase ${w}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <AnimatePresence initial={false}>
                  {shown.map((r) => (
                    <motion.tr
                      key={r.project}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="hover:bg-[#F3F6F3] transition-colors duration-300"
                    >
                      <td className="border-b border-[#dbe5de] py-5 pr-6">
                        <ProjectName row={r} />
                      </td>
                      <td className="border-b border-[#dbe5de] py-5 pr-4 whitespace-nowrap text-[#1A2E23]">{r.period}</td>
                      <td className="border-b border-[#dbe5de] py-5 pr-4 text-[#1A2E23] text-[15px] leading-snug">{r.funder}</td>
                      <td className="border-b border-[#dbe5de] py-5">
                        <LineageTag lineage={r.lineage} />
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Phones: one card per project */}
          <ul className="md:hidden list-none border-t-2 border-[#12432E]">
            <AnimatePresence initial={false}>
              {shown.map((r) => (
                <motion.li
                  key={r.project}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="border-b border-[#dbe5de] py-5 flex flex-col gap-2.5"
                >
                  <ProjectName row={r} />
                  <p className="text-[14px] text-[#5B6660] leading-snug">
                    <span className="text-[#1A2E23]">{r.period}</span> · {r.funder}
                  </p>
                  <LineageTag lineage={r.lineage} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}
    </div>
  );
}

function ProjectName({ row }: { row: ProjectRow }) {
  const cls = "font-serif text-[19px] sm:text-[20px] leading-[1.3] text-[#12432E]";
  return row.href ? (
    <Link to={row.href} className={`group/name inline-flex items-start gap-1.5 ${cls} hover:text-[#1E6F4C] transition-colors`}>
      <span>{row.project}</span>
      <ArrowUpRight size={16} className="mt-1 shrink-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover/name:opacity-100 group-hover/name:translate-x-0" />
    </Link>
  ) : (
    <span className={cls}>{row.project}</span>
  );
}

/** Economic = NEPED (Forest Green), Energy = NEPeD (Harvest Gold), both = outlined. */
function LineageTag({ lineage }: { lineage: Lineage }) {
  const styles: Record<Lineage, { cls: string; logos: string[]; label: string }> = {
    Economic: { cls: "bg-[#1E6F4C] text-[#ffffff]", logos: ["/NEPED Logo.jpg.webp"], label: "Economic" },
    Energy: { cls: "bg-[#E8A33D] text-[#12432E]", logos: ["/NEPeD Logo High Res.webp"], label: "Energy" },
    Both: { cls: "bg-[#ffffff] text-[#12432E] border border-[#12432E]", logos: ["/NEPED Logo.jpg.webp", "/NEPeD Logo High Res.webp"], label: "Economic + Energy" },
  };
  const s = styles[lineage];
  return (
    <span className={`inline-flex w-fit items-center gap-2 rounded-full py-1 pr-3 pl-1 text-[13px] font-bold whitespace-nowrap ${s.cls}`}>
      <span className="flex -space-x-1.5">
        {s.logos.map((src) => (
          <img key={src} src={src} alt="" className="h-5 w-5 rounded-full bg-[#ffffff] object-cover ring-1 ring-white" />
        ))}
      </span>
      {s.label}
    </span>
  );
}
