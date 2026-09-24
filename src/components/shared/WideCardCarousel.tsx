import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wide, near edge-to-edge card carousel with snap scrolling, drag-free swipe and arrow controls.
 * Shows ~1.15 cards on phones, 2 on tablets, 3 on desktop (wider container than the 1200px content width).
 */
export function WideCardCarousel({ children, label, className }: { children: ReactNode; label: string; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const arrow = "w-12 h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer";

  return (
    <div className={cn("w-full max-w-[1520px] mx-auto px-3 sm:px-6", className)}>
      <div
        ref={trackRef}
        onScroll={update}
        role="region"
        aria-label={label}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div className="snap-start shrink-0 w-[86%] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]">{child}</div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button type="button" aria-label="Previous" onClick={() => scroll(-1)} disabled={!canPrev}
          className={cn(arrow, "bg-(--brand-accent)/10 text-(--brand-accent) enabled:hover:bg-(--brand-accent)/20")}>
          <ArrowLeft size={18} />
        </button>
        <button type="button" aria-label="Next" onClick={() => scroll(1)} disabled={!canNext}
          className={cn(arrow, "bg-(--brand-accent) text-[#ffffff] enabled:hover:bg-(--brand-accent-hover)")}>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
