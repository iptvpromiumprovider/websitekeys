import React from 'react';
import { BrandLogo } from './BrandLogo';

interface RoyalLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

/**
 * KeyWin Brand Logo wrapper (replaces legacy RoyalLogo).
 */
export const RoyalLogo: React.FC<RoyalLogoProps> = (props) => {
  return <BrandLogo {...props} />;
};
