import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Phone, Zap } from 'lucide-react';

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
    <section className="relative w-full bg-[#0b0c10] py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Hero Card */}
        <div className="relative overflow-hidden rounded-2xl border border-[#232635] bg-[#11131a] shadow-2xl min-h-[340px] sm:min-h-[400px] flex items-center">
          
          {/* Background Image using user's exact hero-banner.jpg */}
          <div
            className="absolute inset-0 bg-cover bg-right sm:bg-center"
            style={{
              backgroundImage: `url('/assets/hero-banner.jpg')`,
            }}
          />
          {/* Subtle dark gradient overlay to ensure perfect contrast on text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e14] via-[#0d0e14]/85 to-[#0d0e14]/40" />

          {/* Foreground Hero Content */}
          <div className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-12">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1c1f2c]/90 border border-[#2e3347] px-3 py-1 text-xs font-bold text-slate-300 mb-4">
              <Zap className="h-3.5 w-3.5 text-[#F5A623]" />
              <span>Automated Digital Delivery in &lt; 60s</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Buy Windows 11 &amp; Office 2024 Keys
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Genuine Microsoft licenses &amp; top game keys. Activate instantly.
            </p>

            {/* Action buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onShopClick}
                className="rounded-lg bg-[#F5A623] hover:bg-[#e09419] px-7 py-3 text-sm sm:text-base font-black text-black shadow-lg transition-colors cursor-pointer"
              >
                Shop Now
              </button>

              <a
                href="https://wa.me/15205427975?text=Hello%20RoyalCDKeys,%20I%20want%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#14231b] hover:bg-[#1a2e23] border border-emerald-500/50 px-4 py-3 text-sm font-bold text-emerald-400 transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp: +1 520-542-7975</span>
              </a>

              <a
                href="https://t.me/bigovv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0e2230] hover:bg-[#143247] border border-sky-500/50 px-4 py-3 text-sm font-bold text-sky-400 transition-colors cursor-pointer"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Telegram: @bigovv</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Highlights Row for Windows, Office, and AI Pro */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {win11 && (
            <div
              onClick={() => onSelectProduct(win11)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#13151e] border border-[#232635] hover:border-[#F5A623] cursor-pointer transition-colors"
            >
              <img
                src={win11.imageUrl}
                alt={win11.title}
                loading="lazy"
                className="h-14 w-14 rounded-lg object-cover border border-[#2d3144] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-sky-400 uppercase">Windows Key</span>
                  <span className="text-[10px] font-bold text-slate-300 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700/50">
                    GLOBAL
                  </span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-0.5">{win11.title}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-black text-[#F5A623]">${win11.currentPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 line-through">${win11.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {office && (
            <div
              onClick={() => onSelectProduct(office)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#13151e] border border-[#232635] hover:border-[#F5A623] cursor-pointer transition-colors"
            >
              <img
                src={office.imageUrl}
                alt={office.title}
                loading="lazy"
                className="h-14 w-14 rounded-lg object-cover border border-[#2d3144] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">Office Suite</span>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/30">
                    LIFETIME
                  </span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-0.5">{office.title}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-black text-[#F5A623]">${office.currentPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 line-through">${office.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {gemini && (
            <div
              onClick={() => onSelectProduct(gemini)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#13151e] border border-[#232635] hover:border-[#F5A623] cursor-pointer transition-colors"
            >
              <img
                src={gemini.imageUrl}
                alt={gemini.title}
                loading="lazy"
                className="h-14 w-14 rounded-lg object-cover border border-[#2d3144] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">AI Pro</span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    ADVANCED
                  </span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-0.5">{gemini.title}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-black text-[#F5A623]">${gemini.currentPrice.toFixed(2)}</span>
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
