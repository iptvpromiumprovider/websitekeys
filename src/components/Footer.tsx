import React, { useState } from 'react';
import { RoyalLogo } from './RoyalLogo';
import { Mail, Check, Layers, ShieldCheck, Zap } from 'lucide-react';
import { CategoryId } from '../types';

interface FooterProps {
  onSelectCategory: (id: CategoryId | 'all') => void;
  onOpenBlueprint: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenBlueprint,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0f1013] text-slate-400 text-xs border-t border-[#22242e]">
      {/* Main Footer Links from Screenshot */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: QUICK LINKS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-amber-400 transition-colors">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#ticket" className="hover:text-amber-400 transition-colors">
                  Create a ticket
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBlueprint}
                  className="inline-flex items-center gap-1.5 text-amber-400/90 hover:text-amber-300 font-semibold transition-colors mt-2"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Technical & SEO Blueprint</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: ABOUT ROYAL CD KEYS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              About Royal CD Keys
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#affiliate" className="hover:text-amber-400 transition-colors">
                  Join Our Affiliate Program
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us & Wholesale Sourcing
                </a>
              </li>
              <li>
                <a href="#legal" className="hover:text-amber-400 transition-colors">
                  EU Software Legal Compliance (C-128/11)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: HELP */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#support" className="hover:text-amber-400 transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-amber-400 transition-colors">
                  How to buy
                </a>
              </li>
              <li>
                <a href="#activate" className="hover:text-amber-400 transition-colors">
                  How to activate key
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onSelectCategory('all')} className="hover:text-amber-400 transition-colors">
                  Product list
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: NEWSLETTER SIGNUP matching screenshot */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Just subscribe to our newsletter
            </h4>
            <p className="text-slate-400 text-xs mb-3 leading-relaxed">
              Get flash sale alerts, weekend discounts, and new release keys straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="flex-1 rounded-lg bg-[#1a1b22] border border-[#2b2d3a] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#F59E0B] hover:bg-[#D97706] px-4 py-2.5 text-xs font-bold text-black transition-all shrink-0 active:scale-95"
                >
                  {newsletterSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>

              {newsletterSubscribed && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] mt-1 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>You have successfully subscribed to RoyalCDKeys alerts.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Brand, Socials & Copyright */}
      <div className="border-t border-[#1b1c24] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <RoyalLogo size="sm" showText={true} />
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-[11px] text-slate-500">
              © 2026 RoyalCDKeys. All Rights Reserved.
            </span>
          </div>

          {/* Socials from screenshot: X, YouTube, Instagram, TikTok */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-slate-300">Follow us:</span>
            <div className="flex items-center gap-3">
              {/* X / Twitter */}
              <a
                href="#x"
                aria-label="Follow us on X"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#181a22] text-slate-400 hover:text-white hover:bg-[#222530] border border-[#262836] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="Subscribe on YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#181a22] text-slate-400 hover:text-red-400 hover:bg-[#222530] border border-[#262836] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Follow us on Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#181a22] text-slate-400 hover:text-pink-400 hover:bg-[#222530] border border-[#262836] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#tiktok"
                aria-label="Follow us on TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#181a22] text-slate-400 hover:text-cyan-400 hover:bg-[#222530] border border-[#262836] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.04 3.28-1.51 3.34-3.32.09-2.8.05-5.6.06-8.4 0-3.13 0-6.26-.01-9.39z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
