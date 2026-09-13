import React from 'react';
import { Product } from '../types';
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Download,
  RotateCcw,
  Sparkles,
  Lock,
} from 'lucide-react';

interface HeroSectionProps {
  onShopClick: () => void;
  onSelectProduct: (product: Product) => void;
  products: Product[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopClick,
  onSelectProduct,
  products,
}) => {
  const win11 = products.find((p) => p.id === 'win-11-pro-retail') || products[0];
  const win10 = products.find((p) => p.id === 'win-10-pro-retail') || products[1];

  return (
    <section className="relative w-full overflow-hidden bg-[#090a0e] border-b border-[#1f212c]">
      {/* Dynamic Panoramic Hero Artwork Background from user image */}
      <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] w-full flex items-center">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-banner.jpg"
            alt="Genuine Microsoft Windows and Office Digital Keys"
            className="h-full w-full object-cover object-center opacity-85 brightness-95"
            loading="eager"
          />
          {/* Subtle multi-layer gradient overlays for pristine readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/85 lg:to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0e] via-transparent to-black/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Top Micro Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/60 px-3.5 py-1.5 backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Authorized Digital Content • Instant Automated Dispatch
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Buy Genuine{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
                Windows 11
              </span>{' '}
              &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Windows 10
              </span>{' '}
              Product Keys
            </h1>

            {/* Value Proposition Subhead */}
            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
              100% genuine cryptographic Retail licenses delivered in under 60 seconds. Lifetime validity with BitLocker, Hyper-V, official Microsoft download servers, and 30-day money-back guarantee.
            </p>

            {/* Two Action Buttons tailored directly to the 2 products */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {win11 && (
                <button
                  type="button"
                  onClick={() => onSelectProduct(win11)}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] px-7 py-4 text-sm font-extrabold text-black transition-all shadow-xl shadow-amber-500/20 active:scale-98"
                >
                  <span>Get Windows 11 Pro — ${win11.currentPrice.toFixed(2)}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              )}

              {win10 && (
                <button
                  type="button"
                  onClick={() => onSelectProduct(win10)}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-black/60 hover:bg-white/10 px-7 py-4 text-sm font-bold text-white transition-all backdrop-blur-md active:scale-98"
                >
                  <span>Get Windows 10 Pro — ${win10.currentPrice.toFixed(2)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Trust Assurance Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Instant &lt;60s Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Retail</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Download className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Official Microsoft ISO</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <RotateCcw className="h-4 w-4 text-amber-400 shrink-0" />
                <span>30-Day Money-Back</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
