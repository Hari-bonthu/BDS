import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Send,
  X,
  Share2
} from 'lucide-react';
import { insightsArticlesList } from '../data/insightsData';
import { companyInfo } from '../data/companyData';
import { PageId, InsightArticle, Language } from '../types';
import { WhatsAppLogo } from '../components/common/PlatformLogos';
import { asset } from '../utils/asset';

interface InsightsPageProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

// Map authentic high-res photography to each article
const articleImageMap: Record<string, { src: string; caption: string; captionTe: string }> = {
  'local-seo-guide-rajahmundry-2026': {
    src: asset('assets/service-local-seo.webp'),
    caption: 'Google Maps 3-Pack ranking strategy on Indian commercial high streets',
    captionTe: 'గూగుల్ మ్యాప్స్ 3-ప్యాక్ స్థానిక ర్యాంకింగ్ వ్యూహం'
  },
  'digital-marketing-pricing-andhra-pradesh-2026': {
    src: asset('assets/service-reporting-insights.webp'),
    caption: 'Executive transparency: Spend vs verified local revenue attribution',
    captionTe: 'మార్కెటింగ్ బడ్జెట్ & స్పష్టమైన ROI ఆడిట్'
  },
  'dental-clinic-patient-lead-generation-east-godavari': {
    src: asset('assets/campaign-dental.webp'),
    caption: 'Danavaipeta Dental & Healthcare: Patient inquiry acquisition blueprint',
    captionTe: 'దానవాయిపేట డెంటల్ & హెల్త్‌కేర్: పేషెంట్ ఎంక్వైరీ అక్విజిషన్ బ్లూప్రింట్'
  },
  'saree-jewelry-showroom-telugu-reels-strategy': {
    src: asset('assets/service-content-creation.webp'),
    caption: 'Telugu festive creative direction: High-conversion pattu saree campaign',
    captionTe: 'తెలుగు పండుగల క్రియేటివ్ డైరెక్షన్ & పట్టు చీరల క్యాంపెయిన్'
  },
  'meta-ads-vs-google-ads-local-business-andhra-pradesh': {
    src: asset('assets/service-video-ads.webp'),
    caption: 'Commercial showroom production: Targeted vertical video ad shoots',
    captionTe: 'షోరూమ్ షూట్: టార్గెటెడ్ వర్టికల్ రీల్స్ & యాడ్స్'
  }
};

export const InsightsPage: React.FC<InsightsPageProps> = ({
  language = 'en',
  onNavigate,
  onOpenQuoteModal
}) => {
  const isTe = language === 'te';
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const featuredArticle = insightsArticlesList[0];
  const featuredImg = articleImageMap[featuredArticle.slug] || {
    src: './assets/service-local-seo.webp',
    caption: 'Google Maps 3-Pack ranking strategy in Rajahmundry & Coastal AP',
    captionTe: 'గూగుల్ మ్యాప్స్ 3-ప్యాక్ స్థానిక ర్యాంకింగ్ వ్యూహం'
  };

  return (
    <div id="bds-insights-hub" className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          01 — EDITORIAL PUBLICATION HERO (Card-Free, Authoritative Typography)
          ========================================================================= */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              BDS STRATEGY JOURNAL
            </span>
            <span className="text-stone-300">/</span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              {isTe ? 'రాజమండ్రి & కోస్తా ఆంధ్ర' : 'Rajahmundry & Coastal Andhra'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-tight max-w-4xl">
            {isTe ? (
              <>కోస్తా ఆంధ్ర వ్యాపారాల కోసం ఆచరణాత్మక డిజిటల్ వ్యూహాలు.</>
            ) : (
              <>Field-tested digital marketing playbooks for Coastal Andhra.</>
            )}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-3xl pt-1">
            {isTe
              ? 'ఎటువంటి పనికిరాని సిద్ధాంతాలు లేకుండా, ఫౌండర్ భార్గవ్ స్వయంగా రాసిన వ్యూహాత్మక గైడ్‌లు. షోరూమ్‌లు, క్లినిక్‌లు మరియు స్థానిక సంస్థలు నిజమైన కస్టమర్ల రాకను ఎలా పెంచుకోవాలో ఇక్కడ తెలుసుకోండి.'
              : 'Practical, no-fluff marketing strategies written by Founder Bhargav. Learn how local showrooms, clinics, and consumer businesses generate consistent footfalls, booked consultations, and verified ROAS.'}
          </p>

        </div>
      </section>

      {/* =========================================================================
          02 — FEATURED STORY (Card-Free Editorial Split Layout)
          ========================================================================= */}
      {!activeArticle && (
        <section className="py-12 sm:py-16 border-b border-stone-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Story Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                    {isTe ? 'ప్రధాన కథనం' : 'FEATURED PLAYBOOK'}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-400">
                    · {featuredArticle.category}
                  </span>
                  <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="text-2xl sm:text-4xl font-black text-stone-950 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                >
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
                  {featuredArticle.summary}
                </p>

                {/* Key Strategic Highlights */}
                <div className="pt-2 space-y-1.5 border-t border-stone-100">
                  {featuredArticle.keyTakeaways.slice(0, 2).map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-950 hover:bg-blue-600 text-white font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    <span>{isTe ? 'పూర్తి గైడ్ చదవండి' : 'Read Full Playbook'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: High-Definition Photography */}
              <div className="lg:col-span-5 space-y-2">
                <div
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="overflow-hidden rounded-2xl border border-stone-200/90 shadow-sm aspect-[4/3] bg-stone-100 cursor-pointer group"
                >
                  <img
                    src={featuredImg.src}
                    alt={featuredArticle.title}
                    width={560}
                    height={420}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <p className="text-[11px] font-mono text-stone-500 flex items-center justify-between px-1">
                  <span>{isTe ? featuredImg.captionTe : featuredImg.caption}</span>
                  <span className="text-stone-400 shrink-0 ml-2">BDS Guide</span>
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          03 — EDITORIAL ARTICLES LIST (Card-Free, Hairline Divided Layout)
          ========================================================================= */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="divide-y divide-stone-200">
            {insightsArticlesList.map((article, idx) => {
              const artImg = articleImageMap[article.slug] || {
                src: './assets/service-local-seo.webp',
                caption: article.title,
                captionTe: article.title
              };

              return (
                <article
                  key={article.id}
                  id={`article-${article.slug}`}
                  className="py-10 first:pt-0 last:pb-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    
                    {/* Left: Article Narrative */}
                    <div className="md:col-span-8 space-y-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                          {article.category}
                        </span>
                        <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3
                        onClick={() => setActiveArticle(article)}
                        className="text-xl sm:text-2xl font-black text-stone-950 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                      >
                        {article.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl line-clamp-2">
                        {article.summary}
                      </p>

                      {/* Key highlights snapshot */}
                      <div className="pt-2 space-y-1">
                        {article.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="truncate">{takeaway}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-3 flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setActiveArticle(article)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group"
                        >
                          <span>{isTe ? 'పూర్తి గైడ్ చదవండి' : 'Read Full Playbook'}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onOpenQuoteModal(article.title)}
                          className="text-[11px] font-mono font-bold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                        >
                          {isTe ? 'దీనిని వర్తింపజేయండి →' : 'Apply To My Business →'}
                        </button>
                      </div>
                    </div>

                    {/* Right: Crisp Thumbnail Image */}
                    <div className="md:col-span-4 hidden md:block">
                      <div
                        onClick={() => setActiveArticle(article)}
                        className="overflow-hidden rounded-2xl border border-stone-200/90 shadow-2xs aspect-[16/10] bg-stone-100 cursor-pointer group"
                      >
                        <img
                          src={artImg.src}
                          alt={article.title}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          05 — FULL ARTICLE READING VIEW (Editorial Publication Format)
          ========================================================================= */}
      {activeArticle && (
        <div
          id="insight-editorial-reader-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-300 overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-center justify-between gap-4 bg-[#fafaf9]">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  {activeArticle.category}
                </span>
                <span className="text-stone-400">· {activeArticle.readTime}</span>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-8">
              
              {/* Title */}
              <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight leading-tight">
                {activeArticle.title}
              </h2>

              {/* Summary Callout with Clean Rounded Container */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;{activeArticle.summary}&rdquo;
              </div>

              {/* Visual Photography Embed */}
              {articleImageMap[activeArticle.slug] && (
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-2xl border border-stone-200/90 shadow-sm aspect-[16/9] bg-stone-100">
                    <img
                      src={articleImageMap[activeArticle.slug].src}
                      alt={activeArticle.title}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] font-mono text-stone-500 px-1">
                    {isTe ? articleImageMap[activeArticle.slug].captionTe : articleImageMap[activeArticle.slug].caption}
                  </p>
                </div>
              )}

              {/* Key Takeaways */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                  {isTe ? 'ముఖ్య ముఖ్యాంశాలు (KEY TAKEAWAYS)' : 'STRATEGIC TAKEAWAYS'}
                </h4>
                <div className="space-y-2">
                  {activeArticle.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Content Sections */}
              <div className="space-y-6 pt-4 border-t border-stone-200">
                {activeArticle.contentSections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-stone-950">
                      {sec.heading}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Box Inside Modal */}
              <div className="p-6 rounded-2xl bg-stone-950 text-white space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    {isTe ? 'అమలు చేయండి' : 'EXECUTION SUPPORT'}
                  </p>
                  <p className="text-base font-bold text-white">
                    {activeArticle.callToAction}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      const title = activeArticle.title;
                      setActiveArticle(null);
                      onOpenQuoteModal(title);
                    }}
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
                  >
                    <span>{isTe ? 'కస్టమ్ ప్లాన్ పొందండి' : 'Get Implementation Plan'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I read your article "' + activeArticle.title + '" and want to apply it to my business.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppLogo className="w-4 h-4 shrink-0" />
                    <span>{isTe ? 'వాట్సాప్‌లో మాట్లాడండి' : 'Chat on WhatsApp'}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          06 — FINAL CONSULTATION CTA (Matching Homepage Aesthetic, Card-Free)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-8">
          
          {/* Founder Visual Seal */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-stone-300 shadow-md bg-stone-900">
                <img
                  src={asset('assets/Bhargav_Headshot.png')}
                  alt="Bhargav - Founder, BDS"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" title="Direct Access" />
            </div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Bhargav · Founder, BDS
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {isTe ? 'కస్టమ్ స్ట్రాటజీ' : 'BESPOKE ROADMAP'}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              {isTe ? (
                <>మీ వ్యాపారానికి సరిపోయే మార్కెటింగ్ ప్లాన్ కావాలా?</>
              ) : (
                <>Want a custom growth roadmap built for your business?</>
              )}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {isTe
                ? 'ఎటువంటి అమ్మకాల ఒత్తిడి ఉండదు. మీ ప్రస్తుత సోషల్ మీడియా, గూగుల్ మ్యాప్స్ మరియు యాడ్ ఖర్చులను విశ్లేషించి సరైన మార్గాన్ని ఉచితంగా సూచిస్తాము.'
                : 'Skip the trial-and-error. Direct consultation with Founder Bhargav to audit your local presence and build an accountable execution roadmap.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Custom Strategy Roadmap')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-stone-950 hover:bg-blue-600 text-white font-extrabold text-sm transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isTe ? 'ఉచిత స్ట్రాటజీ సెషన్ బుక్ చేసుకోండి' : 'Book Free Strategy Session'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hello%20Bhargav,%20I%20am%20reading%20the%20BDS%20Insights%20and%20would%20like%20to%20discuss%20a%20strategy%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-stone-300 hover:border-stone-900 text-stone-950 font-extrabold text-sm transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <WhatsAppLogo className="w-4 h-4 shrink-0" />
              <span>{isTe ? 'వాట్సాప్‌లో మాట్లాడండి' : `Chat on WhatsApp: ${companyInfo.phoneDisplay}`}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
