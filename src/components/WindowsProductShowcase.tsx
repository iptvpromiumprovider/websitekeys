import React from 'react';
import { Product } from '../types';
import {
  Zap,
  ShieldCheck,
  Star,
  Check,
  CreditCard,
  ShoppingCart,
  Download,
  RotateCcw,
  Sparkles,
  Info,
  Laptop,
} from 'lucide-react';

interface WindowsProductShowcaseProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onInstantBuy: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const WindowsProductShowcase: React.FC<WindowsProductShowcaseProps> = ({
  products,
  onAddToCart,
  onInstantBuy,
  onQuickView,
}) => {
  const win11 = products.find((p) => p.id === 'win-11-pro-retail') || products[0];
  const win10 = products.find((p) => p.id === 'win-10-pro-retail') || products[1];

  const showcaseList = [win11, win10].filter(Boolean);

  return (
    <section id="windows-catalog" className="w-full bg-[#0c0d12] py-14 sm:py-20 border-b border-[#1f212c]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-3">
            <Laptop className="w-3.5 h-3.5" />
            <span>Official Operating System Licenses</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Select Your Windows Pro Edition
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Genuine 25-character cryptographic retail product keys with direct Microsoft download links, instant email delivery, and lifetime transferability rights.
          </p>
        </div>

        {/* 2 Flagship Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {showcaseList.map((product) => {
            const isWin11 = product.id === 'win-11-pro-retail';
            const discount = product.discountPercent ?? Math.round(
              ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
            );

            return (
              <div
                key={product.id}
                id={`showcase-${product.id}`}
                className="relative flex flex-col justify-between rounded-2xl border border-[#272a39] bg-[#14161f] p-6 sm:p-8 transition-all duration-300 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Top Badge: Best Seller & Region */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-400">
                    <Sparkles className="w-3 h-3" />
                    {isWin11 ? '#1 Bestseller • Windows 11' : '#2 Bestseller • Windows 10'}
                  </span>

                  <span className="rounded-lg bg-[#1e212d] border border-[#2b2f40] px-2.5 py-1 text-xs font-mono font-semibold text-slate-300">
                    {product.regionTag || 'GLOBAL (GL)'}
                  </span>
                </div>

                {/* Product Visual Area */}
                <div
                  onClick={() => onQuickView(product)}
                  className="group/img relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#262938] bg-[#0c0d12] cursor-pointer mb-6"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded bg-black/75 px-2.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/30 backdrop-blur-xs">
                      <Zap className="w-3 h-3" /> Instant Delivery (&lt;60s)
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-lg bg-[#F59E0B] px-2.5 py-1 text-xs font-black text-black shadow-md">
                      -{discount}% OFF
                    </span>
                  </div>
                </div>

                {/* Title and Rating */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {product.title}
                  </h3>

                  <div className="mt-2.5 flex items-center gap-3">
                    <div className="flex items-center text-amber-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-xs font-bold text-slate-100">{product.rating.toFixed(2)}</span>
                      <span className="ml-1 text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
                    </div>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-semibold text-emerald-400">
                      ✓ In Stock ({product.stockCount} keys left)
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 space-y-2.5 rounded-xl border border-[#232635] bg-[#111219] p-4 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span><strong>Retail License:</strong> Full transferability to a new motherboard or PC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span><strong>Enterprise Security:</strong> BitLocker drive encryption & Windows Sandbox</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span><strong>Virtualization:</strong> Hyper-V client & Remote Desktop Host</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span><strong>Official Mirror:</strong> Clean setup via official Microsoft Media Creation Tool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span><strong>Lifetime Validity:</strong> Zero recurring fees or subscription renewal costs</span>
                    </div>
                  </div>
                </div>

                {/* Price Box */}
                <div className="mt-6 pt-5 border-t border-[#232635]">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Digital License Price</span>
                      <div className="flex items-baseline gap-2.5 mt-0.5">
                        <span className="text-3xl sm:text-4xl font-black text-white">
                          ${product.currentPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-slate-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-400 block">
                        You Save ${(product.originalPrice - product.currentPrice).toFixed(2)}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Delivery: FREE ($0.00)
                      </span>
                    </div>
                  </div>

                  {/* Primary & Secondary Action CTAs */}
                  <div className="space-y-2.5">
                    <button
                      type="button"
                      onClick={() => onInstantBuy(product)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] py-3.5 text-sm font-extrabold text-black transition-all shadow-lg shadow-amber-500/10 active:scale-99"
                    >
                      <CreditCard className="h-4 w-4 stroke-[2.5]" />
                      <span>Instant Buy & Reveal Key (${product.currentPrice.toFixed(2)})</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-[#2f3244] bg-[#1a1c26] hover:bg-[#232634] py-2.5 text-xs font-bold text-white transition-colors"
                      >
                        <ShoppingCart className="h-3.5 w-3.5 text-amber-400" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onQuickView(product)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-[#2f3244] bg-[#1a1c26] hover:bg-[#232634] py-2.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                      >
                        <Info className="h-3.5 w-3.5 text-blue-400" />
                        <span>Specs & Steps</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Comparison Table Between Windows 11 Pro vs Windows 10 Pro */}
        <div className="mt-16 rounded-2xl border border-[#232635] bg-[#13151d] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center sm:text-left">
            Windows 11 Pro vs. Windows 10 Pro Specification Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead>
                <tr className="border-b border-[#252838] text-slate-400">
                  <th className="pb-3 font-semibold">Core Feature / Capability</th>
                  <th className="pb-3 font-bold text-blue-400">Windows 11 Pro Retail</th>
                  <th className="pb-3 font-bold text-amber-400">Windows 10 Pro Retail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f212e]">
                <tr>
                  <td className="py-3 font-medium text-white">License Architecture</td>
                  <td className="py-3 text-slate-200">Retail (Transferable to new PC)</td>
                  <td className="py-3 text-slate-200">Retail (Transferable to new PC)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">BitLocker Drive Encryption</td>
                  <td className="py-3 text-emerald-400">✓ Included (AES-XTS 256-bit)</td>
                  <td className="py-3 text-emerald-400">✓ Included (AES-XTS 256-bit)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Hyper-V & Windows Sandbox</td>
                  <td className="py-3 text-emerald-400">✓ Included</td>
                  <td className="py-3 text-emerald-400">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">DirectStorage Gaming & Auto HDR</td>
                  <td className="py-3 text-emerald-400">✓ Fully Supported (Native)</td>
                  <td className="py-3 text-slate-400">Partial DirectStorage only</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Microsoft Copilot AI Integration</td>
                  <td className="py-3 text-emerald-400">✓ Native System-Wide AI</td>
                  <td className="py-3 text-slate-400">Limited / Sidebar only</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Hardware Requirement</td>
                  <td className="py-3 text-slate-300">TPM 2.0 + UEFI Secure Boot</td>
                  <td className="py-3 text-slate-300">Standard Legacy BIOS / UEFI</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Official Media Creation Tool</td>
                  <td className="py-3 text-emerald-400">✓ Direct Microsoft Download</td>
                  <td className="py-3 text-emerald-400">✓ Direct Microsoft Download</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">30-Day Money-Back Warranty</td>
                  <td className="py-3 text-emerald-400">✓ 100% Guaranteed</td>
                  <td className="py-3 text-emerald-400">✓ 100% Guaranteed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Simple Activation Steps Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-[#232635] bg-[#13151d] p-5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 font-bold text-xs text-black mb-3">
              1
            </span>
            <h4 className="text-sm font-bold text-white">Instant Purchase</h4>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Order securely using Credit Card, PayPal, Apple Pay, or Google Pay with 256-bit SSL encryption.
            </p>
          </div>

          <div className="rounded-xl border border-[#232635] bg-[#13151d] p-5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 font-bold text-xs text-black mb-3">
              2
            </span>
            <h4 className="text-sm font-bold text-white">Key Revealed Instantly</h4>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Your 25-character cryptographic key is displayed on screen and sent to your email with PDF guides.
            </p>
          </div>

          <div className="rounded-xl border border-[#232635] bg-[#13151d] p-5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 font-bold text-xs text-black mb-3">
              3
            </span>
            <h4 className="text-sm font-bold text-white">Activate With Microsoft</h4>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Enter your key in Settings &gt; Activation to validate directly with Microsoft servers for lifetime use.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
