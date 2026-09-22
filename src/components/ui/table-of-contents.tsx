"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ListFilter, ChevronDown, Check } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
  shortTitle?: string;
  category?: string;
  readTime?: string;
}

export interface TableOfContentsProps {
  items: TocItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  className?: string;
  title?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeId,
  onItemClick,
  className,
  title = "Quick Navigation / Playbook Index",
}) => {
  const [currentActive, setCurrentActive] = useState<string>(activeId || items[0]?.id || "");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (activeId) {
      setCurrentActive(activeId);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -50% 0px",
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items, activeId]);

  const navigateToId = (id: string) => {
    setCurrentActive(id);
    setIsExpanded(false);
    if (onItemClick) {
      onItemClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const currentIndex = items.findIndex((it) => it.id === currentActive);

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "w-full rounded-2xl border border-stone-200/90 bg-white/95 p-3 sm:p-4 backdrop-blur-md shadow-xs transition-all duration-200",
        className
      )}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-stone-100 text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
        <div className="flex items-center gap-2 min-w-0">
          <ListFilter className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="truncate">{title}</span>
        </div>

        {/* Mobile Toggle Button for Full In-Card Index */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="sm:hidden shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-bold transition-colors cursor-pointer"
        >
          <span>{isExpanded ? "Close" : `Guide 0${(currentIndex >= 0 ? currentIndex : 0) + 1} ▾`}</span>
        </button>

        <span className="text-[10px] text-stone-400 font-mono hidden sm:inline">
          {items.length} PLAYBOOKS
        </span>
      </div>

      {/* Expanded In-Card Mobile Menu (100% Contained, Zero Overflow) */}
      {isExpanded && (
        <div className="sm:hidden space-y-1 pt-1 pb-2 border-b border-stone-100 mb-2">
          {items.map((item, idx) => {
            const isActive = currentActive === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateToId(item.id)}
                className={cn(
                  "w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 cursor-pointer",
                  isActive
                    ? "bg-blue-50 border border-blue-200 text-blue-950 shadow-2xs"
                    : "hover:bg-stone-50 text-stone-700 border border-transparent"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-mono font-bold px-2 py-0.5 rounded-md mt-0.5 shrink-0",
                    isActive ? "bg-blue-600 text-white" : "bg-stone-100 text-stone-500"
                  )}
                >
                  0{idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                      {item.category || `Playbook 0${idx + 1}`}
                    </span>
                    {item.readTime && (
                      <span className="text-[10px] text-stone-400 font-mono">
                        · {item.readTime}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold leading-snug text-stone-900 mt-0.5">
                    {item.title}
                  </p>
                </div>
                {isActive && (
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Horizontal Pills Track (Swipeable on mobile, wrapped on desktop) */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none sm:flex-wrap scroll-smooth overscroll-x-contain touch-pan-x [mask-image:linear-gradient(to_right,white_88%,transparent_100%)] sm:[mask-image:none]">
          {items.map((item, idx) => {
            const isActive = currentActive === item.id;
            const displayLabel = item.shortTitle || item.category || item.title;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                title={item.title}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToId(item.id);
                }}
                className={cn(
                  "group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer min-h-[34px]",
                  isActive
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-stone-50 text-stone-700 hover:bg-stone-100 hover:text-blue-600 border border-stone-200/60"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px] font-bold",
                    isActive ? "text-blue-200" : "text-stone-400 group-hover:text-blue-600"
                  )}
                >
                  0{idx + 1}
                </span>
                <span className="max-w-[220px] sm:max-w-none truncate">{displayLabel}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
