import React from 'react';
import { BrandLogo } from './BrandLogo';

interface RoyalLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const RoyalLogo: React.FC<RoyalLogoProps> = (props) => {
  return <BrandLogo {...props} />;
};
