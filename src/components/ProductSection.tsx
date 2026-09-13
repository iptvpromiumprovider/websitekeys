import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface ProductSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  defaultLimit?: number;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  title,
  subtitle,
  icon,
  products,
  onAddToCart,
  onQuickView,
  defaultLimit = 10,
}) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, defaultLimit);

  if (products.length === 0) return null;

  return (
    <section id={id} className="w-full bg-[#121316] py-10 border-t border-[#21232d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            {icon}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
            {products.length} Products Available
          </span>
        </div>

        {/* 5-Column Responsive Product Grid from Screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* View All Button from Screenshot */}
        {products.length > defaultLimit && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1b1c23] hover:bg-[#232530] border border-[#2c2e3d] hover:border-amber-500/50 px-8 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-amber-400 transition-all shadow-md active:scale-98"
            >
              <span>{showAll ? 'Show Less' : 'View All'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showAll ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
