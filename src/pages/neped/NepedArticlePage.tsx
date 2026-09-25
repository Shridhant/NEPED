import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { fadeUpOnView } from "@/lib/motionVariants";
import type { NepedArticle } from "@/data/neped/nepedPhasesData";
import { NEPED_PATHS } from "@/routes/paths";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { BlurReveal } from "@/components/ui/blur-reveal";

/**
 * Reusable NEPED detail page (phases, success stories, …) — all text comes from the items passed in.
 * Optional fields (years, funded, amount) are shown only when present.
 */
export function NepedArticlePage({ items, pathFor }: { items: NepedArticle[]; pathFor: (slug: string) => string }) {
  const { slug } = useParams<{ slug: string }>();
  const index = items.findIndex((p) => p.slug === slug);
  const phase = items[index];

  useEffect(() => {
    if (phase) document.title = `${phase.title} • NEPED`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [phase]);

  if (!phase) {
    return (
      <div className="theme-neped mx-auto max-w-[800px] px-6 pt-36 pb-28 text-center flex flex-col items-center gap-6">
        <BlurReveal as="h1" className="text-[32px] sm:text-[44px] font-light text-[#000000]">{"Page not found"}</BlurReveal>
        <ArrowPillButton to={NEPED_PATHS.home}>Back to NEPED</ArrowPillButton>
      </div>
    );
  }

  const prev = index > 0 ? items[index - 1] : null;
  const next = index < items.length - 1 ? items[index + 1] : null;

  return (
    <div className="theme-neped w-full space-y-16 sm:space-y-24 pb-24">
      {/* Header — dark green band */}
      <section className="relative w-full overflow-hidden bg-(--brand-surface) text-[#ffffff]">
        <div className="absolute top-0 right-0 w-[640px] h-[640px] bg-(--brand-accent-on-dark)/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
          <Link to={NEPED_PATHS.home} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] hover:bg-white/15 border border-white/20 text-[12px] font-medium transition-colors">
            <ArrowLeft size={13} />
            <span>NEPED</span>
          </Link>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} className="lg:col-span-7 space-y-6">
              {phase.years && (
                <span className="inline-block px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] border border-white/20 text-[12px] font-mono">{phase.years}</span>
              )}
              <BlurReveal as="h1" className="text-[44px] sm:text-[68px] font-light tracking-[-1.8px] leading-[1.02]">{phase.title}</BlurReveal>
              <p className="text-[16px] sm:text-[18px] text-[#e5e4e4]/85 leading-relaxed max-w-2xl">{phase.funded ?? phase.overview}</p>
            </motion.div>
            <div className="lg:col-span-5">
              <div className="rounded-[20px] bg-[#ffffff] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <div className="aspect-[4/3] rounded-[14px] overflow-hidden">
                  {phase.image ? (
                    <img src={phase.image.src} alt={phase.image.alt} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#193f32] to-[#2d7d3a] flex flex-col items-center justify-center gap-2 text-[#ffffff]/75">
                      <ImageIcon size={36} strokeWidth={1.25} />
                      <span className="text-[11px] font-mono uppercase tracking-[0.14em]">Image placeholder</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full description + amount */}
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <p className={`${phase.amount ? "lg:col-span-8" : "lg:col-span-10"} text-[16px] sm:text-[19px] text-[#262626] leading-relaxed`}>{phase.description}</p>
          {phase.amount && (
            <div className="lg:col-span-4 rounded-[16px] bg-(--brand-accent) text-[#ffffff] p-7">
              <p className="text-[20px] sm:text-[24px] font-light leading-snug tracking-[-0.3px]">{phase.amount}</p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Previous / next */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {prev ? (
            <Link to={pathFor(prev.slug)} className="group flex items-center gap-4 bg-[#f5f5f5] rounded-[16px] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors">
              <span className="w-12 h-12 rounded-full bg-(--brand-accent) text-[#ffffff] flex items-center justify-center shrink-0"><ArrowLeft size={18} /></span>
              <span className="text-[19px] font-light text-[#000000]">{prev.title}</span>
            </Link>
          ) : <div className="hidden sm:block" />}
          {next ? (
            <Link to={pathFor(next.slug)} className="group flex items-center justify-end gap-4 bg-[#f5f5f5] rounded-[16px] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors">
              <span className="text-[19px] font-light text-[#000000]">{next.title}</span>
              <span className="w-12 h-12 rounded-full bg-(--brand-accent) text-[#ffffff] flex items-center justify-center shrink-0"><ArrowRight size={18} /></span>
            </Link>
          ) : <div className="hidden sm:block" />}
        </div>
      </section>
    </div>
  );
}
