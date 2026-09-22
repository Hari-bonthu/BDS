"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  badge?: string;
  content: React.ReactNode;
}

export interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ data, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateHeight = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerHeight(rect.height);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      role="list"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-start pt-8 md:pt-14 md:gap-10"
          role="listitem"
        >
          {/* Left Column (Sticky Title & Dot on Desktop) */}
          <div className="sticky flex flex-col md:flex-row z-10 items-center top-28 md:top-36 self-start max-w-xs lg:max-w-sm md:w-full">
            {/* Timeline node dot */}
            <div className="h-8 absolute left-2 md:left-2 w-8 rounded-full bg-white border border-stone-200/90 shadow-xs flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-100/80" />
            </div>

            {/* Desktop Step Meta */}
            <div className="hidden md:block md:pl-16 pr-4">
              {item.badge && (
                <span className="font-mono text-xs font-bold text-blue-600 tracking-wider block mb-1">
                  {item.badge}
                </span>
              )}
              <h3 className="text-lg md:text-xl font-black text-stone-900 leading-snug">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs text-stone-500 font-medium mt-1">
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right Column (Mobile Heading + Full Content) */}
          <div className="relative pl-12 pr-4 md:pl-4 w-full">
            {/* Mobile Step Meta */}
            <div className="md:hidden block mb-3">
              {item.badge && (
                <span className="font-mono text-xs font-bold text-blue-600 tracking-wider block mb-0.5">
                  {item.badge}
                </span>
              )}
              <h3 className="text-lg font-black text-stone-900 leading-snug">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              )}
            </div>

            {/* Body Content */}
            <div className="text-stone-600 text-sm leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}

      {/* Vertical Track & Animated Beam */}
      <div
        style={{ height: containerHeight > 0 ? `${containerHeight}px` : "100%" }}
        className="absolute md:left-6 left-6 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-stone-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-indigo-600 via-blue-600 to-transparent rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"
        />
      </div>
    </div>
  );
};
