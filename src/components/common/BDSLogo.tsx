import React from 'react';

interface BDSLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

export const BDSLogo: React.FC<BDSLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  onClick
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[140px]',
    md: 'h-10 sm:h-12 max-w-[180px]',
    lg: 'h-14 sm:h-16 max-w-[240px]',
    xl: 'h-20 sm:h-24 max-w-[320px]'
  };

  return (
    <div
      id="bds-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer transition-transform hover:opacity-95 active:scale-98 ${className}`}
      title="Bhargav Digital Solutions — Digital Today, Grow Tomorrow"
    >
      <img
        src="/assets/logo-bds.png"
        alt="Bhargav Digital Solutions (BDS) Logo"
        className={`${sizeClasses[size]} w-auto object-contain object-left`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
