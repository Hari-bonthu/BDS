"use client";

import * as React from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  aspectRatio?: string;
  className?: string;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before transformation",
  afterAlt = "After transformation",
  beforeLabel = "Before",
  afterLabel = "After BDS",
  initialPosition = 50,
  aspectRatio = "aspect-[16/10]",
  className,
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, [handleMove]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore if pointer capture already released
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Interactive before and after comparison slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: "pan-y" }}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-stone-200/90 shadow-2xs select-none cursor-ew-resize bg-stone-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
        aspectRatio,
        className
      )}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Subtle Floating Status Badges */}
      <div className="absolute top-3.5 left-3.5 pointer-events-none z-10">
        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-stone-900/80 backdrop-blur-xs text-white border border-white/10 shadow-xs">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-3.5 right-3.5 pointer-events-none z-10">
        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-600/90 backdrop-blur-xs text-white border border-white/10 shadow-xs">
          {afterLabel}
        </span>
      </div>

      {/* Divider Vertical Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Knob with Chevrons */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-stone-700 shadow-md border border-stone-200/90 flex items-center justify-center pointer-events-auto hover:scale-105 active:scale-95 transition-transform duration-150">
          <ChevronsLeftRight className="w-4 h-4 text-stone-700" />
        </div>
      </div>
    </div>
  );
};
