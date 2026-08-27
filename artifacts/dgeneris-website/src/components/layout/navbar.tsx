import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, ChevronDown, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  BRAND_NAME,
  CTA,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/brand';

const SERVICE_LINKS = [
  { label: 'Tender Discovery', href: '/services/tender-discovery' },
  { label: 'Tender Assessment', href: '/assess-my-tender' },
  { label: 'Bid Strategy', href: '/services/bid-strategy' },
  { label: 'Tender Writing', href: '/services/tender-writing' },
  { label: 'Bid Review', href: '/services/bid-review' },
  { label: 'Red-Team Review', href: '/red-team-review' },
  { label: 'Tender Readiness', href: '/tender-readiness' },
  { label: 'CQC Registration Support', href: '/services/cqc-registration-support' },
];

const SECTOR_LINKS = [
  { label: 'Care Tendering', href: '/sectors/care' },
  { label: 'Cleaning & FM', href: '/sectors/cleaning' },
];

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', children: SERVICE_LINKS },
  { label: 'Sectors', href: '/sectors', children: SECTOR_LINKS },
  { label: 'Tender Opportunities', href: '/tender-opportunities' },
  { label: 'Resources', href: '/resources' },
  { label: 'Case Studies', href: '/results' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2" data-testid="link-home-logo">
            <img src="/logo.jpeg" alt={BRAND_NAME} className="h-10 w-auto" />
            <span className="hidden sm:inline font-semibold text-primary tracking-tight">
              {BRAND_NAME}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" data-testid="nav-desktop">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative py-1"
                onMouseEnter={() => link.children && setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={link.href}
                  className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-secondary px-2 py-1 inline-flex items-center gap-1 ${
                    location === link.href || location.startsWith(link.href + '/')
                      ? 'text-secondary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                  {link.children ? <ChevronDown className="h-3.5 w-3.5" /> : null}
                </Link>
                {location === link.href && !link.children && (
                  <motion.div
                    layoutId="nav-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                {link.children && openMenu === link.label && (
                  <div className="absolute left-0 top-full pt-2 z-50">
                    <div className="min-w-[240px] rounded-lg border bg-card p-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href={PHONE_HREF}
              className="hidden xl:inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-secondary"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href={CTA.assess.href}>{CTA.assess.label}</Link>
            </Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] overflow-y-auto">
              <div className="mt-6 mb-4">
                <p className="font-semibold text-primary text-lg">{BRAND_NAME}</p>
                <a href={PHONE_HREF} className="text-sm text-secondary font-medium">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <nav className="flex flex-col gap-1" data-testid="nav-mobile">
                {NAV_LINKS.map((link) => (
                  <div key={link.href} className="border-b border-border/60 py-2">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium text-foreground block py-1"
                    >
                      {link.label}
                    </Link>
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-muted-foreground py-1.5 pl-3 hover:text-secondary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Button asChild className="bg-secondary text-secondary-foreground mt-4">
                  <Link href={CTA.assess.href} onClick={() => setMobileOpen(false)}>
                    {CTA.assess.label}
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
