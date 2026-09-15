import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { BrandLogo } from './BrandLogo';
import {
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  ChevronDown,
  X,
  ShieldCheck,
  CheckCircle,
  Globe,
} from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBlueprint?: () => void;
  onSelectCategory?: (category: string) => void;
  onHomeClick?: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenAccount: () => void;
  selectedCategory?: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  products,
  onSelectProduct,
  onOpenAccount,
  onSelectCategory,
  onHomeClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredProducts = searchQuery.trim()
    ? products.filter((p) => {
        return (
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      })
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d0e13] border-b border-[#1f2129] shadow-lg font-sans">
      
      {/* 1. Top Bar */}
      <div className="bg-[#08090c] border-b border-[#181920] py-1.5 px-4 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden sm:inline">
              RoyalCDKeys Digital Store
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="https://wa.me/15205427975?text=Hello%20RoyalCDKeys,%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 font-bold hover:underline"
            >
              <Phone className="h-3 w-3" />
              <span>WhatsApp: +1 520-542-7975</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="https://t.me/bigovv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#229ED9] font-bold hover:underline"
            >
              <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>Telegram: @bigovv</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href="mailto:123123xr@gmail.com"
              className="hidden md:flex items-center gap-1.5 text-amber-400 hover:underline"
            >
              <Mail className="h-3 w-3" />
              <span>123123xr@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {/* Currency selector matching screenshot: United States USD $ */}
            <div className="hidden sm:flex items-center gap-1 text-slate-300 font-medium">
              <Globe className="h-3 w-3 text-slate-400" />
              <span>United States USD $</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={onOpenAccount}
              className="flex items-center gap-1 text-slate-300 hover:text-white cursor-pointer"
            >
              <User className="h-3.5 w-3.5" />
              <span>My Account</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Store Header (Logo, Nav links matching screenshot, Search, Cart) */}
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Brand Logo with User's Gold Crown Logo Photo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onHomeClick) onHomeClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 flex items-center cursor-pointer"
          >
            <BrandLogo size="md" />
          </a>

          {/* Navigation Links from Screenshot: Software, Subscriptions, Bestsellers (Games removed) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-200">
            <button
              type="button"
              onClick={() => scrollTo('software-deals-section')}
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Software
            </button>
            <button
              type="button"
              onClick={() => scrollTo('subscriptions-section')}
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Subscriptions
            </button>
            <button
              type="button"
              onClick={() => scrollTo('catalog-section')}
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              Bestsellers
            </button>
            <button
              type="button"
              onClick={() => scrollTo('faq-section')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Search bar & Utility Icons */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Search Input matching royalcdkeys */}
            <div className="relative" ref={searchRef}>
              <div className="flex items-center rounded-lg border border-[#262838] bg-[#141620] overflow-hidden focus-within:border-[#F5A623]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  placeholder="Search products..."
                  className="w-32 sm:w-48 md:w-60 bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-1 text-slate-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    scrollTo('catalog-section');
                    setIsSearchOpen(false);
                  }}
                  className="bg-[#F5A623] hover:bg-[#e09419] text-black px-3 py-2 font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>

              {/* Search Dropdown Results */}
              {isSearchOpen && filteredProducts.length > 0 && (
                <div className="absolute top-full right-0 mt-1.5 w-72 sm:w-80 rounded-xl border border-[#2d3144] bg-[#151722] shadow-2xl z-50 overflow-hidden max-h-80 overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-[#1e2130] cursor-pointer border-b border-[#212435] last:border-b-0 transition-colors"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="h-10 w-10 rounded-md object-cover border border-[#313548] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">{product.title}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-black text-[#F5A623]">
                            ${product.currentPrice.toFixed(2)}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {product.warrantyStatus === 'guaranteed' ? 'Garanti Yes' : 'No Garanti'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Shopping Cart Button */}
            <button
              type="button"
              onClick={onOpenCart}
              className="flex items-center gap-2 rounded-lg bg-[#141620] border border-[#262838] px-3.5 py-2 hover:border-[#F5A623] hover:text-white transition-all cursor-pointer"
            >
              <div className="relative">
                <ShoppingCart className="h-4 w-4 text-[#F5A623]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-slate-200 hidden sm:inline">
                Cart ({cartCount})
              </span>
            </button>

          </div>

        </div>
      </div>

    </header>
  );
};
