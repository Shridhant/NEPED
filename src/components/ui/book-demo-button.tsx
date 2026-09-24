import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/*
 * Adapted from the "BookDemoButton" component: dark button whose coloured chevron pill
 * expands across the label on hover. Site changes: renders a router <Link> when `to` is
 * given, sizes to its label instead of a fixed w-36, and the dot keyframes live in
 * index.css (.bd-dot) rather than an inline <style> per button.
 */

export type BookDemoVariant = "lime" | "sky" | "rose" | "amber" | "emerald" | "violet" | "orange" | "magenta";

const variantStyles: Record<BookDemoVariant, { from: string; to: string; dot: string }> = {
  lime: { from: "#d6f54a", to: "#c5ea2c", dot: "#0f0f0f" },
  sky: { from: "#a5e0ff", to: "#6bc8f5", dot: "#0a1f3a" },
  rose: { from: "#ffc4d3", to: "#f590a5", dot: "#3a0a1f" },
  amber: { from: "#ffd66e", to: "#f5a82e", dot: "#3a210a" },
  emerald: { from: "#a8efc5", to: "#5fd49a", dot: "#0a2a1a" },
  violet: { from: "#d4b9ff", to: "#a07bf5", dot: "#1f0a3a" },
  orange: { from: "#ffb88a", to: "#f57a3a", dot: "#3a190a" },
  magenta: { from: "#f5a8e0", to: "#e060c5", dot: "#3a0a2a" },
};

const DOTS = [
  { cx: 2, cy: 2, d: 0 },
  { cx: 5, cy: 5, d: 0.05 },
  { cx: 8, cy: 8, d: 0.1 },
  { cx: 5, cy: 11, d: 0.15 },
  { cx: 2, cy: 14, d: 0.2 },
  { cx: 6, cy: 2, d: 0.05 },
  { cx: 9, cy: 5, d: 0.1 },
  { cx: 12, cy: 8, d: 0.15 },
  { cx: 9, cy: 11, d: 0.2 },
  { cx: 6, cy: 14, d: 0.25 },
];

function DoubleChevron({ index, color }: { index: number; color: string }) {
  const base = index * 0.12;
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" className="shrink-0 overflow-visible" aria-hidden>
      <g fill={color}>
        {DOTS.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="1" className="bd-dot" style={{ animationDelay: `${base + p.d}s` }} />
        ))}
      </g>
    </svg>
  );
}

type Common = { variant?: BookDemoVariant; className?: string; children?: React.ReactNode };
type AsLink = Common & { to: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
type AsButton = Common & { to?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BookDemoButton(props: AsLink | AsButton) {
  const { className, children, variant = "lime", ...rest } = props;
  const v = variantStyles[variant];

  const classes = cn(
    "group/btn bd-root relative inline-flex h-11 items-center rounded-[12px] overflow-hidden transition-transform active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5fd49a]",
    className,
  );
  const style: React.CSSProperties = {
    background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.18)",
  };

  const inner = (
    <>
      {/* Label sets the width; the pill sits over its left edge */}
      <span className="relative pl-[3.25rem] pr-4 whitespace-nowrap text-white font-medium text-[14px] tracking-tight transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-2 group-hover/btn:opacity-0 group-focus-visible/btn:translate-x-2 group-focus-visible/btn:opacity-0 motion-reduce:transition-none">
        {children || "Book a demo"}
      </span>
      <span
        className="absolute top-1 left-1 bottom-1 z-10 w-9 group-hover/btn:w-[calc(100%-0.5rem)] group-focus-visible/btn:w-[calc(100%-0.5rem)] group-active/btn:w-[calc(100%-0.5rem)] flex items-center justify-start overflow-hidden rounded-md pl-3 pr-2.5 gap-2.5 transition-[width,gap] duration-260 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          background: `linear-gradient(180deg, ${v.from} 0%, ${v.to} 100%)`,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)",
        }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <DoubleChevron key={i} index={i} color={v.dot} />
        ))}
      </span>
    </>
  );

  if (rest.to !== undefined) {
    const { to, ...anchorProps } = rest as AsLink;
    return (
      <Link to={to} className={classes} style={style} {...anchorProps}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} style={style} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}

export default BookDemoButton;
