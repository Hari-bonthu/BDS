import React from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Building,
  Clock,
  Zap,
  Layers,
  FileText,
  Calendar,
  Eye,
  Crosshair,
  Award,
  Video,
  MapPin,
  Flame,
  Check,
  Share2
} from 'lucide-react';
import { servicesList } from '../data/servicesData';
import { companyInfo } from '../data/companyData';
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

interface ServiceDetailPageProps {
  pageId: PageId;
  language?: Language;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

// Map authentic platform logos to each service
const serviceLogoMap: Record<string, { component: React.FC<{ className?: string }>; label: string }[]> = {
  'local-seo': [
    { component: GoogleMapsLogo, label: 'Google Maps 3-Pack' },
    { component: GoogleLogo, label: 'Google Business Profile' },
    { component: InquiriesLogo, label: 'Direct Calls & Inquiries' }
  ],
  'content-creation': [
    { component: CreativesLogo, label: 'Custom Creatives' },
    { component: InstagramLogo, label: 'Instagram Feed' },
    { component: WhatsAppLogo, label: 'WhatsApp Flyers' }
  ],
  'short-form-video-ads': [
    { component: ReelsLogo, label: 'Instagram Reels' },
    { component: YouTubeLogo, label: 'YouTube Shorts' },
    { component: MetaLogo, label: 'Meta Ads' },
    { component: GoogleLogo, label: 'Google Ads' }
  ],
  'social-media-management': [
    { component: InstagramLogo, label: 'Instagram' },
    { component: MetaLogo, label: 'Facebook' },
    { component: YouTubeLogo, label: 'YouTube' }
  ],
  'platform-coverage': [
    { component: GoogleMapsLogo, label: 'Google Maps' },
    { component: GoogleLogo, label: 'Google Search' },
    { component: WhatsAppLogo, label: 'WhatsApp Catalog' }
  ],
  'content-operations': [
    { component: CreativesLogo, label: 'Asset Cloud' },
    { component: LeadGenLogo, label: 'Workflow' },
    { component: GoogleLogo, label: 'Cloud Drive' }
  ],
  'community-management': [
    { component: InquiriesLogo, label: 'DM Capture' },
    { component: WhatsAppLogo, label: 'WhatsApp Routing' },
    { component: GoogleMapsLogo, label: '5★ Reviews' }
  ],
  'reporting-insights': [
    { component: LeadGenLogo, label: 'ROI Tracking' },
    { component: GoogleLogo, label: 'Analytics' },
    { component: InquiriesLogo, label: 'Revenue Proof' }
  ]
};

// Map high-definition editorial production images to each service
const serviceHeroImageMap: Record<string, { src: string; caption: string; captionTe: string }> = {
  'local-seo': {
    src: asset('assets/service-local-seo.webp'),
    caption: 'Google Maps 3-Pack: Local pack visibility, authentic review acquisition & direct calls',
    captionTe: 'గూగుల్ మ్యాప్స్ 3-ప్యాక్: స్థానిక విజిబిలిటీ, జెన్యూన్ రివ్యూలు & కాల్స్'
  },
  'content-creation': {
    src: asset('assets/service-content-creation.webp'),
    caption: 'Production desk: Bilingual Telugu creative direction & festive campaign assets',
    captionTe: 'ప్రొడక్షన్ డెస్క్: తెలుగు క్రియేటివ్ డైరెక్షన్ & పండుగల క్యాంపెయిన్ ఆస్తులు'
  },
  'short-form-video-ads': {
    src: asset('assets/service-video-ads.webp'),
    caption: 'On-location showroom shoot: 4K vertical Reels & cinematic ad production',
    captionTe: 'షోరూమ్ షూట్: 4K వర్టికల్ రీల్స్ & సినిమాటిక్ ప్రకటనల ప్రొడక్షన్'
  },
  'social-media-management': {
    src: asset('assets/service-social-media.webp'),
    caption: 'Editorial brand curation: Aesthetic Instagram feeds, stories & native publishing schedule',
    captionTe: 'బ్రాండ్ క్యూరేషన్: ఇన్‌స్టాగ్రామ్ ఫీడ్, స్టోరీలు & స్థానిక ప్రచురణ'
  },
  'platform-coverage': {
    src: asset('assets/service-local-seo.webp'),
    caption: 'Google Maps 3-Pack: Local pack visibility, authentic review acquisition & direct calls',
    captionTe: 'గూగుల్ మ్యాప్స్ 3-ప్యాక్: స్థానిక విజిబిలిటీ, జెన్యూన్ రివ్యూలు & కాల్స్'
  },
  'content-operations': {
    src: asset('assets/service-content-ops.webp'),
    caption: 'Digital operations hub: 30-day editorial pipeline, shoot schedules & organized cloud drives',
    captionTe: 'కంటెంట్ ఆపరేషన్స్: 30 రోజుల ఎడిటోరియల్ క్యాలెండర్ & ఆర్గనైజ్డ్ క్లౌడ్ డ్రైవ్స్'
  },
  'community-management': {
    src: asset('assets/service-community-mgt.webp'),
    caption: 'Real-time response: Rapid customer qualification on WhatsApp Business & Instagram DMs',
    captionTe: 'రియల్ టైమ్ స్పందన: వాట్సాప్ మరియు ఇన్‌స్టాగ్రామ్ లీడ్స్ వెనువెంటనే క్వాలిఫికేషన్'
  },
  'reporting-insights': {
    src: asset('assets/service-reporting-insights.webp'),
    caption: 'Executive transparency: Live ROAS metrics, bi-weekly audits & cost-per-lead tracking',
    captionTe: 'పారదర్శకమైన రిపోర్టింగ్: లైవ్ ROAS మెట్రిక్స్ & లీడ్స్ ఆడిట్ రిపోర్ట్'
  }
};

// Map campaign concept imagery to services (distinct visual proofs per concept)
const serviceCaseProofListMap: Record<string, { src: string; client: string; result: string }[]> = {
  'local-seo': [
    {
      src: asset('assets/campaign-dental.webp'),
      client: 'Dental & Healthcare Practice Concept',
      result: 'Local SEO & Google Maps 3-Pack rank acceleration driving 3.4x monthly appointment inquiries'
    },
    {
      src: asset('assets/campaign-silks.webp'),
      client: 'Textile & Saree Retail Concept',
      result: 'Geo-targeted local search ranking for bridal wear and festive shopping'
    }
  ],
  'content-creation': [
    {
      src: asset('assets/campaign-silks.webp'),
      client: 'Textile & Saree Retail Concept',
      result: 'Bilingual Telugu/English creative concept for festive season retail footfall campaigns'
    },
    {
      src: asset('assets/campaign-dental.webp'),
      client: 'Healthcare & Clinic Awareness Concept',
      result: 'Bilingual medical awareness infographics simplifying healthcare tips for local families'
    }
  ],
  'short-form-video-ads': [
    {
      src: asset('assets/campaign-villas.webp'),
      client: 'Gated Community Real Estate Concept',
      result: 'Lead generation video tour campaign targeting regional property investors'
    },
    {
      src: asset('assets/service-video-ads.webp'),
      client: 'Hospitality & Dining Video Concept',
      result: 'Localized Telugu food showcase reels driving weekend reservations'
    }
  ],
  'social-media-management': [
    {
      src: asset('assets/service-social-media.webp'),
      client: 'Retail & Commercial Growth Concept',
      result: 'Organic community reach and seasonal brand engagement'
    },
    {
      src: asset('assets/campaign-dental.webp'),
      client: 'Doctor Branding & Healthcare Concept',
      result: 'Doctor insight carousels building trusted clinic recall across local feeds'
    }
  ],
  'platform-coverage': [
    {
      src: asset('assets/campaign-silks.webp'),
      client: 'Retail Commercial Hub Concept',
      result: 'Google Maps 3-Pack dominance with cataloged products and review funnels'
    },
    {
      src: asset('assets/campaign-villas.webp'),
      client: 'Hospitality & Real Estate Venue Concept',
      result: 'Synchronized multi-channel setup driving direct booking inquiries'
    }
  ],
  'content-operations': [
    {
      src: asset('assets/campaign-villas.webp'),
      client: 'Educational & Multi-Campus Concept',
      result: 'Asset pipeline coordinating 100+ seasonal admission creatives without bottlenecks'
    }
  ],
  'community-management': [
    {
      src: asset('assets/campaign-dental.webp'),
      client: 'Healthcare Community & Review Concept',
      result: 'Under-15-minute patient DM triage and review acceleration model'
    }
  ],
  'reporting-insights': [
    {
      src: asset('assets/campaign-villas.webp'),
      client: 'Enterprise Growth Attribution Concept',
      result: 'Transparent ad spend audit concept with tracked ROAS for high-ticket investments'
    }
  ]
};

// =============================================================================
// BESPOKE, SERVICE-SPECIFIC OPERATIONAL DEFINITIONS
// Each service has its own authentic deliverables, operational rhythm, and logic.
// =============================================================================
interface ServiceCustomFlow {
  sectionTitle: string;
  sectionTitleTe: string;
  sectionSubtitle: string;
  sectionSubtitleTe: string;
  operationalItems: {
    number: string;
    title: string;
    titleTe: string;
    description: string;
    descriptionTe: string;
    deliverables: string[];
    deliverablesTe: string[];
  }[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowTitleTe: string;
  workflowSubtitle: string;
  workflowSubtitleTe: string;
  workflowSteps: {
    step: string;
    timeline: string;
    title: string;
    titleTe: string;
    description: string;
    descriptionTe: string;
  }[];
  specialFeature: {
    tag: string;
    title: string;
    titleTe: string;
    description: string;
    descriptionTe: string;
    bullets: string[];
    bulletsTe: string[];
  };
}

const serviceBespokeFlows: Record<string, ServiceCustomFlow> = {
  'local-seo': {
    sectionTitle: 'What BDS Delivers for Google Maps & Local SEO Dominance',
    sectionTitleTe: 'గూగుల్ మ్యాప్స్ మరియు లోకల్ SEO కోసం మేము అందించే సేవలు',
    sectionSubtitle: 'Dominate the Google Local 3-Pack across Rajahmundry, Danavaipeta, Kotipalli, and Morampudi. Capture customer phone calls right when they are ready to purchase.',
    sectionSubtitleTe: 'రాజమండ్రి మరియు పరిసర ప్రాంతాలలో గూగుల్ మ్యాప్స్‌లో అగ్రస్థానంలో నిలిచి కస్టమర్ కాల్స్ పొందండి.',
    operationalItems: [
      {
        number: '01',
        title: 'Google Business Profile Optimization & Audit',
        titleTe: 'గూగుల్ బిజినెస్ ప్రొఫైల్ ఆడిట్ & ఆప్టిమైజేషన్',
        description: 'Complete category clustering, keyword-rich business descriptions, and geo-tagged showroom/clinic photo uploads with clean EXIF coordinates.',
        descriptionTe: 'సరైన కేటగిరీ ఎంపిక, కీవర్డ్లతో కూడిన వివరణ మరియు జియో-ట్యాగ్ చేయబడిన ఫోటోల అప్‌లోడ్.',
        deliverables: ['Primary & secondary category alignment', 'Local search keyword clustering', 'Weekly geo-tagged photos'],
        deliverablesTe: ['సరైన కేటగిరీల ఎంపిక', 'స్థానిక కీవర్డ్స్ ఆప్టిమైజేషన్', 'వీక్లీ జియో-ట్యాగ్డ్ ఫోటోస్']
      },
      {
        number: '02',
        title: 'NAP Directory Standardization & Citations',
        titleTe: 'డైరెక్టరీ సైటేషన్స్ & స్థానిక లిస్టింగ్స్',
        description: 'Synchronizing Name, Address, and Phone across Justdial, Sulekha, IndiaMART, and regional portals to build search engine authority.',
        descriptionTe: 'జస్ట్‌డయల్, సులేఖ మరియు ఇతర డైరెక్టరీలలో ఒకే విధమైన పేరు, చిరునామా మరియు ఫోన్ నంబర్ అప్‌డేట్.',
        deliverables: ['25+ Verified Indian citations', 'Duplicate listing suppression', 'RFC 3966 phone formatting'],
        deliverablesTe: ['25+ వెరిఫైడ్ సైటేషన్స్', 'డూప్లికేట్ లిస్టింగ్స్ తొలగింపు', 'ఖచ్చితమైన కాంటాక్ట్ సమాచారం']
      },
      {
        number: '03',
        title: '5-Star Review Generation Funnel',
        titleTe: '5-స్టార్ గూగుల్ రివ్యూల సేకరణ',
        description: 'Custom branded in-store QR code standees and automated WhatsApp follow-ups that turn happy customers into verified 5-star Google reviews.',
        descriptionTe: 'కౌంటర్ వద్ద ఉంచే కస్టమ్ క్యూఆర్ కోడ్ మరియు వాట్సాప్ ద్వారా కస్టమర్ల నుండి రివ్యూల సేకరణ.',
        deliverables: ['Counter QR standee designs', 'WhatsApp review prompts', 'Keyword-rich owner review responses'],
        deliverablesTe: ['క్యూఆర్ కోడ్ స్టాండీ డిజైన్', 'వాట్సాప్ ఫాలో-అప్ టెంప్లేట్స్', 'కీవర్డ్స్‌తో కూడిన ఓనర్ రెస్పాన్స్']
      },
      {
        number: '04',
        title: 'Localized Schema & GeoCoordinates Markup',
        titleTe: 'లోకల్ బిజినెస్ స్కీమా మార్కప్',
        description: 'Embedding LocalBusiness JSON-LD structured data and geo-coordinates into your website to dominate local search snippets.',
        descriptionTe: 'గూగుల్ సెర్చ్‌లో వేగంగా ర్యాంక్ అవ్వడానికి వెబ్‌సైట్‌లో లోకల్ బిజినెస్ స్కీమా కోడ్ ఇంప్లిమెంటేషన్.',
        deliverables: ['Schema.org LocalBusiness JSON-LD', 'AreaServed neighborhood mapping', 'Core Web Vitals mobile speed'],
        deliverablesTe: ['స్కీమా.ఆర్గ్ లోకల్ బిజినెస్ కోడ్', 'ఏరియా సర్వ్డ్ మ్యాపింగ్', 'మొబైల్ స్పీడ్ ఆప్టిమైజేషన్']
      }
    ],
    workflowEyebrow: '5-STEP LOCAL RANKING METHODOLOGY',
    workflowTitle: 'How We Rank Your Business in Google Maps 3-Pack',
    workflowTitleTe: 'గూగుల్ మ్యాప్స్‌లో టాప్ ర్యాంక్ సాధించే 5-దశల విధానం',
    workflowSubtitle: 'A battle-tested 5-step blueprint that transforms your local presence into verified customer phone calls within 45 to 90 days.',
    workflowSubtitleTe: '45 నుండి 90 రోజుల్లో మీ వ్యాపారానికి కస్టమర్ ఫోన్ కాల్స్ పెంచే పద్ధతి.',
    workflowSteps: [
      { step: '01', timeline: 'Week 1', title: 'GBP & Competitor Audit', titleTe: 'ప్రొఫైల్ & కాంపిటీటర్ ఆడిట్', description: 'Comprehensive audit of Google Business Profile categories, eliminating dilution and identifying local search volume in Rajahmundry.', descriptionTe: 'మీ ప్రస్తుత ర్యాంకింగ్స్ మరియు పోటీదారుల వివరాల సమగ్ర పరిశీలన.' },
      { step: '02', timeline: 'Week 2', title: 'NAP Directory Standardization', titleTe: 'డైరెక్టరీ స్టాండర్డైజేషన్', description: 'Synchronizing Name, Address, and Phone across Justdial, Sulekha, and local directories to build unshakeable location trust.', descriptionTe: 'అన్ని ప్రముఖ భారతీయ డైరెక్టరీలలో చిరునామా సరిదిద్దడం.' },
      { step: '03', timeline: 'Week 3', title: 'On-Page Local Schema Injection', titleTe: 'ఆన్-పేజ్ స్కీమా మార్కప్', description: 'Embedding schema.org LocalBusiness markup, GPS coordinates, and neighborhood signals directly into your website code.', descriptionTe: 'వెబ్‌సైట్‌లో లోకల్ సెర్చ్ సిగ్నల్స్ మరియు స్కీమా కోడింగ్.' },
      { step: '04', timeline: 'Week 4', title: 'Automated Review Funnel Launch', titleTe: 'రివ్యూ ఫన్నెల్ ప్రారంభం', description: 'Deploying custom reception QR standees and polite WhatsApp review request prompts to satisfied patients or buyers.', descriptionTe: 'కౌంటర్ వద్ద క్యూఆర్ స్టాండీలు మరియు కస్టమర్ రివ్యూ టెంప్లేట్స్ అమర్చడం.' },
      { step: '05', timeline: 'Monthly', title: 'Geo-Grid Tracking & Updates', titleTe: 'ర్యాంకింగ్ ట్రాకింగ్ & అప్‌డేట్స్', description: 'Monitoring kilometer-by-kilometer map rankings across Danavaipeta, Kotipalli, and Morampudi, publishing regular local posts.', descriptionTe: 'ప్రతి ఏరియాలో ర్యాంకులను పరిశీలిస్తూ నిరంతరం ప్రొఫైల్ అప్‌డేట్ చేయడం.' }
    ],
    specialFeature: {
      tag: 'AI SEARCH CITABILITY • THE BDS METHODOLOGY',
      title: 'How Does Bhargav Digital Solutions Rank Local Businesses in Google Maps 3-Pack?',
      titleTe: 'రాజమండ్రిలో లోకల్ SEO & మ్యాప్స్ 3-ప్యాక్ ఆధిక్యత',
      description: 'Bhargav Digital Solutions executes a structured five-step Local SEO methodology designed to rank Rajahmundry and East Godavari businesses within Google\'s local 3-Pack. First, BDS conducts a comprehensive audit of Google Business Profile (GBP) categories, eliminating category dilution and selecting high-intent primary classifications. Second, the agency performs strict Name, Address, and Phone (NAP) standardization across prominent Indian business directories, including Justdial, Sulekha, and IndiaMART. Third, BDS implements localized on-page SEO by embedding schema.org LocalBusiness JSON-LD markup and geo-tagged coordinates into the client website. Fourth, BDS deploys an authentic customer review generation funnel with automated WhatsApp prompts and keyword-rich owner review responses. Finally, BDS generates local relevance signals through geo-targeted photo uploads and location-specific service pages. This data-driven framework typically delivers measurable map ranking improvements, increased direction requests, and verified inbound phone calls within 45 to 90 days.',
      descriptionTe: 'రాజమండ్రి మరియు తూర్పు గోదావరి వ్యాపారాలకు గూగుల్ మ్యాప్స్ 3-ప్యాక్‌లో అగ్రస్థానం సాధించడానికి BDS 5-దశల నిరూపితమైన లోకల్ SEO విధానాన్ని అమలు చేస్తుంది.',
      bullets: [
        'Elimination of GBP category dilution & high-intent category clustering',
        'Strict NAP consistency across Justdial, Sulekha, and regional portals',
        'In-store QR code standees + automated WhatsApp review generation funnel',
        'Complete schema.org LocalBusiness JSON-LD markup with GPS coordinates'
      ],
      bulletsTe: [
        'ఖచ్చితమైన కేటగిరీ ఎంపిక మరియు కీవర్డ్ క్లస్టరింగ్',
        'ప్రముఖ డైరెక్టరీలలో ఒకే విధమైన కాంటాక్ట్ సమాచారం',
        'కౌంటర్ క్యూఆర్ కోడ్స్ మరియు వాట్సాప్ రివ్యూ సిస్టమ్',
        'వెబ్‌సైట్‌లో స్కీమా మార్కప్ మరియు జియో-కోఆర్డినేట్స్'
      ]
    }
  },
  'content-creation': {
    sectionTitle: 'What BDS Actually Delivers Every Month',
    sectionTitleTe: 'ప్రతినెలా మేము అందించే క్రియేటివ్ డెలివరబుల్స్',
    sectionSubtitle: 'No generic Canva templates. Every graphic, multi-slide carousel, and Telugu caption is crafted specifically for your business to attract local customers.',
    sectionSubtitleTe: 'ఎటువంటి సాధారణ టెంప్లేట్‌లు వాడము. మీ వ్యాపారం కోసం ప్రత్యేకంగా డిజైన్ చేసిన హై-క్వాలిటీ గ్రాఫిక్స్ మరియు ఆకట్టుకునే తెలుగు కాపీ.',
    operationalItems: [
      {
        number: '01',
        title: 'On-Site Product & Facility Visuals',
        titleTe: 'ఆన్-సైట్ ప్రోడక్ట్ & బిజినెస్ ఫోటోగ్రఫీ',
        description: 'Visiting your business premises to style and capture retail collections, clinic facilities, showroom products, or project walkthroughs under professional lighting.',
        descriptionTe: 'మీ వ్యాపార ప్రాంగణానికి వచ్చి ప్రోడక్ట్స్, క్లినిక్ సేవలు లేదా కలెక్షన్లను ప్రొఫెషనల్ లైటింగ్‌లో ఫోటోగ్రఫీ చేస్తాము.',
        deliverables: ['15–30 High-res static feed creatives', 'Macro product details & facility highlights', 'Brand-consistent color grading'],
        deliverablesTe: ['15–30 హై-రెస్ స్టాటిక్ పోస్ట్‌లు', 'ప్రోడక్ట్ డీటెయిల్స్ & హైలైట్స్', 'బ్రాండ్ కలర్ గ్రేడింగ్']
      },
      {
        number: '02',
        title: 'Native Telugu + English Copywriting',
        titleTe: 'ప్రామాణిక తెలుగు + ఇంగ్లీష్ కాపీరైటింగ్',
        description: 'Culturally resonant headlines for festival seasons, promotional campaigns, and service highlights that local buyers emotionally connect with.',
        descriptionTe: 'స్థానిక పండుగలు, ఆఫర్లు మరియు సేవల కోసం కస్టమర్లను ఆకట్టుకునే ప్రాంతీయ తెలుగు కాపీరైటింగ్.',
        deliverables: ['Regional dialect & festival hooks', 'Compelling offers & business location mentions', 'Clear call-to-actions'],
        deliverablesTe: ['ప్రాంతీయ పండుగల హుక్స్', 'ఆఫర్లు & లొకేషన్ వివరాలు', 'కస్టమర్లను ఆకర్షించే ఆఫర్లు']
      },
      {
        number: '03',
        title: 'Multi-Slide Educational & Product Carousels',
        titleTe: 'మల్టీ-స్లైడ్ ఎడ్యుకేషనల్ & ప్రోడక్ట్ కరౌసెల్స్',
        description: '5-slide educational carousels breaking down key product features, customer benefits, service walkthroughs, or quality certifications that build buyer trust before they visit.',
        descriptionTe: 'ప్రోడక్ట్ విశిష్టతలు, కస్టమర్ ప్రయోజనాలు, నాణ్యతా ప్రమాణాలు మరియు సేవల వివరాలను అందించే 5-స్లైడ్ ఎడ్యుకేషనల్ కరౌసెల్స్.',
        deliverables: ['Swipeable product & service breakdowns', 'Buyer guide & trust-building cards', 'Customer hesitation objection busters'],
        deliverablesTe: ['ప్రోడక్ట్ వివరాల స్లైడ్స్', 'కొనుగోలుదారుల గైడ్ కార్డ్స్', 'నమ్మకాన్ని పెంచే సమాచారం']
      },
      {
        number: '04',
        title: 'WhatsApp Broadcast & Social Story Flyers',
        titleTe: 'వాట్సాప్ బ్రాడ్‌కాస్ట్ & సోషల్ స్టోరీ ఫ్లైయర్స్',
        description: 'High-conversion vertical creatives sized specifically for business owners to broadcast across local customer WhatsApp lists and Instagram Stories.',
        descriptionTe: 'మీ కస్టమర్ల వాట్సాప్ లిస్ట్ మరియు ఇన్‌స్టాగ్రామ్ స్టోరీస్ కోసం ప్రత్యేకంగా డిజైన్ చేసిన వర్టికల్ ఫ్లైయర్స్.',
        deliverables: ['9:16 Smartphone optimized flyers', 'Lightweight for instant loading', 'Direct phone/WhatsApp ordering links'],
        deliverablesTe: ['9:16 సైజ్ ఫ్లైయర్స్', 'వేగంగా లోడ్ అయ్యే ఫార్మాట్', 'డైరెక్ట్ వాట్సాప్ ఆర్డర్ లింక్']
      }
    ],
    workflowEyebrow: 'THE CREATIVE PRODUCTION CYCLE',
    workflowTitle: 'How we produce your monthly visual campaign',
    workflowTitleTe: 'నెలవారీ క్రియేటివ్ ప్రొడక్షన్ విధానం',
    workflowSubtitle: 'A structured monthly cadence that keeps your brand looking premium and ready for every commercial peak.',
    workflowSubtitleTe: 'ప్రతి సీజన్‌కు మీ వ్యాపారం ముందుండేలా పక్కా ప్లానింగ్.',
    workflowSteps: [
      { step: '01', timeline: 'Week 1', title: 'Monthly Marketing Asset Walkthrough', titleTe: 'మంత్లీ ప్లానింగ్ & ఆఫర్ల సెలక్షన్', description: 'We review new stock arrivals, monthly special offers, and select the hero products or services to feature for the coming 30 days.', descriptionTe: 'కొత్త ఆఫర్లు మరియు ముఖ్యమైన సేవల వివరాలను పరిశీలించి రాబోయే 30 రోజులకు ప్రణాళిక వేస్తాము.' },
      { step: '02', timeline: 'Week 1', title: 'Telugu Cultural Scripting', titleTe: 'తెలుగు స్క్రిప్టింగ్ & కాపీరైటింగ్', description: 'Writing bespoke Telugu captions and festival headlines tailored to local East Godavari shopping psychology.', descriptionTe: 'తూర్పు గోదావరి ప్రజల కొనుగోలు మనస్తత్వానికి తగినట్లుగా ఆకర్షణీయమైన తెలుగు కాపీ రాస్తాము.' },
      { step: '03', timeline: 'Week 2', title: 'High-Resolution Design & Export', titleTe: 'డిజైన్ & మల్టీ-ఫార్మాట్ ఎక్స్‌పోర్ట్', description: 'Polishing visuals with authentic lighting, brand color accuracy, and rendering in Instagram, Facebook, and WhatsApp formats.', descriptionTe: 'రంగుల ఖచ్చితత్వంతో డిజైన్ చేసి ఇన్‌స్టాగ్రామ్ మరియు వాట్సాప్ సైజుల్లో సిద్ధం చేస్తాము.' },
      { step: '04', timeline: 'Continuous', title: 'Pre-Festival Launch Alignment', titleTe: 'పండుగల సమయానికి పబ్లిషింగ్', description: 'Releasing graphics 10–14 days ahead of key dates so families and buyers plan their visits in advance.', descriptionTe: 'కీలక తేదీలకు 10-14 రోజుల ముందే ప్రచారాన్ని ప్రారంభించి కస్టమర్లను మీ వ్యాపారానికి రప్పిస్తాము.' }
    ],
    specialFeature: {
      tag: 'THE BDS ADVANTAGE',
      title: 'Why Generic Metro Templates Fail in Rajahmundry',
      titleTe: 'సాధారణ టెంప్లేట్‌లు రాజమండ్రిలో ఎందుకు పని చేయవు?',
      description: 'Local buyers in East Godavari respond to authentic cultural nuance, familiar regional landmarks (Main Road, Danavaipeta, Kotipalli, Pushkar Ghat), and genuine local sentiment—not generic stock photos.',
      descriptionTe: 'రాజమండ్రి కస్టమర్లు స్థానిక భాష, లొకేషన్లు మరియు నిజమైన విజువల్స్‌ను చూసి మాత్రమే కనెక్ట్ అవుతారు.',
      bullets: [
        'Real on-site product and facility photography under professional lighting',
        'Native Telugu copywriting without robotic Google Translate errors',
        'Sized specifically for rapid WhatsApp broadcast sharing'
      ],
      bulletsTe: [
        'నిజమైన లైటింగ్‌లో తీసిన ప్రోడక్ట్ మరియు బిజినెస్ ఫోటోగ్రఫీ',
        'గూగుల్ ట్రాన్స్‌లేట్ తప్పులు లేని అచ్చ తెలుగు కాపీరైటింగ్',
        'వాట్సాప్ స్టేటస్ మరియు బ్రాడ్‌కాస్ట్‌లకు తగిన ఫార్మాట్'
      ]
    }
  },

  'short-form-video-ads': {
    sectionTitle: 'The Video & Paid Ad Acquisition Engine',
    sectionTitleTe: 'వీడియో ప్రొడక్షన్ & పెయిడ్ యాడ్స్ ఇంజిన్',
    sectionSubtitle: 'From on-location 4K cinema shooting to hyper-local geofenced ad sets that put your brand in front of buying customers.',
    sectionSubtitleTe: 'మీ షోరూమ్‌లో 4K వీడియో షూట్ నుండి స్థానిక కస్టమర్లను రప్పించే మెటా యాడ్స్ వరకు.',
    operationalItems: [
      {
        number: '01',
        title: 'On-Location 4K Showroom Video Shoots',
        titleTe: 'షోరూమ్‌లో ఆన్-లొకేషన్ 4K వీడియో షూట్',
        description: 'Cinema camera, gimbal stabilization, soft lighting, and wireless audio setup recorded directly at your showroom or clinic.',
        descriptionTe: 'సినిమా కెమెరా, గింబల్, లైటింగ్ మరియు మైక్‌లతో మీ షోరూమ్ లేదా క్లినిక్‌లోనే ప్రొఫెషనల్ షూట్.',
        deliverables: ['4–8 High-definition 4K vertical Reels', 'Showroom walkthrough & doctor/founder soundbites', 'Authentic b-roll texture sequences'],
        deliverablesTe: ['4–8 హై-డెఫినిషన్ 4K వర్టికల్ రీల్స్', 'షోరూమ్ వాక్‌త్రూ & ఫౌండర్ బైట్స్', 'సినిమాటిక్ బి-రోల్ విజువల్స్']
      },
      {
        number: '02',
        title: 'High-Retention Video Editing & Hooks',
        titleTe: 'హై-రిటెన్షన్ ఎడిటింగ్ & తెలుగు సబ్‌టైటిల్స్',
        description: 'First 2-second visual hook to stop scrolling, bold Telugu subtitles, trending audio matching, and clear visit invitations.',
        descriptionTe: 'మొదటి 2 సెకన్లలోనే ఆకట్టుకునే హుక్, స్పష్టమైన తెలుగు సబ్‌టైటిల్స్ మరియు ట్రెండింగ్ మ్యూజిక్.',
        deliverables: ['Stop-the-scroll 2-second opening hooks', 'Burned-in bilingual Telugu/English subtitles', 'Fast dynamic pacing to maintain retention'],
        deliverablesTe: ['ఆకట్టుకునే 2-సెకన్ల ఓపెనింగ్ హుక్స్', 'తెలుగు మరియు ఇంగ్లీష్ సబ్‌టైటిల్స్', 'బోరింగ్ లేకుండా వేగవంతమైన ఎడిటింగ్']
      },
      {
        number: '03',
        title: '12-Kilometer Geofenced Meta & Google Ad Sets',
        titleTe: '12 కి.మీ పరిధిలో టార్గెటెడ్ మెటా & గూగుల్ యాడ్స్',
        description: 'Laser-focused ad distribution covering Rajahmundry, Kovvur, Kadiam, Morampudi, and Kakinada, excluding wasted out-of-district spend.',
        descriptionTe: 'రాజమండ్రి, కొవ్వూరు, కడియం, కాకినాడ పరిసరాల్లోని కొనుగోలుదారులను మాత్రమే టార్గెట్ చేస్తాము.',
        deliverables: ['Custom radius targeting around your storefront', 'Audience segmentation by shopping intent', 'Negative exclusions to eliminate click waste'],
        deliverablesTe: ['మీ షాప్ చుట్టూ ప్రత్యేక రేడియస్ టార్గెటింగ్', 'కొనుగోలు ఆసక్తి ఉన్న ఆడియన్స్', 'వృధా క్లిక్స్ తొలగింపు']
      },
      {
        number: '04',
        title: 'Click-to-WhatsApp Direct Lead Funnel',
        titleTe: 'క్లిక్-టు-వాట్సాప్ డైరెక్ట్ ఎంక్వైరీ ఫన్నెల్',
        description: 'Video viewers tap one button on the ad to open a pre-filled WhatsApp inquiry chat straight to your business phone.',
        descriptionTe: 'కస్టమర్లు యాడ్ చూడగానే ఒక్క క్లిక్‌తో మీ వాట్సాప్‌లో వివరాలు అడిగేలా సెటప్.',
        deliverables: ['Pre-populated WhatsApp message templates', 'Showroom price inquiry capture', 'Direct phone call conversion tracking'],
        deliverablesTe: ['రెడీమేడ్ వాట్సాప్ మెసేజ్ ఫార్మాట్', 'ధరల విచారణల సేకరణ', 'కాల్ కన్వర్షన్ల ట్రాకింగ్']
      }
    ],
    workflowEyebrow: 'THE VIDEO & AD OPTIMIZATION RHYTHM',
    workflowTitle: 'How we take a video from raw shoot to live revenue',
    workflowTitleTe: 'షూట్ నుండి కస్టమర్ల రాక వరకు వర్క్‌ఫ్లో',
    workflowSubtitle: 'A battle-tested execution loop: shoot on location, edit within 48 hours, launch geofenced ads, and optimize budget daily.',
    workflowSubtitleTe: '48 గంటల్లో ఎడిటింగ్, స్థానిక యాడ్స్ లాంచ్ మరియు రోజువారీ ఆప్టిమైజేషన్.',
    workflowSteps: [
      { step: '01', timeline: 'Shoot Day', title: '2-Hour Showroom Production Session', titleTe: '2 గంటల ఆన్-సైట్ షూట్ సెషన్', description: 'Our film crew arrives with cinema gear to record drapes, facilities, and founder interviews with zero disturbance to your customers.', descriptionTe: 'మీ కస్టమర్లకు ఎటువంటి ఇబ్బంది కలగకుండా మా టీమ్ వచ్చి ప్రొఫెషనల్ వీడియోలు షూట్ చేస్తుంది.' },
      { step: '02', timeline: 'Day 2–3', title: 'Fast 48-Hour Video Editing', titleTe: '48 గంటల్లో 4K ఎడిటింగ్ & సబ్‌టైటిల్స్', description: 'Cutting high-energy vertical cuts with native Telugu voiceover, sound design, and burned-in subtitles.', descriptionTe: 'తెలుగు వాయిస్‌ఓవర్, సౌండ్ ఎఫెక్ట్స్ మరియు సబ్‌టైటిల్స్‌తో ఆకట్టుకునే వీడియో ఎడిటింగ్.' },
      { step: '03', timeline: 'Day 4', title: 'Geofenced Ad Campaign Launch', titleTe: 'టార్గెటెడ్ యాడ్స్ లాంచ్', description: 'Configuring Meta Ads Manager with strict 10–15km radius bounds and click-to-WhatsApp routing.', descriptionTe: 'రాజమండ్రి పరిసరాల్లోని ప్రజలకు మాత్రమే కనిపించేలా క్యాంపెయిన్ లాంచ్ చేస్తాము.' },
      { step: '04', timeline: 'Daily', title: 'ROAS & Lead Cost Scaling', titleTe: 'రోజువారీ బడ్జెట్ ఆప్టిమైజేషన్', description: 'Pausing underperforming videos within 48 hours and reallocating ad rupees into the winning hooks that drive showroom visits.', descriptionTe: 'ఎక్కువ కస్టమర్లను తెచ్చే వీడియోలపై బడ్జెట్ పెంచి, ఫలితం లేని వాటిని ఆపివేస్తాము.' }
    ],
    specialFeature: {
      tag: 'GEOFENCED TARGETING',
      title: 'Precision 12km Radius Around Your Storefront',
      titleTe: 'మీ షాప్ చుట్టూ ఖచ్చితమైన 12 కి.మీ టార్గెటింగ్',
      description: 'We prevent wasted ad spend by strictly filtering out non-local traffic. Only families and shoppers within driving distance of Rajahmundry see your promotional reels.',
      descriptionTe: 'దూర ప్రాంతాల వారికి కాకుండా, మీ షోరూమ్‌కి వచ్చి కొనుగోలు చేసే అవకాశం ఉన్న స్థానికులకు మాత్రమే మీ ప్రకటనలు కనిపిస్తాయి.',
      bullets: [
        'Zero budget spent on out-of-district users who cannot visit',
        'Direct click-to-WhatsApp chats delivered directly to your phone',
        'Daily ad spend monitoring to ensure every rupee produces footfalls'
      ],
      bulletsTe: [
        'దూర ప్రాంతాల అనవసర క్లిక్స్ వల్ల బడ్జెట్ వృధా కాదు',
        'ఆసక్తి ఉన్న కస్టమర్ల వాట్సాప్ మెసేజ్‌లు నేరుగా మీకే వస్తాయి',
        'ప్రతి రూపాయికి లభించే ఫలితాలపై రోజువారీ పర్యవేక్షణ'
      ]
    }
  },

  'social-media-management': {
    sectionTitle: 'True 100% Hands-Off Social Media Management',
    sectionTitleTe: 'మీ వ్యాపారానికి పూర్తి హ్యాండ్స్-ఆఫ్ సోషల్ మీడియా',
    sectionSubtitle: 'You focus on running your business. We handle the 30-day feed layout, daily publishing, stories, and customer interactions.',
    sectionSubtitleTe: 'మీరు మీ వ్యాపారాన్ని చూసుకోండి. సోషల్ మీడియా నిర్వహణ మొత్తం మా బాధ్యత.',
    operationalItems: [
      {
        number: '01',
        title: '30-Day Curated Visual Grid Preview',
        titleTe: '30 రోజుల ముందుగానే అప్రూవ్డ్ గ్రిడ్ లేఅవుట్',
        description: 'A complete aesthetic layout approved 5 days before the month begins so you always know what is posting with zero surprises.',
        descriptionTe: 'నెల ప్రారంభానికి ముందే మొత్తం 30 రోజుల పోస్ట్‌ల ప్లాన్‌ను చూపిస్తాము.',
        deliverables: ['Color-harmonized feed aesthetics', 'High-end brand polish and visual balance', 'Pre-approved copy and hashtags'],
        deliverablesTe: ['ప్రీమియం బ్రాండ్ లుక్', 'ముందుగానే ఆమోదించబడిన కాపీ & హ్యాష్‌ట్యాగ్స్', 'ఎటువంటి ఆఖరి నిమిషం గందరగోళం లేదు']
      },
      {
        number: '02',
        title: 'Peak-Hour Publishing Execution',
        titleTe: 'పీక్ సమయాల్లో రోజువారీ పబ్లిషింగ్',
        description: 'Publishing daily at peak East Godavari browsing hours: 1:00–2:30 PM (lunch break) and 7:30–10:00 PM (evening leisure) for maximum organic reach.',
        descriptionTe: 'స్థానికులు ఎక్కువగా ఫోన్ చూసే సమయాల్లో (మధ్యాహ్నం 1-2:30 & రాత్రి 7:30-10:00) పోస్ట్‌లు పెడతాము.',
        deliverables: ['Algorithm-optimized posting times', 'Consistent daily active footprint', 'Multi-platform synchronization across Instagram & Facebook'],
        deliverablesTe: ['అల్గారిథమ్ ఆధారిత సమయాలు', 'రోజూ యాక్టివ్‌గా ఉండే ఖాతా', 'ఇన్‌స్టాగ్రామ్ & ఫేస్‌బుక్ రెండింటిలోనూ పోస్టింగ్']
      },
      {
        number: '03',
        title: 'Interactive Daily Story Sequences',
        titleTe: 'ఆకట్టుకునే రోజువారీ ఇన్‌స్టాగ్రామ్ స్టోరీలు',
        description: 'Engaging polls, behind-the-scenes glimpses, customer reposts, and festival offers that keep your brand on top of followers minds.',
        descriptionTe: 'పోల్స్, క్వశ్చన్ స్టిక్కర్స్, కస్టమర్ రివ్యూలు మరియు ఆఫర్లతో రోజూ స్టోరీల పబ్లిషింగ్.',
        deliverables: ['Interactive polls & question stickers', 'Showroom atmosphere glimpses', 'Customer review & testimonial reposts'],
        deliverablesTe: ['ఇంటరాక్టివ్ పోల్స్ & స్టిక్కర్లు', 'షోరూమ్ వాతావరణం విజువల్స్', 'కస్టమర్ టెస్టిమోనియల్స్ రీపోస్టింగ్']
      },
      {
        number: '04',
        title: 'Bio & WhatsApp Catalog Optimization',
        titleTe: 'ప్రొఫైల్ బయో & వాట్సాప్ కాటలాగ్ లింకింగ్',
        description: 'Clean regional bio featuring your exact address, Google Maps directions link, showroom phone button, and direct WhatsApp catalog.',
        descriptionTe: 'షోరూమ్ చిరునామా, గూగుల్ మ్యాప్స్ లింక్, ఫోన్ నంబర్ మరియు వాట్సాప్ కాటలాగ్‌తో పర్ఫెక్ట్ బయో.',
        deliverables: ['Clear brand positioning statement', 'Direct showroom directions button', 'Seamless one-tap WhatsApp contact link'],
        deliverablesTe: ['స్పష్టమైన బ్రాండ్ సమాచారం', 'డైరెక్ట్ గూగుల్ మ్యాప్స్ బటన్', 'ఒక్క ట్యాప్‌తో వాట్సాప్ చాట్ లింక్']
      }
    ],
    workflowEyebrow: 'THE HANDS-OFF PUBLISHING CALENDAR',
    workflowTitle: 'How your feed runs on autopilot every month',
    workflowTitleTe: 'ప్రతినెలా ఆటోపైలట్ విధానంలో పబ్లిషింగ్',
    workflowSubtitle: 'We work 30 days ahead so your channels stay polished, dynamic, and engaging without demanding your personal time.',
    workflowSubtitleTe: 'మీ సమయం ఏమాత్రం వృధా కాకుండా ఖాతా ఎప్పుడూ యాక్టివ్‌గా ఉండేలా చూస్తాము.',
    workflowSteps: [
      { step: '01', timeline: 'Days 1–25', title: 'Next Month’s Grid Strategy & Design', titleTe: 'వచ్చే నెల పోస్ట్‌ల ముందస్తు డిజైన్', description: 'Creating all graphics, reels, and Telugu captions for the upcoming month tailored to regional festival dates.', descriptionTe: 'పండుగలకు అనుగుణంగా వచ్చే నెలకు కావలసిన మొత్తం కంటెంట్‌ను ముందుగానే సిద్ధం చేస్తాము.' },
      { step: '02', timeline: 'Days 26–28', title: 'Complete Feed Preview & Client Approval', titleTe: 'క్లయింట్ రివ్యూ & సులభమైన అప్రూవల్', description: 'You review the visual grid on your phone with a simple WhatsApp thumbs-up approval.', descriptionTe: 'మీ మొబైల్‌లోనే మొత్తం గ్రిడ్ చూసి సులభంగా అప్రూవ్ చేసుకోవచ్చు.' },
      { step: '03', timeline: 'Daily', title: 'Scheduled Peak-Time Publishing', titleTe: 'పీక్ సమయాల్లో ఆటోమేటెడ్ పోస్టింగ్', description: 'Auto-publishing posts, reels, and stories at exact high-engagement windows.', descriptionTe: 'కస్టమర్లు ఎక్కువగా చూసే ఖచ్చితమైన సమయాల్లో పోస్ట్‌లు ఆటోమేటిక్‌గా పబ్లిష్ అవుతాయి.' },
      { step: '04', timeline: 'Weekly', title: 'Story Engagement & Reach Tuning', titleTe: 'రీచ్ & ఎంగేజ్‌మెంట్ పర్యవేక్షణ', description: 'Monitoring follower growth, profile visits, and direct message inquiries to refine creative topics.', descriptionTe: 'ప్రొఫైల్ విజిట్స్ మరియు ఫాలోవర్ల పెరుగుదలను బట్టి వ్యూహాన్ని మెరుగుపరుస్తాము.' }
    ],
    specialFeature: {
      tag: 'HANDS-OFF GUARANTEE',
      title: 'Zero Time Burden on Business Owners',
      titleTe: 'వ్యాపారవేత్తలకు సమయం ఆదా',
      description: 'No panicked morning WhatsApp messages asking what to post today. We work 30 days ahead so your social presence remains active, authoritative, and elegant while you focus on sales.',
      descriptionTe: 'ఈరోజు ఏం పోస్ట్ చేయాలనే టెన్షన్ మీకు ఉండదు. మేము 30 రోజుల ముందుగానే ప్లాన్ చేసి మీ బ్రాండ్‌ను అగ్రస్థానంలో ఉంచుతాము.',
      bullets: [
        '100% pre-scheduled feed approved before the month begins',
        'Daily active stories capturing local showroom atmosphere',
        'Complete bio and Google Maps integration to drive footfalls'
      ],
      bulletsTe: [
        'నెల ప్రారంభానికి ముందే సిద్ధమైన కంటెంట్ క్యాలెండర్',
        'షోరూమ్ వాతావరణాన్ని ప్రతిబింబించే రోజువారీ స్టోరీలు',
        'కస్టమర్లు సులభంగా షాప్‌కు రావడానికి గూగుల్ మ్యాప్స్ లింక్'
      ]
    }
  },

  'platform-coverage': {
    sectionTitle: 'The Google Maps Local 3-Pack Ranking System',
    sectionTitleTe: 'గూగుల్ మ్యాప్స్ టాప్ 3 ర్యాంకింగ్ సిస్టమ్',
    sectionSubtitle: 'Over 70% of local buying decisions in Rajahmundry start with a Google Maps search. Here is how we make you the undisputed first choice.',
    sectionSubtitleTe: 'రాజమండ్రిలో 70% మంది కస్టమర్లు గూగుల్ మ్యాప్స్ చూసి షాప్‌కు వస్తారు. మీ షాప్‌ను మొదటి స్థానంలో నిలబెట్టే పద్ధతి ఇది.',
    operationalItems: [
      {
        number: '01',
        title: 'Google Business Profile Deep Audit & Geo-Tagging',
        titleTe: 'గూగుల్ ప్రొఫైల్ ఆడిట్ & జియో-ట్యాగింగ్',
        description: 'Optimizing primary categories, secondary services, opening hours, and embedding exact GPS coordinates (17.0005° N, 81.8040° E).',
        descriptionTe: 'సరైన కేటగిరీలు, సర్వీసులు మరియు మీ షాప్ ఖచ్చితమైన GPS లొకేషన్‌తో ప్రొఫైల్ సెటప్.',
        deliverables: ['Full profile verification & category audit', 'Exact latitude/longitude metadata injection', 'Optimized bilingual product/service catalog'],
        deliverablesTe: ['ప్రొఫైల్ వెరిఫికేషన్ & కేటగిరీ ఆప్టిమైజేషన్', 'ఖచ్చితమైన GPS లొకేషన్ వివరాలు', 'ద్విభాషా ప్రోడక్ట్/సర్వీస్ కాటలాగ్']
      },
      {
        number: '02',
        title: 'Physical NFC & QR 5-Star Review Counter Stands',
        titleTe: 'కౌంటర్ వద్ద పెట్టే ఫిజికల్ NFC & QR స్టాండ్',
        description: 'Heavy-duty tabletop acrylic stands for your billing desk or reception. Customers tap or scan to open your 5-star Google review form instantly.',
        descriptionTe: 'కస్టమర్లు బిల్లింగ్ కౌంటర్ వద్ద స్కాన్ చేసి వెంటనే 5-స్టార్ రివ్యూ ఇచ్చేలా ప్రీమియం QR స్టాండ్.',
        deliverables: ['Custom branded acrylic NFC/QR tabletop stand', 'Instant one-tap Google review link generation', 'Post-purchase review automation guidance'],
        deliverablesTe: ['కస్టమ్ బ్రాండెడ్ యాక్రిలిక్ QR స్టాండ్', 'ఒక్క ట్యాప్‌తో 5-స్టార్ రేటింగ్ పేజీ', 'కస్టమర్ల నుండి రివ్యూలు పొందే గైడెన్స్']
      },
      {
        number: '03',
        title: 'Directory Citations & 100% NAP Consistency',
        titleTe: 'స్థానిక డైరెక్టరీలు & NAP ఖచ్చితత్వం',
        description: 'Matching Name, Address, and Phone number across Justdial, Sulekha, IndiaMART, and regional business directories to build Google domain trust.',
        descriptionTe: 'జస్ట్‌డయల్, సులేఖ వంటి అన్ని డైరెక్టరీలలో మీ పేరు, చిరునామా, ఫోన్ నంబర్ ఒకేలా ఉండేలా సరిచేస్తాము.',
        deliverables: ['Consistent NAP citations across 20+ local platforms', 'Duplicate profile cleanup and removal', 'Location authority backlinking'],
        deliverablesTe: ['20+ లోకల్ ప్లాట్‌ఫారమ్‌లలో ఒకే విధమైన సమాచారం', 'డూప్లికేట్ ప్రొఫైల్స్ తొలగింపు', 'గూగుల్ నమ్మకాన్ని పెంచే లింకింగ్']
      },
      {
        number: '04',
        title: 'Weekly Geo-Tagged Photo Updates',
        titleTe: 'వారపు జియో-ట్యాగ్డ్ ఫోటోల అప్‌లోడ్',
        description: 'Fresh photos of your storefront, team, and products with embedded metadata to signal continuous active operation to Google algorithms.',
        descriptionTe: 'మీ షాప్, టీమ్ మరియు కొత్త ప్రోడక్ట్‌ల ఫోటోలను వారానికోసారి గూగుల్‌లో అప్‌లోడ్ చేస్తాము.',
        deliverables: ['Metadata-rich storefront & product images', 'Weekly Google Updates publishing promotions', 'Algorithm freshness signals maintained'],
        deliverablesTe: ['హై-క్వాలిటీ షాప్ & ప్రోడక్ట్ ఫోటోలు', 'వారపు ఆఫర్ అప్‌డేట్స్ పబ్లిషింగ్', 'గూగుల్ అల్గారిథమ్‌లో టాప్ స్థానం']
      }
    ],
    workflowEyebrow: 'THE LOCAL SEO RANKING BLUEPRINT',
    workflowTitle: 'The 30-day path to Google Maps Local 3-Pack',
    workflowTitleTe: '30 రోజుల్లో గూగుల్ మ్యాప్స్ టాప్ 3 ర్యాంకింగ్ మార్గం',
    workflowSubtitle: 'A structured local search sequence that moves your listing above competitors for top buying queries in East Godavari.',
    workflowSubtitleTe: 'రాజమండ్రిలో కస్టమర్లు వెతికినప్పుడు మీ షాప్ మొదటి వరుసలో కనిపించేలా పక్కా పద్ధతి.',
    workflowSteps: [
      { step: '01', timeline: 'Days 1–7', title: 'Profile Claiming & Verification Audit', titleTe: 'ప్రొఫైల్ ఆడిట్ & సమాచారం సరిచేత', description: 'Resolving category mismatches, fixing wrong pin drops, and ensuring exact business name matching.', descriptionTe: 'తప్పుగా ఉన్న లొకేషన్ పిన్, కేటగిరీలను సరిచేసి ప్రొఫైల్‌ను పూర్తిస్థాయిలో వెరిఫై చేస్తాము.' },
      { step: '02', timeline: 'Days 8–15', title: 'Counter Stand Deployment & Review Sprint', titleTe: 'కౌంటర్ QR స్టాండ్ ఇన్‌స్టాలేషన్', description: 'Installing the physical QR stand at your billing desk and launching a focused review sprint among loyal customers.', descriptionTe: 'మీ బిల్లింగ్ కౌంటర్ వద్ద QR స్టాండ్ పెట్టి నిజమైన కస్టమర్ల నుండి 5-స్టార్ రివ్యూలు సేకరిస్తాము.' },
      { step: '03', timeline: 'Days 16–23', title: 'Regional Directory Citations & NAP Sync', titleTe: 'డైరెక్టరీలలో డేటా సమకాలీకరణ', description: 'Publishing consistent business citations across Justdial, Sulekha, and Andhra business directories.', descriptionTe: 'స్థానిక డైరెక్టరీలలో మీ సమాచారాన్ని సరిచేసి గూగుల్ అల్గారిథమ్ గుర్తింపు పొందేలా చేస్తాము.' },
      { step: '04', timeline: 'Days 24–30', title: 'Local 3-Pack Capture & Inbound Call Growth', titleTe: 'టాప్ 3 ర్యాంక్ & కస్టమర్ల కాల్స్ రాక', description: 'Tracking ranking movements for keywords like "best showroom near me" and monitoring incoming phone calls.', descriptionTe: 'కీవర్డ్స్ ర్యాంకింగ్ పరిశీలించి నేరుగా వచ్చే కస్టమర్ల కాల్స్ మరియు డైరెక్షన్స్ సంఖ్యను ట్రాక్ చేస్తాము.' }
    ],
    specialFeature: {
      tag: 'LOCAL REPUTATION',
      title: 'Automated In-Store 5-Star Review Acquisition',
      titleTe: 'నిజమైన 5-స్టార్ రివ్యూల సేకరణ కిట్',
      description: 'We don’t just advise you to get reviews. We supply physical branded acrylic QR stands for your billing counter that make it completely frictionless for satisfied customers to leave a 5-star rating before stepping out.',
      descriptionTe: 'మేము మాటలు మాత్రమే చెప్పము. మీ కౌంటర్ వద్ద పెట్టే ప్రీమియం QR స్టాండ్‌ను మేమే అందిస్తాము, దీని ద్వారా కస్టమర్లు సులభంగా 5-స్టార్ రివ్యూ ఇస్తారు.',
      bullets: [
        'Custom heavy-duty acrylic NFC/QR stand for your billing counter',
        'Direct link bypasses complicated search steps directly to 5-star form',
        'Ranks your listing above competitors who have fewer detailed reviews'
      ],
      bulletsTe: [
        'మీ బిల్లింగ్ కౌంటర్ కోసం ప్రత్యేకమైన యాక్రిలిక్ QR స్టాండ్',
        'కస్టమర్లు శ్రమ లేకుండా నేరుగా 5-స్టార్ రివ్యూ ఇచ్చే లింక్',
        'ఎక్కువ రివ్యూలు రావడం వల్ల మీ షాప్ గూగుల్‌లో టాప్‌లో ఉంటుంది'
      ]
    }
  },

  'content-operations': {
    sectionTitle: 'Digital Operations & Rapid Turnaround Infrastructure',
    sectionTitleTe: 'కంటెంట్ ఆపరేషన్స్ & వేగవంతమైన సర్వీస్',
    sectionSubtitle: 'Built for multi-branch retailers and growing enterprises that require structured asset organization and urgent revision turnarounds.',
    sectionSubtitleTe: 'మల్టీ-బ్రాంచ్ షోరూమ్‌లు మరియు వేగంగా పెరిగే సంస్థల కోసం ప్రత్యేకమైన క్లౌడ్ సిస్టమ్.',
    operationalItems: [
      {
        number: '01',
        title: 'Private Centralized Cloud Asset Drive',
        titleTe: 'సెంట్రలైజ్డ్ క్లౌడ్ అసెట్ డ్రైవ్',
        description: 'All 4K video clips, raw shoot photography, logos, and vector assets organized cleanly by month and category in a private cloud folder.',
        descriptionTe: 'మీ ఫోటోలు, 4K వీడియోలు, లోగోలు అన్నీ ఒకే క్లౌడ్ డ్రైవ్‌లో నెలలవారీగా పదిలంగా ఉంటాయి.',
        deliverables: ['Organized Google Drive/Cloud storage structure', 'Instant searchability of historical festival assets', 'Full lifetime ownership of all raw project files'],
        deliverablesTe: ['వ్యవస్థీకృత క్లౌడ్ స్టోరేజ్', 'పాత పండుగల ఫోటోలు సులభంగా వెతికే సదుపాయం', 'అన్ని రా ఫైల్స్‌పై పూర్తి యాజమాన్యం']
      },
      {
        number: '02',
        title: 'Rapid Urgent Revision Support',
        titleTe: 'వేగవంతమైన అర్జెంట్ రివిజన్ సపోర్ట్',
        description: 'Flash sale notices, sudden stock arrivals, or price changes published rapidly for retainer clients with direct access to your designer.',
        descriptionTe: 'అర్జెంట్ ఆఫర్లు, కొత్త స్టాక్ రాక లేదా ధరల మార్పులను వేగంగా డిజైన్ చేసి పబ్లిష్ చేస్తాము.',
        deliverables: ['Priority queue for unexpected promotional updates', 'Fast turnaround on flash announcements', 'Direct WhatsApp line to designer desk'],
        deliverablesTe: ['అర్జెంట్ అప్‌డేట్స్‌కు మొదటి ప్రాధాన్యత', 'ఫ్లాష్ ఆఫర్లకు వేగవంతమైన డెలివరీ', 'డిజైనర్‌తో నేరుగా వాట్సాప్ కనెక్ట్']
      },
      {
        number: '03',
        title: 'Pre-Scheduled Bi-Weekly Production Visits',
        titleTe: 'ముందుగానే షెడ్యూల్ చేసిన షూట్ రోజులు',
        description: 'Dedicated shoot days booked on your calendar so fresh content is perpetually banked 30 days ahead of festival shopping seasons.',
        descriptionTe: 'మీ క్యాలెండర్‌లో ముందే ఖరారు చేసిన తేదీల్లో షూటింగ్ నిర్వహించి కంటెంట్‌ను సిద్ధంగా ఉంచుతాము.',
        deliverables: ['Advance filming calendar alignment', 'Zero disruption to daily store operating hours', 'Perpetual 30-day creative inventory in reserve'],
        deliverablesTe: ['ముందస్తు ఫిల్మింగ్ క్యాలెండర్', 'రోజువారీ బిజినెస్‌కు ఎటువంటి ఆటంకం లేకుండా షూట్', 'ఎప్పుడూ 30 రోజుల కంటెంట్ రిజర్వ్‌లో ఉంటుంది']
      },
      {
        number: '04',
        title: 'Multi-Branch Graphic Customization',
        titleTe: 'మల్టీ-బ్రాంచ్ కస్టమ్ డిజైన్లు',
        description: 'Adapting master creatives with localized phone numbers and addresses for Rajahmundry, Kakinada, and Vizag branches.',
        descriptionTe: 'రాజమండ్రి, కాకినాడ, వైజాగ్ బ్రాంచ్‌ల కోసం వేర్వేరు ఫోన్ నంబర్లు మరియు అడ్రస్‌లతో క్రియేటివ్స్ తయారీ.',
        deliverables: ['Branch-specific localized creative variations', 'Consistent brand guidelines across all regional locations', 'Multi-location media asset distribution'],
        deliverablesTe: ['బ్రాంచ్ ఆధారిత క్రియేటివ్ వేరియేషన్స్', 'అన్ని బ్రాంచ్‌లలో ఒకే విధమైన బ్రాండ్ ప్రమాణాలు', 'సహజమైన లొకేషన్ పంపిణీ']
      }
    ],
    workflowEyebrow: 'THE CONTENT OPERATIONS PROTOCOL',
    workflowTitle: 'How we keep production running seamlessly',
    workflowTitleTe: 'కంటెంట్ ఆపరేషన్స్ నడిచే విధానం',
    workflowSubtitle: 'Structured operational workflows and shared cloud infrastructure designed to eliminate agency bottlenecks completely.',
    workflowSubtitleTe: 'ఏజెన్సీ ఆలస్యం లేకుండా పక్కాగా నడిచే ప్రొడక్షన్ సిస్టమ్.',
    workflowSteps: [
      { step: '01', timeline: 'Day 1', title: 'Private Cloud Hub Provisioned', titleTe: 'ప్రైవేట్ క్లౌడ్ హబ్ సెటప్', description: 'Shared folders established for brand guidelines, typography, past photography, and monthly drops.', descriptionTe: 'మీ బ్రాండ్ కోసం ప్రత్యేకమైన క్లౌడ్ ఫోల్డర్స్ సెటప్ చేసి అందుబాటులో ఉంచుతాము.' },
      { step: '02', timeline: 'Bi-Weekly', title: 'On-Site Production Shoot Execution', titleTe: 'క్రమం తప్పకుండా ఆన్-సైట్ షూటింగ్', description: 'Production team captures fresh products and store walkthroughs according to the pre-approved schedule.', descriptionTe: 'షెడ్యూల్ ప్రకారం మా టీమ్ కొత్త స్టాక్ మరియు షోరూమ్ విజువల్స్ షూట్ చేస్తుంది.' },
      { step: '03', timeline: 'Continuous', title: 'Urgent Edits via Rapid Desk', titleTe: 'అర్జెంట్ ఎడిట్స్ సపోర్ట్', description: 'Emergency sale notices, pricing tweaks, or inventory changes processed rapidly via direct desk access.', descriptionTe: 'ఎమర్జెన్సీ ఆఫర్లు లేదా ధరల మార్పులను తక్షణమే చేసి లైవ్‌లోకి తెస్తాము.' },
      { step: '04', timeline: 'Monthly', title: 'Archival & Asset Cleanliness Review', titleTe: 'నెలవారీ అసెట్ రివ్యూ & ఆర్కైవల్', description: 'Cataloging all approved master files and pruning working drafts so storage remains lightning-fast.', descriptionTe: 'అన్ని మాస్టర్ ఫైల్స్‌ను భద్రపరిచి భవిష్యత్తు కోసం సిద్ధంగా ఉంచుతాము.' }
    ],
    specialFeature: {
      tag: 'OPERATIONAL RELIABILITY',
      title: 'Agile Flash Promotion Support',
      titleTe: 'అర్జెంట్ ఫ్లాష్ ప్రమోషన్ సపోర్ట్',
      description: 'Running a weekend flash sale, sudden stock clearance, or celebrating a festival announcement? Send the details on WhatsApp, and your creative is turned around swiftly and scheduled without delay.',
      descriptionTe: 'వారాంతపు ఆఫర్ లేదా అకస్మాత్తుగా వచ్చిన కొత్త స్టాక్ వివరాలను వాట్సాప్‌లో పంపితే, వేగంగా ఆకర్షణీయమైన పోస్టర్ సిద్ధమై మీ చేతికి వస్తుంది.',
      bullets: [
        'Dedicated senior designer assigned directly to your business account',
        'Direct priority WhatsApp creative desk with zero ticketing bureaucracy',
        'Covers urgent social banners, WhatsApp flyers, and story announcements'
      ],
      bulletsTe: [
        'మీ బిజినెస్ కోసం ప్రత్యేకంగా ఒక సీనియర్ డిజైనర్ కేటాయింపు',
        'ఎటువంటి ఆలస్యం లేకుండా నేరుగా వాట్సాప్ ద్వారా పనులు పూర్తి',
        'సోషల్ మీడియా పోస్టర్లు, వాట్సాప్ ఫ్లైయర్స్ మరియు స్టోరీల వేగవంతమైన డెలివరీ'
      ]
    }
  },

  'community-management': {
    sectionTitle: 'The Real-Time Lead Conversion & Routing Protocol',
    sectionTitleTe: 'రియల్-టైమ్ లీడ్ కన్వర్షన్ & వాట్సాప్ రౌటింగ్',
    sectionSubtitle: 'Never lose an interested customer to slow responses. We reply to customer inquiries promptly and route high-intent leads straight to your sales team.',
    sectionSubtitleTe: 'ఆలస్యం వల్ల కస్టమర్లను కోల్పోకండి. వేగంగా స్పందించి ఆసక్తి ఉన్న లీడ్స్‌ను నేరుగా మీ సేల్స్ టీమ్‌కు పంపుతాము.',
    operationalItems: [
      {
        number: '01',
        title: 'Prompt Inquiry Response (7 Days a Week)',
        titleTe: 'వేగవంతమైన స్పందన (వారం మొత్తం)',
        description: 'Replying to Instagram DMs, Facebook messages, and Google chat while customer buying intent is active.',
        descriptionTe: 'కస్టమర్లు ధర లేదా లొకేషన్ అడిగిన వెంటనే వేగంగా స్పందించి వారిని మీ షాప్‌కు రప్పిస్తాము.',
        deliverables: ['Rapid qualification of price & location inquiries', 'Polite native Telugu and English customer service', 'Operational 7 days a week including festival weekends'],
        deliverablesTe: ['ధర మరియు లొకేషన్ వివరాలపై వేగవంతమైన సమాధానం', 'మర్యాదపూర్వకమైన తెలుగు మరియు ఇంగ్లీష్ సర్వీస్', 'పండుగల సమయాల్లో కూడా వారం మొత్తం సేవలు']
      },
      {
        number: '02',
        title: 'Instant Front-Desk WhatsApp Lead Routing',
        titleTe: 'ఫ్రంట్-డెస్క్ వాట్సాప్‌కు లీడ్ ఫార్వార్డింగ్',
        description: 'Forwarding customer name, phone number, and requested product/service directly to your showroom manager or clinic receptionist.',
        descriptionTe: 'కస్టమర్ పేరు, ఫోన్ నంబర్ మరియు వారు అడిగిన వివరాలను నేరుగా మీ మేనేజర్ వాట్సాప్‌కు పంపుతాము.',
        deliverables: ['Pre-formatted WhatsApp lead notification cards', 'Clear customer buying intent tag (High / Moderate)', 'Zero lead leakage or forgotten inquiries'],
        deliverablesTe: ['స్పష్టమైన వాట్సాప్ లీడ్ నోటిఫికేషన్', 'కస్టమర్ ఆసక్తి స్థాయి వివరాలు', 'ఎటువంటి కస్టమర్ మిస్ కాకుండా పూర్తి భద్రత']
      },
      {
        number: '03',
        title: '7-Day Spam Shield & Competitor Moderation',
        titleTe: 'స్పామ్ & కాంపిటీటర్ లింక్స్ ఫిల్టరింగ్',
        description: 'Promptly removing scam comments, offensive language, and competitor promotion links to protect your brand dignity.',
        descriptionTe: 'కామెంట్లలో వచ్చే స్పామ్, బూతులు మరియు ప్రత్యర్థుల లింకులను వెంటనే తొలగించి మీ బ్రాండ్ పరువు కాపాడతాము.',
        deliverables: ['Active comment monitoring and spam filtering', 'Automated negative keyword blocking', 'Clean, respectful brand community presentation'],
        deliverablesTe: ['నిరంతర కామెంట్ మానిటరింగ్ & స్పామ్ తొలగింపు', 'ఆటోమేటెడ్ నెగెటివ్ కీవర్డ్ బ్లాకింగ్', 'గౌరవప్రదమైన బ్రాండ్ ఇమేజ్ నిర్వహణ']
      },
      {
        number: '04',
        title: 'Professional Google Maps Review Replies',
        titleTe: 'గూగుల్ మ్యాప్స్ రివ్యూలకు ప్రొఫెషనల్ సమాధానాలు',
        description: 'Crafting thoughtful, brand-elevating responses to customer ratings in polite Telugu and English to build local trust.',
        descriptionTe: 'గూగుల్ మ్యాప్స్‌లో వచ్చే ప్రతి రివ్యూకి మర్యాదపూర్వకమైన సమాధానాలు ఇచ్చి మీ బ్రాండ్ విలువను పెంచుతాము.',
        deliverables: ['Professional response approach across customer reviews', 'Diplomatic, constructive responses to customer feedback', 'Keywords subtly woven into replies to aid Google Maps relevance'],
        deliverablesTe: ['అన్ని రివ్యూలకు ప్రొఫెషనల్ సమాధానాలు', 'ఫీడ్‌బ్యాక్ వచ్చినప్పుడు గౌరవప్రదమైన సమాధానం', 'గూగుల్ ప్రొఫైల్ బలపడేలా అనుసంధానం']
      }
    ],
    workflowEyebrow: 'THE LIVE LEAD ROUTING FLOW',
    workflowTitle: 'How an inquiry becomes a paying showroom visit',
    workflowTitleTe: 'ఎంక్వైరీ నుండి కొనుగోలు వరకు కస్టమర్ జర్నీ',
    workflowSubtitle: 'A structured, frictionless lead capture system that turns passive social scrollers into booked consultations.',
    workflowSubtitleTe: 'సోషల్ మీడియాలో చూసిన వారిని మీ షాప్‌కి వచ్చే కస్టమర్లుగా మార్చే ప్రక్రియ.',
    workflowSteps: [
      { step: '01', timeline: 'Step 1', title: 'Customer Drops Inquiry on Reel or DM', titleTe: 'కస్టమర్ ఎంక్వైరీ రాక', description: 'Customer asks: "What is the price of this wedding pattu saree and is it available in your showroom?"', descriptionTe: 'కస్టమర్ రీల్ లేదా డీఎమ్ ద్వారా ధర మరియు లభ్యత వివరాలు అడుగుతారు.' },
      { step: '02', timeline: 'Step 2', title: 'BDS Team Responds & Qualifies', titleTe: 'త్వరిత స్పందన & వివరాల సేకరణ', description: 'Our team replies politely, shares the price range, and collects the customer’s WhatsApp phone number for showroom booking.', descriptionTe: 'మా టీమ్ వెంటనే స్పందించి ధర వివరాలు చెప్పి వారి వాట్సాప్ నంబర్‌ను సేకరిస్తుంది.' },
      { step: '03', timeline: 'Step 3', title: 'Lead Routed to Showroom Manager', titleTe: 'షోరూమ్ మేనేజర్‌కు వాట్సాప్ అలర్ట్', description: 'Customer details and exact product interest forwarded instantly to your store front-desk WhatsApp.', descriptionTe: 'కస్టమర్ పేరు, ఫోన్ మరియు ఆసక్తి ఉన్న వస్తువు వివరాలు మీ మేనేజర్ వాట్సాప్‌కు చేరతాయి.' },
      { step: '04', timeline: 'Step 4', title: 'Showroom Visit & Sale Closed', titleTe: 'కస్టమర్ రాక & సేల్ పూర్తి', description: 'Your sales staff calls or messages the customer to confirm the drape is held for them, securing the in-store visit.', descriptionTe: 'మీ సేల్స్ టీమ్ కస్టమర్‌తో మాట్లాడి షోరూమ్‌కు రప్పించి వ్యాపారాన్ని పూర్తి చేస్తుంది.' }
    ],
    specialFeature: {
      tag: 'CONVERSION SPEED',
      title: 'Why Fast Inquiry Response Multiplies Local Sales',
      titleTe: 'వేగవంతమైన స్పందన సేల్స్‌ను ఎలా పెంచుతుంది?',
      description: 'When local buyers inquire about a product on Instagram, they are actively looking to buy. Replying promptly keeps customers engaged and significantly increases the likelihood of a showroom visit before they turn to competitors.',
      descriptionTe: 'కస్టమర్లు ఆసక్తి చూపిన వెంటనే సమాధానం ఇస్తే వారు మీ షాప్‌కి వచ్చే అవకాశం గణనీయంగా పెరుగుతుంది. ఆలస్యమైతే వేరే షాప్‌కు వెళ్లే ప్రమాదం ఉంది.',
      bullets: [
        'Rapid response across Instagram DMs, Facebook, and Google Chat',
        'Seamless lead transfer straight into your staff’s WhatsApp hands',
        'Full 7-day monitoring including peak Sunday and evening shopping rushes'
      ],
      bulletsTe: [
        'ఇన్‌స్టాగ్రామ్, ఫేస్‌బుక్ మరియు గూగుల్ చాట్‌లో వేగవంతమైన స్పందన',
        'మీ సిబ్బంది వాట్సాప్‌కు నేరుగా చేరే కస్టమర్ లీడ్ వివరాలు',
        'ఆదివారాలు మరియు పండుగల సమయాల్లో కూడా నిరంతర పర్యవేక్షణ'
      ]
    }
  },

  'reporting-insights': {
    sectionTitle: 'Executive Financial Transparency & Spend Audits',
    sectionTitleTe: 'పారదర్శకమైన ఆర్థిక రిపోర్టింగ్ & స్పెండ్ ఆడిట్',
    sectionSubtitle: 'No confusing marketing jargon or vanity metrics. Just a straightforward 1-page financial audit linking every ad rupee to customer inquiries.',
    sectionSubtitleTe: 'ఎటువంటి పనికిరాని పదాలు లేకుండా, మీరు పెట్టిన ప్రతి రూపాయికి ఎన్ని లీడ్స్ వచ్చాయో చూపే 1-పేజీ రిపోర్ట్.',
    operationalItems: [
      {
        number: '01',
        title: 'The 1-Page Plain-English Executive Scorecard',
        titleTe: '1-పేజీ స్పష్టమైన ఎగ్జిక్యూటివ్ స్కోర్‌కార్డ్',
        description: 'Tracking total money spent on ads, verified incoming phone calls, WhatsApp inquiries, showroom footfalls, and net cost per customer.',
        descriptionTe: 'యాడ్స్ ఖర్చు, వచ్చిన కాల్స్, వాట్సాప్ మెసేజ్‌లు మరియు ఒక్కో కస్టమర్‌కు అయిన ఖర్చు వివరాలు.',
        deliverables: ['Total ad spend audited to the exact rupee', 'Verified customer inquiry count breakdown', 'Cost-per-inquiry trend line across campaigns'],
        deliverablesTe: ['రూపాయి రూపాయి ఖర్చు లెక్కలు', 'వచ్చిన విచారణల సంఖ్య స్పష్టత', 'ఒక్కో లీడ్‌కు అయిన ఖర్చు విశ్లేషణ']
      },
      {
        number: '02',
        title: 'Bi-Weekly 20-Minute Strategy Call with Bhargav',
        titleTe: 'ఫౌండర్ భార్గవ్‌తో ప్రతినెలా 2 సమీక్షా కాల్స్',
        description: 'Direct consultation with Founder Bhargav reviewing winning hooks, pausing weak creatives, and reallocating the next 14 days media budget.',
        descriptionTe: 'ఏ వీడియోలు మంచి ఫలితాలు ఇచ్చాయో, బడ్జెట్ ఎలా మార్చాలో భార్గవ్‌తో నేరుగా సమీక్ష.',
        deliverables: ['Creative winner & loser performance autopsy', 'Next 14-day budget allocation roadmap', 'Actionable adjustments tailored to upcoming festival dates'],
        deliverablesTe: ['ఏ ప్రకటనలు క్లిక్ అయ్యాయో సమీక్ష', 'రాబోయే 14 రోజుల బడ్జెట్ ప్లాన్', 'రాబోయే పండుగలకు తగిన మార్పులు']
      },
      {
        number: '03',
        title: 'Competitor Creative & Market Share Tracking',
        titleTe: 'కాంపిటీటర్ల ప్రకటనల పర్యవేక్షణ',
        description: 'Monitoring active promotional campaigns run by competing showrooms, hospitals, or builders across East and West Godavari.',
        descriptionTe: 'స్థానిక పోటీదారులు ఏ ఆఫర్లు ఇస్తున్నారో, ఎలాంటి ప్రకటనలు చేస్తున్నారో నిరంతరం కనిపెడతాము.',
        deliverables: ['Competitor promotional hook & offer spy audits', 'Market positioning gaps identified to exploit', 'Pricing and discount counter-strategies proposed'],
        deliverablesTe: ['పోటీదారుల ఆఫర్ల విశ్లేషణ', 'మార్కెట్లో మీకున్న ప్రత్యేక అవకాశాలు', 'వారి కంటే ముందుండే వ్యూహాలు']
      },
      {
        number: '04',
        title: '100% Direct Ad Account Ownership & Transparency',
        titleTe: 'మీ యాడ్ అకౌంట్‌పై 100% మీకే పూర్తి హక్కులు',
        description: 'Your business card is billed directly by Meta and Google with zero hidden agency markups, margins, or fee inflation.',
        descriptionTe: 'మీ కార్డ్ నుండే నేరుగా మెటా/గూగుల్‌కు ఖర్చు అవుతుంది. ఏజెన్సీ మార్జిన్లు ఏమీ ఉండవు.',
        deliverables: ['All ad accounts created under your business credentials', 'Direct official receipts downloaded from Meta & Google', 'Unrestricted administrative access to all historical data'],
        deliverablesTe: ['మీ పేరు మీదే యాడ్ అకౌంట్స్ సెటప్', 'మెటా/గూగుల్ నుండి అధికారిక బిల్స్', 'మీ డేటా ఎప్పటికీ మీ సొంతం']
      }
    ],
    workflowEyebrow: 'THE BI-WEEKLY REVIEW CADENCE',
    workflowTitle: 'How we track and multiply your return on spend',
    workflowTitleTe: 'ప్రతి 14 రోజులకు రివ్యూ మరియు రీ-ఇన్వెస్ట్‌మెంట్',
    workflowSubtitle: 'A structured review cycle that ensures your marketing dollars are continually reallocated into the top-performing creative angles.',
    workflowSubtitleTe: 'మంచి ఫలితాలు ఇచ్చే ప్రకటనలకే బడ్జెట్ వెళ్లేలా క్రమం తప్పకుండా సమీక్ష.',
    workflowSteps: [
      { step: '01', timeline: 'Day 14', title: 'Automated 1-Page Spend Export', titleTe: '14వ రోజు ఆటోమేటెడ్ స్పెండ్ ఆడిట్', description: 'Aggregating Meta ad spend, Google Maps calls, and WhatsApp conversion counts into a clear single-page summary.', descriptionTe: 'ఖర్చు మరియు వచ్చిన లీడ్స్ వివరాలతో స్పష్టమైన 1-పేజీ నివేదిక తయారీ.' },
      { step: '02', timeline: 'Day 15', title: '20-Minute Strategy Sprint with Bhargav', titleTe: 'ఫౌండర్ భార్గవ్‌తో 20 నిమిషాల కాల్', description: 'Reviewing performance on Zoom or phone to discuss real showroom sales and verify cost per walk-in.', descriptionTe: 'వాస్తవంగా ఎంతమంది కస్టమర్లు వచ్చారో తెలుసుకుని తదుపరి ప్లాన్ చర్చిస్తాము.' },
      { step: '03', timeline: 'Day 16', title: 'Media Budget Reallocation', titleTe: 'బడ్జెట్ రీ-ఎలొకేషన్', description: 'Shifting marketing rupees from underperforming channels into the exact video reels driving footfalls.', descriptionTe: 'ఎక్కువ మందిని ఆకర్షించే వీడియోలకే బడ్జెట్‌ను మళ్లిస్తాము.' },
      { step: '04', timeline: 'Day 30', title: 'Monthly Cumulative ROI Reconciliation', titleTe: 'నెలవారీ పూర్తి ROI నివేదిక', description: 'Comparing total customer acquisition cost against previous quarters to verify sustained business growth.', descriptionTe: 'గత నెలలతో పోల్చి మీ బిజినెస్ ఎంత పురోగతి సాధించిందో లెక్క తేలుస్తాము.' }
    ],
    specialFeature: {
      tag: 'FINANCIAL INTEGRITY',
      title: 'Zero Agency Markups on Your Ad Spend',
      titleTe: 'యాడ్ బడ్జెట్‌పై ఎటువంటి కమిషన్ ఉండదు',
      description: 'Unlike metro agencies that inflate ad costs or take a percentage cut of your budget, you pay Meta and Google directly using your own business card. Our advice is always 100% unbiased and strictly focused on your net profit.',
      descriptionTe: 'కొన్ని ఏజెన్సీలలాగా మేము యాడ్ బడ్జెట్‌పై కమీషన్ తీసుకోము. మీ కార్డుతోనే నేరుగా ఖర్చు చేస్తారు, కాబట్టి మా సలహాలు ఎల్లప్పుడూ మీ లాభం కోసమే ఉంటాయి.',
      bullets: [
        'Complete administrative ownership of your Meta and Google Ad accounts',
        'Direct GST invoicing from Meta & Google to claim local tax credits',
        'Bi-weekly founder sprint calls to review verified business revenue'
      ],
      bulletsTe: [
        'మెటా మరియు గూగుల్ అకౌంట్లపై మీకు పూర్తి యాజమాన్యం',
        'పన్ను ఆదా కోసం నేరుగా మీకే అందే అధికారిక GST ఇన్వాయిస్‌లు',
        'ప్రతి 14 రోజులకు ఫౌండర్‌తో నేరుగా సమీక్షా సమావేశాలు'
      ]
    }
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  pageId,
  language = 'en',
  onNavigate,
  onOpenQuoteModal
}) => {
  const isTe = language === 'te';
  const service = servicesList.find((s) => s.id === pageId) || servicesList[0];

  const currentIndex = servicesList.findIndex((s) => s.id === service.id);
  const prevService = servicesList[(currentIndex - 1 + servicesList.length) % servicesList.length];
  const nextService = servicesList[(currentIndex + 1) % servicesList.length];
  const logos = serviceLogoMap[service.id] || [];
  const heroImg = serviceHeroImageMap[service.id] || serviceHeroImageMap['content-creation'];
  const proofList = serviceCaseProofListMap[service.id] || serviceCaseProofListMap['content-creation'];
  const flow = serviceBespokeFlows[service.id] || serviceBespokeFlows['content-creation'];

  return (
    <div id={`service-detail-${service.id}`} className="bg-[#fafaf9] min-h-screen text-stone-900 selection:bg-blue-600 selection:text-white">
      
      {/* =========================================================================
          01 — EDITORIAL SERVICE HERO WITH HIGH-RESOLUTION PRODUCTION PHOTOGRAPHY
          ========================================================================= */}
      <section className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Breadcrumb & Navigation Bar */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isTe ? 'అన్ని సర్వీసులు' : 'All Services'}</span>
            </button>

            {/* Platform Logos */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-stone-400 font-bold uppercase tracking-wider hidden sm:inline">
                Platforms:
              </span>
              <div className="flex items-center gap-1.5">
                {logos.map((logo, lIdx) => {
                  const LogoComp = logo.component;
                  return (
                    <div
                      key={lIdx}
                      title={logo.label}
                      className="p-1.5 rounded-lg bg-stone-50 border border-stone-200/80 shadow-2xs"
                    >
                      <LogoComp className="w-4 h-4" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero Content Split: Typography on Left | Production Photograph on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Deep Editorial Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  0{currentIndex + 1}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
                  {service.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-2xl font-bold text-blue-600 leading-snug">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl pt-1">
                {service.description}
              </p>

              {/* Standout Metric Strip & Actions */}
              <div className="pt-4 border-t border-stone-100 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-stone-950">
                    {service.highlightMetric}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-stone-500 uppercase tracking-wide">
                    {service.highlightMetricLabel}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-6 py-3.5 rounded-xl bg-stone-950 hover:bg-blue-600 text-white font-extrabold text-sm transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>{isTe ? 'ఉచిత గ్రోత్ ప్లాన్ పొందండి' : 'Get Free Growth Plan'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I would like to discuss ' + service.title + ' for my business in Rajahmundry.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-sm border border-stone-300 transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <WhatsAppLogo className="w-4 h-4" />
                    <span>{isTe ? 'వాట్సాప్‌లో మాట్లాడండి' : 'Chat on WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Authentic Production Photography Showcase */}
            <div className="lg:col-span-5 space-y-2">
              <div className="overflow-hidden rounded-2xl border border-stone-200/90 shadow-sm aspect-[4/3] bg-stone-100">
                <img
                  src={heroImg.src}
                  alt={service.title}
                  width={560}
                  height={420}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <p className="text-[11px] font-mono text-stone-500 flex items-center justify-between px-1">
                <span className="truncate">{isTe ? heroImg.captionTe : heroImg.caption}</span>
                <span className="shrink-0 text-stone-400 ml-2">BDS Studio</span>
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          02 — BESPOKE SERVICE SCOPE & WHAT ACTUALLY GETS DONE (Card-Free)
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Sticky Context */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                01 / {isTe ? 'ఖచ్చితమైన స్కోప్' : 'CONCRETE DELIVERABLES'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
                {isTe ? flow.sectionTitleTe : flow.sectionTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                {isTe ? flow.sectionSubtitleTe : flow.sectionSubtitle}
              </p>
            </div>

            {/* Right Editorial Divided Rows */}
            <div className="lg:col-span-8 divide-y divide-stone-200">
              {flow.operationalItems.map((item, idx) => (
                <div key={idx} className="py-8 first:pt-0 last:pb-0 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {item.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-950">
                      {isTe ? item.titleTe : item.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {isTe ? item.descriptionTe : item.description}
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(isTe ? item.deliverablesTe : item.deliverables).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — BESPOKE SERVICE EXECUTION TIMELINE (Bespoke Workflow, NO CARDS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Context */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                02 / {flow.workflowEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
                {isTe ? flow.workflowTitleTe : flow.workflowTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                {isTe ? flow.workflowSubtitleTe : flow.workflowSubtitle}
              </p>
            </div>

            {/* Right Divided Step Progression */}
            <div className="lg:col-span-8 divide-y divide-stone-200">
              {flow.workflowSteps.map((step, sIdx) => (
                <div key={sIdx} className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                  <div className="sm:col-span-3">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      STEP {step.step}
                    </span>
                    <p className="text-[11px] font-mono text-stone-400 font-bold mt-0.5">
                      {step.timeline}
                    </p>
                  </div>
                  <div className="sm:col-span-9 space-y-1">
                    <h3 className="text-lg font-black text-stone-950">
                      {isTe ? step.titleTe : step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {isTe ? step.descriptionTe : step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — BESPOKE REGIONAL ADVANTAGE / LOCAL DIFFERENTIATOR (Card-Free)
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-stone-200/80 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                {flow.specialFeature.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
                {isTe ? flow.specialFeature.titleTe : flow.specialFeature.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isTe ? flow.specialFeature.descriptionTe : flow.specialFeature.description}
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-stone-200">
              {(isTe ? flow.specialFeature.bulletsTe : flow.specialFeature.bullets).map((bullet, bIdx) => (
                <div key={bIdx} className="py-4 first:pt-0 last:pb-0 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-stone-900">{bullet}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — LOCAL PROOF & CASE RESULTS (Editorial Narrative & Campaign Imagery)
          ========================================================================= */}
      {service.sampleWorkPreview.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                  03 / {isTe ? 'క్యాంపెయిన్ బ్లూప్రింట్స్' : 'CAMPAIGN BLUEPRINTS'}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
                  {isTe ? 'స్థానిక వ్యాపారాల కోసం క్యాంపెయిన్ మోడల్స్' : 'Execution blueprints for regional brands.'}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                  {isTe
                    ? 'రాజమండ్రి మరియు ఈస్ట్ గోదావరి వ్యాపారాల కోసం రూపొందించిన ప్రాక్టికల్ మార్కెటింగ్ మోడల్స్.'
                    : 'Sample creative direction and campaign frameworks designed for businesses across Rajahmundry and East Godavari.'}
                </p>
              </div>

              <div className="lg:col-span-8 divide-y divide-stone-200">
                {service.sampleWorkPreview.map((sample, samIdx) => (
                  <div key={samIdx} className="py-8 first:pt-0 last:pb-0 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-600">
                        CONCEPT 0{samIdx + 1}
                      </span>
                      <span className="text-xs font-mono text-stone-400 font-bold uppercase">
                        · {sample.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-950">
                      {sample.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {sample.description}
                    </p>
                    <div className="pt-1 text-sm font-bold text-blue-600 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{sample.impact}</span>
                    </div>

                    {/* Regional Campaign Visual Proof */}
                    {(() => {
                      const sampleProof = proofList[samIdx] || proofList[0];
                      return (
                        <div className="pt-2 space-y-2">
                          <div className="overflow-hidden rounded-2xl border border-stone-200/90 shadow-sm aspect-[16/10] bg-stone-100">
                            <img
                              src={sampleProof.src}
                              alt={sampleProof.client}
                              width={640}
                              height={400}
                              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="flex items-center justify-between text-xs text-stone-500 px-1">
                            <span className="font-bold text-stone-900">{sampleProof.client}</span>
                            <span className="text-blue-600 font-bold">{sampleProof.result}</span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          06 — SERVICE FAQS (Clean Borderless Editorial Q&A, NO CARDS)
          ========================================================================= */}
      {service.faqs.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                  04 / {isTe ? 'ప్రశ్నలు & సమాధానాలు' : 'CLEAR ANSWERS'}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
                  {isTe ? 'స్పష్టమైన సమాధానాలు' : 'Frequently asked questions.'}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                  {isTe
                    ? 'సేవ ప్రారంభించడానికి ముందు వ్యాపారవేత్తలు అడిగే ముఖ్య ప్రశ్నలు.'
                    : 'Straightforward answers to the real questions business owners ask before partnering with us.'}
                </p>
              </div>

              <div className="lg:col-span-8 divide-y divide-stone-200">
                {service.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="py-6 first:pt-0 last:pb-0 space-y-2">
                    <h3 className="text-base sm:text-lg font-black text-stone-950">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          07 — SERVICE NAVIGATION STRIP (Clean Linear Switcher, NO CARDS)
          ========================================================================= */}
      <section className="py-8 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              onNavigate(prevService.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isTe ? 'మునుపటి సర్వీస్' : 'Previous'}: {prevService.shortTitle}</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
          >
            {isTe ? 'అన్ని 7 సర్వీసులు చూడండి' : 'View All 7 Services'}
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigate(nextService.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <span>{isTe ? 'తరువాతి సర్వీస్' : 'Next'}: {nextService.shortTitle}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          08 — FINAL CONSULTATION CTA (Matching Homepage Aesthetic, NO CARDS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-8">
          
          {/* Founder Visual Seal */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-stone-300 shadow-md bg-stone-900">
                <img
                  src={asset('assets/Bhargav_Headshot.png')}
                  alt="Bhargav - Founder, BDS"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" title="Direct Access" />
            </div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Bhargav · Founder, BDS
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {isTe ? 'ప్రారంభించండి' : 'START WITH CONFIDENCE'}
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              {isTe ? (
                <>మీ వ్యాపారానికి {service.title} ప్లాన్‌ను రూపొందిద్దాం.</>
              ) : (
                <>Ready to roll out {service.title} for your business?</>
              )}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
              {isTe
                ? 'ఎటువంటి అమ్మకాల ఒత్తిడి ఉండదు. భార్గవ్‌తో నేరుగా మాట్లాడి మీ వ్యాపారానికి రాజమండ్రిలో ఏ విధానం సరిపోతుందో ఉచితంగా తెలుసుకోండి.'
                : 'No sales pressure, no marketing fluff. Just a straightforward conversation with Founder Bhargav about what works in Rajahmundry and how to get real results.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal(service.title)}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-stone-950 hover:bg-blue-600 text-white font-extrabold text-sm transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isTe ? 'ఉచిత గ్రోత్ ప్లాన్ పొందండి' : `Get Free ${service.shortTitle} Plan`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent('Hi Bhargav, I would like to discuss ' + service.title + ' for my business in Rajahmundry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-stone-300 hover:border-stone-900 text-stone-950 font-extrabold text-sm transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <WhatsAppLogo className="w-4 h-4 shrink-0" />
              <span>{isTe ? 'వాట్సాప్‌లో మాట్లాడండి' : `Chat on WhatsApp: ${companyInfo.phoneDisplay}`}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};


