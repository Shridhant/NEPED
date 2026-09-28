import * as React from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

/* ── Halo Reel ───────────────────────────────────────────────────
 * Cards ride an ellipse. Card i sits at θ = i·step + rotation on an
 * ellipse of radii (rx, ry):
 *
 *   x = rx·cos θ      y = ry·sin θ      scale = min + (1−min)·(cos θ + 1)/2
 *
 * One `rotation` motion value drives the whole ring; every card derives its
 * transform from it through `useTransform`, so a spin never re-renders React.
 *
 * Site changes: `cardClassName` / `imageClassName` (e.g. circular cards, cropping
 * photo borders), `interactiveCenterLabel` (lets a button in the label be clicked) and
 * `caption` (a name under each card that fades in as it comes to the front, or — with
 * `captionPlacement="ring"` — the front card's name shown in the empty space inside the ring).
 * ─────────────────────────────────────────────────────────────── */

export type HaloReelItem = {
  /** Image for the card. Omit it and the card falls back to the text face. */
  src?: string;
  alt?: string;
  bgColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  /** Text shown under the card, fading in as the card nears the front of the ring. */
  caption?: string;
};

export interface HaloReelProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  items: HaloReelItem[];
  /** Card width in px at the front of the ring. @default 130 */
  cardWidth?: number;
  /** Card height in px at the front of the ring. @default 180 */
  cardHeight?: number;
  /** Scale of the card at the far side of the ring. @default 0.4 */
  minScale?: number;
  /** Horizontal radius as a fraction of the stage width. @default 0.45 */
  radiusXRatio?: number;
  /** Where the ellipse is centred across the stage. @default 0 */
  centerXRatio?: number;
  /** Vertical radius as a fraction of the stage height. @default 0.36 */
  radiusYRatio?: number;
  /** @default true */
  autoPlay?: boolean;
  /** @default 1000 */
  holdDuration?: number;
  /** @default 700 */
  stepDuration?: number;
  /** @default true */
  pauseOnHover?: boolean;
  /** @default true */
  draggable?: boolean;
  /** @default 1.2 */
  spread?: number;
  /** @default 64 */
  maxCards?: number;
  /** @default 1 */
  dragSensitivity?: number;
  /** Node parked beside the ring, behind the cards. */
  centerLabel?: React.ReactNode;
  /** @default true */
  showCenterLabel?: boolean;
  /** Allow clicks inside the centre label (e.g. a button). @default false */
  interactiveCenterLabel?: boolean;
  /** Extra classes for every card (e.g. `rounded-full`). */
  cardClassName?: string;
  /** Extra classes for every card image. */
  imageClassName?: string;
  /** Extra classes for every card caption. */
  captionClassName?: string;
  /** "card": caption under each card. "ring": front card's caption inside the ring. @default "card" */
  captionPlacement?: "card" | "ring";
  /** Extra classes for the caption shown inside the ring. */
  ringCaptionClassName?: string;
}

const TAU = Math.PI * 2;

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export function HaloReel({
  items,
  cardWidth = 130,
  cardHeight = 180,
  minScale = 0.4,
  radiusXRatio = 0.45,
  centerXRatio = 0,
  radiusYRatio = 0.36,
  autoPlay = true,
  holdDuration = 1000,
  stepDuration = 700,
  pauseOnHover = true,
  draggable = true,
  spread = 1.2,
  maxCards = 64,
  dragSensitivity = 1,
  centerLabel,
  showCenterLabel = true,
  interactiveCenterLabel = false,
  cardClassName,
  imageClassName,
  captionClassName,
  captionPlacement = "card",
  ringCaptionClassName,
  className,
  style,
  ...props
}: HaloReelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const count = items.length;

  const rotation = useMotionValue(0);
  const draggingRef = React.useRef(false);
  const hoverRef = React.useRef(false);

  const [size, setSize] = React.useState({ w: 0, h: 0 });
  React.useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    const measure = () => setSize({ w: node.offsetWidth, h: node.offsetHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const radiusX = size.w * radiusXRatio;
  const radiusY = size.h * radiusYRatio;

  const slots = clamp(
    Math.ceil(TAU * Math.max(radiusX / (cardWidth * spread), radiusY / (cardHeight * spread))),
    count,
    Math.max(count, maxCards),
  );
  const step = slots ? TAU / slots : 0;

  const fit = size.w
    ? clamp(Math.min(size.w / (radiusX + cardWidth), size.h / (2 * radiusY + cardHeight)), 0.45, 1)
    : 1;
  const cardW = cardWidth * fit;
  const cardH = cardHeight * fit;

  // Slot currently at the front of the ring (card i sits at θ = i·step + rotation, front is θ = 0)
  const [frontSlot, setFrontSlot] = React.useState(0);
  useMotionValueEvent(rotation, "change", (r) => {
    if (captionPlacement !== "ring" || !step) return;
    const slot = ((Math.round(-r / step) % slots) + slots) % slots;
    setFrontSlot((prev) => (prev === slot ? prev : slot));
  });
  const frontCaption = count ? items[frontSlot % count]?.caption : undefined;
  // Visible inside of the ring: from the ellipse's left edge (or the stage edge) to the front card
  const ringLeft = Math.max(0, size.w * centerXRatio - radiusX + cardW / 2);
  const ringRight = size.w * centerXRatio + radiusX - cardW / 2;

  React.useEffect(() => {
    if (!autoPlay || reduceMotion || !count) return;

    let timer = 0;
    let controls: ReturnType<typeof animate> | undefined;

    const tick = () => {
      timer = window.setTimeout(() => {
        if (draggingRef.current || (pauseOnHover && hoverRef.current)) {
          tick();
          return;
        }
        controls = animate(rotation, rotation.get() - step, {
          duration: stepDuration / 1000,
          ease: [0.4, 0, 0.2, 1],
          onComplete: tick,
        });
      }, holdDuration);
    };

    tick();
    return () => {
      window.clearTimeout(timer);
      controls?.stop();
    };
  }, [autoPlay, count, holdDuration, pauseOnHover, reduceMotion, rotation, step, stepDuration]);

  /* ── drag ──────────────────────────────────────────────────── */

  const dragRef = React.useRef({ left: 0, top: 0, angle: 0 });

  const pointerAngle = (e: React.PointerEvent) => {
    const { left, top } = dragRef.current;
    return Math.atan2(
      (e.clientY - top - size.h / 2) / (radiusY || 1),
      (e.clientX - left - size.w * centerXRatio) / (radiusX || 1),
    );
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable || (e.pointerType === "mouse" && e.button !== 0)) return;
    // Don't start a drag from a link or button (e.g. inside the centre label)
    if ((e.target as HTMLElement).closest("a,button")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    dragRef.current = { left: rect.left, top: rect.top, angle: 0 };
    dragRef.current.angle = pointerAngle(e);
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const angle = pointerAngle(e);
    const delta = ((angle - dragRef.current.angle + Math.PI * 3) % TAU) - Math.PI;
    dragRef.current.angle = angle;
    rotation.set(rotation.get() + delta * dragSensitivity);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    const snapped = Math.round(rotation.get() / step) * step;
    if (reduceMotion) {
      rotation.set(snapped);
      return;
    }
    animate(rotation, snapped, { duration: 0.5, ease: [0.16, 1, 0.3, 1] });
  };

  const spinBy = (direction: number) => {
    const target = Math.round(rotation.get() / step) * step - direction * step;
    if (reduceMotion) {
      rotation.set(target);
      return;
    }
    animate(rotation, target, { duration: stepDuration / 1000, ease: [0.4, 0, 0.2, 1] });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = ({ ArrowRight: 1, ArrowLeft: -1 } as Record<string, number>)[e.key];
    if (!direction) return;
    e.preventDefault();
    spinBy(direction);
  };

  if (!count) return null;

  return (
    <div
      ref={stageRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={props["aria-label"] ?? "Image carousel"}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={cn(
        "relative h-[100dvh] w-full touch-pan-y select-none overflow-hidden outline-none",
        draggable && "cursor-grab active:cursor-grabbing",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
        className,
      )}
      style={style}
      {...props}
    >
      {showCenterLabel && centerLabel ? (
        <div
          className={cn(
            "absolute inset-y-0 z-0 flex items-center justify-center px-4 text-center",
            interactiveCenterLabel ? "pointer-events-auto" : "pointer-events-none",
          )}
          style={{ left: size.w * centerXRatio + radiusX + cardW / 2, right: 0 }}
        >
          {centerLabel}
        </div>
      ) : null}

      {captionPlacement === "ring" ? (
        <div
          aria-live="polite"
          className="pointer-events-none absolute inset-y-0 z-0 flex items-center justify-center px-4 text-center"
          style={{ left: ringLeft, width: Math.max(0, ringRight - ringLeft) }}
        >
          <AnimatePresence mode="wait">
            {frontCaption ? (
              <motion.span
                key={frontSlot}
                initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className={ringCaptionClassName}
              >
                {frontCaption}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      ) : null}

      {Array.from({ length: slots }, (_, i) => (
        <WheelCard
          key={i}
          item={items[i % count]}
          decorative={i >= count}
          index={i}
          step={step}
          rotation={rotation}
          radiusX={radiusX}
          radiusY={radiusY}
          centerXRatio={centerXRatio}
          minScale={minScale}
          width={cardW}
          height={cardH}
          cardClassName={cardClassName}
          imageClassName={imageClassName}
          captionClassName={captionClassName}
          showCaption={captionPlacement === "card"}
          onHoverChange={(hovered) => {
            hoverRef.current = hovered;
          }}
        />
      ))}
    </div>
  );
}

/* ── card ────────────────────────────────────────────────────── */

function WheelCard({
  item,
  index,
  step,
  rotation,
  radiusX,
  radiusY,
  centerXRatio,
  minScale,
  width,
  height,
  decorative,
  cardClassName,
  imageClassName,
  captionClassName,
  showCaption,
  onHoverChange,
}: {
  item: HaloReelItem;
  index: number;
  step: number;
  rotation: MotionValue<number>;
  radiusX: number;
  radiusY: number;
  centerXRatio: number;
  minScale: number;
  width: number;
  height: number;
  decorative: boolean;
  cardClassName?: string;
  imageClassName?: string;
  captionClassName?: string;
  showCaption: boolean;
  onHoverChange: (hovered: boolean) => void;
}) {
  const cos = useTransform(rotation, (r) => Math.cos(index * step + r));
  const sin = useTransform(rotation, (r) => Math.sin(index * step + r));

  const x = useTransform(cos, (c) => c * radiusX);
  const y = useTransform(sin, (s) => s * radiusY);
  const scale = useTransform(cos, (c) => minScale + (1 - minScale) * ((c + 1) / 2));
  const zIndex = useTransform(scale, (s) => Math.round(s * 1000));
  // Caption shows on the front half of the ring only, fully visible near the front
  const captionOpacity = useTransform(cos, (c) => clamp((c - 0.2) / 0.6, 0, 1));

  return (
    <motion.div
      role={decorative ? undefined : "group"}
      aria-roledescription={decorative ? undefined : "slide"}
      aria-hidden={decorative || undefined}
      onPointerEnter={() => onHoverChange(true)}
      onPointerLeave={() => onHoverChange(false)}
      style={{
        x,
        y,
        scale,
        zIndex,
        width,
        height,
        left: `${centerXRatio * 100}%`,
        top: "50%",
        marginLeft: -width / 2,
        marginTop: -height / 2,
      }}
      className="absolute"
    >
      <div className={cn("relative h-full w-full overflow-hidden shadow-xl", cardClassName)}>
        {item.src ? (
          <img
            src={item.src}
            alt={decorative ? "" : (item.alt ?? "")}
            draggable={false}
            className={cn("pointer-events-none absolute inset-0 h-full w-full select-none object-cover", imageClassName)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-1 bg-card p-3 text-center text-card-foreground"
            style={{ backgroundColor: item.bgColor, color: item.textColor }}
          >
            {item.title ? <span className="text-2xl font-black leading-none">{item.title}</span> : null}
            {item.subtitle ? (
              <span className="text-[0.6rem] uppercase tracking-[0.2em] opacity-70">{item.subtitle}</span>
            ) : null}
          </div>
        )}
      </div>
      {showCaption && item.caption ? (
        <motion.span
          aria-hidden
          style={{ opacity: captionOpacity }}
          className={cn(
            "pointer-events-none absolute left-1/2 top-full mt-2 w-max max-w-[180%] -translate-x-1/2 text-center",
            captionClassName,
          )}
        >
          {item.caption}
        </motion.span>
      ) : null}
    </motion.div>
  );
}

export default HaloReel;
