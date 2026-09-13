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
    { id: 'all', label: 'All Deals', icon: Sparkles },
    { id: 'windows', label: 'Windows', icon: Laptop },
    { id: 'office', label: 'Office', icon: LayoutGrid },
    { id: 'software', label: 'Software', icon: ShieldCheck },
    { id: 'subscriptions', label: 'Subscriptions', icon: PlayCircle },
  ];

  return (
    <div className="w-full bg-[#0d0e13] border-b border-[#1f222e] py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar py-1">
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
                className={`flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer border ${
                  isSelected
                    ? 'bg-[#F5A623] text-black border-[#F5A623]'
                    : 'bg-[#151720] text-slate-300 border-[#252838] hover:bg-[#1f2230] hover:text-white hover:border-[#383d54]'
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? 'text-black' : 'text-[#F5A623]'}`} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
