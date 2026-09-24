import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";

/** Section label: round arrow + pill, as used above section headings on NEPeD pages. */
export function SectionPill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-1.5">
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
          dark ? "bg-white/10 text-[#ffffff]" : "bg-(--brand-accent)/10 text-(--brand-accent)"
        }`}
      >
        <ArrowDown size={15} />
      </span>
      <span
        className={`px-4 py-1.5 rounded-[1584px] text-[13px] font-medium ${
          dark ? "bg-white/10 text-[#ffffff]" : "bg-(--brand-accent)/10 text-[#000000]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
