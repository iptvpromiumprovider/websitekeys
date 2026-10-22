import React from 'react';
import { Laptop, LayoutGrid, ShieldCheck, PlayCircle, Sparkles } from 'lucide-react';

interface PlatformBarProps {
  selectedPlatform?: string;
  onSelectPlatform?: (platform: string) => void;
}

export const PlatformBar: React.FC<PlatformBarProps> = ({
  selectedPlatform = 'all',
  onSelectPlatform,
}) => {
  const platforms = [
    { id: 'all', label: 'All Catalog', icon: Sparkles },
    { id: 'windows', label: 'Windows', icon: Laptop },
    { id: 'office', label: 'Office Suites', icon: LayoutGrid },
    { id: 'software', label: 'Productivity Tools', icon: ShieldCheck },
    { id: 'subscriptions', label: 'Subscriptions & Passes', icon: PlayCircle },
  ];

  return (
    <div className="w-full bg-[#0A0A0A] border-b border-white/10 py-3.5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-0.5">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  onSelectPlatform?.(p.id);
                  if (p.id === 'software') {
                    document.getElementById('creative-software-section')?.scrollIntoView({ behavior: 'smooth' });
                  } else if (p.id === 'subscriptions') {
                    document.getElementById('subscriptions-section')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    document.getElementById('software-deals-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase font-bold tracking-wider font-['Space_Grotesk',sans-serif] transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#F5A623] text-black border-[#F5A623]'
                    : 'bg-[#111216] text-slate-300 border-white/10 hover:border-[#F5A623]/50 hover:text-white'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-black' : 'text-[#F5A623]'}`} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
