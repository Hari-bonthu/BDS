"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ListFilter } from "lucide-react";

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

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
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

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "rounded-2xl border border-stone-200/90 bg-white/90 p-3 sm:p-4 backdrop-blur-md shadow-xs",
        className
      )}
    >
      <div className="flex items-center gap-2 pb-2 mb-2 border-b border-stone-100 text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
        <ListFilter className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>{title}</span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none sm:flex-wrap">
        {items.map((item, idx) => {
          const isActive = currentActive === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(item.id, e)}
              className={cn(
                "group flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer",
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
              <span className="truncate max-w-[200px] sm:max-w-[240px]">{item.title}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
