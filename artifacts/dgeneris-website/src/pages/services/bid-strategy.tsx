import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Target, Scale, Compass, Users2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FOCUS_AREAS = [
  {
    icon: Scale,
    title: 'Bid / no-bid decisions',
    body: 'Honest assessment of eligibility, capacity, pricing pressure and competitive position before you commit resource.',
  },
  {
    icon: Compass,
    title: 'Win themes & positioning',
    body: 'Clear narrative themes that differentiate your offer — grounded in real evidence, not generic marketing copy.',
  },
  {
    icon: Users2,
    title: 'Partnership & delivery model',
    body: 'Advice on consortia, subcontracting and mobilisation structures where the contract demands wider coverage.',
  },
];

const OUTCOMES = [
  'A documented bid strategy aligned to evaluation criteria',
  'Prioritised evidence gaps and how to close them',
  'Guidance on pricing posture and commercial risks',
  'A practical writing plan for the response team',
];

export default function BidStrategy() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/consultant.jpg" alt="Bid strategy consultation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-bid-strategy-title">
              Bid Strategy
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Decide wisely, position clearly, and invest only in tenders that fit your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Strategy before word count</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Not every tender is worth pursuing. {BRAND_NAME} helps care and cleaning businesses decode evaluation
                  criteria, map evidence, and choose a competitive posture — so writing time is spent where it can make a
                  difference.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {FOCUS_AREAS.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full hover:border-secondary/50 transition-colors">
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
              <h3 className="font-semibold text-lg mb-4">Typical strategy outputs</h3>
              <ul className="space-y-3">
                {OUTCOMES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={CTA.strategy.href}>{CTA.strategy.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary">
              <Link href={CTA.readiness.href}>{CTA.readiness.label}</Link>
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Call <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE_DISPLAY}</a>
            {' '}·{' '}
            <a href={WHATSAPP_HREF} className="text-secondary hover:underline" target="_blank" rel="noreferrer">WhatsApp</a>
          </p>
        </div>
      </section>
    </>
  );
}
