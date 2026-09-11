import React, { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  Filter,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Award,
  Zap,
  Target,
  Users,
  Briefcase
} from 'lucide-react';
import { caseStudiesList, testimonialsList, companyInfo } from '../data/companyData';
import { CTASection } from '../components/common/CTASection';
import { PageId, Language } from '../types';
import { asset } from '../utils/asset';
import {
  GoogleLogo,
  GoogleMapsLogo,
  InstagramLogo,
  ReelsLogo,
  MetaLogo,
  WhatsAppLogo,
  YouTubeLogo
} from '../components/common/PlatformLogos';

interface PortfolioPageProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

// Visual image mapping for case studies
const caseStudyImages: Record<string, string> = {
  'retail-silks': asset('assets/campaign-silks.webp'),
  'dental-clinic': asset('assets/campaign-dental.webp'),
  'real-estate-villas': asset('assets/campaign-villas.webp'),
  'interiors-decors': asset('assets/service-video-ads.webp')
};

// Platform badges mapping for case studies
const caseStudyPlatforms: Record<string, { component: React.FC<{ className?: string }>; label: string }[]> = {
  'retail-silks': [
    { component: ReelsLogo, label: 'Telugu Reels' },
    { component: InstagramLogo, label: 'Instagram Ads' },
    { component: MetaLogo, label: 'Meta Ads Manager' },
    { component: WhatsAppLogo, label: 'WhatsApp Automation' }
  ],
  'dental-clinic': [
    { component: GoogleMapsLogo, label: 'Google Maps 3-Pack' },
    { component: GoogleLogo, label: 'Local Search Ads' },
    { component: WhatsAppLogo, label: 'Appointment Bot' },
    { component: InstagramLogo, label: 'Doctor Video Series' }
  ],
  'real-estate-villas': [
    { component: MetaLogo, label: 'NRI Meta Lead Ads' },
    { component: GoogleLogo, label: 'Google High-Intent Search' },
    { component: YouTubeLogo, label: '4K Drone Walkthroughs' },
    { component: WhatsAppLogo, label: 'Direct Brochure Funnel' }
  ],
  'interiors-decors': [
    { component: GoogleLogo, label: 'Google Search Campaigns' },
    { component: InstagramLogo, label: 'Interior Showcase Carousels' },
    { component: WhatsAppLogo, label: 'Instant Consultation Chat' }
  ]
};

// Capability Pillars (replacing unverified aggregate stats)
const verifiedStats = [
  {
    value: '🎯',
    label: 'Hands-On Local Focus',
    labelTe: 'స్థానిక దృష్టి',
    subtext: 'Rajahmundry & East Godavari'
  },
  {
    value: '📊',
    label: 'Accountable Ad Spend',
    labelTe: 'జవాబుదారీ ఖర్చు',
    subtext: 'Weekly reports with screenshots'
  },
  {
    value: '🤝',
    label: 'Zero Lock-In Contracts',
    labelTe: 'లాక్-ఇన్ లేదు',
    subtext: 'Month-to-month flexibility'
  },
  {
    value: '👤',
    label: 'Direct Founder Oversight',
    labelTe: 'ఫౌండర్ నేరుగా పని',
    subtext: 'Bhargav on every account'
  }
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  language = 'en',
  onNavigate,
  onOpenQuoteModal
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');

  const isTe = language === 'te';

  const industries = [
    { id: 'all', label: isTe ? 'అన్ని కేటగిరీలు' : 'All Industries' },
    { id: 'Fashion & Retail', label: isTe ? 'టెక్స్‌టైల్ & రిటైల్' : 'Fashion & Retail' },
    { id: 'Healthcare & Clinics', label: isTe ? 'హాస్పిటల్స్ & క్లినిక్స్' : 'Healthcare & Clinics' },
    { id: 'Real Estate & Construction', label: isTe ? 'రియల్ ఎస్టేట్ & బిల్డర్స్' : 'Real Estate & Construction' },
    { id: 'Interior Design & Architecture', label: isTe ? 'ఇంటీరియర్ డిజైన్స్' : 'Interiors & Decors' }
  ];

  const neighborhoods = [
    { id: 'all', label: isTe ? 'అన్ని ప్రాంతాలు' : 'All East Godavari' },
    { id: 'Danavaipeta', label: 'Danavaipeta' },
    { id: 'Main Road', label: 'Main Road & Kotipalli' },
    { id: 'Morampudi', label: 'Morampudi Junction' },
    { id: 'Diwancheruvu', label: 'Diwancheruvu & NH16' }
  ];

  // Filtering logic
  const filteredStudies = caseStudiesList.filter((cs) => {
    const matchesIndustry = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    const matchesNeighborhood =
      selectedNeighborhood === 'all' ||
      (cs.neighborhood && cs.neighborhood.toLowerCase().includes(selectedNeighborhood.toLowerCase())) ||
      (cs.location && cs.location.toLowerCase().includes(selectedNeighborhood.toLowerCase()));
    return matchesIndustry && matchesNeighborhood;
  });

  return (
    <div id="bds-results-page" className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          SECTION 01: HERO SPOTLIGHT (CLEAN EDITORIAL AESTHETIC)
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-20 border-b border-stone-200/80 bg-gradient-to-b from-[#fbf9f4] via-[#fafaf9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-[1.15]">
            {isTe ? (
              <>
                రాజమండ్రి వ్యాపారాలకు{' '}
                <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
                  క్యాంపెయిన్ కాన్సెప్ట్స్ &amp; క్రియేటివ్ డైరెక్షన్
                </span>
              </>
            ) : (
              <>
                Campaign Concepts &amp;{' '}
                <span className="text-blue-600">Sample Creative Direction</span>
              </>
            )}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {isTe
              ? 'BDS తెలుగు క్రియేటివ్ స్టోరీటెల్లింగ్ మరియు పెర్ఫార్మెన్స్ మార్కెటింగ్ ద్వారా స్థానిక వ్యాపారాలకు ఎలా ఫలితాలు సాధించవచ్చో చూపించే ప్రాక్టికల్ క్యాంపెయిన్ బ్లూప్రింట్స్.'
              : 'Realistic campaign blueprints and creative direction demonstrating how BDS combines Telugu creative storytelling with performance advertising across East Godavari.'}
          </p>

          {/* Quick Contact & WhatsApp Pill */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Results Page Header')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{isTe ? 'మీ వ్యాపారానికి ఫలితాలు పొందండి' : 'Get Similar Results for Your Brand'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I was exploring your client results and case studies. I want to discuss a customized growth strategy for my business in Rajahmundry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>{isTe ? 'వాట్సాప్‌లో భార్గవ్‌తో మాట్లాడండి' : 'Discuss on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: VERIFIED RESULTS COUNTER BAR
          ========================================================================= */}
      <section className="border-b border-stone-200/80 bg-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {verifiedStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#fafaf9] border border-stone-200/70 text-center hover:border-blue-300 transition-colors"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 tracking-tight text-blue-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-bold text-stone-800">
                  {isTe ? stat.labelTe : stat.label}
                </div>
                <div className="mt-0.5 text-[10px] text-stone-500 font-medium">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: INTERACTIVE FILTER CONTROLS & CASE STUDY GRID
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        
        {/* Filter Toolbar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {isTe ? 'పరిశ్రమల వారీగా ఫిల్టర్ చేయండి' : 'EXPLORE BY SECTOR'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-950 mt-1">
                {isTe ? 'క్యాంపెయిన్ కాన్సెప్ట్స్ & క్రియేటివ్ డైరెక్షన్' : 'Campaign Blueprints & Creative Direction'}
              </h2>
            </div>

            <div className="text-xs font-semibold text-stone-500">
              Showing <strong>{filteredStudies.length}</strong> of {caseStudiesList.length} Campaign Concepts
            </div>
          </div>

          {/* Industry Filter Pills */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-stone-700 block">
              {isTe ? 'వ్యాపార రంగం:' : 'Select Industry:'}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedIndustry === ind.id
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-[#fafaf9] text-stone-700 border border-stone-200/80 hover:bg-stone-100'
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          {/* Neighborhood Quick Filter */}
          <div className="space-y-2 pt-2 border-t border-stone-100">
            <span className="text-xs font-bold text-stone-500 block">
              {isTe ? 'ప్రాంతం వారీగా ఫిల్టర్:' : 'Filter by Neighborhood:'}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {neighborhoods.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setSelectedNeighborhood(n.id)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    selectedNeighborhood === n.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80'
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Card Deck */}
        <div className="space-y-12">
          {filteredStudies.map((study) => {
            const campaignImage = caseStudyImages[study.id];
            const platforms = caseStudyPlatforms[study.id] || [];

            return (
              <article
                key={study.id}
                id={`case-study-${study.id}`}
                className="rounded-3xl bg-white border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Dedicated Visual Asset & Platform Badges (No empty space, full flex height) */}
                  <div className="lg:col-span-5 bg-white border-b lg:border-b-0 lg:border-r border-stone-200/80 flex flex-col justify-between overflow-hidden">
                    
                    {/* Full-Height Responsive Image Asset */}
                    <div className="relative w-full flex-1 min-h-[320px] sm:min-h-[380px] overflow-hidden bg-stone-100 group">
                      {campaignImage ? (
                        <img
                          src={campaignImage}
                          alt={study.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover object-center scale-100 transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-400">
                          <Sparkles className="w-8 h-8 text-blue-500" />
                        </div>
                      )}

                      {/* Floating Category & Corridor Badges */}
                      <div className="absolute top-3.5 inset-x-3.5 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                        <div className="flex flex-col gap-1.5 items-start">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-950/85 backdrop-blur-md text-white border border-white/20 text-[11px] font-bold shadow-sm">
                              <Briefcase className="w-3.5 h-3.5 text-stone-300" />
                              <span>{study.industry}</span>
                            </span>
                            {study.neighborhood && (
                              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-950/85 backdrop-blur-md text-stone-100 border border-white/20 text-[11px] font-semibold shadow-sm">
                                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                                <span>{study.neighborhood}</span>
                              </span>
                            )}
                          </div>

                          {study.bilingualTag && (
                            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-700/90 backdrop-blur-md text-white border border-emerald-400/40 shadow-sm">
                              {study.bilingualTag}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom-Left Image Overlay Badge */}
                      <div className="absolute bottom-3 left-3 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-950/85 backdrop-blur-md text-white text-xs font-bold shadow-md">
                          <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                          <span>Campaign Concept</span>
                        </span>
                      </div>
                    </div>

                    {/* Clean Platforms Used Footer Panel */}
                    <div className="p-4 sm:p-5 bg-white border-t border-stone-200/80 space-y-2.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 block">
                        Platforms Used
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {platforms.map((p, pIdx) => {
                          const IconComponent = p.component;
                          return (
                            <div
                              key={pIdx}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fafaf9] hover:bg-stone-100 text-stone-800 text-xs font-semibold border border-stone-200/80 shadow-2xs transition-colors"
                            >
                              <IconComponent className="w-3.5 h-3.5 shrink-0" />
                              <span>{p.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Case Details & Metrics Breakdown */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">
                      
                      {/* Sector Focus & Headline */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                            Sector Focus: {study.client} • {study.location}
                          </span>
                          {study.conceptNote && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                              {study.conceptNote}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight">
                          {study.title}
                        </h3>
                        <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                          {study.summary}
                        </p>
                      </div>

                      {/* Challenge vs BDS Solution Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-[#fafaf9] border border-stone-200/80 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                              The Local Challenge
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100/80 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600" />
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                              Our BDS Strategy &amp; Execution
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Execution Framework & Impact Model */}
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-3">
                          Execution Framework &amp; Impact Model
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {study.results.map((res, rIdx) => (
                            <div
                              key={rIdx}
                              className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-1 hover:border-blue-200 transition-colors"
                            >
                              <span className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                                {res.metric}
                              </span>
                              <span className="text-xs text-stone-600 font-medium">
                                {res.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {study.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 text-[11px] font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Triggers */}
                    <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-stone-500 text-center sm:text-left font-medium">
                        Want a similar growth framework for your showroom, clinic, or firm?
                      </div>

                      <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => onOpenQuoteModal(`${study.client} (${study.industry})`)}
                          className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Discuss This Concept</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(`Hi Bhargav, I saw the campaign concept for "${study.client}" in ${study.neighborhood || study.location} and would like to discuss a tailored digital marketing strategy for my business.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                        >
                          <WhatsAppLogo className="w-3.5 h-3.5" />
                          <span>Discuss on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: OUR 3-STEP WORKING MODEL
          ========================================================================= */}
      <section className="border-t border-b border-stone-200/80 bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-xs font-bold text-stone-700">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>How We Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Our 3-Step Working Model
            </h2>
            <p className="text-sm text-stone-600">
              A transparent, accountable process from first call to campaign results — no black boxes, no handoffs to juniors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Step 1 — Strategy */}
            <div className="rounded-3xl bg-[#fafaf9] border border-stone-200/80 p-7 space-y-5 relative">
              <div className="absolute top-6 right-6 text-5xl font-black text-stone-100 select-none leading-none">01</div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-stone-950 tracking-tight">Strategy</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Founder Bhargav personally audits your local presence — Google Maps, social, competitor positioning — and builds a prioritised roadmap for your business category and area.
                </p>
              </div>
              <ul className="space-y-2">
                {['Local competitor audit', 'Platform & budget recommendation', 'Custom 90-day roadmap'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 — Execution */}
            <div className="rounded-3xl bg-[#fafaf9] border border-stone-200/80 p-7 space-y-5 relative">
              <div className="absolute top-6 right-6 text-5xl font-black text-stone-100 select-none leading-none">02</div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-stone-950 tracking-tight">Execution</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Campaigns launched with bilingual Telugu/English creatives, precise geo-targeting, and daily monitoring. Every asset is produced in-house — no outsourcing.
                </p>
              </div>
              <ul className="space-y-2">
                {['Bilingual creative production', 'Geo-targeted ad setup', 'Daily performance monitoring'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3 — Reporting */}
            <div className="rounded-3xl bg-[#fafaf9] border border-stone-200/80 p-7 space-y-5 relative">
              <div className="absolute top-6 right-6 text-5xl font-black text-stone-100 select-none leading-none">03</div>
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-stone-950 tracking-tight">Reporting</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Weekly reports with actual ad screenshots, spend vs. results breakdowns, and honest notes on what's working — and what we're improving next week.
                </p>
              </div>
              <ul className="space-y-2">
                {['Weekly results report', 'Spend transparency screenshots', 'Continuous optimisation notes'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 05: HYPER-LOCAL NEIGHBORHOOD COVERAGE MATRIX
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="rounded-3xl bg-stone-950 text-white p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                East Godavari District Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                Driving Footfalls and Inquiries Across All Major Godavari Hubs
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                Whether you operate a jewelry showroom on Main Road, a diagnostic center in Danavaipeta, or an infrastructure firm on NH16, our radius-targeted ad architecture reaches customers precisely where they live and shop.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap gap-2">
              {[
                'Main Road & Kotipalli',
                'Danavaipeta Medical Hub',
                'Morampudi Commercial Corridor',
                'Kambala Tank & Innespeta',
                'Lalacheruvu Junction',
                'Diwancheruvu & NH16 Hub',
                'Kakinada Smart City',
                'Amalapuram & Konaseema',
                'Mandapeta & Kovvur'
              ].map((loc, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white/10 text-stone-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: GLOBAL REUSABLE CTA SECTION
          ========================================================================= */}
      <CTASection
        title={isTe ? 'మీ వ్యాపారానికి ఖచ్చితమైన ఫలితాలు కావాలా?' : 'Ready for Measurable Results for Your Business?'}
        subtitle={
          isTe
            ? 'ఫౌండర్ భార్గవ్‌తో ఉచిత 20 నిమిషాల స్ట్రాటజీ కాల్ బుక్ చేసుకోండి. మీ సోషల్ మీడియా మరియు గూగుల్ మ్యాప్స్ ఉచిత ఆడిట్ పొందండి.'
            : 'Schedule a free 20-minute strategy call with Founder Bhargav. We will audit your current social reach and map out an exact regional growth blueprint.'
        }
        onOpenQuoteModal={() => onOpenQuoteModal('Results Page Bottom CTA')}
      />

    </div>
  );
};
