import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447830766260"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors"
      aria-label="Contact us on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
