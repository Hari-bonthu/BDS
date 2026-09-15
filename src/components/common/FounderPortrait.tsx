import React from 'react';
import { Phone, Mail, Award, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { asset } from '../../utils/asset';
import { companyInfo } from '../../data/companyData';

interface FounderPortraitProps {
  showBio?: boolean;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'card' | 'banner' | 'compact';
  onConsultClick?: () => void;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  showBio = true,
  size = 'lg',
  layout = 'card',
  onConsultClick
}) => {
  return (
    <div
      id="founder-bhargav-profile-card"
      className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-900/10"
    >
      {/* Top Accent Gradient Bar */}
      <div className="h-2.5 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-400" />

      <div className="p-6 md:p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          {/* Portrait Container */}
          <div className="relative group shrink-0">
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition duration-300" />

            {/* Founder Headshot Presentation */}
            <div className="relative w-48 h-64 sm:w-56 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-white/90 shadow-xl flex flex-col items-center justify-end">
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-radial from-blue-600/25 via-transparent to-transparent pointer-events-none" />

              {/* Stylized Executive Monogram Crest */}
              <div className="relative z-0 w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/40 bg-stone-900">
                  <picture>
                    <source srcSet={asset('assets/Bhargav_Headshot.webp')} type="image/webp" />
                    <img
                      src={asset('assets/Bhargav_Headshot.png')}
                      alt="Bhargav - Founder & Lead Growth Strategist"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-blue-950/80 border border-blue-700/50 px-2.5 py-0.5 rounded-full inline-block">
                    Direct Leadership
                  </span>
                  <p className="text-xs text-slate-400">Danavaipeta, Rajahmundry</p>
                </div>
              </div>

              {/* Status Ribbon on bottom of portrait */}
              <div className="relative z-10 w-full py-2 bg-gradient-to-t from-slate-950 via-slate-900/95 to-transparent text-center px-2">
                <p className="text-xs font-bold text-white tracking-wide flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Bhargav</span>
                </p>
                <p className="text-[10px] text-slate-300 font-medium">Founder & Growth Strategist</p>
              </div>
            </div>

            {/* Experience Pill floating on card */}
            <div className="absolute -bottom-2.5 -right-2 bg-gradient-to-r from-blue-700 to-blue-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg border border-blue-400/40 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>8+ Yrs Exp</span>
            </div>
          </div>

          {/* Bio and Credentials */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Leadership & Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Bhargav
              </h3>
              <p className="text-sm font-semibold text-blue-600 tracking-wide mt-0.5">
                Founder & Lead Digital Marketing Strategist
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-slate-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Rajahmundry & East Godavari Region</span>
              </div>
            </div>

            {showBio && (
              <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <p>
                  {companyInfo.founder.bio}
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 italic text-xs sm:text-sm">
                  &ldquo;{companyInfo.founder.quote}&rdquo;
                </div>
              </div>
            )}

            {/* Direct Founder Contact & Direct Action */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={`tel:${companyInfo.phone}`}
                id="founder-call-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Bhargav: {companyInfo.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                id="founder-email-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{companyInfo.email}</span>
              </a>

              {onConsultClick && (
                <button
                  type="button"
                  onClick={onConsultClick}
                  id="founder-consult-modal-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-200 text-xs sm:text-sm font-semibold transition-all"
                >
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                  <span>Book Free 1-on-1 Strategy Call</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
