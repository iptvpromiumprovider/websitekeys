import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCardRoyal } from './ProductCardRoyal';
import { ProductLeadForm } from './ProductLeadForm';
import { Check, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

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
  // Top Software Deals (First 10 products from mockData)
  const softwareDeals = products.slice(0, 10);

  // Creative & Productivity Software (Next 10 products)
  const creativeSoftware = products.slice(10, 20);

  // Top Subscription Deals (Next 8 products, including Gemini Advanced, Netflix, Spotify, Crunchyroll)
  const subscriptionDeals = products.slice(20, 28);

  const [expandedSection, setExpandedSection] = useState<{ [key: string]: boolean }>({
    software: false,
    creative: false,
    subscriptions: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div id="catalog-section" className="w-full bg-[#0b0c10] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">

        {/* ============================================================== */}
        {/* SECTION 1: TOP SOFTWARE DEALS (Exact match from screenshot)    */}
        {/* ============================================================== */}
        <section id="software-deals-section" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-5 sm:mb-6 border-b border-[#1f222e] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Top Software Deals
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Genuine OEM &amp; Retail Microsoft Windows licenses &amp; Office suites
              </p>
            </div>
            <span className="text-xs font-bold text-[#F5A623] bg-[#F5A623]/10 px-2.5 py-1 rounded border border-[#F5A623]/30">
              Save up to 98%
            </span>
          </div>

          {/* 5 columns on large screens matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {(expandedSection.software ? softwareDeals : softwareDeals.slice(0, 10)).map((product) => (
              <ProductCardRoyal
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onInstantBuy={onInstantBuy}
                onQuickView={onQuickView}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => toggleSection('software')}
              className="rounded-lg border border-[#2b2f40] bg-[#141620] hover:bg-[#1d202e] hover:border-[#F5A623] px-8 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer"
            >
              {expandedSection.software ? 'Show Less' : 'View All'}
            </button>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: CREATIVE & PRODUCTIVITY SOFTWARE (from screenshot)  */}
        {/* ============================================================== */}
        <section id="creative-software-section" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-5 sm:mb-6 border-b border-[#1f222e] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Creative &amp; Productivity Software
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Utilities, security, PDF editors, backup solutions, and Mac compatibility
              </p>
            </div>
          </div>

          {/* 5 columns on large screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {(expandedSection.creative ? creativeSoftware : creativeSoftware.slice(0, 10)).map((product) => (
              <ProductCardRoyal
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onInstantBuy={onInstantBuy}
                onQuickView={onQuickView}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => toggleSection('creative')}
              className="rounded-lg border border-[#2b2f40] bg-[#141620] hover:bg-[#1d202e] hover:border-[#F5A623] px-8 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer"
            >
              {expandedSection.creative ? 'Show Less' : 'View All'}
            </button>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: TOP SUBSCRIPTION DEALS (from screenshot & uploads)   */}
        {/* ============================================================== */}
        <section id="subscriptions-section" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-5 sm:mb-6 border-b border-[#1f222e] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Top Subscription Deals
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Netflix 4K (Garanti Yes), Spotify Premium (No Garanti), Gemini Advanced &amp; Crunchyroll
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
              Netflix Garanti Yes
            </span>
          </div>

          {/* 5 columns on large screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {subscriptionDeals.map((product) => (
              <ProductCardRoyal
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onInstantBuy={onInstantBuy}
                onQuickView={onQuickView}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => toggleSection('subscriptions')}
              className="rounded-lg border border-[#2b2f40] bg-[#141620] hover:bg-[#1d202e] hover:border-[#F5A623] px-8 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer"
            >
              {expandedSection.subscriptions ? 'Show Less' : 'View All'}
            </button>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: WARRANTY TERMS & LEAD ORDER DISPATCH                */}
        {/* ============================================================== */}
        <section className="rounded-2xl border border-[#252838] bg-[#11131c] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Clear Warranty Transparency */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#191c28] px-3 py-1 text-xs font-bold text-[#F5A623] border border-[#2b2f42]">
                <Zap className="h-3.5 w-3.5" />
                <span>Transparent Wholesale Terms</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Warranty &amp; Activation Guarantee Policy
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                RoyalCDKeys operates transparently so you know exactly what is covered prior to ordering:
              </p>

              <div className="space-y-3 pt-2">
                <div className="rounded-xl border border-emerald-500/40 bg-[#122319] p-3.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                    <Check className="h-4 w-4 shrink-0" />
                    <span>Netflix Premium 4K UHD ($1.99) - Garanti Yes</span>
                  </div>
                  <p className="text-xs text-emerald-300/80 mt-1 pl-6">
                    Full 100% replacement warranty included throughout your subscription period. If credentials expire or reset, you receive instant replacement on WhatsApp.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-500/40 bg-[#251f14] p-3.5">
                  <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>Windows 11 / 10 Keys &amp; Spotify ($2.99) - No Garanti</span>
                  </div>
                  <p className="text-xs text-amber-300/80 mt-1 pl-6">
                    Offered at direct rock-bottom liquidation wholesale rates with single activation guarantee. Sold without extended replacement warranty (Sans Garantie).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Lead & WhatsApp Order Form */}
            <div className="lg:col-span-6">
              <ProductLeadForm
                products={products}
                onOrderCreated={(prod) => onInstantBuy(prod)}
              />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
