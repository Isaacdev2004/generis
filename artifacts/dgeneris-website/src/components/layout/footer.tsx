import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSubscribeNewsletter } from '@workspace/api-client-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const FOOTER_LINKS = {
  'Quick Links': [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Sectors We Support', href: '/sectors' },
    { label: 'Case Studies', href: '/results' },
    { label: 'How It Works', href: '/how-it-works' },
  ],
  'Resources': [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog & Resources', href: '/resources' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact Us', href: '/contact' },
  ],
  'Legal': [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');
  const subscribe = useSubscribeNewsletter();
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    subscribe.mutate(
      { data: { email } },
      {
        onSuccess: () => {
          toast({
            title: 'Subscribed successfully',
            description: 'Thank you for subscribing to our newsletter.',
          });
          setEmail('');
        },
        onError: (error: any) => {
          toast({
            title: 'Subscription failed',
            description: error?.message || 'Please try again later.',
            variant: 'destructive',
          });
        },
      }
    );
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/logo.jpeg" alt="Dgeneris Bid & Tender Solutions" className="h-14 w-auto rounded-md" />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6">
              Expert UK bid and tender writing consultancy supporting care providers and cleaning businesses to win public-sector contracts. Professional, confidential, results-driven.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Contact Us:</p>
              <p className="text-primary-foreground/80">07453 409673</p>
              <p className="text-primary-foreground/80">07830 766260</p>
              <p className="text-primary-foreground/80">info@dgeneris.co.uk</p>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="font-semibold text-sm mb-4">Subscribe to Our Newsletter</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={subscribe.isPending}
              data-testid="button-newsletter-subscribe"
            >
              {subscribe.isPending ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2026 Dgeneris Bid & Tender Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                data-testid="link-social-x"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/447830766260"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                data-testid="link-social-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/60 mt-4 text-center md:text-left">
            Disclaimer: All case studies and results are examples based on typical scenarios. Individual outcomes may vary. We cannot guarantee specific results or contract awards.
          </p>
        </div>
      </div>
    </footer>
  );
}
