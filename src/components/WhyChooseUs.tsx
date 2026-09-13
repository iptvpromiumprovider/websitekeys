import React from 'react';
import { ShieldCheck, FileText, Clock, RefreshCw, HelpCircle, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <FileText className="h-5 w-5 text-blue-400" />,
      title: 'Transferable Retail Licensing',
      description:
        'All keys distributed are genuine Microsoft Retail licenses. You have full legal transferability rights to move the key to another computer or new motherboard in the future.',
    },
    {
      icon: <Clock className="h-5 w-5 text-[#F5A623]" />,
      title: 'Fast WhatsApp & Email Dispatch',
      description:
        'Order directly via WhatsApp (+1 520-542-7975) or Email (123123xr@gmail.com). Our team provides immediate digital delivery and activation assistance 24/7.',
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
      title: 'Official Microsoft ISO Mirrors',
      description:
        'You never download binaries from unverified third-party hosts. We direct you solely to official Microsoft servers via the Microsoft Media Creation Tool.',
    },
    {
      icon: <RefreshCw className="h-5 w-5 text-[#F5A623]" />,
      title: '30-Day Money-Back Guarantee',
      description:
        'If a key fails to activate or if you change your mind prior to activation, our guarantee covers your order with diagnostic verification and instant refunds.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: 'Authorized Distribution',
      description:
        'Our digital software license distribution adheres strictly to digital distribution standards and official First Sale legal frameworks.',
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-cyan-400" />,
      title: '24/7 Activation Support',
      description:
        'Encountering an error code or telephone activation prompt? Our technical activation specialists assist you until your system shows Activated with a digital license.',
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-14 sm:py-20 bg-[#121316] border-b border-[#1f2127]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
            Trust &amp; Transparency
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Why Buy From RoyalCDKeys
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Genuine Microsoft Windows operating system licenses with zero compromises on security, speed, or customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#232532] bg-[#1a1b22] p-5 sm:p-6 transition-all duration-200 hover:border-[#383b4c]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#222430] border border-[#2d3040] mb-3.5">
                {point.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
