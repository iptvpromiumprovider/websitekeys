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
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Crown RK Emblem - Clean Vector Mark */}
      <div className={`${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#F5A623]"
        >
          {/* 5-Point Royal Crown with RK Monogram geometry */}
          <path
            d="M6 16L13 28L24 10L35 28L42 16L39 36H9L6 16Z"
            fill="currentColor"
          />
          {/* Jewels atop crown peaks */}
          <circle cx="6" cy="14" r="2.5" fill="currentColor" />
          <circle cx="15" cy="24" r="1.5" fill="#141518" />
          <circle cx="24" cy="8" r="3" fill="currentColor" />
          <circle cx="33" cy="24" r="1.5" fill="#141518" />
          <circle cx="42" cy="14" r="2.5" fill="currentColor" />
          {/* Crown Base Bar */}
          <rect x="9" y="38" width="30" height="4" rx="1.5" fill="currentColor" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${textSizes[size]} font-black tracking-wider text-[#F5A623] uppercase font-sans`}>
            ROYALCDKEYS
          </span>
        </div>
      )}
    </div>
  );
};
