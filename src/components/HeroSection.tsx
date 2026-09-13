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
  const win11 = products.find((p) => p.id === 'win-11-pro-retail') || products[0];
  const officeProduct = products.find((p) => p.id === 'office-2024-pro') || products[3] || products[0];

  return (
    <section className="w-full bg-[#121316] py-5 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Left Banner: Windows 11 & Office 2024 (matching screenshot) */}
          <div
            onClick={onShopClick}
            className="lg:col-span-7 group relative overflow-hidden rounded-2xl border border-[#232635] bg-[#0c101a] min-h-[260px] sm:min-h-[320px] p-6 sm:p-10 flex flex-col justify-between cursor-pointer transition-all hover:border-[#383d54]"
          >
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/win11-hero-card.jpg"
                alt="Buy Windows 11 &amp; Office 2024 CD Keys"
                className="h-full w-full object-cover object-right opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-transparent" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Microsoft Operating Systems &amp; Software
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Buy Windows 11, Windows 10 &amp; Office 2024 CD Keys
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 font-normal">
                Official Microsoft digital retail licenses. Lifetime activation &amp; instant delivery from $4.82.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onShopClick();
                }}
                className="inline-flex items-center justify-center rounded-lg bg-[#F5A623] hover:bg-[#e09419] px-6 py-2.5 text-sm font-bold text-black transition-colors shadow-lg shadow-black/30 cursor-pointer"
              >
                Shop Deals
              </button>
            </div>
          </div>

          {/* Right Banner: Microsoft Office 2024 (matching screenshot) */}
          <div
            onClick={() => {
              if (officeProduct) onSelectProduct(officeProduct);
            }}
            className="lg:col-span-5 group relative overflow-hidden rounded-2xl border border-[#232635] bg-[#161720] min-h-[260px] sm:min-h-[320px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all hover:border-[#383d54]"
          >
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/office-2024-pro.jpg"
                alt="Office 2024 Professional Plus"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101117] via-transparent to-transparent opacity-80" />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F5A623]">
                Professional Suite
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                Office 2024
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Professional Plus Lifetime License
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                Official Digital Download
              </span>
              <span className="text-xs font-bold text-[#F5A623] group-hover:underline">
                View Details &rarr;
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
