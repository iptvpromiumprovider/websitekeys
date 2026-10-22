import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ShieldCheck, Zap, RotateCcw, Clock, ArrowLeft, MessageSquare, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export type PolicySlug = 'about' | 'contact' | 'delivery' | 'refunds' | 'terms' | 'privacy';

interface PolicyPageProps {
  slug: PolicySlug;
  onNavigateHome: () => void;
  onNavigatePolicy: (slug: PolicySlug) => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({
  slug,
  onNavigateHome,
  onNavigatePolicy,
}) => {
  const currentPolicy =
    SITE_CONFIG.policies.find((p) => p.slug === slug) || SITE_CONFIG.policies[0];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200">
      {/* Editorial Top Bar / Breadcrumb */}
      <div className="border-b border-white/10 bg-[#0F0F12] py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              KeyWin
            </button>
            <span>/</span>
            <span className="text-[#F5A623] font-bold uppercase">{currentPolicy.title}</span>
          </nav>

          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Store</span>
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Header Block */}
        <header className="border-b border-white/10 pb-8 mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F5A623]">
            KeyWin Official Documentation &amp; Trust
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif]">
            {currentPolicy.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {currentPolicy.description}
          </p>
        </header>

        {/* Content Body Based on Selected Slug */}
        <article className="prose prose-invert max-w-none space-y-8 font-sans">
          
          {/* ABOUT US */}
          {slug === 'about' && (
            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
              <section className="border border-white/10 bg-[#121316] p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
                  Our Direct Wholesale Model
                </h2>
                <p>
                  KeyWin is a specialized digital software marketplace focused on authentic Microsoft Windows, Office productivity suites, security tools, and digital gaming licenses. By eliminating retail packaging, physical discs, brick-and-mortar storefronts, and multi-tier distribution markups, we deliver authentic retail and OEM license keys at up to 98% below traditional manufacturer suggested retail prices (MSRP).
                </p>
                <p className="mt-4">
                  Every product key distributed through KeyWin connects directly to the official vendor activation infrastructure (such as Microsoft Activation Servers, setup.office.com, Steam, or Google). We do not distribute cracked software, activators, or unauthorized binaries.
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-white/10 bg-[#121316] p-5">
                  <Zap className="h-6 w-6 text-[#F5A623] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">Instant 60-Second Dispatch</h3>
                  <p className="text-xs text-slate-400">
                    Automated transmission directly via WhatsApp, Telegram, and email immediately after order verification.
                  </p>
                </div>
                <div className="border border-white/10 bg-[#121316] p-5">
                  <ShieldCheck className="h-6 w-6 text-[#F5A623] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">100% Genuine Guarantee</h3>
                  <p className="text-xs text-slate-400">
                    Every cryptographic key activates the official clean software downloaded straight from the publisher.
                  </p>
                </div>
                <div className="border border-white/10 bg-[#121316] p-5">
                  <RotateCcw className="h-6 w-6 text-[#F5A623] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">Human Live Support</h3>
                  <p className="text-xs text-slate-400">
                    Direct technical assistance on WhatsApp and Telegram to ensure smooth installation and activation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CONTACT US */}
          {slug === 'contact' && (
            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
              <section className="border border-white/10 bg-[#121316] p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-2">
                  Verified Contact Channels
                </h2>
                <p className="text-sm text-slate-400 mb-6">
                  Our support specialists are available 24/7 for license inquiries, order confirmations, and setup troubleshooting. Choose your preferred channel below:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <a
                    href={SITE_CONFIG.contacts.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-emerald-500/30 bg-[#0E1F16] p-5 hover:border-emerald-400 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                          Direct WhatsApp
                        </span>
                        <Phone className="h-4 w-4 text-emerald-400" />
                      </div>
                      <p className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {SITE_CONFIG.contacts.whatsapp.label}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Fastest response for immediate key delivery and order verification.
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                      Open WhatsApp Chat &rarr;
                    </span>
                  </a>

                  {/* Telegram */}
                  <a
                    href={SITE_CONFIG.contacts.telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-sky-500/30 bg-[#0E1C27] p-5 hover:border-sky-400 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold">
                          Official Telegram
                        </span>
                        <MessageSquare className="h-4 w-4 text-sky-400" />
                      </div>
                      <p className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {SITE_CONFIG.contacts.telegram.label}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Chat directly with @bigovv for custom volume orders or support.
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-mono text-sky-400 uppercase tracking-wider flex items-center gap-1">
                      Open Telegram Chat &rarr;
                    </span>
                  </a>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 flex items-start gap-2 text-xs text-slate-400">
                  <AlertCircle className="h-4 w-4 text-[#F5A623] shrink-0 mt-0.5" />
                  <span>
                    Note on Email Support: We currently conduct all customer communications through our verified WhatsApp and Telegram channels to prevent spoofing and delivery delays. An official enterprise mailbox is currently being provisioned on the KeyWin production domain.
                  </span>
                </div>
              </section>
            </div>
          )}

          {/* DIGITAL DELIVERY POLICY */}
          {slug === 'delivery' && (
            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
              <section className="border border-white/10 bg-[#121316] p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
                  How Digital Delivery Works
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-lg font-black text-[#F5A623] border border-[#F5A623]/30 px-2.5 py-1 bg-[#1A1A1A]">
                      01
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">Instant Automated Generation</h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        Once an order is placed, our system generates your unique cryptographic license code alongside official installation media links.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-mono text-lg font-black text-[#F5A623] border border-[#F5A623]/30 px-2.5 py-1 bg-[#1A1A1A]">
                      02
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">Multi-Channel Dispatch</h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        Your key is instantly delivered to the WhatsApp number, Telegram handle, or email address provided during checkout. You also receive an online order receipt accessible in your session.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="font-mono text-lg font-black text-[#F5A623] border border-[#F5A623]/30 px-2.5 py-1 bg-[#1A1A1A]">
                      03
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">Official Media Download</h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        We provide direct URLs to official Microsoft Content Delivery Networks (CDNs) including the Windows Media Creation Tool and setup.office.com.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2">
                    Delivery Timeframe
                  </h4>
                  <p className="text-xs text-slate-400">
                    Typical delivery time is between 30 and 120 seconds. In rare cases requiring manual fraud verification or high-volume batch processing, delivery may take up to 15 minutes.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* REFUND & REPLACEMENT POLICY */}
          {slug === 'refunds' && (
            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
              <section className="border border-white/10 bg-[#121316] p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
                  100% Genuine Activation Guarantee
                </h2>
                <p>
                  At KeyWin, customer satisfaction and genuine license authenticity are our top priorities. Because digital software product keys are cryptographic strings that are considered consumed once revealed, our policy balances consumer fairness with anti-fraud safeguards:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="border border-white/10 bg-[#0E0F12] p-4">
                    <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> When You Are Eligible for an Immediate Replacement or Refund
                    </h3>
                    <ul className="mt-2 list-disc list-inside text-xs text-slate-400 space-y-1">
                      <li>The key returns an invalid code error code directly from the official Microsoft activation server.</li>
                      <li>The license is reported as blocked or pre-activated prior to your delivery timestamp.</li>
                      <li>Our technical support team is unable to resolve your activation issue within 24 hours.</li>
                    </ul>
                  </div>

                  <div className="border border-white/10 bg-[#0E0F12] p-4">
                    <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" /> Non-Refundable Scenarios
                    </h3>
                    <ul className="mt-2 list-disc list-inside text-xs text-slate-400 space-y-1">
                      <li>Purchasing an incompatible license tier (e.g. attempting to activate Windows 11 on hardware lacking TPM 2.0 without checking system requirements).</li>
                      <li>Purchasing an OEM license and later requesting a transfer to a separate motherboard (OEM keys bind permanently to a single machine).</li>
                      <li>Accidental purchase where the key has already been dispatched and viewed.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs text-slate-400">
                    To file an activation dispute, message our WhatsApp (+1 520-542-7975) or Telegram (@bigovv) with your Order ID and an uncropped screenshot of the error dialog showing your system properties.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {slug === 'terms' && (
            <div className="space-y-6 text-sm leading-relaxed text-slate-300">
              <section className="border border-white/10 bg-[#121316] p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                  KeyWin Marketplace Terms &amp; Conditions
                </h2>
                <p className="text-xs text-slate-400">Last updated: October 21, 2026</p>
                
                <h3 className="text-sm font-bold text-white pt-2">1. Nature of the Digital Products</h3>
                <p className="text-xs text-slate-400">
                  KeyWin distributes digital cryptographic alphanumeric activation keys (CD keys) for software and operating systems. Physical media (CDs, DVDs, USB drives, printed boxes) are not included unless explicitly described. Customers are responsible for having suitable hardware and internet access to download software from official vendor mirrors.
                </p>

                <h3 className="text-sm font-bold text-white pt-2">2. Retail vs OEM Distinctions</h3>
                <p className="text-xs text-slate-400">
                  Retail keys allow device re-binding pursuant to vendor terms. OEM keys bind permanently to the initial motherboard and do not support motherboard transfers. Buyers must review the edition specifications listed on the product card prior to ordering.
                </p>

                <h3 className="text-sm font-bold text-white pt-2">3. Pricing and Currencies</h3>
                <p className="text-xs text-slate-400">
                  All prices are listed in United States Dollars (USD). KeyWin reserves the right to adjust wholesale pricing to reflect market conditions without retroactive adjustments on completed orders.
                </p>
              </section>
            </div>
          )}

          {/* PRIVACY POLICY */}
          {slug === 'privacy' && (
            <div className="space-y-6 text-sm leading-relaxed text-slate-300">
              <section className="border border-white/10 bg-[#121316] p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                  Privacy &amp; Data Protection Policy
                </h2>
                <p className="text-xs text-slate-400">Last updated: October 21, 2026</p>

                <h3 className="text-sm font-bold text-white pt-2">1. Information We Collect</h3>
                <p className="text-xs text-slate-400">
                  To fulfill digital software orders and provide activation support, KeyWin collects only the minimal information you explicitly supply: your email address, contact messaging handle (WhatsApp phone number or Telegram username), and transaction identification records.
                </p>

                <h3 className="text-sm font-bold text-white pt-2">2. Zero Telemetry &amp; No Third-Party Tracking</h3>
                <p className="text-xs text-slate-400">
                  We do not sell, rent, or monetize customer contact details. Information is solely utilized for license dispatch, order history verification, and direct customer service communications.
                </p>

                <h3 className="text-sm font-bold text-white pt-2">3. Data Retention and Erasure</h3>
                <p className="text-xs text-slate-400">
                  You may request the deletion of your order contact logs at any time by messaging our support channels. Retained records are kept solely for warranty validation and fraud prevention.
                </p>
              </section>
            </div>
          )}

        </article>

        {/* Quick Navigation Footer to other policies */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <span className="text-slate-500 uppercase tracking-wider">Other KeyWin Policies:</span>
          <div className="flex flex-wrap items-center gap-3">
            {SITE_CONFIG.policies.map((p) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => onNavigatePolicy(p.slug as PolicySlug)}
                className={`uppercase tracking-wider transition-colors cursor-pointer ${
                  p.slug === slug ? 'text-[#F5A623] font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
