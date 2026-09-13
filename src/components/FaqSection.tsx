import React, { useState } from 'react';
import { FaqItem } from '../types';
import { Plus, Minus } from 'lucide-react';

interface FaqSectionProps {
  faqs: FaqItem[];
  onLearnMore?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, onLearnMore }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-[#121316] border-b border-[#1f2127]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title matching screenshot */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Clean Accordion List matching screenshot */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#232532] bg-[#1a1b22] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-[#20222b]"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-400">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#F5A623]" />
                    ) : (
                      <Plus className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-[#232532]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 'Learn More' Button matching screenshot */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onLearnMore}
            className="rounded-lg border border-[#F5A623]/60 bg-transparent px-8 py-2.5 text-xs sm:text-sm font-semibold text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors"
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};
