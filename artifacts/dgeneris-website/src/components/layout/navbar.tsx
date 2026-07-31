import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Results', href: '/results' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" data-testid="link-home-logo">
            <img src="/logo.jpeg" alt="Dgeneris Bid & Tender Solutions" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav — visible from md (768 px) upward */}
          <nav className="hidden md:flex items-center gap-x-1 lg:gap-x-3 xl:gap-x-5 flex-1 justify-center" data-testid="nav-desktop">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-xs lg:text-sm font-medium transition-colors hover:text-primary px-1 py-1 rounded ${
                  location === link.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA button — desktop only */}
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex flex-shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 text-xs lg:text-sm px-3 lg:px-4"
            data-testid="button-book-consultation-desktop"
          >
            <Link href="/contact">BOOK A CONSULTATION</Link>
          </Button>

          {/* Hamburger — phones only (below md) */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8" data-testid="nav-mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      location === link.href ? 'text-primary' : 'text-foreground/80'
                    }`}
                    data-testid={`link-nav-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4" data-testid="button-book-consultation-mobile">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    BOOK A CONSULTATION
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
