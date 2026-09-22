"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  gradient?: boolean;
  gradientColor?: string;
  duration?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  gradient = true,
  gradientColor = "from-white",
  duration = 32,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      {...props}
    >
      {/* Optional Gradient Fade Masks on Edges */}
      {gradient && !vertical && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r to-transparent z-10",
              gradientColor
            )}
            aria-hidden="true"
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l to-transparent z-10",
              gradientColor
            )}
            aria-hidden="true"
          />
        </>
      )}

      {/* Repeating Animated Ribbons */}
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)] motion-reduce:animate-none",
            vertical
              ? "animate-marquee-vertical flex-col"
              : "animate-marquee flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
          aria-hidden={i > 0}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
