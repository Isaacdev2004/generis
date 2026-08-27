import { MessageCircle } from 'lucide-react';
import { WHATSAPP_HREF } from '@/lib/brand';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      aria-label="Chat with Dgeneris Bids on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
