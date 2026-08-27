import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FileSearch, MapPin, Filter, Bell, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PORTALS = [
  'Contracts Finder',
  'Find a Tender Service',
  'Regional procurement portals',
  'NHS and ICB procurement channels',
  'Local authority frameworks and DPS notices',
];

const MATCH_CRITERIA = [
  {
    icon: MapPin,
    title: 'Geography & coverage',
    body: 'Opportunities aligned to where you already operate — or where you can credibly mobilise.',
  },
  {
    icon: Filter,
    title: 'Capability & service fit',
    body: 'We filter by care type, cleaning specialism, contract size and regulatory readiness — not just keywords.',
  },
  {
    icon: Bell,
    title: 'Timely alerts',
    body: 'You hear about suitable notices early enough to qualify properly, not scramble at the deadline.',
  },
];

export default function TenderDiscovery() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/process.jpg" alt="Tender research and opportunity screening" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-tender-discovery-title">
              Tender Discovery
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Find UK care and cleaning opportunities that match your capability — before you invest in a full bid.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileSearch className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">Stop chasing unsuitable notices</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Public procurement portals publish a constant stream of opportunities. Many look relevant at first glance
                    but fail on eligibility, geography, capacity or commercial fit. {BRAND_NAME} monitors UK sources and
                    shortlists tenders that are worth your time — so discovery becomes a managed process, not guesswork.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {MATCH_CRITERIA.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="h-full hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <item.icon className="h-8 w-8 text-secondary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="mb-10">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-semibold text-lg mb-4">Sources we typically monitor</h3>
                <ul className="space-y-3">
                  {PORTALS.map((portal) => (
                    <li key={portal} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      {portal}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={CTA.opportunities.href}>{CTA.opportunities.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={CTA.assess.href}>{CTA.assess.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <p className="text-muted-foreground mb-6">
            Prefer to talk it through? Call{' '}
            <a href={PHONE_HREF} className="text-primary font-medium hover:underline">{PHONE_DISPLAY}</a>
            {' '}or{' '}
            <a href={WHATSAPP_HREF} className="text-secondary font-medium hover:underline" target="_blank" rel="noreferrer">
              message us on WhatsApp
            </a>
            .
          </p>
          <Button asChild variant="outline">
            <Link href={CTA.contact.href}>{CTA.contact.label}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
