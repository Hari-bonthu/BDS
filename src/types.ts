export type Language = 'en' | 'te';

export type PageId =
  | 'home'
  | 'services'
  | 'insights'
  | 'about'
  | 'pricing'
  | 'portfolio'
  | 'contact'
  | 'content-creation'
  | 'short-form-video-ads'
  | 'social-media-management'
  | 'platform-coverage'
  | 'content-operations'
  | 'community-management'
  | 'reporting-insights';

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Local SEO' | 'Pricing & ROI' | 'Marketing ROI' | 'Video & Reels' | 'Healthcare' | 'Retail & Showrooms';
  readTime: string;
  summary: string;
  targetKeyword: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
  }[];
  callToAction: string;
}

export interface ServiceDetail {
  id: PageId;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  category: string;
  highlightMetric: string;
  highlightMetricLabel: string;
  whatsIncluded: {
    title: string;
    description: string;
    points: string[];
  }[];
  benefits: {
    title: string;
    description: string;
    stat?: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  targetAudience: string[];
  sampleWorkPreview: {
    title: string;
    type: string;
    description: string;
    impact: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  startingPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  results: string;
  avatarBg: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  neighborhood?: string;
  bilingualTag?: string;
  serviceCategory: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge?: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  servicesIncluded: string[];
  ctaText: string;
}

export interface ContactInquiry {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  service: string;
  budget: string;
  message: string;
}
