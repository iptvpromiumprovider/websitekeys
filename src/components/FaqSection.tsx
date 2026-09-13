import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  faqs: FaqItem[];
  onLearnMore?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, onLearnMore }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-[#121316] border-t border-[#22242e]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Everything you need to know about purchasing, activating, and validating genuine digital product keys on RoyalCDKeys.
          </p>
        </div>

        {/* Dark Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#272935] bg-[#181920] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-[#1f2029]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-100 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#242632] text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400 bg-amber-500/10' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#242632]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Learn More Button matching screenshot */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1e2029] hover:bg-[#272935] border border-[#2f3242] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-amber-500/50"
          >
            <span>Learn More About Activation & Guarantee</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
