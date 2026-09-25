import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GALLERY_ALBUMS_DATA } from "@/data/shared/galleryAlbumsData";

/*
 * Site intro, built from components/ui/layout-preloader.tsx: flips through one gallery photo per
 * state (title = state name), ends on the hero background with "NEPED", then the panel slides up
 * with a curved edge. On the homepage the last photo instead grows into the hero panel (same
 * inset, radius and overlay as NepedEconomicPage) and fades onto the real hero.
 * Film-grain noise overlay from the "noise-animation" keyframes (index.css).
 * Shown once per browser session; skipped for "reduce motion".
 */

const HERO_BG = "/bg2.webp";
const STEP_MS = 800;
const HOLD_LAST_MS = 1100;
const MORPH_AT_MS = 800; // after the last photo appears, start growing it into the hero
const MORPH_S = 0.9;
const SEEN_KEY = "neped-intro-seen";

const ITEMS = [
  ...GALLERY_ALBUMS_DATA.filter((a) => a.photos[0]).map((a, i) => ({
    word: a.title,
    image: a.photos[0].src,
    rotate: [-3, 2, -2, 3][i % 4],
    x: [-15, 15, -10, 10][i % 4],
    y: [-10, -15, 15, -5][i % 4],
  })),
  { word: "NEPED", image: HERO_BG, rotate: 0, x: 0, y: 0 },
];

// Inline SVG turbulence as a data URI — no external asset
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type Box = { top: number; left: number; width: number; height: number; radius: number };

/** The homepage hero panel (NepedEconomicPage, data-intro-hero); falls back to its known inset / radius. */
function heroBox(w: number, h: number): Box {
  const el = document.querySelector<HTMLElement>("[data-intro-hero]");
  if (el) {
    const r = el.getBoundingClientRect();
    return { top: r.top, left: r.left, width: r.width, height: r.height, radius: parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0 };
  }
  const gap = w >= 640 ? 16 : 10;
  return { top: gap, left: gap, width: w - gap * 2, height: h - gap * 2, radius: w >= 640 ? 32 : 24 };
}

const toStyle = ({ radius, ...box }: Box) => ({ ...box, borderRadius: radius });

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

export function SitePreloader() {
  const reduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(() => !alreadySeen());
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  const [morph, setMorph] = useState<{ from: Box; to: Box } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  // Decided once, on the page the visitor lands on
  const [onHome] = useState(() => pathname === "/");

  const active = isLoading && !reduceMotion;

  // Warm the cache so each photo is ready when its turn comes
  useEffect(() => {
    if (!active) return;
    ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    const timers = ITEMS.slice(1).map((_, i) => window.setTimeout(() => setIndex(i + 1), (i + 1) * STEP_MS));
    const lastAt = (ITEMS.length - 1) * STEP_MS;
    if (onHome) {
      timers.push(
        window.setTimeout(() => {
          const r = cardRef.current?.getBoundingClientRect();
          if (r) {
            const from = { top: r.top, left: r.left, width: r.width, height: r.height, radius: 10 };
            setMorph({ from, to: heroBox(window.innerWidth, window.innerHeight) });
          }
        }, lastAt + MORPH_AT_MS),
      );
    }
    const done = window.setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* storage unavailable — intro may show again next load */
      }
    }, onHome ? lastAt + MORPH_AT_MS + MORPH_S * 1000 + 150 : lastAt + HOLD_LAST_MS);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", onResize);
      timers.forEach(window.clearTimeout);
      window.clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, [active, onHome]);

  const { w, h } = size;
  const initialPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + 300} 0 ${h} Z`;
  const targetPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} Z`;
  const ease = [0.76, 0, 0.24, 1] as const;
  const item = ITEMS[index];
  const isLast = index === ITEMS.length - 1;
  const morphing = morph !== null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="preloader"
          initial={{ top: 0 }}
          exit={
            morphing
              ? { opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }
              : { top: "-100vh", transition: { duration: 0.9, ease, delay: 0.2 } }
          }
          className="fixed left-0 top-0 z-[9999] flex h-[100dvh] w-screen flex-col items-center justify-center text-[#1a1a1a]"
          role="status"
          aria-label="Loading NEPED"
        >
          {/* Curved bottom edge that flattens as the panel lifts away */}
          <motion.svg
            animate={{ opacity: morphing ? 0 : 1 }}
            transition={{ duration: 0.5, delay: MORPH_S * 0.45 }}
            className="pointer-events-none absolute left-0 top-0 h-[calc(100%+300px)] w-full"
            aria-hidden
          >
            <motion.path
              initial={{ d: initialPath }}
              exit={{ d: targetPath, transition: { duration: 0.8, ease, delay: 0.3 } }}
              fill="#faf9f5"
            />
          </motion.svg>
          {/* Film grain */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -inset-[50%] opacity-[0.05] mix-blend-multiply"
            style={{ backgroundImage: NOISE, animation: "noise-animation 1s steps(2) infinite" }}
          />
          </div>

          <motion.div
            animate={{ opacity: morphing ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex w-full max-w-lg flex-col items-center justify-center px-6 text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-[10px] uppercase tracking-[0.4em] text-[#193f32]"
            >
              NEPED · Nagaland
            </motion.span>

            <div ref={cardRef} className={`relative mb-10 flex items-center justify-center overflow-visible transition-[width,height] duration-500 ${isLast ? "h-64 w-80 md:h-72 md:w-[26rem]" : "h-72 w-56 md:h-80 md:w-64"}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 40, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, y: item.y, x: item.x, rotate: item.rotate, transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1], delay: 0.05 } }}
                  exit={{ opacity: 0, scale: 0.95, y: -30, transition: { duration: 0.35, ease } }}
                  className="absolute inset-0 overflow-hidden rounded-[10px] border border-black/5 bg-[#e9eee6] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]"
                >
                  <img src={item.image} alt="" className="h-full w-full object-cover" draggable={false} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex h-16 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1], delay: 0.15 } }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease } }}
                  className={`font-medium text-[#193f32] ${isLast ? "text-5xl md:text-6xl tracking-[-1px]" : "text-3xl md:text-4xl"}`}
                >
                  {item.word}
                  {isLast && <span className="text-[#2d7d3a]">.</span>}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {ITEMS.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1.5 rounded-full bg-[#193f32]"
                  animate={{ width: i === index ? 20 : 6, opacity: i <= index ? 0.9 : 0.25 }}
                  transition={{ duration: 0.35 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Homepage: the last photo grows into the hero panel, then the layer fades onto the real hero */}
          {morph && (
            <motion.div
              aria-hidden
              initial={toStyle(morph.from)}
              animate={toStyle(morph.to)}
              transition={{ duration: MORPH_S, ease }}
              className="fixed z-20 overflow-hidden bg-[#e9eee6]"
            >
              <img src={HERO_BG} alt="" className="h-full w-full object-cover saturate-[0.9]" draggable={false} />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: MORPH_S, ease }}
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute inset-0 bg-[#0b1f18]/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f18]/45 via-[#0b1f18]/15 to-transparent" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
