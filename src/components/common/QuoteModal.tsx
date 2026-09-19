import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Building,
  User,
  Send,
  ShieldCheck,
  Clock,
  Target,
  MessageCircle,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { servicesList } from '../../data/servicesData';
import { companyInfo } from '../../data/companyData';
import { WhatsAppLogo } from './PlatformLogos';
import { Language } from '../../types';
import { submitLead } from '../../services/leadService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  language?: Language;
}

const goalOptions = [
  'Store Footfalls',
  'Patient Appointments',
  'More Phone Inquiries',
  'Engaging Video Reels',
  'Google Maps 3-Pack Optimization',
  'Comprehensive Local Growth'
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  language = 'en'
}) => {
  const [selectedService, setSelectedService] = useState<string>('short-form-video-ads');
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['Store Footfalls']);
  const [notes, setNotes] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      const match = servicesList.find(
        (s) => s.id === initialService || s.title.toLowerCase().includes(initialService.toLowerCase())
      );
      if (match) {
        setSelectedService(match.id);
      } else {
        setSelectedService(initialService);
      }
    }
  }, [initialService, isOpen]);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const res = await submitLead({
      formType: 'growth_audit',
      name: contactName,
      businessName,
      phone,
      email,
      service: selectedService,
      goals: selectedGoals,
      notes,
      botcheck: botcheck ? 'true' : undefined
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    } else {
      setErrorMessage(
        res.error || 'Could not deliver online inquiry. Please connect with Bhargav directly on WhatsApp below.'
      );
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  const formattedWaMessage = encodeURIComponent(
    `*New Growth Consultation Request — BDS Website*\n\n` +
    `• *Name:* ${contactName || 'Valued Business Owner'}\n` +
    `• *Business:* ${businessName || 'Business in Rajahmundry'}\n` +
    `• *Phone:* ${phone}\n` +
    (email ? `• *Email:* ${email}\n` : '') +
    `• *Primary Service:* ${selectedService}\n` +
    (selectedGoals.length > 0 ? `• *Goals:* ${selectedGoals.join(', ')}\n` : '') +
    (notes ? `• *Notes:* ${notes}\n` : '') +
    `• *Location:* Rajahmundry & East Godavari, AP`
  );
  const waUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${formattedWaMessage}`;

  if (!isOpen) return null;

  return (
    <div
      id="quote-consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="quote-consultation-modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-heading"
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden max-h-[94vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-stone-100 bg-[#fafaf9] flex items-start justify-between gap-4 shrink-0">
          <div className="space-y-1">
            <h3 id="quote-modal-heading" className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight">
              Get a Free Custom Quote
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm">
              Direct consultation with Founder Bhargav • No high agency markups
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto text-emerald-600 shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-black text-stone-950 tracking-tight">
                  Growth Plan Request Received!
                </h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{contactName || 'Valued Business Owner'}</strong>! Founder <strong>Bhargav</strong> will review your requirements for <strong>{businessName || 'your business'}</strong> and reach out to you at <strong>{phone}</strong> within 2 hours.
                </p>
              </div>

              {/* Instant WhatsApp Action Card */}
              <div className="p-5 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-2xl border border-emerald-200 text-left text-xs space-y-3 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0">
                    <WhatsAppLogo className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-stone-900 text-sm">
                      Want an instant answer right now?
                    </p>
                    <p className="text-stone-600 text-xs mt-0.5 leading-relaxed">
                      Skip the queue and send your inquiry details directly to Founder Bhargav on WhatsApp with one click:
                    </p>
                  </div>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Details to Bhargav via WhatsApp Now</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-all cursor-pointer"
                >
                  Close &amp; Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
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
              
              {/* Primary Service Selection */}
              <div className="space-y-1.5">
                <label htmlFor="quote-service" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Primary Service Needed *
                </label>
                <div className="relative">
                  <select
                    id="quote-service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-stone-300 bg-stone-50/60 text-stone-900 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-blue-600 transition-all cursor-pointer appearance-none"
                  >
                    <option value="all-in-one">Complete 360° Regional Growth Package (Comprehensive Impact)</option>
                    {servicesList.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 text-xs font-bold">
                    ▼
                  </div>
                </div>
              </div>

              {/* Business Name & Contact Person Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label htmlFor="quote-business" className="block text-xs font-bold text-stone-700">
                    Business / Brand Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      id="quote-business"
                      type="text"
                      required
                      placeholder="e.g. Godavari Silks / Smile Care"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-name" className="block text-xs font-bold text-stone-700">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      id="quote-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label htmlFor="quote-phone" className="block text-xs font-bold text-stone-700">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 flex items-center gap-1.5 text-stone-500 font-bold text-xs pointer-events-none">
                      <svg className="w-4 h-3 rounded-2xs shrink-0 overflow-hidden shadow-2xs border border-stone-200/50" viewBox="0 0 640 480" aria-hidden="true">
                        <path fill="#FF9933" d="M0 0h640v160H0z"/>
                        <path fill="#FFFFFF" d="M0 160h640v160H0z"/>
                        <path fill="#128807" d="M0 320h640v160H0z"/>
                        <circle cx="320" cy="240" r="40" fill="#000088"/>
                        <circle cx="320" cy="240" r="34" fill="#FFFFFF"/>
                        <circle cx="320" cy="240" r="8" fill="#000088"/>
                      </svg>
                      <span>+91</span>
                    </div>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-16 pr-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-email" className="block text-xs font-bold text-stone-700">
                    Email Address <span className="text-stone-500 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      id="quote-email"
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Marketing Goals Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Primary Growth Goals <span className="text-stone-500 font-normal">(Tap to select)</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {goalOptions.map((goal) => {
                    const isSelected = selectedGoals.includes(goal);
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => toggleGoal(goal)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 text-blue-800 border border-blue-300 font-bold'
                            : 'bg-stone-100 text-stone-600 border border-stone-200/80 hover:bg-stone-200/70'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-blue-600" />}
                        <span>{goal}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-1.5">
                <label htmlFor="quote-notes" className="block text-xs font-bold text-stone-700">
                  Any Specific Requirements or Notes? <span className="text-stone-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="quote-notes"
                  rows={2}
                  placeholder="e.g. We are opening a new showroom near Kotipalli and need footfalls within 15 days..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none transition-all"
                />
              </div>

              {/* Error Message with WhatsApp Direct Fallback */}
              {errorMessage && (
                <div role="alert" aria-live="assertive" id="quote-form-error" className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2.5 text-xs text-amber-900">
                  <p className="font-semibold leading-relaxed">{errorMessage}</p>
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${formattedWaMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs"
                  >
                    <WhatsAppLogo className="w-4 h-4" />
                    <span>Send Inquiry to Bhargav via WhatsApp</span>
                  </a>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  id="submit-quote-request-btn"
                  className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Preparing your custom proposal...</span>
                    </span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-cyan-300" />
                      <span>Request Free Quote &amp; Growth Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-medium text-stone-500">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Free Consultation</span>
                  </span>
                  <span>•</span>
                  <span>No Lock-ins</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>Response under 2 hours by Bhargav</span>
                  </span>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
