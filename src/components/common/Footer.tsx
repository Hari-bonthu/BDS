import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Linkedin
} from 'lucide-react';
import { BDSLogo } from './BDSLogo';
import { companyInfo } from '../../data/companyData';
import { servicesList } from '../../data/servicesData';
import { PageId } from '../../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const getNavHref = (page: PageId): string => {
    if (page === 'home') return '/';
    if (servicesList.some((s) => s.id === page)) return `/services/${page}/`;
    return `/${page}/`;
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-site-footer" className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Brand Logo & Tagline (4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('home');
                }}
                className="inline-block focus:outline-none"
                aria-label="Bhargav Digital Solutions Homepage"
              >
                <BDSLogo size="md" variant="full" className="brightness-0 invert opacity-95 hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Full-service digital marketing, local SEO, and video advertising built specifically for businesses in Rajahmundry, East Godavari, and Coastal Andhra Pradesh.
            </p>

            <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
              Digital Today, Grow Tomorrow
            </p>

            {/* Official Social Media Links */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhargav Digital Solutions on Instagram"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-700 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhargav Digital Solutions on Facebook"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-700 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhargav Digital Solutions on YouTube"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-700 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhargav Digital Solutions on LinkedIn"
                className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-700 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="/services/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services');
                  }}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Services Hub
                </a>
              </li>
              <li>
                <a
                  href="/portfolio/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('portfolio');
                  }}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Results &amp; Proof
                </a>
              </li>

              <li>
                <a
                  href="/about/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('about');
                  }}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  About &amp; Founder
                </a>
              </li>
              <li>
                <a
                  href="/insights/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('insights');
                  }}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Marketing Insights
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: 7 Core Services Deep Dives (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Agency Services
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              {servicesList.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={`/services/${srv.id}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(srv.id);
                    }}
                    className="hover:text-cyan-400 transition-colors block py-0.5 truncate"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details & Rajahmundry Office (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Rajahmundry Office
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-white transition-colors font-semibold text-stone-200"
                >
                  {companyInfo.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-stone-800 text-stone-400 text-xs">
                <Clock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Bhargav Digital Solutions (BDS). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <a
              href="/privacy/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('privacy');
              }}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/terms/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('terms');
              }}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <span>·</span>
            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenQuoteModal('Footer')}
              className="hover:text-blue-400 transition-colors font-semibold cursor-pointer"
            >
              Get a Free Growth Plan
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
