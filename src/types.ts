export type CategoryId = 'windows' | 'office' | 'software' | 'games' | 'subscriptions' | 'subscription' | 'streaming' | 'gift-cards';

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  categoryId: CategoryId;
  platform: 'Windows' | 'Mac' | 'Multi-Platform' | 'PC / Steam' | 'Cross-Platform' | string;
  platformTag?: string; // e.g. 'Steam', 'Windows', 'Battle.net', 'Xbox One', 'macOS', 'Cross-platform', 'Streaming'
  regionTag?: string; // e.g. 'GLOBAL (GL)', 'EUROPE (EU)'
  edition: string;
  licenseType: 'Retail (Transferable)' | 'OEM (Single Device)' | 'Digital Code' | 'Subscription Key' | 'Account (Instant)' | string;
  region: 'Global' | 'North America' | 'Europe' | 'Worldwide' | string;
  deliveryMethod: 'Instant Digital (Email + Dashboard)' | string;
  currentPrice: number;
  originalPrice: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  bestSellerRank?: number;
  isFeatured?: boolean;
  isDeal?: boolean;
  imageUrl: string;
  tags: string[];
  warrantyStatus: 'guaranteed' | 'no-warranty';
  warrantyText: string;
  systemRequirements: {
    os: string;
    processor: string;
    memory: string;
    storage: string;
    display: string;
  };
  whatsIncluded: string[];
  activationSteps: string[];
  importantConditions: string[];
  sku: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  itemCount: number;
  iconName: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  readTime: string;
  category: string;
  date: string;
  summary: string;
  relatedProductId?: string;
}

export interface OrderConfirmation {
  orderId: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  date: string;
  licenseKeys: {
    productId: string;
    productTitle: string;
    key: string;
    downloadUrl: string;
  }[];
}
