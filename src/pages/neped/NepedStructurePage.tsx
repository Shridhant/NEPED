import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpOnView } from "@/lib/motionVariants";
import { SectionPill } from "@/components/shared/SectionPill";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { OrgStructureChart } from "@/components/neped/OrgStructureChart";

// Light card: white washed with a green glow in the top-left corner and a warm tint below it
const CARD_BACKGROUND = [
  "radial-gradient(55% 45% at 0% 0%, rgba(45,125,58,0.32) 0%, transparent 70%)",
  "radial-gradient(38% 34% at 0% 44%, rgba(222,170,90,0.24) 0%, transparent 70%)",
  "radial-gradient(50% 40% at 100% 100%, rgba(45,125,58,0.10) 0%, transparent 70%)",
  "linear-gradient(165deg, #eaf5e6 0%, #f7fbf5 45%, #ffffff 100%)",
].join(", ");

export function NepedStructurePage() {
  useEffect(() => {
    document.title = "Organisational Structure • NEPED";
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="theme-neped w-full space-y-10 sm:space-y-14 pt-28 sm:pt-36 pb-24">
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-6">
        <SectionPill>NEPED</SectionPill>
        <BlurReveal as="h1" className="text-[40px] sm:text-[64px] font-light text-[#000000] tracking-[-1.55px] leading-[1.05]">
          {"Organisational Structure"}
        </BlurReveal>
      </section>

      <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div
          className="rounded-[24px] sm:rounded-[32px] border border-[#e3eee0] px-4 py-10 sm:px-14 sm:py-16"
          style={{ background: CARD_BACKGROUND }}
        >
          <div className="mx-auto max-w-[900px]">
            <OrgStructureChart />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
