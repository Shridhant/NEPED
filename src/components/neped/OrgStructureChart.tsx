import { useLayoutEffect, useRef, useState } from "react";

/*
 * NEPED Organisational Structure — boxes, labels and arrows exactly as in the chart in "NEPED PDF.pdf".
 * Boxes are laid out with CSS grid; the arrows are an SVG overlay measured from the boxes, so they
 * stay attached at every screen width. Styling follows the NEPED governance design language: white
 * boxes with a coloured top bar, the Team Leader and POU filled green, the PSC dashed as the advisory node,
 * solid connectors for the line of accountability and dashed gold-brown connectors into the PSC.
 */

type NodeId = "cm" | "cs" | "apc" | "tl" | "pou" | "village" | "psc";

const LINE = "#9FB3A7"; // line of accountability
const ADVISORY = "#8A6D3B"; // advisory / steering

// accent = top bar on a white box; fill = solid box (NEPED leadership & delivery); advisory = dashed box
type NodeStyle = { accent: string } | { fill: string } | { advisory: true };

// tier = small uppercase label above the name
const NODES: Record<NodeId, { label: string; style: NodeStyle; tier?: { text: string; color: string } }> = {
  cm: { label: "Chief Minister", style: { accent: "#E8A33D" } },
  cs: { label: "Chief Secretary", style: { accent: "#E8A33D" } },
  apc: { label: "APC/Mission Director", style: { accent: "#1E6F4C" } },
  tl: { label: "Team Leader", style: { fill: "#1E6F4C" }, tier: { text: "Leadership", color: "#CFE6D8" } },
  pou: { label: "Project Operations Unit (POU)", style: { fill: "#12432E" }, tier: { text: "Delivery", color: "#9FC6B1" } },
  // Zero-width spaces after each "/" let the long label wrap on small screens
  village: { label: "Village Councils/VDBs/Farmers/NGOs/Women Group/SHGs/Youth/Entrepreneurs etc.".replace(/\//g, "/​"), style: { accent: "#C0552E" }, tier: { text: "Communities served", color: "#5B6660" } },
  psc: { label: "Project Steering Committee (PSC)", style: { advisory: true }, tier: { text: "Advisory", color: ADVISORY } },
};

// Anchor = fraction of the box's width / height
type Anchor = [number, number];
type Link = { from: NodeId; fa: Anchor; to: NodeId; ta: Anchor; both: boolean };

const LINKS: Link[] = [
  // Main chain: two-way arrows
  { from: "cm", fa: [0.5, 1], to: "cs", ta: [0.5, 0], both: true },
  { from: "cs", fa: [0.5, 1], to: "apc", ta: [0.5, 0], both: true },
  { from: "apc", fa: [0.5, 1], to: "tl", ta: [0.5, 0], both: true },
  { from: "tl", fa: [0.5, 1], to: "pou", ta: [0.5, 0], both: true },
  { from: "pou", fa: [0.5, 1], to: "village", ta: [0.5, 0], both: true },
  // Team Leader ↔ Village Councils etc. (left side)
  { from: "tl", fa: [0, 0.5], to: "village", ta: [0.03, 0], both: true },
  // Into the Project Steering Committee
  { from: "cs", fa: [1, 1], to: "psc", ta: [0, 0.1], both: false },
  { from: "apc", fa: [1, 0.5], to: "psc", ta: [0, 0.5], both: false },
  { from: "tl", fa: [1, 0], to: "psc", ta: [0, 0.9], both: false },
  { from: "pou", fa: [1, 0], to: "psc", ta: [0.3, 1], both: false },
];

const CHAIN: NodeId[] = ["cm", "cs", "apc", "tl", "pou"];

type Line = { x1: number; y1: number; x2: number; y2: number; both: boolean };

export function OrgStructureChart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<Partial<Record<NodeId, HTMLDivElement | null>>>({});
  const [lines, setLines] = useState<Line[]>([]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const measure = () => {
      const base = wrap.getBoundingClientRect();
      const point = (id: NodeId, [fx, fy]: Anchor) => {
        const r = boxRefs.current[id]!.getBoundingClientRect();
        return { x: r.left - base.left + r.width * fx, y: r.top - base.top + r.height * fy };
      };
      setLines(
        LINKS.map((l) => {
          const a = point(l.from, l.fa);
          const b = point(l.to, l.ta);
          return { x1: a.x, y1: a.y, x2: b.x, y2: b.y, both: l.both };
        }),
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  const box = (id: NodeId, className = "") => {
    const { label, style, tier } = NODES[id];
    const look =
      "fill" in style
        ? "border-transparent font-bold text-[#ffffff]"
        : "advisory" in style
          ? "border-dashed bg-[#ffffff] font-semibold text-[#1A2E23]"
          : "border-[#C9D4CD] bg-[#ffffff] font-semibold text-[#1A2E23] shadow-[0_1px_2px_rgba(18,67,46,0.06),0_6px_18px_rgba(18,67,46,0.08)]";
    return (
      <div
        ref={(el) => {
          boxRefs.current[id] = el;
        }}
        className={`relative z-10 overflow-hidden rounded-[10px] border px-2.5 py-3 sm:px-5 sm:py-4 text-center text-[12px] sm:text-[16px] leading-snug ${look} ${className}`}
        style={"fill" in style ? { background: style.fill } : "advisory" in style ? { borderColor: ADVISORY, borderWidth: 1.5 } : undefined}
      >
        {"accent" in style && <span className="absolute inset-x-0 top-0 h-1" style={{ background: style.accent }} aria-hidden />}
        {tier && (
          <span className="mb-1 block text-[9px] sm:text-[10.5px] font-medium uppercase tracking-[0.12em]" style={{ color: tier.color }}>
            {tier.text}
          </span>
        )}
        {label}
      </div>
    );
  };

  return (
    <figure className="m-0">
      <div ref={wrapRef} className="relative">
      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" aria-hidden>
        <defs>
          <marker id="org-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={LINE} />
          </marker>
          <marker id="org-arrow-advisory" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={ADVISORY} />
          </marker>
        </defs>
        {lines.map(({ both, ...xy }, i) =>
          both ? (
            <line key={i} {...xy} stroke={LINE} strokeWidth={2} markerEnd="url(#org-arrow)" markerStart="url(#org-arrow)" />
          ) : (
            <line key={i} {...xy} stroke={ADVISORY} strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#org-arrow-advisory)" />
          ),
        )}
      </svg>

      <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-x-5 sm:gap-x-16 gap-y-9 sm:gap-y-12">
        {CHAIN.map((id, row) => (
          <div key={id} className="col-start-1 flex justify-center" style={{ gridRow: row + 1 }}>
            {box(id, "w-[80%] sm:w-[70%]")}
          </div>
        ))}
        <div className="col-start-2 row-start-3 flex items-center">{box("psc", "w-full")}</div>
        <div className="col-start-1 row-start-6">{box("village", "w-full")}</div>
      </div>

      {/* Same structure as text, for screen readers */}
      <ul className="sr-only">
        <li>Chief Minister ↔ Chief Secretary ↔ APC/Mission Director ↔ Team Leader ↔ Project Operations Unit (POU) ↔ Village Councils/VDBs/Farmers/NGOs/Women Group/SHGs/Youth/Entrepreneurs etc.</li>
        <li>Team Leader ↔ Village Councils/VDBs/Farmers/NGOs/Women Group/SHGs/Youth/Entrepreneurs etc.</li>
        <li>Chief Secretary, APC/Mission Director, Team Leader and Project Operations Unit (POU) → Project Steering Committee (PSC)</li>
      </ul>
      </div>

      <figcaption className="mt-10 sm:mt-12 border-t border-[#C9D4CD] pt-5">
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-[13.5px] text-[#1A2E23]">
          <span className="flex items-center gap-2.5">
            <span className="h-1 w-[26px] shrink-0 rounded-sm" style={{ background: LINE }} aria-hidden />
            Line of accountability
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-[26px] shrink-0 border-t-2 border-dashed" style={{ borderColor: ADVISORY }} aria-hidden />
            Advisory / steering
          </span>
          <span className="flex items-center gap-2.5">
            <span className="h-1 w-[26px] shrink-0 rounded-sm bg-[#1E6F4C]" aria-hidden />
            NEPED leadership &amp; delivery
          </span>
        </div>
        <p className="mt-5 max-w-[62ch] text-[13px] sm:text-[14px] leading-relaxed text-[#5B6660]">
          The Team Leader — mandatorily a senior Secretary-level officer — directs NEPED, with day-to-day work carried out by the Project Operations Unit. The Project Steering Committee, chaired by the Chief Secretary, steers the programme independently of the delivery line.
        </p>
      </figcaption>
    </figure>
  );
}
