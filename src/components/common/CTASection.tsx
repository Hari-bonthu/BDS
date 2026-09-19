import React from 'react';
import { Sparkles, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  onOpenQuoteModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to elevate your business in Rajahmundry & East Godavari?',
  subtitle = 'Get high-impact social media management, viral reels, and lead-generating ad campaigns at affordable regional rates.',
  badge = 'No Long-Term Lock-in • Affordable Packages',
  onOpenQuoteModal
}) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 relative overflow-hidden border-y border-slate-200">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-200/40 via-cyan-100/30 to-blue-300/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Value Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Direct Founder Attention</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Telugu & English Fluency</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Tailored Custom Plans</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            id="cta-section-quote-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-extrabold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-600/35 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Get a Free Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyInfo.phone}`}
            id="cta-section-call-btn"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition-all hover:border-slate-400 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call Bhargav: {companyInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
