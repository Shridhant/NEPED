"use client";

import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SHARED_PATHS } from "@/routes/paths";

export interface CardItem {
  id: string | number;
  url: string;
  title: string;
  subtitle?: string;
  href?: string;
  category?: string;
}

export interface DiagonalMarqueeCarouselProps {
  cards?: CardItem[];
  angle?: number;
  baseSpeed?: number;
  alternateDirections?: boolean;
  className?: string;
  cardClassName?: string;
  fadeClassName?: string;
}

const DEFAULT_CARDS: CardItem[] = [
  {
    id: 1,
    url: "/52 NEPeD members at Nagaland Youth Summit 2016.jpg",
    title: "Nagaland Youth Summit 2016",
    subtitle: "Rural engineers capacity building",
    href: SHARED_PATHS.galleryAlbum("nagaland-youth-summit-2016"),
    category: "Summit",
  },
  {
    id: 2,
    url: "/47 NEPeD's stall at Republic Day 2016.jpg",
    title: "Republic Day Exhibition 2016",
    subtitle: "Hydroger model demonstrations",
    href: SHARED_PATHS.galleryAlbum("republic-day-exhibition-2016"),
    category: "Exhibition",
  },
  {
    id: 3,
    url: "/20 Kingjung Village Energy Committee (2).jpg",
    title: "Kingjung Village Committee",
    subtitle: "Grassroots energy stewardship",
    href: SHARED_PATHS.galleryAlbum("kingjung-village-energy-committee"),
    category: "Village VEC",
  },
  {
    id: 4,
    url: "/19 SP Tuensang with NEPeD Member at Deithung Hydroger site.jpg",
    title: "Deithung Hydroger Site",
    subtitle: "Tuensang district deployment",
    href: SHARED_PATHS.galleryAlbum("deithung-hydroger-site-deployment"),
    category: "Field Site",
  },
  {
    id: 5,
    url: "/35 Villagers sharpening their daos on a grinder powered by hydroger.jpg",
    title: "Cottage Agricultural Tools",
    subtitle: "Dao sharpening & mechanical power",
    href: SHARED_PATHS.galleryAlbum("cottage-agricultural-processing"),
    category: "Livelihood",
  },
  {
    id: 6,
    url: "/6 Laying of intake pipes.jpg",
    title: "Intake Penstock Installation",
    subtitle: "Community pipe-laying operations",
    href: SHARED_PATHS.galleryAlbum("intake-penstock-operations"),
    category: "Engineering",
  },
  {
    id: 7,
    url: "/forest.png",
    title: "Pristine Catchment Preserves",
    subtitle: "Preserving river baseloads",
    href: SHARED_PATHS.galleryAlbum("pristine-catchment-conservation"),
    category: "Watersheds",
  },
  {
    id: 8,
    url: "/microgrid.png",
    title: "CERD Fabrication & ELC Systems",
    subtitle: "Precision engineering workshop",
    href: SHARED_PATHS.galleryAlbum("indigenous-cerd-fabrication-hub"),
    category: "Technology",
  },
  {
    id: 9,
    url: "/mountain-windmills.png",
    title: "Mountain Ridges of Nagaland",
    subtitle: "High-altitude watershed catchments",
    href: SHARED_PATHS.galleryAlbum("pristine-catchment-conservation"),
    category: "Highlands",
  },
  {
    id: 10,
    url: "/solar-field.png",
    title: "Decentralized Village Microgrids",
    subtitle: "Hybrid clean power systems",
    href: SHARED_PATHS.galleryAlbum("indigenous-cerd-fabrication-hub"),
    category: "Microgrids",
  },
];

const Card = ({ card, className }: { card: CardItem; className?: string }) => {
  return (
    <Link
      to={card.href || SHARED_PATHS.gallery}
      className={cn(
        "group relative h-[220px] sm:h-[260px] md:h-[300px] w-[300px] sm:w-[350px] md:w-[400px] shrink-0 cursor-pointer overflow-hidden rounded-[8px] border border-white/10 bg-[#070707] transition-all duration-300 hover:border-[#b75928] hover:shadow-2xl block",
        className,
      )}
    >
      <img
        src={card.url}
        alt={card.title}
        className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        onError={(e) => {
          (e.target as HTMLElement).style.opacity = "0.7";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

      {/* Card Caption Text in Aker style */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-[0.12px] text-[#b75928] font-mono font-semibold">
            {card.category || "Field Exhibit"}
          </span>
          <span className="text-[11px] text-[#ffffff]/70 group-hover:text-white group-hover:translate-x-0.5 transition-all font-mono">
            View Album →
          </span>
        </div>
        <h4 className="text-[15px] sm:text-[16px] font-medium text-[#ffffff] tracking-tight leading-snug group-hover:text-[#ffffff] transition-colors">
          {card.title}
        </h4>
        {card.subtitle && (
          <p className="text-[12px] text-[#8d8d8d] line-clamp-1 mt-0.5">
            {card.subtitle}
          </p>
        )}
      </div>
    </Link>
  );
};

const MarqueeRow = ({
  cards,
  speed,
  direction,
  cardClassName,
}: {
  cards: CardItem[];
  speed: number;
  direction: 1 | -1;
  cardClassName?: string;
}) => {
  const animationClass =
    direction === -1 ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="flex w-full overflow-hidden">
      <div
        className={cn(
          "flex shrink-0 cursor-pointer hover:[animation-play-state:paused]",
          animationClass,
        )}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0">
          {cards.map((card, idx) => (
            <div key={`${card.id}-${idx}`} className="shrink-0 pr-6 sm:pr-8">
              <Card card={card} className={cardClassName} />
            </div>
          ))}
        </div>
        <div className="flex shrink-0">
          {cards.map((card, idx) => (
            <div key={`${card.id}-${idx}-copy`} className="shrink-0 pr-6 sm:pr-8">
              <Card card={card} className={cardClassName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function DiagonalMarqueeCarousel({
  cards = DEFAULT_CARDS,
  angle = -18,
  baseSpeed = 80,
  alternateDirections = true,
  className = "",
  cardClassName = "",
  fadeClassName = "",
}: DiagonalMarqueeCarouselProps) {
  const rotationStyle = {
    transform: `rotate(${angle}deg)`,
  };

  const rowCards = [...cards, ...cards];
  const rowCardsReverse = [...rowCards].reverse();

  return (
    <div
      className={cn(
        "relative flex h-[580px] sm:h-[680px] md:h-[760px] w-full items-center justify-center overflow-hidden bg-[#ffffff] rounded-[8px] border border-[#e5e4e4]",
        className,
      )}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marquee-left var(--speed) linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right var(--speed) linear infinite;
        }
      `,
        }}
      />
      <div
        className="absolute z-0 flex w-[240vw] flex-col gap-6 sm:gap-8"
        style={rotationStyle}
      >
        <MarqueeRow
          cards={rowCards}
          speed={baseSpeed}
          direction={-1}
          cardClassName={cardClassName}
        />
        <MarqueeRow
          cards={rowCardsReverse}
          speed={baseSpeed - 15 > 20 ? baseSpeed - 15 : 30}
          direction={alternateDirections ? 1 : -1}
          cardClassName={cardClassName}
        />
        <MarqueeRow
          cards={rowCards}
          speed={baseSpeed + 15}
          direction={-1}
          cardClassName={cardClassName}
        />
        <MarqueeRow
          cards={rowCardsReverse}
          speed={baseSpeed - 6 > 20 ? baseSpeed - 6 : 35}
          direction={alternateDirections ? 1 : -1}
          cardClassName={cardClassName}
        />
      </div>

      {/* Top & Bottom Vignette / Ambient Fades matching landing page white background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-10 h-1/4 bg-gradient-to-b from-[#ffffff] via-[#ffffff]/80 to-transparent",
          fadeClassName,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/4 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/80 to-transparent",
          fadeClassName,
        )}
      />
    </div>
  );
}
