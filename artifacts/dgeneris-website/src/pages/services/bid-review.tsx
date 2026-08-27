import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FileCheck2, Search, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const REVIEW_LENSES = [
  {
    icon: Search,
    title: 'Compliance & completeness',
    body: 'Mandatory questions, attachments, word limits and portal requirements checked before submission risk arises.',
  },
  {
    icon: AlertTriangle,
    title: 'Scoring risk',
    body: 'Weak answers, unsupported claims and thin evidence flagged against the published evaluation criteria.',
  },
  {
    icon: Sparkles,
    title: 'Clarity & persuasion',
    body: 'Structure, readability and differentiation improved so evaluators can award marks with confidence.',
  },
];

const BEST_FOR = [
  'Drafts written in-house that need a professional critique',
  'Bids approaching deadline that require a focused improvement pass',
  'Responses where you suspect gaps but need an independent view',
  'Teams preparing for interview or clarification stages',
];

export default function BidReview() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/bidwrite.jpg" alt="Bid review and quality assurance" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-bid-review-title">
              Bid Review
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Independent critique of your draft response — before the evaluator sees it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck2 className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">A second pair of sector-aware eyes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Already drafting? {BRAND_NAME} reviews structure, compliance, evidence strength and persuasiveness —
                  then gives actionable improvements so you can strengthen the submission without starting from scratch.
                  For a deeper adversarial critique, see our{' '}
                  <Link href={CTA.redTeam.href} className="text-primary underline">Red-Team Review</Link>.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {REVIEW_LENSES.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-secondary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mb-10 bg-muted/40">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-semibold text-lg mb-4">Best suited for</h3>
              <ul className="space-y-3">
                {BEST_FOR.map((item) => (
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
              <Link href={CTA.redTeam.href}>{CTA.redTeam.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary">
              <Link href={CTA.contact.href}>{CTA.contact.label}</Link>
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE_DISPLAY}</a>
            {' '}·{' '}
            <a href={WHATSAPP_HREF} className="text-secondary hover:underline" target="_blank" rel="noreferrer">WhatsApp</a>
          </p>
        </div>
      </section>
    </>
  );
}
