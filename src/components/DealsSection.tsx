import React from 'react';
import { Product } from '../types';
import { Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface DealsSectionProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  products: Product[];
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  onAddToCart,
  onQuickView,
  products,
}) => {
  const winPro = products.find((p) => p.id === 'win-11-pro') || products[0];
  const offHb = products.find((p) => p.id === 'office-2024-hb') || products[1];

  const bundleOriginal = (winPro?.originalPrice || 199.99) + (offHb?.originalPrice || 249.99);
  const bundleCurrent = (winPro?.currentPrice || 38.99) + (offHb?.currentPrice || 89.99) - 15.0; // Real volume package discount

  return (
    <section id="deals-section" className="py-12 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 border border-blue-400/30">
              <Sparkles className="h-3.5 w-3.5" /> Curated Volume Savings
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
              Workstation Bundle: OS & Productivity Suite
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
              Setting up a new PC or upgrading an office workstation? Combine Windows 11 Professional Retail with Microsoft Office 2024 Home & Business to receive an automatic volume reduction without subscription locks.
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>1x Windows 11 Pro Retail Key (Lifetime & Transferable)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>1x Office 2024 Home & Business (Tied to Microsoft Account)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Simultaneous automated key dispatch + installation PDF manuals</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-baseline gap-4">
              <div>
                <span className="text-3xl font-extrabold text-white">
                  ${bundleCurrent.toFixed(2)}
                </span>
                <span className="ml-3 text-sm text-slate-400 line-through">
                  ${bundleOriginal.toFixed(2)}
                </span>
              </div>
              <span className="rounded-md bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                Transparent Volume Discount (Save ${(bundleOriginal - bundleCurrent).toFixed(0)})
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                id="btn-bundle-order"
                onClick={() => {
                  if (winPro) onAddToCart(winPro);
                  if (offHb) onAddToCart(offHb);
                }}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Add Both Items to Cart
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Comparison Box */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-6 backdrop-blur-xs">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Package Components Breakdown
              </div>

              <div className="space-y-4">
                {/* Product 1 */}
                <div className="flex items-center justify-between rounded-xl bg-slate-900/80 p-4 border border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <img
                      src={winPro.imageUrl}
                      alt={winPro.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{winPro.title}</h4>
                      <p className="text-xs text-slate-400">Retail Tier • Transferable</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">${winPro.currentPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="flex items-center justify-between rounded-xl bg-slate-900/80 p-4 border border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <img
                      src={offHb.imageUrl}
                      alt={offHb.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{offHb.title}</h4>
                      <p className="text-xs text-slate-400">Word, Excel, PowerPoint, Outlook</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">${offHb.currentPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-blue-400" /> Guaranteed direct activation
                </span>
                <span>One-time investment • No recurring fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
