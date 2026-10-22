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
    <section id="faq-section" className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F5A623] mb-2">
            <span>04</span>
            <span className="text-white/20">/</span>
            <span>LICENSING &amp; DISPATCH QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Frequently Asked Questions.
          </h2>
        </div>

        {/* Minimalist Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden border border-white/10 bg-[#111216] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[#16171E] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4 font-['Space_Grotesk',sans-serif]">
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
                  <div className="px-5 pb-5 pt-2 text-sm text-slate-400 leading-relaxed border-t border-white/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
