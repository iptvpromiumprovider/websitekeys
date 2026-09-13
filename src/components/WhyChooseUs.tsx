import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, MessageCircle, AlertCircle, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: 'Netflix 100% Replacement Warranty (Garanti Yes)',
      description:
        'All Netflix Premium 4K UHD accounts include a dedicated replacement warranty throughout your active billing period. If any login or profile issue arises, get an instant replacement via WhatsApp.',
      badge: 'Garanti Yes',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-amber-400" />,
      title: 'Windows Keys & Spotify Wholesale (No Garanti)',
      description:
        'We pass maximum wholesale savings directly to you: Windows 11/10 keys ($4.82-$5.43) and Spotify Premium ($2.99) are sold as-is without ongoing warranty (No Garanti / Sans Garantie) to keep prices unbeatable.',
      badge: 'No Garanti',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
    {
      icon: <Clock className="h-5 w-5 text-[#F5A623]" />,
      title: 'Instant Delivery via WhatsApp & Email',
      description:
        'Orders are processed immediately. Receive your 25-character digital license key or streaming account credentials directly on WhatsApp (+1 520-542-7975) and in your email inbox.',
      badge: '< 60 Seconds',
      badgeColor: 'bg-[#F5A623]/20 text-amber-300 border-[#F5A623]/30',
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-blue-400" />,
      title: 'Official Microsoft ISO & Software Mirrors',
      description:
        'Always install from official sources. Download Windows via the official Microsoft Media Creation Tool and Office from setup.office.com with zero third-party software risks.',
      badge: 'Official Sources',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-green-400" />,
      title: 'Direct WhatsApp Human Support',
      description:
        'Need setup guidance or quick confirmation? Chat directly with our human specialists at +1 520-542-7975. We assist with clean installs, activation commands, and profile setup.',
      badge: '24/7 Human',
      badgeColor: 'bg-green-500/20 text-green-300 border-green-500/30',
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-400" />,
      title: 'Zero Hidden Fees & Global Activation',
      description:
        'The price you see is the final price. No hidden processing surcharges or surprise subscription fees. All licenses are region-free Global editions.',
      badge: 'Region-Free',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-14 sm:py-20 bg-[#0e1015] border-b border-[#1c1f2b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
            Honest &amp; Transparent Terms
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-white">
            Why Buy From RoyalCDKeys
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Clear guarantee conditions, wholesale direct pricing, and human support on every single purchase.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-[#212433] bg-[#14161f] p-5 sm:p-6 transition-all duration-200 hover:border-[#383d54] hover:bg-[#171924]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d202d] border border-[#292d3f]">
                    {point.icon}
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${point.badgeColor}`}>
                    {point.badge}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
