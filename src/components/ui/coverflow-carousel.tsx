"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface CoverflowItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  year: string;
  location: string;
  type: string;
  impact: string;
  href?: string;
}

const defaultItems: CoverflowItem[] = [
  {
    id: "1",
    title: "Hydroger Micro-grids",
    subtitle: "Indigenous Water Turbines",
    image: "/microgrid.webp",
    year: "2007 - Present",
    location: "Nagaland Valleys",
    type: "Micro-Hydro Generator",
    impact: "40+ Rural Villages",
    href: "/technology#hydrogers",
  },
  {
    id: "2",
    title: "Community Solar Arrays",
    subtitle: "Off-Grid Village Power",
    image: "/solar-field.webp",
    year: "2014",
    location: "Kohima & Phek",
    type: "Solar Photovoltaic",
    impact: "150+ Rural Homes",
    href: "/technology#elc",
  },
  {
    id: "3",
    title: "Mountain Wind Systems",
    subtitle: "High-Altitude Clean Energy",
    image: "/mountain-windmills.webp",
    year: "2018",
    location: "Northeast Ridges",
    type: "Hybrid Wind & Hydro",
    impact: "Zero Emissions",
    href: "/impact#deployments",
  },
  {
    id: "4",
    title: "NEPeD R&D Hub",
    subtitle: "Made in Nagaland Tech",
    image: "/orange-building.webp",
    year: "2007",
    location: "Kohima, Nagaland",
    type: "State R&D Center",
    impact: "100% Local Innovation",
    href: "/about#overview",
  },
  {
    id: "5",
    title: "Community Empowerment",
    subtitle: "Grassroots Hydroger Tools",
    image: "/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
    year: "2016",
    location: "Remote Naga Villages",
    type: "Direct Livelihood",
    impact: "Youth & Artisans",
    href: "/impact#benefits",
  },
  {
    id: "6",
    title: "Lush Hydro Catchments",
    subtitle: "Sustainable Ecosystems",
    image: "/forest.webp",
    year: "Ongoing",
    location: "Nagaland Forests",
    type: "Eco Conservation",
    impact: "Water & Energy Security",
    href: "/technology#hydrogers",
  },
];

interface CoverflowCarouselProps {
  items?: CoverflowItem[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function CoverflowCarousel({
  items = defaultItems,
  title = "NEPeD Innovation Showcase",
  subtitle = "Swipe or click to explore our indigenous clean energy projects across Nagaland",
  autoPlay = false,
  autoPlayInterval = 4000,
}: CoverflowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeItem = items[activeIndex];

  return (
    <div className="w-full relative overflow-hidden py-8 px-4 font-sans select-none">
      {/* Header Info */}
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider text-accent-amber font-semibold">
            Interactive Deck
          </span>
          {title && (
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mt-1">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* 3D Coverflow Container */}
      <div className="relative h-[340px] sm:h-[400px] w-full flex items-center justify-center perspective-[1200px]">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur text-ink hover:bg-white transition-all active:scale-95 border border-ink/5"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur text-ink hover:bg-white transition-all active-scale-95 border border-ink/5"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Card Deck */}
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          {items.map((item, index) => {
            // Distance from active index with circular wrap calculation
            let offset = index - activeIndex;
            const half = Math.floor(items.length / 2);
            if (offset > half) offset -= items.length;
            if (offset < -half) offset += items.length;

            const isActive = offset === 0;

            // Compute 3D Coverflow positions
            // Center active card: scale 1, rotateY 0
            // Left cards: negative offset, positive rotateY
            // Right cards: positive offset, negative rotateY
            const absOffset = Math.abs(offset);
            const rotateY = offset === 0 ? 0 : offset < 0 ? 28 : -28;
            const scale = offset === 0 ? 1 : Math.max(0.72, 1 - absOffset * 0.14);
            const translateX = offset * (window.innerWidth < 640 ? 110 : 160);
            const zIndex = 30 - absOffset * 5;
            const opacity = absOffset > 3 ? 0 : Math.max(0.3, 1 - absOffset * 0.25);

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  scale,
                  rotateY,
                  x: translateX,
                  zIndex,
                  opacity,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className={`absolute cursor-pointer rounded-3xl overflow-hidden shadow-2xl bg-white border border-ink/10 ${
                  isActive ? "ring-2 ring-accent-amber/60 ring-offset-2" : ""
                }`}
                style={{
                  width: window.innerWidth < 640 ? "240px" : "320px",
                  height: window.innerWidth < 640 ? "280px" : "360px",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge on Card */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-ink text-[11px] font-semibold shadow-sm">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active Card Info Details Panel (Exact match to prompt screenshot UI) */}
      <div className="mt-8 max-w-xl mx-auto text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white/90 backdrop-blur-md rounded-3xl border border-ink/5 p-6 shadow-lg"
          >
            {/* Active Card Title & Subtitle */}
            <h3 className="text-2xl font-extrabold text-ink tracking-tight">
              {activeItem.title}
            </h3>
            <p className="text-xs text-ink-soft font-medium mt-1 uppercase tracking-wider">
              {activeItem.subtitle}
            </p>

            {/* 4-Field Metadata Grid (Matching Screenshot Metadata Specs) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-ink/5 pt-5 text-left">
              <div>
                <span className="block text-[11px] text-ink-soft uppercase tracking-wider font-semibold">
                  Year
                </span>
                <span className="block text-sm font-bold text-ink mt-0.5">
                  {activeItem.year}
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-ink-soft uppercase tracking-wider font-semibold">
                  Location
                </span>
                <span className="block text-sm font-bold text-ink mt-0.5 truncate">
                  {activeItem.location}
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-ink-soft uppercase tracking-wider font-semibold">
                  Type
                </span>
                <span className="block text-sm font-bold text-ink mt-0.5 truncate">
                  {activeItem.type}
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-ink-soft uppercase tracking-wider font-semibold">
                  Impact
                </span>
                <span className="block text-sm font-bold text-accent-amber mt-0.5 truncate">
                  {activeItem.impact}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            {activeItem.href && (
              <div className="mt-6 pt-2">
                <Link
                  to={activeItem.href}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-ink/90 active-scale"
                >
                  Explore Initiative <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "w-8 bg-ink"
                : "w-2 bg-ink/20 hover:bg-ink/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
