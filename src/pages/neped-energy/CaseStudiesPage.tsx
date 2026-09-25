import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { SectionPill } from "@/components/shared/SectionPill";
import { FolderCard } from "@/components/ui/folder-cards";
import { CASE_STUDY_CARDS } from "@/data/neped-energy/caseStudyCards";
import { BlurReveal } from "@/components/ui/blur-reveal";

/** All NEPeD case studies (text from NEPeD/casestudies.txt). */
export function CaseStudiesPage() {
  useEffect(() => {
    document.title = "Case Studies • NEPeD";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24">
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="space-y-5 mb-10 sm:mb-14">
          <SectionPill>NEPeD</SectionPill>
          <BlurReveal as="h1" className="text-[40px] sm:text-[64px] font-light text-[#000000] tracking-[-1.55px] leading-[1.05]">{"Case Studies"}</BlurReveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CASE_STUDY_CARDS.map((card) => (
            <FolderCard key={card.to} card={card} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
