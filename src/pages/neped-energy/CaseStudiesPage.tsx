import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { SectionPill } from "@/components/shared/SectionPill";
import { MobileShowMore } from "@/components/shared/MobileShowMore";
import { MapPin } from "lucide-react";
import { SimpleLinkCard } from "@/components/shared/SimpleLinkCard";
import { CASE_STUDIES } from "@/data/neped-energy/caseStudiesData";
import { CASE_STUDY_PHOTOS } from "@/data/neped-energy/caseStudyPhotos";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";
import { BlurReveal } from "@/components/ui/blur-reveal";

/** All NEPeD case studies (text from NEPeD/casestudies.txt). */
export function CaseStudiesPage() {
  useEffect(() => {
    document.title = "Case Studies • NEPeD";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full pt-10 sm:pt-14 pb-24">
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="space-y-5 mb-10 sm:mb-14">
          <SectionPill>NEPeD</SectionPill>
          <BlurReveal as="h1" className="text-[40px] sm:text-[64px] font-light text-[#1A2E23] tracking-[-1.55px] leading-[1.05]">{"Case Studies"}</BlurReveal>
        </div>
        <MobileShowMore
          initialCount={3}
          showLabel="Show all case studies"
          hideLabel="Show fewer case studies"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-x-6 gap-y-8"
        >
          {CASE_STUDIES.map((study) => {
            const cover = CASE_STUDY_PHOTOS[study.slug]?.[0];
            return (
              <SimpleLinkCard
                key={study.slug}
                to={NEPED_ENERGY_PATHS.caseStudy(study.slug)}
                image={cover?.src ?? ""}
                imageAlt={cover?.alt}
                badge={
                  <>
                    <MapPin size={14} className="text-(--brand-accent)" />
                    {study.place}
                  </>
                }
                title={study.title}
                text={study.overview}
                action="Read case study"
              />
            );
          })}
        </MobileShowMore>
      </motion.section>
    </div>
  );
}
