import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import orangeBuilding from "@/assets/orange-building.png";
import solarField from "@/assets/solar-field.png";
import forest from "@/assets/forest.png";
import mountainWindmills from "@/assets/mountain-windmills.png";
import microgrid from "@/assets/microgrid.png";
import { BentoCell, BentoGrid, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { LayoutPreloader } from "@/components/ui/layout-preloader";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const revealVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};


function ArrowCircle({ tone = "amber" }: { tone?: "amber" | "ink" | "white" }) {
  const cls =
    tone === "amber"
      ? "bg-accent-amber text-ink"
      : tone === "white"
        ? "bg-white text-ink"
        : "bg-ink text-white";
  return (
    <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${cls}`}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function SectionNum({ n }: { n: string }) {
  return <span className="text-xs tracking-wider text-ink-soft">{n}</span>;
}


export function HomePage() {
  useEffect(() => {
    document.title = "NEPeD — Clean, Green & Affordable Energy for Nagaland";
  }, []);

  return (
    <div className="space-y-4">
      {/* HERO */}
      <LayoutPreloader
        title={"Sustainable Living\nStarts Here"}
        subtitle="Empowering communities through indigenous micro-hydro generators and smart off-grid solutions designed, built and deployed in the Northeast."
        primaryLabel="Learn More"
        secondaryLabel="Learn More"
        secondaryHref="/about"
      />

      {/* INTERACTIVE CAROUSEL DECK */}
      <section className="relative overflow-hidden rounded-3xl border border-ink/5 p-8 flex flex-col items-center">
        <div className="text-center max-w-xl mb-4">
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">Explore NEPeD</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink mt-1">
            Navigate to Key Sections
          </h2>
          <p className="mt-2 text-xs text-ink-soft leading-normal">
            Use this interactive stack to learn more about our organization, technology, and community deployments. Click 'Read' to visit each section.
          </p>
        </div>
        <AnimatedCardStack />
      </section>

      {/* TIMELINE — scroll-pinned 4 cards */}
      <TimelineSection />

      {/* SUSTAINABILITY */}
      <section id="about" className="mt-6 flex flex-col items-end">
        <SectionNum n="02" />
      </section>
      <HydrogersSection />

      {/* DARK STATS */}
      <motion.section
        id="impact"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mt-12 overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-10"
      >
        <div className="flex items-start justify-between text-xs text-white/60">
          <span>03/</span>
        </div>
        <h3 className="mt-2 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
          Powering Nagaland.<br />Empowering Its People Since 2007.
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <DottedWorldMap />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                }
              }
            }}
            className="grid grid-cols-2 gap-6 self-end"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
              }}
            >
              <div className="text-3xl font-bold text-accent-amber">2007</div>
              <p className="mt-2 text-xs text-white/70">
                Founded by the Government of Nagaland as an independent registered society (NGO).
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
              }}
            >
              <div className="text-3xl font-bold text-accent-amber">100%<span className="ml-1 align-top text-base">indigenous</span></div>
              <p className="mt-2 text-xs text-white/70">
                Hydrogers and Electronic Load Controllers — designed and manufactured in Nagaland.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
              }}
              className="col-span-2"
            >
              <div className="text-3xl font-bold text-accent-amber">Nagaland + NE</div>
              <p className="mt-2 max-w-[18rem] text-xs text-white/70">
                Sustainable energy solutions implemented within Nagaland and across neighbouring states.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-10">
          <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 active-scale">
            Our Technology <ArrowCircle tone="white" />
          </a>
        </div>
      </motion.section>

      {/* IMPACT NARRATIVE */}
      <motion.section
        initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-1" />
        <p className="text-xl leading-snug md:col-span-6 text-ink">
          Every Hydroger installed and every village electrified is a step toward energy independence for the rural communities of Nagaland.
        </p>
        <motion.article
          initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          className="rounded-2xl bg-white p-4 shadow-sm md:col-span-5 border border-ink/5"
        >
          <div className="flex items-start gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-amber text-xs font-bold text-ink">
              N
            </span>
            <div>
              <p className="text-sm leading-snug">
                "Our recent MoU with NagaEd marks another step in scaling indigenous clean energy and skills across the North East."
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-ink/5 pt-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[10px] font-bold text-white">NE</span>
                <p className="text-[11px] text-ink-soft">
                  <span className="font-semibold text-ink">NEPeD × NagaEd</span> — Partnership note
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </motion.section>

      {/* TECH CARDS — hover swaps image below */}
      <TechCards />

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mt-16"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <SectionNum n="05" />
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl text-ink">Clean Energy Across<br />Naga Villages</h3>
          </div>
          <a href="#projects" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:shadow active-scale border border-ink/5">
            All Projects <ArrowCircle tone="ink" />
          </a>
        </div>

        <ProjectsCarousel />
      </motion.section>

      {/* CTA BANNER */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mt-16 grid grid-cols-1 gap-6 rounded-3xl bg-accent-amber p-8 md:grid-cols-12 md:p-12"
      >
        <h3 className="text-3xl font-semibold leading-tight md:col-span-7 sm:text-4xl text-ink">
          Partner with NEPeD<br />to Power the Next<br />Naga Village.
        </h3>
        <div className="flex items-end md:col-span-5 md:justify-end">
          <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition-all hover:shadow active-scale">
            Get Started <ArrowCircle tone="ink" />
          </a>
        </div>
      </motion.section>

      {/* PARALLAX SECTION */}
      <section className="relative mt-24">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionNum n="06" />
          <h3 className="mt-2 text-2xl font-semibold sm:text-3xl text-ink mb-8">
            Naga Communities & Energy Impact
          </h3>
        </motion.div>
        <ZoomParallax
          images={[
            { src: "/hero-windmill.png", alt: "Windmill over mountains" },
            { src: "/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg", alt: "Dao sharpening powered by hydroger" },
            { src: "/49 Visitors at NEPeD's stall (Republic day 2016).jpg", alt: "Republic Day Stall 2016" },
            { src: "/52 NEPeD members at Nagaland Youth Summit 2016.jpg", alt: "Youth Summit 2016" },
            { src: "/solar-field.png", alt: "Solar field" },
            { src: "/microgrid.png", alt: "Microgrid" },
            { src: "/forest.png", alt: "Forest" },
          ]}
        />
      </section>

      {/* GALLERY SECTION */}
      <section className="relative mt-24">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-between"
        >
          <div>
            <SectionNum n="07" />
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl text-ink">
              NEPeD Projects & Landscapes
            </h3>
          </div>
        </motion.div>
        <ContainerScroll className="h-[250vh]">
          <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full py-20">
            {[orangeBuilding, microgrid, solarField, mountainWindmills, forest].map((imgSrc, index) => (
              <BentoCell
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg border border-ink/5"
              >
                <img
                  className="size-full object-cover object-center"
                  src={imgSrc}
                  alt="NEPeD Project"
                />
              </BentoCell>
            ))}
          </BentoGrid>
        </ContainerScroll>
      </section>
    </div>
  );
}

function DottedWorldMap() {
  const dots: { x: number; y: number }[] = [];
  const cols = 60;
  const rows = 24;
  const shape = (x: number, y: number) => {
    // 5 letters: N, E, P, E, D
    const letterWidth = 10;
    const startX = 2; // offset from left border

    // Determine which letter index (0 to 4)
    const relativeX = x - startX;
    if (relativeX < 0 || relativeX >= 58) return false;

    const letterIndex = Math.floor(relativeX / 12);
    const lx = relativeX % 12; // 0 to 11

    // Check padding inside each letter slot
    if (lx >= letterWidth) return false; // space between letters

    // y goes from 0 to 23. Let's draw the letters between y = 4 and y = 19 (height = 16)
    const ly = y - 4;
    if (ly < 0 || ly >= 16) return false;

    // Inside the letter subgrid of width 10 (lx = 0..9) and height 16 (ly = 0..15):
    switch (letterIndex) {
      case 0: { // N
        if (lx === 0 || lx === 1) return true;
        if (lx === 8 || lx === 9) return true;
        // Diagonal stroke connecting (1,0) to (8,15)
        const diagX = 1 + Math.floor((ly / 15) * 7);
        if (lx === diagX || lx === diagX + 1) return true;
        return false;
      }

      case 1: // E
        if (lx === 0 || lx === 1) return true;
        if (ly === 0 || ly === 1) return true;
        if ((ly === 7 || ly === 8) && lx <= 7) return true;
        if (ly === 14 || ly === 15) return true;
        return false;

      case 2: // P
        if (lx === 0 || lx === 1) return true;
        if ((ly === 0 || ly === 1) && lx <= 8) return true;
        if ((ly === 7 || ly === 8) && lx <= 8) return true;
        if ((lx === 8 || lx === 9) && ly >= 1 && ly <= 7) return true;
        return false;

      case 3: // E
        if (lx === 0 || lx === 1) return true;
        if (ly === 0 || ly === 1) return true;
        if ((ly === 7 || ly === 8) && lx <= 7) return true;
        if (ly === 14 || ly === 15) return true;
        return false;

      case 4: // D
        if (lx === 0 || lx === 1) return true;
        if ((ly === 0 || ly === 1) && lx <= 7) return true;
        if ((ly === 14 || ly === 15) && lx <= 7) return true;
        if ((lx === 8 || lx === 9) && ly >= 2 && ly <= 13) return true;
        if ((lx === 7 || lx === 8) && (ly === 1 || ly === 14)) return true;
        return false;

      default:
        return false;
    }
  };
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const h = ((x * 73856093) ^ (y * 19349663)) >>> 0;
      const r = (h % 1000) / 1000;
      if (shape(x, y) && r > 0.12) dots.push({ x, y });
    }
  }
  return (
    <svg viewBox={`0 0 ${cols * 6} ${rows * 6}`} className="h-auto w-full max-w-xl opacity-70">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x * 6 + 3} cy={d.y * 6 + 3} r="1.2" fill="oklch(0.78 0.15 65)" />
      ))}
    </svg>
  );
}

function TimelineSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);

  const items = [
    {
      year: "2007",
      title: "Founded in Nagaland",
      body: "Established by the Government of Nagaland as an independent registered society (NGO).",
      img: orangeBuilding,
      from: -1,
    },
    {
      year: "R&D",
      title: "Indigenous Hydrogers",
      body: "\"Made in Nagaland\" micro-hydro generators designed for the state's terrain.",
      img: microgrid,
      from: 1,
    },
    {
      year: "Manufacturing",
      title: "Electronic Load Controllers",
      body: "Locally manufactured ELCs tuned for rural micro-grids and off-grid villages.",
      img: solarField,
      from: -1,
    },
    {
      year: "Reach",
      title: "Nagaland & the North East",
      body: "Sustainable energy delivered across Nagaland and neighbouring states.",
      img: mountainWindmills,
      from: 1,
    },
  ];

  const cardProgress = (i: number) => {
    const start = 0.05 + i * 0.22;
    const end = start + 0.18;
    return Math.min(Math.max((progress - start) / (end - start), 0), 1);
  };

  return (
    <section
      ref={wrapperRef}
      className="relative mt-16"
      style={{ height: isMobile ? "auto" : "200vh" }}
      aria-label="NEPeD timeline"
    >
      <div className={isMobile ? "relative py-4" : "sticky top-28 flex h-[70vh] flex-col justify-center overflow-hidden"}>
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 grid grid-cols-1 items-end gap-6 md:grid-cols-12"
        >
          <div className="md:col-span-1"><SectionNum n="01" /></div>
          <h2 className="text-2xl font-semibold leading-tight md:col-span-6 sm:text-3xl text-ink">
            A timeline of<br />indigenous clean energy.
          </h2>
          <p className="text-sm text-ink-soft md:col-span-5">
            NEPeD — Nagaland Empowerment of People through Energy Development — formed in 2007 to deliver clean, green and affordable energy to rural communities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, i) => {
            const p = isMobile ? 1 : cardProgress(i);
            const tx = isMobile ? 0 : (1 - p) * 80 * it.from;
            const ty = isMobile ? 0 : (1 - p) * 20;
            return (
              <motion.article
                key={it.title}
                initial={isMobile ? { opacity: 0, y: 35 } : undefined}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                style={isMobile ? undefined : {
                  opacity: p,
                  transform: `translate3d(${tx}px, ${ty}px, 0)`,
                }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm will-change-transform border border-ink/5"
              >
                <img src={it.img} alt="" className="h-40 w-full object-cover" />
                <div className="p-4">
                  <p className="text-[11px] font-medium tracking-wider text-accent-amber uppercase">
                    {it.year}
                  </p>
                  <h4 className="mt-1 text-base font-semibold leading-snug text-ink">{it.title}</h4>
                  <p className="mt-2 text-xs leading-snug text-ink-soft">{it.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
        {!isMobile && (
          <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full bg-ink transition-[width] duration-100"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function HydrogersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, isMobile ? 1.05 : 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [isMobile ? 0 : 40, isMobile ? 0 : -40]);

  return (
    <section
      ref={containerRef}
      id="hydrogers"
      className="relative mt-4 overflow-hidden rounded-3xl py-12"
    >
      <div className="max-w-4xl mx-auto text-center px-6 z-10 relative mb-12">
        <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">02 / Technology Spotlight</span>
        <motion.h2
          style={{ y: textY }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight mt-4 text-ink select-none"
        >
          Hydrogers
        </motion.h2>
        <p className="mt-8 text-sm md:text-base text-ink-soft max-w-xl mx-auto leading-relaxed">
          Designed and manufactured in Nagaland, our micro-hydro generators are custom-tuned for local mountain streams to deliver clean, independent power.
        </p>
      </div>

      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[440px] lg:h-[480px] overflow-hidden rounded-3xl border border-ink/5 shadow-md">
        <motion.img
          src={forest}
          alt="Forest canopy powering Hydrogers"
          className="w-full h-full object-cover"
          style={{ scale: imageScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
      </div>
    </section>
  );
}

function TechCards() {
  const [active, setActive] = useState(0);
  const cards = [
    {
      title: "Hydrogers",
      body: "Indigenous \"Made in Nagaland\" micro-hydro generators for off-grid villages.",
      img: microgrid,
      alt: "Hydroger micro-grid at dusk",
    },
    {
      title: "ELCs",
      body: "Locally manufactured Electronic Load Controllers tuned for rural micro-grids.",
      img: solarField,
      alt: "Electronic load controllers on a rural array",
    },
    {
      title: "NE India",
      body: "Deployments across Nagaland and neighbouring states of the North East.",
      img: mountainWindmills,
      alt: "Mountain ridges of the North East",
    },
  ];

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 85,
        damping: 14,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-6"
    >
      <motion.div variants={cardItemVariants} className="mb-3 flex items-center justify-between">
        <SectionNum n="04" />
        <span className="text-xs text-ink-soft">Hover to explore</span>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {cards.map((c, i) => {
          const isActive = active === i;
          return (
            <motion.div
              key={c.title}
              variants={cardItemVariants}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className={`relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-300 active-scale ${isActive ? "bg-ink text-white" : "bg-white text-ink border border-ink/5"
                }`}
            >
              <div
                className={`text-3xl font-bold transition-colors duration-200 ${isActive ? "text-accent-amber" : "text-ink"}`}
              >
                {c.title}
              </div>
              <p
                className={`mt-4 max-w-[14rem] text-xs leading-snug transition-colors duration-200 ${isActive ? "text-white/70" : "text-ink-soft"
                  }`}
              >
                {c.body}
              </p>
              <span
                className={`absolute bottom-5 right-5 h-6 w-6 rounded-full transition-colors duration-200 ${isActive ? "bg-accent-amber" : "bg-ink/10"
                  }`}
              />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        variants={cardItemVariants}
        className="relative mt-4 h-[420px] overflow-hidden rounded-3xl bg-ink"
      >
        {cards.map((c, i) => (
          <motion.img
            key={c.title}
            src={c.img}
            alt={c.alt}
            initial={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
            animate={{
              opacity: active === i ? 1 : 0,
              scale: active === i ? 1 : 1.02,
              filter: active === i ? "blur(0px)" : "blur(4px)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink shadow">
          {cards[active].title}
        </div>
      </motion.div>
    </motion.section>
  );
}

function ProjectsCarousel() {
  const slides = [
    {
      tag: "Ongoing",
      title: "Hydroger Micro-grids for Rural Farmers",
      body: "Indigenous Hydrogers paired with locally built ELCs deliver reliable power to remote villages across Nagaland — supporting livelihoods of rural farmers and households.",
      img: microgrid,
      alt: "Hybrid microgrid construction at sunset",
      pills: ["Hydroger", "Nagaland"],
    },
    {
      tag: "Deployed",
      title: "Community Solar for Naga Villages",
      body: "Village-scale solar installations built with local artisans, expanding clean energy access to households beyond the reach of the central grid.",
      img: solarField,
      alt: "Solar field across a green valley",
      pills: ["Solar", "Community"],
    },
    {
      tag: "Regional",
      title: "Wind & Hybrid Systems Across Northeast India",
      body: "Sustainable hybrid installations extending NEPeD's Made-in-Nagaland approach to neighbouring states — mountain wind paired with micro-hydro.",
      img: mountainWindmills,
      alt: "Wind turbines on mountain ridge",
      pills: ["Wind", "NE India"],
    },
  ];

  const doubleSlides = [...slides, ...slides, ...slides];

  const cssStyles = `
    .ProjectsCarousal .swiper-pagination-bullet-active {
      background: var(--color-ink, #111111) !important;
      width: 24px;
      border-radius: 4px;
    }
    .ProjectsCarousal {
      padding-bottom: 40px !important;
    }
  `;

  return (
    <div className="mt-8 w-full relative">
      <style>{cssStyles}</style>

      <Swiper
        spaceBetween={30}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1.15,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.6,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 2.1,
            spaceBetween: 35,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.0,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".projects-btn-next",
          prevEl: ".projects-btn-prev",
        }}
        className="ProjectsCarousal"
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {doubleSlides.map((s, index) => (
          <SwiperSlide key={index} className="w-full select-none cursor-grab active:cursor-grabbing">
            <div className="bg-white border border-ink/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-[400px]">
              {/* Image Frame */}
              <div className="h-56 w-full relative overflow-hidden bg-canvas">
                <img
                  className="h-full w-full object-cover"
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  draggable={false}
                />
                <span className="absolute left-4 top-4 px-3 py-1 rounded-full bg-accent-amber text-ink text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {s.tag}
                </span>
                <div className="absolute right-4 top-4 flex gap-1.5">
                  {s.pills.map((p) => (
                    <span key={p} className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-ink text-[9px] font-semibold border border-ink/5 shadow-sm">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-ink leading-snug tracking-tight">
                    {s.title}
                  </h4>
                  <p className="text-xs text-ink-soft leading-relaxed line-clamp-3">
                    {s.body}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-amber hover:text-ink transition-colors"
                  >
                    Read details →
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-4 mt-2">
        <button className="projects-btn-prev p-3 rounded-full border border-ink/10 bg-white text-ink hover:bg-canvas active-scale transition-all cursor-pointer shadow-sm">
          <ChevronLeftIcon size={16} />
        </button>
        <button className="projects-btn-next p-3 rounded-full border border-ink/10 bg-white text-ink hover:bg-canvas active-scale transition-all cursor-pointer shadow-sm">
          <ChevronRightIcon size={16} />
        </button>
      </div>
    </div>
  );
}
