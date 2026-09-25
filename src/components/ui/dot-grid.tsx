import { useCallback, useEffect, useRef } from "react";

/*
 * Adapted from React Bits "DotGrid": an even grid of dots drawn on a canvas, centred in its box.
 * Site change: static — the pointer / click / inertia effects (and their gsap dependency) are
 * removed; the grid is only redrawn when the box resizes. Fills its positioned parent.
 */

export interface DotGridProps {
  /** Dot diameter, px */
  dotSize?: number;
  /** Gap between dots, px */
  gap?: number;
  color?: string;
  className?: string;
}

export function DotGrid({ dotSize = 4, gap = 22, color = "#d9e6dc", className = "" }: DotGridProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const cell = dotSize + gap;
    const cols = Math.floor((width + gap) / cell);
    const rows = Math.floor((height + gap) / cell);
    // Centre the grid in the box
    const startX = (width - (cell * cols - gap)) / 2 + dotSize / 2;
    const startY = (height - (cell * rows - gap)) / 2 + dotSize / 2;

    ctx.fillStyle = color;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        ctx.beginPath();
        ctx.arc(startX + x * cell, startY + y * cell, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [dotSize, gap, color]);

  useEffect(() => {
    draw();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <div ref={wrapRef} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

export default DotGrid;
