"use client";

import * as React from "react";
import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  radius?: number;
  color?: string;
  className?: string;
  contentClassName?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  radius = 320,
  color = "rgba(59, 130, 246, 0.65)", // Dynamic glowing border color
  className,
  contentClassName,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-3xl p-[1px] overflow-hidden bg-stone-800/80 transition-all duration-300 shadow-xs",
        className
      )}
      {...props}
    >
      {/* 1. Dynamic Border Spotlight (Lights up ONLY the 1px edge boundary near the cursor) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${color}, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Inner Card Surface (Hugs border cleanly with dark background) */}
      <div
        className={cn(
          "relative h-full w-full rounded-[23px] bg-stone-900 p-7 overflow-hidden flex flex-col justify-between",
          contentClassName
        )}
      >
        {/* Ultra-subtle ambient surface diffusion (seamless fade, zero harsh cutoff lines) */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 ease-out"
          style={{
            opacity: opacity * 0.4,
            background: `radial-gradient(${radius * 1.5}px circle at ${position.x}px ${position.y}px, rgba(2, 71, 254, 0.14), transparent 85%)`,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
};
