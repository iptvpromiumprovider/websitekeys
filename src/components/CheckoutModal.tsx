import React, { useState } from 'react';
import { CartItem, OrderConfirmation } from '../types';
import {
  X,
  Lock,
  ShieldCheck,
  CreditCard,
  Zap,
  CheckCircle2,
  Copy,
  Download,
  Printer,
  ExternalLink,
  Check,
} from 'lucide-react';
import { RoyalLogo } from './RoyalLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: (order: OrderConfirmation) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'apple_pay'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderConfirmation | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.product.currentPrice * item.quantity,
    0
  );

  const generateLicenseKey = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let key = '';
    for (let i = 0; i < 25; i++) {
      if (i > 0 && i % 5 === 0) key += '-';
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    setTimeout(() => {
      const confirmation: OrderConfirmation = {
        orderId: `RK-${Math.floor(100000 + Math.random() * 900000)}`,
        customerEmail: email,
        items: [...items],
        total,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        licenseKeys: items.flatMap((item) =>
          Array.from({ length: item.quantity }).map(() => ({
            productId: item.product.id,
            productTitle: item.product.title,
            key: generateLicenseKey(),
            downloadUrl: item.product.categoryId === 'windows'
              ? 'https://www.microsoft.com/software-download/windows11'
              : item.product.categoryId === 'office'
              ? 'https://setup.office.com'
              : 'https://store.steampowered.com',
          }))
        ),
      };

      setCompletedOrder(confirmation);
      onOrderCompleted(confirmation);
      setIsProcessing(false);
    }, 1200);
  };

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div
        id="checkout-modal-container"
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#16171f] text-slate-200 shadow-2xl border border-[#2b2d3d]"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#242635] bg-[#121318]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <RoyalLogo size="sm" showText={false} />
            <div>
              <h2 className="text-base font-bold text-white">
                {completedOrder ? 'Order Completed & Keys Dispatched' : 'Secure Encrypted Checkout'}
              </h2>
              <p className="text-[11px] text-slate-400">
                {completedOrder
                  ? 'Your genuine keys are ready for immediate activation.'
                  : 'PCI-DSS Level 1 256-Bit SSL Encryption'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-[#252835] hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ORDER COMPLETED VIEW */}
        {completedOrder ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black mb-3">
                <Check className="h-6 w-6 stroke-[3]" />
              </div>
              <h3 className="text-lg font-bold text-white">Payment Authorized & Verified</h3>
              <p className="text-xs text-emerald-300 mt-1">
                Order Reference: <span className="font-mono font-bold text-white">{completedOrder.orderId}</span>
              </p>
              <p className="text-xs text-slate-300 mt-1">
                A permanent backup copy was dispatched to: <span className="font-semibold text-white">{completedOrder.customerEmail}</span>
              </p>
            </div>

            {/* Keys Reveal Vault */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                <span>Your Customer License Vault:</span>
              </h4>

              {completedOrder.licenseKeys.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#2e3142] bg-[#1a1c26] p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {item.productTitle}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-medium">
                        ✓ Genuine Publisher Cryptographic Key
                      </span>
                    </div>
                  </div>

                  {/* Key Box */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-lg bg-[#111217] border border-[#2e3142] p-2.5 font-mono text-xs sm:text-sm font-bold text-amber-400 tracking-wider select-all overflow-x-auto">
                      {item.key}
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.key)}
                      className="flex items-center gap-1.5 rounded-lg bg-[#252836] hover:bg-amber-500 hover:text-black border border-[#34384a] px-3.5 py-2.5 text-xs font-bold text-white transition-colors"
                    >
                      {copiedKey === item.key ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy
                        </>
                      )}
                    </button>
                  </div>

                  {/* Download link */}
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-[#242634]">
                    <span className="text-slate-400">Official Download Link:</span>
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-400 hover:underline font-medium"
                    >
                      <span>Direct Vendor Server</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#242635]">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl bg-[#F59E0B] hover:bg-[#D97706] py-3 text-sm font-bold text-black transition-all"
              >
                Return to Store Catalog
              </button>
            </div>
          </div>
        ) : (
          /* CHECKOUT FORM VIEW */
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-6">
            
            {/* Customer Information */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Digital Delivery Details
              </h3>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address (Product key and setup instructions sent here) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-[#1b1c25] border border-[#2e3142] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Alex"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-xl bg-[#1b1c25] border border-[#2e3142] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Morgan"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-xl bg-[#1b1c25] border border-[#2e3142] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-3 pt-4 border-t border-[#242635]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                2. Select Secure Payment Gateway
              </h3>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`rounded-xl border p-3 text-center transition-all ${
                    paymentMethod === 'card'
                      ? 'border-amber-400 bg-amber-500/10 text-white'
                      : 'border-[#2c2e3e] bg-[#1a1c25] text-slate-400 hover:border-slate-500'
                  }`}
                >
                  <CreditCard className="mx-auto h-5 w-5 mb-1 text-slate-300" />
                  <span className="text-xs font-semibold block">Credit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`rounded-xl border p-3 text-center transition-all ${
                    paymentMethod === 'paypal'
                      ? 'border-amber-400 bg-amber-500/10 text-white'
                      : 'border-[#2c2e3e] bg-[#1a1c25] text-slate-400 hover:border-slate-500'
                  }`}
                >
                  <span className="text-base font-extrabold text-blue-400 block mb-0.5">P</span>
                  <span className="text-xs font-semibold block">PayPal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple_pay')}
                  className={`rounded-xl border p-3 text-center transition-all ${
                    paymentMethod === 'apple_pay'
                      ? 'border-amber-400 bg-amber-500/10 text-white'
                      : 'border-[#2c2e3e] bg-[#1a1c25] text-slate-400 hover:border-slate-500'
                  }`}
                >
                  <span className="text-base font-bold text-slate-200 block mb-0.5"></span>
                  <span className="text-xs font-semibold block">Apple / GPay</span>
                </button>
              </div>

              {/* Simulated Card Inputs */}
              {paymentMethod === 'card' && (
                <div className="rounded-xl border border-[#2b2e3e] bg-[#191a24] p-3.5 space-y-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="•••• •••• •••• 4242"
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full rounded-lg bg-[#121318] border border-[#2c2f3f] px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        defaultValue="12/28"
                        className="w-full rounded-lg bg-[#121318] border border-[#2c2f3f] px-3 py-2 text-xs font-mono text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">CVC</label>
                      <input
                        type="text"
                        placeholder="CVC"
                        defaultValue="888"
                        className="w-full rounded-lg bg-[#121318] border border-[#2c2f3f] px-3 py-2 text-xs font-mono text-white"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Items Summary */}
            <div className="rounded-xl border border-[#272938] bg-[#181922] p-4 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Items ({items.length})</span>
                <span className="font-semibold text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Automated Instant Key Dispatch</span>
                <span className="font-semibold text-emerald-400">FREE ($0.00)</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#262837]">
                <span>Total Due</span>
                <span className="text-amber-400 text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] py-3.5 text-sm font-extrabold text-black transition-all shadow-lg shadow-amber-500/10 active:scale-99 disabled:opacity-50"
            >
              <Lock className="h-4 w-4 stroke-[2.5]" />
              <span>
                {isProcessing
                  ? 'Authorizing with Publisher Server...'
                  : `Complete Payment & Receive Key ($${total.toFixed(2)})`}
              </span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>
                By completing checkout, your cryptographic keys are guaranteed authentic and refundable under our 30-day policy.
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
