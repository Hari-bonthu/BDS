import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { Language } from '../../types';
import { asset } from '../../utils/asset';
import { WhatsAppLogo } from './PlatformLogos';

interface FaqBotProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

interface FaqEntry {
  id: string;
  category: 'general' | 'pricing' | 'timeline' | 'accountability';
  q: string;
  qTe: string;
  a: string;
  aTe: string;
}

// Curated FAQ entries (Removed regional coverage question as requested)
const botFaqs: FaqEntry[] = [
  {
    id: 'pricing',
    category: 'pricing',
    q: 'How much do your services cost?',
    qTe: 'మీ సర్వీసుల ఛార్జీలు ఎలా ఉంటాయి?',
    a: 'We do not sell rigid one-size-fits-all packages. Every business in Rajahmundry has distinct footfall and lead targets. We craft customized, ROI-aligned proposals with clear month-to-month terms so you only invest in what moves the needle.',
    aTe: 'మేము అనవసరమైన స్థిర ప్యాకేజీలను రుద్దము. ప్రతి వ్యాపార అవసరాలకు తగినట్లుగా పారదర్శకమైన కస్టమ్ ప్రపోజల్ రూపొందిస్తాము.'
  },
  {
    id: 'contracts',
    category: 'pricing',
    q: 'Do I have to sign a long-term lock-in contract?',
    qTe: 'లాంగ్-టర్మ్ కాంట్రాక్ట్ తప్పనిసరా?',
    a: 'Zero lock-in contracts. We operate strictly on month-to-month flexibility. You continue working with BDS because of verified results, phone inquiries, and showroom walk-ins—not legal lock-ins.',
    aTe: 'ఎలాంటి బలవంతపు లాక్-ఇన్ కాంట్రాక్టులు ఉండవు. ప్రతి నెలా పనితీరు ఆధారంగా మాత్రమే కొనసాగవచ్చు.'
  },
  {
    id: 'management',
    category: 'accountability',
    q: 'Who manages my account and creates the campaigns?',
    qTe: 'నా అకౌంట్‌ను ఎవరు నిర్వహిస్తారు?',
    a: 'Founder Bhargav directly leads strategy, scriptwriting, creative direction, and paid ad optimizations on every account. You communicate directly with the strategist doing the actual work, not junior coordinators.',
    aTe: 'ఫౌండర్ భార్గవ్ స్వయంగా ప్రతి అకౌంట్ వ్యూహాన్ని, యాడ్స్‌ను మరియు కంటెంట్‌ను పర్యవేక్షిస్తారు.'
  },
  {
    id: 'ad-spend',
    category: 'accountability',
    q: 'How do I verify where my ad budget is spent?',
    qTe: 'నా ప్రకటనల బడ్జెట్ ఎలా ఖర్చవుతుందో ఎలా తెలుస్తుంది?',
    a: 'Complete ad spend accountability. You receive weekly reports featuring direct unedited screenshots from Meta Ads Manager and Google Ads showing actual platform spend, impressions, clicks, and message leads.',
    aTe: 'ప్రతి పైసా పారదర్శకంగా ఉంటుంది. మెటా మరియు గూగుల్ యాడ్స్ మేనేజర్ స్క్రీన్‌షాట్లతో కూడిన నివేదికలు ప్రతి వారం అందుతాయి.'
  },
  {
    id: 'timeline',
    category: 'timeline',
    q: 'How quickly can BDS launch our campaigns?',
    qTe: 'క్యాంపెయిన్స్ ఎంత త్వరగా ప్రారంభమవుతాయి?',
    a: 'Audits and strategy alignment take 2–3 business days. On-location shoot coordination, creative production, and live ad launches typically roll out within 5–7 business days.',
    aTe: 'వ్యూహం 2-3 రోజుల్లో ఖరారవుతుంది. షూట్ మరియు మొదటి ప్రకటనలు 5-7 రోజుల్లో లైవ్ అవుతాయి.'
  },
  {
    id: 'bundling',
    category: 'general',
    q: 'Can we combine Reels, Meta Ads, and Google Maps SEO?',
    qTe: 'రీల్స్, యాడ్స్, గూగుల్ మ్యాప్స్ అన్నీ కలిపి తీసుకోవచ్చా?',
    a: 'Yes. Most local clients choose an all-in-one growth bundle (Short-Form Video, Meta Ads, Google Maps 3-Pack, and WhatsApp Lead Routing). Bundling ensures unified brand voice and single-point accountability.',
    aTe: 'ఖచ్చితంగా. రీల్స్, పెయిడ్ యాడ్స్, లోకల్ మ్యాప్స్ మరియు వాట్సాప్ రూటింగ్‌లను కలిపి ఆల్-ఇన్-వన్ ప్యాకేజీగా తీసుకోవచ్చు.'
  }
];

export const FaqBot: React.FC<FaqBotProps> = ({ isOpen, onClose, language = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('pricing');

  const isTe = language === 'te';

  const filteredFaqs = useMemo(() => {
    return botFaqs.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const qText = isTe ? faq.qTe : faq.q;
      const aText = isTe ? faq.aTe : faq.a;
      const matchesSearch =
        !searchQuery.trim() ||
        qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        aText.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, isTe]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="BDS FAQ Assistant"
      className="w-[94vw] sm:w-[400px] bg-white border border-stone-200/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[540px] transition-all duration-200 select-text animate-in fade-in slide-in-from-bottom-3"
    >
      {/* Redesigned Website Template Header with Authentic BDS Logo */}
      <div className="p-3.5 sm:p-4 bg-white flex items-center justify-between border-b border-stone-200/80">
        <div className="flex items-center gap-3">
          <div className="h-9 px-2 py-1 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-center shadow-2xs">
            <img
              src={asset('assets/logo-bds.webp')}
              alt="Bhargav Digital Solutions Logo"
              width={80}
              height={24}
              className="h-6 w-auto object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-stone-950 leading-tight">
                {isTe ? 'భార్గవ్ డిజిటల్ సొల్యూషన్స్' : 'Bhargav Digital Solutions'}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Active Assistant" />
            </div>
            <div className="text-[10px] text-stone-500 font-medium leading-tight mt-0.5">
              {isTe ? 'త్వరిత ప్రశ్నలు & సమాధానాలు' : 'Quick FAQ & Strategy Assistant'}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 flex items-center justify-center transition-colors"
          aria-label="Close FAQ Assistant"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Modern Minimalist Search Bar */}
      <div className="p-3 border-b border-stone-100 bg-[#fafaf9]">
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label={isTe ? 'ప్రశ్నను వెతకండి' : 'Search FAQ questions'}
            placeholder={isTe ? 'ప్రశ్నను వెతకండి (ధర, కాంట్రాక్ట్, సమయం)...' : 'Search questions (pricing, timeline, contracts)...'}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-stone-200 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-2 text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Category Filter Pills Matching Website Style */}
        <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-0.5 no-scrollbar">
          {[
            { id: 'all', label: isTe ? 'అన్నీ' : 'All' },
            { id: 'pricing', label: isTe ? 'ధరలు & నియమాలు' : 'Pricing & Terms' },
            { id: 'accountability', label: isTe ? 'జవాబుదారీతనం' : 'Ad Budget' },
            { id: 'timeline', label: isTe ? 'సమయం' : 'Timeline' },
            { id: 'general', label: isTe ? 'సర్వీసులు' : 'Services' }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-stone-600 border border-stone-200/90 hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5 divide-y divide-stone-100">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-6 px-4 space-y-2.5">
            <p className="text-xs text-stone-600 font-medium">
              {isTe ? 'ఈ అంశంపై సమాధానం కనిపించలేదా?' : 'Have a custom question not covered here?'}
            </p>
            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I have a question about BDS services that wasn\'t in your FAQ: ' + searchQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors shadow-2xs"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>{isTe ? 'వాట్సాప్‌లో నేరుగా అడగండి' : 'Ask Bhargav on WhatsApp'}</span>
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div key={faq.id} className="pt-2.5 first:pt-0">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left flex items-start justify-between gap-2.5 py-1 text-xs sm:text-[13px] font-bold text-stone-900 hover:text-blue-600 transition-colors group cursor-pointer"
                >
                  <span className="leading-snug">{isTe ? faq.qTe : faq.q}</span>
                  <span className="p-1 rounded-md text-stone-400 group-hover:text-blue-600 shrink-0 mt-0.5 bg-stone-50 border border-stone-200/60">
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </span>
                </button>
                {isExpanded && (
                  <div id={`faq-answer-${faq.id}`} className="mt-2 text-xs text-stone-600 leading-relaxed p-3 bg-stone-50 rounded-xl font-normal">
                    {isTe ? faq.aTe : faq.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Website-Styled Minimalist Footer with WhatsApp Link */}
      <div className="p-3 bg-[#fafaf9] border-t border-stone-200/80 flex items-center justify-between text-xs">
        <span className="text-stone-500 font-medium text-[11px]">
          {isTe ? 'ప్రత్యేకమైన ప్రణాళిక కావాలా?' : 'Need a custom growth quote?'}
        </span>
        <a
          href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I was reviewing the FAQ on your website and would like to discuss a customized growth strategy for my business in Rajahmundry.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all"
        >
          <WhatsAppLogo className="w-3.5 h-3.5" />
          <span>{isTe ? 'వాట్సాప్‌లో మాట్లాడండి' : 'Chat on WhatsApp'}</span>
        </a>
      </div>
    </div>
  );
};
