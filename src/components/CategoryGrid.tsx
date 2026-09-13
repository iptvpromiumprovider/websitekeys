import React from 'react';
import { Category, CategoryId } from '../types';
import { Laptop, FileSpreadsheet, ShieldCheck, Gamepad2, Gift, ArrowRight, Layers } from 'lucide-react';

interface CategoryGridProps {
  categories: Category[];
  selectedCategory: CategoryId | 'all';
  onSelectCategory: (id: CategoryId | 'all') => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="h-6 w-6" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="h-6 w-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6" />;
      case 'Gamepad2':
        return <Gamepad2 className="h-6 w-6" />;
      case 'Gift':
        return <Gift className="h-6 w-6" />;
      default:
        return <Layers className="h-6 w-6" />;
    }
  };

  return (
    <section id="categories-section" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Modular Catalog Architecture
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Browse by Software Category
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Instant digital licenses sourced through legitimate distribution channels with verified installation mirrors.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => onSelectCategory('all')}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              All Categories ({categories.reduce((acc, c) => acc + c.itemCount, 0)} Products)
            </button>
          </div>
        </div>

        {/* Scalable Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                id={`category-card-${category.id}`}
                onClick={() => onSelectCategory(category.id)}
                className={`group relative flex flex-col justify-between text-left rounded-xl border p-5 transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-600 bg-white ring-2 ring-blue-600/20 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}
                  >
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-500">{category.itemCount} Licenses</span>
                  <span
                    className={`inline-flex items-center gap-1 font-semibold transition-colors ${
                      isSelected ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                    }`}
                  >
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
