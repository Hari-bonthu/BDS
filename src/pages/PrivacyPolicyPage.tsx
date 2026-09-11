import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { companyInfo } from '../data/companyData';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div id="bds-privacy-page" className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Header Banner */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#fbf9f4] via-[#fafaf9] to-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-blue-600 mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Compliance &amp; Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
              How Bhargav Digital Solutions collects, utilizes, and protects your personal and commercial data in alignment with applicable Indian data protection principles and IT regulations.
            </p>
            <p className="text-xs text-stone-400 font-medium">
              Effective Date: September 11, 2026 • Last Reviewed: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Core Pledge Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/60 border border-blue-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-600 text-white rounded-2xl">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-black text-stone-950">
                Our Core Privacy Guarantee
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              We never sell, rent, trade, or distribute your personal or commercial contact information to third-party data brokers, advertisers, or marketing lists. Every piece of information you submit is used solely to evaluate your business requirements and provide direct marketing consultation from Founder Bhargav.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">01.</span>
              <span>Information We Collect</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              When you interact with our website, request a custom growth plan, or submit a consultation inquiry, we may collect the following information voluntarily provided by you:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Personal Contact Details:</strong> Full name, phone/WhatsApp number, and email address.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Commercial Information:</strong> Business name, operating location (e.g. Rajahmundry, Kakinada), industry sector, and current website or social profiles.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Marketing Scope &amp; Goals:</strong> Desired services (e.g. Video Ads, Local SEO, Social Media Management), monthly budget ranges, and specific operational requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Technical &amp; Log Information:</strong> Anonymized browser type, operating system, referral source, and timestamp data captured automatically to optimize website performance.</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">02.</span>
              <span>How We Use Your Information</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We process your data strictly under lawful, legitimate grounds to fulfill the requested business engagement:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>To respond to your quote requests and schedule 1-on-1 strategy discussions with Founder Bhargav.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>To perform market research, competitor audits, and audience sizing tailored to your business sector in East Godavari.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>To deliver service proposals, deliverables, performance reports, and billing statements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>To communicate operational updates or emergency notifications regarding active ad campaigns.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">03.</span>
              <span>Data Protection &amp; Security Standards</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We employ industry-standard administrative, physical, and electronic security safeguards to protect your personal information against unauthorized access, loss, or alteration. All online form transmissions are protected by 256-bit SSL encryption. Access to client communications is restricted exclusively to authorized BDS personnel directly managing your account.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">04.</span>
              <span>Your Rights Under DPDP Act</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              In accordance with the Digital Personal Data Protection Act, 2023, you have the following rights regarding your data:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2.5">
                <Eye className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Right to Access:</strong> You can request a summary of the personal data we hold about you.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Right to Correction &amp; Erasure:</strong> You can ask us to update inaccurate records or permanently delete your contact inquiry data.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Right to Grievance Redressal:</strong> You may contact our Data Grievance Officer for any concerns regarding your privacy.</span>
              </li>
            </ul>
          </div>

          {/* Section 5: Contact Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Data Grievance &amp; Privacy Contact
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              If you have any questions, requests for data deletion, or privacy inquiries, please contact our designated grievance officer:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-stone-400 font-semibold">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Email</span>
                </div>
                <p className="font-bold text-white">{companyInfo.email}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-stone-400 font-semibold">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Direct Line</span>
                </div>
                <p className="font-bold text-white">{companyInfo.phoneDisplay}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-stone-400 font-semibold">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Office Address</span>
                </div>
                <p className="font-bold text-white">{companyInfo.address}</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
