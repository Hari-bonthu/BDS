"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ListFilter, ChevronDown } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
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
    if (onItemClick) {
      onItemClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigateToId(id);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigateToId(e.target.value);
  };

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "rounded-2xl border border-stone-200/90 bg-white/95 p-3 sm:p-4 backdrop-blur-md shadow-xs transition-all",
        className
      )}
    >
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100 text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
        <div className="flex items-center gap-2">
          <ListFilter className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{title}</span>
        </div>
        <span className="text-[10px] text-stone-400 font-mono hidden sm:inline">
          {items.length} PLAYBOOKS
        </span>
      </div>

      {/* Mobile Instant Quick Jump Selector */}
      <div className="relative sm:hidden mb-2">
        <label htmlFor="mobile-toc-select" className="sr-only">
          {title}
        </label>
        <select
          id="mobile-toc-select"
          value={currentActive}
          onChange={handleSelectChange}
          aria-label={title}
          className="w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 py-2 pl-3 pr-8 text-xs font-semibold text-stone-800 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-blue-500 cursor-pointer"
        >
          {items.map((item, idx) => (
            <option key={item.id} value={item.id}>
              {`0${idx + 1}. ${item.title}`}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
      </div>

      {/* Touch-Friendly Scrolling / Wrapped Pills Track */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none sm:flex-wrap scroll-smooth overscroll-x-contain touch-pan-x [mask-image:linear-gradient(to_right,white_85%,transparent_100%)] sm:[mask-image:none]">
          {items.map((item, idx) => {
            const isActive = currentActive === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(item.id, e)}
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
                <span className="truncate max-w-[210px] sm:max-w-none">{item.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
