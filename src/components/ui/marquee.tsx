import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ── Marquee (after Spell UI's marquee) ───────────────────────────
 * Content repeats in a seamless loop: the track holds the children twice and
 * slides by exactly half its length, so the second copy lands where the first began.
 * Props match the original: duration, pauseOnHover, direction, fade, fadeAmount.
 * Respects "reduce motion" (the loop stops and the row can be scrolled by hand).
 * ─────────────────────────────────────────────────────────────── */

export interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. @default 20 */
  duration?: number;
  /** Pause while the pointer is over the marquee. @default false */
  pauseOnHover?: boolean;
  /** @default "left" */
  direction?: "left" | "right" | "up" | "down";
  /** Fade the content out at the edges. @default true */
  fade?: boolean;
  /** Width of each edge fade, as a percentage. @default 10 */
  fadeAmount?: number;
  className?: string;
}

export function Marquee({
  children,
  duration = 20,
  pauseOnHover = false,
  direction = "left",
  fade = true,
  fadeAmount = 10,
  className,
}: MarqueeProps) {
  const vertical = direction === "up" || direction === "down";
  const reverse = direction === "right" || direction === "down";
  const mask = fade
    ? `linear-gradient(${vertical ? "to bottom" : "to right"}, transparent, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent)`
    : undefined;

  return (
    <div
      className={cn("group/marquee overflow-hidden motion-reduce:overflow-auto", className)}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <div
        className={cn(
          "flex w-max motion-reduce:animate-none!",
          vertical ? "flex-col h-max w-auto animate-[marquee-y_var(--marquee-duration)_linear_infinite]" : "animate-[marquee-x_var(--marquee-duration)_linear_infinite]",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused]",
        )}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className={cn("flex shrink-0", vertical && "flex-col")}>{children}</div>
        {/* second copy for the seamless loop; hidden from screen readers and keyboard */}
        <div className={cn("flex shrink-0", vertical && "flex-col")} aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
