import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { NepedProject } from "@/data/neped/nepedProjectsData";
import { NEPED_PATHS } from "@/routes/paths";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { ProjectOrgBadges } from "@/components/neped/ProjectOrgBadges";

/** Light project card (photo with phase / category / period, implemented-by badge, name, objective, funding agency). */
export function ProjectTile({ project: proj }: { project: NepedProject }) {
  return (
    <Link
            to={NEPED_PATHS.project(proj.slug)}
      className="group bg-[#F3F6F3] rounded-[16px] overflow-hidden flex flex-col border border-transparent hover:border-[#e5e4e4] transition-colors"
    >
      <div className="relative m-2.5 mb-0 aspect-[16/9] rounded-[12px] overflow-hidden bg-[#12432E]">
        <img
          src={proj.heroImage}
          alt={proj.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12432E]/70 via-transparent to-[#12432E]/20" />
        <span className="absolute left-3 top-3 rounded-[1584px] border border-white/25 bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase text-[#ffffff]">
          {proj.phase}
        </span>
        <span className="absolute right-3 top-3 max-w-[55%] truncate rounded-[1584px] border border-white/25 bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase text-[#ffffff]">
          {proj.category}
        </span>
        <span className="absolute left-3 bottom-3 text-[11px] font-mono text-[#ffffff]/85 uppercase">{proj.period}</span>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col gap-4">
        <ProjectOrgBadges project={proj} />
        <BlurReveal as="h3" inView className="text-[18px] sm:text-[20px] font-light leading-snug text-[#1A2E23] tracking-[-0.3px]">{proj.name}</BlurReveal>
        {proj.objective ? (
          <p className="text-[14px] leading-relaxed text-[#5B6660] line-clamp-4 flex-1">{proj.objective}</p>
        ) : (
          <p className="text-[14px] italic leading-relaxed text-[#5B6660] flex-1">
            No objective statement recorded in the source register for this project.
          </p>
        )}
        <div className="pt-4 border-t border-[#e5e4e4] text-[13px]">
          <span className="font-mono uppercase tracking-wider text-[10px] text-[#5B6660] block">Funding Agency</span>
          <span className="text-[#1A2E23]">{proj.fundingAgency}</span>
        </div>
        <div className="flex items-center justify-between text-[14px] font-medium text-[#1A2E23]">
          <span>View Project Record</span>
          <span className="w-9 h-9 rounded-full bg-(--brand-accent) text-[#ffffff] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
