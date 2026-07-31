import { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { WhatsAppButton } from './whatsapp-button';
import { CookieBanner } from './cookie-banner';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
