import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { BDSLogo } from './BDSLogo';
import { companyInfo } from '../../data/companyData';
import { PageId } from '../../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-site-footer" className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Column 1: Brand Logo & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center">
              <BDSLogo size="md" variant="full" />
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Full-service digital marketing, local SEO, and video advertising built specifically for businesses in Rajahmundry, East Godavari, and Coastal Andhra Pradesh.
            </p>

            <p className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
              Digital Today, Grow Tomorrow
            </p>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Results (Case Studies)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pricing &amp; Packages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us &amp; Founder
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('insights')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Marketing Insights
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Rajahmundry Office (4 cols) */}
          <div className="md:col-span-4 space-y-4">
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

          <div className="flex items-center gap-4">
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
