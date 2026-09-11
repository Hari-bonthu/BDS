import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Building2,
  Clock,
  Mail,
  Zap,
  MessageCircle
} from 'lucide-react';
import { PageId, Language } from '../types';
import { asset } from '../utils/asset';
import { companyInfo, regionalCoverageAreas } from '../data/companyData';
import { CTASection } from '../components/common/CTASection';
import { WhatsAppLogo } from '../components/common/PlatformLogos';

interface AboutPageProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language = 'en',
  onNavigate,
  onOpenQuoteModal
}) => {
  const isTe = language === 'te';

  return (
    <div id="bds-about-page" className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          01 — EDITORIAL HERO MASTHEAD
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-stone-200/80 bg-gradient-to-b from-[#fbf9f4] via-[#fafaf9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl space-y-6">
            {/* High-impact editorial headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-stone-950 leading-[1.1]">
              {isTe ? (
                <>
                  మెట్రో ఏజెన్సీల భారీ ఫీజులు లేకుండా...{' '}
                  <span className="text-blue-600">స్థానిక వ్యాపారాలకు</span> నిజమైన గ్రోత్.
                </>
              ) : (
                <>
                  High-Standard Digital Marketing at{' '}
                  <span className="text-blue-600">Prices Local Businesses Can Afford</span>.
                </>
              )}
            </h1>

            {/* Mission statement */}
            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal max-w-3xl">
              {isTe
                ? 'రాజమండ్రిలోని దానవాయిపేట కేంద్రంగా ప్రారంభించబడిన BDS, సంప్రదాయ మెట్రో ఏజెన్సీల అధిక ఖర్చులు మరియు చవకైన ఫ్రీలాన్సర్ల నాణ్యత లేని గ్రాఫిక్స్ సమస్యలను తొలగించి — తెలుగు రీల్స్, గూగుల్ మ్యాప్స్ మరియు టార్గెటెడ్ యాడ్స్ ద్వారా స్థానిక వ్యాపారులకు నిజమైన కస్టమర్లను అందిస్తుంది.'
                : 'Founded on Main Road, Danavaipeta, Rajahmundry, BDS exists to solve an unfair regional reality: give East Godavari retailers, healthcare clinics, builders, and service firms the same high-performing digital marketing systems used by metro brands—without the inflated retainers, with native Telugu cultural resonance, and with direct founder stewardship.'}
            </p>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isTe ? 'ఉచిత స్ట్రాటజీ కాల్ బుక్ చేయండి' : 'Book Free Strategy Call'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I was reading about BDS on your website and want to discuss digital marketing for my business in Rajahmundry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                <WhatsAppLogo className="w-4 h-4" />
                <span>{isTe ? 'వాట్సాప్‌లో మాట్లాడండి' : 'Chat on WhatsApp'}</span>
              </a>

              <a
                href={`tel:${companyInfo.phone}`}
                className="px-4 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          02 — MINIMALIST INLINE STATS BAR (NO BULKY CARDS)
          ========================================================================= */}
      <section className="border-b border-stone-200/80 bg-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-stone-200/80">

            <div className="p-4 sm:px-6 sm:py-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
                🎯
              </div>
              <div className="text-xs font-bold text-stone-800">
                {isTe ? 'స్థానిక దృష్టి' : 'Hands-On Local Focus'}
              </div>
              <div className="text-[11px] text-stone-500">
                Rajahmundry &amp; East Godavari
              </div>
            </div>

            <div className="p-4 sm:px-6 sm:py-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 tracking-tight">
                📊
              </div>
              <div className="text-xs font-bold text-stone-800">
                {isTe ? 'జవాబుదారీ ఖర్చు' : 'Accountable Ad Spend'}
              </div>
              <div className="text-[11px] text-stone-500">
                Weekly reports with screenshots
              </div>
            </div>

            <div className="p-4 sm:px-6 sm:py-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">
                🤝
              </div>
              <div className="text-xs font-bold text-stone-800">
                {isTe ? 'లాక్-ఇన్ లేదు' : 'Zero Lock-In Contracts'}
              </div>
              <div className="text-[11px] text-stone-500">
                Month-to-month flexibility
              </div>
            </div>

            <div className="p-4 sm:px-6 sm:py-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
                👤
              </div>
              <div className="text-xs font-bold text-stone-800">
                {isTe ? 'ఫౌండర్ నేరుగా పని' : 'Direct Founder Oversight'}
              </div>
              <div className="text-[11px] text-stone-500">
                Bhargav on every account
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — ASYMMETRICAL FOUNDER SPOTLIGHT (MAGAZINE FEATURE)
          ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Architectural Executive Leadership Card (No photo image, pure architectural design) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-stone-950 via-slate-900 to-stone-950 text-white p-7 sm:p-8 border border-stone-800 shadow-xl overflow-hidden group">
              {/* Subtle ambient lighting */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Header: Founder Profile Photo & Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-xl shadow-blue-950/50 shrink-0 bg-stone-900">
                      <img
                        src={asset('assets/Bhargav_Headshot.png')}
                        alt="Bhargav - Founder & Lead Growth Strategist"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-black text-white tracking-tight">Bhargav</h3>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Active Direct Oversight" />
                      </div>
                      <p className="text-xs font-semibold text-cyan-300">
                        Founder &amp; Lead Growth Strategist
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-blue-950/80 border border-blue-700/50 px-2.5 py-1 rounded-full shrink-0">
                    8+ Yrs Exp
                  </span>
                </div>

                {/* Headquarters Location Tag */}
                <div className="flex items-center gap-2 text-xs text-stone-300 bg-stone-900/90 rounded-xl px-3.5 py-2.5 border border-stone-800">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">Danavaipeta, Rajahmundry, East Godavari</span>
                </div>

                {/* Direct Founder Access Guarantee Block */}
                <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800/90 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-blue-400">
                      Direct Founder Commitment
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed italic">
                    &ldquo;When you partner with BDS, your business strategy is developed, written, and monitored directly by me. You never deal with junior coordinators or outsourced guesswork.&rdquo;
                  </p>
                </div>

                {/* 3 Executive Credentials */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-stone-800/80 text-center">
                  <div className="p-2.5 rounded-xl bg-stone-900/60">
                    <p className="text-sm sm:text-base font-black text-white">Hands-On</p>
                    <p className="text-[10px] text-stone-400 font-medium">Local Focus</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-900/60">
                    <p className="text-base font-black text-cyan-300">100%</p>
                    <p className="text-[10px] text-stone-400 font-medium">Accountability</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-900/60">
                    <p className="text-base font-black text-emerald-400">Direct</p>
                    <p className="text-[10px] text-stone-400 font-medium">WhatsApp</p>
                  </div>
                </div>

                {/* Direct Action Line */}
                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I was reading your founder story on the BDS website and want to connect.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Bhargav</span>
                  </a>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs border border-stone-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Personal Manifesto & Founder Stewardship */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Founder Spotlight &amp; Stewardship
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight">
                &ldquo;We treat your ad budget like our own hard-earned money.&rdquo;
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                {isTe ? (
                  <>
                    హైదరాబాద్ లేదా బెంగళూరులోని కార్పొరేట్ ఏజెన్సీలు క్లయింట్ల నుంచి భారీ ఫీజులు వసూలు చేస్తాయి. కానీ ఆ ప్రాజెక్ట్‌లను స్థానిక భాష, సంస్కృతి తెలియని జూనియర్ ఇంటర్న్‌లకు అప్పగిస్తాయి.
                  </>
                ) : (
                  <>
                    For years, business owners across Rajahmundry and East Godavari faced an unfair dilemma: spend ₹50,000 to ₹1,00,000 on metro agencies who don’t understand Godavari customer psychology, or hire gig freelancers who deliver template graphics that bring zero phone calls.
                  </>
                )}
              </p>
              <p>
                {isTe ? (
                  <>
                    నేను <strong>భార్గవ్ డిజిటల్ సొల్యూషన్స్ (BDS)</strong> ను ప్రారంభించడానికి కారణం ఒక్కటే: ప్రతి రూపాయి ఖర్చుకు స్పష్టమైన లెక్క, ప్రత్యక్ష ఫౌండర్ బాధ్యత, మరియు తెలుగులో ఆకట్టుకునే రీల్స్ ద్వారా వ్యాపారస్తుల వద్దకు కస్టమర్లను నేరుగా తీసుకురావడం.
                  </>
                ) : (
                  <>
                    I built BDS to provide an authentic third path: world-class performance marketing, conversational Telugu video reels, and Google Maps 3-Pack rankings at transparent, accessible rates tailored to each business's goals. When you partner with BDS, you speak directly with me—not a junior coordinator.
                  </>
                )}
              </p>
            </div>

            {/* Direct Founder Access Guarantee */}
            <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-stone-800">
                Direct phone and WhatsApp access to Founder Bhargav for weekly reviews, shoot coordination, and strategy sprints.
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Book 1-on-1 Consultation
              </button>
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 text-xs sm:text-sm font-semibold transition-colors"
              >
                Call: {companyInfo.phoneDisplay}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          04 — THE REGIONAL DILEMMA (TYPOGRAPHIC SPLIT — NO SLOP CARDS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              The Market Dilemma
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Why Traditional Marketing Failed Rajahmundry Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: The Two Broken Options (Clean Typographic Breakdown) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-rose-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Option A: The Metro Agency Trap</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  Exorbitant Retainers &amp; Junior Account Hand-offs
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Metro agencies in Hyderabad charge ₹50,000+ monthly retainers and lock you into 1-year contracts. Your account is assigned to junior interns who have zero understanding of Godavari buyer habits or regional festival shopping cycles.
                </p>
                <div className="text-[11px] font-mono text-stone-400">
                  Cost: ₹50K–₹1L/mo • Result: High fees, zero walk-ins
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Option B: The Cheap Freelancer Trap</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  Generic Canva Graphics &amp; No Lead Tracking
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Hiring low-cost freelancers for ₹2,000 yields copy-pasted stock templates, zero ad strategy, and dead social feeds. You get pretty pictures, but no phone calls, no footfalls, and zero revenue accountability.
                </p>
                <div className="text-[11px] font-mono text-stone-400">
                  Cost: ₹2K–₹5K/mo • Result: Zero inquiries, wasted time
                </div>
              </div>

            </div>

            {/* Right: The BDS Distinct Approach (High-Contrast Hero Feature) */}
            <div className="lg:col-span-6 rounded-3xl bg-stone-950 text-white p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-[11px] font-extrabold uppercase tracking-wider border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The BDS Solution • The Sweet Spot</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  High-Standard Strategy with Transparent Regional Pricing
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  BDS bridges this gap by combining agency-grade media production and Meta/Google ad architecture with fair local pricing and deep East Godavari roots:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    'Conversational Telugu Video Reels scripted for regional audience psychology',
                    'On-location 4K video shooting in Rajahmundry showrooms & clinics',
                    'Google Maps 3-Pack rank acceleration & automated 5-star review collection',
                    'Under 15-minute lead response routing directly to the business owner',
                    'Month-to-month flexible agreements starting at just ₹7,999/month'
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Pricing Structure</span>
                  <span className="text-lg font-black text-white">Starting ₹7,999 / mo</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('pricing')}
                  className="px-4 py-2 rounded-xl bg-white text-stone-950 font-bold text-xs hover:bg-stone-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          05 — 4 FOUNDATIONAL PRINCIPLES (TYPOGRAPHIC 2x2 GRID WITH DIVIDERS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Agency Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Our 4 Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 border-t border-b border-stone-200">
            
            {/* Principle 01 */}
            <div className="py-8 sm:pr-8 space-y-3">
              <span className="text-xs font-mono font-black text-blue-600">01</span>
              <h3 className="text-xl font-black text-stone-950">
                {isTe ? 'పారదర్శకమైన, అందుబాటు ధరలు' : 'Honest, Accessible Pricing'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Zero hidden markups and zero locked-in annual contracts. Flexible month-to-month plans starting at ₹7,999/mo designed specifically for regional business cash flows.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="py-8 md:pl-8 space-y-3">
              <span className="text-xs font-mono font-black text-cyan-600">02</span>
              <h3 className="text-xl font-black text-stone-950">
                {isTe ? 'గోదావరి సంస్కృతి & తెలుగు ప్రావీణ్యం' : 'Cultural & Dialect Fluency'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Native Telugu video scripting, festival campaign timing (Sankranti, Dasara), and deep psychological resonance with shoppers across Godavari districts.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="py-8 sm:pr-8 border-t border-stone-200 space-y-3">
              <span className="text-xs font-mono font-black text-emerald-600">03</span>
              <h3 className="text-xl font-black text-stone-950">
                {isTe ? 'నిజమైన ఫలితాలు, కొలవదగిన ROI' : 'Zero Fluff, Measurable ROI'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We measure success strictly through verified walk-ins, phone inquiries, and confirmed sales orders—never vanity impressions or superficial likes.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="py-8 md:pl-8 border-t border-stone-200 space-y-3">
              <span className="text-xs font-mono font-black text-indigo-600">04</span>
              <h3 className="text-xl font-black text-stone-950">
                {isTe ? 'డైరెక్ట్ ఫౌండర్ బాధ్యత' : 'Direct Founder Accountability'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Clients work directly with Founder Bhargav. No junior account coordinators, no communication breakdowns. Your business strategy gets hands-on executive attention.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          06 — 4-STEP WORKING ROADMAP (CONTINUOUS HORIZONTAL FLOW — NO CARDS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              The 4-Step BDS Growth Roadmap
            </h2>
            <p className="text-stone-500 text-sm">
              How we take a local business from invisible to market-dominant in 30 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                num: '01',
                title: 'Local Audit & Recon',
                desc: 'Analyze competitor ads in Rajahmundry, audit Google Maps rank, and uncover high-intent category search gaps.'
              },
              {
                num: '02',
                title: 'Bilingual Content',
                desc: 'Script engaging Telugu reels, design compelling festive offers, and craft creatives that capture local attention.'
              },
              {
                num: '03',
                title: 'Targeted Launch',
                desc: 'Deploy radius-targeted Meta & Google ads across East Godavari pincodes and optimize for the Google Maps 3-Pack.'
              },
              {
                num: '04',
                title: 'WhatsApp Lead Route',
                desc: 'Route customer inquiries directly to your phone or WhatsApp with prompt triage and organized lead details.'
              }
            ].map((st, sIdx) => (
              <div key={sIdx} className="space-y-2 border-l-2 border-stone-300 pl-4 py-1">
                <span className="text-xs font-mono font-bold text-blue-600">{st.num}</span>
                <h3 className="text-base font-bold text-stone-900">{st.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          07 — EAST GODAVARI GEOGRAPHIC ROOTS & HEADQUARTERS
          ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 shadow-xs space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/60">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Physical Headquarters • Danavaipeta</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-950">
                Deeply Rooted in Rajahmundry &amp; Coastal Andhra
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We are proud to operate directly out of <strong>Danavaipeta, Rajahmundry</strong>. Drop in for a coffee with Bhargav or schedule an on-site visit for your showroom or clinic.
              </p>
              
              <div className="space-y-2 text-xs text-stone-700 font-medium">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Office Address:</strong> {companyInfo.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span><strong>Working Hours:</strong> {companyInfo.workingHours}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Direct Line:</strong> {companyInfo.phoneDisplay}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>Official Email:</strong> {companyInfo.email}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Primary District Service Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Danavaipeta Medical District',
                  'Main Road & Kotipalli Silk Corridor',
                  'Morampudi Commercial Hub',
                  'Kambala Tank & Innespeta',
                  'Lalacheruvu & Diwancheruvu Corridor',
                  'Kakinada Smart City',
                  'Amalapuram & Konaseema Delta',
                  'Mandapeta & Kovvur'
                ].map((area, aIdx) => (
                  <span
                    key={aIdx}
                    className="px-3 py-1.5 rounded-xl bg-[#fafaf9] text-stone-700 text-xs font-semibold border border-stone-200/80 flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          08 — STANDARDIZED BOTTOM CTA
          ========================================================================= */}
      <CTASection
        title={
          isTe
            ? 'ఫౌండర్ భార్గవ్‌తో మీ వ్యాపార గ్రోత్ ప్లాన్ చర్చించండి'
            : 'Ready to build a predictable customer acquisition engine?'
        }
        subtitle={
          isTe
            ? '20 నిమిషాల ఉచిత స్ట్రాటజీ కాల్ బుక్ చేసుకోండి. మీ సోషల్ మీడియా మరియు గూగుల్ మ్యాప్స్ ఉచిత ఆడిట్ పొందండి.'
            : 'Schedule a free 20-minute strategy call with Founder Bhargav. We will audit your current social reach and map out an exact regional growth blueprint.'
        }
        badge="Direct Founder Consultation • No Lock-in"
        onOpenQuoteModal={onOpenQuoteModal}
      />

    </div>
  );
};
