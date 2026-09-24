import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type StaggeredCardItem = { title: string; text: string; to: string };

/**
 * Light cards in an even staircase: equal width, equal height, equal horizontal gap,
 * each card stepping down by the same amount (desktop). Stacks normally on smaller screens.
 * Number + title at the top, short text at the bottom; each card links to a page.
 */
export function StaggeredCards({ items, className }: { items: StaggeredCardItem[]; className?: string }) {
  return (
    <div
      className={cn("grid grid-cols-1 lg:grid-cols-(--cols) gap-5 items-start", className)}
      style={{ "--cols": `repeat(${items.length}, minmax(0, 1fr))` } as CSSProperties}
    >
      {items.map((item, idx) => (
        <Link
          key={item.to}
          to={item.to}
          style={{ "--step": idx } as CSSProperties}
          className="group lg:mt-[calc(var(--step)*6rem)] h-[320px] sm:h-[360px] bg-[#f5f5f5] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between gap-8 border border-transparent hover:border-[#e5e4e4] transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[24px] sm:text-[28px] font-light text-[#000000] tracking-[-0.6px] leading-tight">
              <span className="block font-mono text-[14px] text-(--brand-accent) mb-2">{String(idx + 1).padStart(2, "0")}</span>
              {item.title}
            </h3>
            <span className="w-11 h-11 rounded-full bg-(--brand-accent) text-[#ffffff] flex items-center justify-center shrink-0 transition-transform group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="text-[15px] text-[#494949] leading-relaxed line-clamp-4">{item.text}</p>
        </Link>
      ))}
    </div>
  );
}
