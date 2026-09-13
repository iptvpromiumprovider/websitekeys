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
  const netflix = products.find((p) => p.id === 'netflix-premium');
  const spotify = products.find((p) => p.id === 'spotify-premium');

  return (
    <section className="relative w-full bg-[#0b0c10] py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Hero Card exactly matching image.png */}
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

            {/* Headline matching screenshot */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Windows 11 &amp; Office 2024
            </h1>

            {/* Subtitle matching screenshot */}
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Choose your license. Activate instantly.
            </p>

            {/* Action buttons matching screenshot */}
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
                className="inline-flex items-center gap-2 rounded-lg bg-[#14231b] hover:bg-[#1a2e23] border border-emerald-500/50 px-5 py-3 text-sm font-bold text-emerald-400 transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp: +1 520-542-7975</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Highlights Row for Windows, Netflix, Spotify */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {win11 && (
            <div
              onClick={() => onSelectProduct(win11)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#13151e] border border-[#232635] hover:border-[#F5A623] cursor-pointer transition-colors"
            >
              <img
                src={win11.imageUrl}
                alt={win11.title}
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

          {netflix && (
            <div
              onClick={() => onSelectProduct(netflix)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#13151e] border border-[#232635] hover:border-[#F5A623] cursor-pointer transition-colors"
            >
              <img
                src={netflix.imageUrl}
                alt={netflix.title}
                className="h-14 w-14 rounded-lg object-cover border border-[#2d3144] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-red-400 uppercase">Streaming</span>
                  <span className="text-[10px] font-bold text-red-300 bg-red-950/60 px-1.5 py-0.5 rounded border border-red-500/30">
                    4K UHD
                  </span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-0.5">{netflix.title}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-black text-[#F5A623]">${netflix.currentPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 line-through">${netflix.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {spotify && (
            <div
              onClick={() => onSelectProduct(spotify)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#13151e] border border-[#232635] hover:border-[#F5A623] cursor-pointer transition-colors"
            >
              <img
                src={spotify.imageUrl}
                alt={spotify.title}
                className="h-14 w-14 rounded-lg object-cover border border-[#2d3144] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">Streaming</span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    PREMIUM
                  </span>
                </div>
                <p className="text-xs font-bold text-white truncate mt-0.5">{spotify.title}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-black text-[#F5A623]">${spotify.currentPrice.toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 line-through">${spotify.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
