import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { BrandLogo } from './BrandLogo';
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Monitor,
  Gamepad2,
  Layers,
  Flame,
  X,
  Phone,
  Mail,
  Zap,
} from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBlueprint?: () => void;
  onSelectCategory?: () => void;
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
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('United States USD $');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const currencies = [
    'United States USD $',
    'European Union EUR €',
    'United Kingdom GBP £',
    'Canada CAD $',
    'Australia AUD $',
  ];

  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#121316] border-b border-[#1f2127]">
      {/* Direct Order & Support Bar */}
      <div className="bg-[#0b0c0f] border-b border-[#1d1f27] px-4 py-1.5 text-[11px] text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              Direct Order Available
            </span>
            <span className="hidden sm:inline text-slate-400">
              Order genuine Windows keys directly via WhatsApp &amp; Email
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://wa.me/15205427975?text=Hello%20RoyalCDKeys%2C%20I%20want%20to%20buy%20a%20Windows%20key"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-bold text-[#25D366] hover:underline"
            >
              <Phone className="h-3 w-3" />
              <span>WhatsApp: +1 520-542-7975</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href="mailto:123123xr@gmail.com?subject=Order%20Inquiry"
              className="hidden md:flex items-center gap-1.5 font-medium text-amber-400 hover:underline"
            >
              <Mail className="h-3 w-3" />
              <span>123123xr@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Left: Brand Logo from Screenshot */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center cursor-pointer"
          >
            <BrandLogo size="md" />
          </a>

          {/* Center Navigation Links matching image.png */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-300">
            <button
              type="button"
              onClick={scrollToCatalog}
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors py-1"
            >
              <Monitor className="h-4 w-4" />
              <span>Software</span>
            </button>

            <button
              type="button"
              onClick={scrollToCatalog}
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors py-1"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>Games</span>
            </button>

            <button
              type="button"
              onClick={scrollToCatalog}
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors py-1"
            >
              <Layers className="h-4 w-4" />
              <span>Subscriptions</span>
            </button>

            <button
              type="button"
              onClick={scrollToCatalog}
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors py-1"
            >
              <Flame className="h-4 w-4 text-[#F5A623]" />
              <span>Bestsellers</span>
            </button>
          </nav>
        </div>

        {/* Right Section matching image.png: Search, Currency, Profile, Cart */}
        <div className="flex items-center gap-3 sm:gap-5" ref={searchRef}>
          
          {/* Search trigger and input */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center rounded-lg bg-[#1a1b22] border border-[#2d2f3d] px-2.5 py-1 text-xs sm:text-sm">
                <Search className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search keys..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-white placeholder-slate-500 focus:outline-hidden w-28 sm:w-44"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-slate-400 hover:text-white ml-1"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="text-slate-300 hover:text-white p-1 transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            )}

            {/* Live Search dropdown */}
            {searchOpen && filteredProducts.length > 0 && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-[#2c2f3e] bg-[#16171f] p-2 shadow-2xl z-50">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      setSearchOpen(false);
                    }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#20222e] cursor-pointer transition-colors"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate">{p.title}</p>
                      <p className="text-xs font-bold text-[#F5A623]">${p.currentPrice.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency Selector (e.g. United States USD $ v) */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <span>{currency}</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {isCurrencyOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-[#2b2d3c] bg-[#171821] p-1.5 shadow-2xl z-50">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => {
                      setCurrency(curr);
                      setIsCurrencyOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-colors ${
                      currency === curr ? 'bg-amber-500/15 text-[#F5A623] font-bold' : 'text-slate-300 hover:bg-[#20222f]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Account / Vault Icon */}
          <button
            type="button"
            onClick={onOpenAccount}
            className="text-slate-300 hover:text-white p-1 transition-colors"
            aria-label="User Account"
          >
            <User className="h-4 w-4" />
          </button>

          {/* Shopping Cart Icon with Badge */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center text-slate-300 hover:text-white p-1 transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="ml-1 text-xs font-semibold text-slate-300">
              ({cartCount})
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};
