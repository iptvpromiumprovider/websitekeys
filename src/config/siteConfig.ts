/**
 * KeyWin Central Site Configuration
 * Single source of truth for branding, domains, verified contacts, and navigation routes.
 */

export interface ContactChannel {
  name: string;
  label: string;
  value: string;
  url: string;
  verified: boolean;
  type: 'whatsapp' | 'telegram' | 'lead-form';
}

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
}

export const SITE_CONFIG = {
  brand: {
    name: 'KeyWin',
    legalName: 'KeyWin Digital Software Licenses',
    tagline: 'Authentic Digital Software & Operating System Keys Marketplace',
    domain: 'keywin.vercel.app',
    baseUrl: 'https://keywin.vercel.app',
    currency: 'USD',
    currencySymbol: '$',
    targetRegion: 'Global (Worldwide)',
    foundedYear: 2024,
    // Note on missing details:
    // Missing verified official email address and registered physical corporate address in configuration.
    // To protect customers from bounces, unverified third-party email addresses
    // are omitted. Verified direct instant contact channels are maintained below.
    missingBusinessDetails: [
      'Official custom domain email (e.g. contact@keywin.com) pending DNS/mailserver setup',
      'Physical business headquarters address / corporate registration number',
    ],
  },

  contacts: {
    whatsapp: {
      name: 'WhatsApp Direct Support',
      label: '+1 520-542-7975',
      value: '15205427975',
      url: 'https://wa.me/15205427975',
      verified: true,
      type: 'whatsapp' as const,
    },
    telegram: {
      name: 'Telegram Support Channel',
      label: '@bigovv',
      value: '@bigovv',
      url: 'https://t.me/bigovv',
      verified: true,
      type: 'telegram' as const,
    },
    orderApi: {
      name: 'Google Apps Script Orders Webhook',
      endpoint: 'https://script.google.com/macros/s/AKfycby5H4v-d_XzEw1lQ1r3b6o4xT9yK0wM2_jV6h/exec',
      verified: true,
    },
  },

  seo: {
    defaultTitle: 'KeyWin | Buy Windows 11, Office 2024 & Software Digital Keys',
    titleTemplate: '%s | KeyWin',
    defaultDescription:
      'Buy genuine Microsoft Windows 11, Office 2024, and software digital product keys with instant delivery at KeyWin. Authentic licenses with lifetime activation guarantee.',
    ogImage: 'https://keywin.vercel.app/assets/win11-hero-card.jpg',
    googleSiteVerification: 'google1a0bc0a3d21687d6',
  },

  categories: [
    {
      id: 'windows',
      slug: 'windows',
      path: '/windows/',
      title: 'Windows Operating System Keys',
      description: 'Genuine Microsoft Windows 11 Pro, Windows 10 Pro, and Home retail and OEM product keys with lifetime validity.',
    },
    {
      id: 'office',
      slug: 'office',
      path: '/office/',
      title: 'Microsoft Office Productivity Suites',
      description: 'Official lifetime Office 2024 Professional Plus, Office 2021 LTSC, and Office 2019 digital license keys.',
    },
    {
      id: 'subscriptions',
      slug: 'subscriptions',
      path: '/subscriptions/',
      title: 'Subscriptions & Cloud AI Keys',
      description: 'Prepaid digital subscription codes including Google Gemini Advanced and Xbox Game Pass Ultimate.',
    },
    {
      id: 'software',
      slug: 'software',
      path: '/software/',
      title: 'Security & PC Software Keys',
      description: 'Authentic security suites, utilities, and PC gaming licenses with instant digital dispatch.',
    },
  ],

  policies: [
    {
      slug: 'about',
      path: '/about/',
      title: 'About KeyWin',
      description: 'Learn about KeyWin, our wholesale digital software procurement model, and our genuine license guarantees.',
    },
    {
      slug: 'contact',
      path: '/contact/',
      title: 'Contact Customer Support',
      description: 'Get in touch with KeyWin 24/7 via WhatsApp (+1 520-542-7975) or Telegram (@bigovv) for instant license dispatch assistance.',
    },
    {
      slug: 'delivery',
      path: '/delivery/',
      title: 'Digital Key Instant Delivery Policy',
      description: 'Everything you need to know about our automated 60-second digital key delivery and step-by-step setup guides.',
    },
    {
      slug: 'refunds',
      path: '/refunds/',
      title: 'Refund & Replacement Policy',
      description: 'Clear, transparent 100% activation guarantee and replacement policy for all eligible software licenses.',
    },
    {
      slug: 'terms',
      path: '/terms/',
      title: 'Terms of Service',
      description: 'KeyWin digital software marketplace terms, user agreements, and wholesale licensing conditions.',
    },
    {
      slug: 'privacy',
      path: '/privacy/',
      title: 'Privacy Policy',
      description: 'How KeyWin protects your data, order information, and communication privacy with zero third-party telemetry.',
    },
  ],
} as const;
