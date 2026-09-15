import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Check } from 'lucide-react';
import { CategoryId } from '../types';

interface FooterProps {
  onSelectCategory?: (id: CategoryId | 'all') => void;
  onOpenBlueprint?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
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
    <footer className="bg-[#0f1013] text-slate-400 text-xs border-t border-[#1f2127]">
      {/* Main Footer Columns matching image.png */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#privacy" className="hover:text-[#F5A623] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-[#F5A623] transition-colors">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#F5A623] transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#ticket" className="hover:text-[#F5A623] transition-colors">
                  Create a ticket
                </a>
              </li>
              {onOpenBlueprint && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenBlueprint}
                    className="text-slate-500 hover:text-slate-300 transition-colors text-[11px]"
                  >
                    System Information
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 2: ABOUT ROYAL CD KEYS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              ABOUT ROYAL CD KEYS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#affiliate" className="hover:text-[#F5A623] transition-colors">
                  Join Our Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/15205427975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-400 font-bold">WhatsApp:</span> +1 520-542-7975
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/bigovv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#229ED9] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-400 font-bold">Telegram:</span> @bigovv
                </a>
              </li>
              <li>
                <a
                  href="mailto:123123xr@gmail.com"
                  className="hover:text-[#F5A623] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400 font-bold">Email:</span> 123123xr@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              HELP &amp; ORDER SUPPORT
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/15205427975?text=Hello%2C%20I%20need%20help%20with%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Direct Support (+1 520-542-7975)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/bigovv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#229ED9] transition-colors"
                >
                  Telegram Direct Support (@bigovv)
                </a>
              </li>
              <li>
                <a
                  href="mailto:123123xr@gmail.com?subject=Support%20Request"
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Email Support (123123xr@gmail.com)
                </a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-[#F5A623] transition-colors">
                  How to buy
                </a>
              </li>
              <li>
                <a href="#how-to-activate" className="hover:text-[#F5A623] transition-colors">
                  How to activate key
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Just subscribe to our newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Just subscribe to our newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="E-mail Address"
                required
                className="w-full rounded-lg bg-[#1a1b22] border border-[#2b2d3d] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623] transition-colors"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#F5A623] hover:bg-[#e09419] px-4 py-2.5 text-xs font-bold text-black transition-colors"
              >
                Subscribe
              </button>

              {newsletterSubscribed && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs mt-1">
                  <Check className="h-3.5 w-3.5" />
                  <span>Subscribed successfully.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar matching image.png */}
      <div className="border-t border-[#1b1c24] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" showText={true} />
            <span className="text-slate-600">|</span>
            <span className="text-[11px] text-slate-500">
              © 2026 RoyalCDKeys. All rights reserved.
            </span>
          </div>

          {/* Social Icons matching screenshot: Follow us: X, YouTube, Instagram, TikTok */}
          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span className="text-slate-400 font-medium">Follow us:</span>
            <div className="flex items-center gap-2.5 text-slate-300">
              {/* X / Twitter */}
              <a
                href="#twitter"
                className="h-7 w-7 rounded-full bg-[#1b1c25] border border-[#272938] flex items-center justify-center hover:text-white hover:border-slate-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                className="h-7 w-7 rounded-full bg-[#1b1c25] border border-[#272938] flex items-center justify-center hover:text-white hover:border-slate-400 transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                className="h-7 w-7 rounded-full bg-[#1b1c25] border border-[#272938] flex items-center justify-center hover:text-white hover:border-slate-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#tiktok"
                className="h-7 w-7 rounded-full bg-[#1b1c25] border border-[#272938] flex items-center justify-center hover:text-white hover:border-slate-400 transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
