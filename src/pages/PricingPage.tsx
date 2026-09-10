import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Zap,
  Star,
  Video,
  QrCode,
  MessageCircle,
  Building2,
  Check,
  Minus,
  Layers,
  SlidersHorizontal
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { CTASection } from '../components/common/CTASection';
import { PageId, Language } from '../types';
import {
  GoogleLogo,
  GoogleMapsLogo,
  InstagramLogo,
  ReelsLogo,
  MetaLogo,
  WhatsAppLogo,
  YouTubeLogo,
  CreativesLogo
} from '../components/common/PlatformLogos';

interface PricingPageProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (planName?: string) => void;
}

// 3 Regional Pricing Plans Definition with Monthly & Quarterly Discount Rates
interface TierPlan {
  id: 'starter' | 'pro' | 'dominance';
  name: string;
  nameTe: string;
  badge: string;
  badgeTe: string;
  popular?: boolean;
  tagline: string;
  taglineTe: string;
  idealFor: string;
  idealForTe: string;
  monthlyPrice: number;
  monthlyPriceDisplay: string;
  quarterlyMonthlyRate: number;
  quarterlyMonthlyRateDisplay: string;
  quarterlyTotalDisplay: string;
  quarterlySavingsDisplay: string;
  keyStats: { value: string; label: string };
  deliverables: string[];
  deliverablesTe: string[];
  platforms: {
    name: string;
    component: React.FC<{ className?: string }>;
  }[];
  ctaText: string;
  ctaTextTe: string;
}

const pricingTiers: TierPlan[] = [
  {
    id: 'starter',
    name: 'Starter Growth',
    nameTe: 'స్టార్టర్ గ్రోత్',
    badge: 'Affordable Regional Entry',
    badgeTe: 'అత్యంత సరసమైన ప్రారంభ ప్లాన్',
    popular: false,
    tagline: 'Ideal for local retail shops, clinics, salons, and new businesses establishing their digital footprint in East Godavari.',
    taglineTe: 'రాజమండ్రి మరియు పరిసర ప్రాంతాల్లోని చిన్న దుకాణాలు, క్లినిక్‌లు మరియు స్టార్టప్‌లకు సరిపోయే డిజిటల్ ప్యాకేజీ.',
    idealFor: 'Small local shops, diagnostic labs, boutique salons & standalone outlets',
    idealForTe: 'చిన్న రిటైల్ షాపులు, క్లినిక్‌లు, సెలూన్లు మరియు స్వతంత్ర వ్యాపారాలు',
    monthlyPrice: 7999,
    monthlyPriceDisplay: '₹7,999',
    quarterlyMonthlyRate: 7199,
    quarterlyMonthlyRateDisplay: '₹7,199',
    quarterlyTotalDisplay: '₹21,597 / quarter',
    quarterlySavingsDisplay: 'Save ₹2,400',
    keyStats: { value: '12 Posts + 4 Reels', label: 'Monthly Creative Output' },
    deliverables: [
      '12 Custom High-Resolution Creatives (Bilingual Telugu + English)',
      '4 Engaging Short-Form Video Reels / Shorts (Scripted & Edited)',
      'Google Business Profile (Maps) 3-Pack Optimization',
      'Meta (Facebook & Instagram) Page Setup & Scheduled Publishing',
      'Local Rajahmundry Hashtag & Keyword Strategy',
      'Monthly Performance Summary PDF Report',
      'WhatsApp Support during business hours'
    ],
    deliverablesTe: [
      '12 హై-క్వాలిటీ సోషల్ మీడియా పోస్ట్‌లు (తెలుగు + ఇంగ్లీష్)',
      '4 ఆకర్షణీయమైన ఇన్‌స్టాగ్రామ్ రీల్స్ / యూట్యూబ్ షార్ట్స్',
      'Google Maps బిజినెస్ ప్రొఫైల్ ఆప్టిమైజేషన్',
      'ఫేస్‌బుక్ & ఇన్‌స్టాగ్రామ్ పేజీల నిర్వహణ',
      'స్థానిక హ్యాష్‌ట్యాగ్‌లు మరియు కీవర్డ్ రీసెర్చ్',
      'నెలవారీ పెర్ఫార్మెన్స్ PDF రిపోర్ట్',
      'బిజినెస్ వేళల్లో వాట్సాప్ సపోర్ట్'
    ],
    platforms: [
      { name: 'Instagram', component: InstagramLogo },
      { name: 'Google Maps', component: GoogleMapsLogo },
      { name: 'Meta / FB', component: MetaLogo },
      { name: 'WhatsApp', component: WhatsAppLogo },
      { name: 'Creatives', component: CreativesLogo }
    ],
    ctaText: 'Choose Starter Plan',
    ctaTextTe: 'స్టార్టర్ ప్లాన్ ఎంచుకోండి'
  },
  {
    id: 'pro',
    name: 'Business Pro Accelerator',
    nameTe: 'బిజినెస్ ప్రో యాక్సిలరేటర్',
    badge: 'Most Popular Regional Plan',
    badgeTe: 'అత్యంత ప్రజాదరణ పొందిన ప్లాన్',
    popular: true,
    tagline: 'Our flagship comprehensive package engineered for maximum customer inquiries, showroom footfalls, and verified search dominance.',
    taglineTe: 'ఎక్కువ మంది కస్టమర్లు, షోరూమ్ వాక్-ఇన్లు మరియు గూగుల్ లీడ్స్ తీసుకురావడానికి రూపొందించబడిన మా ప్రధాన ప్లాన్.',
    idealFor: 'Established retail showrooms, dental/implant clinics, colleges, hospitality & growing brands',
    idealForTe: 'టెక్స్‌టైల్ షోరూమ్‌లు, మల్టీ-స్పెషాలిటీ క్లినిక్‌లు, కాలేజీలు మరియు హోటల్స్',
    monthlyPrice: 14999,
    monthlyPriceDisplay: '₹14,999',
    quarterlyMonthlyRate: 13499,
    quarterlyMonthlyRateDisplay: '₹13,499',
    quarterlyTotalDisplay: '₹40,497 / quarter',
    quarterlySavingsDisplay: 'Save ₹4,500',
    keyStats: { value: '20 Posts + 8 Reels + Ads', label: 'High-Volume Customer Growth' },
    deliverables: [
      '20 Premium Creatives + Educational Carousel Decks',
      '8 High-Impact 4K Short-Form Reels / Shorts (Telugu Voiceovers)',
      'End-to-End Meta (FB & Instagram) Paid Ad Campaign Management',
      'Google Search & Maps Click-to-Call Ads Setup & Optimization',
      'Google Maps 3-Pack & Review Acceleration Funnel',
      'Rapid <15-Min Lead Inquiry Handling (9 AM – 8 PM)',
      'WhatsApp Business Automated Catalog & Quick Reply Flows',
      'Bi-Weekly Strategy Sprints & Review Calls with Founder Bhargav',
      '24/7 Live Performance Analytics Dashboard'
    ],
    deliverablesTe: [
      '20 ప్రీమియం క్రియేటివ్స్ + మల్టీ-స్లైడ్ కారూసెల్ పోస్ట్‌లు',
      '8 హై-ఇంపాక్ట్ 4K రీల్స్ / షార్ట్స్ (తెలుగు వాయిస్‌ఓవర్లతో)',
      'మెటా (FB & IG) పెయిడ్ యాడ్స్ సమగ్ర నిర్వహణ',
      'గూగుల్ సెర్చ్ & మ్యాప్స్ క్లిక్-టు-కాల్ యాడ్స్',
      'గూగుల్ మ్యాప్స్ 3-ప్యాక్ ర్యాంకింగ్ & రివ్యూ ఆక్సిలరేషన్',
      '<15 నిమిషాల్లో లీడ్ రెస్పాన్స్ & కస్టమర్ ఎంక్వైరీ హ్యాండ్లింగ్',
      'వాట్సాప్ బిజినెస్ ఆటోమేటెడ్ క్యాటలాగ్ & క్విక్ రిప్లైస్',
      'ఫౌండర్ భార్గవ్‌తో ప్రతి 15 రోజులకు స్ట్రాటజీ రివ్యూ కాల్',
      '24/7 లైవ్ పెర్ఫార్మెన్స్ అనలిటిక్స్ డ్యాష్‌బోర్డ్'
    ],
    platforms: [
      { name: 'Meta Ads', component: MetaLogo },
      { name: 'Google Ads', component: GoogleLogo },
      { name: 'Reels', component: ReelsLogo },
      { name: 'Instagram', component: InstagramLogo },
      { name: 'Google Maps', component: GoogleMapsLogo },
      { name: 'WhatsApp', component: WhatsAppLogo }
    ],
    ctaText: 'Choose Pro Accelerator',
    ctaTextTe: 'ప్రో యాక్సిలరేటర్ ఎంచుకోండి'
  },
  {
    id: 'dominance',
    name: 'Regional Dominance',
    nameTe: 'రీజినల్ డామినెన్స్',
    badge: 'Maximum ROI & Takeover',
    badgeTe: 'సంపూర్ణ మార్కెట్ లీడర్‌షిప్',
    popular: false,
    tagline: '360° omnichannel digital takeover designed for enterprise brands demanding undisputed market leadership across Coastal Andhra.',
    taglineTe: 'కోస్టల్ ఆంధ్రా అంతటా తిరుగులేని మార్కెట్ లీడర్‌షిప్ కోరుకునే వ్యాపారాల కోసం 360° డిజిటల్ టేకోవర్.',
    idealFor: 'Multi-branch showrooms, hospital networks, real estate builders, automobile dealerships & chains',
    idealForTe: 'బహుళ బ్రాంచీల షోరూమ్‌లు, హాస్పిటల్స్, రియల్ ఎస్టేట్ బిల్డర్లు మరియు ఆటోమొబైల్ డీలర్లు',
    monthlyPrice: 24999,
    monthlyPriceDisplay: '₹24,999',
    quarterlyMonthlyRate: 22499,
    quarterlyMonthlyRateDisplay: '₹22,499',
    quarterlyTotalDisplay: '₹67,497 / quarter',
    quarterlySavingsDisplay: 'Save ₹7,500',
    keyStats: { value: '30+ Posts + 16 Reels + Multi-Ads', label: 'Complete Market Leadership' },
    deliverables: [
      '30+ Custom Creatives, Festival Storyboards & Promo Banners',
      '16 Dynamic 4K Short-Form Video Reels, Shorts & Video Ads',
      'Multi-Channel Paid Ads on Meta, Google Search, Maps & YouTube',
      'Complete Omnichannel Takeover across 7 Social & Search Platforms',
      'Dedicated Community Manager for 7-Day DM & Review Response',
      'Google 5-Star Review Acceleration Funnel + Physical QR Desk Stands',
      'Priority 4-Hour Urgent Creative Turnaround SLA',
      'Weekly 1-on-1 Growth Sprints with Bhargav & Direct VIP WhatsApp Line',
      'Real-Time ROAS, Customer Lead Quality & Footfall Attribution Tracking'
    ],
    deliverablesTe: [
      '30+ ప్రత్యేకమైన గ్రాఫిక్స్, పండుగ బ్యానర్లు మరియు స్టోరీలు',
      '16 డైనమిక్ 4K వీడియో రీల్స్, షార్ట్స్ మరియు యాడ్స్',
      'మెటా, గూగుల్ సెర్చ్, మ్యాప్స్ మరియు యూట్యూబ్ మల్టీ-ఛానల్ యాడ్స్',
      '7 ప్లాట్‌ఫారమ్‌లలో పూర్తి బ్రాండ్ కవరేజ్ మరియు మేనేజ్‌మెంట్',
      '7 రోజులూ DM & రివ్యూస్ నిర్వహించడానికి డెడికేటెడ్ మేనేజర్',
      'గూగుల్ 5-స్టార్ రివ్యూ ఫన్నెల్ + ఫిజికల్ టేబుల్‌టాప్ QR కిట్',
      '4 గంటల అర్జెంట్ క్రియేటివ్ టర్న్‌అరౌండ్ SLA',
      'ఫౌండర్ భార్గవ్‌తో ప్రతి వారం స్ట్రాటజీ స్ప్రింట్ & VIP వాట్సాప్ లైన్',
      'రియల్-టైమ్ ROAS మరియు కస్టమర్ ఫుట్‌ఫాల్ ట్రాకింగ్'
    ],
    platforms: [
      { name: 'Meta Ads', component: MetaLogo },
      { name: 'Google Ads', component: GoogleLogo },
      { name: 'YouTube', component: YouTubeLogo },
      { name: 'Reels', component: ReelsLogo },
      { name: 'Google Maps', component: GoogleMapsLogo },
      { name: 'WhatsApp', component: WhatsAppLogo },
      { name: 'Creatives', component: CreativesLogo }
    ],
    ctaText: 'Choose Dominance Plan',
    ctaTextTe: 'డామినెన్స్ ప్లాన్ ఎంచుకోండి'
  }
];

// Recommender selector options
interface RecommenderOption {
  id: string;
  label: string;
  labelTe: string;
  sub: string;
  subTe: string;
  matchedTierId: 'starter' | 'pro' | 'dominance';
  reason: string;
  reasonTe: string;
}

const recommenderOptions: RecommenderOption[] = [
  {
    id: 'budget-8k',
    label: '₹8,000 / mo Budget',
    labelTe: 'నెలకు ₹8,000 బడ్జెట్',
    sub: 'Small shops, clinics & solo outlets',
    subTe: 'చిన్న దుకాణాలు & సింగిల్ క్లినిక్‌లు',
    matchedTierId: 'starter',
    reason: 'Starter Growth gives you the fundamental online presence: 12 bilingual posts, 4 reels, and verified Google Maps visibility without straining cash flow.',
    reasonTe: 'స్టార్టర్ గ్రోత్ మీ వ్యాపారానికి ఖచ్చితమైన ప్రారంభాన్ని ఇస్తుంది: 12 పోస్ట్‌లు, 4 రీల్స్ మరియు గూగుల్ మ్యాప్స్ విజిబిలిటీ.'
  },
  {
    id: 'budget-15k',
    label: '₹15,000 / mo Budget',
    labelTe: 'నెలకు ₹15,000 బడ్జెట్',
    sub: 'Showrooms, doctors & established brands',
    subTe: 'షోరూమ్‌లు, డాక్టర్లు & స్థానిక బ్రాండ్లు',
    matchedTierId: 'pro',
    reason: 'Business Pro Accelerator provides paid ad management on Meta & Google, rapid inquiry replies, and founder review calls for consistent customer acquisition.',
    reasonTe: 'బిజినెస్ ప్రో యాక్సిలరేటర్ ద్వారా మెటా మరియు గూగుల్ యాడ్స్, త్వరిత కస్టమర్ రెస్పాన్స్ మరియు ఫౌండర్ రివ్యూలతో రోజువారీ కస్టమర్లు పెరుగుతారు.'
  },
  {
    id: 'budget-25k',
    label: '₹25,000+ / mo Budget',
    labelTe: 'నెలకు ₹25,000+ బడ్జెట్',
    sub: 'Multi-branch showrooms, builders & hospitals',
    subTe: 'మల్టీ-బ్రాంచ్ నెట్‌వర్క్‌లు & రియల్ ఎస్టేట్',
    matchedTierId: 'dominance',
    reason: 'Regional Dominance provides an omnichannel marketing department with 16 4K reels, full ad funnels, dedicated community management, and weekly founder sprints.',
    reasonTe: 'రీజినల్ డామినెన్స్ ద్వారా 16 4K రీల్స్, పూర్తి యాడ్ ఫన్నెల్స్, డెడికేటెడ్ మేనేజర్ మరియు వీక్లీ స్ట్రాటజీలతో పూర్తి మార్కెట్ లీడర్‌షిప్ లభిస్తుంది.'
  }
];

// Rajahmundry Local Add-Ons
interface AddOnItem {
  id: string;
  title: string;
  titleTe: string;
  price: string;
  pricePeriod: string;
  badge: string;
  description: string;
  descriptionTe: string;
  icon: React.FC<{ className?: string }>;
}

const localAddOns: AddOnItem[] = [
  {
    id: 'video-shoot',
    title: 'On-Location 4K Video Shoot in Rajahmundry',
    titleTe: 'రాజమండ్రిలో ఆన్-లొకేషన్ 4K వీడియో షూట్',
    price: '₹2,999',
    pricePeriod: '/ shoot session',
    badge: 'Physical Production',
    description: 'Professional cinema camera, lighting, and wireless lapel audio setup at your showroom, hospital, or site in Rajahmundry, Kovvur, or Kakinada. Includes Telugu b-roll direction and customer testimonials.',
    descriptionTe: 'మీ షోరూమ్ లేదా క్లినిక్‌కి మా టీమ్ వచ్చి 4K కెమెరా, లైటింగ్ మరియు మైక్‌లతో వీడియో రీల్స్, బ్రాండ్ విజువల్స్ షూట్ చేస్తుంది.',
    icon: Video
  },
  {
    id: 'qr-kit',
    title: 'Google Maps 5-Star Review Automation QR Kit',
    titleTe: 'గూగుల్ మ్యాప్స్ 5-స్టార్ రివ్యూ QR స్టాండ్ కిట్',
    price: '₹1,999',
    pricePeriod: 'one-time',
    badge: 'Local Reputation',
    description: 'Custom-designed heavy-duty acrylic NFC & QR tabletop stands for your billing desk or reception. Automatically directs customers straight to Google Maps 5-star rating submission.',
    descriptionTe: 'మీ కౌంటర్ లేదా బిల్లింగ్ డెస్క్ వద్ద పెట్టే ప్రీమియం యాక్రిలిక్ QR స్టాండ్. కస్టమర్లు స్కాన్ చేయగానే నేరుగా 5-స్టార్ రివ్యూ పేజీ ఓపెన్ అవుతుంది.',
    icon: QrCode
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Business Chatbot & Catalog Setup',
    titleTe: 'వాట్సాప్ బిజినెస్ ఆటోమేషన్ & క్యాటలాగ్ సెటప్',
    price: '₹2,499',
    pricePeriod: 'one-time',
    badge: 'Sales Automation',
    description: 'Transform your WhatsApp number into an automated 24/7 digital storefront. Includes greeting automation, after-hours replies, interactive product/service catalog with prices, and instant lead routing.',
    descriptionTe: 'మీ వాట్సాప్ నెంబర్‌ను 24/7 ఆటోమేటెడ్ స్టోర్‌గా మార్చుకోండి. ఆటో రిప్లైలు, ప్రొడక్ట్ క్యాటలాగ్ మరియు బుకింగ్ ఫ్లోల సెటప్.',
    icon: MessageCircle
  },
  {
    id: 'festive-pack',
    title: 'Festival Creative Burst Pack',
    titleTe: 'పండుగ స్పెషల్ క్రియేటివ్ బర్స్ట్ ప్యాక్',
    price: '₹3,499',
    pricePeriod: '/ festive season',
    badge: 'High Impact Seasonal',
    description: '8 festive promotional creatives + 2 video greeting reels tailored specifically for Sankranti, Dasara, Diwali, Ugadi, or wedding season promotions with authentic Telugu cultural copy.',
    descriptionTe: 'సంక్రాంతి, దసరా, దీపావళి లేదా పెళ్లిళ్ల సీజన్ ఆఫర్ల కోసం ప్రత్యేకమైన 8 క్రియేటివ్స్ మరియు 2 వీడియో రీల్స్.',
    icon: Sparkles
  }
];

// Detailed comparison matrix rows
interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  pro: string | boolean;
  dominance: string | boolean;
}

interface ComparisonCategory {
  categoryName: string;
  rows: ComparisonRow[];
}

const comparisonData: ComparisonCategory[] = [
  {
    categoryName: 'Creative Design & Video Production',
    rows: [
      { feature: 'Monthly Custom Creatives (Telugu + English)', starter: '12 Posts', pro: '20 Posts', dominance: '30+ Posts' },
      { feature: 'Short-Form Video Reels / YouTube Shorts', starter: '4 Reels', pro: '8 Reels', dominance: '16 Reels' },
      { feature: 'Native Telugu Voiceover & Scriptwriting', starter: 'Standard', pro: 'High-Impact', dominance: 'Cinema-Grade' },
      { feature: 'Multi-Slide Product & Educational Carousels', starter: false, pro: true, dominance: true },
      { feature: 'Festival Greeting & Regional Promotion Banners', starter: 'Standard', pro: 'Custom Branded', dominance: 'VIP Personal Pack' },
      { feature: 'Creative Revision SLA & Fast Turnaround', starter: '48 Hours', pro: '24 Hours', dominance: '4 Hours Priority' }
    ]
  },
  {
    categoryName: 'Paid Ads & Lead Generation',
    rows: [
      { feature: 'Meta (Facebook & Instagram) Paid Ad Campaigns', starter: false, pro: true, dominance: true },
      { feature: 'Google Search & Maps Click-to-Call Ads', starter: false, pro: true, dominance: true },
      { feature: 'YouTube Shorts Video Advertising', starter: false, pro: false, dominance: true },
      { feature: 'Continuous A/B Creative Testing & Optimization', starter: false, pro: true, dominance: true },
      { feature: 'Custom Lead Forms & Direct WhatsApp Ad Funnels', starter: false, pro: true, dominance: true },
      { feature: 'Full Funnel Retargeting of Past Website Visitors', starter: false, pro: true, dominance: true }
    ]
  },
  {
    categoryName: 'Search, Maps & Reputation Management',
    rows: [
      { feature: 'Google Business Profile (Maps) Optimization', starter: 'Basic Setup', pro: 'Top 3-Pack Focus', dominance: 'Total Regional Domination' },
      { feature: 'Google 5-Star Review Acceleration Funnel', starter: false, pro: true, dominance: 'Included + QR Stands' },
      { feature: 'Local East Godavari Directory Citations', starter: '5 Citations', pro: '15 Citations', dominance: '30+ Citations' },
      { feature: 'Inquiry Response Time & Community Moderation', starter: 'Next Business Day', pro: '< 15 Mins (9 AM–8 PM)', dominance: 'Dedicated 7-Day Lead' }
    ]
  },
  {
    categoryName: 'Strategy, Founder Access & Transparency',
    rows: [
      { feature: 'Direct Strategy Sprints with Founder Bhargav', starter: 'Monthly Review', pro: 'Bi-Weekly Strategy', dominance: 'Weekly 1-on-1 Sprints' },
      { feature: 'Performance Analytics Dashboard', starter: 'Monthly PDF', pro: '24/7 Live Dashboard', dominance: 'Real-Time ROAS Dashboard' },
      { feature: 'Direct WhatsApp Line to Founder', starter: 'Business Hours', pro: 'Priority Direct Line', dominance: '24/7 VIP Direct Access' },
      { feature: 'Zero Lock-in Contract (Month-to-Month Retainer)', starter: true, pro: true, dominance: true },
      { feature: '100% Client Ownership of All Assets & Accounts', starter: true, pro: true, dominance: true }
    ]
  }
];

// Billing & Contract FAQs
interface FaqItem {
  question: string;
  questionTe: string;
  answer: string;
  answerTe: string;
}

const pricingFaqs: FaqItem[] = [
  {
    question: 'Do you require long-term contracts or lock-in commitments?',
    questionTe: 'మీ ప్లాన్లలో ఏవైనా లాక్-ఇన్ అగ్రిమెంట్లు లేదా దీర్ఘకాలిక కాంట్రాక్టులు ఉంటాయా?',
    answer: 'No long-term lock-ins whatsoever. All BDS regional plans operate on a transparent month-to-month retainer. You can pause, upgrade, or cancel your service at any time with a simple 15-day notice. We believe in retaining clients through measurable business growth, not legal handcuffs.',
    answerTe: 'ఎటువంటి లాక్-ఇన్ ఒప్పందాలు లేవు. మా అన్ని ప్లాన్లు నెలవారీ ప్రాతిపదికన నడుస్తాయి. 15 రోజుల ముందు తెలియజేసి మీరు ఎప్పుడైనా సర్వీస్‌ను పాజ్ చేయవచ్చు లేదా రద్దు చేయవచ్చు.'
  },
  {
    question: 'Is the monthly paid advertising budget included in these package prices?',
    questionTe: 'ఈ ప్యాకేజీ ఫీజుల్లో మెటా/గూగుల్ యాడ్స్ బడ్జెట్ కూడా కలిసి ఉంటుందా?',
    answer: 'No, our package retainers cover 100% of our creative design, copywriting, video editing, ad setup, continuous optimization, and reporting services. Your advertising budget is paid directly to Meta or Google using your own business credit/debit card. This ensures complete transparency with zero hidden agency markups on your ad spend.',
    answerTe: 'లేదు. ప్యాకేజీ రుసుము మా స్ట్రాటజీ, క్రియేటివ్ డిజైన్, వీడియో ఎడిటింగ్ మరియు నిర్వహణకు సంబంధించినది. మీ యాడ్ బడ్జెట్ నేరుగా మీ స్వంత కార్డ్ ద్వారా మెటా/గూగుల్‌కు చెల్లిస్తారు.'
  },
  {
    question: 'How does Quarterly Billing work and how do I receive the 10% discount?',
    questionTe: 'త్రైమాసిక (Quarterly) బిల్లింగ్ ఎలా పనిచేస్తుంది మరియు 10% తగ్గింపు ఎలా లభిస్తుంది?',
    answer: 'When you choose quarterly billing, you pay upfront for 3 months and receive an instant 10% discount on your total retainer (saving up to ₹7,500 every quarter). In addition, quarterly clients receive locked-in video shoot calendar dates and priority turnaround on all urgent campaign requests.',
    answerTe: '3 నెలల బిల్లింగ్ ఒకేసారి చెల్లించినప్పుడు మొత్తం రుసుముపై వెంటనే 10% తగ్గింపు లభిస్తుంది (త్రైమాసికానికి ₹7,500 వరకు ఆదా). అలాగే షూట్ షెడ్యూల్స్ మరియు ప్రాధాన్యతా సేవలు లభిస్తాయి.'
  },
  {
    question: 'Who owns the ad accounts, creatives, and video footage produced?',
    questionTe: 'మా బిజినెస్ కోసం రూపొందించిన వీడియోలు, గ్రాఫిక్స్ మరియు యాడ్ అకౌంట్లు ఎవరికి చెందుతాయి?',
    answer: 'You own 100% of everything. All Meta and Google Ad accounts are created under your business credentials with your billing details. All raw video footage, graphic project files, customer lead databases, and social media handles remain your exclusive property forever.',
    answerTe: 'మీ బిజినెస్ డేటా, వీడియోలు, గ్రాఫిక్స్ మరియు యాడ్ అకౌంట్లపై 100% యాజమాన్య హక్కులు మీకే ఉంటాయి. భవిష్యత్తులో కూడా మీ డేటా అంతా మీ సొంతమే.'
  },
  {
    question: 'Can Bhargav’s team shoot videos directly at our showroom or clinic in Rajahmundry?',
    questionTe: 'రాజమండ్రిలోని మా షోరూమ్ లేదా క్లినిక్‌కి వచ్చి వీడియోలు షూట్ చేస్తారా?',
    answer: 'Yes! We are physically based in Danavaipeta, Rajahmundry. Our team regularly visits client showrooms, clinics, and project sites across Rajahmundry, Kovvur, Dowleswaram, and Kakinada with our 4K video, gimbal, and studio lighting equipment for on-site reels and client testimonials.',
    answerTe: 'తప్పకుండా! మేము రాజమండ్రి దానవాయిపేటలోనే ఉంటాము. మా టీమ్ మీ షోరూమ్ లేదా క్లినిక్‌కి వచ్చి 4K కెమెరాలు, లైటింగ్‌తో వీడియోలు షూట్ చేస్తుంది.'
  },
  {
    question: 'How quickly can we start once we choose a plan?',
    questionTe: 'మేము ప్లాన్ ఎంచుకున్న తర్వాత పనులు ఎంత త్వరగా ప్రారంభమవుతాయి?',
    answer: 'We onboard your business in just 48 hours. Day 1: Asset onboarding, brand audit, and competitor analysis. Day 2: WhatsApp strategy call with founder Bhargav to finalize month 1 campaign angles. Day 3: First batch of social creatives delivered for your approval and publishing begins.',
    answerTe: '48 గంటల్లోనే పని ప్రారంభిస్తాము. మొదటి రోజు ఆడిట్, రెండో రోజు భార్గవ్‌తో స్ట్రాటజీ కాల్, మూడో రోజు మొదటి బ్యాచ్ క్రియేటివ్స్ మీ అనుమతి కోసం అందుతాయి.'
  }
];

export const PricingPage: React.FC<PricingPageProps> = ({
  language = 'en',
  onNavigate,
  onOpenQuoteModal
}) => {
  const isTe = language === 'te';

  // Interactive billing toggle: monthly vs quarterly (10% discount)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  // Interactive Recommender Matcher
  const [selectedMatcher, setSelectedMatcher] = useState<string>('budget-15k');

  // Comparison matrix expand/collapse state
  const [showComparison, setShowComparison] = useState<boolean>(true);

  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active recommender details
  const activeMatcher = recommenderOptions.find((opt) => opt.id === selectedMatcher) || recommenderOptions[1];
  const recommendedTier = pricingTiers.find((t) => t.id === activeMatcher.matchedTierId) || pricingTiers[1];

  return (
    <div id="bds-pricing-page" className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* =========================================================================
          SECTION 01: HERO SECTION (Warm Stone Editorial, Regional Reassurance)
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-stone-200/80 bg-gradient-to-b from-[#fbf9f4] via-[#fafaf9] to-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-gradient-to-r from-blue-100/40 via-cyan-100/30 to-blue-200/40 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          {/* Primary Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-[1.14] max-w-4xl mx-auto">
            {isTe ? (
              <>
                రాజమండ్రి & తూర్పు గోదావరి వ్యాపారాల కోసం <br className="hidden sm:inline" />
                <span className="text-blue-600">అందుబాటు ధరల్లో అత్యుత్తమ</span> డిజిటల్ మార్కెటింగ్.
              </>
            ) : (
              <>
                High-Impact Digital Growth at <br className="hidden sm:inline" />
                <span className="text-blue-600">Prices Local Businesses</span> Can Comfortably Afford.
              </>
            )}
          </h1>

          {/* Subheadline with Regional Reassurance */}
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto font-normal">
            {isTe ? (
              'హైదరాబాద్ ఏజెన్సీల భారీ ఛార్జీలు లేవు, లాక్-ఇన్ అగ్రిమెంట్లు లేవు. మీ వ్యాపార స్థాయికి తగిన పారదర్శక ప్యాకేజీలు, నేరుగా వ్యవస్థాపకుడు భార్గవ్ వ్యక్తిగత పర్యవేక్షణ.'
            ) : (
              'Zero bloated metro agency retainers. Zero lock-in contracts. Just predictable, high-converting monthly retainers engineered for retail showrooms, clinics, builders, and service outlets across Rajahmundry, Kakinada, and East Godavari.'
            )}
          </p>

          {/* Value Badges Row */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-semibold text-stone-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{isTe ? '100% లాక్-ఇన్ ఫ్రీ' : 'Zero Lock-in Contracts'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs">
              <Star className="w-4 h-4 text-amber-500 shrink-0 fill-amber-400" />
              <span>{isTe ? 'డైరెక్ట్ భార్గవ్ ఫౌండర్ కేర్' : 'Direct Founder Attention'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs">
              <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isTe ? 'ప్రతి నెలా స్థిరమైన ఫలితాలు' : 'Packages from ₹7,999/mo'}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{isTe ? 'తెలుగు & ఇంగ్లీష్ కంటెంట్' : 'Telugu + English Fluency'}</span>
            </span>
          </div>

          {/* =========================================================================
              BILLING SWITCH: Interactive Monthly vs Quarterly (Save 10%)
              ========================================================================= */}
          <div className="pt-6 sm:pt-8 flex flex-col items-center justify-center gap-3">
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-stone-200/80 border border-stone-300/80 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-stone-950 shadow-sm'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {isTe ? 'నెలవారీ బిల్లింగ్' : 'Monthly Retainer'}
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('quarterly')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  billingCycle === 'quarterly'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <span>{isTe ? 'సీజనల్ / త్రైమాసిక' : 'Quarterly / Seasonal'}</span>
                <span
                  className={`text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full transition-colors ${
                    billingCycle === 'quarterly'
                      ? 'bg-emerald-400 text-stone-950'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}
                >
                  {isTe ? '10% ఆదా' : 'Save 10%'}
                </span>
              </button>
            </div>

            <p className="text-xs text-stone-600 font-medium">
              {billingCycle === 'quarterly' ? (
                <span className="text-emerald-700 font-semibold inline-flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  {isTe
                    ? 'త్రైమాసిక ప్లాన్లపై ₹7,500 వరకు ఆదా మరియు ప్రయారిటీ వీడియో షూట్ షెడ్యూల్స్ వర్తిస్తాయి'
                    : 'Quarterly billing locks in your shoot dates and saves up to ₹7,500 every 3 months.'}
                </span>
              ) : (
                <span>
                  {isTe
                    ? 'పూర్తిగా నెలవారీ ప్రాతిపదికన నడుస్తుంది — ఎటువంటి ముందస్తు లాక్-ఇన్ ఉండదు'
                    : 'Simple month-to-month billing with zero long-term commitment. Cancel anytime.'}
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: 3 REGIONAL PACKAGES (STARTER, PRO ACCELERATOR, DOMINANCE)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((plan) => {
            const isPro = plan.popular;
            const currentPrice =
              billingCycle === 'quarterly'
                ? plan.quarterlyMonthlyRateDisplay
                : plan.monthlyPriceDisplay;

            return (
              <div
                key={plan.id}
                id={`tier-card-${plan.id}`}
                className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro
                    ? 'bg-stone-950 text-white shadow-2xl scale-[1.02] lg:scale-[1.03] border-2 border-blue-500/70 ring-4 ring-blue-500/10'
                    : 'bg-white border border-stone-200 text-stone-900 shadow-sm hover:shadow-xl hover:border-stone-300'
                }`}
              >
                {/* Most Popular Badge on Business Pro Accelerator */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-stone-950 font-black text-[11px] sm:text-xs px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 tracking-wider uppercase">
                    <Star className="w-3.5 h-3.5 fill-stone-950" />
                    <span>{isTe ? plan.badgeTe : plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                        {isTe ? plan.nameTe : plan.name}
                      </h3>
                      {!isPro && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                          {isTe ? plan.badgeTe : plan.badge}
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                        isPro ? 'text-stone-300' : 'text-stone-600'
                      }`}
                    >
                      {isTe ? plan.taglineTe : plan.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className={`pt-4 border-t ${isPro ? 'border-stone-800' : 'border-stone-100'} space-y-1.5`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight">
                        {currentPrice}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-semibold ${
                          isPro ? 'text-stone-400' : 'text-stone-500'
                        }`}
                      >
                        / month
                      </span>
                    </div>

                    {/* Quarterly Billing Breakdown */}
                    {billingCycle === 'quarterly' ? (
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className="text-emerald-400 font-bold">
                          {plan.quarterlySavingsDisplay}
                        </span>
                        <span className={isPro ? 'text-stone-400' : 'text-stone-500'}>
                          ({plan.quarterlyTotalDisplay})
                        </span>
                      </div>
                    ) : (
                      <p className={`text-xs ${isPro ? 'text-stone-400' : 'text-stone-500'}`}>
                        {isTe ? 'నెలవారీ రద్దు చేసుకునే సౌలభ్యం' : 'Billed monthly • Cancel anytime'}
                      </p>
                    )}
                  </div>

                  {/* Ideal For Box */}
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-snug ${
                      isPro
                        ? 'bg-stone-900/90 text-cyan-200 border border-stone-800'
                        : 'bg-stone-50 text-stone-700 border border-stone-200/80'
                    }`}
                  >
                    <strong className="font-bold text-stone-900 block mb-0.5" style={{ color: isPro ? '#67e8f9' : undefined }}>
                      {isTe ? 'ఎవరికి అనుకూలం:' : 'Ideal for:'}
                    </strong>{' '}
                    {isTe ? plan.idealForTe : plan.idealFor}
                  </div>

                  {/* Platforms Covered Grid */}
                  <div className="space-y-2.5">
                    <p
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isPro ? 'text-cyan-400' : 'text-stone-500'
                      }`}
                    >
                      {isTe ? 'కవరేజ్ ప్లాట్‌ఫారమ్‌లు:' : 'Platforms & Channels Covered:'}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {plan.platforms.map((plat, pIdx) => {
                        const IconComponent = plat.component;
                        return (
                          <div
                            key={pIdx}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-medium ${
                              isPro
                                ? 'bg-stone-900 border border-stone-800 text-stone-200'
                                : 'bg-stone-100/90 border border-stone-200 text-stone-700'
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                            <span>{plat.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-2">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isPro ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {isTe ? 'ప్యాకేజీలో లభించే సేవలు:' : 'Deliverables & Capabilities:'}
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {(isTe ? plan.deliverablesTe : plan.deliverables).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPro ? 'text-cyan-400' : 'text-blue-600'
                            }`}
                          />
                          <span className={isPro ? 'text-stone-200' : 'text-stone-700'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className={`mt-8 pt-5 border-t ${isPro ? 'border-stone-800' : 'border-stone-100'}`}>
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(plan.name)}
                    className={`w-full py-4 rounded-2xl font-extrabold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      isPro
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 hover:shadow-xl'
                        : 'bg-stone-900 hover:bg-blue-600 text-white hover:shadow-lg'
                    }`}
                  >
                    <span>{isTe ? plan.ctaTextTe : plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p
                    className={`text-[11px] text-center mt-2 font-medium ${
                      isPro ? 'text-stone-400' : 'text-stone-500'
                    }`}
                  >
                    {isTe ? 'ఎటువంటి దాపరికం లేని ఫీజులు • 48 గంటల్లో ప్రారంభం' : 'No setup fees • Onboards in 48 hours'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: INTERACTIVE PLAN RECOMMENDER / BUDGET MATCHER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              <span>{isTe ? 'ప్లాన్ మ్యాచ్ టూల్' : 'Interactive Plan Matcher'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              {isTe
                ? 'మీ వ్యాపార బడ్జెట్‌కి ఏ ప్యాకేజీ సరిపోతుందో తనిఖీ చేయండి'
                : 'Not Sure Which Plan Fits Your Business Best?'}
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              {isTe
                ? 'మీ నెలవారీ మార్కెటింగ్ బడ్జెట్‌ను ఎంచుకోండి, మీ లక్ష్యానికి సరిగ్గా సరిపోయే ప్లాన్‌ను చూడండి.'
                : 'Select your monthly marketing budget or scale below to see which package delivers the maximum regional return.'}
            </p>
          </div>

          {/* Selector 3-Button Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
            {recommenderOptions.map((opt) => {
              const isSelected = selectedMatcher === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedMatcher(opt.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-600 text-blue-950 ring-2 ring-blue-600/20 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200 text-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-black text-stone-950">
                      {isTe ? opt.labelTe : opt.label}
                    </span>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    {isTe ? opt.subTe : opt.sub}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Dynamic Recommender Result Display */}
          <div className="rounded-2xl bg-gradient-to-r from-stone-900 via-stone-950 to-blue-950 text-white p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isTe ? 'సిఫార్సు చేయబడిన ప్లాన్:' : 'Recommended Tier:'}{' '}
                  <strong>{isTe ? recommendedTier.nameTe : recommendedTier.name}</strong>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {isTe ? recommendedTier.nameTe : recommendedTier.name} —{' '}
                <span className="text-cyan-300 font-extrabold">{recommendedTier.monthlyPriceDisplay}/mo</span>
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {isTe ? activeMatcher.reasonTe : activeMatcher.reason}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-stone-300 font-medium">
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-cyan-200">
                  {recommendedTier.keyStats.value}
                </span>
                <span>•</span>
                <span>{recommendedTier.keyStats.label}</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => onOpenQuoteModal(recommendedTier.name)}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isTe ? 'ఈ ప్లాన్‌తో ప్రారంభించండి' : `Get Started with ${recommendedTier.name}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById(`tier-card-${recommendedTier.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 font-bold text-sm transition-all text-center cursor-pointer"
              >
                {isTe ? 'పూర్తి వివరాలు చూడండి' : 'Inspect Tier Details'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: DETAILED COMPARISON TABLE (Side-by-Side Matrix)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>{isTe ? 'సమగ్ర పోలిక పట్టిక' : 'Detailed Comparison Matrix'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              {isTe ? 'అన్ని ఫీచర్లు & డెలివరబుల్స్ పోల్చి చూడండి' : 'Compare All Deliverables Side-by-Side'}
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              {isTe
                ? 'ప్రతి ప్యాకేజీలో ఏమేమి ఉంటాయో స్పష్టంగా తెలుసుకోండి. ఎలాంటి దాపరికం లేని పూర్తి వివరాలు.'
                : 'Every creative, ad management channel, SLA, and founder touchpoint explicitly itemized.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-800 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>{showComparison ? (isTe ? 'పట్టిక దాచండి' : 'Hide Table') : (isTe ? 'పట్టిక చూపించండి' : 'Show Table')}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                showComparison ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {showComparison && (
          <div className="rounded-3xl bg-white border border-stone-200 shadow-sm overflow-hidden animate-in fade-in duration-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                {/* Table Header */}
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-900">
                    <th className="py-5 px-6 font-bold text-sm w-2/5">
                      {isTe ? 'ఫీచర్ / డెలివరబుల్' : 'Deliverable & Capabilities'}
                    </th>
                    <th className="py-5 px-4 font-extrabold text-sm w-1/5 text-center">
                      <div>Starter Growth</div>
                      <div className="text-xs font-semibold text-stone-500">₹7,999/mo</div>
                    </th>
                    <th className="py-5 px-4 font-extrabold text-sm w-1/5 text-center bg-blue-50/80 text-blue-950 border-x border-blue-200">
                      <div className="inline-flex items-center gap-1">
                        <span>Pro Accelerator</span>
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      </div>
                      <div className="text-xs font-bold text-blue-700">₹14,999/mo</div>
                    </th>
                    <th className="py-5 px-4 font-extrabold text-sm w-1/5 text-center">
                      <div>Regional Dominance</div>
                      <div className="text-xs font-semibold text-stone-500">₹24,999/mo</div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body Grouped by Category */}
                <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                  {comparisonData.map((category, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <tr className="bg-stone-100/70">
                        <td
                          colSpan={4}
                          className="py-3 px-6 font-bold text-xs uppercase tracking-wider text-stone-700"
                        >
                          {category.categoryName}
                        </td>
                      </tr>
                      {category.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="hover:bg-stone-50/80 transition-colors"
                        >
                          <td className="py-3.5 px-6 font-medium text-stone-900">
                            {row.feature}
                          </td>

                          {/* Starter Value */}
                          <td className="py-3.5 px-4 text-center text-stone-700">
                            {typeof row.starter === 'boolean' ? (
                              row.starter ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                              ) : (
                                <Minus className="w-4 h-4 text-stone-300 mx-auto" />
                              )
                            ) : (
                              <span>{row.starter}</span>
                            )}
                          </td>

                          {/* Pro Value (Highlighted Column) */}
                          <td className="py-3.5 px-4 text-center font-semibold bg-blue-50/40 text-blue-950 border-x border-blue-100">
                            {typeof row.pro === 'boolean' ? (
                              row.pro ? (
                                <Check className="w-4 h-4 text-blue-600 font-bold mx-auto" />
                              ) : (
                                <Minus className="w-4 h-4 text-stone-300 mx-auto" />
                              )
                            ) : (
                              <span>{row.pro}</span>
                            )}
                          </td>

                          {/* Dominance Value */}
                          <td className="py-3.5 px-4 text-center text-stone-700 font-semibold">
                            {typeof row.dominance === 'boolean' ? (
                              row.dominance ? (
                                <Check className="w-4 h-4 text-emerald-600 font-bold mx-auto" />
                              ) : (
                                <Minus className="w-4 h-4 text-stone-300 mx-auto" />
                              )
                            ) : (
                              <span>{row.dominance}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>

                {/* Table Footer with CTAs */}
                <tfoot>
                  <tr className="bg-stone-50 border-t border-stone-200">
                    <td className="py-5 px-6 font-bold text-xs text-stone-500 uppercase">
                      {isTe ? 'ప్యాకేజీ ఎంచుకోండి:' : 'Select Your Tier:'}
                    </td>
                    <td className="py-5 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => onOpenQuoteModal('Starter Growth')}
                        className="w-full py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        {isTe ? 'స్టార్టర్' : 'Get Starter'}
                      </button>
                    </td>
                    <td className="py-5 px-4 text-center bg-blue-50/80 border-x border-blue-200">
                      <button
                        type="button"
                        onClick={() => onOpenQuoteModal('Business Pro Accelerator')}
                        className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
                      >
                        {isTe ? 'ప్రో ఎంచుకోండి' : 'Get Pro Plan'}
                      </button>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => onOpenQuoteModal('Regional Dominance')}
                        className="w-full py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        {isTe ? 'డామినెన్స్' : 'Get Dominance'}
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 05: RAJAHMUNDRY LOCAL ADD-ONS MENU
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{isTe ? 'రాజమండ్రి లోకల్ యాడ్-ఆన్స్' : 'Rajahmundry Local Add-Ons Menu'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
            {isTe
              ? 'మీ ప్యాకేజీకి అదనపు సేవలను జోడించుకోండి'
              : 'Flexible Local Add-Ons for Extra Firepower'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-3xl">
            {isTe
              ? 'షూట్ సెషన్లు, గూగుల్ రివ్యూ స్టాండ్లు, వాట్సాప్ క్యాటలాగ్‌లు లేదా పండుగ క్యాంపెయిన్లను ఏ ప్లాన్‌తోనైనా కలిపి తీసుకోవచ్చు.'
              : 'Need an in-person 4K shoot in Rajahmundry, a physical Google Maps review stand, or a festive creative burst? Add them seamlessly to any plan.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localAddOns.map((addon) => {
            const AddonIcon = addon.icon;
            return (
              <div
                key={addon.id}
                className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <AddonIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                      {addon.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-stone-950 leading-snug">
                      {isTe ? addon.titleTe : addon.title}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-2xl font-black text-blue-600">
                        {addon.price}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        {addon.pricePeriod}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {isTe ? addon.descriptionTe : addon.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(`Add-on: ${addon.title}`)}
                    className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-blue-600 hover:text-white text-stone-800 font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isTe ? 'ఈ సేవను జోడించండి' : 'Add to Package'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: ENTERPRISE & MULTI-LOCATION CUSTOM SCOPE CARD
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-blue-950 text-white p-8 sm:p-12 shadow-xl border border-stone-800 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-blue-400/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>
                  {isTe
                    ? 'ఎంటర్‌ప్రైజ్ & మల్టీ-లొకేషన్ వ్యాపారాలకు'
                    : 'Enterprise & Multi-Location Solutions'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {isTe
                  ? 'హాస్పిటల్ నెట్‌వర్క్‌లు, జ్యువెలరీ చైన్లు & బిల్డర్ల కోసం ప్రత్యేక ఒప్పందాలు'
                  : 'Custom Enterprise Scopes for Multi-Branch Chains & Large Enterprises'}
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                {isTe
                  ? 'రాజమండ్రి, కాకినాడ మరియు పరిసర జిల్లాల్లో బహుళ బ్రాంచీలు ఉన్న హాస్పిటల్స్, ఆటోమొబైల్ షోరూమ్‌లు, రియల్ ఎస్టేట్ ప్రాజెక్ట్‌లకు అనుగుణంగా ప్రత్యేకమైన ప్యాకేజీలు మరియు ఆన్-సైట్ షూట్ బృందాలు.'
                  : 'Operating multiple retail outlets across East & West Godavari? Running high-volume ad spends (₹1 Lakh+/month)? We architect unified multi-branch campaigns with dedicated on-site video crews and custom SLAs.'}
              </p>

              {/* Enterprise Feature Pills */}
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs text-stone-300 font-semibold">
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Unified Multi-Outlet Dashboard</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dedicated On-Site 4K Crew</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Custom Lead CRM Integrations</span>
                </span>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:flex-row lg:flex-col shrink-0">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Custom Enterprise Scope')}
                className="w-full px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isTe ? 'కస్టమ్ కొటేషన్ కోరండి' : 'Request Enterprise Scope'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-stone-100 font-bold text-sm sm:text-base border border-white/15 transition-all flex items-center justify-center gap-2.5 text-center"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>{isTe ? 'ఫౌండర్ భార్గవ్‌కి కాల్ చేయండి' : `Call Bhargav directly`}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: BILLING & CONTRACT FAQS (ACCORDION)
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{isTe ? 'ధరలు & కాంట్రాక్ట్ ప్రశ్నలు' : 'Pricing & Billing FAQs'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
            {isTe
              ? 'తరచుగా అడిగే బిల్లింగ్ & కాంట్రాక్ట్ సందేహాలు'
              : 'Frequently Asked Billing & Contract Questions'}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            {isTe
              ? 'మా ధరల విధానం, ప్రకటనల ఖర్చు మరియు సేవల గురించి పూర్తి వివరణలు.'
              : 'Complete clarity on contracts, ad budgets, video shoot visits, and asset ownership.'}
          </p>
        </div>

        <div className="space-y-3.5">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-stone-900 font-bold text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">
                    {isTe ? faq.questionTe : faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-stone-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-150">
                    {isTe ? faq.answerTe : faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: BOTTOM REUSABLE CTA SECTION
          ========================================================================= */}
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal('Pricing Page')} />
    </div>
  );
};
