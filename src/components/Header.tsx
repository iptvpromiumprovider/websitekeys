import React, { useState, useRef, useEffect } from 'react';
import { Product, CategoryId } from '../types';
import { RoyalLogo } from './RoyalLogo';
import {
  Search,
  ShoppingCart,
  User,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Layers,
  ChevronDown,
  Laptop,
  Gamepad2,
  Flame,
  Globe,
  SlidersHorizontal,
} from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBlueprint: () => void;
  onSelectCategory: (id: CategoryId | 'all') => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenAccount: () => void;
  selectedCategory: CategoryId | 'all';
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenBlueprint,
  onSelectCategory,
  products,
  onSelectProduct,
  onOpenAccount,
  selectedCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('United States USD $');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter search results dynamically
  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.edition.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
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

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121316] border-b border-[#232530] shadow-lg shadow-black/20">
      {/* Top micro announcement bar */}
      <div className="bg-[#0b0c0e] px-4 py-1 text-[11px] text-slate-400 border-b border-[#1c1d25]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">24/7 Automated Instant Key Dispatch</span>
            <span className="hidden sm:inline text-slate-500">• 100% Genuine Cryptographic Licenses</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBlueprint}
              className="inline-flex items-center gap-1 font-semibold text-amber-400/90 hover:text-amber-300 transition-colors"
            >
              <Layers className="h-3 w-3" />
              <span className="hidden sm:inline">Store Blueprint & SEO</span>
              <span className="sm:hidden">Blueprint</span>
            </button>
            <span className="text-emerald-400 font-medium hidden md:inline">Trustpilot 4.9 / 5</span>
          </div>
        </div>
      </div>

      {/* Main Navbar from Screenshot */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 gap-4">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('all');
            }}
            className="flex items-center group cursor-pointer focus:outline-hidden"
          >
            <RoyalLogo size="md" />
          </a>
        </div>

        {/* Center: Navigation links tailored to Windows products */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Windows 11 Pro */}
          <button
            onClick={() => {
              const win11 = products.find((p) => p.id === 'win-11-pro-retail');
              if (win11) onSelectProduct(win11);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-[#1a1c24] transition-colors"
          >
            <Laptop className="w-4 h-4 text-blue-400" />
            <span>Windows 11 Pro</span>
          </button>

          {/* Windows 10 Pro */}
          <button
            onClick={() => {
              const win10 = products.find((p) => p.id === 'win-10-pro-retail');
              if (win10) onSelectProduct(win10);
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-[#1a1c24] transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Windows 10 Pro</span>
          </button>

          {/* Comparison / Catalog */}
          <button
            onClick={() => {
              const el = document.getElementById('windows-catalog');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-[#1a1c24] transition-colors"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Compare Editions</span>
          </button>

          {/* Architecture Blueprint */}
          <button
            onClick={onOpenBlueprint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-[#1a1c24] transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>Store Blueprint</span>
          </button>
        </nav>

        {/* Right Action Icons from Screenshot */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Search Trigger / Input */}
          <div ref={searchRef} className="relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games, Windows, Office..."
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                className="w-40 sm:w-60 md:w-72 rounded-lg bg-[#1a1c23] border border-[#2b2d3b] pl-9 pr-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </div>

            {/* Live Search Results Dropdown */}
            {isSearchOpen && searchQuery.trim() && (
              <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-xl border border-[#2e3141] bg-[#16171f] p-2 shadow-2xl z-50">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-[#242634]">
                  {filteredProducts.length} Results for "{searchQuery}"
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-[#222430]">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          onSelectProduct(p);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex w-full items-center gap-3 p-2.5 text-left hover:bg-[#20222e] rounded-lg transition-colors"
                      >
                        <img
                          src={p.imageUrl}
                          alt={p.title}
                          className="h-10 w-10 rounded-md object-cover bg-[#0d0e12]"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-white truncate">
                            {p.title}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {p.platformTag || p.platform} • {p.licenseType.split(' ')[0]}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-amber-400">
                            ${p.currentPrice.toFixed(2)}
                          </div>
                          {p.discountPercent && (
                            <span className="rounded bg-[#F59E0B] px-1 py-0.2 text-[9px] font-black text-black">
                              -{p.discountPercent}%
                            </span>
                          )}
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No matching licenses or games found for "{searchQuery}".
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Currency Selector from Screenshot */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="flex items-center gap-1.5 rounded-lg bg-[#1a1c23] hover:bg-[#22242f] border border-[#2b2d3b] px-2.5 py-2 text-xs font-medium text-slate-300 transition-colors"
            >
              <span className="text-[13px]">🇺🇸</span>
              <span className="hidden xl:inline">USD $</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-44 rounded-xl border border-[#2e3141] bg-[#171821] p-1.5 shadow-xl z-50 text-xs">
                <button
                  onClick={() => {
                    setSelectedCurrency('USD $');
                    setIsCurrencyDropdownOpen(false);
                  }}
                  className="flex w-full items-center justify-between p-2 rounded-lg text-left text-white hover:bg-[#222430]"
                >
                  <span>🇺🇸 United States (USD $)</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedCurrency('EUR €');
                    setIsCurrencyDropdownOpen(false);
                  }}
                  className="flex w-full items-center justify-between p-2 rounded-lg text-left text-slate-300 hover:bg-[#222430]"
                >
                  <span>🇪🇺 Euro (EUR €)</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedCurrency('GBP £');
                    setIsCurrencyDropdownOpen(false);
                  }}
                  className="flex w-full items-center justify-between p-2 rounded-lg text-left text-slate-300 hover:bg-[#222430]"
                >
                  <span>🇬🇧 British Pound (GBP £)</span>
                </button>
              </div>
            )}
          </div>

          {/* Account Profile Icon from Screenshot */}
          <button
            type="button"
            onClick={onOpenAccount}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a1c23] hover:bg-[#22242f] border border-[#2b2d3b] text-slate-300 hover:text-white transition-colors"
            title="My Account & Key Vault"
          >
            <User className="h-4 w-4" />
          </button>

          {/* Shopping Cart with Badge from Screenshot */}
          <button
            type="button"
            id="header-cart-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-lg bg-[#1a1c23] hover:bg-[#22242f] border border-[#2b2d3b] px-3 py-2 text-xs font-semibold text-slate-200 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 text-slate-300" />
            <span className="hidden sm:inline">Cart</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F59E0B] px-1.5 text-[11px] font-black text-black">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a1c23] text-slate-300"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#16171f] border-t border-[#232532] px-4 py-4 space-y-2">
          <button
            onClick={() => {
              onSelectCategory('software');
              setIsMobileMenuOpen(false);
            }}
            className="flex w-full items-center gap-3 p-2.5 rounded-lg text-xs font-bold text-white hover:bg-[#20222e]"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Software</span>
          </button>
          <button
            onClick={() => {
              onSelectCategory('games');
              setIsMobileMenuOpen(false);
            }}
            className="flex w-full items-center gap-3 p-2.5 rounded-lg text-xs font-bold text-white hover:bg-[#20222e]"
          >
            <Gamepad2 className="w-4 h-4 text-purple-400" />
            <span>Games</span>
          </button>
          <button
            onClick={() => {
              onSelectCategory('subscriptions');
              setIsMobileMenuOpen(false);
            }}
            className="flex w-full items-center gap-3 p-2.5 rounded-lg text-xs font-bold text-white hover:bg-[#20222e]"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Subscriptions</span>
          </button>
          <button
            onClick={() => {
              onSelectCategory('all');
              setIsMobileMenuOpen(false);
            }}
            className="flex w-full items-center gap-3 p-2.5 rounded-lg text-xs font-bold text-white hover:bg-[#20222e]"
          >
            <Flame className="w-4 h-4 text-rose-500" />
            <span>Bestsellers</span>
          </button>
        </div>
      )}
    </header>
  );
};
