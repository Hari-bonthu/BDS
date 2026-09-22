"use client";

import * as React from "react";
import { Phone, Sparkles, Layers, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageId, Language } from "@/types";

export interface FloatingDockProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
  className?: string;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  language = "en",
  onNavigate,
  onOpenQuoteModal,
  className,
}) => {
  const isTe = language === "te";

  return (
    <aside
      aria-label="Quick contact and action dock"
      className={cn(
        "md:hidden fixed bottom-4 inset-x-0 mx-auto w-fit z-40 max-w-[95vw] px-2 mb-[env(safe-area-inset-bottom,0px)]",
        className
      )}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-stone-950/95 backdrop-blur-md border border-stone-800/90 px-3 py-2 shadow-2xl shadow-black/40 text-white">
        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/919704380535?text=Hello%20Bhargav,%20I%20would%20like%20to%20discuss%20digital%20marketing%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-bold transition-all active:scale-95 cursor-pointer border border-emerald-500/30"
          aria-label="Chat directly on WhatsApp with Founder Bhargav"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-[11px] font-semibold">{isTe ? "వాట్సాప్" : "WhatsApp"}</span>
        </a>

        {/* Direct Call */}
        <a
          href="tel:+919704380535"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-stone-800/80 hover:bg-stone-700/80 text-stone-200 text-xs font-bold transition-all active:scale-95 cursor-pointer border border-stone-700/60"
          aria-label="Direct phone call to +91 97043 80535"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="text-[11px] font-semibold">{isTe ? "కాల్" : "Call"}</span>
        </a>

        {/* Free Audit Consultation */}
        <button
          type="button"
          onClick={() => onOpenQuoteModal("Mobile Quick Dock Consultation")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm shadow-blue-500/30"
          aria-label="Claim Free Marketing Audit & Strategy Session"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-200 shrink-0" />
          <span className="text-[11px] font-extrabold tracking-tight">
            {isTe ? "ఫ్రీ ఆడిట్" : "Free Audit"}
          </span>
        </button>

        {/* Services Hub */}
        <button
          type="button"
          onClick={() => onNavigate("services")}
          className="p-1.5 rounded-full bg-stone-800/80 hover:bg-stone-700/80 text-stone-300 transition-all active:scale-95 cursor-pointer border border-stone-700/60"
          aria-label="View all digital marketing services"
          title={isTe ? "సేవలు" : "Services"}
        >
          <Layers className="w-4 h-4 text-stone-300 shrink-0" />
        </button>
      </div>
    </aside>
  );
};
