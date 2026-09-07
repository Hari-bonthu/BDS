import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, X } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

interface FloatingQuickActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({
  onOpenQuoteModal
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-quick-actions-bar"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 select-none"
    >
      {/* Quick Tooltip Popover */}
      {showTooltip && (
        <div className="relative bg-slate-900 text-white text-xs py-2 px-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2 animate-bounce max-w-[220px]">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-medium text-[11px] leading-tight">
            Talk directly to <strong>Founder Bhargav</strong>
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${companyInfo.phone}`}
          id="floating-call-btn"
          aria-label="Call Bhargav"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 flex items-center justify-center transition-all hover:scale-110"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Direct Chat Button */}
        <a
          href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp with Bhargav Digital Solutions"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};
