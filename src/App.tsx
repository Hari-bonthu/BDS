import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { FloatingQuickActions } from './components/common/FloatingQuickActions';
import { FloatingDock } from './components/ui/floating-dock';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { PageId, Language } from './types';
import { servicesList } from './data/servicesData';

// Clean path mapping helper for authentic SEO URLs (no hashtags)
const getPathForPage = (page: PageId): string => {
  const isRepo = window.location.pathname.startsWith('/BDS');
  const prefix = isRepo ? '/BDS' : '';

  if (page === 'home') {
    return prefix ? `${prefix}/` : '/';
  }

  if (servicesList.some((s) => s.id === page)) {
    return `${prefix}/services/${page}/`;
  }

  return `${prefix}/${page}/`;
};

// Resolve active page from pathname or legacy hashtag
const getPageFromLocation = (): PageId => {
  const validPages: PageId[] = [
    'home',
    'services',
    'insights',
    'about',
    'pricing',
    'portfolio',
    'contact',
    'privacy',
    'terms',
    ...servicesList.map((s) => s.id)
  ];

  // 1. Check legacy hash (e.g. #portfolio, #/portfolio, #about) to migrate to clean path
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  if (rawHash) {
    const matchedHashPage = validPages.find(
      (p) => p === rawHash || (rawHash.startsWith('services/') && p === rawHash.replace('services/', ''))
    );
    if (matchedHashPage) {
      const cleanPath = getPathForPage(matchedHashPage);
      window.history.replaceState({ page: matchedHashPage }, '', cleanPath);
      return matchedHashPage;
    }
  }

  // 2. Parse clean pathname
  let pathname = window.location.pathname;

  // Strip repository subpath if hosted on GitHub Pages (e.g. /BDS)
  if (pathname.startsWith('/BDS')) {
    pathname = pathname.slice(4);
  }

  // Remove trailing slashes
  pathname = pathname.replace(/\/+$/, '');
  if (!pathname || pathname === '') {
    return 'home';
  }

  // Handle /services/:serviceId
  if (pathname.startsWith('/services/')) {
    const serviceSlug = pathname.replace('/services/', '');
    if (servicesList.some((s) => s.id === serviceSlug)) {
      return serviceSlug as PageId;
    }
    return 'services';
  }

  // Handle direct paths like /about, /portfolio, /pricing, /services, /insights, /contact
  const directSlug = pathname.replace(/^\//, '');
  if (validPages.includes(directSlug as PageId)) {
    return directSlug as PageId;
  }

  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => getPageFromLocation());
  const [language, setLanguage] = useState<Language>('en');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Synchronize browser history and popstate for authentic clean-path URL navigation
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromLocation();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic Head Metadata Synchronization for SEO & Search Crawlers
  useEffect(() => {
    const metaMap: Record<string, { title: string; desc: string; canonical: string; image?: string }> = {
      home: {
        title: 'Bhargav Digital Solutions | Digital Marketing Agency in Rajahmundry',
        desc: "Bhargav Digital Solutions is Rajahmundry's results-driven digital marketing agency specializing in Local SEO, Google Maps 3-Pack, Telugu Reels and Meta Ads.",
        canonical: 'https://www.bhargavdigitalsolutions.com/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/logo-bds.png'
      },
      services: {
        title: 'Digital Marketing Services in Rajahmundry | BDS',
        desc: 'Explore BDS digital marketing services: Local SEO, Google Maps 3-Pack, Telugu Reels, and Meta Ads for businesses in Rajahmundry and Coastal Andhra.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/campaign-silks.webp'
      },
      pricing: {
        title: 'Growth Consultation & Tailored Proposals | BDS Rajahmundry',
        desc: 'Schedule a free growth strategy consultation with Founder Bhargav. Get tailored digital marketing proposals for your Rajahmundry business.',
        canonical: 'https://www.bhargavdigitalsolutions.com/contact/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/logo-bds.png'
      },
      portfolio: {
        title: 'Digital Marketing Portfolio & Campaign Concepts | BDS',
        desc: 'Explore BDS campaign concepts and performance frameworks across Local SEO, Meta Ads, and video production for businesses in Rajahmundry.',
        canonical: 'https://www.bhargavdigitalsolutions.com/portfolio/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/campaign-silks.webp'
      },
      insights: {
        title: 'Digital Marketing & Local SEO Insights | BDS',
        desc: 'Actionable digital marketing guides, Local SEO playbooks, and video advertising strategies from Bhargav Digital Solutions in Rajahmundry.',
        canonical: 'https://www.bhargavdigitalsolutions.com/insights/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/campaign-dental.webp'
      },
      about: {
        title: 'About Bhargav Digital Solutions | BDS Rajahmundry',
        desc: 'Learn about Bhargav Digital Solutions (BDS), an agile Rajahmundry digital marketing agency providing direct founder strategy and transparent ROI.',
        canonical: 'https://www.bhargavdigitalsolutions.com/about/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/Bhargav_Headshot.webp'
      },
      contact: {
        title: 'Contact BDS | Digital Marketing Agency in Rajahmundry',
        desc: 'Contact Bhargav Digital Solutions for a free 20-minute growth session. Local SEO, Telugu Reels, and performance ad campaigns in Rajahmundry.',
        canonical: 'https://www.bhargavdigitalsolutions.com/contact/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/logo-bds.png'
      },
      privacy: {
        title: 'Privacy Policy | Bhargav Digital Solutions',
        desc: 'Read the official privacy policy of Bhargav Digital Solutions (BDS), detailing our strict commitments to visitor data protection and compliance.',
        canonical: 'https://www.bhargavdigitalsolutions.com/privacy/'
      },
      terms: {
        title: 'Terms of Service | Bhargav Digital Solutions',
        desc: 'Review the terms of service governing website use, growth consultations, and digital marketing engagements with Bhargav Digital Solutions.',
        canonical: 'https://www.bhargavdigitalsolutions.com/terms/'
      },
      'local-seo': {
        title: 'Local SEO & Google Maps 3-Pack Agency in Rajahmundry | BDS',
        desc: 'Rank #1 on Google Maps in Rajahmundry and East Godavari. Google Business Profile optimization, local citations, and 5-star review acquisition by BDS.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/local-seo/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/service-local-seo.webp'
      },
      'short-form-video-ads': {
        title: 'Targeted Instagram Reels & Performance Meta Ads in Rajahmundry | BDS',
        desc: 'Native Telugu video scripting, on-location 4K shooting in Rajahmundry, targeted reels editing, and Meta Ads Manager setup for cost-effective leads.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/short-form-video-ads/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/campaign-silks.webp'
      },
      'content-creation': {
        title: 'Bilingual Social Media Creatives & Ads Design | Rajahmundry | BDS',
        desc: 'High-resolution Telugu and English post designs, festival banners, educational carousels, and custom brand graphics for businesses in Rajahmundry.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/content-creation/'
      },
      'social-media-management': {
        title: 'Fully Managed Social Media Growth Agency | Rajahmundry | BDS',
        desc: 'Daily feed posting, Instagram Stories, local hashtag research, bio optimization, and organic follower acceleration for Godavari businesses.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/social-media-management/'
      },
      'platform-coverage': {
        title: 'Google Maps 3-Pack & Local SEO Optimization | Rajahmundry | BDS',
        desc: 'Google Maps 3-Pack optimization in Rajahmundry. Google Business Profile management, local keyword geo-tagging, and multi-platform citation syncing.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/platform-coverage/',
        image: 'https://www.bhargavdigitalsolutions.com/assets/campaign-dental.webp'
      },
      'content-operations': {
        title: 'Centralized Digital Asset Management & Agile Turnaround | Rajahmundry | BDS',
        desc: 'Cloud asset library for all brand media, 30-day advance rolling content calendar, and rapid promotional turnaround for seasonal business campaigns.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/content-operations/'
      },
      'community-management': {
        title: 'Prompt Lead Handling & WhatsApp Routing | Rajahmundry | BDS',
        desc: '7-day direct message and comment monitoring, instant WhatsApp lead routing to owner, and proactive customer reputation management in Rajahmundry.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/community-management/'
      },
      'reporting-insights': {
        title: 'Plain-English Monthly ROI Reports & Strategy Sprints | Rajahmundry | BDS',
        desc: 'Transparent monthly PDF dashboards tracking ad spend vs verified revenue attribution, with monthly 1-on-1 strategy sprints with Founder Bhargav.',
        canonical: 'https://www.bhargavdigitalsolutions.com/services/reporting-insights/'
      }
    };

    const currentMeta = metaMap[currentPage] || metaMap.home;
    document.title = currentMeta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', currentMeta.desc);
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', currentMeta.canonical);
    }

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) {
      ogTitleEl.setAttribute('content', currentMeta.title);
    }

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) {
      ogDescEl.setAttribute('content', currentMeta.desc);
    }

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) {
      ogUrlEl.setAttribute('content', currentMeta.canonical);
    }

    const twTitleEl = document.querySelector('meta[name="twitter:title"]');
    if (twTitleEl) {
      twTitleEl.setAttribute('content', currentMeta.title);
    }

    const twDescEl = document.querySelector('meta[name="twitter:description"]');
    if (twDescEl) {
      twDescEl.setAttribute('content', currentMeta.desc);
    }

    if (currentMeta.image) {
      const ogImgEl = document.querySelector('meta[property="og:image"]');
      if (ogImgEl) {
        ogImgEl.setAttribute('content', currentMeta.image);
      }
      const twImgEl = document.querySelector('meta[name="twitter:image"]');
      if (twImgEl) {
        twImgEl.setAttribute('content', currentMeta.image);
      }
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = getPathForPage(page);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setPreselectedService('');
  };

  // Determine current page render
  const renderCurrentPage = () => {
    // Check if it's one of the 7 dedicated service pages
    const isService = servicesList.some((s) => s.id === currentPage);
    if (isService) {
      return (
        <ServiceDetailPage
          pageId={currentPage}
          language={language}
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    switch (currentPage) {
      case 'services':
        return (
          <ServicesPage
            language={language}
            onNavigate={handleNavigate}
            onOpenQuoteModal={(service) => handleOpenQuoteModal(service)}
          />
        );
      case 'insights':
        return (
          <InsightsPage
            language={language}
            onNavigate={handleNavigate}
            onOpenQuoteModal={(service) => handleOpenQuoteModal(service)}
          />
        );
      case 'about':
        return (
          <AboutPage
            language={language}
            onNavigate={handleNavigate}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        );
      case 'pricing':
        // Pricing page is hidden from navigation — redirect to contact for custom quote
        handleNavigate('contact');
        return null;
      case 'portfolio':
        return (
          <PortfolioPage
            language={language}
            onNavigate={handleNavigate}
            onOpenQuoteModal={(service) => handleOpenQuoteModal(service)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            language={language}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        );
      case 'privacy':
        return (
          <PrivacyPolicyPage
            onNavigate={handleNavigate}
          />
        );
      case 'terms':
        return (
          <TermsPage
            onNavigate={handleNavigate}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            language={language}
            onNavigate={handleNavigate}
            onOpenQuoteModal={(service) => handleOpenQuoteModal(service)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        language={language}
        onToggleLanguage={setLanguage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Interactive Global Quote & Consultation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={preselectedService}
        language={language}
      />

      {/* Floating Action Buttons: Direct Call, WhatsApp & Instant FAQ Bot (Desktop) */}
      <FloatingQuickActions
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        language={language}
      />

      {/* Mobile Floating Action Dock (< 768px) */}
      <FloatingDock
        language={language}
        onNavigate={handleNavigate}
        onOpenQuoteModal={(service) => handleOpenQuoteModal(service)}
      />
    </div>
  );
}
