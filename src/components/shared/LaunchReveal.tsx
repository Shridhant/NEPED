import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/*
 * Website launch reveal: closed stage curtains with a "Launch" button. On click (or Enter / Space)
 * the curtains gather to the sides, the pelmet lifts away, and confetti and balloons fill the screen.
 *
 * - Turn it off after the launch period by setting LAUNCH_REVEAL_ENABLED to false.
 * - Every visitor sees it once (remembered in localStorage).
 * - Add ?launch to any URL to always show it (rehearsals and the launch itself).
 * - "Reduce motion": curtains simply fade, no confetti or balloons.
 */
export const LAUNCH_REVEAL_ENABLED = true;

const SEEN_KEY = "neped-launch-reveal-seen";
const OPEN_S = 2.4; // curtains opening
const DONE_MS = 10000; // overlay removed once the balloons have floated away

const EASE = [0.65, 0, 0.35, 1] as const;

const FESTIVE = ["#E8A33D", "#1E6F4C", "#C0392B", "#2E86C1", "#F4D03F", "#8E44AD", "#ffffff", "#E67E22"];

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

// Random pieces are generated once, when the module loads (not during render)
const CONFETTI_RAIN = Array.from({ length: 110 }, (_, i) => ({
  id: `r${i}`,
  left: rand(0, 100),
  drift: rand(-12, 12),
  spin: rand(360, 1080) * (Math.random() < 0.5 ? -1 : 1),
  delay: rand(0.2, 2.2),
  duration: rand(3.2, 5.5),
  w: rand(7, 12),
  h: rand(10, 18),
  round: Math.random() < 0.25,
  color: pick(FESTIVE),
}));

/** Two cannons from the bottom corners, aimed up and inwards */
const CONFETTI_BURST = Array.from({ length: 90 }, (_, i) => {
  const fromLeft = i % 2 === 0;
  const reach = rand(15, 55); // how far across the screen (vw)
  return {
    id: `b${i}`,
    fromLeft,
    x: fromLeft ? reach : -reach,
    peak: rand(-95, -55), // vh above the bottom edge
    spin: rand(360, 1440) * (Math.random() < 0.5 ? -1 : 1),
    delay: rand(0.3, 0.8),
    duration: rand(3, 4.4),
    w: rand(7, 11),
    h: rand(10, 16),
    color: pick(FESTIVE),
  };
});

const BALLOONS = Array.from({ length: 18 }, (_, i) => ({
  id: `l${i}`,
  left: (i / 18) * 100 + rand(-2, 3),
  size: rand(56, 92),
  sway: rand(14, 34),
  delay: rand(0.5, 2.6),
  duration: rand(6.5, 9),
  color: FESTIVE[i % FESTIVE.length] === "#ffffff" ? "#E8A33D" : FESTIVE[i % FESTIVE.length],
}));

/** Red velvet: vertical folds, darker at the top and bottom */
const VELVET = [
  "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 78%, rgba(0,0,0,0.4) 100%)",
  "repeating-linear-gradient(90deg, #4a070d 0px, #7d1019 22px, #b31f2c 44px, #8c1420 66px, #4a070d 88px)",
].join(", ");

function shouldShow() {
  if (!LAUNCH_REVEAL_ENABLED) return false;
  try {
    if (new URLSearchParams(window.location.search).has("launch")) return true;
    return localStorage.getItem(SEEN_KEY) !== "1";
  } catch {
    return true;
  }
}

type Phase = "closed" | "opening" | "gone";

export function LaunchReveal() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(() => (shouldShow() ? "closed" : "gone"));

  // No page scrolling while the curtains are closed
  useEffect(() => {
    if (phase !== "closed") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "opening") return;
    const t = window.setTimeout(() => setPhase("gone"), reduceMotion ? 1200 : DONE_MS);
    return () => window.clearTimeout(t);
  }, [phase, reduceMotion]);

  const launch = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* storage unavailable — reveal may show again next visit */
    }
  };

  if (phase === "gone") return null;
  const opening = phase === "opening";
  const celebrate = opening && !reduceMotion;

  return (
    <div
      className={`fixed inset-0 z-[10000] overflow-hidden ${opening ? "pointer-events-none" : "cursor-pointer"}`}
      onClick={launch}
      role="dialog"
      aria-modal={!opening}
      aria-label="Website launch"
    >
      {/* Curtains: gather towards the outer edges */}
      {(["left", "right"] as const).map((side) => (
        <motion.div
          key={side}
          aria-hidden
          initial={false}
          animate={
            opening
              ? reduceMotion
                ? { opacity: 0 }
                : { scaleX: 0.12, x: side === "left" ? "-14%" : "14%" }
              : { scaleX: 1, x: "0%", opacity: 1 }
          }
          transition={{ duration: reduceMotion ? 0.8 : OPEN_S, ease: EASE }}
          style={{
            transformOrigin: side === "left" ? "0% 50%" : "100% 50%",
            backgroundImage: VELVET,
          }}
          className={`absolute top-0 bottom-0 w-[50.5%] ${side === "left" ? "left-0" : "right-0"} shadow-[0_0_60px_rgba(0,0,0,0.6)]`}
        >
          {/* Gold trim along the meeting edge */}
          <div
            className={`absolute top-0 bottom-0 w-[6px] ${side === "left" ? "right-0" : "left-0"}`}
            style={{ background: "linear-gradient(to bottom, #f6d77a, #b8862b, #f6d77a, #b8862b)" }}
          />
        </motion.div>
      ))}

      {/* Pelmet (valance) across the top with a scalloped edge and gold fringe */}
      <motion.div
        aria-hidden
        initial={false}
        animate={opening && !reduceMotion ? { y: "-110%" } : opening ? { opacity: 0 } : { y: "0%" }}
        transition={{ duration: 1.2, ease: EASE, delay: opening && !reduceMotion ? OPEN_S - 0.6 : 0 }}
        className="absolute inset-x-0 top-0 h-[12vh] min-h-[70px]"
      >
        <div className="absolute inset-0" style={{ backgroundImage: VELVET, filter: "brightness(0.85)" }} />
        <div
          className="absolute inset-x-0 -bottom-[22px] h-[24px]"
          style={{
            background: "radial-gradient(circle at 50% 0, #6b0d16 0 18px, transparent 19px)",
            backgroundSize: "44px 24px",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[6px]"
          style={{ background: "linear-gradient(90deg, #b8862b, #f6d77a, #b8862b, #f6d77a, #b8862b)" }}
        />
      </motion.div>

      {/* Logo and launch button */}
      <AnimatePresence>
        {!opening ? (
          <motion.div
            key="launch-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.2 } }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.35 } }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-4"
          >
            <div className="bg-[#ffffff] rounded-md p-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <img src="/logos/neped-logo.webp" alt="NEPED Logo" className="h-28 sm:h-36 w-auto object-contain" />
            </div>
            <button
              type="button"
              autoFocus
              onClick={(e) => {
                e.stopPropagation();
                launch();
              }}
              className="inline-flex min-h-14 items-center rounded-md bg-[#E8A33D] px-10 text-[18px] sm:text-[20px] font-semibold tracking-[0.04em] text-[#12432E] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:bg-[#f0b95e] transition-colors duration-300 ease-in-out cursor-pointer"
            >
              Launch Website
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Confetti rain from the top */}
      {celebrate
        ? CONFETTI_RAIN.map((c) => (
            <motion.span
              key={c.id}
              aria-hidden
              initial={{ y: "-10vh", x: 0, rotate: 0, opacity: 1 }}
              animate={{ y: "110vh", x: `${c.drift}vw`, rotate: c.spin, opacity: [1, 1, 0.9] }}
              transition={{ duration: c.duration, delay: c.delay, ease: "linear" }}
              className="absolute top-0"
              style={{ left: `${c.left}%`, width: c.w, height: c.round ? c.w : c.h, backgroundColor: c.color, borderRadius: c.round ? "50%" : 2 }}
            />
          ))
        : null}

      {/* Confetti cannons from the bottom corners */}
      {celebrate
        ? CONFETTI_BURST.map((c) => (
            <motion.span
              key={c.id}
              aria-hidden
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              animate={{ x: `${c.x}vw`, y: ["0vh", `${c.peak}vh`, "10vh"], rotate: c.spin, opacity: [1, 1, 0] }}
              transition={{ duration: c.duration, delay: c.delay, ease: "easeOut", y: { duration: c.duration, delay: c.delay, times: [0, 0.4, 1], ease: ["easeOut", "easeIn"] } }}
              className={`absolute bottom-0 ${c.fromLeft ? "left-0" : "right-0"}`}
              style={{ width: c.w, height: c.h, backgroundColor: c.color, borderRadius: 2 }}
            />
          ))
        : null}

      {/* Balloons rising */}
      {celebrate
        ? BALLOONS.map((b) => (
            <motion.div
              key={b.id}
              aria-hidden
              initial={{ y: "110vh", x: 0 }}
              animate={{ y: "-40vh", x: [0, b.sway, -b.sway, b.sway / 2, 0] }}
              transition={{ duration: b.duration, delay: b.delay, ease: "easeIn", x: { duration: b.duration, delay: b.delay, ease: "easeInOut" } }}
              className="absolute top-0"
              style={{ left: `${b.left}%`, width: b.size }}
            >
              <svg viewBox="0 0 60 120" width={b.size} height={b.size * 2} className="drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                <ellipse cx="30" cy="34" rx="26" ry="32" fill={b.color} />
                <ellipse cx="21" cy="22" rx="6" ry="10" fill="#ffffff" opacity="0.35" transform="rotate(-20 21 22)" />
                <path d="M26 65 L34 65 L30 70 Z" fill={b.color} />
                <path d="M30 70 Q24 85 31 98 T29 120" stroke="#6b6b6b" strokeWidth="1" fill="none" opacity="0.7" />
              </svg>
            </motion.div>
          ))
        : null}
    </div>
  );
}
