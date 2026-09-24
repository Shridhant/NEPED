import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";

/*
 * Adapted from the "ScrollStackDeck" component: tabbed cards that stack as you scroll.
 * Site changes: no Lenis (native scrolling kept), internal router links, no demo intro /
 * footer text, and an optional image — cards without one show a soft gradient panel.
 */

export interface ProjectItem {
  id: string | number;
  tabTitle: string;
  title: string;
  description: string;
  /** Optional photo; omitted → gradient panel */
  image?: string;
  imageAlt?: string;
  /** Internal route the card opens */
  to: string;
  color: string;
  /** Gradient used when there's no image */
  panel?: string;
}

function buildCardKeyframes(index: number, totalCards: number) {
  const steps: number[] = [];
  const yValues: number[] = [];
  const scaleValues: number[] = [];
  const numTransitions = Math.max(totalCards - 1, 1);

  for (let step = 0; step <= numTransitions; step++) {
    steps.push(step / numTransitions);
    if (step < index) {
      yValues.push(900);
      scaleValues.push(1);
    } else if (step === index) {
      yValues.push(0);
      scaleValues.push(1);
    } else {
      const stackDepth = step - index;
      yValues.push(-stackDepth * 48);
      scaleValues.push(1 - stackDepth * 0.038);
    }
  }

  if (index === 0) return { steps, y: yValues, scale: scaleValues };

  const entryStart = (index - 1) / numTransitions;
  const entryEnd = index / numTransitions;
  const fullSteps: number[] = [];
  const fullY: number[] = [];
  const fullScale: number[] = [];
  for (let i = 0; i < steps.length; i++) {
    if (steps[i] < entryStart) {
      fullSteps.push(steps[i]);
      fullY.push(900);
      fullScale.push(1);
    }
  }
  fullSteps.push(entryStart);
  fullY.push(900);
  fullScale.push(1);
  for (let i = 0; i < steps.length; i++) {
    if (steps[i] >= entryEnd) {
      fullSteps.push(steps[i]);
      fullY.push(yValues[i]);
      fullScale.push(scaleValues[i]);
    }
  }
  return { steps: fullSteps, y: fullY, scale: fullScale };
}

function AnimatedCard({
  project,
  index,
  totalCards,
  smoothProgress,
}: {
  project: ProjectItem;
  index: number;
  totalCards: number;
  smoothProgress: MotionValue<number>;
}) {
  const keyframes = buildCardKeyframes(index, totalCards);
  const y = useTransform(smoothProgress, keyframes.steps, keyframes.y);
  const scale = useTransform(smoothProgress, keyframes.steps, keyframes.scale);

  return (
    <motion.div
      style={{ y, scale, zIndex: 20 + index, transformOrigin: "center top", willChange: "transform", backfaceVisibility: "hidden" }}
      className="absolute inset-x-0 top-0 w-full select-none"
    >
      <Link to={project.to} className="group block cursor-pointer text-inherit no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#b75928] rounded-2xl">
        <article className="relative box-border w-full pt-12 sm:pt-14">
          <div
            style={{ backgroundColor: project.color }}
            className="absolute left-0 top-0 flex h-12 w-48 items-center rounded-t-2xl px-4 text-[15px] font-medium tracking-tight text-black sm:h-14 sm:w-64 sm:px-6"
          >
            <span className="truncate">{project.tabTitle}</span>
          </div>

          <div
            style={{ backgroundColor: project.color }}
            className="relative grid min-h-[26rem] grid-cols-1 items-center gap-6 overflow-hidden rounded-b-2xl rounded-tr-2xl p-6 shadow-[0_4px_8px_-4px_rgba(0,0,0,0.12),inset_0_-2px_4px_-2px_rgba(0,0,0,0.25)] sm:p-8 md:min-h-[33rem] md:grid-cols-[minmax(0,1.12fr)_minmax(16rem,0.88fr)] md:gap-14"
          >
            <div className="z-10 flex flex-col items-start gap-3.5">
              <h3 className="m-0 text-[24px] sm:text-[32px] font-light leading-tight tracking-[-0.6px] text-black">{project.title}</h3>
              <p className="m-0 text-[15px] sm:text-[17px] leading-relaxed text-black/65 line-clamp-5">{project.description}</p>
            </div>

            <div className="relative h-52 w-full overflow-hidden rounded-xl bg-white/25 sm:h-72 md:h-96 lg:h-[25rem]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt ?? ""}
                  decoding="async"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block h-full w-full rounded-xl object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full rounded-xl transition-transform duration-500 group-hover:scale-105" style={{ background: project.panel }} />
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function ScrollStackDeck({ projects, className = "" }: { projects: ProjectItem[]; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.15, restDelta: 0.0001 });

  return (
    <section
      ref={containerRef}
      aria-label="Case studies"
      className={`relative w-full ${className}`}
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="pointer-events-none sticky top-0 grid h-screen w-full place-items-center px-4">
        <div className="pointer-events-auto relative h-[34rem] md:h-[37rem] w-[min(calc(100%-1rem),62.5rem)] overflow-visible">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} project={project} index={index} totalCards={projects.length} smoothProgress={smoothProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollStackDeck;
