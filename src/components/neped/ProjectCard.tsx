import { Link } from "react-router-dom";
import { PillBadge } from "@/components/ui/AkerPrimitives";
import type { NepedProject } from "@/data/neped/nepedProjectsData";
import { NEPED_PATHS } from "@/routes/paths";
import { cn } from "@/lib/utils";

/** Dark NEPED project card (image banner with phase / category / period, objective, funding agency). */
/** tone "glass" = lighter frosted version for use over photos (e.g. the hero) */
export function ProjectCard({ project: proj, className, tone = "dark" }: { project: NepedProject; className?: string; tone?: "dark" | "glass" }) {
  const glass = tone === "glass";
  return (
    <Link
      to={NEPED_PATHS.project(proj.slug)}
      className={cn(
        "group h-full rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1",
        glass
          ? "rounded-[16px] border border-white/25 bg-[#0b1f18]/55 backdrop-blur-xl backdrop-saturate-150 hover:bg-[#0b1f18]/60"
          : "border border-[#1c1c1c]/10 bg-[#070707] shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-black/30 hover:border-white/25",
        className,
      )}
    >
      {/* Image banner with phase tag + period */}
      <div className="relative h-[130px] overflow-hidden bg-[#1c1c1c]">
        <img
          src={proj.heroImage}
          alt={proj.name}
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${glass ? "from-black/45 via-black/10" : "from-[#070707] via-[#070707]/20"} to-transparent`} />
        <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
          <span className="rounded-[80px] border border-white/20 bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.12px] text-[#ffffff]">
            {proj.phase}
          </span>
        </div>
        <div className="absolute right-3.5 top-3.5">
          <PillBadge dark={true}>{proj.category}</PillBadge>
        </div>
        <div className="absolute left-3.5 bottom-3 text-[10px] font-mono text-[#e5e4e4]/70 uppercase">
          {proj.period}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-[17px] font-light leading-[1.25] text-[#ffffff] tracking-[-0.2px] group-hover:text-white transition-colors">
            {proj.name}
          </h3>

          {proj.objective ? (
            <p className="text-[13px] leading-relaxed text-[#e5e4e4]/75 line-clamp-4">
              {proj.objective}
            </p>
          ) : (
            <p className="text-[12.5px] italic leading-relaxed text-[#8d8d8d]">
              No objective statement recorded in the source register for this project.
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-white/10 space-y-3">
          <div className="text-[11px] text-[#8d8d8d]">
            <span className="font-mono uppercase tracking-wider text-[10px] text-[#8d8d8d]/80 block">
              Funding Agency
            </span>
            <span className="text-[#e5e4e4]/90 font-medium">{proj.fundingAgency}</span>
          </div>

          <div className="pt-1 flex items-center justify-between text-[12.5px] sm:text-[13px] text-[#ffffff] group-hover:text-[#b75928] transition-colors">
            <span className="font-medium">View Project Details</span>
            <span className="text-[15px] transition-transform duration-200 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
