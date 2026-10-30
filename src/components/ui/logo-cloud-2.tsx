import type { ReactNode } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  /** Per-logo size tweaks (max-h / max-w) so differently proportioned logos read at a similar size */
  className?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  /** Optional first cell (e.g. a section label) that sits in the grid like a logo */
  lead?: ReactNode;
};

// Columns at each breakpoint
const COLS = { base: 2, md: 4 } as const;

/**
 * Bordered logo grid: every logo gets an equal cell, plus marks at the inner corners.
 * A short last row is centred (no empty filler cells). Cells draw their own left/right/top borders,
 * overlapped by 1px so neighbouring lines collapse into one; the bottom line comes from the parent.
 */
export function LogoCloud({ logos, lead, className, ...props }: LogoCloudProps) {
  const cells: (ReactNode | Logo)[] = lead ? [lead, ...logos] : [...logos];

  // Corner mark only where this row and the row below are both full, so every mark sits on a real crossing
  const corner = (i: number, cols: number) => {
    const fullRows = Math.floor(cells.length / cols);
    const row = Math.floor(i / cols);
    return i % cols < cols - 1 && row + 1 < fullRows;
  };

  return (
    <div className={cn("flex flex-wrap justify-center", className)} {...props}>
      {cells.map((cell, i) => {
        const base = corner(i, COLS.base);
        const md = corner(i, COLS.md);
        const isLogo = cell !== null && typeof cell === "object" && "src" in (cell as Logo);
        return (
          <div
            key={i}
            className="relative -mt-px -ml-px flex h-36 w-[calc(50%+1px)] items-center justify-center border-x border-t border-[#e5e4e4] bg-[#ffffff] px-4 md:h-44 md:w-[calc(25%+1px)] md:px-8"
          >
            {isLogo ? (
              <img
                src={(cell as Logo).src}
                alt={(cell as Logo).alt}
                title={(cell as Logo).alt}
                loading="lazy"
                className={cn(
                  "pointer-events-none h-auto w-auto max-w-full select-none object-contain mix-blend-multiply",
                  (cell as Logo).className,
                )}
              />
            ) : (
              (cell as ReactNode)
            )}
            {base || md ? (
              <PlusIcon
                aria-hidden
                strokeWidth={1}
                className={cn(
                  "absolute -right-[12.5px] -bottom-[12.5px] z-10 size-6 text-[#1A2E23]",
                  base ? "block" : "hidden",
                  md ? "md:block" : "md:hidden",
                )}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
