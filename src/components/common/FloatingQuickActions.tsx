import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, X, HelpCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { FaqBot } from './FaqBot';
import { Language } from '../../types';

interface FloatingQuickActionsProps {
  onOpenQuoteModal: () => void;
  language?: Language;
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({
  onOpenQuoteModal,
  language = 'en'
}) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    <div
      id="floating-quick-actions-bar"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 select-none"
    >
      {/* FAQ Bot Drawer Panel (Opens quietly without aggressive popups) */}
      {isFaqOpen && (
        <div className="mb-1">
          <FaqBot
            isOpen={isFaqOpen}
            onClose={() => setIsFaqOpen(false)}
            language={language}
          />
        </div>
      )}

      {/* Discreet Quiet Tooltip (shown only when FAQ is closed) */}
      {!isFaqOpen && showTooltip && (
        <div className="relative bg-stone-900/95 backdrop-blur-sm text-white text-xs py-1.5 px-3 rounded-xl shadow-lg border border-stone-700/80 flex items-center gap-2 max-w-[230px]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="font-medium text-[11px] leading-tight">
            Ask FAQs or talk to <strong>Bhargav</strong>
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2">
        {/* Modern Minimalist FAQ Assistant Toggle */}
        <button
          type="button"
          onClick={() => {
            setIsFaqOpen(!isFaqOpen);
            if (showTooltip) setShowTooltip(false);
          }}
          id="floating-faq-btn"
          aria-label={isFaqOpen ? "Close Frequently Asked Questions" : "Open Instant FAQ Assistant"}
          title="Instant FAQs & Answers"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-105 ${
            isFaqOpen
              ? 'bg-stone-900 text-white shadow-stone-900/30 ring-2 ring-blue-500'
              : 'bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 shadow-stone-900/10'
          }`}
        >
          {isFaqOpen ? (
            <X className="w-5 h-5 text-stone-200" />
          ) : (
            <HelpCircle className="w-5 h-5 text-blue-600" />
          )}
        </button>

        {/* Direct Call Button */}
        <a
          href={`tel:${companyInfo.phone}`}
          id="floating-call-btn"
          aria-label="Call Bhargav"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 flex items-center justify-center transition-all hover:scale-105"
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
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 flex items-center justify-center transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    </div>
  );
};
