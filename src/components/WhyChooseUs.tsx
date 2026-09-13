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
      icon: <Clock className="h-5 w-5 text-amber-400" />,
      title: 'Automated 60-Second Dispatch',
      description:
        'Our fulfillment systems generate and deliver your 25-character digital product key to your screen and email immediately after checkout, 24/7/365 without delay.',
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
      title: 'Official Microsoft ISO Mirrors',
      description:
        'You never download binaries from unverified third-party hosts. We direct you solely to official Microsoft servers via the Microsoft Media Creation Tool.',
    },
    {
      icon: <RefreshCw className="h-5 w-5 text-amber-400" />,
      title: '30-Day Money-Back Guarantee',
      description:
        'If a key fails to activate or if you change your mind prior to activation, our ironclad guarantee covers your order with diagnostic verification and instant refunds.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: 'European Court Compliance',
      description:
        'Our digital software license distribution adheres strictly to EU legal precedents (ECJ Case C-128/11 UsedSoft GmbH v. Oracle Corp) and First Sale doctrine.',
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-cyan-400" />,
      title: '24/7 Activation Support',
      description:
        'Encountering error code 0xC004C008 or a telephone activation prompt? Our technical activation specialists assist you until your system shows Activated with a digital license.',
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-16 sm:py-20 bg-[#0e0f14] border-b border-[#1f212c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Trust & Transparency First
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Why Professionals Choose CDKEYPC
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300">
            We deliver genuine Microsoft Windows operating system licenses with zero compromises on security, legality, or customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#242736] bg-[#14161f] p-6 transition-all duration-200 hover:border-amber-500/40 hover:bg-[#181a24]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d202c] border border-[#2e3144] mb-4">
                {point.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
