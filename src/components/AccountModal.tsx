import React, { useState } from 'react';
import { OrderConfirmation } from '../types';
import { X, Key, ShieldCheck, Download, ExternalLink, Copy, Check, Clock, User } from 'lucide-react';
import { RoyalLogo } from './RoyalLogo';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  recentOrders: OrderConfirmation[];
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  recentOrders,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#16171f] text-slate-200 shadow-2xl border border-[#2b2d3d] p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#242635] pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Key className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Customer License Vault</h2>
              <p className="text-xs text-slate-400">Access your purchased cryptographic keys and official downloads anytime</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-[#222430] hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {recentOrders.length === 0 ? (
          <div className="text-center py-12 rounded-xl border border-dashed border-[#2b2d3d] p-6 bg-[#181922]">
            <Key className="mx-auto h-10 w-10 text-slate-500 mb-2" />
            <h3 className="text-sm font-bold text-white">No active licenses in this session</h3>
            <p className="mt-1 text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Once you complete an order, your 25-character product keys, invoices, and direct vendor installation mirrors will be permanently stored here.
            </p>
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-[#F59E0B] px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-400 transition-colors"
              >
                Browse Store Catalog
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {recentOrders.map((order) => (
              <div
                key={order.orderId}
                className="rounded-xl border border-[#2b2d3d] bg-[#1a1c26] p-5 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#242635] pb-3">
                  <div>
                    <span className="font-bold text-white text-sm">Order {order.orderId}</span>
                    <span className="text-slate-400 text-xs block">{order.date}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 font-bold text-sm">${order.total.toFixed(2)}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px] font-medium">
                      <Check className="h-3 w-3" /> Dispatched
                    </span>
                  </div>
                </div>

                {/* Keys list */}
                <div className="space-y-3">
                  {order.licenseKeys.map((item, idx) => (
                    <div key={idx} className="rounded-lg bg-[#111217] border border-[#282a38] p-3 space-y-2">
                      <div className="text-xs font-semibold text-white">
                        {item.productTitle}
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex-1 font-mono text-xs text-amber-400 bg-[#16171f] p-2 rounded border border-[#2b2d3d] overflow-x-auto select-all">
                          {item.key}
                        </div>
                        <button
                          type="button"
                          onClick={() => copyKey(item.key)}
                          className="flex items-center gap-1 text-xs bg-[#242634] hover:bg-amber-500 hover:text-black text-slate-200 px-3 py-2 rounded font-semibold transition-colors"
                        >
                          {copiedKey === item.key ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
