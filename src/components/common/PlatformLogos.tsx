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

// Official Google Maps 4-color folded pin vector logo
export const GoogleMapsLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M18.5 8.5C18.5 4.91 15.59 2 12 2C8.41 2 5.5 4.91 5.5 8.5C5.5 13.375 12 22 12 22C12 22 18.5 13.375 18.5 8.5Z"
      fill="#EA4335"
    />
    <path
      d="M12 2C8.41 2 5.5 4.91 5.5 8.5C5.5 10.29 6.23 12.01 7.45 13.5L12 8V2Z"
      fill="#4285F4"
    />
    <path
      d="M12 8L7.45 13.5C8.61 14.92 10.05 16.71 11.51 18.9C11.69 19.17 12 19.17 12 19.17V8Z"
      fill="#FBBC05"
    />
    <path
      d="M12 19.17C12 19.17 12.31 19.17 12.49 18.9C14.28 16.22 18.5 11.83 18.5 8.5H12V19.17Z"
      fill="#34A853"
    />
    <circle cx="12" cy="8.5" r="2.75" fill="#FFFFFF" />
  </svg>
);

// Official Instagram brand camera glyph with authentic gradient stroke
export const InstagramLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="ig-clean-grad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#bc1888" />
        <stop offset="40%" stopColor="#cc2366" />
        <stop offset="70%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#f09433" />
      </linearGradient>
    </defs>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="url(#ig-clean-grad)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4.2" stroke="url(#ig-clean-grad)" strokeWidth="2" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="url(#ig-clean-grad)" />
  </svg>
);

// Official Instagram Reels clapperboard gradient icon
export const ReelsLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="reels-clean-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="4.5" stroke="url(#reels-clean-grad)" strokeWidth="1.8" />
    <path d="M3 8.5H21" stroke="url(#reels-clean-grad)" strokeWidth="1.5" />
    <path d="M7 3.5L9.5 8.5" stroke="url(#reels-clean-grad)" strokeWidth="1.5" />
    <path d="M14.5 3.5L17 8.5" stroke="url(#reels-clean-grad)" strokeWidth="1.5" />
    <polygon points="10,12 15.5,15 10,18" fill="url(#reels-clean-grad)" />
  </svg>
);

// Official Meta Ads infinity loop vector logo
export const MetaLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="#0081FB"
      d="M16.92 6.5C15.65 6.5 14.52 7.15 13.57 8.24C12.54 7.07 11.45 6.5 10.15 6.5C7.45 6.5 5.25 8.78 5.25 11.89C5.25 15.35 7.69 17.5 10.37 17.5C11.85 17.5 13.08 16.74 14.07 15.47C15.14 16.8 16.36 17.5 17.81 17.5C20.35 17.5 22.5 15.22 22.5 12.11C22.5 8.78 20.06 6.5 16.92 6.5ZM10.23 15.82C8.61 15.82 7.08 14.28 7.08 11.96C7.08 9.77 8.44 8.18 10.15 8.18C11.23 8.18 12.15 8.77 12.98 9.94C12.02 12.28 11.13 14.39 10.23 15.82ZM17.74 15.82C16.73 15.82 15.81 15.19 15.01 14.02C15.96 11.75 16.85 9.64 17.75 8.18C19.37 8.18 20.67 9.8 20.67 12.04C20.67 14.32 19.34 15.82 17.74 15.82Z"
    />
  </svg>
);

// Official WhatsApp vector mark (authentic chat bubble + telephone handset)
export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="#25D366"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.31 19.81 8.12 19.14L7.84 18.97L4.72 19.79L5.55 16.75L5.36 16.45C4.63 15.28 4.24 13.93 4.24 11.91C4.24 7.37 7.94 3.67 12.04 3.67ZM8.83 7.33C8.64 7.33 8.33 7.4 8.08 7.67C7.83 7.95 7.12 8.61 7.12 9.97C7.12 11.33 8.11 12.64 8.25 12.82C8.39 13.01 10.33 16 13.3 17.29C14.01 17.6 14.56 17.78 14.99 17.92C15.7 18.15 16.35 18.12 16.86 18.04C17.43 17.96 18.61 17.33 18.86 16.63C19.11 15.93 19.11 15.34 19.03 15.21C18.96 15.09 18.76 15.02 18.47 14.88C18.17 14.73 16.71 14.01 16.44 13.91C16.17 13.81 15.97 13.76 15.77 14.06C15.58 14.35 15.01 15.02 14.84 15.22C14.66 15.42 14.49 15.44 14.19 15.3C13.9 15.15 12.95 14.84 11.82 13.83C10.94 13.05 10.35 12.08 10.18 11.78C10.01 11.49 10.16 11.33 10.31 11.18C10.44 11.05 10.6 10.84 10.75 10.67C10.9 10.49 10.95 10.37 11.05 10.17C11.15 9.97 11.1 9.8 11.02 9.65C10.95 9.5 10.35 8.04 10.11 7.45C9.87 6.88 9.63 6.95 9.44 6.95C9.27 6.94 9.07 6.94 8.87 6.94L8.83 7.33Z"
    />
  </svg>
);

// Official YouTube play button logo (proportioned 24x17 vector mark)
export const YouTubeLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="#FF0000"
      d="M21.58 7.19C21.35 6.33 20.67 5.65 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.65 2.65 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.65 17.67 3.33 18.35 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.35 21.35 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19Z"
    />
    <polygon points="10,15 15.5,12 10,9" fill="#FFFFFF" />
  </svg>
);

// High-end Campaign Creatives badge (vector palette glyph)
export const CreativesLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7C3AED"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="13.5" cy="6.5" r="1" fill="#7C3AED" />
    <circle cx="17.5" cy="10.5" r="1" fill="#7C3AED" />
    <circle cx="8.5" cy="7.5" r="1" fill="#7C3AED" />
    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.21 1.79 4 4 4h1.5c.83 0 1.5.67 1.5 1.5 0 .39-.15.74-.39 1.01-.24.27-.39.62-.39 1.02 0 1.1.9 2 2 2 6.63 0 12-5.37 12-12C22 6.48 17.52 2 12 2z" />
  </svg>
);

// High-Intent Lead Generation badge (vector target glyph)
export const LeadGenLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0247FE"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="#0247FE" />
  </svg>
);

// Customer Direct Inquiries / Direct Call badge (vector speech mark glyph)
export const InquiriesLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0F172A"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5" />
  </svg>
);
