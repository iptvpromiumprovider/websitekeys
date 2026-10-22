import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardKeyWinProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onInstantBuy: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCardKeyWin: React.FC<ProductCardKeyWinProps> = ({
  product,
  onAddToCart,
  onInstantBuy,
  onQuickView,
}) => {
  const discount = product.discountPercent ?? Math.round(
    ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
  );

  return (
    <div
      id={`card-${product.id}`}
      className="group flex flex-col justify-between border border-white/10 bg-[#111216] p-3.5 hover:border-[#F5A623]/60 hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm"
    >
      <div>
        {/* Product Image Area */}
        <div
          onClick={() => onQuickView(product)}
          className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#0A0A0A] border border-white/10 flex items-center justify-center"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Minimalist Discount Tag */}
          {discount > 0 && (
            <div className="absolute top-2 right-2">
              <span className="font-mono text-[10px] font-bold text-black bg-[#F5A623] px-1.5 py-0.5">
                -{discount}%
              </span>
            </div>
          )}

          {/* Instant Delivery Tag */}
          <div className="absolute top-2 left-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-300 bg-[#0A0A0A]/90 px-1.5 py-0.5 border border-white/10">
              Instant
            </span>
          </div>
        </div>

        {/* Clean Editorial Metadata (Zero Pill) */}
        <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
          <span className="text-[#F5A623] font-bold">{product.platformTag || product.platform}</span>
          <span className="text-slate-500">{product.regionTag || 'Global'}</span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="mt-1.5 text-xs sm:text-sm font-bold text-white line-clamp-2 hover:text-[#F5A623] cursor-pointer transition-colors leading-snug font-['Space_Grotesk',sans-serif]"
        >
          {product.title}
        </h3>
      </div>

      <div className="mt-3.5 pt-3 border-t border-white/10">
        {/* Price display */}
        <div className="flex items-baseline justify-between mb-2.5">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-base sm:text-lg font-black text-white">
              ${product.currentPrice.toFixed(2)}
            </span>
            {product.originalPrice > product.currentPrice && (
              <span className="font-mono text-[11px] text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 font-bold">
            IN STOCK
          </span>
        </div>

        {/* Action Buttons: Minimalist Neo-Brutalist Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1.5 border border-white/10 bg-[#16171E] hover:bg-[#1E202B] hover:border-white/30 text-slate-200 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer font-mono"
            title="Add to cart"
          >
            <ShoppingCart className="h-3 w-3 text-[#F5A623]" />
            <span>Cart</span>
          </button>

          <button
            type="button"
            onClick={() => onInstantBuy(product)}
            className="bg-[#F5A623] hover:bg-[#E09419] hover:-translate-y-0.5 text-black py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer font-mono shadow-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Backward-compatible alias
export const ProductCardRoyal = ProductCardKeyWin;
