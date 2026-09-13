import React from 'react';
import { Zap, ShieldCheck, Lock, Headphones } from 'lucide-react';

export const TrustValueBar: React.FC = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start space-x-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Instant Digital Delivery</h2>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Automated key dispatch to your email and customer dashboard within 60 seconds.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">100% Genuine Activation</h2>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Authentic license keys validated directly against official Microsoft & vendor activation servers.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">256-Bit Encrypted Checkout</h2>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                PCI-DSS Level 1 compliant payments via Stripe, PayPal, Apple Pay, and Google Pay.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
              <Headphones className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Lifetime Setup Assistance</h2>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Free step-by-step installation guides and dedicated technical support if you hit an issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
