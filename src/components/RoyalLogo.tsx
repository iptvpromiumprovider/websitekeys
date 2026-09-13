import React from 'react';

interface RoyalLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const RoyalLogo: React.FC<RoyalLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon Badge matching card header */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-0.5 shadow-md shadow-emerald-500/20`}
      >
        <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#12141a]">
          {/* Digital Key Loop Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 text-emerald-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 14C9.76142 14 12 11.7614 12 9C12 6.23858 9.76142 4 7 4C4.23858 4 2 6.23858 2 9C2 11.7614 4.23858 14 7 14Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M10.5 10.5L20 20M17 17L21 21M15 19L18 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Text: CDKEYPC Premier Digital Content */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`${textSizes[size]} font-black tracking-wider uppercase text-white font-sans`}
            >
              CDKEY<span className="text-emerald-400">PC</span>
            </span>
          </div>
          <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase">
            Premier Digital Content
          </span>
        </div>
      )}
    </div>
  );
};
