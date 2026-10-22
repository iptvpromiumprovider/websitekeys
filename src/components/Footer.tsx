import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
  onNavigatePolicy?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigatePolicy,
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

  const handlePolicyClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    if (onNavigatePolicy) {
      onNavigatePolicy(slug);
    } else {
      window.location.href = `/${slug}/`;
    }
  };

  const handleCategoryClick = (e: React.MouseEvent, catId: string) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      window.location.href = `/${catId}/`;
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-slate-400 text-xs border-t border-white/10 font-sans">
      {/* Main Footer Columns */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Software Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Software Categories
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/windows/"
                  onClick={(e) => handleCategoryClick(e, 'windows')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Windows 11 &amp; 10 Licenses
                </a>
              </li>
              <li>
                <a
                  href="/office/"
                  onClick={(e) => handleCategoryClick(e, 'office')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Office 2024 &amp; 2021 Suites
                </a>
              </li>
              <li>
                <a
                  href="/subscriptions/"
                  onClick={(e) => handleCategoryClick(e, 'subscriptions')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Gemini AI &amp; Subscriptions
                </a>
              </li>
              <li>
                <a
                  href="/software/"
                  onClick={(e) => handleCategoryClick(e, 'software')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Security &amp; Antivirus Keys
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: ABOUT KEYWIN */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              About KeyWin
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/about/"
                  onClick={(e) => handlePolicyClick(e, 'about')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  About KeyWin &amp; Wholesale Model
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => handlePolicyClick(e, 'contact')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Contact Customer Support
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contacts.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-emerald-400 font-bold">WhatsApp:</span> {SITE_CONFIG.contacts.whatsapp.label}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contacts.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#229ED9] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-400 font-bold">Telegram:</span> {SITE_CONFIG.contacts.telegram.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: POLICIES & GUARANTEES */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Policies &amp; Trust
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/delivery/"
                  onClick={(e) => handlePolicyClick(e, 'delivery')}
                  className="hover:text-[#F5A623] transition-colors flex items-center gap-1.5"
                >
                  <Zap className="h-3 w-3 text-[#F5A623]" />
                  <span>Instant Delivery Policy (60s)</span>
                </a>
              </li>
              <li>
                <a
                  href="/refunds/"
                  onClick={(e) => handlePolicyClick(e, 'refunds')}
                  className="hover:text-[#F5A623] transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="h-3 w-3 text-emerald-400" />
                  <span>Refund &amp; Replacement Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="/terms/"
                  onClick={(e) => handlePolicyClick(e, 'terms')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy/"
                  onClick={(e) => handlePolicyClick(e, 'privacy')}
                  className="hover:text-[#F5A623] transition-colors"
                >
                  Privacy &amp; Data Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Price Drop Alerts
            </h4>
            <p className="text-slate-400 text-xs mb-3 leading-relaxed">
              Subscribe for wholesale clearance notices on Windows 11 and Office licenses. Zero spam.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter email address"
                required
                className="w-full bg-[#121316] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#F5A623] hover:bg-[#e09419] px-4 py-2.5 text-xs font-bold text-black uppercase tracking-wider font-mono transition-colors cursor-pointer"
              >
                Get Discount Updates
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

      {/* Bottom Bar with Owned Brand & Verified Badges */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" showText={true} />
            <span className="text-white/20">|</span>
            <span className="text-[11px] text-slate-500 font-mono">
              &copy; 2026 KeyWin. All rights reserved.
            </span>
          </div>

          {/* Direct verified channels */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <a
              href={SITE_CONFIG.contacts.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>WhatsApp Direct</span>
            </a>
            <span>&bull;</span>
            <a
              href={SITE_CONFIG.contacts.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <span>Telegram Channel</span>
            </a>
            <span>&bull;</span>
            <a
              href="/contact/"
              onClick={(e) => handlePolicyClick(e, 'contact')}
              className="hover:text-[#F5A623] transition-colors"
            >
              <span>Support Desk</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
