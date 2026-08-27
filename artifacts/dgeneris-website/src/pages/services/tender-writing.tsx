import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FileEdit, ListChecks, PenLine, Layers, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DELIVERABLES = [
  {
    icon: ListChecks,
    title: 'Requirement mapping',
    body: 'Every question, schedule and attachment is mapped so nothing is missed before drafting begins.',
  },
  {
    icon: PenLine,
    title: 'Evaluator-focused drafting',
    body: 'Responses are written to the scoring criteria — clear structure, evidenced claims and sector language buyers recognise.',
  },
  {
    icon: Layers,
    title: 'PQQ through to ITT',
    body: 'From selection questionnaires to full invitation-to-tender packs, including method statements and social value narratives.',
  },
];

const INCLUDES = [
  'Compliant structure against word counts and format rules',
  'Evidence prompts and case-study framing drawn from your operations',
  'Policy and procedure alignment where the tender requires it',
  'Client review cycles before finalisation',
  'Submission checklist support for the procurement portal',
];

export default function TenderWriting() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/bidwrite.jpg" alt="Professional tender writing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-tender-writing-title">
              Tender Writing
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Professional, compliant bid responses for UK care providers, cleaning businesses and SMEs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileEdit className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Writing that reflects how you actually deliver</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Strong operations do not automatically produce strong bids. {BRAND_NAME} turns your policies, staffing model,
                  quality systems and mobilisation plans into clear answers that address what evaluators score — without
                  inventing claims or diluting your voice.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {DELIVERABLES.map((item, i) => (
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
              <h3 className="font-semibold text-lg mb-4">What a typical writing engagement includes</h3>
              <ul className="space-y-3">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-6 italic">
                {BRAND_NAME} cannot guarantee a contract award. We focus on competitiveness through strategy, compliance,
                evidence and evaluator-focused responses.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={CTA.assess.href}>{CTA.assess.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary">
              <Link href={CTA.strategy.href}>{CTA.strategy.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Questions about scope or deadlines? Call {PHONE_DISPLAY} or WhatsApp us.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="secondary">
              <a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
