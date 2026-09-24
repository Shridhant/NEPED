import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import microgrid from "@/assets/microgrid.png";
import solarField from "@/assets/solar-field.png";
import { NEPED_ENERGY_PATHS } from "@/routes/paths";

interface Card {
  id: number;
  contentType: 1 | 2 | 3;
}

const cardData = {
  1: {
    title: "Electronic Load Controller (ELC)",
    badge: "~1 kg Apparatus • Dimapur R&D",
    origin: "Manufactured at NEPeD/CERES Complex, Industrial Estate, Dimapur",
    story:
      "Hydrogers were originally installed without ELCs, requiring tricky manual balancing that caused fused bulbs and damaged appliances. NEPeD funded an electronic engineer to develop this prototype in 2009 with outstanding field success.",
    points: [
      "Constant Generator RPM & Frequency (12Hz–60Hz)",
      "Overload, High Voltage & Low Voltage Protection",
      "Short Circuit Cutoff & 1 kg Compact Apparatus",
      "Synchronizer for coupling parallel hydrogers & larger turbines",
    ],
    image: "/elc-device.png",
    path: `${NEPED_ENERGY_PATHS.technology}#elc`,
    cta: "ELC Specs",
  },
  2: {
    title: "The 'Made in Nagaland' Hydroger",
    badge: "3kW • 5kW • 10kW Pico Turbines",
    origin: "Fabricated indigenously in Nagaland for mountain topography",
    story:
      "Engineered to convert high-velocity Himalayan streams into reliable 230V baseload electricity. Modular cast casing designed for porterage across steep mountain terrain without heavy machinery.",
    points: [
      "Impulse Pelton / Cross-Flow silt-resistant runner",
      "Operating heads from 25m to 90m with high discharge efficiency",
      "Modular weight (~85 kg to 175 kg) for remote village porterage",
      "15+ years continuous operational life in mountain conditions",
    ],
    image: microgrid,
    path: `${NEPED_ENERGY_PATHS.technology}#specs`,
    cta: "Turbine Specs",
  },
  3: {
    title: "Decentralized Village Micro-Grids",
    badge: "100% Run-of-the-River Clean Power",
    origin: "Powering remote off-grid settlements across Nagaland & NE India",
    story:
      "Delivers localized distribution directly from powerhouse to dwellings, eliminating long-distance transmission losses and diesel reliance while creating village energy sovereignty.",
    points: [
      "Powers village lighting, cottage weaving looms, and agro-mills",
      "Surplus power routed to ballast dump loads for community hot water",
      "Village Energy Committees manage operation and fee collection",
      "Zero damming or ecological flooding of mountain riverbeds",
    ],
    image: solarField,
    path: "",
    cta: "",
  },
};

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
];

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.96, y: -18 },
  { scale: 0.92, y: -48 },
];

const exitAnimation = {
  y: 380,
  scale: 1,
  zIndex: 10,
};

const enterAnimation = {
  y: -18,
  scale: 0.92,
};

function CardContent({ contentType }: { contentType: 1 | 2 | 3 }) {
  const data = cardData[contentType];
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col md:flex-row gap-5 md:gap-7 p-4 sm:p-6 justify-between">
      {/* Left side: Hardware Image with badge */}
      <div className="w-full md:w-[260px] lg:w-[290px] h-[180px] sm:h-[220px] md:h-full shrink-0 rounded-[6px] overflow-hidden bg-[#070707] border border-[#e5e4e4]/60 relative group">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full select-none object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            (e.target as HTMLElement).style.opacity = "0.8";
          }}
        />
        <span className="absolute top-2.5 left-2.5 text-[10px] font-mono bg-[#070707]/90 text-[#ffffff] px-2.5 py-1 rounded-[1584px] border border-white/15">
          {data.badge}
        </span>
      </div>

      {/* Right side: Detailed Technical Description & Parameters */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div className="space-y-2.5">
          <div>
            <span className="text-[11px] font-mono text-[#b75928] uppercase tracking-wider block">
              {data.origin}
            </span>
            <h3 className="text-[20px] sm:text-[24px] font-light text-[#000000] tracking-tight leading-tight mt-0.5">
              {data.title}
            </h3>
          </div>

          <p className="text-[13px] text-[#666666] leading-relaxed line-clamp-2 sm:line-clamp-3">
            {data.story}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[12px] text-[#262626]">
            {data.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-1.5 leading-snug">
                <span className="text-[#b75928] font-bold shrink-0">✓</span>
                <span className="line-clamp-1">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 mt-2 border-t border-[#e5e4e4] flex items-center justify-between">
          <span className="text-[11px] text-[#8d8d8d] font-mono">
            NEPeD Product Ecosystem
          </span>
          {data.path && (
          <button
            onClick={() => navigate(data.path)}
            className="flex h-9 cursor-pointer select-none items-center gap-1.5 rounded-[80px] bg-[#1c1c1c] text-[#ffffff] px-4 text-xs font-normal tracking-[0.15px] hover:bg-[#070707] transition-all"
          >
            <span>{data.cta}</span>
            <span>→</span>
          </button>
          )}
        </div>
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card;
  index: number;
  isAnimating: boolean;
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2];
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index;

  const exitAnim = index === 0 ? exitAnimation : undefined;
  const initialAnim = index === 2 ? enterAnimation : undefined;

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 0.8,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[460px] md:h-[340px] w-[92%] sm:w-[580px] md:w-[720px] lg:w-[780px] items-center justify-center overflow-hidden rounded-[8px] border border-[#e5e4e4] bg-[#ffffff] shadow-sm"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  );
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(4);

  const handleAnimate = () => {
    setIsAnimating(true);
    const nextContentType = ((cards[2].contentType % 3) + 1) as 1 | 2 | 3;
    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }]);
    setNextId((prev) => prev + 1);
    setIsAnimating(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[480px] md:h-[370px] w-full overflow-hidden sm:w-[620px] md:w-[760px] lg:w-[820px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              isAnimating={isAnimating}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-[#e5e4e4] py-4">
        <button
          onClick={handleAnimate}
          className="flex h-10 cursor-pointer select-none items-center justify-center gap-2 rounded-[80px] border border-[#e5e4e4] bg-[#ffffff] px-7 text-xs sm:text-sm font-medium text-[#000000] hover:bg-[#e5e4e4] transition-all"
        >
          <span>Cycle Product Deck</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
