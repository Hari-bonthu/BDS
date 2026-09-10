import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Phone,
  Globe
} from 'lucide-react';
import { BDSLogo } from './BDSLogo';
import { servicesList } from '../../data/servicesData';
import { companyInfo } from '../../data/companyData';
import { PageId, Language } from '../../types';

interface NavbarProps {
  currentPage: PageId;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  language,
  onToggleLanguage,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNavHref = (page: PageId): string => {
    if (page === 'home') return '/';
    if (servicesList.some((s) => s.id === page)) return `/services/${page}`;
    return `/${page}`;
  };

  const isServiceActive =
    currentPage === 'services' || servicesList.some((s) => s.id === currentPage);

  const t = {
    services: language === 'te' ? 'సర్వీసులు' : 'Services',
    results: language === 'te' ? 'Results' : 'Results',
    pricing: language === 'te' ? 'ధరలు & ప్యాకేజీలు' : 'Pricing',
    about: language === 'te' ? 'మా గురించి' : 'About',
    insights: language === 'te' ? 'Insights' : 'Insights',
    contact: language === 'te' ? 'సంప్రదించండి' : 'Contact',
    cta: language === 'te' ? 'ఉచిత Growth Plan' : 'Get a Free Growth Plan'
  };

  return (
    <header
      id="main-navigation-bar"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-2.5'
          : 'bg-[#fafaf9]/90 backdrop-blur-sm border-b border-stone-200/60 py-3.5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: BDS Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center gap-2 focus:outline-none cursor-pointer"
              aria-label="Bhargav Digital Solutions Home"
            >
              <BDSLogo size="md" variant="full" />
            </a>
          </div>

          {/* Center: Minimal Editorial Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="inline-flex items-center">
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('services');
                  }}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    isServiceActive
                      ? 'text-blue-600 bg-stone-100 font-bold'
                      : 'text-stone-700 hover:text-blue-600 hover:bg-stone-100/70'
                  }`}
                >
                  {t.services}
                </a>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  aria-label="Toggle services menu"
                  className="p-1 -ml-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1.5 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 p-2.5 space-y-1 animate-in fade-in zoom-in-95 duration-150"
                >
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('services');
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-50 font-bold text-xs text-blue-600 flex items-center justify-between border-b border-stone-100 mb-1 cursor-pointer"
                  >
                    <span>All 7 Services Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  {servicesList.map((srv) => (
                    <a
                      key={srv.id}
                      href={`/services/${srv.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(srv.id);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-50 text-xs font-semibold text-stone-800 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>{srv.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Results (points to portfolio) */}
            <a
              href="/portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('portfolio');
              }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'portfolio'
                  ? 'text-blue-600 bg-stone-100 font-bold'
                  : 'text-stone-700 hover:text-blue-600 hover:bg-stone-100/70'
              }`}
            >
              {t.results}
            </a>



            {/* About */}
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-blue-600 bg-stone-100 font-bold'
                  : 'text-stone-700 hover:text-blue-600 hover:bg-stone-100/70'
              }`}
            >
              {t.about}
            </a>

            {/* Insights */}
            <a
              href="/insights"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('insights');
              }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'insights'
                  ? 'text-blue-600 bg-stone-100 font-bold'
                  : 'text-stone-700 hover:text-blue-600 hover:bg-stone-100/70'
              }`}
            >
              {t.insights}
            </a>
          </div>

          {/* Right: Contact + Language Toggle + Action CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`px-2.5 py-1.5 text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'contact' ? 'text-blue-600 font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.contact}
            </a>

            {/* Language Switcher hidden for now: can be re-enabled later */}

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-lg text-stone-600 hover:text-emerald-600 hover:bg-stone-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onOpenQuoteModal('Growth Plan')}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-xs"
            >
              {t.cta}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Mobile Language Switcher hidden for now */}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-6 border-t border-stone-200 mt-3 space-y-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                currentPage === 'home' ? 'text-blue-600 bg-stone-100' : 'text-stone-800'
              }`}
            >
              Home
            </a>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('services');
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                currentPage === 'services' ? 'text-blue-600 bg-stone-100' : 'text-stone-800'
              }`}
            >
              {t.services}
            </a>
            <a
              href="/portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('portfolio');
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                currentPage === 'portfolio' ? 'text-blue-600 bg-stone-100' : 'text-stone-800'
              }`}
            >
              {t.results}
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                currentPage === 'about' ? 'text-blue-600 bg-stone-100' : 'text-stone-800'
              }`}
            >
              {t.about}
            </a>
            <a
              href="/insights"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('insights');
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                currentPage === 'insights' ? 'text-blue-600 bg-stone-100' : 'text-stone-800'
              }`}
            >
              {t.insights}
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                currentPage === 'contact' ? 'text-blue-600 bg-stone-100' : 'text-stone-800'
              }`}
            >
              {t.contact}
            </a>

            <div className="pt-3 border-t border-stone-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal('Growth Plan');
                }}
                className="w-full py-3 rounded-xl bg-slate-950 text-white font-bold text-sm text-center shadow-sm"
              >
                {t.cta}
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full py-2.5 rounded-xl bg-stone-100 text-stone-800 font-semibold text-xs text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call {companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
