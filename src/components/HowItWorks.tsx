import React from 'react';
import { Search, CreditCard, Key, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: 'Choose Your Product',
      description:
        'Select the exact software edition (e.g. Windows 11 Pro Retail or Office 2024 Home & Business) that matches your system hardware, operating system, and architecture requirements.',
    },
    {
      number: '02',
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: 'Complete Your Purchase',
      description:
        'Pay securely through 256-bit encrypted checkout via Credit/Debit Card, PayPal, Apple Pay, or Google Pay. We never store credit card numbers on our servers.',
    },
    {
      number: '03',
      icon: <Key className="h-6 w-6 text-blue-600" />,
      title: 'Receive Your Digital Product',
      description:
        'Your 25-character product key, official publisher download link, and PDF step-by-step activation guide are displayed immediately on-screen and delivered to your email in under 60 seconds.',
    },
  ];

  return (
    <section id="how-it-works-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Frictionless Process
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How Digital Delivery Works
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            From product selection to active installation in three straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-slate-300">{step.number}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
