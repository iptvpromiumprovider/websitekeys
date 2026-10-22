import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const discount = product.discountPercent ?? Math.round(
    ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
  );

  const platformDisplay = product.platformTag || product.platform;
  const regionDisplay = product.regionTag ? ` · ${product.regionTag}` : '';

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#111216] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F5A623]/50 shadow-sm"
    >
      {/* Product Image Area */}
      <div
        onClick={() => onQuickView(product)}
        className="relative aspect-[1.18/1] w-full cursor-pointer overflow-hidden bg-[#0A0A0A]"
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Minimalist Instant Delivery Label */}
        <div className="absolute top-2 left-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#F5A623] bg-[#0A0A0A]/90 px-2 py-0.5 border border-white/10">
            Instant Dispatch
          </span>
        </div>

        {/* Hover overlay with Quick View button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-1.5 bg-[#F5A623] text-black px-4 py-2 text-xs uppercase font-bold tracking-wider font-['Space_Grotesk',sans-serif] hover:bg-[#E09419] transition-all"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Product Body */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          {/* Unboxed Metadata (Zero Pill Slop) */}
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
            <span className="text-[#F5A623] font-bold">{product.categoryId}</span>
            <span>/</span>
            <span className="truncate">{platformDisplay}{regionDisplay}</span>
          </div>

          {/* Title in Space Grotesk */}
          <h3
            onClick={() => onQuickView(product)}
            className="cursor-pointer text-sm font-bold text-white line-clamp-2 hover:text-[#F5A623] transition-colors leading-snug font-['Space_Grotesk',sans-serif] min-h-[38px]"
            title={product.title}
          >
            {product.title}
          </h3>
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-white tracking-tight">
                ${product.currentPrice.toFixed(2)}
              </span>
              {discount > 0 && (
                <span className="text-[10px] font-bold text-[#F5A623]">
                  -{discount}%
                </span>
              )}
            </div>
            {product.originalPrice > product.currentPrice && (
              <span className="text-[11px] text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart button */}
          <button
            onClick={() => onAddToCart(product)}
            className="flex h-9 w-9 items-center justify-center bg-[#1A1C24] text-slate-200 hover:bg-[#F5A623] hover:text-black border border-white/10 hover:border-[#F5A623] transition-all duration-200 cursor-pointer"
            title="Add to Cart"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
