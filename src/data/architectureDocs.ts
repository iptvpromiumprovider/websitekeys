export interface PhaseDoc {
  id: string;
  phaseNumber: number;
  title: string;
  objective: string;
  whyDecisionMade: string;
  potentialPitfallsAndSolutions: {
    risk: string;
    impact: string;
    architecturalSolution: string;
  }[];
  content: string;
}

export const ARCHITECTURE_PHASES: PhaseDoc[] = [
  {
    id: 'phase-1',
    phaseNumber: 1,
    title: 'Complete Website Architecture & Information Hierarchy',
    objective: 'Establish a rock-solid, scalable directory and navigation tree capable of growing seamlessly from 10 to 1,000+ products across 50+ categories without restructuring.',
    whyDecisionMade: 'Flat e-commerce architectures often collapse under scale when subcategories or regional SKU variations multiply. A strict, logical directory structure creates clear topical clusters for Google crawler discovery, guarantees predictable breadcrumbs, and simplifies faceted filtering for WooCommerce.',
    potentialPitfallsAndSolutions: [
      {
        risk: 'Deep nested URLs (e.g., /shop/software/operating-systems/microsoft/windows/11/pro/)',
        impact: 'Dilutes PageRank, confuses users, and exceeds clean indexation depths.',
        architecturalSolution: 'Adopt a hybrid 2-tier URL model: Top categories at /category/[category-slug]/ and products at /product/[product-slug]/. Breadcrumbs maintain contextual hierarchy without forcing slug nesting.',
      },
      {
        risk: 'Faceted search duplicate content indexation (e.g. ?platform=win&sort=price_asc)',
        impact: 'Massive crawl budget waste, canonical cannibalization, and index bloat.',
        architecturalSolution: 'Disallow filter query strings in robots.txt and enforce self-referential canonical tags on all core category URLs.',
      },
    ],
    content: `
### 1. High-Level Taxonomy & URL Structure

- **Homepage:** \`/\`
- **Catalog & Discovery:**
  - Complete Catalog: \`/products/\`
  - Category Master: \`/categories/\`
  - Primary Category Hubs:
    - \`/category/windows/\` (Subcategories: \`/category/windows/windows-11/\`, \`/category/windows/windows-10/\`, \`/category/windows/server/\`)
    - \`/category/microsoft-office/\` (Subcategories: \`/category/microsoft-office/office-2024/\`, \`/category/microsoft-office/mac/\`)
    - \`/category/security-software/\`
    - \`/category/game-keys/\`
    - \`/category/gift-cards/\`
  - Promotional Hub: \`/deals/\`
- **Product Detail Pages (PDP):**
  - Canonical Structure: \`/product/[product-slug]/\` (e.g. \`/product/windows-11-pro-license-key/\`)
  - *Decision:* Keeping the \`/product/\` prefix un-nested prevents broken URLs when products are reassigned between subcategories.
- **Content & Authority Engine:**
  - Guides Hub: \`/guides/\` (e.g. \`/guides/windows-11-clean-install-and-activation-guide/\`)
  - Blog & News: \`/blog/\`
  - Help & Support: \`/support/\`
  - Comprehensive FAQ: \`/faq/\`
- **Transfers & Policies (Trust Anchor):**
  - About Us & Verification: \`/about/\`
  - Contact & Live Dispatch Status: \`/contact/\`
  - Digital Delivery Policy: \`/digital-delivery-policy/\`
  - 30-Day Guarantee & Refund Terms: \`/refund-policy/\`
  - Privacy Policy (GDPR / CCPA): \`/privacy-policy/\`
  - Terms of Service: \`/terms-of-service/\`
- **Transactional Customer Funnel:**
  - Cart: \`/cart/\`
  - Secure Checkout: \`/checkout/\`
  - Instant Order & Key Delivery Portal: \`/order-confirmation/[order-id]/\`
  - Customer License Vault: \`/my-account/licenses/\`
    `,
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    title: 'Homepage Wireframe & Strategic Layout Grid',
    objective: 'Engineer an above-the-fold and continuous narrative sequence that maximizes buyer confidence, eliminates decision fatigue, and targets high-intent commercial keywords.',
    whyDecisionMade: 'Digital license buyers are hyper-sensitive to fraud and counterfeit fears. Leading with prominent transparency (clear H1, explicit delivery mechanics, platform compatibility badges, and clear refund rules) converts cautious shoppers into repeat buyers.',
    potentialPitfallsAndSolutions: [
      {
        risk: 'Vague marketing hero copy ("Unlock the digital future today")',
        impact: 'High bounce rate; visitors cannot tell within 3 seconds what is being sold or if it is legitimate.',
        architecturalSolution: 'Use an explicit, human H1 ("Verified Digital Software Licenses & Activation Keys") paired with a direct delivery breakdown and direct CTA to catalog.',
      },
      {
        risk: 'Hidden license terms (e.g., selling OEM as Retail)',
        impact: 'Chargebacks, angry customer support requests, payment processor holds.',
        architecturalSolution: 'Prominently display license type (Retail vs OEM), platform compatibility, and activation methods on every card and hero feature.',
      },
    ],
    content: `
### Homepage Wireframe Layout Sequence

1. **Top Trust Announcement Bar:**
   - 24/7 Automated Dispatch (<60s) • 100% Activation Guarantee • Support Hotline & Live Chat
2. **Sticky Header & Search:**
   - Brand Logo ("CoreLicense") • Primary Mega-menu • Instant Typeahead Live Search • My Keys / Account • Cart Drawer Trigger
3. **Hero Section (High-Intent Conversion):**
   - **H1:** "Verified Digital Software Licenses & Activation Keys"
   - **Subheadline:** "Official retail and standalone software licenses with instant automated email delivery, official publisher download mirrors, and lifetime activation assistance."
   - **Dual CTAs:** [Shop Digital Products] (Primary) | [Browse Categories] (Secondary)
   - **Live Metrics:** Direct vendor mirrors • Zero shipping fees • Instant key generation
4. **Value & Trust Bar (4 Core Pillars):**
   - Instant Delivery (<60s) | Verified Genuine Keys | 256-Bit SSL Checkout | Dedicated Setup Support
5. **Category Directory Grid:**
   - Visual cards for Windows, Office, Security, Games, Gift Cards with live item counts and SEO anchors.
6. **Featured & Best-Seller Grids:**
   - Strict card typography: Platform pill, Edition tag, License type (Retail vs OEM), Verified buyer rating, Current price vs Genuine MSRP, Instant Delivery badge, Quick View & Add to Cart.
7. **Curated Value Deals & Bundles:**
   - High-AOV bundles (e.g., Windows 11 Pro + Office 2024 Pro Plus) with real volume discounts.
8. **Why Choose Us (The Trust Engine):**
   - Direct download from official CDNs (microsoft.com) • Exhaustive documentation • Transparent legal compliance (EU Directive 2009/24/EC / UsedSoft vs Oracle).
9. **How It Works (3-Step Simplicity):**
   - 1. Select License -> 2. Secure Checkout -> 3. Instant Activation & Official Download.
10. **In-Depth SEO Educational Section:**
    - People-First guide covering Digital Licensing, Retail vs OEM differences, and pre-purchase hardware verification.
11. **Comprehensive FAQ (Accordion):**
    - 8 critical questions with FAQPage Schema addressing delivery speed, error resolution, and refund rights.
12. **Footer & Compliance Badges:**
    - Legal navigation, payment processor marks (Visa, MC, PayPal, Apple Pay), copyright, and company registration details.
    `,
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    title: 'Design System & Component Tokens',
    objective: 'Establish a refined, high-contrast, professional technology commerce identity devoid of amateur AI visual clichés.',
    whyDecisionMade: 'High-trust software distributors (like Newegg, CDW, or Humble Bundle) succeed because of disciplined typography, predictable spacing, and clear data hierarchy, not glowing gradient effects or unreadable glassmorphism.',
    potentialPitfallsAndSolutions: [
      {
        risk: 'Using purple-to-blue neon gradients and glowing dark-mode cards',
        impact: 'Looks like an ephemeral cryptocurrency scam or amateur landing page.',
        architecturalSolution: 'Implement a crisp, enterprise light palette with deep navy accents (#0F172A), trustworthy cobalt blue (#2563EB), neutral warm grays, and 4.5:1+ WCAG AA text contrast.',
      },
      {
        risk: 'Arbitrary border radiuses and nested card borders',
        impact: 'Visual noise and amateurish interface clutter.',
        architecturalSolution: 'Strict mathematical corner radius hierarchy (Inner = Outer - Padding) with max 12px for cards and 6-8px for inputs/badges.',
      },
    ],
    content: `
### Color Palette Tokens (Tailwind Compliant)
- **Brand Primary (Trust Cobalt):** \`#1E40AF\` (blue-800) / \`#2563EB\` (blue-600)
- **Brand Secondary (Deep Slate):** \`#0F172A\` (slate-900)
- **Background:** \`#F8FAFC\` (slate-50) with pure white (\`#FFFFFF\`) for content containers
- **Surface Elevation:** 1px borders with \`#E2E8F0\` (slate-200) and optical micro-shadows (\`shadow-xs\`, \`shadow-sm\`)
- **Text Hierarchy:**
  - Primary Body & Headings: \`#0F172A\` (slate-900, 14.8:1 contrast on white)
  - Secondary Metadata: \`#475569\` (slate-600, 5.9:1 contrast on white)
  - Subtle Labels: \`#64748B\` (slate-500, 4.6:1 contrast on white - WCAG AA compliant)
- **Success / In-Stock Accent:** \`#15803D\` (emerald-700) on \`#DCFCE7\` (emerald-100)
- **Discount & Warning:** \`#B91C1C\` (red-700) and \`#D97706\` (amber-600)

### Typographic Hierarchy
- **Scale Ratio:** Major Second (1.125) for dense, professional e-commerce clarity.
- **Font Stack:** Clean system sans-serif (Inter/system-ui) with explicit tracking and line-heights (\`leading-tight\` for headings, \`leading-relaxed\` for body).
- **Control Rules:** Single-line badge text (\`whitespace-nowrap\`), minimum 44px touch targets on mobile, visible keyboard focus rings (\`focus:ring-2 focus:ring-blue-600\`).
    `,
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    title: 'SEO Architecture, Structured Data & Technical Discovery',
    objective: 'Engineer an organic search fortress that dominates commercial and informational search queries while strictly adhering to Google People-First content guidelines.',
    whyDecisionMade: 'Search engines heavily penalize digital key stores that engage in doorway generation or keyword stuffing. Implementing rich Schema.org structured data (Product, Offer, AggregateRating, FAQPage, BreadcrumbList) provides rich snippets in SERPs while technical speed protects Core Web Vitals.',
    potentialPitfallsAndSolutions: [
      {
        risk: 'Fake schema reviews or fabricated ratings',
        impact: 'Manual search penalty from Google, deletion of rich snippets across entire domain.',
        architecturalSolution: 'Bind schema only to authentic verified customer reviews with actual dates and verified purchase flags.',
      },
      {
        risk: 'Missing canonical tags or duplicate pagination',
        impact: 'Crawl budget exhaustion and duplicate page indexing.',
        architecturalSolution: 'Provide self-referential canonical tags on root pages and explicit rel="prev" / rel="next" pagination directives.',
      },
    ],
    content: `
### Structured Data (JSON-LD) Implementations

#### 1. Organization & WebSite Search Schema
\`\`\`json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://corelicense.com/#organization",
      "name": "CoreLicense Digital Technologies",
      "url": "https://corelicense.com",
      "logo": "https://corelicense.com/assets/logo.png",
      "sameAs": [
        "https://twitter.com/corelicense",
        "https://linkedin.com/company/corelicense"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@corelicense.com",
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://corelicense.com/#website",
      "url": "https://corelicense.com",
      "name": "CoreLicense",
      "publisher": { "@id": "https://corelicense.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://corelicense.com/products/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
\`\`\`

#### 2. Product Schema with Real Offer & Delivery Time
\`\`\`json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Windows 11 Professional Retail License Key",
  "image": ["https://corelicense.com/images/win11pro.jpg"],
  "description": "Genuine Microsoft Windows 11 Professional 64-bit retail product key with instant automated digital email fulfillment.",
  "sku": "MS-WIN11-PRO-RTL",
  "offers": {
    "@type": "Offer",
    "url": "https://corelicense.com/product/windows-11-pro-license-key/",
    "priceCurrency": "USD",
    "price": "38.99",
    "priceValidUntil": "2026-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "deliveryLeadTime": {
      "@type": "QuantitativeValue",
      "minValue": 0,
      "maxValue": 2,
      "unitCode": "MIN"
    }
  }
}
\`\`\`

#### 3. Robots.txt Directives
\`\`\`
User-agent: *
Disallow: /checkout/
Disallow: /cart/
Disallow: /my-account/
Disallow: /order-confirmation/
Disallow: /*?*sort=
Disallow: /*?*filter=
Allow: /wp-content/uploads/
Sitemap: https://corelicense.com/sitemap_index.xml
\`\`\`
    `,
  },
  {
    id: 'phase-5',
    phaseNumber: 5,
    title: 'Product, Category, and Blog Template Blueprints',
    objective: 'Define pixel-perfect, high-converting templates for PDPs, Category Hubs, and In-Depth Technical Guides.',
    whyDecisionMade: 'Conversion rates jump by over 40% when digital buyers see what is included, exact system requirements, and clear activation steps before checking out, preventing post-purchase support tickets.',
    potentialPitfallsAndSolutions: [
      {
        risk: 'Thin category pages with just a grid of links',
        impact: 'Rankings plummet under Google "Helpful Content System" updates.',
        architecturalSolution: 'Embed rich category introductory guides, comparative tables, and category-specific FAQs beneath the product grid.',
      },
      {
        risk: 'Unclear software compatibility',
        impact: 'Customers buy Windows 11 on machines lacking TPM 2.0 or buy Office 2021 for Mac, leading to disputes.',
        architecturalSolution: 'Display prominent OS compatibility pills and a dedicated System Requirements matrix directly on the PDP.',
      },
    ],
    content: `
### 1. Product Detail Page (PDP) Architecture
- **Above The Fold:**
  - Breadcrumb (\`Home > Windows > Windows 11 Pro Retail\`)
  - Two-Column Layout:
    - Left: High-resolution packaging visual, license authenticity watermark, delivery timeline badge.
    - Right: Product Title, Edition & Architecture pill, Verified Review count, Real Current Price vs MSRP savings, License Type clarification (Retail vs OEM), Stock status, "Add to Cart" & "Instant Buy Now", Payment security badges, Pre-purchase advisory banner.
- **Below The Fold (Tabbed Deep Information):**
  - Tab 1: Product Overview & Key Features (BitLocker, Remote Desktop, Hyper-V, Sandbox)
  - Tab 2: What's Included (25-char key, official ISO mirror link, PDF guide, VAT invoice)
  - Tab 3: System Requirements Matrix (CPU, RAM, TPM 2.0, Storage)
  - Tab 4: Step-by-Step Activation Instructions (Clean install vs in-place upgrade)
  - Tab 5: 30-Day Guarantee & Replacement Policy
  - Section 6: Specific Product FAQs
  - Section 7: Related & Complementary Products (e.g., Office 2024 with Windows 11)

### 2. Category Hub Template Architecture
- Top: SEO-friendly H1 + Concise buyer introduction (2-3 sentences)
- Filter Sidebar / Bar: Platform, Price Range, License Type (Retail / OEM / Subscription), Availability
- Sort Controls: Most Popular, Price: Low to High, Price: High to Low, Rating
- Responsive Grid: 3-4 cards per row desktop, 2 per row tablet, 1 per row mobile
- Bottom: Comprehensive Category Buying Guide & FAQ block
    `,
  },
  {
    id: 'phase-6',
    phaseNumber: 6,
    title: 'WordPress & WooCommerce Production Implementation Plan',
    objective: 'Provide a turn-key roadmap for migrating this React prototype into a hardened, high-speed WordPress/WooCommerce production environment.',
    whyDecisionMade: 'WordPress powers over 40% of the web, and WooCommerce paired with modern caching and automated license delivery plugins provides full merchant ownership without high SaaS fees (unlike Shopify).',
    potentialPitfallsAndSolutions: [
      {
        risk: 'Slow checkout caused by bloated WooCommerce plugins',
        impact: 'Abandoned carts and poor conversion.',
        architecturalSolution: 'Use WooCommerce High-Performance Order Storage (HPOS), object caching via Redis, and lightweight custom block templates.',
      },
      {
        risk: 'Digital key theft or exposure in plaintext databases',
        impact: 'Key leakage, unauthorized reuse, and inventory loss.',
        architecturalSolution: 'Use AES-256 encrypted license key vaults (such as WooCommerce License Manager or custom encrypted custom post types) where keys are decrypted only upon order completion.',
      },
    ],
    content: `
### Recommended WordPress Tech Stack

1. **Core CMS & Shop Engine:**
   - WordPress 6.6+ with WooCommerce 9.0+
   - Enable **WooCommerce HPOS** (High-Performance Order Storage) for isolated transactional database tables.
2. **Digital License Key Management Plugins:**
   - *Option A (Recommended):* **License Manager for WooCommerce**
     - Supports pre-stocked license pools per SKU
     - Automated dispatch upon 'wc-completed' status trigger
     - Encrypted database storage with audit logs
     - Custom REST API endpoints for external inventory synchronization
   - *Option B:* **WooCommerce Software Add-On** (Official Automattic extension)
3. **Custom Fields & Content Architecture:**
   - **ACF Pro (Advanced Custom Fields):**
     - \`product_license_type\` (Radio: Retail / OEM / Subscription)
     - \`product_platform\` (Select: Windows / Mac / Cross-Platform)
     - \`product_download_mirror\` (URL: Official vendor CDN)
     - \`system_requirements\` (Repeater: CPU, RAM, Storage, OS)
     - \`whats_included\` (Repeater list)
4. **Caching & Speed Architecture:**
   - Server: Nginx with FastCGI Page Cache
   - Object Cache: Redis (using Redis Object Cache Pro)
   - Exclude from Cache: \`/cart/*\`, \`/checkout/*\`, \`/my-account/*\`, \`woocommerce_items_in_cart\` cookie
   - Cloudflare Enterprise / Pro with Polish & WebP conversion
5. **SEO & Structured Data:**
   - RankMath Pro or Yoast SEO Premium configured with automatic WooCommerce schema mapping
   - Auto-generated XML Sitemaps split into \`product-sitemap.xml\`, \`category-sitemap.xml\`, \`guide-sitemap.xml\`
6. **Payment Gateways:**
   - Stripe for WooCommerce (Apple Pay, Google Pay, 3D Secure 2.0)
   - PayPal Complete Payments (Vaulting enabled for guest checkouts)
    `,
  },
  {
    id: 'phase-7',
    phaseNumber: 7,
    title: 'Final Implementation Rationale & Commercial Alignment',
    objective: 'Synthesize UX, Trust, SEO, and Performance into a functional, production-ready frontend experience.',
    whyDecisionMade: 'A real commercial application must balance instant visual delight with deep transactional utility. Every component built in the final application directly addresses buyer friction and guarantees accessibility.',
    potentialPitfallsAndSolutions: [
      {
        risk: 'Interactive stubs that do nothing when clicked',
        impact: 'Erodes trust immediately; feels like a broken prototype.',
        architecturalSolution: 'Every single button, filter, category card, quick-view, search, cart operation, and simulated checkout with instant key generation is 100% operational.',
      },
    ],
    content: `
### Key Accomplishments in the Live Experience:
1. **Responsive Header with Live Search:**
   - Instant fuzzy search across product titles, tags, and categories with keyboard navigation.
2. **Dynamic Category & Filter Engine:**
   - Filter by category, sort by price/rating, view stock counts, and test responsive adjustments.
3. **High-Converting Product Detail Experience:**
   - Full PDP modal equipped with tabbed system requirements, activation steps, and purchase advisories.
4. **Simulated Frictionless Checkout:**
   - Allows placing a test order that generates a real 25-character license key format, download link, and activation guide.
5. **Architectural Blueprint Viewer:**
   - Gives developers, designers, and SEO specialists direct access to inspect all 7 planning phases inside the interface.
    `,
  },
];
