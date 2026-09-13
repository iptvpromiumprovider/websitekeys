import React from 'react';

interface PlatformBarProps {
  selectedPlatform?: string;
  onSelectPlatform?: (platform: string) => void;
}

export const PlatformBar: React.FC<PlatformBarProps> = ({
  selectedPlatform = 'all',
  onSelectPlatform,
}) => {
  const platforms = [
    {
      id: 'steam',
      name: 'STEAM',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.495 0 4.524 2.029 4.524 4.524s-2.029 4.524-4.524 4.524c-.03 0-.061-.002-.091-.003l-4.085 2.923c0 .054.004.108.004.163 0 2.21-1.791 4.001-4.001 4.001-1.895 0-3.483-1.32-3.896-3.096L.768 15.7C2.007 20.485 6.479 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      id: 'windows',
      name: 'WINDOWS',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
    },
    {
      id: 'office',
      name: 'OFFICE',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.53 4.307L13.882 1.63a1.5 1.5 0 00-1.026.046L3.468 5.485A1.5 1.5 0 002.5 6.877v10.246a1.5 1.5 0 00.968 1.392l9.388 3.809a1.5 1.5 0 001.026.046l7.648-2.677A1.5 1.5 0 0022.5 18.26V5.74a1.5 1.5 0 00-.97-1.433zM13 3.653l7 2.45v11.794l-7 2.45V3.653zm-2 .765v15.164l-7-2.842V7.26l7-2.842z" />
        </svg>
      ),
    },
    {
      id: 'software',
      name: 'SOFTWARE',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
        </svg>
      ),
    },
    {
      id: 'subscription',
      name: 'SUBSCRIPTION',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      ),
    },
    {
      id: 'xbox',
      name: 'XBOX',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.697 3.328c1.656-1.392 3.875-2.28 6.303-2.28 2.428 0 4.647.888 6.303 2.28-1.579 1.488-4.227 4.19-6.303 6.388-2.076-2.198-4.724-4.9-6.303-6.388zm-3.07 3.033C.603 8.012 0 9.932 0 12c0 2.068.603 3.988 1.627 5.639 2.05-1.942 5.679-5.467 7.747-7.618C7.306 7.87 3.677 4.42 1.627 6.361zm20.746 0c-2.05-1.941-5.679 1.509-7.747 3.66 2.068 2.151 5.697 5.676 7.747 7.618C23.397 15.988 24 14.068 24 12c0-2.068-.603-3.988-1.627-5.639zM5.52 19.984c1.884 1.848 4.437 2.968 7.248 2.968 2.811 0 5.364-1.12 7.248-2.968-2.155-2.046-5.228-4.996-7.248-6.938-2.02 1.942-5.093 4.892-7.248 6.938z" />
        </svg>
      ),
    },
    {
      id: 'nintendo',
      name: 'NINTENDO',
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 4.375C0 1.958 1.958 0 4.375 0H9.5v24H4.375C1.958 24 0 22.042 0 19.625V4.375zm5.75 3.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm8.75-7.875H19.625C22.042 0 24 1.958 24 4.375v15.25C24 22.042 22.042 24 19.625 24H14.5V0zm4.25 12.375a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#121316] border-b border-[#1f2127] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-10 overflow-x-auto no-scrollbar py-2">
          {platforms.map((platform) => {
            const isSelected = selectedPlatform === platform.id;
            return (
              <button
                key={platform.id}
                type="button"
                onClick={() => {
                  onSelectPlatform?.(platform.id);
                  const el = document.getElementById('catalog-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex flex-col items-center gap-2 cursor-pointer shrink-0 transition-transform hover:-translate-y-0.5 focus:outline-hidden"
              >
                {/* Circular Icon Container */}
                <div
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border transition-all ${
                    isSelected
                      ? 'border-[#F5A623] bg-[#222430] text-[#F5A623] shadow-md shadow-[#F5A623]/20'
                      : 'border-[#262835] bg-[#1a1b22] text-slate-300 group-hover:border-[#F5A623] group-hover:text-white'
                  }`}
                >
                  {platform.icon}
                </div>

                {/* Uppercase Platform Label */}
                <span
                  className={`text-[10px] sm:text-[11px] font-bold tracking-wider transition-colors ${
                    isSelected
                      ? 'text-[#F5A623]'
                      : 'text-slate-400 group-hover:text-white'
                  }`}
                >
                  {platform.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
