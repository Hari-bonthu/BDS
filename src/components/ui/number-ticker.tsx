"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, decimalPlaces, prefix, suffix]);

  // Initial SSR-friendly format
  const initialFormatted = Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums tracking-tight", className)}
    >
      {`${prefix}${initialFormatted}${suffix}`}
    </span>
  );
};
