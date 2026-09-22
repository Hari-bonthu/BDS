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
      shimmerDuration = "3s",
      borderRadius = "14px",
      background = "rgba(2, 71, 254, 1)", // BDS Blue primary
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as React.CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "transform-gpu shadow-md shadow-blue-600/30",
          className
        )}
        {...props}
      >
        {/* Spark container */}
        <div
          aria-hidden="true"
          className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]"
        >
          {/* Spark element */}
          <div className="absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0] motion-reduce:animate-none" />
          </div>
        </div>

        {/* Backdrop overlay */}
        <div
          aria-hidden="true"
          className="absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
        />

        {/* Subtle diagonal sheen highlight sweep */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="animate-shimmer-sweep absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 motion-reduce:animate-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2">
          {children}
        </div>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
