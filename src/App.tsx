import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Product, CartItem, OrderConfirmation } from './types';
import { PRODUCTS, FAQS } from './data/mockData';
import { SITE_CONFIG } from './config/siteConfig';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PlatformBar } from './components/PlatformBar';
import { WindowsProductShowcase } from './components/WindowsProductShowcase';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductBuyPage } from './components/ProductBuyPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AccountModal } from './components/AccountModal';
import { PolicyPage, PolicySlug } from './components/PolicyPages';
import { SeoContentSection } from './components/SeoContentSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AlertTriangle, ArrowLeft, ShoppingBag } from 'lucide-react';

type RouteState =
  | { type: 'home'; category: string }
  | { type: 'category'; category: string }
  | { type: 'product'; product: Product }
  | { type: 'policy'; slug: PolicySlug }
  | { type: '404'; requestedPath: string };

export default function App() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [route, setRoute] = useState<RouteState>({ type: 'home', category: 'all' });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Cart state initialized with Windows 11 Pro
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 },
  ]);

  // Orders state
  const [recentOrders, setRecentOrders] = useState<OrderConfirmation[]>([]);

  // Find a product by slug, alias, or id
  const findProduct = useCallback(
    (key: string): Product | undefined => {
      const normalized = key.toLowerCase().trim().replace(/\/$/, '');
      return products.find(
        (p) =>
          p.slug.toLowerCase() === normalized ||
          p.id.toLowerCase() === normalized ||
          p.aliases?.some((a) => a.toLowerCase() === normalized)
      );
    },
    [products]
  );

  // Parse location into RouteState
  const resolveRoute = useCallback((): RouteState => {
    if (typeof window === 'undefined') {
      return { type: 'home', category: 'all' };
    }

    const searchParams = new URLSearchParams(window.location.search);
    const legacyProduct = searchParams.get('product');

    // 1. Support legacy ?product=... parameter seamlessly
    if (legacyProduct) {
      const match = findProduct(legacyProduct);
      if (match) {
        // Enforce clean canonical URL in browser history without reload
        const canonicalUrl = `/products/${match.slug}/`;
        window.history.replaceState({ slug: match.slug }, '', canonicalUrl);
        return { type: 'product', product: match };
      }
    }

    const pathname = window.location.pathname.toLowerCase();
    const cleanPath = pathname.replace(/^\/+|\/+$/g, '');

    // 2. Root / Homepage
    if (!cleanPath || cleanPath === 'index.html') {
      return { type: 'home', category: 'all' };
    }

    // 3. Category Routes (/windows, /office, /subscriptions, /software)
    const validCategory = SITE_CONFIG.categories.find(
      (c) => c.slug === cleanPath || c.id === cleanPath
    );
    if (validCategory) {
      return { type: 'category', category: validCategory.id };
    }

    // 4. Policy Routes (/about, /contact, /delivery, /refunds, /terms, /privacy)
    const validPolicy = SITE_CONFIG.policies.find((p) => p.slug === cleanPath);
    if (validPolicy) {
      return { type: 'policy', slug: validPolicy.slug as PolicySlug };
    }

    // 5. Product Detail Routes (/products/:slug or /product/:slug)
    if (cleanPath.startsWith('products/') || cleanPath.startsWith('product/')) {
      const slug = cleanPath.split('/')[1];
      if (slug) {
        const match = findProduct(slug);
        if (match) {
          return { type: 'product', product: match };
        }
      }
      return { type: '404', requestedPath: pathname };
    }

    // 6. Direct product slug fallback (e.g. /windows-11-pro-retail-cd-key/)
    const directMatch = findProduct(cleanPath);
    if (directMatch) {
      window.history.replaceState({ slug: directMatch.slug }, '', `/products/${directMatch.slug}/`);
      return { type: 'product', product: directMatch };
    }

    // 7. Unknown route -> 404
    return { type: '404', requestedPath: pathname };
  }, [findProduct]);

  // Initialize and handle back/forward navigation
  useEffect(() => {
    setRoute(resolveRoute());

    const handlePopState = () => {
      setRoute(resolveRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [resolveRoute]);

  // Synchronize dynamic head tags, canonical URL, and structured JSON-LD
  useEffect(() => {
    const updateHeadTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLElement | null;
      if (!el) {
        const tag = selector.startsWith('meta') ? 'meta' : selector.startsWith('link') ? 'link' : null;
        if (tag) {
          el = document.createElement(tag);
          const parts = selector.match(/\[([a-zA-Z:-]+)="([^"]+)"\]/);
          if (parts) {
            el.setAttribute(parts[1], parts[2]);
          }
          document.head.appendChild(el);
        }
      }
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    let title: string = SITE_CONFIG.seo.defaultTitle;
    let description: string = SITE_CONFIG.seo.defaultDescription;
    let canonical: string = `${SITE_CONFIG.brand.baseUrl}/`;
    let ogImage: string = SITE_CONFIG.seo.ogImage;
    let jsonLdData: object | null = null;

    if (route.type === 'home' || route.type === 'category') {
      const catConfig = SITE_CONFIG.categories.find((c) => c.id === route.category);
      if (catConfig && route.category !== 'all') {
        title = `${catConfig.title} | Buy Genuine Keys | ${SITE_CONFIG.brand.name}`;
        description = catConfig.description;
        canonical = `${SITE_CONFIG.brand.baseUrl}${catConfig.path}`;
      } else {
        title = SITE_CONFIG.seo.defaultTitle;
        description = SITE_CONFIG.seo.defaultDescription;
        canonical = `${SITE_CONFIG.brand.baseUrl}/`;
      }

      jsonLdData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_CONFIG.brand.baseUrl}/#website`,
            url: `${SITE_CONFIG.brand.baseUrl}/`,
            name: SITE_CONFIG.brand.name,
            description: SITE_CONFIG.brand.tagline,
            publisher: {
              '@id': `${SITE_CONFIG.brand.baseUrl}/#organization`,
            },
          },
          {
            '@type': 'Organization',
            '@id': `${SITE_CONFIG.brand.baseUrl}/#organization`,
            name: SITE_CONFIG.brand.name,
            url: `${SITE_CONFIG.brand.baseUrl}/`,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_CONFIG.brand.baseUrl}/assets/win11-hero-card.jpg`,
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: '+1-520-542-7975',
                availableLanguage: ['English'],
              },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ],
      };
    } else if (route.type === 'product') {
      const p = route.product;
      title = `${p.title} - $${p.currentPrice.toFixed(2)} | Instant Key | ${SITE_CONFIG.brand.name}`;
      description = p.shortDescription;
      canonical = `${SITE_CONFIG.brand.baseUrl}/products/${p.slug}/`;
      ogImage = `${SITE_CONFIG.brand.baseUrl}${p.imageUrl}`;

      jsonLdData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_CONFIG.brand.baseUrl}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: p.categoryId ? p.categoryId.toUpperCase() : 'Software',
                item: `${SITE_CONFIG.brand.baseUrl}/${p.categoryId}/`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: p.title,
                item: canonical,
              },
            ],
          },
          {
            '@type': 'Product',
            '@id': `${canonical}#product`,
            name: p.title,
            image: ogImage,
            description: p.shortDescription,
            sku: p.sku,
            brand: {
              '@type': 'Brand',
              name: p.platformTag || p.platform || 'Microsoft',
            },
            offers: {
              '@type': 'Offer',
              url: canonical,
              priceCurrency: 'USD',
              price: p.currentPrice.toFixed(2),
              priceValidUntil: '2027-12-31',
              availability: p.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
              itemCondition: 'https://schema.org/NewCondition',
              seller: {
                '@type': 'Organization',
                name: SITE_CONFIG.brand.name,
                url: `${SITE_CONFIG.brand.baseUrl}/`,
              },
            },
          },
        ],
      };
    } else if (route.type === 'policy') {
      const pol = SITE_CONFIG.policies.find((p) => p.slug === route.slug);
      if (pol) {
        title = `${pol.title} | ${SITE_CONFIG.brand.name}`;
        description = pol.description;
        canonical = `${SITE_CONFIG.brand.baseUrl}${pol.path}`;
      }
      jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        url: canonical,
        description,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_CONFIG.brand.baseUrl}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: pol?.title || 'Policy',
              item: canonical,
            },
          ],
        },
      };
    } else if (route.type === '404') {
      title = `404 - Page Not Found | ${SITE_CONFIG.brand.name}`;
      description = 'The requested digital software product or policy page does not exist on KeyWin.';
      canonical = `${SITE_CONFIG.brand.baseUrl}/`;
    }

    // Apply metadata to DOM
    document.title = title;
    updateHeadTag('meta[name="description"]', 'content', description);
    updateHeadTag('link[rel="canonical"]', 'href', canonical);
    updateHeadTag('meta[property="og:title"]', 'content', title);
    updateHeadTag('meta[property="og:description"]', 'content', description);
    updateHeadTag('meta[property="og:url"]', 'content', canonical);
    updateHeadTag('meta[property="og:image"]', 'content', ogImage);
    updateHeadTag('meta[property="og:site_name"]', 'content', SITE_CONFIG.brand.name);
    updateHeadTag('meta[name="twitter:title"]', 'content', title);
    updateHeadTag('meta[name="twitter:description"]', 'content', description);
    updateHeadTag('meta[name="twitter:url"]', 'content', canonical);
    updateHeadTag('meta[name="twitter:image"]', 'content', ogImage);

    // Dynamic JSON-LD script
    let scriptEl = document.getElementById('dynamic-seo-ldjson') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'dynamic-seo-ldjson';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    if (jsonLdData) {
      scriptEl.textContent = JSON.stringify(jsonLdData);
    }
  }, [route]);

  // Navigation handlers
  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    setRoute({ type: 'home', category: 'all' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (categoryId: string) => {
    const targetPath = categoryId === 'all' ? '/' : `/${categoryId}/`;
    window.history.pushState(null, '', targetPath);
    setRoute({ type: categoryId === 'all' ? 'home' : 'category', category: categoryId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = (product: Product) => {
    const targetPath = `/products/${product.slug}/`;
    window.history.pushState({ slug: product.slug }, '', targetPath);
    setRoute({ type: 'product', product });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPolicy = (slug: PolicySlug) => {
    const targetPath = `/${slug}/`;
    window.history.pushState(null, '', targetPath);
    setRoute({ type: 'policy', slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    navigateToProduct(product);
  };

  const handleOrderCompleted = (order: OrderConfirmation) => {
    setRecentOrders((prev) => [order, ...prev]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Active category for platform bar
  const currentCategory = useMemo(() => {
    if (route.type === 'category' || route.type === 'home') {
      return route.category;
    }
    return 'all';
  }, [route]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#F5A623] selection:text-black">
      
      {/* 1. KeyWin Store Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onHomeClick={navigateToHome}
        onSelectCategory={(cat) => navigateToCategory(cat)}
        products={products}
        onSelectProduct={navigateToProduct}
        onOpenAccount={() => setIsAccountOpen(true)}
        selectedCategory={currentCategory}
      />

      {/* Main View Dispatcher */}
      <main>
        {/* VIEW 1: PRODUCT BUY PAGE */}
        {route.type === 'product' && (
          <ProductBuyPage
            product={route.product}
            allProducts={products}
            onBack={navigateToHome}
            onAddToCart={handleAddToCart}
            onSelectProduct={navigateToProduct}
            onOrderCompleted={handleOrderCompleted}
          />
        )}

        {/* VIEW 2: POLICY / INFORMATION PAGES */}
        {route.type === 'policy' && (
          <PolicyPage
            slug={route.slug}
            onNavigateHome={navigateToHome}
            onNavigatePolicy={navigateToPolicy}
          />
        )}

        {/* VIEW 3: 404 NOT FOUND */}
        {route.type === '404' && (
          <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
            <div className="max-w-lg w-full text-center border border-white/10 bg-[#111216] p-8 sm:p-12">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 border border-amber-500/30 text-[#F5A623] mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-white font-['Space_Grotesk',sans-serif]">
                404
              </h1>
              <h2 className="mt-2 text-lg font-bold text-slate-200">
                Page Not Found
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                The requested URL <code className="text-[#F5A623] bg-[#0A0A0A] px-1.5 py-0.5 border border-white/10">{route.requestedPath}</code> could not be located. It may have been moved or updated.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={navigateToHome}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09419] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors cursor-pointer font-mono"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Return to Home Catalog</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateToCategory('windows')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 bg-[#16171E] hover:bg-[#1E202B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 transition-colors cursor-pointer font-mono"
                >
                  <ShoppingBag className="h-4 w-4 text-[#F5A623]" />
                  <span>Windows 11 Keys</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: HOME / CATEGORY CATALOG */}
        {(route.type === 'home' || route.type === 'category') && (
          <>
            {/* Hero Banner (Windows 11 & Office 2024 Showcase) */}
            <HeroSection
              onShopClick={() => {
                const el = document.getElementById('software-deals-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectProduct={navigateToProduct}
              products={products}
            />

            {/* Platform Navigation Bar */}
            <PlatformBar
              selectedPlatform={currentCategory}
              onSelectPlatform={(platform) => navigateToCategory(platform)}
            />

            {/* Main Product Showcase Grid */}
            <WindowsProductShowcase
              products={products}
              onAddToCart={handleAddToCart}
              onInstantBuy={handleInstantBuy}
              onQuickView={navigateToProduct}
            />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Educational SEO & Technical Checklist */}
            <SeoContentSection />

            {/* Frequently Asked Questions */}
            <FaqSection faqs={FAQS} />
          </>
        )}
      </main>

      {/* Store Footer */}
      <Footer
        onSelectCategory={navigateToCategory}
        onNavigatePolicy={navigateToPolicy}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Instant Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={(order) => {
          handleOrderCompleted(order);
          setCartItems([]);
        }}
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
