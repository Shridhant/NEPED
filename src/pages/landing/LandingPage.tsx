import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import {
  SectionLabel,
  SectionHeading,
  TextArrowButton,
} from "@/components/ui/AkerPrimitives";
import { LANDING_CONTENT } from "./landingContent";

/**
 * Landing page presenting both entities side by side.
 * Layout only — all copy comes from landingContent.ts.
 */
export function LandingPage() {
  useEffect(() => {
    document.title = LANDING_CONTENT.pageTitle;
  }, []);

  return (
    <div className="w-full space-y-16 sm:space-y-24 pt-28 sm:pt-32 pb-20">
      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-[720px] space-y-4">
          <SectionLabel>{LANDING_CONTENT.eyebrow}</SectionLabel>
          <SectionHeading size="lg">{LANDING_CONTENT.heading}</SectionHeading>
          <p className="text-[15px] sm:text-[16px] text-[#666666] leading-relaxed">
            {LANDING_CONTENT.intro}
          </p>
        </div>
      </motion.section>

      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LANDING_CONTENT.entities.map((entity) => (
            <div
              key={entity.key}
              className="border border-[#e5e4e4] rounded-[8px] bg-[#ffffff] p-8 sm:p-10 flex flex-col justify-between gap-8"
            >
              <div className="space-y-5">
                <div className="h-16 w-16 rounded-full border border-[#e5e4e4] bg-[#ffffff] p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={entity.logo}
                    alt={entity.logoAlt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-[36px] sm:text-[48px] font-light text-[#000000] tracking-[-1.2px] leading-none">
                    {entity.acronym}
                  </h2>
                  <p className="text-[14px] text-[#262626] mt-3 leading-snug">{entity.fullName}</p>
                </div>
                <p className="text-[15px] text-[#666666] leading-relaxed">{entity.summary}</p>
              </div>
              <div>
                <TextArrowButton to={entity.to} variant="pill">
                  {entity.ctaLabel}
                </TextArrowButton>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
