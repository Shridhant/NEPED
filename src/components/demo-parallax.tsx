"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Lenis from "@studio-freight/lenis";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function ParallaxDemo() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const images = [
    {
      src: "/hero-windmill.webp",
      alt: "Windmill at sunrise over mountains",
    },
    {
      src: "/35 Villagers sharpening their daos on a grinder powered by hydroger.webp",
      alt: "Villagers sharpening daos powered by hydroger",
    },
    {
      src: "/49 Visitors at NEPeD's stall (Republic day 2016).jpg",
      alt: "Visitors at NEPeD stall Republic Day 2016",
    },
    {
      src: "/52 NEPeD members at Nagaland Youth Summit 2016.webp",
      alt: "NEPeD members at Nagaland Youth Summit 2016",
    },
    {
      src: "/solar-field.webp",
      alt: "Community solar field in Nagaland",
    },
    {
      src: "/microgrid.webp",
      alt: "Hybrid microgrid setup in a Naga village",
    },
    {
      src: "/forest.webp",
      alt: "Lush green forests of Nagaland",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-canvas text-ink">
      <div className="relative flex h-[50vh] items-center justify-center">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,var(--color-ink-soft),transparent_50%)]",
            "blur-[30px] opacity-10"
          )}
        />
        <h1 className="text-center text-4xl font-bold tracking-tight">
          Scroll Down for Zoom Parallax
        </h1>
      </div>
      <ZoomParallax images={images} />
      <div className="h-[50vh]" />
    </main>
  );
}
