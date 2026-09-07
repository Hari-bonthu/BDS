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
  workingHours: 'Mon – Sat: 9:00 AM – 7:30 PM (Sunday by Appointment)',
  stats: [
    { value: '120+', label: 'Local Campaigns Run', subtext: 'Across East Godavari' },
    { value: '10x', label: 'Average Client ROAS', subtext: 'On Paid Advertising' },
    { value: '98%', label: 'Client Retention Rate', subtext: 'Long-term Partnerships' },
    { value: '₹15L+', label: 'Revenue Generated', subtext: 'For Regional Businesses' }
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

export const testimonialsList: Testimonial[] = [
  {
    id: '1',
    name: 'M. Venkata Rao',
    role: 'Managing Director',
    company: 'Sri Srinivasa Silks & Sarees',
    location: 'Main Road, Rajahmundry',
    content: 'Bhargav Digital Solutions completely transformed our festive sales. Their Telugu Reels and Facebook ads brought hundreds of customers from across Rajahmundry, Kovvur, and Mandapeta directly into our showroom. The pricing is unbelievably fair for the quality of work they provide!',
    rating: 5,
    results: '+180% Footfall during Wedding Season',
    avatarBg: 'from-blue-600 to-indigo-700'
  },
  {
    id: '2',
    name: 'Dr. K. Sravani, BDS, MDS',
    role: 'Chief Dental Surgeon',
    company: 'Smile Craft Dental Clinic',
    location: 'Danavaipeta, Rajahmundry',
    content: 'Before BDS, our Google Maps presence was practically invisible. Bhargav and his team optimized our Google Business profile, ran patient awareness video ads, and set up rapid WhatsApp appointment booking. We now receive 4-5 patient inquiries every single day!',
    rating: 5,
    results: 'Ranked #1 on Google Maps in Rajahmundry',
    avatarBg: 'from-emerald-600 to-teal-700'
  },
  {
    id: '3',
    name: 'R. Kalyan Varma',
    role: 'Real Estate Developer',
    company: 'Godavari Meadows Properties',
    location: 'Kakinada Road, Rajahmundry',
    content: 'Finding serious plot and villa buyers in East Godavari was becoming expensive through newspapers. BDS set up targeted Meta lead generation ads that delivered verified buyer leads at just ₹38 per lead. 7 high-value plots were booked in 45 days.',
    rating: 5,
    results: '7 Plots Sold in 45 Days (14x ROAS)',
    avatarBg: 'from-amber-600 to-orange-700'
  },
  {
    id: '4',
    name: 'S. Nageswara Rao',
    role: 'Principal & Director',
    company: 'Vignana Bharathi Junior College',
    location: 'T Nagar, Rajahmundry',
    content: 'The admission campaign created by Bhargav Digital Solutions was exceptional. Their bilingual posters, student testimonial reels, and targeted ads gave us our highest enrollment in the last 5 years with zero last-minute panic.',
    rating: 5,
    results: '+42% Student Enrollments',
    avatarBg: 'from-purple-600 to-violet-700'
  }
];

export const caseStudiesList: CaseStudy[] = [
  {
    id: 'retail-silks',
    title: 'How a Rajahmundry Textile Showroom Generated 180+ Walk-ins in 14 Days',
    client: 'Sri Srinivasa Silks & Handlooms',
    industry: 'Fashion & Retail',
    location: 'Rajahmundry, AP',
    neighborhood: 'Main Road & Kotipalli Corridor',
    bilingualTag: 'పట్టు చీరల ప్రమోషన్ & తెలుగు రీల్స్',
    serviceCategory: 'Short-Form Video & Meta Ads',
    summary: 'A localized video campaign featuring bridal pattu sarees with Telugu voiceovers and radius-targeted Instagram Ads across East Godavari.',
    challenge: 'High competition from regional retail chains and heavy dependence on expensive print flyers with declining response rates.',
    solution: 'Produced 6 high-energy reels showcasing bridal silk drape details, paired with a limited-time festive discount code delivered via WhatsApp automated chat.',
    results: [
      { metric: '180+', label: 'Showroom Footfalls' },
      { metric: '₹34', label: 'Cost Per Message Lead' },
      { metric: '12.8x', label: 'Return on Ad Spend' }
    ],
    tags: ['Reels Production', 'Meta Lead Ads', 'WhatsApp Automation']
  },
  {
    id: 'dental-clinic',
    title: 'From 12 to 110+ Monthly Appointments for a Dental & Implant Center',
    client: 'Smile Craft Dental & Implants',
    industry: 'Healthcare & Clinics',
    location: 'Danavaipeta, Rajahmundry',
    neighborhood: 'Danavaipeta Medical District',
    bilingualTag: 'డెంటల్ ఇంప్లాంట్స్ & డాక్టర్ బ్రాండింగ్',
    serviceCategory: 'Platform Coverage & Community Mgmt',
    summary: 'Complete Google Business Profile takeover, patient review acceleration system, and 15-minute response handling for emergency dental inquiries.',
    challenge: 'The clinic had only 14 reviews on Google Maps and suffered from sluggish inquiry replies, causing patients to book elsewhere.',
    solution: 'Optimized local search citations, implemented automated review request QR stands at the clinic desk, and managed 7-day DM responses.',
    results: [
      { metric: '380+', label: 'Google 5-Star Reviews' },
      { metric: '110+', label: 'Monthly Appointments' },
      { metric: '<10 min', label: 'Average Response Time' }
    ],
    tags: ['Google Maps SEO', 'Reputation Management', 'Lead Qualification']
  },
  {
    id: 'real-estate-villas',
    title: 'Generating 240+ High-Net-Worth Buyer Leads for Godavari Meadows',
    client: 'Godavari Meadows Gated Community',
    industry: 'Real Estate & Construction',
    location: 'Diwancheruvu, Rajahmundry',
    neighborhood: 'NH16 & Diwancheruvu Corridor',
    bilingualTag: 'ప్రీమియం విల్లాస్ లీడ్ జనరేషన్',
    serviceCategory: 'Paid Ad Campaigns & Content Ops',
    summary: 'Drone video walkthrough ads and precise demographic targeting targeting NRI families and businessmen across Godavari districts.',
    challenge: 'Premium residential villas priced at ₹85L+ required serious, pre-qualified buyers rather than casual window shoppers.',
    solution: 'Deployed multi-step qualifying lead forms filtering by budget and purchase timeline, with instant WhatsApp notifications to the sales team.',
    results: [
      { metric: '240+', label: 'Verified Buyer Leads' },
      { metric: '₹42', label: 'Average Cost Per Lead' },
      { metric: '9 Units', label: 'Villas Closed' }
    ],
    tags: ['Google Ads', 'Meta Performance Ads', 'Content Operations']
  },
  {
    id: 'interiors-decors',
    title: '8.4x Verified ROAS for Morampudi Interior Design & Modular Kitchen Studio',
    client: 'Godavari Living Interiors & Decors',
    industry: 'Interior Design & Architecture',
    location: 'Morampudi Junction, Rajahmundry',
    neighborhood: 'Morampudi Commercial Hub',
    bilingualTag: 'మోడ్యులర్ కిచెన్ & ఇంటీరియర్ ఆర్డర్లు',
    serviceCategory: 'Content Creation & Google Search Ads',
    summary: 'High-intent search keyword bidding combined with carousel showcase ads of completed luxury apartment projects in Rajahmundry and Kakinada.',
    challenge: 'High cost per acquisition from traditional hoardings with zero lead attribution.',
    solution: 'Built dedicated 3D project showcase carousels and localized Google Search campaign targeting new apartment owners.',
    results: [
      { metric: '8.4x', label: 'Verified ROAS' },
      { metric: '42', label: 'Full Home Consultations' },
      { metric: '₹18L+', label: 'Contract Revenue' }
    ],
    tags: ['Google Search Ads', 'Project Carousels', 'Local Search Dominance']
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
    answer: 'We maintain a lean, agile creative team in Rajahmundry with zero bloated agency overheads. We pass those direct cost savings to you, offering high-standard creative design, video editing, and performance ad management starting at just ₹7,999/month.'
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

