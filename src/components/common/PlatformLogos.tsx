import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// Official Google 'G' 4-color vector logo
export const GoogleLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.41 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.98 0 12s.45 3.84 1.24 5.42l4.04-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.59 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// Official Google Maps multi-color pin vector logo
export const GoogleMapsLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      fill="#EA4335"
    />
    <path
      d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      fill="#FFFFFF"
    />
    <path
      d="M8.5 7.5C9.3 6.6 10.6 6 12 6s2.7.6 3.5 1.5l1.5-1.5C15.8 4.7 14 4 12 4s-3.8.7-5 2l1.5 1.5z"
      fill="#4285F4"
    />
    <path
      d="M12 6c1.4 0 2.7.6 3.5 1.5L17 6c-1.2-1.3-3-2-5-2V6z"
      fill="#FBBC05"
    />
    <path
      d="M12 14c-2.8 0-5-2.2-5-5 0-.8.2-1.5.5-2.2L6 5.3C5.4 6.4 5 7.7 5 9c0 5.2 7 13 7 13v-8z"
      fill="#34A853"
    />
  </svg>
);

// Official Instagram gradient camera icon
export const InstagramLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <radialGradient id="ig-badge-grad" cx="20%" cy="110%" r="130%">
        <stop offset="0%" stopColor="#ffda55" />
        <stop offset="25%" stopColor="#ffda55" />
        <stop offset="50%" stopColor="#f86532" />
        <stop offset="75%" stopColor="#e12474" />
        <stop offset="100%" stopColor="#8735b5" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-badge-grad)" />
    <path
      fill="#fff"
      d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM17.8 4.2H6.2A2 2 0 004.2 6.2v11.6a2 2 0 002 2h11.6a2 2 0 002-2V6.2a2 2 0 00-2-2zm.4 13.6a.4.4 0 01-.4.4H6.2a.4.4 0 01-.4-.4V6.2a.4.4 0 01.4-.4h11.6a.4.4 0 01.4.4v11.6z"
    />
  </svg>
);

// Official Instagram Reels clapperboard gradient icon
export const ReelsLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="reels-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#reels-badge-grad)" />
    <path
      d="M6.5 6.5h11a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 17V8a1.5 1.5 0 011.5-1.5z"
      stroke="#fff"
      strokeWidth="1.4"
    />
    <path d="M10 10.2l5 2.8-5 2.8v-5.6z" fill="#fff" />
    <line x1="5" y1="9.5" x2="19" y2="9.5" stroke="#fff" strokeWidth="1.2" />
    <line x1="8" y1="6.5" x2="10" y2="9.5" stroke="#fff" strokeWidth="1.2" />
    <line x1="14" y1="6.5" x2="16" y2="9.5" stroke="#fff" strokeWidth="1.2" />
  </svg>
);

// Official Meta Ads (Infinity loop) logo
export const MetaLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#0081FB" />
    <path
      d="M16.5 8c-1.3 0-2.3.7-3.4 2-1.1-1.3-2.1-2-3.4-2-2.3 0-4.2 1.9-4.2 4.7 0 3.2 2.1 5.3 4.6 5.3 1.4 0 2.5-.7 3.5-2 1 1.3 2.1 2 3.5 2 2.5 0 4.6-2.1 4.6-5.3 0-2.8-1.9-4.7-4.2-4.7zm-6.2 8.5c-1.6 0-3-1.5-3-3.7 0-2.1 1.2-3.5 2.9-3.5 1.1 0 1.9.7 2.9 2-1.3 2.9-1.9 5.2-2.8 5.2zm6.2 0c-.9 0-1.5-2.3-2.8-5.2 1-1.3 1.8-2 2.9-2 1.7 0 2.9 1.4 2.9 3.5 0 2.2-1.4 3.7-3 3.7z"
      fill="#FFFFFF"
    />
  </svg>
);

// Official WhatsApp logo
export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#25D366" />
    <path
      d="M12 5.5a6.5 6.5 0 00-5.6 9.8l-.8 3 3.1-.8A6.5 6.5 0 1012 5.5zm3.7 9.2c-.2.4-.9.7-1.2.7-.3.1-.7.2-2.2-.5-1.8-.7-2.9-2.6-3-2.7-.1-.2-.7-1-.7-1.9 0-.9.5-1.3.7-1.5.2-.2.4-.2.6-.2h.4c.2 0 .3 0 .4.3.2.4.6 1.4.6 1.5 0 .1 0 .2 0 .4-.1.2-.2.2-.3.3l-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2 1.2 1.1 2.2 1.4 2.5 1.5.3.2.5.2.7-.1.2-.2.7-.9.9-1.1.2-.3.4-.2.7-.1.2.1 1.5.7 1.8.9.3.1.4.2.5.3.1.2.1.9-.1 1.3z"
      fill="#FFFFFF"
    />
  </svg>
);

// Official YouTube play button logo
export const YouTubeLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path d="M10 8.5l5.5 3.5-5.5 3.5v-7z" fill="#FFFFFF" />
  </svg>
);

// High-end Campaign Creatives badge
export const CreativesLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#7C3AED" />
    <path
      d="M15.5 6.5l2 2-8 8H7.5v-2l8-8zm-6 8l2 2"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="16.5" cy="7.5" r="0.5" fill="#FFFFFF" />
  </svg>
);

// High-Intent Lead Generation badge
export const LeadGenLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#0247FE" />
    <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.5" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
  </svg>
);

// Customer Direct Inquiries / Direct Call badge
export const InquiriesLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#0F172A" />
    <path
      d="M8 8.5h8M8 12h5m-5 3.5h7a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v8l3-2z"
      stroke="#FFFFFF"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
