import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ShieldAlert, Search, FileWarning, MessageSquareWarning, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const REVIEW_AREAS = [
  {
    icon: Search,
    title: 'Compliance & criteria',
    body: 'Mandatory requirements, evaluation weightings and pass/fail gates checked against your draft.',
  },
  {
    icon: FileWarning,
    title: 'Evidence & unsupported claims',
    body: 'Assertions without proof, missing references and thin case studies are challenged before submission.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Clarity & differentiation',
    body: 'Ambiguous wording, generic answers and weak win themes are flagged for rewrite.',
  },
  {
    icon: ShieldAlert,
    title: 'Risk & gaps',
    body: 'Missing responses, attachment issues and commercial vulnerabilities highlighted with recommended fixes.',
  },
];

const DELIVERABLES = [
  'Structured red-team findings mapped to tender sections',
  'Priority fix list (must-fix vs nice-to-have)',
  'Notes on how an evaluator may interpret weak answers',
  'Optional rewrite support for high-risk questions',
];

export default function RedTeamReview() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/success.jpg" alt="Bid review before submission" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-red-team-title">
              Red-Team Your Tender Before the Evaluator Does
            </h1>
            <p className="text-lg text-primary-foreground/90">
              An adversarial review of compliance, evidence, clarity and differentiation — while you still have time to fix it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stress-test the bid, not just polish the prose</h2>
            <p className="text-muted-foreground leading-relaxed">
              A standard review improves readability. A red-team review asks harder questions: Would this score?
              Where would an evaluator withhold marks? What claims collapse without evidence? {BRAND_NAME} applies that
              lens to care and cleaning submissions before the portal deadline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {REVIEW_AREAS.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.06 }}
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
              <h3 className="font-semibold text-lg mb-4">What you receive</h3>
              <ul className="space-y-3 mb-6">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Red-team review improves submission quality. It does not guarantee a contract award — buyers make the final decision.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={CTA.contact.href}>{CTA.redTeam.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary">
              <Link href="/services/bid-review">Standard bid review</Link>
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
