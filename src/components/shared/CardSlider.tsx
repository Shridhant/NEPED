import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Horizontal card slider with snap scrolling and prev/next arrows.
 * Shows 1 card on mobile, 2 on tablet, 3 on desktop; swipe or use the arrows for the rest.
 */
export function CardSlider({ children, label }: { children: ReactNode; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      <div
        ref={trackRef}
        onScroll={updateArrows}
        role="region"
        aria-label={label}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div className="snap-start shrink-0 w-[85%] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]">
            {child}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className="w-11 h-11 rounded-full flex items-center justify-center bg-(--brand-accent)/10 text-(--brand-accent) transition-colors enabled:hover:bg-(--brand-accent)/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next"
          className="w-11 h-11 rounded-full flex items-center justify-center bg-(--brand-accent) text-[#ffffff] transition-colors enabled:hover:bg-(--brand-accent-hover) disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
