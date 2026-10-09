import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { HYDROGER_SITE_GROUPS } from "@/data/neped-energy/hydrogerSitesData";

type Site = { site: string; district: string; state: string };
type SortKey = "site" | "district" | "state";
type Sort = { key: SortKey; dir: 1 | -1 } | null;

// Groups not named after a state are Nagaland districts
const OTHER_STATES: Record<string, string> = {
  meghalaya: "Meghalaya",
  sikkim: "Sikkim",
  "arunachal-pradesh": "Arunachal Pradesh",
};

const titleCase = (s: string) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

const SITES: Site[] = HYDROGER_SITE_GROUPS.flatMap((g) => {
  const state = OTHER_STATES[g.id] ?? "Nagaland";
  const district = OTHER_STATES[g.id] ? "" : titleCase(g.name);
  return g.sites.map((site) => ({ site, district, state }));
});

// Every state that has sites, Nagaland first, with its site count
const STATES = ["Nagaland", ...Object.values(OTHER_STATES)]
  .map((name) => ({ name, count: SITES.filter((s) => s.state === name).length }))
  .filter((st) => st.count > 0);

const INITIAL_ROWS = 10;

/** Installed Hydroger sites: state filter with counts on the left, sortable table on the right. */
export function InstalledSitesTable() {
  const [state, setState] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>(null);
  const [showAll, setShowAll] = useState(false);

  const rows = useMemo(() => {
    const filtered = SITES.filter((s) => !state || s.state === state);
    if (!sort) return filtered;
    return [...filtered].sort((a, b) => a[sort.key].localeCompare(b[sort.key]) * sort.dir);
  }, [state, sort]);
  const shown = showAll ? rows : rows.slice(0, INITIAL_ROWS);

  const toggleSort = (key: SortKey) =>
    setSort((cur) => (cur?.key !== key ? { key, dir: 1 } : cur.dir === 1 ? { key, dir: -1 } : null));

  const pick = (value: string | null) => {
    setState(value);
    setShowAll(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* State filter with counts */}
      <div className="lg:col-span-4 rounded-xl bg-[#F3F6F3] p-6 sm:p-7">
        <p className="text-[48px] sm:text-[56px] font-light leading-none tracking-[-1.5px] text-[#1E6F4C]">{SITES.length}</p>
        <p className="mt-2 text-[15px] text-[#5B6660]">Hydroger sites listed, across {STATES.length} states</p>
        <ul role="group" aria-label="Filter sites by state" className="mt-6 flex flex-col gap-1.5">
          {[{ name: "All states", count: SITES.length, value: null as string | null }, ...STATES.map((s) => ({ ...s, value: s.name }))].map((st) => {
            const on = state === st.value;
            return (
              <li key={st.name}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => pick(st.value)}
                  className={`w-full min-h-11 flex items-center justify-between gap-3 rounded-lg px-4 text-[15px] transition-colors duration-300 ease-in-out cursor-pointer ${
                    on ? "bg-[#1E6F4C] text-[#ffffff] font-semibold" : "text-[#1A2E23] hover:bg-[#ffffff]"
                  }`}
                >
                  {st.name}
                  <span className={`min-w-8 rounded-full px-2 py-0.5 text-center text-[13px] font-semibold ${on ? "bg-white/20" : "bg-[#ffffff] text-[#1E6F4C]"}`}>
                    {st.count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Table */}
      <div className="lg:col-span-8 overflow-hidden rounded-xl border border-[#dbe5de] bg-[#ffffff]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-[15px] sm:text-[16px]">
            <thead className="bg-[#F3F6F3]">
              <tr>
                <th scope="col" className="w-14 py-3.5 pl-5 text-left text-[12px] font-bold text-[#5B6660]">#</th>
                <SortHeader label="Site" k="site" sort={sort} onSort={toggleSort} />
                <SortHeader label="District" k="district" sort={sort} onSort={toggleSort} />
                <SortHeader label="State" k="state" sort={sort} onSort={toggleSort} />
              </tr>
            </thead>
            <tbody>
              {shown.map((s, i) => (
                <tr key={`${s.state}-${s.district}-${s.site}`} className="border-t border-[#e8eee9] hover:bg-[#F7FAF7] transition-colors duration-200">
                  <td className="py-3.5 pl-5 text-[13px] tabular-nums text-[#8A958F]">{String(i + 1).padStart(2, "0")}</td>
                  <td className="py-3.5 pr-4 font-medium text-[#1A2E23]">{s.site}</td>
                  <td className="py-3.5 pr-4 text-[#5B6660]">{s.district || "—"}</td>
                  <td className="py-3.5 pr-5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[12.5px] font-semibold whitespace-nowrap ${
                        s.state === "Nagaland" ? "bg-[#E6F0E9] text-[#1E6F4C]" : "bg-[#FBF0DD] text-[#8A5A12]"
                      }`}
                    >
                      {s.state}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#dbe5de] bg-[#F3F6F3] px-5 py-3.5">
          <p className="text-[14px] text-[#5B6660]">
            Showing {shown.length} of {rows.length} sites
          </p>
          {rows.length > INITIAL_ROWS ? (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex min-h-10 items-center rounded-md border border-[#12432E] bg-[#ffffff] px-4 text-[14px] font-semibold text-[#12432E] hover:bg-[#12432E] hover:text-[#ffffff] transition-colors duration-300 ease-in-out cursor-pointer"
            >
              {showAll ? "Show fewer sites" : `Show all ${rows.length} sites`}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SortHeader({ label, k, sort, onSort }: { label: string; k: SortKey; sort: Sort; onSort: (k: SortKey) => void }) {
  const Icon = sort?.key !== k ? ArrowUpDown : sort.dir === 1 ? ArrowUp : ArrowDown;
  return (
    <th
      scope="col"
      aria-sort={sort?.key !== k ? "none" : sort.dir === 1 ? "ascending" : "descending"}
      className="py-3.5 pr-4 text-left text-[12px] font-bold uppercase tracking-[0.12em] text-[#5B6660]"
    >
      <button type="button" onClick={() => onSort(k)} className="inline-flex items-center gap-1.5 uppercase tracking-[0.12em] cursor-pointer hover:text-[#1A2E23]">
        {label}
        <Icon size={13} strokeWidth={2} className={sort?.key === k ? "text-[#1E6F4C]" : "opacity-60"} />
      </button>
    </th>
  );
}
