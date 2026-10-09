import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { PROJECT_LIST, type ProjectListItem } from "@/data/neped/projectList";

const EASE = [0.65, 0, 0.35, 1] as const;

/** All projects in one searchable table, newest first. Phones get one card per project. */
export function ProjectsTable() {
  const rows = PROJECT_LIST;
  const [query, setQuery] = useState("");
  const q = query.toLowerCase().trim();
  const shown = rows.filter((r) => !q || [r.name, r.focus, r.funder, r.period].some((v) => v.toLowerCase().includes(q)));

  return (
    <div className="flex flex-col gap-7 sm:gap-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <p className="text-[14px] sm:text-[15px] text-[#5B6660]" aria-live="polite">
          Showing {shown.length} of {rows.length} projects
        </p>
        <div className="relative w-full lg:w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5B6660]" size={16} />
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Search by project name, agency, or keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full min-h-11 pl-11 pr-4 bg-[#F3F6F3] border-[1.5px] border-transparent focus:border-[#1E6F4C] focus:bg-[#ffffff] text-[14px] text-[#1A2E23] placeholder:text-[#5B6660] outline-none transition-colors duration-300"
          />
        </div>
      </div>

      {shown.length === 0 ? (
        <div className=" bg-[#F3F6F3] p-10 sm:p-12 text-center flex flex-col items-center gap-4">
          <p className="text-[16px] text-[#5B6660]">No projects match your search.</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="min-h-11 px-5 bg-[#1E6F4C] hover:bg-[#185A3E] text-[14px] font-medium text-[#ffffff] cursor-pointer transition-colors"
          >
            Clear search
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
                    ["Project", "w-[50%]"],
                    ["Period", "w-[16%]"],
                    ["Funder", "w-[34%]"],
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
                      key={r.name}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <td className="border-b border-[#dbe5de] py-5 pr-6">
                        <ProjectName row={r} />
                      </td>
                      <td className="border-b border-[#dbe5de] py-5 pr-4 whitespace-nowrap text-[#1A2E23]">{r.period}</td>
                      <td className="border-b border-[#dbe5de] py-5 pr-4 text-[#1A2E23] text-[15px] leading-snug">{r.funder}</td>
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
                  key={r.name}
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
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}
    </div>
  );
}

function ProjectName({ row }: { row: ProjectListItem }) {
  return (
    <p className="font-serif text-[19px] sm:text-[20px] leading-[1.3] text-[#12432E]">
      {row.name}
      {row.focus ? <span className="text-[#5B6660]"> — {row.focus}</span> : null}
    </p>
  );
}
