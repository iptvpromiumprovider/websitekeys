import React from 'react';
import { Product } from '../types';

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
  const win11 = products.find((p) => p.id === 'win-11-pro-retail');
  const office = products.find((p) => p.id === 'office-2024-pro' || p.id === 'office-2021-pro');
  const gemini = products.find((p) => p.id === 'gemini-advanced-ai');

  return (
    <section className="relative w-full bg-[#0A0A0A] py-6 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Main Hero Card: Bento Style with Subtle 1px Hairline Border */}
        <div className="relative overflow-hidden border border-white/10 bg-[#111216] min-h-[360px] sm:min-h-[420px] flex items-center">
          
          {/* Background Image using user's exact hero-banner.jpg */}
          <div
            className="absolute inset-0 bg-cover bg-right sm:bg-center"
            style={{
              backgroundImage: `url('/assets/hero-banner.jpg')`,
            }}
          />
          {/* Subtle dark gradient overlay to ensure perfect contrast on text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/40" />

          {/* Foreground Hero Content */}
          <div className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-14">
            
            {/* Zero-Pill Unboxed Editorial Metadata */}
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#F5A623] mb-4">
              <span className="font-bold">01</span>
              <span className="text-white/20">/</span>
              <span>DIRECT DIGITAL DISPATCH</span>
              <span className="text-white/20">/</span>
              <span className="text-slate-400">&lt; 60s DELIVERY</span>
            </div>

            {/* Headline with Space Grotesk */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] font-['Space_Grotesk',sans-serif]">
              Windows 11 &amp; Office 2024 Keys.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              Authentic Microsoft OEM &amp; Retail licenses. Instant validation via official servers with zero third-party tools.
            </p>

            {/* Action buttons: Subtle smooth micro-interaction */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onShopClick}
                className="bg-[#F5A623] hover:bg-[#E09419] hover:-translate-y-0.5 text-black px-8 py-3.5 text-xs uppercase font-bold tracking-wider font-['Space_Grotesk',sans-serif] transition-all duration-300 ease-out cursor-pointer shadow-sm"
              >
                Browse Catalog &rarr;
              </button>

              <a
                href="https://wa.me/15205427975?text=Hello%20KeyWin,%20I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#121E17] hover:bg-[#182B21] hover:-translate-y-0.5 border border-emerald-500/40 px-5 py-3.5 text-xs uppercase font-bold tracking-wider text-emerald-400 transition-all duration-300 ease-out cursor-pointer font-mono"
              >
                <svg className="h-4 w-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>WhatsApp: +1 520-542-7975</span>
              </a>

              <a
                href="https://t.me/bigovv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0F1E29] hover:bg-[#152B3A] hover:-translate-y-0.5 border border-sky-500/40 px-5 py-3.5 text-xs uppercase font-bold tracking-wider text-sky-400 transition-all duration-300 ease-out cursor-pointer font-mono"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Telegram: @bigovv</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Highlights Row: Bento Grid Cards */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {win11 && (
            <div
              onClick={() => onSelectProduct(win11)}
              className="flex items-center gap-3.5 p-4 bg-[#111216] border border-white/10 hover:border-[#F5A623]/50 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            >
              <img
                src={win11.imageUrl}
                alt={win11.title}
                loading="lazy"
                className="h-14 w-14 object-cover border border-white/10 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-[#F5A623] uppercase">Windows Key</span>
                  <span className="text-slate-400">GLOBAL</span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-1 font-['Space_Grotesk',sans-serif]">{win11.title}</p>
                <div className="flex items-baseline gap-2 mt-1.5 font-mono">
                  <span className="text-sm font-bold text-[#F5A623]">${win11.currentPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 line-through">${win11.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {office && (
            <div
              onClick={() => onSelectProduct(office)}
              className="flex items-center gap-3.5 p-4 bg-[#111216] border border-white/10 hover:border-[#F5A623]/50 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            >
              <img
                src={office.imageUrl}
                alt={office.title}
                loading="lazy"
                className="h-14 w-14 object-cover border border-white/10 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-amber-400 uppercase">Office Suite</span>
                  <span className="text-slate-400">LIFETIME</span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-1 font-['Space_Grotesk',sans-serif]">{office.title}</p>
                <div className="flex items-baseline gap-2 mt-1.5 font-mono">
                  <span className="text-sm font-bold text-[#F5A623]">${office.currentPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 line-through">${office.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {gemini && (
            <div
              onClick={() => onSelectProduct(gemini)}
              className="flex items-center gap-3.5 p-4 bg-[#111216] border border-white/10 hover:border-[#F5A623]/50 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            >
              <img
                src={gemini.imageUrl}
                alt={gemini.title}
                loading="lazy"
                className="h-14 w-14 object-cover border border-white/10 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-emerald-400 uppercase">AI Pro</span>
                  <span className="text-slate-400">ADVANCED</span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-1 font-['Space_Grotesk',sans-serif]">{gemini.title}</p>
                <div className="flex items-baseline gap-2 mt-1.5 font-mono">
                  <span className="text-sm font-bold text-[#F5A623]">${gemini.currentPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 line-through">${gemini.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
