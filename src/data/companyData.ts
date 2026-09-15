import { CaseStudy, PricingPlan, Testimonial } from '../types';

export const companyInfo = {
  name: 'Bhargav Digital Solutions',
  shortName: 'BDS',
  tagline: 'Digital Today, Grow Tomorrow',
  positioning: 'Full-service digital marketing solutions provider, affordably priced for clients across Rajahmundry, East Godavari, and Andhra Pradesh.',
  phone: '9704380535',
  phoneDisplay: '+91 97043 80535',
  email: 'bhargavdigitalsolutions@gmail.com',
  address: 'Main Road, Danavaipeta, Rajahmundry, East Godavari District, Andhra Pradesh - 533103',
  googleMapsQuery: 'Rajahmundry, East Godavari, Andhra Pradesh',
  whatsappNumber: '919704380535',
  whatsappMessage: 'Hello Bhargav Digital Solutions! I would like to inquire about digital marketing services for my business in Rajahmundry.',
  socialLinks: {
    instagram: 'https://www.instagram.com/bhargavdigitalsolutions/',
    facebook: 'https://www.facebook.com/bhargavdigitalsolutions/',
    youtube: 'https://www.youtube.com/@bhargavdigitalsolutions',
    linkedin: 'https://www.linkedin.com/company/bhargavdigitalsolutions/'
  },
  web3FormsAccessKey: (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY || '13ba520c-0e06-4d8d-a819-5a8f69a57821',
  workingHours: 'Mon – Sat: 9:00 AM – 7:30 PM (Sunday by Appointment)',
  stats: [
    { value: '🎯', label: 'Hands-On Local Focus', subtext: 'Rajahmundry & East Godavari' },
    { value: '📊', label: 'Accountable Ad Spend', subtext: 'Weekly Reports With Screenshots' },
    { value: '🤝', label: 'Zero Lock-In Contracts', subtext: 'Month-to-Month Flexibility' },
    { value: '👤', label: 'Direct Founder Oversight', subtext: 'Bhargav on Every Account' }
  ],
  founder: {
    name: 'Bhargav',
    fullName: 'Bhargav (Founder & Digital Growth Strategist)',
    role: 'Founder & Lead Growth Strategist',
    bio: 'Bhargav is a passionate digital marketing strategist and entrepreneur dedicated to transforming local and regional businesses in Rajahmundry, Kakinada, and the wider East Godavari region. With deep expertise across paid ad architectures, viral short-form video production, and conversion rate optimization, Bhargav founded Bhargav Digital Solutions (BDS) to bridge the gap between high-ticket agency pricing and the genuine marketing needs of local enterprises. His hands-on, ROI-first philosophy ensures that every marketing rupee invested produces measurable phone calls, walk-ins, and sustained business growth.',
    quote: 'Our mission is simple: provide world-class digital marketing strategies at prices that local businesses can comfortably afford, delivering real customers, not vanity metrics.',
    skills: ['Performance Marketing', 'Short-Form Video Scripting', 'Local SEO & Maps Dominance', 'Omnichannel Strategy', 'Conversion Optimization'],
    experience: '8+ Years Driving Digital Growth'
  }
};

export const testimonialsList: Testimonial[] = [];

export const caseStudiesList: CaseStudy[] = [
  {
    id: 'retail-silks',
    title: 'Campaign Concept: High-Impact Video Reels for Festive Footfalls',
    client: 'Bridal Pattu & Textile Showroom',
    industry: 'Fashion & Retail',
    location: 'Rajahmundry, AP',
    neighborhood: 'Main Road & Kotipalli Corridor',
    bilingualTag: 'పట్టు చీరల ప్రమోషన్ & తెలుగు రీల్స్',
    serviceCategory: 'Short-Form Video & Meta Ads',
    summary: 'A sample creative direction demonstrating how localized Telugu voiceover reels and radius-targeted Instagram Ads drive festival foot traffic for regional apparel showrooms.',
    challenge: 'High competition from regional retail chains and heavy dependence on expensive print flyers with declining response rates.',
    solution: 'Produced high-energy reels showcasing bridal silk drape details, paired with a limited-time festive offer delivered via WhatsApp automated chat.',
    results: [
      { metric: 'Footfall Lift', label: 'Showroom Traffic' },
      { metric: 'Low CPL', label: 'Cost Per Message Lead' },
      { metric: 'High ROAS', label: 'Return on Ad Spend' }
    ],
    tags: ['Reels Production', 'Meta Lead Ads', 'WhatsApp Automation'],
    isConcept: true,
    conceptNote: 'Sample creative direction & execution model'
  },
  {
    id: 'dental-clinic',
    title: 'Campaign Concept: Local Maps Dominance & Patient Acquisition',
    client: 'Specialty Dental & Implant Center',
    industry: 'Healthcare & Clinics',
    location: 'Danavaipeta, Rajahmundry',
    neighborhood: 'Danavaipeta Medical District',
    bilingualTag: 'డెంటల్ ఇంప్లాంట్స్ & డాక్టర్ బ్రాండింగ్',
    serviceCategory: 'Platform Coverage & Community Mgmt',
    summary: 'A structured blueprint showcasing how local SEO, Google Business 3-Pack optimization, and emergency WhatsApp booking funnels can attract consistent patient consultations.',
    challenge: 'The clinic had minimal Google Maps reviews and suffered from sluggish inquiry replies, causing patients to book elsewhere.',
    solution: 'Optimized local search citations, implemented automated review request QR stands at the clinic desk, and managed 7-day DM responses.',
    results: [
      { metric: 'Reputation', label: 'Patient Trust & Reviews' },
      { metric: 'Inquiry Flow', label: 'Monthly Inquiries' },
      { metric: 'Prompt', label: 'Inquiry Response Triage' }
    ],
    tags: ['Google Maps SEO', 'Reputation Management', 'Lead Qualification'],
    isConcept: true,
    conceptNote: 'Sample creative direction & execution model'
  },
  {
    id: 'real-estate-villas',
    title: 'Campaign Concept: High-Intent Lead Acquisition & Drone Walkthroughs',
    client: 'Gated Villa & Residential Community',
    industry: 'Real Estate & Construction',
    location: 'Diwancheruvu, Rajahmundry',
    neighborhood: 'NH16 & Diwancheruvu Corridor',
    bilingualTag: 'ప్రీమియం విల్లాస్ లీడ్ జనరేషన్',
    serviceCategory: 'Paid Ad Campaigns & Content Ops',
    summary: 'A sample performance marketing framework illustrating how 4K video walkthroughs and multi-step budget qualification forms filter serious home buyers and NRI investors.',
    challenge: 'Premium residential villas required serious, pre-qualified buyers rather than casual window shoppers.',
    solution: 'Deployed multi-step qualifying lead forms filtering by budget and purchase timeline, with instant WhatsApp notifications to the sales team.',
    results: [
      { metric: 'Buyer Leads', label: 'Verified Buyer Inquiries' },
      { metric: 'Low CPA', label: 'Average Cost Per Lead' },
      { metric: 'Units Closed', label: 'Conversions' }
    ],
    tags: ['Google Ads', 'Meta Performance Ads', 'Content Operations'],
    isConcept: true,
    conceptNote: 'Sample creative direction & execution model'
  },
  {
    id: 'interiors-decors',
    title: 'Campaign Concept: 3D Project Showcases & High-Intent Search',
    client: 'Modular Kitchen & Interior Architecture Studio',
    industry: 'Interior Design & Architecture',
    location: 'Morampudi Junction, Rajahmundry',
    neighborhood: 'Morampudi Commercial Hub',
    bilingualTag: 'మోడ్యులర్ కిచెన్ & ఇంటీరియర్ ఆర్డర్లు',
    serviceCategory: 'Content Creation & Google Search Ads',
    summary: 'A sample digital playbook illustrating how project showcase carousels and localized Google Search campaigns capture new apartment owners looking for interior contracting.',
    challenge: 'High cost per acquisition from traditional hoardings with zero lead attribution.',
    solution: 'Built dedicated 3D project showcase carousels and localized Google Search campaign targeting new apartment owners.',
    results: [
      { metric: 'Strong ROAS', label: 'Verified Return on Spend' },
      { metric: 'Consultations', label: 'Full Home Consultations' },
      { metric: 'Revenue', label: 'Contract Revenue' }
    ],
    tags: ['Google Search Ads', 'Project Carousels', 'Local Search Dominance'],
    isConcept: true,
    conceptNote: 'Sample creative direction & execution model'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Growth',
    tagline: 'Ideal for local retail shops, clinics, and new businesses starting digital marketing.',
    price: '₹7,999',
    period: '/month',
    badge: 'Affordable Entry',
    idealFor: 'Small local businesses & startups in East Godavari',
    features: [
      '12 Custom High-Resolution Creatives (Bilingual Telugu/English)',
      '4 Engaging Instagram Reels / Shorts (Scripted & Edited)',
      'Google Business Profile (Maps) Optimization',
      'Meta (Facebook & Instagram) Page Setup & Management',
      'Basic Local Hashtag & Keyword Strategy',
      'Monthly Performance Summary PDF Report',
      'WhatsApp Support during business hours'
    ],
    servicesIncluded: ['Content Creation', 'Social Media Management', 'Platform Coverage'],
    ctaText: 'Choose Starter Plan'
  },
  {
    id: 'pro',
    name: 'Business Pro Accelerator',
    tagline: 'Our most popular comprehensive package designed for maximum local market traction and customer inquiries.',
    price: '₹14,999',
    period: '/month',
    badge: 'Most Popular',
    popular: true,
    idealFor: 'Established shops, hospitals, institutes & growing brands',
    features: [
      '20 Premium Creatives + Carousel Educational Posts',
      '8 High-Impact Short-Form Video Reels / Shorts',
      'End-to-End Meta (FB & Instagram) Paid Ad Campaign Management',
      'Google Search & Maps Click-to-Call Ads Setup',
      'Daily Stories & Follower Interaction',
      'WhatsApp Business Automated Catalog & Quick Replies',
      'Community DM & Comment Moderation (9 AM – 8 PM)',
      '24/7 Live Performance Dashboard & Bi-Weekly Review Calls',
      'Direct WhatsApp access to Founder Bhargav'
    ],
    servicesIncluded: [
      'Content Creation',
      'Short-Form Video & Ad Campaigns',
      'Social Media Management',
      'Platform Coverage',
      'Community Management',
      'Reporting & Insights'
    ],
    ctaText: 'Choose Pro Accelerator'
  },
  {
    id: 'dominance',
    name: 'Regional Dominance',
    tagline: 'Complete 360-degree digital takeover for businesses seeking undisputed market leadership in Coastal AP.',
    price: '₹24,999',
    period: '/month',
    badge: 'Maximum ROI',
    idealFor: 'Multi-branch showrooms, hospitals, builders & enterprises',
    features: [
      '30+ Custom Creatives & Multi-Slide Carousel Storyboards',
      '16 Dynamic Short-Form Video Reels / Shorts & Ads',
      'Multi-Channel Paid Ads on Meta, Google Search, Maps & YouTube',
      'Omnichannel Platform Coverage (Meta, Google, YouTube, LinkedIn, Justdial)',
      'Content Operations & Dedicated Asset Hub with 4-Hour Turnaround',
      'Dedicated Community Manager for 7-Day DM & Review Management',
      'Google 5-Star Review Acceleration Funnel Setup',
      'Advanced Conversion Tracking & Real-Time ROI Analytics',
      'Weekly Strategy Sprints with Bhargav & Priority Support'
    ],
    servicesIncluded: [
      'Content Creation',
      'Short-Form Video & Ad Campaigns',
      'Social Media Management',
      'Platform Coverage',
      'Content Operations',
      'Community Management',
      'Reporting & Insights'
    ],
    ctaText: 'Choose Dominance Plan'
  }
];

export const generalFaqs = [
  {
    question: 'Why choose Bhargav Digital Solutions over big Hyderabad or Bangalore agencies?',
    answer: 'Big metro agencies charge exorbitant retainers (₹50,000+) without understanding the regional dynamics of Rajahmundry and East Godavari. BDS offers localized cultural fluency (Telugu + English), hands-on founder attention from Bhargav, fast response times, and transparent pricing designed specifically for regional business budgets.'
  },
  {
    question: 'How does your affordable pricing model work?',
    answer: 'We maintain a lean, agile creative team in Rajahmundry with zero bloated agency overheads. We provide transparent, value-driven retainers customized to your exact marketing requirements without high-ticket metro agency markups.'
  },
  {
    question: 'How quickly will we see results from our marketing campaigns?',
    answer: 'Paid ad campaigns on Meta and Google typically start producing phone calls and lead inquiries within 48 to 72 hours. Organic social media follower growth and Google Maps SEO rankings compound steadily over 30 to 90 days.'
  },
  {
    question: 'Do you require long-term lock-in contracts?',
    answer: 'No! We believe in earning your trust month after month. We work on flexible monthly agreements with no forced annual lock-ins. You stay with us because you see positive ROI.'
  },
  {
    question: 'How do we get started with Bhargav Digital Solutions?',
    answer: 'Simply click "Get a Free Quote" or call/WhatsApp us directly at 9704380535. We will schedule a 20-minute consultation with Bhargav, review your current online presence, and recommend the best custom strategy.'
  }
];

export interface RegionalArea {
  name: string;
  type: 'Rajahmundry Core' | 'East Godavari Hub' | 'Godavari Delta';
  description: string;
  popularServices: string[];
}

export const regionalCoverageAreas: RegionalArea[] = [
  {
    name: 'Danavaipeta, Rajahmundry',
    type: 'Rajahmundry Core',
    description: 'Medical clinics, diagnostic labs, premium retail boutiques, and corporate offices.',
    popularServices: ['Google Maps SEO', 'Instagram Reels Ads']
  },
  {
    name: 'Main Road & Kotipalli, Rajahmundry',
    type: 'Rajahmundry Core',
    description: 'Pattu saree showrooms, bridal jewelry, handlooms, and wholesale retail trade.',
    popularServices: ['Reels Video Shooting', 'Festival Promo Creatives']
  },
  {
    name: 'Morampudi Junction & NH16 Corridor',
    type: 'Rajahmundry Core',
    description: 'Automobile showrooms, interior designers, modular kitchens, and banquet halls.',
    popularServices: ['Google Search Ads', 'Meta Lead Generation']
  },
  {
    name: 'Kambala Tank & Innespeta',
    type: 'Rajahmundry Core',
    description: 'Specialty clinics, coaching academies, restaurants, and electronics retail.',
    popularServices: ['Local SEO 3-Pack', 'Community DM Management']
  },
  {
    name: 'Lalacheruvu & Diwancheruvu Hub',
    type: 'Rajahmundry Core',
    description: 'Educational institutes, engineering colleges, builders, and real estate layouts.',
    popularServices: ['High-Ticket Lead Ads', 'Omnichannel Coverage']
  },
  {
    name: 'Kakinada Smart City & Port Region',
    type: 'East Godavari Hub',
    description: 'Commercial establishments, logistics, multi-specialty healthcare, and dining.',
    popularServices: ['Performance Marketing', 'Full 360° Retainer']
  },
  {
    name: 'Amalapuram & Konaseema Region',
    type: 'Godavari Delta',
    description: 'Agri-businesses, resorts, jewelry stores, and educational academies.',
    popularServices: ['Social Media Management', 'WhatsApp Catalogues']
  },
  {
    name: 'Mandapeta, Ravulapalem & Samalkota',
    type: 'East Godavari Hub',
    description: 'Rice mills, wholesale merchants, apparel showrooms, and wedding venues.',
    popularServices: ['Google Maps Ranking', 'Local Video Promotions']
  }
];

