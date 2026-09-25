import { Link } from "react-router-dom";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { NepedPhase } from "@/data/neped/nepedPhasesData";
import { NEPED_PATHS } from "@/routes/paths";
import { BlurReveal } from "@/components/ui/blur-reveal";

/** Blog-style card for a NEPED phase: image, years, title, overview; opens the phase page. */
export function PhaseBlogCard({ phase }: { phase: NepedPhase }) {
  return (
    <Link
      to={NEPED_PATHS.phase(phase.slug)}
      className="group h-full flex flex-col rounded-[20px] bg-[#f5f5f5] p-2.5 border border-transparent hover:border-[#e5e4e4] transition-colors"
    >
      <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden">
        {phase.image ? (
          <img src={phase.image.src} alt={phase.image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#193f32] to-[#2d7d3a] flex flex-col items-center justify-center gap-2 text-[#ffffff]/75 transition-transform duration-500 group-hover:scale-[1.04]">
            <ImageIcon size={32} strokeWidth={1.25} />
            <span className="text-[11px] font-mono uppercase tracking-[0.14em]">Image placeholder</span>
          </div>
        )}
        <span className="absolute left-3 top-3 px-3 py-1 rounded-[1584px] bg-black/45 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#ffffff]">
          {phase.years}
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-4 px-4 pt-5 pb-4">
        <BlurReveal as="h3" inView className="text-[24px] sm:text-[28px] font-light text-[#000000] tracking-[-0.6px] leading-tight">{phase.title}</BlurReveal>
        <p className="text-[15px] text-[#494949] leading-relaxed line-clamp-4">{phase.overview}</p>
        <div className="mt-auto pt-4 flex items-center justify-between text-[14px] font-medium text-[#000000]">
          <span>Read More</span>
          <span className="w-10 h-10 rounded-full bg-(--brand-accent) text-[#ffffff] flex items-center justify-center transition-transform group-hover:rotate-45">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  );
}
