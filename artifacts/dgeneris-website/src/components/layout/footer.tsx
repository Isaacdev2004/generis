import { Link } from 'wouter';
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
} from '@/lib/brand';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo.jpeg" alt={BRAND_NAME} className="h-12 w-auto rounded-md mb-3 bg-white p-1" />
            <p className="font-semibold text-lg mb-2">{BRAND_NAME}</p>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              {BRAND_TAGLINE}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Resources', '/resources'],
                ['Case Studies', '/results'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                ['Tender Discovery', '/services/tender-discovery'],
                ['Bid Writing', '/services/tender-writing'],
                ['Bid Review', '/services/bid-review'],
                ['Tender Strategy', '/services/bid-strategy'],
                ['CQC Registration Support', '/services/cqc-registration-support'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href={PHONE_HREF} className="hover:text-white transition-colors">
                  Call: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-primary-foreground/70">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/65 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© 2026 {BRAND_NAME}. All rights reserved.</p>
          <p>UK Registered Company · Professional UK Bid &amp; Tender Support</p>
        </div>
      </div>
    </footer>
  );
}
