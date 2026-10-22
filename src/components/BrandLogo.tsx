import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Owned KeyWin Emblem: Geometric KW Minimalist Badge */}
      <div
        className={`${iconSizes[size]} shrink-0 flex items-center justify-center bg-[#0A0A0A] border border-[#F5A623]/60 relative group shadow-sm`}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-5/6 h-5/6 text-[#F5A623]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Key & W Geometric Monogram */}
          <path
            d="M6 7V25M6 16H14M14 10L10 16L14 22M18 10L21 22L24 13L27 22L30 10"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#F5A623]" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span
              className={`${textSizes[size]} font-black tracking-tight text-white uppercase font-['Space_Grotesk',sans-serif]`}
            >
              KEY<span className="text-[#F5A623]">WIN</span>
            </span>
          </div>
          <span className="text-[8px] font-mono tracking-widest uppercase text-slate-400 mt-0.5">
            DIGITAL LICENSES
          </span>
        </div>
      )}
    </div>
  );
};
