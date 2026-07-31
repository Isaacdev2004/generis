import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('dgeneris_cookies_accepted');
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dgeneris_cookies_accepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground p-4 shadow-lg" data-testid="banner-cookie">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            We use cookies to improve your experience on our site. By continuing to browse, you accept our use of cookies.{' '}
            <a href="/cookie-policy" className="underline hover:text-accent" data-testid="link-cookie-policy">
              Learn more
            </a>
          </p>
          <Button
            onClick={handleAccept}
            className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
            data-testid="button-accept-cookies"
          >
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  );
}
