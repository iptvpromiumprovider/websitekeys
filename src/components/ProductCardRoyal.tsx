import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardRoyalProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onInstantBuy: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCardRoyal: React.FC<ProductCardRoyalProps> = ({
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
          <span>·</span>
          <span>GLOBAL KEY</span>
        </div>

        {/* Product Title in Space Grotesk */}
        <h3
          onClick={() => onQuickView(product)}
          className="mt-1 cursor-pointer text-xs sm:text-[13px] font-bold text-white line-clamp-2 leading-snug hover:text-[#F5A623] transition-colors min-h-[36px] font-['Space_Grotesk',sans-serif]"
          title={product.title}
        >
          {product.title}
        </h3>
      </div>

      {/* Price & Action Buttons */}
      <div className="mt-3 pt-2.5 border-t border-white/10">
        <div className="flex items-baseline justify-between font-mono">
          <div>
            <span className="text-sm sm:text-base font-bold text-white tracking-tight">
              ${product.currentPrice.toFixed(2)}
            </span>
            {product.originalPrice > product.currentPrice && (
              <span className="ml-1.5 text-[11px] text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons: 1-Click Buy & Add to Cart */}
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onInstantBuy(product)}
            className="flex items-center justify-center bg-[#F5A623] hover:bg-[#E09419] py-2 text-[11px] uppercase font-bold tracking-wider text-black transition-colors cursor-pointer font-['Space_Grotesk',sans-serif]"
          >
            Buy Now
          </button>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1 bg-[#1A1C24] hover:bg-[#252834] border border-white/10 py-2 text-[11px] uppercase font-bold tracking-wider text-white transition-colors cursor-pointer font-['Space_Grotesk',sans-serif]"
            title="Add to cart"
          >
            <ShoppingCart className="h-3 w-3 text-slate-300" />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
