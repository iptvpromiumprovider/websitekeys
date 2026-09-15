import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCardRoyal } from './ProductCardRoyal';


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
  // Top Software Deals (Windows, Office, and Core Software)
  const softwareDeals = products.filter(
    (p) => p.categoryId === 'windows' || p.categoryId === 'office' || p.categoryId === 'software'
  );

  // Top Subscription & Gaming Deals (Xbox Game Pass, Gemini Advanced, Steam Keys)
  const subscriptionDeals = products.filter(
    (p) => p.categoryId === 'subscription' || p.categoryId === 'streaming' || p.categoryId === 'subscriptions'
  );

  const [expandedSection, setExpandedSection] = useState<{ [key: string]: boolean }>({
    software: false,
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
          {softwareDeals.length > 10 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => toggleSection('software')}
                className="rounded-lg border border-[#2b2f40] bg-[#141620] hover:bg-[#1d202e] hover:border-[#F5A623] px-8 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer"
              >
                {expandedSection.software ? 'Show Less' : 'View All'}
              </button>
            </div>
          )}
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: TOP SUBSCRIPTION DEALS (from screenshot & uploads)   */}
        {/* ============================================================== */}
        <section id="subscriptions-section" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-5 sm:mb-6 border-b border-[#1f222e] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Top Gaming &amp; Subscription Deals
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Xbox Game Pass subscriptions, AI productivity tools, and digital gaming keys
              </p>
            </div>
          </div>

          {/* 5 columns on large screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {(expandedSection.subscriptions ? subscriptionDeals : subscriptionDeals.slice(0, 10)).map((product) => (
              <ProductCardRoyal
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onInstantBuy={onInstantBuy}
                onQuickView={onQuickView}
              />
            ))}
          </div>

          {/* View All Button if more than 10 */}
          {subscriptionDeals.length > 10 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => toggleSection('subscriptions')}
                className="rounded-lg border border-[#2b2f40] bg-[#141620] hover:bg-[#1d202e] hover:border-[#F5A623] px-8 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer"
              >
                {expandedSection.subscriptions ? 'Show Less' : 'View All'}
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};
