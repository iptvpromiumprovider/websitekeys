import React from 'react';
import { GENRE_CATEGORIES } from '../data/mockData';
import { RoyalLogo } from './RoyalLogo';

interface CategoryTilesProps {
  onSelectGenre: (genre: string) => void;
}

export const CategoryTiles: React.FC<CategoryTilesProps> = ({ onSelectGenre }) => {
  return (
    <section className="w-full bg-[#121316] py-10 border-t border-[#22242e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Categories
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            Explore 1,200+ Genuine Digital CD Keys
          </span>
        </div>

        {/* 7-card responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {GENRE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectGenre(cat.id)}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl border border-[#272935] bg-[#181920] transition-all duration-300 hover:border-amber-500/70 hover:shadow-xl hover:shadow-amber-500/10"
            >
              {/* Background Art */}
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* RK Crown emblem in top-right / bottom corner matching screenshot */}
              <div className="absolute top-2.5 right-2.5 opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black/60 border border-amber-500/30 backdrop-blur-xs">
                  <span className="text-[9px] font-black text-amber-400">RK</span>
                </div>
              </div>

              {/* Bottom Title & Count */}
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                  {cat.itemCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
