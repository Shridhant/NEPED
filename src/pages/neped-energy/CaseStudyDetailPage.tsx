import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fadeUpOnView } from "@/lib/motionVariants";
import { CASE_STUDIES } from "@/data/neped-energy/caseStudiesData";
import { CASE_STUDY_PHOTOS } from "@/data/neped-energy/caseStudyPhotos";
import { CASE_STUDY_FIVE_PARTS, type CaseStudyFiveParts } from "@/data/neped-energy/caseStudyFiveParts";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";
import { ArrowPillButton } from "@/components/shared/ArrowPillButton";
import { BlurReveal } from "@/components/ui/blur-reveal";

/**
 * One NEPeD case study. Studies in caseStudyFiveParts.ts use the five-part template
 * (The place · The need · What NEPeD brought · Who owns it now · What changed); the rest use the
 * older layout with text from caseStudiesData.ts. Photos from caseStudyPhotos.ts.
 */
export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const study = CASE_STUDIES[index];

  const fiveParts = study ? CASE_STUDY_FIVE_PARTS[study.slug] : undefined;

  useEffect(() => {
    if (study) document.title = `${fiveParts?.title ?? study.title} • NEPeD`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [study, fiveParts]);

  if (!study) {
    return (
      <div className="mx-auto max-w-[800px] px-6 pt-16 pb-28 text-center flex flex-col items-center gap-6">
        <BlurReveal as="h1" className="text-[32px] sm:text-[44px] font-light text-[#1A2E23]">{"Page not found"}</BlurReveal>
        <ArrowPillButton to={NEPED_ENERGY_PATHS.caseStudies}>Case Studies</ArrowPillButton>
      </div>
    );
  }

  const prev = index > 0 ? CASE_STUDIES[index - 1] : null;
  const next = index < CASE_STUDIES.length - 1 ? CASE_STUDIES[index + 1] : null;
  const [intro, ...rest] = study.sections;
  const photos = CASE_STUDY_PHOTOS[study.slug] ?? [];
  const prevNext = <PrevNext prev={prev} next={next} />;

  if (fiveParts) return <FivePartCaseStudy data={fiveParts} photos={photos} prevNext={prevNext} />;

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-24">
      {/* Header — dark teal band */}
      <section className="relative w-full overflow-hidden bg-[#12432E] text-[#ffffff]">
        <div className="absolute top-0 right-0 w-[640px] h-[640px] bg-[#1E6F4C]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-10 sm:pt-12 pb-14 sm:pb-20">
          <Link
            to={NEPED_ENERGY_PATHS.caseStudies}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/[0.08] hover:bg-white/15 border border-white/20 text-[12px] font-medium transition-colors"
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

      {/* Photos (public/<slug>/) */}
      {photos.length > 0 && (
        <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className={`grid grid-cols-1 gap-4 sm:gap-5 ${photos.length > 1 ? "sm:grid-cols-2" : "max-w-[760px]"}`}>
            {photos.map((photo) => (
              <div key={photo.src} className="overflow-hidden bg-[#F3F6F3] ring-1 ring-black/5">
                <img src={photo.src} alt={photo.alt} className="aspect-[3/2] h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Sections */}
      {rest.map((section) => (
        <motion.section key={section.heading} {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <h2 className="lg:col-span-4 text-[30px] sm:text-[40px] font-light text-[#1A2E23] tracking-[-1px] leading-[1.1]">{section.heading}</h2>
            <div className="lg:col-span-8 space-y-5">
              {section.paragraphs.map((p) => (
                <p key={p} className="text-[15px] sm:text-[17px] text-[#1A2E23] leading-relaxed">{p}</p>
              ))}
              {section.list.length > 0 && (
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.list.map((item, i) => (
                    <li key={item} className="bg-[#F3F6F3] p-5 flex gap-3 text-[15px] text-[#1A2E23] leading-relaxed">
                      <span className="font-mono text-[13px] text-[#1E6F4C] pt-[3px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </motion.section>
      ))}

      {prevNext}
    </div>
  );
}

type StudyLink = { slug: string; title: string } | null;

function PrevNext({ prev, next }: { prev: StudyLink; next: StudyLink }) {
  return (
<section className="mx-auto max-w-[1200px] px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {prev ? (
          <Link to={NEPED_ENERGY_PATHS.caseStudy(prev.slug)} className="group flex items-center gap-4 bg-[#F3F6F3] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors">
            <span className="w-12 h-12 rounded-full bg-[#1E6F4C] text-[#ffffff] flex items-center justify-center shrink-0"><ArrowLeft size={18} /></span>
            <span className="text-[17px] sm:text-[19px] font-light text-[#1A2E23]">{prev.title}</span>
          </Link>
        ) : <div className="hidden sm:block" />}
        {next ? (
          <Link to={NEPED_ENERGY_PATHS.caseStudy(next.slug)} className="group flex items-center justify-end gap-4 text-right bg-[#F3F6F3] p-5 sm:p-6 border border-transparent hover:border-[#e5e4e4] transition-colors">
            <span className="text-[17px] sm:text-[19px] font-light text-[#1A2E23]">{next.title}</span>
            <span className="w-12 h-12 rounded-full bg-[#1E6F4C] text-[#ffffff] flex items-center justify-center shrink-0"><ArrowRight size={18} /></span>
          </Link>
        ) : <div className="hidden sm:block" />}
      </div>
    </section>
  );
}

const EYEBROW = "text-[13px] font-semibold uppercase tracking-[0.14em]";

/** Five-part case study: full-bleed photo hero, stat strip, then the five numbered parts. */
function FivePartCaseStudy({ data, photos, prevNext }: { data: CaseStudyFiveParts; photos: { src: string; alt: string }[]; prevNext: React.ReactNode }) {
  const energy = data.lineage === "Energy Development";
  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-24">
      {/* HERO — full-bleed photo with a deep-green gradient; lineage chip and place in the header */}
      <section className="relative w-full overflow-hidden bg-[#12432E] text-[#ffffff]">
        {data.heroImage ? (
          <>
            <img src={data.heroImage.src} alt={data.heroImage.alt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12432E] via-[#12432E]/75 to-[#12432E]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12432E]/70 to-transparent" />
          </>
        ) : (
          <svg viewBox="0 0 1440 440" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            <path d="M0 360 C240 300 420 380 720 320 C1000 262 1200 330 1440 280" fill="none" stroke="#E8A33D" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M0 400 C260 340 460 420 740 360 C1020 300 1220 370 1440 320" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="2" />
          </svg>
        )}
        <div className={`relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-10 sm:pt-12 pb-10 sm:pb-14 ${data.heroImage ? "min-h-[520px] sm:min-h-[620px]" : ""} flex flex-col`}>
          <Link
            to={NEPED_ENERGY_PATHS.caseStudies}
            className="inline-flex w-fit items-center gap-1.5 px-3.5 py-1.5 bg-white/[0.1] hover:bg-white/20 border border-white/25 backdrop-blur-sm text-[12px] font-medium transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Case Studies</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            className={`${data.heroImage ? "mt-auto pt-24" : "mt-14 sm:mt-20"} max-w-[900px] flex flex-col gap-5`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className={`${EYEBROW} text-[#E8A33D]`}>Case Study</span>
              <span className={`inline-flex items-center gap-2 py-1 pr-3 pl-1 text-[12px] font-bold ${energy ? "bg-[#E8A33D] text-[#12432E]" : "bg-[#1E6F4C] text-[#ffffff]"}`}>
                <img src={energy ? "/NEPeD Logo High Res.webp" : "/NEPED Logo.jpg.webp"} alt="" className="h-5 w-5 rounded-full bg-[#ffffff] object-cover" />
                {data.lineage}
              </span>
            </div>
            <h1 className="font-serif text-[40px] sm:text-[64px] lg:text-[72px] leading-[1.02] tracking-[-0.5px] text-balance">{data.title}</h1>
            <p className="text-[15px] sm:text-[17px] text-[#ffffff]/85 whitespace-pre-wrap">{data.location}</p>
          </motion.div>

          {/* stat strip */}
          <dl className="mt-10 sm:mt-12 pt-6 grid grid-cols-2 lg:grid-cols-4 border-t border-white/20">
            {data.stats.map((st, i) => (
              <div key={st.label} className={`pr-4 ${i % 2 === 1 ? "pl-4 sm:pl-6 border-l border-white/20" : ""} ${i === 2 ? "lg:pl-6 lg:border-l lg:border-white/20" : ""} ${i >= 2 ? "mt-6 lg:mt-0" : ""}`}>
                <dt className="sr-only">{st.label}</dt>
                <dd className="font-serif text-[36px] sm:text-[48px] leading-none text-[#E8A33D]">{st.value}</dd>
                <dd className="mt-2 text-[13px] sm:text-[14px] text-[#ffffff]/80">{st.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* THE FIVE PARTS */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col">
        {data.parts.map((part) => (
          <motion.section
            key={part.heading}
            {...fadeUpOnView}
            className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-20 py-12 sm:py-14 border-t border-[#dbe5de] first:border-t-0 first:pt-0"
          >
            <h2 className="flex items-baseline gap-3 lg:sticky lg:top-28 lg:self-start">
              <span className="font-serif text-[30px] sm:text-[36px] leading-none text-[#E8A33D]">{part.num}.</span>
              <span className="font-serif text-[30px] sm:text-[36px] leading-[1.1] text-[#12432E]">{part.heading}</span>
            </h2>
            <div className="max-w-[760px] flex flex-col gap-6 text-[17px] sm:text-[19px] leading-[1.7] text-[#1A2E23]">
              {part.blocks.map((block, j) =>
                block.type === "p" ? (
                  <p key={j}>{block.text}</p>
                ) : block.type === "list" ? (
                  <ul key={j} className="list-none flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="grid grid-cols-[14px_minmax(0,1fr)] gap-4">
                        <span aria-hidden className="mt-[11px] h-2 w-2 bg-[#1E6F4C]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : block.type === "quote" ? (
                  <figure key={j} className="border-l-[3px] border-[#E8A33D] bg-[#F3F6F3] px-6 py-5 sm:px-8 sm:py-6">
                    <blockquote className="font-serif text-[22px] sm:text-[27px] leading-[1.4] text-[#12432E]">“{block.text}”</blockquote>
                    <figcaption className="mt-3 text-[15px] text-[#5B6660]">— {block.by}</figcaption>
                  </figure>
                ) : (
                  <p key={j} className="mt-2 border-t-2 border-[#E8A33D] pt-6 font-serif text-[21px] sm:text-[25px] leading-[1.5] text-[#12432E]">
                    {block.text}
                  </p>
                ),
              )}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Photos (public/<slug>/) */}
      {photos.length > 0 && (
        <motion.section {...fadeUpOnView} className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className={`grid grid-cols-1 gap-4 sm:gap-5 ${photos.length > 1 ? "sm:grid-cols-2" : "max-w-[760px]"}`}>
            {photos.map((photo) => (
              <div key={photo.src} className="overflow-hidden bg-[#F3F6F3] ring-1 ring-black/5">
                <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[3/2] h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {prevNext}
    </div>
  );
}
