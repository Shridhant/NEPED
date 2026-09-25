import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeUpOnView } from "@/lib/motionVariants";
import { CASE_STUDIES } from "@/data/neped-energy/caseStudiesData";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { BlurReveal } from "@/components/ui/blur-reveal";

/** One NEPeD case study — all text from caseStudiesData.ts. */
export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const study = CASE_STUDIES[index];

  useEffect(() => {
    if (study) document.title = `${study.title} • NEPeD`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [study]);

  if (!study) {
    return (
      <div className="mx-auto max-w-[800px] px-6 pt-36 pb-28 text-center flex flex-col items-center gap-6">
        <BlurReveal as="h1" className="text-[32px] sm:text-[44px] font-light text-[#000000]">{"Page not found"}</BlurReveal>
        <ArrowPillButton to={NEPED_ENERGY_PATHS.caseStudies}>Case Studies</ArrowPillButton>
      </div>
    );
  }

  const prev = index > 0 ? CASE_STUDIES[index - 1] : null;
  const next = index < CASE_STUDIES.length - 1 ? CASE_STUDIES[index + 1] : null;
  const [intro, ...rest] = study.sections;

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-24">
      {/* Header — dark teal band */}
      <section className="relative w-full overflow-hidden bg-[#002934] text-[#ffffff]">
        <div className="absolute top-0 right-0 w-[640px] h-[640px] bg-[#b75928]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-28 sm:pt-32 pb-14 sm:pb-20">
          <Link
            to={NEPED_ENERGY_PATHS.caseStudies}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[1584px] bg-white/[0.08] hover:bg-white/15 border border-white/20 text-[12px] font-medium transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Case Studies</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} className="mt-10 max-w-[900px] space-y-6">
            <BlurReveal as="h1" className="text-[40px] sm:text-[64px] font-light tracking-[-1.8px] leading-[1.04]">{study.title}</BlurReveal>
            {intro.paragraphs.map((p) => (
              <p key={p} className="text-[16px] sm:text-[18px] text-[#e5e4e4]/85 leading-relaxed">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      {rest.map((section) => (
        <motion.section key={section.heading} {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <h2 className="lg:col-span-4 text-[30px] sm:text-[40px] font-light text-[#000000] tracking-[-1px] leading-[1.1]">{section.heading}</h2>
            <div className="lg:col-span-8 space-y-5">
              {section.paragraphs.map((p) => (
                <p key={p} className="text-[15px] sm:text-[17px] text-[#494949] leading-relaxed">{p}</p>
              ))}
              {section.list.length > 0 && (
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.list.map((item, i) => (
                    <li key={item} className="bg-[#f5f5f5] rounded-[14px] p-5 flex gap-3 text-[15px] text-[#262626] leading-relaxed">
                      <span className="font-mono text-[13px] text-[#b75928] pt-[3px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </motion.section>
      ))}

      {/* Previous / next */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {prev ? (
            <Link to={NEPED_ENERGY_PATHS.caseStudy(prev.slug)} className="group flex items-center gap-4 bg-[#f5f5f5] rounded-[16px] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors">
              <span className="w-12 h-12 rounded-full bg-[#b75928] text-[#ffffff] flex items-center justify-center shrink-0"><ArrowLeft size={18} /></span>
              <span className="text-[17px] sm:text-[19px] font-light text-[#000000]">{prev.title}</span>
            </Link>
          ) : <div className="hidden sm:block" />}
          {next ? (
            <Link to={NEPED_ENERGY_PATHS.caseStudy(next.slug)} className="group flex items-center justify-end gap-4 text-right bg-[#f5f5f5] rounded-[16px] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors">
              <span className="text-[17px] sm:text-[19px] font-light text-[#000000]">{next.title}</span>
              <span className="w-12 h-12 rounded-full bg-[#b75928] text-[#ffffff] flex items-center justify-center shrink-0"><ArrowRight size={18} /></span>
            </Link>
          ) : <div className="hidden sm:block" />}
        </div>
      </section>
    </div>
  );
}
