import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Check, ShieldCheck, Download, Star, Sparkles } from 'lucide-react';
import { ProductLeadForm } from './ProductLeadForm';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Software Deals', count: products.length },
    { id: 'windows', label: 'Windows OS', count: products.filter(p => p.categoryId === 'windows').length },
    { id: 'office', label: 'Office Suites', count: products.filter(p => p.categoryId === 'office').length },
    { id: 'subscription', label: 'Microsoft 365', count: products.filter(p => p.categoryId === 'subscription').length },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.categoryId === selectedCategory);

  return (
    <section id="catalog-section" className="w-full bg-[#121316] py-10 sm:py-14 border-b border-[#1f2127]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with SEO-optimized h2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="h-4 w-4 text-[#F5A623]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
                Verified Digital Licenses
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Top Software Deals &amp; Digital CD Keys
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Genuine Microsoft retail licenses with instant digital delivery, lifetime validity &amp; transfer rights.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#1a1b22] border border-[#262835] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#F5A623] text-black shadow'
                    : 'text-slate-300 hover:text-white hover:bg-[#252733]'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product) => {
            const discount = product.discountPercent ?? Math.round(
              ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
            );

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#262835] bg-[#1a1b22] p-3.5 transition-all hover:border-[#3d4154] hover:bg-[#1e2028] cursor-pointer shadow-md"
              >
                <div>
                  {/* Square Product Image */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#0e1017]">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 rounded bg-black/70 backdrop-blur-xs px-2 py-0.5 text-[10px] font-bold text-amber-400 border border-amber-500/30">
                      {product.licenseType}
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="mt-3 text-sm font-semibold text-white line-clamp-2 leading-snug group-hover:text-[#F5A623] transition-colors">
                    {product.title}
                  </h3>

                  {/* Platform & Rating Pill */}
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded bg-[#242633] px-2 py-0.5 text-[11px] font-medium text-slate-300">
                      <svg className="h-3 w-3 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                      </svg>
                      <span>{product.platformTag || product.platform}</span>
                    </span>

                    <div className="flex items-center text-amber-400 text-xs font-semibold">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="ml-1 text-slate-200">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Pricing Row */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-white">
                      ${product.currentPrice.toFixed(2)}
                    </span>
                    <span className="rounded bg-[#F5A623] px-1.5 py-0.5 text-[10px] font-extrabold text-black">
                      -{discount}%
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-4 pt-3 border-t border-[#252736] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onInstantBuy(product);
                    }}
                    className="flex-1 rounded-lg bg-[#F5A623] hover:bg-[#e09419] py-2 text-center text-xs font-bold text-black transition-colors cursor-pointer"
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="rounded-lg border border-[#303346] bg-[#222432] hover:bg-[#2c2f42] p-2 text-slate-200 transition-colors cursor-pointer"
                    aria-label="Add to cart"
                    title="Add to cart"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instant Lead / Direct Order Form */}
        <div className="mt-14 max-w-2xl mx-auto">
          <ProductLeadForm
            defaultProduct="Windows 11 Pro"
            title="Direct Order &amp; License Request"
            subtitle="Choose your product or operating system version and enter your email for immediate processing."
          />
        </div>

        {/* Technical Specification Matrix (Clean, professional, high-trust) */}
        <div className="mt-14 pt-10 border-t border-[#1f2127]">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white">Technical Comparison: Windows 11 Pro vs. Windows 10 Pro</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Both keys are 100% genuine Microsoft Retail licenses with lifetime validity and transfer rights.</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#252735] bg-[#161720]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-[#252735] bg-[#1b1d27] text-slate-300 font-semibold">
                <tr>
                  <th className="py-3.5 px-4">Feature / Specification</th>
                  <th className="py-3.5 px-4 text-[#F5A623]">Windows 11 Pro ($5.43)</th>
                  <th className="py-3.5 px-4 text-slate-200">Windows 10 Pro ($4.82)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#232534] text-slate-300">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">License Model</td>
                  <td className="py-3 px-4 font-semibold text-[#F5A623]">Retail (Transferable to new PC)</td>
                  <td className="py-3 px-4 font-semibold text-slate-300">Retail (Transferable to new PC)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">BitLocker Encryption</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">Full 256-Bit Support</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">Full 256-Bit Support</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Virtualization (Hyper-V &amp; Sandbox)</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">Included</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Remote Desktop (Host &amp; Client)</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">Included</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Hardware Requirements</td>
                  <td className="py-3 px-4">TPM 2.0 &amp; UEFI Secure Boot</td>
                  <td className="py-3 px-4">Standard 1 GHz 64-bit / 32-bit</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Official Media Download</td>
                  <td className="py-3 px-4 font-mono text-xs">Direct Microsoft Media Creation Tool</td>
                  <td className="py-3 px-4 font-mono text-xs">Direct Microsoft Media Creation Tool</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Activation Handshake</td>
                  <td className="py-3 px-4">Direct Microsoft Server Validation</td>
                  <td className="py-3 px-4">Direct Microsoft Server Validation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
