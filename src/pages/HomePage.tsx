import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  TrendingUp,
  User
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { PageId, Language } from '../types';
import { asset } from '../utils/asset';
import {
  GoogleLogo,
  GoogleMapsLogo,
  InstagramLogo,
  ReelsLogo,
  MetaLogo,
  WhatsAppLogo,
  YouTubeLogo,
  CreativesLogo,
  LeadGenLogo,
  InquiriesLogo
} from '../components/common/PlatformLogos';

interface HomePageProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

// 3 BDS Campaign Concept Showcases (Illustrative creative direction examples)
const heroShowcaseCampaigns = [
  {
    id: 'silks',
    client: 'TEXTILE & BRIDAL RETAIL',
    clientTe: 'టెక్స్టైల్ & బ్రైడల్ రీటెయిల్',
    campaignName: 'Festive Video Concept',
    campaignNameTe: 'ఫెస్టివ్ వీడియో క్యాంపెయిన్ కాన్సెప్ట్',
    image: asset('assets/campaign-silks.webp'),
    resultNumber: 'High',
    resultLabel: 'footfall lift potential',
    resultLabelTe: 'షోరూమ్ ట్రాఫిక్ పొటెన్షియల్'
  },
  {
    id: 'dental',
    client: 'HEALTHCARE & CLINICS',
    clientTe: 'హెల్త్‌కేర్ & క్లినిక్స్',
    campaignName: 'Local Search & Booking Concept',
    campaignNameTe: 'లోకల్ సెర్చ్ & బుకింగ్ కాన్సెప్ట్',
    image: asset('assets/campaign-dental.webp'),
    resultNumber: '3-Pack',
    resultLabel: 'Google Maps ranking model',
    resultLabelTe: 'గూగుల్ మ్యాప్స్ 3-ప్యాక్ మోడల్'
  },
  {
    id: 'villas',
    client: 'RESIDENTIAL REAL ESTATE',
    clientTe: 'రెసిడెన్షియల్ రియల్ ఎస్టేట్',
    campaignName: 'Buyer Lead Generation Concept',
    campaignNameTe: 'బయర్ లీడ్ జనరేషన్ కాన్సెప్ట్',
    image: asset('assets/campaign-villas.webp'),
    resultNumber: 'Verified',
    resultLabel: 'buyer lead qualification model',
    resultLabelTe: 'క్వాలిఫైడ్ బయర్ లీడ్ మోడల్'
  }
];

// Industry Sector Specializations (replacing placeholder client names)
const trustedClients = [
  { name: 'Retail & Apparel Showrooms', mark: 'Retail' },
  { name: 'Clinics & Healthcare Centers', mark: 'Health' },
  { name: 'Real Estate & Builders', mark: 'Realty' },
  { name: 'Interior Design Studios', mark: 'Design' },
  { name: 'Educational Institutions', mark: 'Edu' },
  { name: 'Hospitality & Restaurants', mark: 'Dine' }
];

export const HomePage: React.FC<HomePageProps> = ({
  language = 'en',
  onNavigate,
  onOpenQuoteModal
}) => {
  // Hero Campaign Auto-cycle state (Smooth 3.0s transition with pause on hover)
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % heroShowcaseCampaigns.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentCampaign = heroShowcaseCampaigns[activeHeroIdx];

  // Content translations
  const isTe = language === 'te';

  return (
    <div id="bds-homepage-editorial" className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          SECTION 01: HERO (APPROVED & UNTOUCHED — NO MODIFICATIONS)
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-stone-200/80 overflow-hidden bg-gradient-to-b from-[#fbf9f4] via-[#fafaf9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: What BDS Does (Clean, Simple, Human) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Primary Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-stone-950 leading-[1.14] sm:leading-[1.12]">
                {isTe ? (
                  <>
                    రాజమండ్రిలో మీ బిజినెస్ గ్రోత్ కోసం <br className="hidden sm:inline" />
                    <span className="text-blue-600">అఫర్డబుల్ డిజిటల్ మార్కెటింగ్</span> ఏజెన్సీ.
                  </>
                ) : (
                  <>
                    Affordable Digital Marketing <br className="hidden sm:inline" />
                    <span className="text-blue-600">Agency in Rajahmundry</span> <br className="hidden sm:inline" />
                    to grow your local business.
                  </>
                )}
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
                {isTe ? (
                  'భార్గవ్ డిజిటల్ సొల్యూషన్స్ (BDS): తెలుగు రీల్స్, సోషల్ మీడియా, Google Maps 3-Pack, మరియు పెయిడ్ యాడ్స్ ద్వారా మీ వ్యాపారానికి ఎక్కువ కస్టమర్లను తీసుకువస్తాము.'
                ) : (
                  'Bhargav Digital Solutions (BDS): High-converting Telugu Reels, social media management, Google Maps 3-Pack, and ROI-driven performance ads built for businesses across Rajahmundry and Coastal Andhra.'
                )}
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('Growth Plan')}
                  className="px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>{isTe ? 'ఉచిత Growth Plan పొందండి' : 'Get a Free Growth Plan'}</span>
                  <ArrowRight className="w-4 h-4 text-stone-300" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-sm sm:text-base border border-stone-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isTe ? 'కాంపెయిన్ కాన్సెప్ట్స్ చూడండి' : 'Explore Campaign Concepts'}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </button>
              </div>

              {/* Proof Line */}
              <div className="pt-2 border-t border-stone-200/80">
                <p className="text-xs sm:text-sm font-semibold text-stone-600 tracking-wide">
                  <span className="text-stone-950 font-bold">{isTe ? 'స్పష్టమైన లక్ష్యాలు' : 'Measurable KPIs'}</span> &nbsp;·&nbsp;{' '}
                  <span className="text-stone-950 font-bold">{isTe ? 'పారదర్శకమైన రిపోర్టింగ్' : 'Transparent Reporting'}</span> &nbsp;·&nbsp;{' '}
                  <span className="text-stone-950 font-bold">{isTe ? 'డైరెక్ట్ ఫౌండర్ స్ట్రాటజీ' : 'Direct Founder Strategy'}</span>
                </p>
              </div>
            </div>

            {/* Right Column: Large Dominant Editorial Campaign Visual (NO CARD CONTAINER) */}
            <div
              className="lg:col-span-5"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative group cursor-pointer" onClick={() => onNavigate('portfolio')}>
                
                {/* Large Editorial Photograph with Subtle Rounded Corners */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 bg-stone-900">
                  <img
                    key={currentCampaign.image}
                    src={currentCampaign.image}
                    alt={`${currentCampaign.client} Campaign Visual`}
                    width={560}
                    height={380}
                    className="w-full h-full object-cover object-center animate-in fade-in duration-500 transform group-hover:scale-102 transition-transform duration-700"
                    loading="eager"
                    fetchPriority={"high" as any}
                    decoding="async"
                  />

                  {/* Gentle Bottom Dark Gradient for Clean Typography Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Minimal Editorial Overlay Text */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white space-y-2 animate-in fade-in duration-300" key={currentCampaign.id}>
                    
                    {/* Small Client & Campaign Label */}
                    <div className="space-y-0.5">
                      <p className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-cyan-300">
                        {isTe ? currentCampaign.clientTe : currentCampaign.client}
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-stone-300">
                        {isTe ? currentCampaign.campaignNameTe : currentCampaign.campaignName}
                      </p>
                    </div>

                    {/* Single Large Dominant Result */}
                    <div className="pt-1 flex items-baseline gap-2.5">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                        {currentCampaign.resultNumber}
                      </span>
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                        {isTe ? currentCampaign.resultLabelTe : currentCampaign.resultLabel}
                      </span>
                    </div>

                  </div>
                </div>

                {/* 3 Small Subtle Progress Indicators Underneath Visual */}
                <div className="mt-3.5 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    {heroShowcaseCampaigns.map((c, i) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHeroIdx(i);
                        }}
                        aria-label={`Switch to ${c.client}`}
                        className={`h-1 rounded-full transition-all cursor-pointer ${
                          activeHeroIdx === i
                            ? 'w-8 bg-blue-600'
                            : 'w-2 bg-stone-300 hover:bg-stone-400'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-stone-500 flex items-center gap-1">
                    <span>{isTe ? 'కేస్ స్టడీ చూడండి' : 'Proof of work'}</span>
                    <ArrowRight className="w-3 h-3 text-stone-400" />
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          01 — TRUSTED BY BUSINESSES (Clean Continuous Typographic Marquee — No Cards)
          ========================================================================= */}
      <section className="py-7 sm:py-8 bg-white border-b border-stone-200/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3.5 text-center">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-stone-400">
            {isTe ? 'గోదావరి జిల్లాల్లోని కీలక వాణిజ్య రంగాలు' : 'SPECIALIZED FOR REGIONAL COMMERCIAL SECTORS'}
          </p>
        </div>

        {/* Slow, Elegant Continuous Client Names Marquee (No Boxes, No Cards, No Shadows) */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-1">
            {[...trustedClients, ...trustedClients, ...trustedClients].map((client, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0 group">
                <span className="text-[11px] font-mono font-bold tracking-widest text-stone-400 group-hover:text-blue-600 transition-colors uppercase border-b border-stone-300 pb-0.5">
                  {client.mark}
                </span>
                <span className="text-sm sm:text-base font-bold text-stone-800 group-hover:text-blue-600 tracking-tight transition-colors whitespace-nowrap">
                  {client.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-8 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — WHAT WE DO (Compact 3-Column Outcomes with Official Platform Logos)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Compact Header: Headline on Left, Brief Subtitle + CTA on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                {isTe ? 'సర్వీసులు' : 'WHAT WE DO'}
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
                {isTe ? (
                  <>మీ వ్యాపారాన్ని ముందుకు నడిపించే డిజిటల్ మార్కెటింగ్.</>
                ) : (
                  <>Digital marketing that moves your business forward.</>
                )}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 shrink-0">
              <p className="text-xs sm:text-sm text-stone-500 max-w-xs font-medium leading-relaxed">
                {isTe
                  ? 'స్థానిక కస్టమర్లు మిమ్మల్ని సులభంగా కనుగొని, మీ బ్రాండ్‌ని గుర్తుంచుకుని, కస్టమర్లుగా మారేలా చేస్తాం.'
                  : 'Get found, get noticed and turn attention into real customers.'}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-stone-950 hover:text-blue-600 transition-colors group cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                <span>{isTe ? 'అన్ని సర్వీసులు →' : 'Explore All Services →'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Equal-Height 3-Column Grid: 01 GET FOUND | 02 GET NOTICED | 03 GET CUSTOMERS */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            {/* Column 01: GET FOUND */}
            <div className="flex flex-col justify-between h-full space-y-5 pb-6 md:pb-0 md:pr-8 lg:pr-10">
              <div className="space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600">01</span>
                  <h3 className="text-lg sm:text-xl font-black text-stone-950 tracking-tight">
                    {isTe ? 'కనుగొనబడండి' : 'GET FOUND'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 leading-snug min-h-[36px] sm:min-h-[40px]">
                  {isTe
                    ? 'కస్టమర్లు వెతికినప్పుడు మీ బిజినెస్ సులభంగా కనిపించేలా చేస్తాం.'
                    : "Help customers discover you when they're already searching."}
                </p>
              </div>

              {/* Symmetrical 2x2 Grid: Fills Column Width */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full pt-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <GoogleMapsLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Google Maps</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <GoogleLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Local SEO</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <GoogleLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Google Search</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <GoogleMapsLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Business Profile</span>
                </div>
              </div>
            </div>

            {/* Column 02: GET NOTICED */}
            <div className="flex flex-col justify-between h-full space-y-5 py-6 md:py-0 md:px-8 lg:px-10">
              <div className="space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600">02</span>
                  <h3 className="text-lg sm:text-xl font-black text-stone-950 tracking-tight">
                    {isTe ? 'గుర్తింపు పొందండి' : 'GET NOTICED'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 leading-snug min-h-[36px] sm:min-h-[40px]">
                  {isTe
                    ? 'ఆకట్టుకునే కంటెంట్‌తో మీ బ్రాండ్‌ని గుర్తుంచుకునేలా చేస్తాం.'
                    : 'Create content that makes people stop, watch and remember you.'}
                </p>
              </div>

              {/* Symmetrical 2x2 Grid: Fills Column Width */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full pt-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <ReelsLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Reels</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <InstagramLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Social Media</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <YouTubeLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Content</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <CreativesLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Campaign Creatives</span>
                </div>
              </div>
            </div>

            {/* Column 03: GET CUSTOMERS */}
            <div className="flex flex-col justify-between h-full space-y-5 pt-6 md:pt-0 md:pl-8 lg:pl-10">
              <div className="space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600">03</span>
                  <h3 className="text-lg sm:text-xl font-black text-stone-950 tracking-tight">
                    {isTe ? 'కస్టమర్లను పొందండి' : 'GET CUSTOMERS'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 leading-snug min-h-[36px] sm:min-h-[40px]">
                  {isTe
                    ? 'కస్టమర్ల దృష్టిని నేరుగా ఎంక్వైరీలు మరియు అమ్మకాలుగా మారుస్తాం.'
                    : 'Turn attention into enquiries, conversations and customers.'}
                </p>
              </div>

              {/* Symmetrical 2x2 Grid: Fills Column Width */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full pt-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <MetaLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Meta Ads</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <LeadGenLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Lead Gen</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <WhatsAppLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm font-bold text-stone-900">
                  <InquiriesLogo className="w-4 h-4 shrink-0" />
                  <span className="truncate">Customer Enquiries</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          03 — SELECTED WORK (3 Equal Cards: Alternating Zigzag Editorial Layout)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {isTe ? 'క్యాంపెయిన్ కాన్సెప్ట్స్' : 'SAMPLE CREATIVE DIRECTION'}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              {isTe ? 'క్యాంపెయిన్ కాన్సెప్ట్స్ & క్రియేటివ్ డైరెక్షన్' : 'Sample Creative Direction & Campaign Execution'}
            </h2>
            <p className="text-sm sm:text-base text-stone-500 font-normal">
              {isTe ? (
                'BDS తెలుగు క్రియేటివ్ స్టోరీటెల్లింగ్ మరియు పెర్ఫార్మెన్స్ అడ్వర్టైజింగ్‌ను కలిపి ఎలా పని చేస్తుందో చూపించే ఉదాహరణ క్యాంపెయిన్ బ్లూప్రింట్స్.'
              ) : (
                'Realistic campaign blueprints demonstrating how BDS combines Telugu creative storytelling with performance advertising for each local business category.'
              )}
            </p>
          </div>

          {/* =====================================================================
              CARD 01 (ROW 1): TEXTILE & BRIDAL RETAIL CONCEPT (Image Left, Info Right)
              ===================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-t-2 border-stone-950 pt-10 sm:pt-14">
            
            {/* Image Left */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-stone-900/5 bg-stone-100">
                <img
                  src={asset('assets/campaign-silks.webp')}
                  alt="Textile & Bridal Retail Campaign Concept Visual"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                {/* Campaign Concept Badge */}
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Campaign Concept
                </div>
              </div>
            </div>

            {/* Information Right */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                  MAIN ROAD & KOTIPALLI, RAJAHMUNDRY · RETAIL & FASHION
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight">
                  Textile & Bridal Showroom Concept
                </h3>
                <p className="text-[11px] text-stone-400 font-medium italic">Conceptual example — illustrating BDS execution capability</p>
              </div>

              {/* Illustrative Outcome */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-950 tracking-tight leading-none">
                    High
                  </span>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-blue-600">
                    FOOTFALL LIFT POTENTIAL
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-semibold">Festive video campaign concept · Telugu voiceover reels + Meta Ads</p>
              </div>

              {/* Supporting Approach */}
              <div className="flex items-center gap-6 pt-1 border-t border-stone-200">
                <div>
                  <p className="text-xs text-stone-400 font-semibold uppercase">Approach</p>
                  <p className="text-base font-black text-stone-950">Video + Meta</p>
                </div>
                <div className="border-l border-stone-200 pl-6">
                  <p className="text-xs text-stone-400 font-semibold uppercase">Targeting</p>
                  <p className="text-base font-black text-stone-950">Radius-Based</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {isTe ? (
                  'తెలుగు వాయిస్‌ఓవర్‌తో పట్టు చీరల ప్రమోషన్ రీల్స్ మరియు రాజమండ్రి చుట్టుపక్కల లొకేషన్ టార్గెటెడ్ యాడ్స్‌తో షోరూమ్‌కి వందల మంది కస్టమర్లు రాగలిగే కాన్సెప్ట్ ఫ్రేమ్‌వర్క్.'
                ) : (
                  'A localized video campaign concept featuring bridal pattu sarees with native Telugu voiceovers and radius-targeted Instagram Ads across East Godavari.'
                )}
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-stone-950 hover:text-blue-600 transition-colors group cursor-pointer"
                >
                  <span>{isTe ? 'కాన్సెప్ట్ చూడండి →' : 'View Concept →'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

          {/* =====================================================================
              CARD 02 (ROW 2): HEALTHCARE & CLINICS CONCEPT (Information Left, Image Right)
              ===================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-t border-stone-200 pt-12 sm:pt-16">
            
            {/* Information Left */}
            <div className="order-2 lg:order-1 lg:col-span-5 space-y-5">
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                  DANAVAIPETA, RAJAHMUNDRY · HEALTHCARE & CLINICS
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight">
                  Dental & Healthcare Clinic Concept
                </h3>
                <p className="text-[11px] text-stone-400 font-medium italic">Conceptual example — illustrating BDS execution capability</p>
              </div>

              {/* Illustrative Outcome */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-950 tracking-tight leading-none">
                    3-Pack
                  </span>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-blue-600">
                    GOOGLE MAPS MODEL
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-semibold">Local search & booking concept · Patient acquisition blueprint</p>
              </div>

              {/* Supporting Approach */}
              <div className="flex items-center gap-6 pt-1 border-t border-stone-200">
                <div>
                  <p className="text-xs text-stone-400 font-semibold uppercase">Approach</p>
                  <p className="text-base font-black text-stone-950">Maps SEO</p>
                </div>
                <div className="border-l border-stone-200 pl-6">
                  <p className="text-xs text-stone-400 font-semibold uppercase">Inquiries</p>
                  <p className="text-base font-black text-stone-950">Prompt Triage</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {isTe ? (
                  'గూగుల్ బిజినెస్ ప్రొఫైల్ ఆప్టిమైజేషన్, పేషెంట్ రివ్యూల యాక్సిలరేషన్ మరియు త్వరిత ఎంక్వైరీ రెస్పాన్స్ సిస్టమ్‌తో ప్రతిరోజూ కొత్త పేషెంట్లను ఆకర్షించే కాన్సెప్ట్ బ్లూప్రింట్.'
                ) : (
                  'A blueprint for Google Business Profile takeover, patient review acceleration, and prompt inquiry response handling to drive consistent clinic appointments.'
                )}
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-stone-950 hover:text-blue-600 transition-colors group cursor-pointer"
                >
                  <span>{isTe ? 'కాన్సెప్ట్ చూడండి →' : 'View Concept →'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image Right */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-stone-900/5 bg-stone-100">
                <img
                  src={asset('assets/campaign-dental.webp')}
                  alt="Healthcare & Clinics Campaign Concept Visual"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                {/* Campaign Concept Badge */}
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Campaign Concept
                </div>
              </div>
            </div>

          </div>

          {/* =====================================================================
              CARD 03 (ROW 3): RESIDENTIAL REAL ESTATE CONCEPT (Image Left, Information Right)
              ===================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-t border-stone-200 pt-12 sm:pt-16">
            
            {/* Image Left */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-stone-900/5 bg-stone-100">
                <img
                  src={asset('assets/campaign-villas.webp')}
                  alt="Residential Real Estate Campaign Concept Visual"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                {/* Campaign Concept Badge */}
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Campaign Concept
                </div>
              </div>
            </div>

            {/* Information Right */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                  NH16 CORRIDOR, RAJAHMUNDRY · REAL ESTATE
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight">
                  Gated Villa Community Concept
                </h3>
                <p className="text-[11px] text-stone-400 font-medium italic">Conceptual example — illustrating BDS execution capability</p>
              </div>

              {/* Illustrative Outcome */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-950 tracking-tight leading-none">
                    Verified
                  </span>
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-blue-600">
                    BUYER LEAD MODEL
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-semibold">High-intent lead qualification concept · Drone walkthrough + Meta Ads</p>
              </div>

              {/* Supporting Approach */}
              <div className="flex items-center gap-6 pt-1 border-t border-stone-200">
                <div>
                  <p className="text-xs text-stone-400 font-semibold uppercase">Approach</p>
                  <p className="text-base font-black text-stone-950">Multi-Step Leads</p>
                </div>
                <div className="border-l border-stone-200 pl-6">
                  <p className="text-xs text-stone-400 font-semibold uppercase">Targeting</p>
                  <p className="text-base font-black text-stone-950">NRI + Local</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {isTe ? (
                  'హై-ఇంటెంట్ డ్రోన్ వీడియో యాడ్స్ మరియు బడ్జెట్ క్వాలిఫికేషన్ ఫారమ్‌లతో సీరియస్ హోమ్ బయర్లు మరియు NRI ఇన్వెస్టర్లను అందుకునే కాన్సెప్ట్ ఫ్రేమ్‌వర్క్.'
                ) : (
                  'A performance framework concept using drone walkthrough ads and multi-step budget qualification forms to reach serious home buyers and NRI investors.'
                )}
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-stone-950 hover:text-blue-600 transition-colors group cursor-pointer"
                >
                  <span>{isTe ? 'కాన్సెప్ట్ చూడండి →' : 'View Concept →'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

          {/* Centered Simple CTA */}
          <div className="pt-6 text-center">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-base font-extrabold text-stone-950 hover:text-blue-600 transition-colors group cursor-pointer"
            >
              <span>{isTe ? 'అన్ని కాన్సెప్ట్లు చూడండి →' : 'View All Campaign Concepts →'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          04 — WHAT YOU CAN EXPECT FROM BDS (Capability Pillars)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">

          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
              {isTe ? 'మీకు వాగ్దానం చేస్తున్నాం' : 'OUR PLEDGE TO EVERY CLIENT'}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {isTe ? 'BDS నుండి మీరు ఏమి ఆశించవచ్చు' : 'What You Can Expect from BDS'}
            </h2>
            <p className="text-sm sm:text-base text-stone-400 font-normal leading-relaxed max-w-2xl">
              {isTe
                ? 'మేము సంఖ్యలు చెప్పము — మేము పని చేసి చూపిస్తాం. ప్రతి ఎంగేజ్‌మెంట్‌లో మీరు ఈ మూడు విషయాలు పొందుతారు.'
                : 'We don\'t sell numbers — we deliver outcomes. Every engagement includes three non-negotiable commitments.'}
            </p>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Pillar 1 */}
            <div className="rounded-3xl bg-stone-900 border border-stone-700/60 p-7 space-y-5 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white tracking-tight">
                  {isTe ? 'పారదర్శక ROI ట్రాకింగ్' : 'Transparent ROI Tracking'}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {isTe
                    ? 'ప్రతి రూపాయి ఎక్కడ వెళ్ళిందో మీకు తెలుసు. వారపు రిపోర్ట్‌లు, స్క్రీన్‌షాట్‌లతో సహా — కోల్పోయిన విషయాలు కూడా చెప్తాం.'
                    : 'You know where every rupee goes. Weekly reports with real screenshots — including what didn\'t work and why.'}
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-3xl bg-stone-900 border border-stone-700/60 p-7 space-y-5 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white tracking-tight">
                  {isTe ? 'స్థానిక సాంస్కృతిక అవగాహన' : 'Native Cultural Fluency'}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {isTe
                    ? 'రాజమండ్రి మార్కెట్ మాకు తెలుసు. తెలుగు భాషలో, స్థానిక రుచులకు తగ్గట్టు — Hyderabad agency\'s generic templates కాదు.'
                    : 'We know the Rajahmundry market. Campaigns built in Telugu, for local audiences — not repurposed Hyderabad agency templates.'}
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-3xl bg-stone-900 border border-stone-700/60 p-7 space-y-5 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white tracking-tight">
                  {isTe ? 'ఫౌండర్ నేరుగా పని చేస్తారు' : 'Direct Founder Stewardship'}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {isTe
                    ? 'జూనియర్ టీమ్ కాదు. Bhargav నేరుగా మీ account handle చేస్తారు — మీ ప్రతి call కి, message కి personally respond చేస్తారు.'
                    : 'No junior team hand-off. Bhargav personally runs your account, answers your calls, and owns your results.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — FOUNDER / ABOUT BDS (Executive Leadership & Local Stewardship)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Executive Founder & Stewardship Dossier Card (Pure architectural design, no photo) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-stone-950 via-slate-900 to-stone-950 text-white p-7 sm:p-8 border border-stone-800 shadow-xl overflow-hidden group">
                {/* Ambient glow effect */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Founder Profile Photo & Designation */}
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

                  {/* Location & Agency Tag */}
                  <div className="flex items-center gap-2 text-xs text-stone-300 bg-stone-900/90 rounded-xl px-3.5 py-2.5 border border-stone-800">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">Danavaipeta Headquarters, Rajahmundry, AP</span>
                  </div>

                  {/* Founder's Direct Pledge */}
                  <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800/90 space-y-2">
                    <p className="text-[11px] uppercase tracking-wider font-extrabold text-blue-400">
                      Founder's Direct Pledge
                    </p>
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed italic">
                      &ldquo;Every campaign strategy, Telugu video script, and ad dollar is directed personally with me. Zero account managers, zero outsourced guesswork.&rdquo;
                    </p>
                  </div>

                  {/* 3 Core Stewardship Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-stone-800/80 text-center">
                    <div className="p-2.5 rounded-xl bg-stone-900/60">
                      <p className="text-base font-black text-white">1-on-1</p>
                      <p className="text-[10px] text-stone-400 font-medium">Weekly Reviews</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-900/60">
                      <p className="text-base font-black text-cyan-300">100%</p>
                      <p className="text-[10px] text-stone-400 font-medium">Transparent ROI</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-900/60">
                      <p className="text-base font-black text-emerald-400">Direct</p>
                      <p className="text-[10px] text-stone-400 font-medium">WhatsApp Line</p>
                    </div>
                  </div>

                  {/* Direct Contact Button */}
                  <div className="pt-1">
                    <a
                      href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I would like to discuss digital marketing for my business in Rajahmundry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Connect with Founder Bhargav</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story & Mission Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  {isTe ? 'మా గురించి' : 'ABOUT BDS · LEADERSHIP'}
                </p>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight">
                  {isTe ? (
                    <>రాజమండ్రిలోనే... <br />పూర్తి బాధ్యతతో.</>
                  ) : (
                    <>Built in Rajahmundry.<br />Built with accountability.</>
                  )}
                </h2>
              </div>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
                {isTe ? (
                  'పెద్ద మెట్రో నగరాల ఏజెన్సీల భారీ ఫీజులు లేకుండా... రాజమండ్రి మరియు కోస్తా ఆంధ్ర వ్యాపారులకు అందుబాటు ధరల్లో సరైన డిజిటల్ మార్కెటింగ్ మరియు నిజమైన కస్టమర్లను అందించడమే మా లక్ష్యం.'
                ) : (
                  'BDS was created with a simple idea: regional businesses should not have to choose between expensive metro agencies and cheap, ineffective marketing.'
                )}
              </p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {isTe ? (
                  'డైరెక్ట్ ఫౌండర్ సపోర్ట్, పారదర్శకమైన విధానం, మరియు బిజినెస్కి ఉపయోగపడే నిజమైన రిజల్ట్స్ ఇవ్వడం మా బాధ్యత.'
                ) : (
                  'We believe in direct founder involvement, transparent attribution, native Telugu cultural resonance, and marketing campaigns that produce measurable phone calls, walk-ins, and revenue.'
                )}
              </p>

              {/* 3 Pillars of Difference */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-xs font-bold text-stone-900">Direct Senior Access</h4>
                  <p className="text-[11px] text-stone-500 leading-snug">No account managers or junior interns between you and the strategist.</p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-xs font-bold text-stone-900">Regional Resonance</h4>
                  <p className="text-[11px] text-stone-500 leading-snug">Native Telugu copy and scripts tuned to Godavari shopping behavior.</p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h4 className="text-xs font-bold text-stone-900">Verified Outcomes</h4>
                  <p className="text-[11px] text-stone-500 leading-snug">Tracked lead forms, calls, and showroom walk-ins, not vanity impressions.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-stone-950 hover:text-blue-600 transition-colors group cursor-pointer"
                >
                  <span>{isTe ? 'మా గురించి మరింత తెలుసుకోండి →' : 'Explore Founder Story & Philosophy →'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — FINAL CTA (Clear Direct Action)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0e1626] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7">
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {isTe ? 'మీ బిజినెస్ని మరింత పెంచడానికి సిద్ధంగా ఉన్నారా?' : 'Ready to grow?'}
          </h2>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {isTe ? (
              'మీ బిజినెస్ వివరాలు మాతో పంచుకోండి, సరైన డిజిటల్ ప్లాన్ మేము రూపొందిస్తాం.'
            ) : (
              'Tell us where your business is today. We’ll show you where digital can take it.'
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Final Growth Plan')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>{isTe ? 'ఉచిత Growth Plan పొందండి' : 'Get a Free Growth Plan'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm sm:text-base border border-stone-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{isTe ? 'WhatsApp లో మాట్లాడండి' : 'Chat on WhatsApp'}</span>
            </a>
          </div>

          {/* Supporting Text */}
          <p className="text-xs text-stone-400 tracking-wide pt-1">
            {isTe ? (
              '20-నిమిషాల కన్సల్టేషన్ · ఎటువంటి కమిట్‌మెంట్ లేదు · ఫౌండర్ భార్గవ్‌తో డైరెక్ట్ స్ట్రాటజీ'
            ) : (
              '20-minute consultation · No obligation · Direct strategy with Founder Bhargav'
            )}
          </p>

        </div>
      </section>
    </div>
  );
};
