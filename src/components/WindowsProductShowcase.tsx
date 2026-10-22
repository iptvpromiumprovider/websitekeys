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
    <div id="catalog-section" className="w-full bg-[#0A0A0A] py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* SECTION 1: TOP SOFTWARE DEALS */}
        <section id="software-deals-section" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 border-b border-white/10 pb-4 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F5A623] mb-1.5">
                <span>02</span>
                <span className="text-white/20">/</span>
                <span>OPERATING SYSTEMS &amp; PRODUCTIVITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
                Top Software Licenses.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Authentic Microsoft Windows OEM &amp; Retail product keys and Office suites
              </p>
            </div>
            <div className="text-xs font-mono text-[#F5A623] uppercase tracking-wider">
              Save up to 98% Wholesale Margin
            </div>
          </div>

          {/* 5 columns on large screens */}
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
                className="border border-white/10 bg-[#111216] hover:bg-[#181920] hover:border-[#F5A623] px-8 py-3 text-xs uppercase font-bold tracking-wider text-white transition-all duration-200 cursor-pointer font-['Space_Grotesk',sans-serif]"
              >
                {expandedSection.software ? 'Show Less' : 'View All Software'}
              </button>
            </div>
          )}
        </section>

        {/* SECTION 2: TOP SUBSCRIPTION DEALS */}
        <section id="subscriptions-section" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 border-b border-white/10 pb-4 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F5A623] mb-1.5">
                <span>03</span>
                <span className="text-white/20">/</span>
                <span>GAMING PASSES &amp; AI PRODUCTIVITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
                Gaming &amp; Subscription Passes.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Xbox Game Pass Ultimate, Google AI Advanced, and digital gaming licenses
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Global Region-Free Activation
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

          {/* View All Button */}
          {subscriptionDeals.length > 10 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => toggleSection('subscriptions')}
                className="border border-white/10 bg-[#111216] hover:bg-[#181920] hover:border-[#F5A623] px-8 py-3 text-xs uppercase font-bold tracking-wider text-white transition-all duration-200 cursor-pointer font-['Space_Grotesk',sans-serif]"
              >
                {expandedSection.subscriptions ? 'Show Less' : 'View All Gaming & Passes'}
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};
