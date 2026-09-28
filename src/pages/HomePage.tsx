import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  TrendingUp,
  User,
  Sparkles,
  CheckCircle2
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
import { NumberTicker } from '@/components/ui/number-ticker';
import { Marquee } from '@/components/ui/marquee';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const parseMetricValue = (val: string) => {
  const match = val.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const prefix = match[1] || '';
  const num = parseFloat(match[2]);
  const suffix = match[3] || '';
  const decimalPlaces = match[2].includes('.') ? match[2].split('.')[1].length : 0;
  return { prefix, num, suffix, decimalPlaces };
};

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
                    రాజమండ్రిలోని లోకల్ బిజినెస్‌ల కోసం <br className="hidden sm:inline" />
                    <span className="text-blue-600">డిజిటల్ మార్కెటింగ్ ఏజెన్సీ</span>.
                  </>
                ) : (
                  <>
                    <span className="text-blue-600">Digital Marketing Agency</span> <br className="hidden sm:inline" />
                    in Rajahmundry built for <br className="hidden sm:inline" />
                    growing local businesses.
                  </>
                )}
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
                {isTe ? (
                  'భార్గవ్ డిజిటల్ సొల్యూషన్స్ (BDS): రాజమండ్రి మరియు కోస్తా ఆంధ్ర వ్యాపారాలకు Google Maps 3-Pack, తెలుగు రీల్స్, మరియు పెర్ఫార్మెన్స్ యాడ్స్ ద్వారా నిజమైన కస్టమర్లను తీసుకువస్తాము.'
                ) : (
                  'Bhargav Digital Solutions (BDS) is the results-driven digital marketing agency in Rajahmundry helping local retail showrooms, healthcare clinics, and service firms grow through Google Maps 3-Pack SEO, high-converting Telugu Reels, and ROI-focused Meta Ads.'
                )}
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <ShimmerButton
                  onClick={() => onOpenQuoteModal('Growth Plan')}
                  borderRadius="12px"
                  shimmerDuration="2.5s"
                  background="linear-gradient(135deg, #0247fe 0%, #0b63f6 100%)"
                  shimmerColor="#ffffff"
                  className="px-7 py-3.5 font-bold text-sm sm:text-base cursor-pointer shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 text-white"
                >
                  <span>{isTe ? 'ఉచిత Growth Plan పొందండి' : 'Get a Free Growth Plan'}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </ShimmerButton>

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

                    {/* Single Large Dominant Result with Kinetic Ticker */}
                    <div className="pt-1 flex items-baseline gap-2.5">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                        {(() => {
                          const parsed = parseMetricValue(currentCampaign.resultNumber);
                          return parsed ? (
                            <NumberTicker
                              key={currentCampaign.resultNumber}
                              value={parsed.num}
                              prefix={parsed.prefix}
                              suffix={parsed.suffix}
                              decimalPlaces={parsed.decimalPlaces}
                            />
                          ) : (
                            currentCampaign.resultNumber
                          );
                        })()}
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

        {/* Slow, Elegant Continuous Client Names Marquee with Edge Gradient Masks */}
        <div className="relative w-full overflow-hidden">
          <Marquee pauseOnHover repeat={3} duration={32} gradient gradientColor="from-white">
            {trustedClients.map((client, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0 group px-3">
                <span className="text-[11px] font-mono font-bold tracking-widest text-stone-400 group-hover:text-blue-600 transition-colors uppercase border-b border-stone-300 pb-0.5">
                  {client.mark}
                </span>
                <span className="text-sm sm:text-base font-bold text-stone-800 group-hover:text-blue-600 tracking-tight transition-colors whitespace-nowrap">
                  {client.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-6 shrink-0" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* =========================================================================
          02 — REGIONAL SERVICES & GROWTH SYSTEMS (Rajahmundry & East Godavari Hub)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{isTe ? 'రాజమండ్రి & ఈస్ట్ గోదావరి సర్వీసెస్' : 'LOCAL GROWTH SYSTEMS • RAJAHMUNDRY & EAST GODAVARI'}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
                {isTe ? (
                  <>రాజమండ్రిలోని లోకల్ బిజినెస్‌ల కోసం ప్రత్యేక డిజిటల్ మార్కెటింగ్ సర్వీసులు.</>
                ) : (
                  <>Tailored Digital Marketing Services for Businesses in Rajahmundry.</>
                )}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 font-medium leading-relaxed max-w-2xl">
                {isTe
                  ? 'దానవాయిపేట, మెయిన్ రోడ్ నుండి కడియం, కాకినాడ వరకు — రాజమండ్రి పరిసరాల్లోని రిటైల్ షోరూమ్‌లు, హాస్పిటల్స్, సర్వీస్ బిజినెస్‌లకు నేరుగా కస్టమర్ల వాకింగ్స్ మరియు ఫోన్ కాల్స్ తీసుకొచ్చే గ్రోత్ సిస్టమ్స్.'
                  : 'From high-intent Google Maps searches in Danavaipeta to viral Telugu Reels across Godavari districts, we engineer local visibility that converts directly into store footfall and customer inquiries.'}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="/services/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 text-white text-xs sm:text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm group"
              >
                <span>{isTe ? 'అన్ని సర్వీసులు చూడండి' : 'View All 8 Services'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 4 Featured Strategic Service Cards for Rajahmundry Businesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: Local SEO & Google Maps */}
            <div className="group relative rounded-2xl border border-stone-200/90 bg-stone-50/60 hover:bg-white hover:border-blue-300 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <GoogleMapsLogo className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-mono font-bold text-stone-700">Google 3-Pack SEO</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600">01</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    {isTe ? 'లోకల్ SEO & గూగుల్ మ్యాప్స్ ర్యాంకింగ్' : 'Local SEO & Google Maps 3-Pack Ranking'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {isTe
                      ? 'రాజమండ్రిలో కస్టమర్లు "near me" లేదా మీ సర్వీస్ కోసం వెతికినప్పుడు గూగుల్ మ్యాప్స్ టాప్ 3 లో కనిపించేలా చేస్తాం. GBP ఆప్టిమైజేషన్, కీవర్డ్స్, రివ్యూ సిస్టమ్స్.'
                      : 'Capture high-intent local customers actively searching in Rajahmundry. We optimize your Google Business Profile, geo-tag updates, build local citations, and accelerate review velocity to rank in the Google Maps 3-Pack.'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    Danavaipeta & Main Road
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    Kakinada & East Godavari
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700">
                    High-Intent Phone Calls
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200/60 mt-6">
                <a
                  href="/services/local-seo/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('local-seo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>{isTe ? 'లోకల్ SEO సర్వీసులు చూడండి →' : 'Explore Rajahmundry Local SEO →'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 2: Short-Form Video & Reels */}
            <div className="group relative rounded-2xl border border-stone-200/90 bg-stone-50/60 hover:bg-white hover:border-blue-300 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <ReelsLogo className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-mono font-bold text-stone-700">Telugu Video Production</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600">02</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    {isTe ? 'షార్ట్-ఫార్మ్ వీడియోలు & తెలుగు రీల్స్' : 'Short-Form Video Ads & Telugu Reels'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {isTe
                      ? 'మీ షోరూమ్ లేదా క్లినిక్‌లో డైరెక్ట్ ఆన్-లొకేషన్ షూట్స్. స్థానిక ప్రజలకు కనెక్ట్ అయ్యే సహజమైన తెలుగు డైలాగ్స్ మరియు ఆకట్టుకునే వీడియో ఎడిటింగ్.'
                      : 'Stop the scroll with high-retention 4K video reels scripted in authentic native Telugu slang. We shoot on-location inside your store, restaurant, or clinic across Rajahmundry to showcase products and drive viral regional reach.'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    On-Location 4K Shoots
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    Native Telugu Scripting
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700">
                    Viral Instagram Reach
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200/60 mt-6">
                <a
                  href="/services/short-form-video-ads/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('short-form-video-ads');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>{isTe ? 'వీడియో ప్రొడక్షన్ వివరాలు →' : 'Explore Short-Form Video Ads →'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 3: Creative Content & Bilingual Design */}
            <div className="group relative rounded-2xl border border-stone-200/90 bg-stone-50/60 hover:bg-white hover:border-blue-300 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <CreativesLogo className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-mono font-bold text-stone-700">Bilingual Creatives</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600">03</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    {isTe ? 'కంటెంట్ క్రియేషన్ & క్యాంపెయిన్ పోస్టర్స్' : 'Content Creation & Bilingual Ad Creatives'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {isTe
                      ? 'పండుగ ఆఫర్లు, బ్రైడల్ కలెక్షన్స్, మెడికల్ క్యాంప్స్‌కి తగ్గట్టుగా ప్రీమియం తెలుగు & ఇంగ్లీష్ సోషల్ మీడియా పోస్టర్స్ మరియు బ్యానర్స్.'
                      : 'Stop looking like an amateur online. We produce high-converting bilingual ad banners, festive seasonal promotions, and carousel creatives specifically designed for Godavari district audiences and retail buying behaviors.'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    Festive Promotions
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    Telugu Copywriting
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700">
                    High Brand Recall
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200/60 mt-6">
                <a
                  href="/services/content-creation/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('content-creation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>{isTe ? 'కంటెంట్ సర్వీసులు చూడండి →' : 'Explore Creative Content Services →'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 4: Social Media Management & Meta Ads */}
            <div className="group relative rounded-2xl border border-stone-200/90 bg-stone-50/60 hover:bg-white hover:border-blue-300 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <MetaLogo className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-mono font-bold text-stone-700">Meta Ads & Handling</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600">04</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    {isTe ? 'సోషల్ మీడియా మేనేజ్‌మెంట్ & లీడ్ జనరేషన్' : 'Social Media Management & Paid Ads'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {isTe
                      ? 'ప్రతిరోజూ పోస్టింగ్‌లు, కస్టమర్ కామెంట్స్ రిప్లైలు మరియు మెటా ప్రకటనల ద్వారా నేరుగా మీ WhatsApp కి కస్టమర్ ఎంక్వైరీలను రప్పించడం.'
                      : 'Full-service profile management, comment handling, and hyper-targeted Meta ad campaigns restricted to a 15–30km radius around Rajahmundry. Zero wasted ad spend, routing hot leads directly into your WhatsApp inbox.'}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    WhatsApp Lead Routing
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700">
                    15–30km Geo-Fencing
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700">
                    Transparent Ad Spend
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200/60 mt-6">
                <a
                  href="/services/social-media-management/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('social-media-management');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>{isTe ? 'సోషల్ మీడియా వివరాలు →' : 'Explore Social Media Management →'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Secondary Directory Bar: Deep Linking Supporting Capabilities */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                {isTe ? 'అదనపు సేవలు:' : 'Additional Specialized Capabilities:'}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold">
              <a
                href="/services/platform-coverage/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('platform-coverage');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                Platform Coverage
              </a>
              <a
                href="/services/community-management/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('community-management');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                Community & WhatsApp Management
              </a>
              <a
                href="/services/reporting-insights/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('reporting-insights');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                Weekly ROI Reporting
              </a>
              <a
                href="/services/content-operations/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('content-operations');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
              >
                Content Operations
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          03 — SELECTED WORK (3 Equal Cards: Alternating Zigzag Editorial Layout)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-18">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>03 / {isTe ? 'క్యాంపెయిన్ కాన్సెప్ట్స్' : 'SAMPLE CREATIVE DIRECTION'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              {isTe ? 'క్యాంపెయిన్ కాన్సెప్ట్స్ & క్రియేటివ్ డైరెక్షన్' : 'Sample Creative Direction & Campaign Execution'}
            </h2>
            <p className="text-sm sm:text-base text-stone-500 font-normal leading-relaxed">
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
          <div className="group/concept grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-t border-stone-200/90 pt-10 sm:pt-14">
            
            {/* Image Left */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-stone-900/5 bg-stone-100 border border-stone-200/80 transition-all duration-500 group-hover/concept:shadow-xl group-hover/concept:border-blue-200/60">
                <img
                  src={asset('assets/campaign-silks.webp')}
                  alt="Textile & Bridal Retail Campaign Concept Visual"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/concept:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Campaign Concept Badge */}
                <div className="absolute top-3.5 left-3.5 bg-stone-950/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Campaign Concept</span>
                </div>
              </div>
            </div>

            {/* Information Right */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  MAIN ROAD & KOTIPALLI, RAJAHMUNDRY · RETAIL & FASHION
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight tracking-tight">
                  Textile & Bridal Showroom Concept
                </h3>
                <p className="text-[11px] text-stone-400 font-medium italic">Conceptual example — illustrating BDS execution capability</p>
              </div>

              {/* Illustrative Outcome Highlight Box */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight leading-none">
                    High
                  </span>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    FOOTFALL LIFT POTENTIAL
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-medium">Festive video campaign concept · Telugu voiceover reels + Meta Ads</p>
              </div>

              {/* Supporting Approach Telemetry Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-stone-200/70 shadow-2xs">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">Approach</p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">Video + Meta</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200/70 shadow-2xs">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">Targeting</p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">Radius-Based</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {isTe ? (
                  'తెలుగు వాయిస్‌ఓవర్‌తో పట్టు చీరల ప్రమోషన్ రీల్స్ మరియు రాజమండ్రి చుట్టుపక్కల లొకేషన్ టార్గెటెడ్ యాడ్స్‌తో షోరూమ్‌కి వందల మంది కస్టమర్లు రాగలిగే కాన్సెప్ట్ ఫ్రేమ్‌వర్క్.'
                ) : (
                  'A localized video campaign concept featuring bridal pattu sarees with native Telugu voiceovers and radius-targeted Instagram Ads across East Godavari.'
                )}
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs hover:shadow-md group/btn cursor-pointer"
                >
                  <span>{isTe ? 'కాన్సెప్ట్ చూడండి' : 'View Concept'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

          {/* =====================================================================
              CARD 02 (ROW 2): HEALTHCARE & CLINICS CONCEPT (Information Left, Image Right)
              ===================================================================== */}
          <div className="group/concept grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-t border-stone-200/90 pt-12 sm:pt-16">
            
            {/* Information Left */}
            <div className="order-2 lg:order-1 lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  DANAVAIPETA, RAJAHMUNDRY · HEALTHCARE & CLINICS
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight tracking-tight">
                  Dental & Healthcare Clinic Concept
                </h3>
                <p className="text-[11px] text-stone-400 font-medium italic">Conceptual example — illustrating BDS execution capability</p>
              </div>

              {/* Illustrative Outcome Highlight Box */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight leading-none">
                    3-Pack
                  </span>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    GOOGLE MAPS MODEL
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-semibold">Local search & booking concept · Patient acquisition blueprint</p>
              </div>

              {/* Supporting Approach Telemetry Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-stone-200/70 shadow-2xs">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">Approach</p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">Maps SEO</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200/70 shadow-2xs">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">Inquiries</p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">Prompt Triage</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {isTe ? (
                  'గూగుల్ బిజినెస్ ప్రొఫైల్ ఆప్టిమైజేషన్, పేషెంట్ రివ్యూల యాక్సిలరేషన్ మరియు త్వరిత ఎంక్వైరీ రెస్పాన్స్ సిస్టమ్‌తో ప్రతిరోజూ కొత్త పేషెంట్లను ఆకర్షించే కాన్సెప్ట్ బ్లూప్రింట్.'
                ) : (
                  'A blueprint for Google Business Profile takeover, patient review acceleration, and prompt inquiry response handling to drive consistent clinic appointments.'
                )}
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs hover:shadow-md group/btn cursor-pointer"
                >
                  <span>{isTe ? 'కాన్సెప్ట్ చూడండి' : 'View Concept'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image Right */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-stone-900/5 bg-stone-100 border border-stone-200/80 transition-all duration-500 group-hover/concept:shadow-xl group-hover/concept:border-blue-200/60">
                <img
                  src={asset('assets/campaign-dental.webp')}
                  alt="Healthcare & Clinics Campaign Concept Visual"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/concept:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Campaign Concept Badge */}
                <div className="absolute top-3.5 left-3.5 bg-stone-950/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Campaign Concept</span>
                </div>
              </div>
            </div>

          </div>

          {/* =====================================================================
              CARD 03 (ROW 3): RESIDENTIAL REAL ESTATE CONCEPT (Image Left, Information Right)
              ===================================================================== */}
          <div className="group/concept grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-t border-stone-200/90 pt-12 sm:pt-16">
            
            {/* Image Left */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-stone-900/5 bg-stone-100 border border-stone-200/80 transition-all duration-500 group-hover/concept:shadow-xl group-hover/concept:border-blue-200/60">
                <img
                  src={asset('assets/campaign-villas.webp')}
                  alt="Residential Real Estate Campaign Concept Visual"
                  width={640}
                  height={400}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/concept:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Campaign Concept Badge */}
                <div className="absolute top-3.5 left-3.5 bg-stone-950/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Campaign Concept</span>
                </div>
              </div>
            </div>

            {/* Information Right */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  NH16 CORRIDOR, RAJAHMUNDRY · REAL ESTATE
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-950 leading-tight tracking-tight">
                  Gated Villa Community Concept
                </h3>
                <p className="text-[11px] text-stone-400 font-medium italic">Conceptual example — illustrating BDS execution capability</p>
              </div>

              {/* Illustrative Outcome Highlight Box */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight leading-none">
                    Verified
                  </span>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    BUYER LEAD MODEL
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-semibold">High-intent lead qualification concept · Drone walkthrough + Meta Ads</p>
              </div>

              {/* Supporting Approach Telemetry Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-stone-200/70 shadow-2xs">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">Approach</p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">Multi-Step Leads</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200/70 shadow-2xs">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">Targeting</p>
                  <p className="text-sm font-bold text-stone-900 mt-0.5">NRI + Local</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {isTe ? (
                  'హై-ఇంటెంట్ డ్రోన్ వీడియో యాడ్స్ మరియు బడ్జెట్ క్వాలిఫికేషన్ ఫారమ్‌లతో సీరియస్ హోమ్ బయర్లు మరియు NRI ఇన్వెస్టర్లను అందుకునే కాన్సెప్ట్ ఫ్రేమ్‌వర్క్.'
                ) : (
                  'A performance framework concept using drone walkthrough ads and multi-step budget qualification forms to reach serious home buyers and NRI investors.'
                )}
              </p>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs hover:shadow-md group/btn cursor-pointer"
                >
                  <span>{isTe ? 'కాన్సెప్ట్ చూడండి' : 'View Concept'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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

          {/* 3 Pillar Cards with Cursor Spotlight Glow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Pillar 1 */}
            <CardSpotlight contentClassName="space-y-5">
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
            </CardSpotlight>

            {/* Pillar 2 */}
            <CardSpotlight contentClassName="space-y-5">
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
            </CardSpotlight>

            {/* Pillar 3 */}
            <CardSpotlight contentClassName="space-y-5">
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
            </CardSpotlight>

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
                        <picture>
                          <source srcSet={asset('assets/Bhargav_Headshot.webp')} type="image/webp" />
                          <img
                            src={asset('assets/Bhargav_Headshot.png')}
                            alt="Bhargav - Founder & Lead Growth Strategist"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover object-center"
                            loading="eager"
                            decoding="async"
                          />
                        </picture>
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
                  <h3 className="text-xs font-bold text-stone-900">Direct Senior Access</h3>
                  <p className="text-[11px] text-stone-500 leading-snug">No account managers or junior interns between you and the strategist.</p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h3 className="text-xs font-bold text-stone-900">Regional Resonance</h3>
                  <p className="text-[11px] text-stone-500 leading-snug">Native Telugu copy and scripts tuned to Godavari shopping behavior.</p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h3 className="text-xs font-bold text-stone-900">Verified Outcomes</h3>
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
          05.5 — AI SEARCH CITABILITY & FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Agency Overview &amp; Pricing Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Essential Answers About Digital Marketing in Rajahmundry
            </h2>
            <p className="text-sm text-stone-500 max-w-xl mx-auto">
              Direct, transparent information about BDS agency services, localized capabilities, and tailored growth partnerships.
            </p>
          </div>

          <div className="space-y-8 divide-y divide-stone-200">
            
            {/* Passage 1: Brand Entity Definition */}
            <div className="pt-8 first:pt-0 space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight">
                What Services Does Bhargav Digital Solutions Provide in Rajahmundry?
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Bhargav Digital Solutions (BDS) is a regional digital marketing and growth marketing agency headquartered in Danavaipeta, Rajahmundry, Andhra Pradesh. The agency specializes in hyper-local customer acquisition for small-to-medium businesses across the East Godavari region, including Kakinada, Amalapuram, and Rajahmundry. BDS provides four core services: <a href="/services/local-seo/" onClick={(e) => { e.preventDefault(); onNavigate('local-seo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 font-semibold underline hover:text-blue-700">Local SEO and Google Maps 3-Pack ranking optimization</a>; end-to-end <a href="/services/short-form-video-ads/" onClick={(e) => { e.preventDefault(); onNavigate('short-form-video-ads'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 font-semibold underline hover:text-blue-700">short-form video production</a> specializing in high-converting Telugu-language Instagram Reels and YouTube Shorts; full-funnel <a href="/services/social-media-management/" onClick={(e) => { e.preventDefault(); onNavigate('social-media-management'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 font-semibold underline hover:text-blue-700">Meta and Google advertising management</a>; and direct WhatsApp lead generation pipelines. Unlike traditional metro advertising agencies that rely on outsourced talent and generic English ad templates, Bhargav Digital Solutions is founder-led by Bhargav Daliparthi, providing direct strategy, native Telugu cultural copywriting, transparent weekly ROI reporting, and custom pricing tailored upon consulting and client requirements. All campaigns are engineered to convert digital visibility into physical footfall and direct phone inquiries.
              </p>
            </div>

            {/* Passage 4: Custom Pricing Structure */}
            <div className="pt-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight">
                How Is Digital Marketing Pricing Structured at Bhargav Digital Solutions?
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Digital marketing engagements at Bhargav Digital Solutions are structured on a custom basis following an in-depth requirement analysis and consulting session. Rather than enforcing rigid package rates, BDS assesses the business's specific growth stage, target geographic radius across Rajahmundry and East Godavari, video production cadence, and campaign objectives. Custom proposals can encompass Google Business Profile and <a href="/services/local-seo/" onClick={(e) => { e.preventDefault(); onNavigate('local-seo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 font-semibold underline hover:text-blue-700">Local SEO optimization</a>, on-location 4K Telugu <a href="/services/short-form-video-ads/" onClick={(e) => { e.preventDefault(); onNavigate('short-form-video-ads'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 font-semibold underline hover:text-blue-700">video reel production</a>, <a href="/services/content-creation/" onClick={(e) => { e.preventDefault(); onNavigate('content-creation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 font-semibold underline hover:text-blue-700">creative campaign assets</a>, Meta and Google paid ad campaigns, or full-funnel WhatsApp lead generation. Every client agreement is month-to-month with zero forced annual contracts and zero agency markups on direct ad spend. Business owners receive complete transparency, dedicated founder oversight from Bhargav Daliparthi, and measurable return on investment tailored directly to their operational budget.
              </p>
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
            <ShimmerButton
              onClick={() => onOpenQuoteModal('Final Growth Plan')}
              borderRadius="12px"
              shimmerDuration="2.5s"
              background="linear-gradient(135deg, #0247fe 0%, #0b63f6 100%)"
              shimmerColor="#ffffff"
              className="w-full sm:w-auto px-8 py-3.5 font-bold text-sm sm:text-base cursor-pointer shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 text-white"
            >
              <span>{isTe ? 'ఉచిత Growth Plan పొందండి' : 'Get a Free Growth Plan'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </ShimmerButton>

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
