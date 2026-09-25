import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroMetric = {
  value: string;
  label: string;
};

type LayoutPreloaderProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  heroImage?: HeroImage;
  galleryImages?: HeroImage[];
  metrics?: HeroMetric[];
  className?: string;
};

const defaultGallery: HeroImage[] = [
  {
    src: "/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
    alt: "Villagers using hydroger-powered equipment",
  },
  {
    src: "/microgrid.webp",
    alt: "A renewable microgrid installation",
  },
  {
    src: "/solar-field.webp",
    alt: "Solar panels in a green valley",
  },
];

const defaultMetrics: HeroMetric[] = [
  { value: "2007", label: "founded" },
  { value: "100%", label: "indigenous hydrogers" },
  { value: "NE", label: "community deployments" },
];

const preloaderItems = [
  {
    word: "Indigenous hydrogers",
    image: "/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
    rotate: -3,
    x: -15,
    y: -10,
  },
  {
    word: "Community microgrids",
    image: "/microgrid.webp",
    rotate: 2,
    x: 15,
    y: -15,
  },
  {
    word: "Clean energy",
    image: "/solar-field.webp",
    rotate: -2,
    x: -10,
    y: 15,
  },
  {
    word: "NEPeD",
    image: "/hero-windmill.webp",
    rotate: 3,
    x: 10,
    y: -5,
  },
];

export function LayoutPreloader({
  title = "Clean, green and affordable energy for Nagaland",
  subtitle = "NEPeD builds indigenous micro-hydro and off-grid energy systems that help rural communities power livelihoods, learning and local resilience.",
  primaryHref = "#projects",
  primaryLabel = "Explore Projects",
  secondaryHref = NEPED_ENERGY_PATHS.technology,
  heroImage = {
    src: "/hero-windmill.webp",
    alt: "Wind turbines along a mountain ridge in Nagaland",
  },
  galleryImages = defaultGallery,
  metrics = defaultMetrics,
  className = "",
}: LayoutPreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderIndex, setPreloaderIndex] = useState(0);
  const [dimension, setDimension] = useState(() => {
    if (typeof window === "undefined") {
      return { width: 0, height: 0 };
    }

    return { width: window.innerWidth, height: window.innerHeight };
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const itemTimers = preloaderItems.slice(1).map((_, itemIndex) =>
      window.setTimeout(() => {
        setPreloaderIndex(itemIndex + 1);
      }, (itemIndex + 1) * 1100),
    );

    const completeTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, (preloaderItems.length - 1) * 1100 + 1400);

    return () => {
      itemTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(completeTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} Z`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} Z`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 },
    },
  };

  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 },
    },
  };

  const textOpacity = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] as const, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 40,
      rotate: 0,
    },
    enter: (custom: typeof preloaderItems[0]) => ({
      opacity: 1,
      scale: 1,
      y: custom.y,
      x: custom.x,
      rotate: custom.rotate,
      transition: { duration: 0.65, ease: [0.215, 0.61, 0.355, 1] as const, delay: 0.1 },
    }),
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -30,
      transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="fixed left-0 top-0 z-[9999] flex h-[100dvh] w-screen flex-col items-center justify-center overflow-hidden text-white"
           
            aria-label="Loading NEPeD homepage"
          >
            {dimension.width > 0 && (
              <>
                <div className="relative z-10 flex w-full max-w-lg flex-col items-center justify-center px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 0.35, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8 text-center"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[oklch(0.97_0.012_80)]">
                    NEPeD · Nagaland
                  </span>
                </motion.div>

                <div className="relative mb-10 flex h-72 w-56 items-center justify-center overflow-visible md:h-80 md:w-64">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={preloaderIndex}
                      custom={preloaderItems[preloaderIndex]}
                      variants={imageVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="h-full w-full overflow-hidden rounded-sm border border-[oklch(0.97_0.012_80)]/15 bg-[oklch(0.28_0.025_35)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
                    >
                      <img
                        src={preloaderItems[preloaderIndex].image}
                        alt={preloaderItems[preloaderIndex].word}
                        className="h-full w-full object-cover grayscale-[20%] sepia-[15%] contrast-[105%]"
                        draggable={false}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex h-16 items-center justify-center overflow-hidden text-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={preloaderIndex}
                      variants={textOpacity}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="font-sans text-3xl font-medium tracking-normal text-[oklch(0.97_0.012_80)] md:text-4xl"
                    >
                      {preloaderIndex === preloaderItems.length - 1 ? (
                        <motion.span layoutId="logo-transition" className="inline-block font-sans">
                          NEPeD<span className="font-bold text-accent-amber">.</span>
                        </motion.span>
                      ) : (
                        preloaderItems[preloaderIndex].word
                      )}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                  {preloaderItems.map((_, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0.15, width: 4 }}
                      animate={{
                        opacity: itemIndex === preloaderIndex ? 1 : itemIndex < preloaderIndex ? 0.5 : 0.15,
                        width: itemIndex === preloaderIndex ? 16 : 4,
                        backgroundColor:
                          itemIndex === preloaderIndex
                            ? "oklch(0.78 0.07 40)"
                            : "oklch(0.97 0.012 80)",
                      }}
                      transition={{ duration: 0.4 }}
                      className="h-1 rounded-full"
                    />
                  ))}
                </div>
                </div>

                <svg className="pointer-events-none absolute left-0 top-0 z-0 h-[calc(100%+300px)] w-full">
                  <motion.path
                    variants={curveVariants}
                    initial="initial"
                    exit="exit"
                    fill="oklch(0.22 0.018 40)"
                  />
                </svg>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <section
        className={`relative isolate overflow-hidden rounded-[2rem] bg-ink text-white sm:rounded-[2.5rem] [font-family:'Inter',sans-serif] ${className}`}
      >
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/48 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/18 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[76vh] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[82vh] sm:px-10 lg:min-h-[740px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto flex w-full max-w-[900px] flex-col items-center"
          >
            <h1 className="max-w-[820px] whitespace-pre-line text-center text-[clamp(42px,7vw,72px)] font-bold leading-[1.05] tracking-[-0.04em] text-[#FFFFFF]">
              {title}
            </h1>
            <p className="mt-6 max-w-[620px] text-center text-[16px] font-normal leading-[1.6] tracking-[-0.01em] text-white/[0.85]">
              {subtitle}
            </p>

            <a
              href={primaryHref}
              className="mt-8 inline-flex items-center gap-4 rounded-full bg-white px-[22px] py-3 text-[15px] font-medium tracking-[-0.02em] text-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition hover:bg-white/92 active-scale"
            >
              {primaryLabel}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#111] text-white">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="mt-12 grid w-full max-w-[900px] grid-cols-1 gap-4 text-left md:grid-cols-2"
          >
            <article className="grid grid-cols-[112px_1fr] gap-4 rounded-2xl bg-black/34 p-4 text-white backdrop-blur-xl">
              <img
                src={galleryImages[0]?.src}
                alt={galleryImages[0]?.alt}
                className="h-24 w-28 rounded-xl object-cover"
                draggable={false}
              />
              <div className="min-w-0">
                <h2 className="text-[24px] font-semibold leading-[1.2] tracking-normal text-white">
                  Indigenous Hydroger Program
                </h2>
                <p className="mt-2 text-[15px] font-normal leading-[1.6] text-white/80">
                  Community-scale renewable power for remote villages across Nagaland.
                </p>
                <a href={secondaryHref} className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-white">
                  Read More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="rounded-2xl bg-black/34 p-5 text-white backdrop-blur-xl">
              <p className="text-[15px] font-normal leading-[1.6] text-white/80">
                Every installation is a step toward clean energy access, local livelihoods, and stronger village infrastructure.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-semibold text-black">
                  NE
                </span>
                <div>
                  <div className="text-[13px] font-semibold leading-none">NEPeD</div>
                  <div className="mt-1 text-[12px] text-white/62">{metrics[0]?.value} · Nagaland</div>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </section>
    </>
  );
}
