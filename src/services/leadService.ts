/**
 * BDS Lead Delivery Pipeline Service
 * 
 * Centralized dispatcher for customer inquiries and growth plan requests.
 * Transmits leads to configured webhook / email delivery endpoint (Web3Forms, Formspree, etc.)
 * with automatic tracking context and local storage fallback.
 */

import { companyInfo } from '../data/companyData';

export interface LeadPayload {
  formType: 'growth_audit' | 'contact_form';
  name: string;
  businessName?: string;
  phone: string;
  email?: string;
  service?: string;
  budget?: string;
  goals?: string[];
  notes?: string;
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  timestamp?: string;
}

export interface SubmitLeadResult {
  success: boolean;
  error?: string;
  isConfigured?: boolean;
}

export function getTrackingContext(): {
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
} {
  if (typeof window === 'undefined') {
    return { landingPage: '/', referrer: '' };
  }
  try {
    const params = new URLSearchParams(window.location.search);
    return {
      landingPage: window.location.pathname + window.location.search,
      referrer: document.referrer || '',
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined
    };
  } catch {
    return { landingPage: '/', referrer: '' };
  }
}

export async function submitLead(payload: LeadPayload): Promise<SubmitLeadResult> {
  const tracking = getTrackingContext();
  const enrichedPayload: LeadPayload = {
    ...tracking,
    ...payload,
    timestamp: payload.timestamp || new Date().toISOString()
  };

  const endpoint = (import.meta as any).env?.VITE_FORM_ENDPOINT || 'https://api.web3forms.com/submit';
  const accessKey = (import.meta as any).env?.VITE_FORM_KEY || companyInfo.web3FormsAccessKey || '13ba520c-0e06-4d8d-a819-5a8f69a57821';

  if (!accessKey && !(import.meta as any).env?.VITE_FORM_ENDPOINT) {
    // If no form backend endpoint or key is provisioned, inform caller gracefully
    return {
      success: false,
      isConfigured: false,
      error: 'Online lead service endpoint is being configured. Please send your details directly on WhatsApp for an immediate response.'
    };
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey || undefined,
        subject: `New ${enrichedPayload.formType === 'growth_audit' ? 'Growth Plan' : 'Direct Contact'} Inquiry: ${enrichedPayload.businessName || enrichedPayload.name}`,
        from_name: 'BDS Website Lead System',
        to_email: 'bhargavdigitalsolutions@gmail.com',
        ...enrichedPayload
      })
    });

    if (res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data && typeof data.success === 'boolean' && !data.success) {
        return {
          success: false,
          error: data.message || 'Submission failed. Please reach out directly on WhatsApp.'
        };
      }

      // Dispatch analytics conversion events ONLY upon confirmed server success
      if (typeof window !== 'undefined') {
        const eventName = enrichedPayload.formType === 'growth_audit' ? 'growth_form_submit' : 'contact_form_submit';

        // GTM dataLayer push
        if (Array.isArray((window as any).dataLayer)) {
          (window as any).dataLayer.push({
            event: eventName,
            form_type: enrichedPayload.formType,
            service: enrichedPayload.service || 'general'
          });
        }

        // GA4 gtag event
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', eventName, {
            form_type: enrichedPayload.formType,
            service: enrichedPayload.service || 'general'
          });
        }
      }

      return { success: true };
    } else {
      const data = await res.json().catch(() => ({}));
      return {
        success: false,
        error: data.message || `Server responded with status ${res.status}. Please reach out on WhatsApp.`
      };
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Network error';
    return {
      success: false,
      error: `Network error: ${message}. Please connect directly on WhatsApp.`
    };
  }
}
