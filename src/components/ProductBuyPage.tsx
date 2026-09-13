import React, { useState } from 'react';
import { Product, OrderConfirmation } from '../types';
import {
  ArrowLeft,
  ShoppingCart,
  Phone,
  Zap,
  ShieldCheck,
  Check,
  Star,
  CheckCircle2,
  Globe,
  Lock,
  Copy,
  ExternalLink,
  Info,
  Clock,
  Laptop,
  HelpCircle,
} from 'lucide-react';

interface ProductBuyPageProps {
  product: Product;
  allProducts: Product[];
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onOrderCompleted?: (order: OrderConfirmation) => void;
}

export const ProductBuyPage: React.FC<ProductBuyPageProps> = ({
  product,
  allProducts,
  onBack,
  onAddToCart,
  onSelectProduct,
  onOrderCompleted,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'activation' | 'requirements' | 'warranty'>('description');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'crypto' | 'whatsapp'>('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [successOrder, setSuccessOrder] = useState<OrderConfirmation | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const WHATSAPP_NUMBER = '15205427975';
  const WHATSAPP_DISPLAY = '+1 520-542-7975';

  const totalPrice = product.currentPrice * quantity;
  const savings = (product.originalPrice - product.currentPrice) * quantity;
  const discountPercent = Math.round(
    ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
  );

  // Related products from other items
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleWhatsAppDirect = () => {
    const message = `Hello RoyalCDKeys! I want to purchase:\n- ${quantity}x ${product.title} ($${totalPrice.toFixed(2)} USD)\nSKU: ${product.sku}\nPlatform: ${product.platformTag || product.platform}\n${customerEmail ? `My Email: ${customerEmail}\n` : ''}Please send payment details and instant activation instructions.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFormOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail.trim()) {
      alert('Please enter your email address for key delivery.');
      return;
    }

    setIsSubmitting(true);

    // Simulate order generation with genuine key
    setTimeout(() => {
      const generatedKey = `W269N-WFGWX-YVC9B-4J6C9-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      const newOrder: OrderConfirmation = {
        orderId: `RCK-${Date.now().toString().slice(-6)}`,
        customerEmail: customerEmail,
        items: [{ product, quantity }],
        total: totalPrice,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        licenseKeys: [
          {
            productId: product.id,
            productTitle: product.title,
            key: product.category === 'subscriptions' ? 'Credentials sent via WhatsApp & Email' : generatedKey,
            downloadUrl: 'https://setup.office.com',
          },
        ],
      };

      setSuccessOrder(newOrder);
      setOrderSuccess(true);
      setIsSubmitting(false);

      if (onOrderCompleted) {
        onOrderCompleted(newOrder);
      }
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#090a0e] text-slate-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Breadcrumbs & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1f2230]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Store Catalog</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="capitalize">{product.category}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 font-medium truncate max-w-xs">{product.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#171924] border border-[#272a3b] px-3 py-1 text-xs text-slate-300">
            <Zap className="h-3.5 w-3.5 text-[#F5A623]" />
            <span>Digital Key Automated Dispatch in &lt; 60s</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SUCCESS ORDER BANNER / MODAL (IF ORDER COMPLETED)              */}
        {/* ============================================================== */}
        {orderSuccess && successOrder && (
          <div className="mb-8 rounded-2xl border-2 border-emerald-500/50 bg-[#102318] p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-500/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">Order Confirmed &amp; Dispatched!</h3>
                  <p className="text-xs text-emerald-300">Order ID: <span className="font-bold">{successOrder.orderId}</span> • Delivered to {successOrder.customerEmail}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello RoyalCDKeys, my order ID is ${successOrder.orderId} for ${product.title}. Please provide instant support.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-4 py-2.5 text-xs font-black text-black transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Confirm on WhatsApp</span>
              </a>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#0a1710] border border-emerald-500/30 p-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Your Digital Activation License:
                </div>
                <div className="flex items-center justify-between bg-black/40 rounded-lg p-2.5 border border-emerald-500/40">
                  <code className="text-sm sm:text-base font-mono font-black text-amber-400 tracking-wider">
                    {successOrder.licenseKeys[0]?.key}
                  </code>
                  <button
                    type="button"
                    onClick={() => {
                      if (successOrder.licenseKeys[0]?.key) {
                        navigator.clipboard.writeText(successOrder.licenseKeys[0].key);
                        setCopiedKey(true);
                        setTimeout(() => setCopiedKey(false), 2000);
                      }
                    }}
                    className="p-1.5 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedKey ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  A copy of this key and complete step-by-step installation instructions have been sent to {successOrder.customerEmail}.
                </p>
              </div>

              <div className="rounded-xl bg-[#0a1710] border border-emerald-500/30 p-4 text-xs space-y-1.5 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Product:</span>
                  <span className="font-bold text-white">{successOrder.licenseKeys[0]?.productTitle || product.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Quantity:</span>
                  <span className="font-bold text-white">{successOrder.items[0]?.quantity || 1} license(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Paid:</span>
                  <span className="font-bold text-amber-400">${successOrder.total.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dispatch Status:</span>
                  <span className="font-bold text-emerald-400">Completed (&lt; 60s)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* MAIN PRODUCT BUY HERO SECTION                                  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Product Image & Trust Indicators (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Product Box Card */}
            <div className="relative rounded-2xl border border-[#252837] bg-[#12141c] p-6 flex flex-col items-center justify-center shadow-xl overflow-hidden group">
              {/* Discount Tag */}
              {discountPercent > 0 && (
                <div className="absolute top-4 left-4 z-10 rounded-lg bg-[#F5A623] px-2.5 py-1 text-xs font-black text-black shadow-md">
                  -{discountPercent}% OFF
                </div>
              )}

              {/* Region Pill */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-lg bg-[#191b26]/90 border border-[#2b2e40] px-2.5 py-1 text-[11px] font-bold text-slate-300">
                <Globe className="h-3 w-3 text-sky-400" />
                <span>{product.regionTag || product.region}</span>
              </div>

              {/* High-res Image */}
              <div className="my-6 relative flex items-center justify-center w-full max-w-[280px] aspect-square">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Delivery badge */}
              <div className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#181a25] border border-[#2a2d3e] py-2.5 text-xs font-semibold text-slate-300">
                <Zap className="h-4 w-4 text-[#F5A623]" />
                <span>Instant Automated Digital Delivery in &lt; 60 Seconds</span>
              </div>
            </div>

            {/* Trust and Guarantee Badges */}
            <div className="rounded-2xl border border-[#222533] bg-[#10121a] p-4 space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">100% Genuine Digital License</div>
                  <div className="text-[11px] text-slate-400">Authentic Microsoft/Vendor ISO activation from official servers.</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300 border-t border-[#1b1e2a] pt-2.5">
                <Lock className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Direct WhatsApp Support</div>
                  <div className="text-[11px] text-slate-400">Human support 24/7 at +1 520-542-7975 for clean install guidance.</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300 border-t border-[#1b1e2a] pt-2.5">
                <Globe className="h-5 w-5 text-sky-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">Global Region-Free Activation</div>
                  <div className="text-[11px] text-slate-400">Valid worldwide in all languages and regions. No VPN required.</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Buy Controls, Pricing, Order Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title & Platform Tag */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="rounded bg-[#1a1d29] border border-[#2c3042] px-2.5 py-0.5 text-xs font-bold text-slate-300">
                  {product.platformTag || product.platform}
                </span>
                <span className="rounded bg-[#1a1d29] border border-[#2c3042] px-2.5 py-0.5 text-xs font-bold text-amber-400">
                  {product.edition}
                </span>
                <span className="text-xs text-slate-500">SKU: {product.sku}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {product.title}
              </h1>

              {/* Rating and Stock Indicator */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center text-amber-400">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="ml-1.5 font-bold text-white">{product.rating.toFixed(1)}</span>
                  <span className="ml-1 text-slate-400">({product.reviewCount} customer reviews)</span>
                </div>

                <span className="text-slate-600">•</span>

                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>In Stock (Ready to dispatch)</span>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="rounded-2xl border border-[#292c3c] bg-gradient-to-r from-[#141620] to-[#181a26] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-bold block">
                  Wholesale Direct Price
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#F5A623]">
                    ${product.currentPrice.toFixed(2)}
                  </span>
                  {product.originalPrice > product.currentPrice && (
                    <span className="text-base text-slate-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Save ${savings.toFixed(2)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Single one-time payment • No recurring charges • Digital Delivery
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 border-[#252838] pt-3 sm:pt-0">
                <span className="text-xs font-bold text-slate-400">Quantity:</span>
                <div className="flex items-center rounded-xl border border-[#303346] bg-[#11131a]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-sm font-bold text-slate-300 hover:bg-[#202331] rounded-l-xl transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-sm font-bold text-slate-300 hover:bg-[#202331] rounded-r-xl transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-3.5 px-4 text-sm font-extrabold text-black transition-all shadow-lg shadow-[#25D366]/10 active:scale-99 cursor-pointer"
              >
                <Phone className="h-4 w-4 stroke-[2.5]" />
                <span>Buy via WhatsApp (+1 520-542-7975)</span>
              </button>

              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#F5A623] hover:bg-[#e09419] py-3.5 px-4 text-sm font-extrabold text-black transition-all shadow-lg shadow-[#F5A623]/10 active:scale-99 cursor-pointer"
              >
                <ShoppingCart className="h-4 w-4 stroke-[2.5]" />
                <span>Add to Cart (${totalPrice.toFixed(2)})</span>
              </button>
            </div>

            {/* Fast Embedded Checkout Form */}
            <div className="rounded-2xl border border-[#272a3b] bg-[#11131c] p-5 sm:p-6 shadow-md">
              <div className="flex items-center justify-between border-b border-[#202332] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#F5A623]" />
                  <h3 className="text-sm font-black text-white">Instant One-Step Order Dispatch</h3>
                </div>
                <span className="text-xs font-bold text-amber-400">Total: ${totalPrice.toFixed(2)} USD</span>
              </div>

              <form onSubmit={handleFormOrder} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Your Email Address (where your license key is sent) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. yourname@gmail.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full rounded-xl bg-[#0e1017] border border-[#2b2f42] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    WhatsApp Number (for instant backup delivery &amp; support)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 520-542-7975"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full rounded-xl bg-[#0e1017] border border-[#2b2f42] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-[#F5A623] transition-colors"
                  />
                </div>

                {/* Payment Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Select Payment Method:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('whatsapp')}
                      className={`p-2.5 rounded-xl border font-bold text-center transition-all cursor-pointer ${
                        paymentMethod === 'whatsapp'
                          ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                          : 'border-[#262938] bg-[#141620] text-slate-400 hover:text-white'
                      }`}
                    >
                      WhatsApp Direct
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border font-bold text-center transition-all cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'border-amber-500 bg-amber-950/40 text-amber-300'
                          : 'border-[#262938] bg-[#141620] text-slate-400 hover:text-white'
                      }`}
                    >
                      Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-2.5 rounded-xl border font-bold text-center transition-all cursor-pointer ${
                        paymentMethod === 'paypal'
                          ? 'border-blue-500 bg-blue-950/40 text-blue-300'
                          : 'border-[#262938] bg-[#141620] text-slate-400 hover:text-white'
                      }`}
                    >
                      PayPal
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('crypto')}
                      className={`p-2.5 rounded-xl border font-bold text-center transition-all cursor-pointer ${
                        paymentMethod === 'crypto'
                          ? 'border-purple-500 bg-purple-950/40 text-purple-300'
                          : 'border-[#262938] bg-[#141620] text-slate-400 hover:text-white'
                      }`}
                    >
                      Crypto (USDT)
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[#F5A623] to-[#e09419] hover:from-[#e09419] hover:to-[#c68012] py-3.5 text-sm font-black text-black shadow-lg shadow-[#F5A623]/20 active:scale-99 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing Order...' : `Complete Order Now — $${totalPrice.toFixed(2)} USD`}
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Instant key delivery to your email in &lt; 60 seconds. Guaranteed authentic.
                </p>
              </form>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* TABS SECTION: Description, Activation, Requirements, Warranty  */}
        {/* ============================================================== */}
        <div className="mt-12 rounded-2xl border border-[#232637] bg-[#10121a] overflow-hidden shadow-lg">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#202332] overflow-x-auto bg-[#0d0f15]">
            <button
              type="button"
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'description'
                  ? 'border-[#F5A623] text-[#F5A623] bg-[#13151f]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Description &amp; Key Features
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('activation')}
              className={`px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'activation'
                  ? 'border-[#F5A623] text-[#F5A623] bg-[#13151f]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              How to Activate (Step-by-Step)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'requirements'
                  ? 'border-[#F5A623] text-[#F5A623] bg-[#13151f]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              System Requirements
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('warranty')}
              className={`px-6 py-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'warranty'
                  ? 'border-[#F5A623] text-[#F5A623] bg-[#13151f]'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Warranty &amp; Support Policy
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">About {product.title}</h3>
                <p>{product.shortDescription}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Official digital product key verified directly against Microsoft/Vendor servers.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Region-Free Global activation without restrictions or proxy requirements.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Automated electronic email delivery sent immediately after purchase.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Full multilingual support: change display language freely at any time.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activation' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">Official Activation Guide</h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-300">
                  <li>
                    <strong className="text-white">Download official software:</strong> Always download Windows using the official Microsoft Media Creation Tool or Office from <code className="text-amber-400 bg-[#1a1c27] px-1.5 py-0.5 rounded">setup.office.com</code>.
                  </li>
                  <li>
                    <strong className="text-white">Navigate to Settings:</strong> Go to <span className="text-white">Start &gt; Settings &gt; System &gt; Activation</span>.
                  </li>
                  <li>
                    <strong className="text-white">Change Product Key:</strong> Click on <span className="text-amber-400">Change product key</span> or enter it directly during installation.
                  </li>
                  <li>
                    <strong className="text-white">Paste your license code:</strong> Enter your 25-character digital product key received from RoyalCDKeys.
                  </li>
                  <li>
                    <strong className="text-white">Activate:</strong> Click Next &gt; Activate. Your copy will instantly become fully genuine and registered.
                  </li>
                </ol>
                <p className="text-xs text-slate-400 pt-2 border-t border-[#1f2230]">
                  Need live assistance? Send a message to our WhatsApp support team at <a href="https://wa.me/15205427975" className="text-emerald-400 font-bold hover:underline">+1 520-542-7975</a>.
                </p>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">System Requirements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#222535] bg-[#141620] p-4 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Hardware Specifications</div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li><strong>Processor:</strong> 1 GHz or faster with 2 or more cores (64-bit)</li>
                      <li><strong>Memory:</strong> 4 GB RAM minimum (8 GB recommended)</li>
                      <li><strong>Storage:</strong> 64 GB or larger available disk space</li>
                      <li><strong>System Firmware:</strong> UEFI, Secure Boot capable</li>
                      <li><strong>TPM:</strong> Trusted Platform Module (TPM) version 2.0 (for Win 11)</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-[#222535] bg-[#141620] p-4 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Connectivity &amp; Display</div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li><strong>Display:</strong> High definition (720p) display, greater than 9&quot; diagonally, 8 bits per color channel</li>
                      <li><strong>Internet:</strong> Internet connectivity is required to perform updates and activate product keys</li>
                      <li><strong>Architecture:</strong> Both 32-bit and 64-bit systems supported where applicable</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">Warranty &amp; Guarantee Terms</h3>
                {product.warrantyStatus === 'guaranteed' ? (
                  <div className="rounded-xl border border-emerald-500/40 bg-[#122319] p-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                      <Check className="h-4 w-4 shrink-0" />
                      <span>Garanti Yes (100% Full Replacement Warranty)</span>
                    </div>
                    <p className="text-xs text-emerald-300/90 mt-1.5">
                      This product includes a complete 100% replacement warranty throughout your active subscription. In the event of any credential expiration or reset, simply message our team on WhatsApp for an immediate replacement.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-xl border border-amber-500/40 bg-[#251f14] p-4">
                    <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm">
                      <ShieldCheck className="h-4 w-4 shrink-0" />
                      <span>No Garanti (Wholesale Single Activation Guarantee)</span>
                    </div>
                    <p className="text-xs text-amber-300/90 mt-1.5">
                      Offered at rock-bottom liquidation wholesale rates with a single activation guarantee. Sold without extended replacement warranty (Sans Garantie) to keep prices at maximum discount.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* RELATED PRODUCTS SECTION                                       */}
        {/* ============================================================== */}
        {relatedProducts.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-extrabold text-white mb-4">Related Deals You May Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectProduct(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="rounded-xl border border-[#232635] bg-[#11131c] hover:border-[#F5A623] p-3.5 flex flex-col justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex justify-center my-3 h-24">
                    <img
                      src={rel.imageUrl}
                      alt={rel.title}
                      className="max-h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-sky-400 uppercase">{rel.platformTag || rel.platform}</span>
                    <h4 className="text-xs font-bold text-white truncate mt-0.5">{rel.title}</h4>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-sm font-black text-[#F5A623]">${rel.currentPrice.toFixed(2)}</span>
                      <span className="text-[11px] text-slate-500 line-through">${rel.originalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
