"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export interface ScrollProgressProps {
  className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 pointer-events-none",
        className
      )}
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};
