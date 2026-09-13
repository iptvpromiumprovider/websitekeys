import React from 'react';
import { Product } from '../types';
import { Award, Star, Zap, Check, ArrowRight } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  onAddToCart,
  onQuickView,
}) => {
  // Sort products dynamically by sales rank
  const bestSellers = [...products]
    .filter((p) => p.bestSellerRank !== undefined)
    .sort((a, b) => (a.bestSellerRank || 99) - (b.bestSellerRank || 99))
    .slice(0, 3);

  return (
    <section id="bestsellers-section" className="py-12 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md mb-2">
              <Award className="h-3.5 w-3.5" /> Proven Customer Demand
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Verified Best-Selling Licenses
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              High-volume digital licenses with certified activation success rates and comprehensive documentation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestSellers.map((product) => {
            const discount = Math.round(
              ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
            );

            return (
              <div
                key={product.id}
                id={`bestseller-${product.id}`}
                className="relative flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all hover:border-blue-300 hover:shadow-md hover:bg-white"
              >
                {/* Ranking Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-bold text-white">
                    #{product.bestSellerRank} Top Seller
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <Zap className="h-3 w-3" /> &lt;60s Delivery
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div
                    onClick={() => onQuickView(product)}
                    className="aspect-16/9 w-full overflow-hidden rounded-lg bg-slate-100 cursor-pointer mb-3"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span>{product.platform}</span>
                    <span>•</span>
                    <span className="font-medium text-slate-700">{product.licenseType}</span>
                  </div>

                  <h3
                    onClick={() => onQuickView(product)}
                    className="cursor-pointer text-base font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1"
                  >
                    {product.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <div className="flex text-amber-400">
                      <Star className="h-3.5 w-3.5 fill-current" />
                    </div>
                    <span className="font-bold text-slate-800">{product.rating}</span>
                    <span className="text-slate-500">({product.reviewCount} customer reviews)</span>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-xl font-extrabold text-slate-900">
                        ${product.currentPrice.toFixed(2)}
                      </span>
                      <span className="ml-2 text-xs text-slate-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                      -{discount}%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Specifications
                    </button>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-xs"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
