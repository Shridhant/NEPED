import { useLayoutEffect, useRef, useState } from "react";

/*
 * NEPED Organisational Structure — boxes, labels and arrows exactly as in the chart in "NEPED PDF.pdf".
 * Boxes are laid out with CSS grid; the arrows are an SVG overlay measured from the boxes, so they
 * stay attached at every screen width. Box colours are the PDF chart's colours, used as accents.
 */

type NodeId = "cm" | "cs" | "apc" | "tl" | "pou" | "village" | "psc";

const NODES: Record<NodeId, { label: string; color: string }> = {
  cm: { label: "Chief Minister", color: "#c8963e" },
  cs: { label: "Chief Secretary", color: "#b07a5f" },
  apc: { label: "APC/Mission Director", color: "#7aa446" },
  tl: { label: "Team Leader", color: "#2f9aa0" },
  pou: { label: "Project Operations Unit (POU)", color: "#8e4a6e" },
  // Zero-width spaces after each "/" let the long label wrap on small screens
  village: { label: "Village Councils/VDBs/Farmers/NGOs/Women Group/SHGs/Youth/Entrepreneurs etc.".replace(/\//g, "/​"), color: "#e8704f" },
  psc: { label: "Project Steering Committee (PSC)", color: "#9c7a55" },
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

  const box = (id: NodeId, className = "") => (
    <div
      ref={(el) => {
        boxRefs.current[id] = el;
      }}
      className={`relative z-10 rounded-[12px] sm:rounded-[14px] bg-white/85 border border-white shadow-[0_8px_24px_-12px_rgba(25,63,50,0.35)] px-2.5 py-2.5 sm:px-5 sm:py-3.5 text-center text-[12px] sm:text-[16px] font-medium leading-snug text-[#193f32] ${className}`}
    >
      <span className="absolute left-3 right-3 top-0 h-[3px] rounded-b-full" style={{ background: NODES[id].color }} aria-hidden />
      {NODES[id].label}
    </div>
  );

  return (
    <div ref={wrapRef} className="relative">
      <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" aria-hidden>
        <defs>
          <marker id="org-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#193f32" />
          </marker>
        </defs>
        {lines.map(({ both, ...xy }, i) => (
          <line
            key={i}
            {...xy}
            stroke="#193f32"
            strokeOpacity={0.7}
            strokeWidth={1.5}
            markerEnd="url(#org-arrow)"
            markerStart={both ? "url(#org-arrow)" : undefined}
          />
        ))}
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
  );
}
