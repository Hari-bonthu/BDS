import React from 'react';
import { FileText, Scale, CheckCircle2, ArrowLeft, Shield, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { companyInfo } from '../data/companyData';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div id="bds-terms-page" className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
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
              <Scale className="w-3.5 h-3.5" />
              <span>Agency Terms &amp; Conditions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
              Transparent, fair, and straightforward terms governing digital marketing engagements, content creation, paid ad management, and consultations with Bhargav Digital Solutions.
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

          {/* Core Philosophy Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-600 text-white rounded-2xl">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-black text-stone-950">
                Our Zero Lock-In Commitment
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              We operate on earned trust rather than restrictive long-term contracts. Unless a customized multi-month campaign agreement is explicitly signed by both parties, our standard retainers operate on a flexible month-to-month basis with zero cancellation fees.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">01.</span>
              <span>Scope of Engagement</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Bhargav Digital Solutions (&quot;BDS&quot;) provides digital marketing, short-form video production, graphic design, social media management, Google Maps local SEO, and paid advertising consultation services. The specific deliverables, milestones, and turnaround schedules for any engagement are defined in the written service proposal or quotation agreed upon prior to project initiation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">02.</span>
              <span>Intellectual Property &amp; Creative Ownership</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Client Assets:</strong> Upon receipt of full payment for the applicable billing period, the client owns all final delivered creatives, video edits, graphic designs, and custom copy produced specifically for their brand.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Agency Methodologies:</strong> Proprietary workflow templates, internal strategy frameworks, unfinalized design concepts, and agency software remain the intellectual property of BDS.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Portfolio Rights:</strong> BDS reserves the right to display non-confidential, published creative work as conceptual case studies or portfolio examples unless a non-disclosure agreement (NDA) specifies otherwise.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">03.</span>
              <span>Paid Advertising &amp; Third-Party Ad Spend</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Agency service fees cover professional strategy, creative production, ad setup, continuous optimization, and reporting. Ad spend paid to advertising networks (Meta, Google, YouTube) is paid directly by the client to the respective platform or funded in advance without markups. BDS has no ownership or control over third-party platform algorithm updates or ad network policies.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">04.</span>
              <span>Performance &amp; Commercial Disclaimer</span>
            </h2>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2 text-xs sm:text-sm text-amber-900">
              <div className="flex items-center gap-2 font-bold">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Important Performance Disclosure</span>
              </div>
              <p className="leading-relaxed">
                Digital marketing metrics (including click-through rates, video views, and qualified leads) are heavily influenced by product quality, pricing, regional market demand, competitor activity, and client sales closing speed. While BDS commits to rigorous, industry-standard execution and continuous optimization, we do not guarantee specific sales quotas or revenue conversions.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">05.</span>
              <span>Payment Terms &amp; Invoicing</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Monthly retainers are invoiced at the beginning of each billing cycle and are payable within 7 calendar days. For one-off creative projects (such as website launches or dedicated brand shoots), a 50% mobilization deposit is required prior to production commencement, with the remaining balance due upon final asset delivery.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80">
            <h2 className="text-xl sm:text-2xl font-black text-stone-950 flex items-center gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-bold">06.</span>
              <span>Governing Law &amp; Jurisdiction</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India. The courts of Rajahmundry, East Godavari District, Andhra Pradesh shall have exclusive jurisdiction over any legal proceedings.
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Questions Regarding Our Terms?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              We believe in complete contractual clarity. For any questions regarding service terms or custom agreements, please reach out directly:
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
