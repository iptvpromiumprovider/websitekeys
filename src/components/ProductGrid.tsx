import React, { useState, useMemo } from 'react';
import { Product, CategoryId } from '../types';
import { ProductCard } from './ProductCard';
import { Filter, SlidersHorizontal, Layers, Check } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onQuickView,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [platformFilter, setPlatformFilter] = useState<string>('all');
  const [licenseFilter, setLicenseFilter] = useState<string>('all');

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.categoryId === selectedCategory;
      const matchPlatform =
        platformFilter === 'all' ||
        (platformFilter === 'windows' && (p.platform === 'Windows' || p.platform === 'Multi-Platform')) ||
        (platformFilter === 'mac' && (p.platform === 'Mac' || p.platform === 'Multi-Platform'));
      const matchLicense =
        licenseFilter === 'all' ||
        (licenseFilter === 'retail' && p.licenseType.includes('Retail')) ||
        (licenseFilter === 'oem' && p.licenseType.includes('OEM'));

      return matchCat && matchPlatform && matchLicense;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // featured
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [products, selectedCategory, platformFilter, licenseFilter, sortBy]);

  return (
    <section id="catalog-section" className="py-12 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 pb-6 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Verified Digital Catalog
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {selectedCategory === 'all'
                ? 'Featured Software & License Keys'
                : `${selectedCategory.toUpperCase()} Licenses & Keys`}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Showing {filteredProducts.length} verified digital products with instant automated fulfillment.
            </p>
          </div>

          {/* Quick Category Pills */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {[
              { id: 'all', label: 'All Licenses' },
              { id: 'windows', label: 'Windows' },
              { id: 'office', label: 'Office' },
              { id: 'software', label: 'Security' },
              { id: 'games', label: 'Games' },
              { id: 'gift-cards', label: 'Gift Cards' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as any)}
                className={`rounded-lg px-3 py-1.5 font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Sort Controls Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-700 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5 text-blue-600" /> Filter:
            </span>

            {/* Platform Filter */}
            <select
              value={platformFilter}
              onChange={(e) => setPlatformFilter(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-700 focus:border-blue-600 focus:outline-hidden"
            >
              <option value="all">Platform: All</option>
              <option value="windows">Platform: Windows</option>
              <option value="mac">Platform: Mac Compatible</option>
            </select>

            {/* License Type Filter */}
            <select
              value={licenseFilter}
              onChange={(e) => setLicenseFilter(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-700 focus:border-blue-600 focus:outline-hidden"
            >
              <option value="all">License Tier: All</option>
              <option value="retail">Retail (Transferable)</option>
              <option value="oem">OEM (Single PC)</option>
            </select>

            {(platformFilter !== 'all' || licenseFilter !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setPlatformFilter('all');
                  setLicenseFilter('all');
                }}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 focus:border-blue-600 focus:outline-hidden"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <p className="text-sm font-semibold text-slate-800">No products match the selected criteria</p>
            <p className="mt-1 text-xs text-slate-500">
              Try adjusting your platform or category filters to discover available license keys.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setPlatformFilter('all');
                setLicenseFilter('all');
              }}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
