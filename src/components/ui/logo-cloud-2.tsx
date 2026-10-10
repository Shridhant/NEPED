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

// Columns at each breakpoint; the grid is padded with empty cells to a multiple of both
const COLS = { base: 2, md: 4 } as const;

/** Bordered logo grid: every logo gets an equal cell, alternating backgrounds, plus marks at the inner corners. */
export function LogoCloud({ logos, lead, className, ...props }: LogoCloudProps) {
  const cells: (ReactNode | Logo | null)[] = lead ? [lead, ...logos] : [...logos];
  while (cells.length % COLS.md !== 0) cells.push(null);

  const at = (i: number, cols: number) => {
    const rows = cells.length / cols;
    const row = Math.floor(i / cols);
    const col = i % cols;
    return { alt: (row + col) % 2 === 1, corner: col < cols - 1 && row < rows - 1 };
  };

  return (
    <div
      className={cn("grid grid-cols-2 gap-px border-x border-[#e5e4e4] bg-[#e5e4e4] md:grid-cols-4", className)}
      {...props}
    >
      {cells.map((cell, i) => {
        const base = at(i, COLS.base);
        const md = at(i, COLS.md);
        const isLogo = cell !== null && typeof cell === "object" && "src" in (cell as Logo);
        return (
          <div
            key={i}
            className={cn(
              "relative flex h-28 items-center justify-center px-4 md:h-32 md:px-8",
              base.alt ? "bg-[#ffffff]" : "bg-[#ffffff]",
              md.alt ? "md:bg-[#ffffff]" : "md:bg-[#ffffff]",
            )}
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
            {base.corner || md.corner ? (
              <PlusIcon
                aria-hidden
                strokeWidth={1}
                className={cn(
                  "absolute -right-[12.5px] -bottom-[12.5px] z-10 size-6 text-[#1A2E23]",
                  base.corner ? "block" : "hidden",
                  md.corner ? "md:block" : "md:hidden",
                )}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
