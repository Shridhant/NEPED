"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// --- The ArcGalleryHero Component ---
type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
  // customizable title & subtitle
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  radiusLg = 360,
  radiusMd = 280,
  radiusSm = 180,
  cardSizeLg = 120,
  cardSizeMd = 90,
  cardSizeSm = 70,
  className = "",
  title = "Rediscover Your Memories with AI",
  subtitle = "Our intelligent platform finds, organizes, and brings your most cherished moments back to life.",
  primaryButtonText = "Explore Your Past",
  secondaryButtonText = "How It Works",
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = 360 / count;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as const, // Emil Kowalski's custom ease-out curve
      },
    },
  };

  return (
    <section className={`relative overflow-hidden bg-canvas text-ink min-h-[90vh] flex flex-col pt-24 ${className}`}>
      {/* Background ring container that controls geometry */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          width: "100%",
          // Give it a bit more height to prevent clipping
          height: dimensions.radius * 1.15,
          maskImage: "linear-gradient(to top, transparent 0%, black 120px)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 120px)",
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            style={{ transformOrigin: "0px 0px" }}
          >
            {/* Each image is positioned on the circle and rotated to face outward */}
            {images.map((src, i) => {
              const angle = startAngle + step * i; // degrees
              const angleRad = (angle * Math.PI) / 180;
              
              // Calculate x and y positions on the arc
              const x = Math.cos(angleRad) * dimensions.radius;
              const y = Math.sin(angleRad) * dimensions.radius;
              
              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    transform: "translate(-50%, 65%) scale(0.95)",
                  }}
                  animate={{
                    opacity: 1,
                    transform: "translate(-50%, 50%) scale(1)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 14,
                    mass: 1,
                    delay: i * 0.07,
                  }}
                  className="absolute"
                  style={{
                    width: dimensions.cardSize,
                    height: dimensions.cardSize,
                    left: `calc(50% + ${x}px)`,
                    bottom: `${y}px`,
                    zIndex: count - i,
                  }}
                >
                  <motion.div 
                    animate={{ rotate: [angle / 4, (angle / 4) - 360] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-ink/10 dark:ring-white/10 bg-white dark:bg-ink/50 transition-transform hover:scale-105 w-full h-full"
                  >
                    <img
                      src={src}
                      alt={`Memory ${i + 1}`}
                      className="block w-full h-full object-cover"
                      draggable={false}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/400x400/334155/e2e8f0?text=Memory`;
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Content positioned below the arc */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 pb-16">
        <motion.div 
          className="text-center max-w-2xl px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[108px] font-normal leading-[0.9] tracking-[-0.04em] text-ink"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="mt-6 text-sm sm:text-[18px] font-normal leading-[1.5] text-ink-soft max-w-xl mx-auto"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-ink text-white hover:bg-ink/90 transition-all duration-200 shadow-md active-scale font-medium">
              {primaryButtonText}
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-ink/20 hover:bg-ink/5 transition-all duration-200 font-medium">
              {secondaryButtonText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

