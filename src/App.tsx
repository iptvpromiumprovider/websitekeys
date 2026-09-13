import React, { useState } from 'react';
import { Product, CartItem, OrderConfirmation } from './types';
import { PRODUCTS, FAQS } from './data/mockData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PlatformBar } from './components/PlatformBar';
import { WindowsProductShowcase } from './components/WindowsProductShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { AccountModal } from './components/AccountModal';

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  // Modals & Drawers state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Cart state initialized with Windows 11 Pro
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 },
  ]);

  // Orders state
  const [recentOrders, setRecentOrders] = useState<OrderConfirmation[]>([]);

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleInstantBuy = (product: Product) => {
    setCartItems([{ product, quantity: 1 }]);
    setIsCheckoutOpen(true);
  };

  const handleOrderCompleted = (order: OrderConfirmation) => {
    setRecentOrders((prev) => [order, ...prev]);
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#090a0d] text-slate-100 font-sans antialiased selection:bg-[#F5A623] selection:text-black">
      
      {/* 1. Store Header matching RoyalCDKeys */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
        onSelectCategory={(category) => {
          setSelectedPlatform(category);
          const el = document.getElementById('catalog-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onOpenAccount={() => setIsAccountOpen(true)}
        selectedCategory={selectedPlatform}
      />

      <main>
        {/* 2. Hero Banner matching screenshot (Windows 11 & Office 2024) */}
        <HeroSection
          onShopClick={() => {
            const el = document.getElementById('software-deals-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectProduct={(p) => setSelectedProduct(p)}
          products={products}
        />

        {/* 3. Platform Bar (Windows, Office, Software, Subscriptions) - No Games */}
        <PlatformBar
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />

        {/* 4. Main Catalog: Top Software Deals, Creative Software, Top Subscription Deals */}
        <WindowsProductShowcase
          products={products}
          onAddToCart={handleAddToCart}
          onInstantBuy={handleInstantBuy}
          onQuickView={(p) => setSelectedProduct(p)}
        />

        {/* 5. Why Choose RoyalCDKeys & Warranty Transparency */}
        <WhyChooseUs />

        {/* 6. Frequently Asked Questions (Exact 10 questions from screenshot) */}
        <FaqSection
          faqs={FAQS}
          onLearnMore={() => setIsBlueprintOpen(true)}
        />
      </main>

      {/* 7. Store Footer (Exact 4 columns from screenshot) */}
      <Footer
        onSelectCategory={() => {
          setSelectedPlatform('all');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onInstantBuy={handleInstantBuy}
        relatedProducts={products.filter((p) => selectedProduct && p.id !== selectedProduct.id)}
        onSelectRelated={(p) => setSelectedProduct(p)}
      />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Instant Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Architecture Blueprint Modal */}
      <ArchitectureModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
      />

      {/* Customer License Vault Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        recentOrders={recentOrders}
      />
    </div>
  );
}
