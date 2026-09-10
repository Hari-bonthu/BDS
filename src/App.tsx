import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/common/QuoteModal';
import { FloatingQuickActions } from './components/common/FloatingQuickActions';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
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
    return `${prefix}/services/${page}`;
  }

  return `${prefix}/${page}`;
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
    const metaMap: Record<string, { title: string; desc: string; canonical: string }> = {
      home: {
        title: 'Bhargav Digital Solutions (BDS) | Digital Marketing Agency in Rajahmundry',
        desc: 'Full-service affordable digital marketing agency in Rajahmundry, East Godavari. Specializing in Telugu Reels, Meta Ads, Social Media Management, and Google Maps Local SEO.',
        canonical: 'https://bhargavdigitalsolutions.com/'
      },
      services: {
        title: 'Digital Marketing Services in Rajahmundry | Bhargav Digital Solutions',
        desc: 'Explore 7 core growth services: Telugu Reels, Video Ads, Google Maps Local SEO, Social Media Management, and ROI Reporting in Rajahmundry & East Godavari.',
        canonical: 'https://bhargavdigitalsolutions.com/services'
      },
      pricing: {
        title: 'Custom Digital Marketing Packages | Bhargav Digital Solutions, Rajahmundry',
        desc: 'BDS quotes every project based on your specific business goals. Contact us for a free consultation and get a tailored digital marketing package for your Rajahmundry business.',
        canonical: 'https://bhargavdigitalsolutions.com/pricing'
      },
      portfolio: {
        title: 'Client Case Studies & Verified Results in Rajahmundry | BDS',
        desc: 'Proven growth case studies: Sri Srinivasa Silks (+180% showroom walk-ins), Smile Craft Dental (#1 on Google Maps), Godavari Meadows (240+ verified buyer leads).',
        canonical: 'https://bhargavdigitalsolutions.com/portfolio'
      },
      insights: {
        title: 'Regional Marketing Playbooks & Local SEO Guides | Andhra Pradesh | BDS',
        desc: 'Actionable marketing guides and local SEO strategies for businesses, clinics, and showrooms in Rajahmundry, Kakinada, and Coastal Andhra.',
        canonical: 'https://bhargavdigitalsolutions.com/insights'
      },
      about: {
        title: 'About Bhargav Digital Solutions | Founder Story & Philosophy | Rajahmundry',
        desc: 'Meet Founder Bhargav and learn why BDS was built in Danavaipeta to challenge high-ticket metro agencies with authentic regional marketing.',
        canonical: 'https://bhargavdigitalsolutions.com/about'
      },
      contact: {
        title: 'Contact Bhargav Digital Solutions | Danavaipeta, Rajahmundry | Free Consultation',
        desc: 'Visit our office on Main Road Danavaipeta, call +91 97043 80535, or chat on WhatsApp to schedule your free 20-minute digital marketing strategy consultation.',
        canonical: 'https://bhargavdigitalsolutions.com/contact'
      },
      'short-form-video-ads': {
        title: 'Viral Instagram Reels & High-ROAS Meta Ads in Rajahmundry | BDS',
        desc: 'Native Telugu video scripting, on-location 4K shooting in Rajahmundry, viral reels editing, and Meta Ads Manager setup with proven low cost per lead.',
        canonical: 'https://bhargavdigitalsolutions.com/services/short-form-video-ads'
      },
      'content-creation': {
        title: 'Bilingual Social Media Creatives & Ads Design | Rajahmundry | BDS',
        desc: 'High-resolution Telugu and English post designs, festival campaign banners, educational carousels, and custom brand graphics for businesses in Rajahmundry & East Godavari.',
        canonical: 'https://bhargavdigitalsolutions.com/services/content-creation'
      },
      'social-media-management': {
        title: '100% Hands-Off Social Media Growth Agency | Rajahmundry | BDS',
        desc: 'Daily feed posting, Instagram Stories, local hashtag research, bio optimization, and organic follower acceleration for Godavari businesses.',
        canonical: 'https://bhargavdigitalsolutions.com/services/social-media-management'
      },
      'platform-coverage': {
        title: 'Google Maps 3-Pack & Local SEO Dominance | Rajahmundry | BDS',
        desc: 'Rank #1 on Google Maps in Rajahmundry. Google Business Profile optimization, local keyword geo-tagging, citation syncing across 40+ directories.',
        canonical: 'https://bhargavdigitalsolutions.com/services/platform-coverage'
      },
      'content-operations': {
        title: 'Centralized Digital Asset Management & 24h Turnaround | Rajahmundry | BDS',
        desc: 'Cloud asset library for all brand media, 30-day advance rolling content calendar, and 4-hour emergency promo turnaround for flash sales.',
        canonical: 'https://bhargavdigitalsolutions.com/services/content-operations'
      },
      'community-management': {
        title: 'Under 15-Minute Lead Handling & WhatsApp Triage | Rajahmundry | BDS',
        desc: '7-day direct message and comment monitoring, instant WhatsApp lead routing to owner, and automated 5-star Google review collection funnels.',
        canonical: 'https://bhargavdigitalsolutions.com/services/community-management'
      },
      'reporting-insights': {
        title: 'Plain-English Monthly ROI Reports & Strategy Sprints | Rajahmundry | BDS',
        desc: 'Transparent monthly PDF dashboards tracking ad spend vs verified revenue attribution, with monthly 1-on-1 strategy sprints with Founder Bhargav.',
        canonical: 'https://bhargavdigitalsolutions.com/services/reporting-insights'
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
            onOpenQuoteModal={() => handleOpenQuoteModal()}
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

      {/* Floating Action Buttons: Direct Call & WhatsApp */}
      <FloatingQuickActions
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />
    </div>
  );
}
