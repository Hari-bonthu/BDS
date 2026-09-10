import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';
import { PageId, Language } from '../types';
import { asset } from '../utils/asset';
import {
  GoogleLogo,
  GoogleMapsLogo,
  InstagramLogo,
  ReelsLogo,
  MetaLogo,
  WhatsAppLogo,
  YouTubeLogo,
  CreativesLogo,
  LeadGenLogo,
  InquiriesLogo
} from '../components/common/PlatformLogos';

interface ServicesPageProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

// Master data mapping for the 7 Services with official platform logos and local relevance
const servicesCatalog = [
  {
    id: 'content-creation',
    num: '01',
    category: 'Creative & Regional Storytelling',
    categoryTe: 'క్రియేటివ్ & రీజినల్ స్టోరీటెల్లింగ్',
    title: 'Content Creation',
    titleTe: 'కంటెంట్ క్రియేషన్',
    outcome: 'High-Impact Social Visuals, Regional Telugu Storytelling & High-Converting Copy',
    outcomeTe: 'ఆకట్టుకునే సోషల్ మీడియా గ్రాఫిక్స్, పండుగ పోస్టర్లు మరియు స్థానిక తెలుగు కాపీరైటింగ్',
    description:
      'We design captivating brand graphics, bilingual Telugu & English ad copy, carousel storyboards, and promotional banners crafted specifically to resonate with customers across Rajahmundry, Kakinada, and East Godavari.',
    descriptionTe:
      'రాజమండ్రి మరియు గోదావరి జిల్లాల కస్టమర్లను ఆకట్టుకునేలా ప్రత్యేకమైన గ్రాఫిక్స్, తెలుగు/ఇంగ్లీష్ కాపీరైటింగ్ మరియు పండుగ ఆఫర్ల పోస్టర్ల రూపకల్పన.',
    metric: '4.8× Higher Engagement',
    metricTe: '4.8× అధిక ఎంగేజ్‌మెంట్',
    metricSub: 'vs generic stock templates',
    metricSubTe: 'సాధారణ స్టాక్ గ్రాఫిక్స్‌తో పోలిస్తే',
    deliverables: [
      '15–30 High-Resolution Social Media Creatives & Stories / month',
      'Multi-Slide Educational & Product Carousel Storyboards',
      'Telugu + English Captions, Hashtags & WhatsApp Promotional Flyers',
      'Festival & Regional Cultural Greeting Banners (Sankranti, Dasara, etc.)'
    ],
    deliverablesTe: [
      'నెలకు 15–30 హై-రెసల్యూషన్ సోషల్ మీడియా పోస్ట్‌లు & స్టోరీలు',
      'కస్టమర్లను ఆకర్షించే మల్టీ-స్లైడ్ ప్రొడక్ట్ కారూసెల్స్',
      'తెలుగు + ఇంగ్లీష్ క్యాప్షన్లు మరియు వాట్సాప్ ప్రమోషన్ బ్యానర్లు',
      'పండుగలు మరియు ప్రత్యేక ఆఫర్ల కోసం కల్చరల్ డిజైన్లు'
    ],
    logos: [
      { component: CreativesLogo, label: 'Custom Creatives' },
      { component: InstagramLogo, label: 'Instagram Feed' },
      { component: WhatsAppLogo, label: 'WhatsApp Flyers' }
    ],
    bestFor: 'Retail Showrooms (Silks, Jewelry), Clinics & Regional Brands',
    bestForTe: 'బట్టల షోరూమ్‌లు, జ్యువెలరీ, క్లినిక్‌లు మరియు స్థానిక బ్రాండ్లు'
  },
  {
    id: 'short-form-video-ads',
    num: '02',
    category: 'Performance & Paid Ads',
    categoryTe: 'పెర్ఫార్మెన్స్ & పెయిడ్ యాడ్స్',
    title: 'Short-Form Video & Ad Campaigns',
    titleTe: 'వీడియో రీల్స్ & యాడ్ క్యాంపెయిన్స్',
    outcome: 'Viral Instagram Reels, YouTube Shorts & High-ROAS Meta/Google Paid Ads',
    outcomeTe: 'వైరల్ ఇన్‌స్టాగ్రామ్ రీల్స్, యూట్యూబ్ షార్ట్స్ మరియు అధిక రిటర్న్ ఇచ్చే పెయిడ్ యాడ్స్',
    description:
      'Short-form vertical video is the fastest way to get noticed in Coastal Andhra. We script, edit, and run targeted video ad campaigns that stop users mid-scroll and convert viewers into showroom footfalls and qualified inquiries.',
    descriptionTe:
      'వైరల్ తెలుగు రీల్స్, షార్ట్స్ మరియు టార్గెటెడ్ మెటా/గూగుల్ యాడ్స్ ద్వారా షోరూమ్‌కి కస్టమర్ల రాకను మరియు బిజినెస్ ఎంక్వైరీలను పెంచుతాము.',
    metric: '6.4× Average ROAS',
    metricTe: '6.4× సగటు రిటర్న్ (ROAS)',
    metricSub: 'tracked return on advertising spend',
    metricSubTe: 'యాడ్ ఖర్చుపై సాధించిన వ్యాపార రాబడి',
    deliverables: [
      'Full Scripting, Concept Hooks & Native Telugu Voiceover Editing',
      'Hyper-Targeted Location & Demographic Ads in East Godavari',
      'High-Intent Lead Forms & Direct WhatsApp Click-to-Chat Campaigns',
      'Continuous A/B Creative Testing & Ad Budget Optimization'
    ],
    deliverablesTe: [
      'ఆకర్షణీయమైన స్క్రిప్ట్, కాన్సెప్ట్ హుక్స్ మరియు తెలుగు వాయిస్‌ఓవర్ ఎడిటింగ్',
      'రాజమండ్రి మరియు సమీప ప్రాంతాల్లో హైపర్-టార్గెటెడ్ యాడ్స్',
      'డైరెక్ట్ వాట్సాప్ చాట్ & లీడ్ జనరేషన్ క్యాంపెయిన్స్',
      'నిరంతర A/B టెస్టింగ్ మరియు యాడ్ బడ్జెట్ ఆప్టిమైజేషన్'
    ],
    logos: [
      { component: ReelsLogo, label: 'Instagram Reels' },
      { component: YouTubeLogo, label: 'YouTube Shorts' },
      { component: MetaLogo, label: 'Meta Ads' },
      { component: GoogleLogo, label: 'Google Ads' }
    ],
    bestFor: 'Gated Communities, Fashion Stores, Doctors & High-Ticket Retail',
    bestForTe: 'రియల్ ఎస్టేట్, ఫ్యాషన్ షోరూమ్‌లు, హాస్పిటల్స్ & లగ్జరీ రిటైల్'
  },
  {
    id: 'social-media-management',
    num: '03',
    category: 'Organic Growth & Authority',
    categoryTe: 'ఆర్గానిక్ గ్రోత్ & బ్రాండ్ అథారిటీ',
    title: 'Social Media Management',
    titleTe: 'సోషల్ మీడియా మేనేజ్‌మెంట్',
    outcome: '100% Hands-Off Daily Posting, Profile Optimization & Regional Follower Growth',
    outcomeTe: 'నిరంతర పోస్టింగ్‌లు, బ్రాండ్ గ్రోత్, బయో ఆప్టిమైజేషన్ మరియు ఆర్గానిక్ ఫాలోవర్లు',
    description:
      'We run your social media completely so you can focus on running your business. From profile makeovers and hashtag research to daily scheduled publishing, your brand stays consistently active and authoritative.',
    descriptionTe:
      'మీ సోషల్ మీడియా హ్యాండిల్స్‌ని మేము పూర్తిగా నిర్వహిస్తాము. రోజువారీ పోస్టింగ్‌లు, బయో ఆప్టిమైజేషన్ మరియు స్థానిక ఫాలోవర్ల పెరుగుదలతో మీ బ్రాండ్ ప్రతిష్ట పెరుగుతుంది.',
    metric: '+320% Organic Reach',
    metricTe: '+320% ఆర్గానిక్ రీచ్',
    metricSub: 'in the first 90 days of consistent publishing',
    metricSubTe: 'మొదటి 90 రోజుల్లో పెరిగిన రీచ్',
    deliverables: [
      'Full Monthly Content Scheduling & Consistent Daily Publishing',
      'Profile Bio Optimization, Highlight Covers & Brand Grid Aesthetic',
      'Active Regional Hashtag Strategy & Follower Engagement Tactics',
      'Monthly Audience Demographic & Growth Analysis Reports'
    ],
    deliverablesTe: [
      'నెలవారీ కంటెంట్ షెడ్యూలింగ్ మరియు క్రమం తప్పని పోస్టింగ్‌లు',
      'ప్రొఫైల్ బయో, హైలైట్ కవర్స్ మరియు బ్రాండ్ ప్రొఫెషనల్ లుక్',
      'స్థానిక హ్యాష్‌ట్యాగ్ స్ట్రాటజీ మరియు ఫాలోవర్స్ ఎంగేజ్‌మెంట్',
      'ప్రతినెలా ఆడియన్స్ గ్రోత్ మరియు పెర్ఫార్మెన్స్ రిపోర్ట్స్'
    ],
    logos: [
      { component: InstagramLogo, label: 'Instagram' },
      { component: MetaLogo, label: 'Facebook' },
      { component: YouTubeLogo, label: 'YouTube' }
    ],
    bestFor: 'Hospitals, Interior Designers, Boutique Hotels & Entrepreneurs',
    bestForTe: 'హాస్పిటల్స్, ఇంటీరియర్ డిజైనర్లు, హోటల్స్ మరియు వ్యాపారవేత్తలు'
  },
  {
    id: 'platform-coverage',
    num: '04',
    category: 'Local Search & Presence',
    categoryTe: 'లోకల్ సెర్చ్ & డిజిటల్ ప్రెజెన్స్',
    title: 'Platform Coverage & Local SEO',
    titleTe: 'ప్లాట్‌ఫాం కవరేజ్ & లోకల్ SEO',
    outcome: 'Top 3 Google Maps Ranking, Google Search Dominance & 24/7 WhatsApp Setup',
    outcomeTe: 'గూగుల్ మ్యాప్స్ టాప్ 3 ర్యాంకింగ్, లోకల్ సెర్చ్ మరియు వాట్సాప్ బిజినెస్ ఆటోమేషన్',
    description:
      'When customers in Rajahmundry search for your category on Google or Google Maps, your business must appear at the top. We optimize your local profiles and integrate WhatsApp for instant customer discovery.',
    descriptionTe:
      'రాజమండ్రిలో కస్టమర్లు గూగుల్‌లో వెతికినప్పుడు మీ వ్యాపారమే టాప్‌లో కనిపించేలా గూగుల్ మ్యాప్స్ ఆప్టిమైజేషన్ మరియు వాట్సాప్ బిజినెస్ క్యాటలాగ్ సెటప్ చేస్తాము.',
    metric: '#1 Top 3 Rank',
    metricTe: '#1 టాప్ 3 ర్యాంకింగ్',
    metricSub: 'on Google Maps Local 3-Pack',
    metricSubTe: 'గూగుల్ మ్యాప్స్ లోకల్ ప్యాక్‌లో',
    deliverables: [
      'Complete Google Business Profile (GBP) Audit, Verification & Optimization',
      'Geotagged Photo Uploads, Category Tuning & Weekly Profile Updates',
      'WhatsApp Business Automated Greeting, Away Messages & Product Catalogue',
      'Omnichannel Consistency Across Google, Meta, and Local Directories'
    ],
    deliverablesTe: [
      'గూగుల్ బిజినెస్ ప్రొఫైల్ పూర్తి ఆడిట్, వెరిఫికేషన్ మరియు ఆప్టిమైజేషన్',
      'జియోట్యాగ్ ఫోటోలు మరియు వారపు అప్‌డేట్స్ పబ్లిషింగ్',
      'వాట్సాప్ బిజినెస్ క్యాటలాగ్ మరియు ఆటోమేటెడ్ మెసేజ్ సెటప్',
      'గూగుల్, మెటా మరియు లోకల్ డైరెక్టరీల్లో సమానమైన బ్రాండ్ వివరాలు'
    ],
    logos: [
      { component: GoogleMapsLogo, label: 'Google Maps' },
      { component: GoogleLogo, label: 'Google Search' },
      { component: WhatsAppLogo, label: 'WhatsApp Catalog' }
    ],
    bestFor: 'Dental Clinics, Diagnostic Centers, Restaurants & Service Centers',
    bestForTe: 'డెంటల్ క్లినిక్‌లు, డయాగ్నోస్టిక్ సెంటర్లు, రెస్టారెంట్లు & సర్వీస్ సెంటర్లు'
  },
  {
    id: 'content-operations',
    num: '05',
    category: 'Operations & Workflow',
    categoryTe: 'ఆపరేషన్స్ & వర్క్‌ఫ్లో',
    title: 'Content Operations',
    titleTe: 'కంటెంట్ ఆపరేషన్స్',
    outcome: 'Structured 30-Day Editorial Pipelines, Centralized Asset Hub & Rapid Turnaround',
    outcomeTe: 'క్రమబద్ధమైన ఎడిటోరియల్ వర్క్‌ఫ్లో, డిజిటల్ అసెట్స్ మరియు వేగవంతమైన డెలివరీ',
    description:
      'Never worry about what to post tomorrow. We build an organized 30-day editorial pipeline, centralize all brand assets in a private cloud hub, and guarantee fast turnaround for flash sales and festive announcements.',
    descriptionTe:
      'రేపు ఏం పోస్ట్ చేయాలనే టెన్షన్ లేకుండా 30 రోజుల ముందస్తు ప్లానింగ్, ప్రైవేట్ క్లౌడ్ అసెట్ హబ్ మరియు అత్యవసర ఆఫర్ల కోసం వేగవంతమైన డెలివరీ.',
    metric: '<4 Hours',
    metricTe: '<4 గంటల్లోపు',
    metricSub: 'turnaround on urgent festival/offer creatives',
    metricSubTe: 'అత్యవసర ఆఫర్ బ్యానర్ల డెలివరీ సమయం',
    deliverables: [
      'Centralized Cloud Asset Hub for All Approved Designs, Videos & Raw Files',
      '30-Day Rolling Editorial Calendar with Zero Last-Minute Rushes',
      'Multi-Stage Design Quality Control & Brand Consistency Verification',
      'Guaranteed Fast Turnaround for Breaking Offers and Flash Announcements'
    ],
    deliverablesTe: [
      'అన్ని బ్రాండ్ డిజైన్లు మరియు వీడియోల కోసం క్లౌడ్ అసెట్ హబ్',
      '30 రోజుల ముందస్తు ఎడిటోరియల్ క్యాలెండర్',
      'మల్టీ-స్టేజ్ క్వాలిటీ చెకింగ్ మరియు బ్రాండ్ క్వాలిటీ కంట్రోల్',
      'అత్యవసర ఆఫర్లకు గ్యారెంటీడ్ ఫాస్ట్ టర్న్‌అరౌండ్'
    ],
    logos: [
      { component: CreativesLogo, label: 'Asset Cloud' },
      { component: LeadGenLogo, label: 'Workflow' },
      { component: GoogleLogo, label: 'Cloud Drive' }
    ],
    bestFor: 'Multi-Branch Businesses, Growing Retailers & Fast-Paced Brands',
    bestForTe: 'మల్టీ-బ్రాంచ్ బిజినెస్‌లు మరియు వేగంగా అభివృద్ధి చెందుతున్న బ్రాండ్లు'
  },
  {
    id: 'community-management',
    num: '06',
    category: 'Reputation & Conversions',
    categoryTe: 'రెప్యుటేషన్ & కన్వర్షన్స్',
    title: 'Community Management',
    titleTe: 'కమ్యూనిటీ మేనేజ్‌మెంట్',
    outcome: 'Sub-15 Minute DM Lead Capture, Comment Moderation & 5-Star Review Growth',
    outcomeTe: '15 నిమిషాల్లోపు డిఎమ్ రెస్పాన్స్, కామెంట్ మోడరేషన్ మరియు 5-స్టార్ రివ్యూల పెంపు',
    description:
      'Social media attention without fast response leads to lost sales. We monitor incoming DMs and comments 7 days a week, qualify customer inquiries, and accelerate 5-star Google reviews to build unshakeable local trust.',
    descriptionTe:
      'సోషల్ మీడియాలో వచ్చే ఎంక్వైరీలకు వేగంగా సమాధానం ఇవ్వకపోతే కస్టమర్లను కోల్పోతాము. మేము మీ డిఎమ్స్, కామెంట్స్ మరియు గూగుల్ రివ్యూలను నిరంతరం పర్యవేక్షిస్తాము.',
    metric: '<15 Min',
    metricTe: '<15 నిమిషాలు',
    metricSub: 'average inquiry response time across platforms',
    metricSubTe: 'డిఎమ్ ఎంక్వైరీలకు సగటు రెస్పాన్స్ సమయం',
    deliverables: [
      'Sub-15 Min Inquiry Qualification & Instant Phone/WhatsApp Sales Routing',
      '7-Day/Week Comment Moderation & Spam / Competitor Filtering',
      'Proactive 5-Star Google Maps Customer Review Acceleration Framework',
      'Crisis Prevention & Fast Resolution for Sensitive Customer Feedback'
    ],
    deliverablesTe: [
      '15 నిమిషాల్లోపు ఎంక్వైరీ వెరిఫికేషన్ మరియు మీ సేల్స్ టీమ్‌కి ఫార్వర్డింగ్',
      'వారంలో 7 రోజులు కామెంట్ మోడరేషన్ మరియు స్పామ్ ఫిల్టరింగ్',
      'జెన్యూన్ 5-స్టార్ గూగుల్ మ్యాప్స్ రివ్యూల యాక్సిలరేషన్ సిస్టమ్',
      'కస్టమర్ల సమస్యలకు తక్షణ రెస్పాన్స్ మరియు బ్రాండ్ రక్షణ'
    ],
    logos: [
      { component: InquiriesLogo, label: 'DM Capture' },
      { component: WhatsAppLogo, label: 'WhatsApp Routing' },
      { component: GoogleMapsLogo, label: '5★ Reviews' }
    ],
    bestFor: 'Clinics, Hospitality, Real Estate Developers & Premium Retail',
    bestForTe: 'క్లినిక్‌లు, హోటళ్లు, రియల్ ఎస్టేట్ మరియు లగ్జరీ షోరూమ్‌లు'
  },
  {
    id: 'reporting-insights',
    num: '07',
    category: 'Analytics & ROI',
    categoryTe: 'అనలిటిక్స్ & స్పష్టమైన ROI',
    title: 'Reporting & Insights',
    titleTe: 'రిపోర్టింగ్ & ఇన్సైట్స్',
    outcome: 'Crystal-Clear ROI Dashboards, Zero Marketing Jargon & Actionable Metrics',
    outcomeTe: 'పారదర్శకమైన ROI డాష్‌బోర్డ్స్, స్పష్టమైన గణాంకాలు మరియు వ్యాపార వృద్ధి సలహాలు',
    description:
      'You will never have to wonder where your marketing budget went. We provide transparent bi-weekly reports showing exact spend, footfall indicators, message leads, cost per inquiry, and strategic recommendations.',
    descriptionTe:
      'మీరు ఖర్చు పెట్టిన ప్రతి రూపాయికి లెక్క ఉంటుంది. అయోమయ పదాలు లేకుండా స్పష్టమైన ఎంక్వైరీలు, లీడ్ ఖర్చు మరియు బిజినెస్ గ్రోత్ సూచనలతో కూడిన రిపోర్టింగ్.',
    metric: '100% Transparent',
    metricTe: '100% పారదర్శకత',
    metricSub: 'rupee-for-rupee tracking of ad spend to revenue',
    metricSubTe: 'ఖర్చు పెట్టిన ప్రతి రూపాయికి పూర్తి లెక్క',
    deliverables: [
      'Plain-English Bi-Weekly Performance Summaries (No Confusing Tech Jargon)',
      'Exact Breakdown: Rupee Ad Spend, Inquiries Generated & Cost Per Lead',
      'Footfall & Phone Inquiry Attribution Tracking for Physical Outlets',
      'Actionable Monthly Growth Roadmap & Strategic Campaign Scaling Advice'
    ],
    deliverablesTe: [
      'సులభంగా అర్థమయ్యే ద్వైవారిక పెర్ఫార్మెన్స్ సమ్మరీ రిపోర్ట్',
      'ఖర్చు, వచ్చిన ఎంక్వైరీలు మరియు ఒక్కో లీడ్ ఖర్చు పూర్తి వివరాలు',
      'షోరూమ్ ఫుట్‌ఫాల్స్ మరియు ఫోన్ కాల్స్ ట్రాకింగ్ గణాంకాలు',
      'వచ్చే నెల కోసం స్పష్టమైన గ్రోత్ రోడ్‌మ్యాప్ మరియు సూచనలు'
    ],
    logos: [
      { component: LeadGenLogo, label: 'ROI Tracking' },
      { component: GoogleLogo, label: 'Analytics' },
      { component: InquiriesLogo, label: 'Revenue Proof' }
    ],
    bestFor: 'Every Business Owner who demands complete financial accountability',
    bestForTe: 'ఖర్చు పెట్టిన ప్రతి రూపాయికి పూర్తి ఫలితాన్ని ఆశించే ప్రతి వ్యాపారవేత్త'
  }
];

// Authentic frequently asked questions for local businesses
const serviceFaqs = [
  {
    q: 'Do you create content and voiceovers in Telugu as well as English?',
    qTe: 'మీరు కంటెంట్ మరియు వాయిస్‌ఓవర్లు తెలుగులో కూడా చేస్తారా?',
    a: 'Yes! In Rajahmundry and East Godavari, regional connection is everything. We write natural, culturally authentic Telugu copy and produce native Telugu voiceover Reels that speak directly to local shoppers, while maintaining clean English for brand authority.',
    aTe: 'తప్పకుండా! రాజమండ్రి మరియు గోదావరి జిల్లాల్లో స్థానిక భాష చాలా ముఖ్యం. మేము సహజమైన తెలుగు కాపీరైటింగ్ మరియు స్థానిక యాసతో కూడిన వాయిస్‌ఓవర్ రీల్స్ తయారుచేస్తాము, అలాగే బ్రాండ్ ప్రతిష్ట కోసం ఇంగ్లీష్‌ను కూడా సమతుల్యంగా ఉపయోగిస్తాము.'
  },
  {
    q: 'How quickly will we start seeing inquiries or showroom footfalls?',
    qTe: 'మాకు ఎంక్వైరీలు లేదా షోరూమ్‌కి కస్టమర్ల రాక ఎంత సమయంలో ప్రారంభమవుతుంది?',
    a: 'For targeted Meta Video Ads and Google Maps optimization, customer calls and direct message inquiries typically start within the first 7 to 14 days of campaign launch. For organic social media authority, steady compounding occurs over 60 to 90 days.',
    aTe: 'టార్గెటెడ్ మెటా వీడియో యాడ్స్ మరియు గూగుల్ మ్యాప్స్ ద్వారా మొదటి 7 నుండి 14 రోజుల్లోనే కాల్స్ మరియు వాట్సాప్ మెసేజ్‌లు ప్రారంభమవుతాయి. ఆర్గానిక్ సోషల్ మీడియా బ్రాండ్ గ్రోత్ 60 నుండి 90 రోజుల్లో నిలకడగా పెరుగుతుంది.'
  },
  {
    q: 'Do we need to shoot our own photos and videos, or does BDS handle it?',
    qTe: 'ఫోటోలు మరియు వీడియోలు మేమే తీసుకోవాలా లేదా మీరే షూట్ చేస్తారా?',
    a: 'We provide end-to-end guidance. For clients located in and around Rajahmundry, we organize planned on-site shoot visits to capture product collections, clinic tours, food specials, or real estate walkthroughs, and our in-house post-production team edits everything.',
    aTe: 'రాజమండ్రి మరియు సమీప ప్రాంతాల్లో ఉన్న క్లయింట్ల కోసం మేమే నేరుగా వచ్చి ప్రొడక్ట్స్, క్లినిక్ లేదా ప్రాజెక్ట్ షూట్ చేస్తాము. మా ఎడిటింగ్ టీమ్ వాటన్నింటినీ ఆకర్షణీయమైన రీల్స్ మరియు పోస్టర్లుగా మారుస్తుంది.'
  },
  {
    q: 'Can we customize our package or bundle multiple services together?',
    qTe: 'మాకు అవసరమైన సర్వీసులను కలిపి కస్టమ్ ప్యాకేజీగా తీసుకోవచ్చా?',
    a: 'Absolutely. Most of our clients prefer an all-in-one monthly growth package (combining Reels, Meta Ads, Google Maps SEO, and Community Management). Bundling provides a unified strategy, single-point accountability, and cost savings of up to 35%.',
    aTe: 'ఖచ్చితంగా. మా క్లయింట్లలో ఎక్కువ మంది రీల్స్, యాడ్స్, గూగుల్ మ్యాప్స్ మరియు కమ్యూనిటీ మేనేజ్‌మెంట్‌లను కలిపి ఆల్-ఇన్-వన్ మంత్లీ ప్యాకేజీగా తీసుకుంటారు. దీనివల్ల మంచి సమన్వయం మరియు 35% వరకు ఖర్చు ఆదా అవుతుంది.'
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  language = 'en',
  onNavigate,
  onOpenQuoteModal
}) => {
  const isTe = language === 'te';

  return (
    <div className="bg-[#fafaf9] min-h-screen text-stone-900 selection:bg-blue-600 selection:text-white pb-16 sm:pb-24">
      
      {/* =========================================================================
          01 — EDITORIAL SERVICES HERO SECTION
          ========================================================================= */}
      <section className="pt-14 sm:pt-20 pb-8 sm:pb-12 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-tight">
              {isTe ? (
                <>కస్టమర్లను మీ వ్యాపారానికి తీసుకువచ్చే నిజమైన డిజిటల్ మార్కెటింగ్.</>
              ) : (
                <>Marketing that brings actual customers through your doors.</>
              )}
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — THE 7 CORE SERVICES + GROWTH RETAINER (COMPACT 3-COL GRID)
          ========================================================================= */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            
            {/* 7 Services Cards — Compact & Scannable */}
            {servicesCatalog.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="rounded-2xl bg-white border border-stone-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-blue-500/80 hover:shadow-md transition-all duration-200 group h-full"
              >
                <div>
                  {/* Header: Number Badge on Left | Platform Logos on Right */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                      {service.num}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {service.logos.map((logo, lIdx) => {
                        const LogoComp = logo.component;
                        return (
                          <div
                            key={lIdx}
                            title={logo.label}
                            className="p-1 rounded-md bg-stone-50 border border-stone-200/80 shadow-2xs"
                          >
                            <LogoComp className="w-3.5 h-3.5" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-stone-950 group-hover:text-blue-600 transition-colors leading-snug mt-3">
                    {isTe ? service.titleTe : service.title}
                  </h3>

                  {/* 1-Line Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1.5 line-clamp-2">
                    {isTe ? service.descriptionTe : service.description}
                  </p>

                  {/* Top 3 Concrete Deliverables (Truncated to fit single line) */}
                  <div className="space-y-1.5 mt-3 pt-3 border-t border-stone-100">
                    {(isTe ? service.deliverablesTe : service.deliverables).slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Bar: Standout Metric on Left | Direct Link on Right */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black text-stone-950 leading-none">
                      {isTe ? service.metricTe : service.metric}
                    </p>
                    <p className="text-[10px] text-stone-500 font-medium mt-0.5">
                      {isTe ? service.metricSubTe : service.metricSub}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate(service.id as PageId)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>{isTe ? 'పూర్తి స్కోప్' : 'Explore Scope'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* 08 — All-In-One Full Growth Retainer (Spans 2 columns to complete Row 3) */}
            <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-stone-950 text-white p-5 sm:p-6 flex flex-col justify-between border border-stone-800 shadow-lg relative overflow-hidden group h-full">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/70 border border-blue-800/60 px-2.5 py-0.5 rounded-md">
                      08
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                      {isTe ? 'ఆల్-ఇన్-వన్ ప్యాకేజీ' : 'ALL-IN-ONE GROWTH RETAINER'}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-600/30 text-blue-300 text-[11px] font-bold">
                    <Sparkles className="w-3 h-3" />
                    <span>Save Up To 35%</span>
                  </div>
                </div>

                {/* Content Split: Title + Description on Left, Quick Perks on Right */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-3">
                  <div className="sm:col-span-7 space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                      {isTe ? 'మీ మొత్తం మార్కెటింగ్ బాధ్యత ఒకే భాగస్వామ్యంతో' : 'Want BDS to manage your entire marketing end-to-end?'}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {isTe
                        ? 'రీల్స్, మెటా యాడ్స్, గూగుల్ మ్యాప్స్ SEO, లీడ్ రౌటింగ్ మరియు రిపోర్టింగ్‌ను కలిపి ఒకే పూర్తి ప్యాకేజీగా పొందండి.'
                        : 'Bundle Reels, Meta Ads, Google Maps SEO, DM Lead Routing, and Weekly ROI Reporting into one accountable partnership.'}
                    </p>
                  </div>

                  <div className="sm:col-span-5 space-y-1.5 text-xs text-stone-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>100% Hands-off execution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Bilingual Telugu + English</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Direct lead by Bhargav</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Bar */}
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black text-white leading-none">
                    {isTe ? 'కస్టమ్ బండిల్' : 'Custom Bundle'}
                  </p>
                  <p className="text-[10px] text-stone-400 font-medium mt-0.5">
                    {isTe ? 'వ్యాపార స్థాయికి తగినట్లు' : 'Tailored to your business scale'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('All-In-One Growth Retainer')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs transition-colors cursor-pointer shadow-md shadow-blue-600/30"
                >
                  <span>{isTe ? 'కస్టమ్ ప్లాన్ అడగండి' : 'Request Retainer'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — FREQUENTLY ASKED QUESTIONS (Authentic Local Business FAQs)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-t border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {isTe ? 'ప్రశ్నలు & సమాధానాలు' : 'CLEAR ANSWERS'}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight leading-tight">
              {isTe ? 'వ్యాపారవేత్తలు తరచుగా అడిగే ప్రశ్నలు' : 'Questions business owners ask before starting.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {serviceFaqs.map((faq, fIdx) => (
              <div key={fIdx} className="space-y-2.5 pb-6 border-b border-stone-200/80">
                <h3 className="text-base sm:text-lg font-black text-stone-950 leading-snug">
                  {isTe ? faq.qTe : faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isTe ? faq.aTe : faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          06 — FINAL CONSULTATION CTA (Matching Homepage Aesthetic)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-8">
          
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {isTe ? 'ప్రారంభించండి' : 'START WITH CONFIDENCE'}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              {isTe ? (
                <>ఈ నెలలోనే మీ వ్యాపారానికి కస్టమర్ల రాకను పెంచుకుందాం.</>
              ) : (
                <>Let’s discuss how digital marketing can grow your business this month.</>
              )}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {isTe
                ? 'ఎటువంటి బలవంతం లేదా సేల్స్ ఒత్తిడి ఉండదు. మీ వ్యాపారానికి రాజమండ్రిలో ఏది సరైన ఫలితాలనిస్తుందో సూటిగా చర్చించి తెలుసుకోండి.'
                : 'No sales pressure, no marketing fluff. Just a straightforward conversation about what works in Rajahmundry and how to get real results.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal('General Services Inquiry')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-stone-950 hover:bg-blue-600 text-white font-extrabold text-sm transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isTe ? 'ఉచిత గ్రోత్ ప్లాన్ పొందండి' : 'Get a Free Growth Plan'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919494825968?text=Hello%20Bhargav,%20I%20am%20exploring%20BDS%20services%20and%20would%20like%20to%20discuss%20a%20plan%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-stone-300 hover:border-stone-900 text-stone-950 font-extrabold text-sm transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <WhatsAppLogo className="w-4 h-4 shrink-0" />
              <span>{isTe ? 'వాట్సాప్‌లో మాట్లాడండి' : 'Chat on WhatsApp: +91 94948 25968'}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

