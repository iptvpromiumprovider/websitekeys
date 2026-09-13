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
      {/* Crown RK Emblem - Using User's Uploaded Logo Photo */}
      <div className={`${iconSizes[size]} shrink-0 overflow-hidden rounded-lg border border-[#333]`}>
        <img
          src="/assets/logo.jpg"
          alt="RoyalCDKeys Logo"
          className="w-full h-full object-cover"
        />
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
