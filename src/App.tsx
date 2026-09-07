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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Synchronize hash with page state for authentic multi-page URL navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
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

      if (hash && validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
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
        return (
          <PricingPage
            language={language}
            onNavigate={handleNavigate}
            onOpenQuoteModal={(plan) => handleOpenQuoteModal(plan)}
          />
        );
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
