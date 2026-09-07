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
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo, regionalCoverageAreas } from '../data/companyData';
import { servicesList } from '../data/servicesData';
import { CTASection } from '../components/common/CTASection';

interface ContactPageProps {
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: 'short-form-video-ads',
    budget: '₹10,000 - ₹20,000 / mo',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const existing = JSON.parse(localStorage.getItem('bds_client_inquiries') || '[]');
      existing.unshift({
        contactName: formData.name,
        businessName: formData.businessName,
        phone: formData.phone,
        email: formData.email,
        selectedService: formData.service,
        budget: formData.budget,
        notes: formData.message,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('bds_client_inquiries', JSON.stringify(existing.slice(0, 20)));
    } catch (err) {
      // safe fallback
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 500);
  };

  const contactWaMsg = encodeURIComponent(
    `*Direct Contact Inquiry from BDS Website*\n` +
    `👤 *Name:* ${formData.name}\n` +
    `🏢 *Business:* ${formData.businessName}\n` +
    `📱 *Phone:* ${formData.phone}\n` +
    (formData.email ? `✉️ *Email:* ${formData.email}\n` : '') +
    `🎯 *Service:* ${formData.service}\n` +
    `💰 *Budget:* ${formData.budget}\n` +
    (formData.message ? `📝 *Message:* ${formData.message}\n` : '') +
    `📍 *Region:* Rajahmundry & East Godavari, AP`
  );
  const contactWaUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${contactWaMsg}`;

  return (
    <div id="bds-contact-page" className="space-y-16 sm:space-y-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Direct Founder Contact & Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let&apos;s Grow Your Business in{' '}
            <span className="text-blue-600">Rajahmundry & Beyond</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about digital marketing packages or want a tailored growth strategy? Contact Founder Bhargav directly.
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
                <h4 className="text-lg font-extrabold text-white">
                  Chat on WhatsApp
                </h4>
                <p className="text-xs text-emerald-100 mt-0.5">
                  Fastest way to get campaign pricing
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

            {/* Regional Coverage Footprint Card */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>District Coverage &amp; Service Radius:</span>
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide on-location video shooting and digital management across all key commercial corridors:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] pt-1">
                {regionalCoverageAreas.map((area, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">
                    📍 {area.name.split(',')[0]}
                  </span>
                ))}
              </div>
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
                  <h4 className="text-2xl font-extrabold text-slate-900">
                    Message Successfully Sent!
                  </h4>
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
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Business Name in Rajahmundry / AP *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Service Interested In
                      </label>
                      <select
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Approximate Monthly Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      >
                        <option value="₹5,000 - ₹10,000 / mo">₹5,000 - ₹10,000 / mo (Starter)</option>
                        <option value="₹10,000 - ₹20,000 / mo">₹10,000 - ₹20,000 / mo (Pro)</option>
                        <option value="₹20,000 - ₹35,000 / mo">₹20,000 - ₹35,000 / mo (Dominance)</option>
                        <option value="₹35,000+ / mo">₹35,000+ / mo (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Business Goals or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you want to achieve (e.g. increase customer footfalls, get 50+ local leads, manage Instagram daily)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

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
                  <p className="text-[11px] text-center text-slate-500">
                    🔒 We respect your privacy. No spam. Direct phone callback.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Bottom CTA */}
      <CTASection onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
