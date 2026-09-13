import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShieldCheck, Check, Zap, ArrowRight, Lock, ShoppingCart } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.currentPrice * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#16171f] text-slate-200 shadow-2xl flex flex-col border-l border-[#262837]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#242635] bg-[#121318]">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-white">Your Cart</h2>
              <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-xs font-bold text-amber-400">
                {items.reduce((sum, i) => sum + i.quantity, 0)} items
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-[#222430] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Delivery Notice */}
          <div className="bg-amber-500/10 px-6 py-2.5 border-b border-amber-500/20 flex items-center gap-2 text-xs text-amber-300">
            <Zap className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Instant Digital Delivery: $0.00 (Automated dispatch)</span>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-sm font-semibold text-white">Your cart is currently empty</p>
                <p className="mt-1 text-xs text-slate-400">
                  Select a digital software license to get started.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 rounded-xl bg-[#F59E0B] px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Browse Store Catalog
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 rounded-xl border border-[#272938] bg-[#1a1c25] p-3"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    className="h-16 w-16 rounded-lg object-cover bg-[#101116] shrink-0"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-semibold text-white line-clamp-2">
                          {item.product.title}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        {item.product.platformTag || item.product.platform} • {item.product.edition}
                      </span>

                      {/* Warranty Status inside Cart */}
                      {item.product.warrantyStatus === 'guaranteed' ? (
                        <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30 w-fit">
                          <Check className="h-2.5 w-2.5" />
                          <span>Garanti Yes (100% Replacement Warranty)</span>
                        </div>
                      ) : (
                        <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/30 w-fit">
                          <ShieldCheck className="h-2.5 w-2.5 text-amber-400" />
                          <span>No Garanti (Wholesale Single Activation)</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#2b2d3d] rounded bg-[#16171f]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-slate-300 hover:bg-[#252835] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-slate-300 hover:bg-[#252835] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-amber-400">
                        ${(item.product.currentPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="border-t border-[#242635] bg-[#121318] p-6 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Automated Key Dispatch</span>
                  <span className="font-semibold text-emerald-400">FREE ($0.00)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#222430]">
                  <span>Total Order Amount</span>
                  <span className="text-amber-400">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                id="cart-proceed-checkout"
                onClick={onCheckout}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-3.5 text-sm font-extrabold text-black transition-all shadow-lg shadow-[#25D366]/10 active:scale-99 cursor-pointer"
              >
                <span>Order via WhatsApp or Email</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Direct Order • WhatsApp (+1 520-542-7975) &amp; Email Support</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
