import React from 'react';
import { Laptop, ShieldCheck, Zap, Download, Globe, Award, Sparkles } from 'lucide-react';

interface PlatformBarProps {
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
}

export const PlatformBar: React.FC<PlatformBarProps> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const items = [
    {
      id: 'win11',
      label: 'WINDOWS 11 PRO',
      icon: <Laptop className="w-5 h-5 text-blue-400" />,
      tag: 'Next-Gen OS',
    },
    {
      id: 'win10',
      label: 'WINDOWS 10 PRO',
      icon: <Laptop className="w-5 h-5 text-sky-400" />,
      tag: 'Classic Pro',
    },
    {
      id: 'retail',
      label: 'RETAIL KEYS',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      tag: 'Transferable',
    },
    {
      id: 'instant',
      label: 'INSTANT <60s',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      tag: 'Automated',
    },
    {
      id: 'iso',
      label: 'MICROSOFT ISO',
      icon: <Download className="w-5 h-5 text-purple-400" />,
      tag: 'Direct Mirror',
    },
    {
      id: 'global',
      label: 'GLOBAL (GL)',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      tag: 'Worldwide',
    },
    {
      id: 'warranty',
      label: '30-DAY GUARANTEE',
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      tag: '100% Refund',
    },
  ];

  return (
    <div className="w-full border-y border-[#232532] bg-[#14151b] py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between overflow-x-auto px-4 sm:px-6 lg:px-8 no-scrollbar">
        <div className="flex w-full min-w-max items-center justify-around gap-4 md:gap-8">
          {items.map((item) => {
            const isActive = selectedPlatform === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectPlatform(isActive ? 'all' : item.id)}
                className={`group flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'border-amber-500/50 bg-amber-500/10 text-white'
                    : 'border-transparent text-slate-300 hover:text-white hover:bg-[#1d1f28]'
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-[#1b1c24] text-slate-300 group-hover:text-white'
                  }`}
                >
                  {item.icon}
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold tracking-wider uppercase block leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    {item.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
