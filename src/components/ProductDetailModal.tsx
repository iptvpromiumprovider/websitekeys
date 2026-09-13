import React, { useState } from 'react';
import { Product } from '../types';
import {
  X,
  Star,
  CheckCircle,
  Zap,
  ShieldCheck,
  Download,
  AlertTriangle,
  Cpu,
  HardDrive,
  Monitor,
  Layers,
  Lock,
  RotateCcw,
  Check,
  CreditCard,
  ShoppingCart,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onInstantBuy: (product: Product) => void;
  relatedProducts: Product[];
  onSelectRelated: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onInstantBuy,
  relatedProducts,
  onSelectRelated,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'included' | 'requirements' | 'activation' | 'refund'>('overview');

  if (!product) return null;

  const discountPercent = product.discountPercent ?? Math.round(
    ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div
        id="product-detail-modal"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#16171f] text-slate-200 shadow-2xl border border-[#2b2d3d]"
      >
        {/* Sticky Close Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#242634] bg-[#16171f]/95 px-6 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span>Catalog</span>
            <span>/</span>
            <span className="capitalize text-amber-400">{product.categoryId}</span>
            <span>/</span>
            <span className="text-white font-semibold truncate max-w-xs">{product.title}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-[#252835] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {/* ABOVE THE FOLD SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#242634]">
            {/* Left Col: Product Image and Key Delivery Badges */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#2d3040] bg-[#101116]">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 rounded bg-[#101116]/90 px-2 py-0.5 text-xs font-semibold text-amber-400 border border-amber-500/30 backdrop-blur-xs">
                    <Zap className="h-3.5 w-3.5" /> Instant Delivery
                  </span>
                </div>
                {discountPercent > 0 && (
                  <div className="absolute top-2.5 right-2.5">
                    <span className="rounded bg-[#F59E0B] px-2 py-0.5 text-xs font-black text-black">
                      -{discountPercent}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Delivery & Security Pillars */}
              <div className="mt-4 rounded-xl border border-[#262837] bg-[#1a1c25] p-3.5 space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Instant Key Delivery:</span> Sent to your email & dashboard vault in under 60 seconds.
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">100% Guaranteed Genuine:</span> Official cryptographic publisher validation.
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <RotateCcw className="h-4 w-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">30-Day Replacement:</span> Full money-back warranty if unredeemed.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Title, Pricing, and Action CTAs */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Platform / SKU Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="rounded bg-[#222430] border border-[#2e3140] px-2.5 py-0.5 text-xs font-medium text-slate-200">
                    {product.platformTag || product.platform}
                  </span>
                  <span className="rounded bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
                    {product.regionTag || product.region}
                  </span>
                  <span className="text-xs text-slate-500">SKU: {product.sku}</span>
                </div>

                <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {product.title}
                </h1>

                {/* Rating & In-Stock */}
                <div className="mt-2.5 flex items-center gap-3">
                  <div className="flex items-center text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-xs font-bold text-slate-200">{product.rating.toFixed(1)}</span>
                    <span className="ml-1 text-xs text-slate-400">({product.reviewCount} reviews)</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>In Stock ({product.stockCount} keys left)</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Price block */}
                <div className="mt-5 rounded-xl bg-[#1e202a] border border-[#2b2d3d] p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Digital License Price</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl font-black text-white">
                        ${product.currentPrice.toFixed(2)}
                      </span>
                      {product.originalPrice > product.currentPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center rounded-md bg-[#F59E0B] px-2.5 py-1 text-xs font-extrabold text-black">
                      Save ${(product.originalPrice - product.currentPrice).toFixed(2)}
                    </span>
                    <span className="block text-[11px] text-emerald-400 mt-1 font-medium">
                      ✓ Zero Delivery Fee
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={() => onInstantBuy(product)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] py-3.5 text-sm font-extrabold text-black transition-all shadow-lg shadow-amber-500/10 active:scale-99"
                >
                  <CreditCard className="h-4 w-4 stroke-[2.5]" />
                  <span>Instant Buy & Reveal Key (${product.currentPrice.toFixed(2)})</span>
                </button>

                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#333647] bg-[#222430] hover:bg-[#2a2d3d] py-3 text-sm font-semibold text-white transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* TABBED SPECIFICATION & ACCREDITATION SECTION */}
          <div className="mt-8">
            <div className="flex border-b border-[#242634] space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar">
              {[
                { id: 'overview', label: 'Overview & Features' },
                { id: 'included', label: "What's Included" },
                { id: 'requirements', label: 'System Requirements' },
                { id: 'activation', label: 'Activation Steps' },
                { id: 'refund', label: 'License Policy & FAQ' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`border-b-2 py-3 px-3 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="py-6 text-xs sm:text-sm text-slate-300">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    This digital license provides lifetime cryptographic validation for {product.title}. Sourced through authorized distributor agreements in accordance with European Court of Justice Case C-128/11.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <div className="rounded-lg border border-[#272938] bg-[#1a1c25] p-3.5">
                      <span className="font-semibold text-white block">Official Channel Delivery</span>
                      <span className="text-slate-400 text-xs">Setup performed exclusively via vendor media and direct publisher activation servers.</span>
                    </div>
                    <div className="rounded-lg border border-[#272938] bg-[#1a1c25] p-3.5">
                      <span className="font-semibold text-white block">Multi-Language & Global</span>
                      <span className="text-slate-400 text-xs">Supports English, Spanish, German, French, and all regional operating system language packs.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'included' && (
                <div className="space-y-2.5">
                  <p className="font-semibold text-white mb-2">Package Contents:</p>
                  {product.whatsIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'requirements' && (
                <div className="space-y-3">
                  <div className="rounded-xl border border-[#272938] bg-[#1a1c25] p-4 divide-y divide-[#242634]">
                    <div className="py-2 flex justify-between">
                      <span className="font-semibold text-white">Supported OS</span>
                      <span className="text-slate-400">{product.systemRequirements.os}</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="font-semibold text-white">Processor</span>
                      <span className="text-slate-400">{product.systemRequirements.processor}</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="font-semibold text-white">Memory (RAM)</span>
                      <span className="text-slate-400">{product.systemRequirements.memory}</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="font-semibold text-white">Storage Space</span>
                      <span className="text-slate-400">{product.systemRequirements.storage}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'activation' && (
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Follow these verified 3-step activation instructions to bind and register your license:
                  </p>
                  <div className="space-y-3">
                    {product.activationSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg border border-[#272938] bg-[#1a1c25] p-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 font-bold text-[11px] text-black">
                          {idx + 1}
                        </span>
                        <span className="text-slate-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'refund' && (
                <div className="space-y-3">
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200">
                    <span className="font-bold text-amber-400 block mb-1">30-Day Money-Back Guarantee</span>
                    Unredeemed product keys are eligible for an immediate full refund or exchange within 30 days of purchase. If a key fails Microsoft online validation, our technical support responds within 2 hours to provide a diagnostic verification or immediate replacement.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RELATED PRODUCTS */}
          {relatedProducts.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#242634]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Customers Also Purchased
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {relatedProducts.slice(0, 4).map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="group cursor-pointer rounded-lg border border-[#272938] bg-[#1a1c25] p-2.5 hover:border-amber-500/50 transition-all"
                  >
                    <img
                      src={rel.imageUrl}
                      alt={rel.title}
                      className="aspect-[4/3] w-full rounded object-cover mb-2"
                    />
                    <div className="text-xs font-semibold text-white truncate group-hover:text-amber-400">
                      {rel.title}
                    </div>
                    <div className="text-xs font-bold text-amber-400 mt-1">
                      ${rel.currentPrice.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
