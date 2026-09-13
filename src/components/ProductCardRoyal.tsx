import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Zap, Laptop, Globe, Layers, CheckCircle2 } from 'lucide-react';

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

  const getPlatformIcon = () => {
    const p = (product.platformTag || product.platform).toLowerCase();
    if (p.includes('windows')) {
      return <Laptop className="w-3 h-3 text-sky-400" />;
    }
    if (p.includes('mac')) {
      return <Globe className="w-3 h-3 text-slate-300" />;
    }
    return <Layers className="w-3 h-3 text-amber-400" />;
  };

  return (
    <div
      id={`card-${product.id}`}
      className="group flex flex-col justify-between rounded-xl border border-[#232635] bg-[#141620] p-3 hover:border-[#F5A623] transition-colors"
    >
      <div>
        {/* Product Image Area */}
        <div
          onClick={() => onQuickView(product)}
          className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg bg-[#0e1017] border border-[#1e202d] flex items-center justify-center"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-2 right-2">
              <span className="rounded bg-[#F5A623] px-1.5 py-0.5 text-[11px] font-black text-black">
                -{discount}%
              </span>
            </div>
          )}

          {/* Instant Delivery Badge */}
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center gap-1 rounded bg-[#0b0c10]/90 px-1.5 py-0.5 text-[10px] font-bold text-slate-300 border border-[#2b2d3d]">
              <Zap className="h-2.5 w-2.5 text-amber-400" />
              <span>Instant</span>
            </span>
          </div>

          {/* Platform Pill at bottom left */}
          <div className="absolute bottom-2 left-2">
            <span className="inline-flex items-center gap-1 rounded bg-[#10121a]/95 px-1.5 py-0.5 text-[10px] font-semibold text-slate-300 border border-[#282b3a]">
              {getPlatformIcon()}
              <span>{product.platformTag || product.platform}</span>
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="mt-2.5 cursor-pointer text-xs sm:text-[13px] font-bold text-white line-clamp-2 leading-snug hover:text-[#F5A623] transition-colors min-h-[36px]"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Region & Stock Info */}
        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1 font-medium text-slate-300">
            <Globe className="h-3 w-3 text-slate-400" />
            <span>GLOBAL</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
            <CheckCircle2 className="h-2.5 w-2.5" />
            <span>In Stock</span>
          </span>
        </div>
      </div>

      {/* Price & Action Buttons */}
      <div className="mt-3 pt-2.5 border-t border-[#202330]">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-sm sm:text-base font-black text-white">
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
        <div className="mt-2.5 grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={() => onInstantBuy(product)}
            className="flex items-center justify-center rounded-lg bg-[#F5A623] hover:bg-[#e09419] py-1.5 text-xs font-black text-black transition-colors cursor-pointer"
          >
            Buy Now
          </button>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1 rounded-lg bg-[#1e212d] hover:bg-[#282c3c] border border-[#313548] py-1.5 text-xs font-bold text-white transition-colors cursor-pointer"
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
