"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.1em",
      shimmerDuration = "2.5s",
      borderRadius = "12px",
      background = "linear-gradient(135deg, #0247fe 0%, #0b63f6 100%)", // Signature BDS Blue gradient
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Parse duration to compute synchronized spin duration (double the slide time)
    const durationNum = parseFloat(shimmerDuration) || 2.5;
    const durationUnit = shimmerDuration.replace(/[\d.]/g, "") || "s";
    const spinDuration = `${durationNum * 2}${durationUnit}`;

    return (
      <button
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--speed-spin": spinDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as React.CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/20 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "transform-gpu shadow-md shadow-blue-600/30",
          className
        )}
        {...props}
      >
        {/* Spark container with container-type: size to enable 100cqw and 100cqh */}
        <div
          aria-hidden="true"
          style={{ containerType: "size" }}
          className="-z-30 blur-[2px] absolute inset-0 overflow-visible"
        >
          {/* Spark element sliding back and forth across full button width */}
          <div className="animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]">
            {/* Spark conic beam rotating in sync with the slide to travel 360° around the perimeter */}
            <div className="animate-spin-around shimmer-spark-conic absolute -inset-full w-auto rotate-0 [translate:0_0] motion-reduce:animate-none" />
          </div>
        </div>

        {/* Backdrop overlay reserving the perimeter cut for the glowing border */}
        <div
          aria-hidden="true"
          className="absolute inset-[var(--cut)] -z-20 rounded-[inherit] [background:var(--bg)]"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2">
          {children}
        </div>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
