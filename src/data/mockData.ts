import { Product, Category, FaqItem, GuideArticle } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'windows',
    name: 'Windows Operating Systems',
    slug: 'windows',
    tagline: 'Windows 11 & Windows 10 Official Activation Keys',
    description: 'Genuine digital product keys for Windows 11 Pro and Windows 10 Pro editions with direct download links from official Microsoft servers.',
    itemCount: 2,
    iconName: 'Laptop',
  },
  {
    id: 'software',
    name: 'Software Licenses',
    slug: 'software',
    tagline: 'Coming Soon',
    description: 'Additional genuine desktop software suites and productivity tools arriving shortly.',
    itemCount: 0,
    iconName: 'ShieldCheck',
  },
];

export const GENRE_CATEGORIES = [
  { id: 'action', title: 'Action', itemCount: '120 Games', imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80' },
  { id: 'adventure', title: 'Adventure', itemCount: '85 Games', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80' },
  { id: 'arcade', title: 'Arcade', itemCount: '64 Games', imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80' },
  { id: 'fps', title: 'FPS', itemCount: '140 Games', imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&q=80' },
  { id: 'fighting', title: 'Fighting', itemCount: '42 Games', imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80' },
  { id: 'rpg', title: 'RPG', itemCount: '190 Games', imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80' },
  { id: 'strategy', title: 'Strategy', itemCount: '95 Games', imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'win-11-pro-retail',
    slug: 'windows-11-pro-retail-cd-key',
    sku: 'CDKEYPC-WIN11-PRO',
    title: 'Windows 11 Pro Retail CD Key',
    shortDescription: 'Official Microsoft 25-character digital retail product key. Transferable between PCs, lifetime validity, full BitLocker encryption, Remote Desktop, and Hyper-V virtualization support.',
    categoryId: 'windows',
    platform: 'Windows',
    platformTag: 'Windows',
    edition: 'Professional 64-bit Retail',
    licenseType: 'Retail (Transferable)',
    region: 'Global',
    regionTag: 'GLOBAL (GL)',
    deliveryMethod: 'Instant Digital (Email + Dashboard)',
    currentPrice: 5.43,
    originalPrice: 153.82,
    discountPercent: 96,
    rating: 4.95,
    reviewCount: 3840,
    inStock: true,
    stockCount: 42,
    bestSellerRank: 1,
    isFeatured: true,
    isDeal: true,
    imageUrl: '/assets/windows-11-pro.jpg',
    tags: ['Windows 11', 'Windows 11 Pro', 'Microsoft', 'Retail Key', 'Operating System', 'Global'],
    systemRequirements: {
      os: 'Clean install or in-place upgrade from Windows 10/11 Home',
      processor: '1 GHz or faster with 2 or more cores on a compatible 64-bit processor',
      memory: '4 GB RAM minimum (8 GB recommended for multitasking)',
      storage: '64 GB or larger storage device (SSD strongly recommended)',
      display: 'High definition (720p) display greater than 9" diagonally, 8 bits per color channel',
    },
    whatsIncluded: [
      'Genuine 25-character Microsoft Windows 11 Pro Retail product key',
      'Direct download mirror to official Microsoft Media Creation Tool',
      'Step-by-step PDF installation and activation tutorial',
      'Full BitLocker drive encryption, Remote Desktop & Hyper-V virtualization',
      'Transferable license rights to a new PC in the future',
      '24/7 technical activation support & 30-day money-back guarantee',
    ],
    activationSteps: [
      'Click Start > Settings > System > Activation on your Windows 11 device.',
      'Select "Change product key" and enter your 25-character cryptographic key.',
      'Click "Activate" to initiate the direct Microsoft online validation handshake.',
    ],
    importantConditions: [
      'Requires hardware supporting TPM 2.0 and UEFI Secure Boot.',
      'Directly activates both fresh clean installations and in-place upgrades from Windows 11 Home.',
    ],
  },
  {
    id: 'win-10-pro-retail',
    slug: 'windows-10-pro-retail-cd-key',
    sku: 'CDKEYPC-WIN10-PRO',
    title: 'Windows 10 Pro Retail CD Key',
    shortDescription: 'Official Microsoft 25-character digital retail product key. Lifetime validity for 1 PC, transferable, with complete enterprise security, BitLocker, Windows Sandbox, and Remote Desktop.',
    categoryId: 'windows',
    platform: 'Windows',
    platformTag: 'Windows',
    edition: 'Professional 32/64-bit Retail',
    licenseType: 'Retail (Transferable)',
    region: 'Global',
    regionTag: 'GLOBAL (GL)',
    deliveryMethod: 'Instant Digital (Email + Dashboard)',
    currentPrice: 4.98,
    originalPrice: 149.99,
    discountPercent: 97,
    rating: 4.94,
    reviewCount: 5120,
    inStock: true,
    stockCount: 58,
    bestSellerRank: 2,
    isFeatured: true,
    isDeal: true,
    imageUrl: '/assets/windows-10-pro.jpg',
    tags: ['Windows 10', 'Windows 10 Pro', 'Microsoft', 'Retail Key', 'Operating System', 'Global'],
    systemRequirements: {
      os: 'Clean install or upgrade from Windows 7, 8.1, or Windows 10 Home',
      processor: '1 GHz or faster processor or SoC',
      memory: '2 GB for 64-bit OS (4 GB+ recommended)',
      storage: '32 GB or larger disk space',
      display: '800 x 600 resolution or higher',
    },
    whatsIncluded: [
      'Genuine 25-character Microsoft Windows 10 Pro Retail product key',
      'Official Microsoft Media Creation Tool download link (ISO/USB creator)',
      'Detailed PDF installation and activation tutorial',
      'BitLocker, Assigned Access 8.1, Client Hyper-V, and Remote Desktop',
      'Lifetime validity with no expiration dates or recurring monthly fees',
      'Eligible for free Microsoft in-place upgrade to Windows 11 Pro on supported hardware',
    ],
    activationSteps: [
      'Open Start > Settings > Update & Security > Activation.',
      'Click "Change product key" and paste your 25-character product key.',
      'Click "Next" then "Activate" to confirm lifetime validation with Microsoft servers.',
    ],
    importantConditions: [
      'Works worldwide with all system languages (Multilingual).',
      'Activates both fresh installs and instant upgrades from Windows 10 Home.',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Are The Windows Keys Sold Here 100% Genuine?',
    answer:
      'Yes, absolutely. All digital keys distributed by CDKEYPC are 100% legitimate, authentic cryptographic product keys sourced through authorized enterprise distribution channels in full compliance with European Court of Justice software distribution standards (Case C-128/11). Each key connects directly to Microsoft activation servers during setup.',
    category: 'Trust & Legitimacy',
  },
  {
    question: 'How Fast Will I Receive My Windows CD Key?',
    answer:
      'Delivery is completely automated and instantaneous. As soon as your checkout is completed (typically under 60 seconds), your 25-character alphanumeric key is revealed on screen in your Customer License Vault and a permanent backup copy with official Microsoft download links is sent to your email.',
    category: 'Fulfillment',
  },
  {
    question: 'Can I Upgrade From Windows 10/11 Home To Pro?',
    answer:
      'Yes! Both Windows 11 Pro and Windows 10 Pro keys allow you to instantly upgrade in-place from the Home edition without formatting your hard drive or losing your existing files and applications. Simply enter the key under Settings > Activation.',
    category: 'Technical',
  },
  {
    question: 'Can I Transfer This Key To Another PC In The Future?',
    answer:
      'Yes. Our keys are full Retail licenses, which legally grant you transferability rights. If you build a new computer or replace your motherboard in the future, you can deactivate the key on your previous machine and reactivate it on your new PC.',
    category: 'Licensing',
  },
  {
    question: 'Where Do I Download The Official Windows ISO Or USB Installer?',
    answer:
      'You download the installer directly from official Microsoft servers using the Microsoft Media Creation Tool. We provide the verified direct links for both Windows 11 and Windows 10 so you know you are installing clean, unmodded official software.',
    category: 'Installation',
  },
  {
    question: 'What Happens If A Key Fails To Activate?',
    answer:
      'We provide an ironclad 30-Day Money-Back Guarantee. If a key cannot be validated by Microsoft servers, our technical support team provides an instant diagnostic verification, a replacement key, or a 100% refund immediately.',
    category: 'Guarantee',
  },
];

export const GUIDES: GuideArticle[] = [
  {
    id: 'guide-win11-clean-install',
    slug: 'how-to-clean-install-windows-11-usb',
    title: 'How to Clean Install and Activate Windows 11 via Official Microsoft USB',
    readTime: '5 min read',
    category: 'Windows Guides',
    date: 'Updated September 2026',
    summary: 'Step-by-step walkthrough detailing how to create bootable media with Microsoft Media Creation Tool, configure UEFI Secure Boot, and activate your Retail key.',
    relatedProductId: 'win-11-pro-retail',
  },
  {
    id: 'guide-retail-vs-oem',
    slug: 'retail-vs-oem-windows-keys-difference',
    title: 'Retail vs. OEM Product Keys: The Architectural & Legal Differences Explained',
    readTime: '4 min read',
    category: 'Licensing 101',
    date: 'Updated September 2026',
    summary: 'A clear guide breaking down transferability rights, motherboard binding rules, and direct Microsoft customer support access.',
    relatedProductId: 'win-11-pro-retail',
  },
];
