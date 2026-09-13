import React, { useState } from 'react';
import { Product, CategoryId, CartItem, OrderConfirmation } from './types';
import { PRODUCTS, FAQS } from './data/mockData';
import { Header } from './components/Header';
import { PlatformBar } from './components/PlatformBar';
import { HeroSection } from './components/HeroSection';
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

  // Cart state - initialized with Windows 11 Pro
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 },
  ]);

  // Orders state for Customer License Vault
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

  // Filter products by platform tag if user clicks top bar
  const displayedProducts = products.filter((p) => {
    if (selectedPlatform === 'all') return true;
    if (selectedPlatform === 'windows') return p.categoryId === 'windows';
    if (selectedPlatform === 'office') return p.categoryId === 'office';
    if (selectedPlatform === 'subscription') return p.categoryId === 'subscription';
    if (selectedPlatform === 'software') return true;
    if (selectedPlatform === 'win11') return p.tags.includes('Windows 11');
    if (selectedPlatform === 'win10') return p.tags.includes('Windows 10');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-black">
      
      {/* 1. Header Navbar */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
        onSelectCategory={() => {
          setSelectedPlatform('all');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onOpenAccount={() => setIsAccountOpen(true)}
        selectedCategory="all"
      />

      {/* 2. Platform Bar with Windows Editions & Guarantees */}
      <PlatformBar
        selectedPlatform={selectedPlatform}
        onSelectPlatform={(platform) => {
          setSelectedPlatform(platform);
          const el = document.getElementById('catalog-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main>
        {/* 3. Hero Section matching reference */}
        <HeroSection
          onShopClick={() => {
            const el = document.getElementById('catalog-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectProduct={(p) => setSelectedProduct(p)}
          products={products}
        />

        {/* 4. The 2 Flagship Windows Operating System Products */}
        <WindowsProductShowcase
          products={displayedProducts}
          onAddToCart={handleAddToCart}
          onInstantBuy={handleInstantBuy}
          onQuickView={(p) => setSelectedProduct(p)}
        />

        {/* 5. Trust & Architectural Transparency */}
        <WhyChooseUs />

        {/* 6. Frequently Asked Questions Accordion */}
        <FaqSection
          faqs={FAQS}
          onLearnMore={() => setIsBlueprintOpen(true)}
        />
      </main>

      {/* 7. Store Footer */}
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

      {/* Instant Checkout & Cryptographic Key Dispatch Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Enterprise Architecture Blueprint Modal */}
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
