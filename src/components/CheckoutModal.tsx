import React, { useState } from 'react';
import { CartItem, OrderConfirmation } from '../types';
import {
  X,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  ShoppingCart,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { RoyalLogo } from './RoyalLogo';
import { ProductLeadForm } from './ProductLeadForm';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted?: (order: OrderConfirmation) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.product.currentPrice * item.quantity,
    0
  );

  const WHATSAPP_NUMBER = '15205427975';
  const WHATSAPP_DISPLAY = '+1 520-542-7975';
  const CONTACT_EMAIL = '123123xr@gmail.com';

  const itemsSummary = items
    .map(
      (item) =>
        `- ${item.quantity}x ${item.product.title} ($${(
          item.product.currentPrice * item.quantity
        ).toFixed(2)})`
    )
    .join('\n');

  const formattedMessage = `Hello RoyalCDKeys! I want to purchase the following digital license(s):

${itemsSummary}

Total Amount: $${total.toFixed(2)} USD
${customerName.trim() ? `Customer Name: ${customerName.trim()}\n` : ''}${customerEmail.trim() ? `Customer Email: ${customerEmail.trim()}\n` : ''}${notes.trim() ? `Note: ${notes.trim()}\n` : ''}
Please provide activation key delivery and instructions. Thank you!`;

  const handleWhatsAppOrder = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailOrder = () => {
    const subject = `Order Request: ${items
      .map((i) => `${i.quantity}x ${i.product.title}`)
      .join(', ')} ($${total.toFixed(2)})`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(formattedMessage)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div
        id="order-modal-container"
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#16171f] text-slate-200 shadow-2xl border border-[#2b2d3d]"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#242635] bg-[#121318]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <RoyalLogo size="sm" showText={false} />
            <div>
              <h2 className="text-base font-bold text-white">
                Complete Your Order
              </h2>
              <p className="text-[11px] text-slate-400">
                Direct instant order via WhatsApp or Email • No checkout gateway
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-[#252835] hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Order Items Review */}
          <div className="rounded-xl border border-[#272938] bg-[#1a1c26] p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-[#252737] pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Selected License(s)
              </span>
              <span className="text-xs font-bold text-amber-400">
                Total: ${total.toFixed(2)} USD
              </span>
            </div>

            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-400">
                      {item.quantity}x
                    </span>
                    <span className="text-slate-200 font-medium">
                      {item.product.title}
                    </span>
                  </div>
                  <span className="font-bold text-white">
                    ${(item.product.currentPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#252737] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Check className="h-3.5 w-3.5" /> 100% Genuine Microsoft Retail License
              </span>
              <span className="text-emerald-400 font-semibold">Instant Dispatch</span>
            </div>
          </div>

          {/* Instant Google Apps Script Lead / Order Form */}
          <ProductLeadForm
            defaultProduct={items[0]?.product.title || 'Windows 11 Pro'}
            title="Direct Key Order & Activation Request"
            subtitle="Enter your email and chosen product to immediately request your genuine key."
          />

          {/* Optional Details (Auto-filled into message) */}
          <div className="space-y-3 pt-2 border-t border-[#252837]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Or Order Directly via WhatsApp / Email
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Smith"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-lg bg-[#111218] border border-[#2c2f3f] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Email Address (for key backup)
                </label>
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full rounded-lg bg-[#111218] border border-[#2c2f3f] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Additional Note or Questions (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 64-bit English license confirmation"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-lg bg-[#111218] border border-[#2c2f3f] px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623]"
              />
            </div>
          </div>

          {/* Primary Action Buttons: WhatsApp & Email */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Choose How to Order
            </h3>

            {/* WhatsApp Direct Button */}
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full group flex items-center justify-between rounded-xl bg-[#25D366] hover:bg-[#20ba59] p-4 text-black font-bold transition-all shadow-lg shadow-[#25D366]/20 cursor-pointer"
            >
              <div className="flex items-center gap-3 text-left">
                {/* Official WhatsApp SVG Logo */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/15">
                  <svg
                    className="h-6 w-6 text-black fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-extrabold text-black">
                      Order via WhatsApp
                    </span>
                    <span className="rounded bg-black/20 px-2 py-0.5 text-[10px] font-extrabold text-black">
                      FAST RESPONSE
                    </span>
                  </div>
                  <p className="text-xs text-black/80 font-medium">
                    Chat directly with us at {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-black shrink-0" />
            </button>

            {/* Email Direct Button */}
            <button
              type="button"
              onClick={handleEmailOrder}
              className="w-full group flex items-center justify-between rounded-xl bg-[#F5A623] hover:bg-[#e09419] p-4 text-black font-bold transition-all shadow-lg shadow-[#F5A623]/20 cursor-pointer"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/15">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-extrabold text-black">
                      Order via Email
                    </span>
                    <span className="rounded bg-black/20 px-2 py-0.5 text-[10px] font-extrabold text-black">
                      OFFICIAL DISPATCH
                    </span>
                  </div>
                  <p className="text-xs text-black/80 font-medium">
                    Send order to {CONTACT_EMAIL}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-black shrink-0" />
            </button>
          </div>

          {/* Pre-formatted Message & Copy Option */}
          <div className="rounded-xl border border-[#272938] bg-[#121319] p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                Order Message Preview
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md bg-[#222432] hover:bg-[#2e3144] px-2.5 py-1 text-xs font-semibold text-slate-200 transition-colors border border-[#31354a]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-amber-400" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-[11px] text-slate-400 bg-[#0c0d12] p-3 rounded-lg border border-[#1e202b] leading-relaxed max-h-36 overflow-y-auto">
              {formattedMessage}
            </pre>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-[#242635] text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>100% Genuine Microsoft Retail License</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Lifetime Transferable Activation Rights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

