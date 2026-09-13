import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye, Zap, Laptop, Gamepad2, ShieldCheck, Check } from 'lucide-react';

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

  const getPlatformIcon = () => {
    const p = (product.platformTag || product.platform).toLowerCase();
    if (p.includes('steam')) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-slate-300">
          <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5l2.4-3.5a3.5 3.5 0 0 1-.24-1.25c0-.18.02-.36.05-.53l-2.48-1.04a2.5 2.5 0 1 1 .74-1.78l2.9 1.22A3.5 3.5 0 1 1 15.5 15.5c0 .34-.05.67-.14.98l2.47 1.04A9.97 9.97 0 0 0 22 12a10 10 0 0 0-10-10z" />
        </svg>
      );
    }
    if (p.includes('windows')) {
      return <Laptop className="w-3 h-3 text-blue-400" />;
    }
    if (p.includes('xbox')) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-emerald-400">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.88 15.58c-1.28.84-2.92 1.34-4.88 1.34s-3.6-.5-4.88-1.34c.83-.8 2.06-1.57 3.03-2.18.57.51 1.21.78 1.85.78s1.28-.27 1.85-.78c.97.61 2.2 1.38 3.03 2.18z" />
        </svg>
      );
    }
    if (p.includes('software') || p.includes('security')) {
      return <ShieldCheck className="w-3 h-3 text-emerald-400" />;
    }
    return <Gamepad2 className="w-3 h-3 text-amber-400" />;
  };

  const platformDisplay = product.platformTag || product.platform;
  const regionDisplay = product.regionTag ? ` ${product.regionTag}` : '';

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#272935] bg-[#181920] transition-all duration-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5"
    >
      {/* Product Image Area */}
      <div
        onClick={() => onQuickView(product)}
        className="relative aspect-[1.18/1] w-full cursor-pointer overflow-hidden bg-[#111216]"
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick Instant Key Badge */}
        <div className="absolute top-2 left-2">
          <span className="inline-flex items-center gap-1 rounded bg-[#14151a]/90 px-1.5 py-0.5 text-[10px] font-semibold text-amber-400 border border-amber-500/20 backdrop-blur-xs">
            <Zap className="h-2.5 w-2.5" /> Instant
          </span>
        </div>

        {/* Hover overlay with Quick View button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex items-center gap-1.5 rounded-lg bg-[#20222c] px-3 py-1.5 text-xs font-semibold text-white border border-[#353849] shadow-md hover:bg-amber-500 hover:text-black hover:border-amber-400 transition-all"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Product Body */}
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="cursor-pointer text-[13px] font-medium text-slate-100 line-clamp-2 hover:text-amber-400 transition-colors leading-tight min-h-[34px]"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Platform & Region tag */}
          <div className="mt-2 flex items-center gap-1">
            <span className="inline-flex items-center gap-1 rounded bg-[#20222c] px-1.5 py-0.5 text-[10px] font-medium text-slate-300 border border-[#2b2d3d] truncate max-w-full">
              {getPlatformIcon()}
              <span className="truncate">{platformDisplay}{regionDisplay}</span>
            </span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="mt-3 pt-2.5 border-t border-[#232532] flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-white tracking-tight">
                ${product.currentPrice.toFixed(2)}
              </span>
              {discount > 0 && (
                <span className="rounded bg-[#F59E0B] px-1.5 py-0.2 text-[10px] font-black text-black leading-tight">
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

          {/* Add to Cart icon button */}
          <button
            onClick={() => onAddToCart(product)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22242f] text-slate-300 hover:bg-amber-500 hover:text-black border border-[#2e3140] hover:border-amber-400 transition-all duration-150"
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
