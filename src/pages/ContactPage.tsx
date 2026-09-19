import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Building,
  User,
  ShieldCheck,
  Navigation,
  Compass,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo, regionalCoverageAreas } from '../data/companyData';
import { servicesList } from '../data/servicesData';
import { CTASection } from '../components/common/CTASection';
import { submitLead } from '../services/leadService';
import { WhatsAppLogo } from '../components/common/PlatformLogos';
import { Language } from '../types';

interface ContactPageProps {
  language?: Language;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language = 'en', onOpenQuoteModal }) => {
  const isTe = language === 'te';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: 'short-form-video-ads',
    budget: 'Growth Scale (Reels, Meta Ads & Local SEO)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [botcheck, setBotcheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const res = await submitLead({
      formType: 'contact_form',
      name: formData.name,
      businessName: formData.businessName,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      budget: formData.budget,
      notes: formData.message,
      botcheck: botcheck ? 'true' : undefined
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    } else {
      setErrorMessage(
        res.error || 'Could not deliver online inquiry. Please connect with Bhargav directly on WhatsApp below.'
      );
    }
  };

  const contactWaMsg = encodeURIComponent(
    `*Direct Contact Inquiry from BDS Website*\n\n` +
    `• *Name:* ${formData.name}\n` +
    `• *Business:* ${formData.businessName}\n` +
    `• *Phone:* ${formData.phone}\n` +
    (formData.email ? `• *Email:* ${formData.email}\n` : '') +
    `• *Service:* ${formData.service}\n` +
    `• *Budget:* ${formData.budget}\n` +
    (formData.message ? `• *Message:* ${formData.message}\n` : '') +
    `• *Region:* Rajahmundry & East Godavari, AP`
  );
  const contactWaUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${contactWaMsg}`;

  return (
    <div id="bds-contact-page" className="space-y-16 sm:space-y-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isTe ? (
              <>
                రాజమండ్రిలో మీ వ్యాపారాన్ని{' '}
                <span className="text-blue-600">మరింత పెంచుకుందాం</span>
              </>
            ) : (
              <>
                Let&apos;s Grow Your Business in{' '}
                <span className="text-blue-600">Rajahmundry & Beyond</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {isTe
              ? 'డిజిటల్ మార్కెటింగ్ ప్యాకేజీల గురించి వివరాలు కావాలన్నా లేదా మీ వ్యాపారానికి సరిపోయే ప్రత్యేక గ్రోత్ ప్లాన్ రూపొందించాలన్నా... ఫౌండర్ భార్గవ్‌ను నేరుగా సంప్రదించండి.'
              : 'Have questions about digital marketing packages or want a tailored growth strategy? Contact Founder Bhargav directly.'}
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS & FORM GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Agency Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Official Agency Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Direct Contact Details
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                We believe in complete transparency and fast, reliable communication.
              </p>
            </div>

            {/* Direct Phone Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:border-blue-300 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone & Direct Call
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-lg font-extrabold text-blue-900 hover:text-blue-600 transition-colors block"
                >
                  {companyInfo.phoneDisplay}
                </a>
                <p className="text-xs text-slate-500">
                  Direct line to Founder Bhargav (9 AM – 8 PM)
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:border-blue-300 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Official Email
                </p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block"
                >
                  {companyInfo.email}
                </a>
                <p className="text-xs text-slate-500">
                  Proposals and official agency inquiries
                </p>
              </div>
            </div>

            {/* Rajahmundry Office Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:border-blue-300 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Rajahmundry Headquarters
                </p>
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {companyInfo.address}
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  East Godavari District, Andhra Pradesh
                </p>
              </div>
            </div>

            {/* WhatsApp Quick Chat Box */}
            <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 shadow-md flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                  Instant Response
                </p>
                <h3 className="text-lg font-extrabold text-white">
                  Chat on WhatsApp
                </h3>
                <p className="text-xs text-emerald-100 mt-0.5">
                  Direct connection with Founder Bhargav
                </p>
              </div>

              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold text-xs shadow-sm transition-all shrink-0 flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Start Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl shadow-blue-950/5">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Free 20-Minute Growth Session
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Send a Direct Message / Inquire
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill out the quick form below and Bhargav will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Message Successfully Sent!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>! We have received your inquiry for <strong>{formData.businessName || 'your business'}</strong>. Founder Bhargav will connect with you via phone or WhatsApp at <strong>{formData.phone}</strong>.
                  </p>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-md mx-auto text-left text-xs space-y-2">
                    <p className="font-bold text-emerald-950">Fastest response option:</p>
                    <a
                      href={contactWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send this Inquiry to WhatsApp Now</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMessage(null);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Honeypot field for bot mitigation (hidden from users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    checked={botcheck}
                    onChange={(e) => setBotcheck(e.target.checked)}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. Bhargav / Siva Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="e.g. 9704380535"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-business" className="block text-xs font-bold text-slate-700 mb-1">
                        Business Name in Rajahmundry / AP *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="contact-business"
                          type="text"
                          required
                          placeholder="e.g. Godavari Silks / Clinic"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="e.g. business@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Service Interested In
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      >
                        <option value="all-in-one">Complete 360° Marketing Package</option>
                        {servicesList.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-bold text-slate-700 mb-1">
                        Approximate Monthly Budget
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      >
                        <option value="Starter Scale (Single Channel / Local Visibility)">Starter Scale (Single Channel / Local Visibility)</option>
                        <option value="Growth Scale (Reels, Meta Ads & Local SEO)">Growth Scale (Reels, Meta Ads & Local SEO)</option>
                        <option value="Dominance Scale (Omnichannel 360° Retainer)">Dominance Scale (Omnichannel 360° Retainer)</option>
                        <option value="Custom Scope / To Be Discussed">Custom Scope / To Be Discussed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                      Your Business Goals or Questions
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell us what you want to achieve (e.g. increase customer footfalls, get 50+ local leads, manage Instagram daily)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  {/* Error Message with WhatsApp Direct Fallback */}
                  {errorMessage && (
                    <div role="alert" aria-live="assertive" id="contact-form-error" className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2.5 text-xs text-amber-900">
                      <p className="font-semibold leading-relaxed">{errorMessage}</p>
                      <a
                        href={contactWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs"
                      >
                        <WhatsAppLogo className="w-4 h-4" />
                        <span>Send Inquiry to Bhargav via WhatsApp</span>
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-300" />
                        <span>Submit Inquiry to Founder Bhargav</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>We respect your privacy. No spam. Direct phone callback.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ================= DISTRICT COVERAGE & SERVICE RADIUS (FULL WIDTH CONTAINER) ================= */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                <span>On-Location Production &amp; Regional Service Radius</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                District Coverage &amp; Service Radius
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Headquartered in Danavaipeta, Rajahmundry, we provide on-location 4K video shoots, clinic and showroom walkthroughs, and active digital management across all major commercial corridors in East Godavari and Coastal AP:
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs shrink-0">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>Full East Godavari &amp; Coastal AP Footprint</span>
            </div>
          </div>

          {/* Structured Responsive Grid of 8 Commercial Hubs with Location Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {regionalCoverageAreas.map((area, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono">
                      {area.type}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {area.name}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {area.popularServices.map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Footer Banner */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 bg-white rounded-2xl p-4 border border-slate-200/70">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-slate-700">
                <strong>Don't see your specific town listed?</strong> If your business is located in East Godavari, Kakinada, or Konaseema, our crew travels directly to your premises for video shoots and consultations.
              </span>
            </div>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I would like to confirm on-location video shooting coverage for my business location.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold shrink-0 transition-colors cursor-pointer"
            >
              <span>Confirm Location on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reusable Bottom CTA */}
      <CTASection onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
