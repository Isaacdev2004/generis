import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Heart, Shield, Users, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CARE_TYPES = [
  'Domiciliary care',
  'Supported living',
  'Residential care',
  'Nursing care',
  'Reablement',
  'Day services',
  'Community support',
  'Specialist care',
  "Children's services (where applicable)",
];

const BUYER_THEMES = [
  {
    icon: Shield,
    title: 'Safeguarding',
    body: 'How you identify, report and escalate concerns — and how governance keeps people safe every day.',
  },
  {
    icon: Heart,
    title: 'Person-centred care',
    body: 'Choice, dignity, outcomes and care planning that reflect the individual, not a generic template.',
  },
  {
    icon: Users,
    title: 'Staffing & training',
    body: 'Recruitment, supervision, competency frameworks and continuity of care that buyers scrutinise closely.',
  },
  {
    icon: ClipboardCheck,
    title: 'CQC readiness language',
    body: 'How registered providers evidence quality, ratings where held, and continuous improvement — without overstating status.',
  },
];

export default function CareSector() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/care.jpg" alt="Care worker supporting a client" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-care-sector-title">
              Care Tendering
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Bid support for UK care providers pursuing local authority, NHS and framework opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Built for how care contracts are actually evaluated</h2>
            <p className="text-muted-foreground leading-relaxed">
              Care buyers look beyond polished prose. They score safeguarding culture, person-centred practice, staffing
              resilience, quality assurance, risk management, continuity of care, outcomes, partnership working,
              mobilisation and social value. {BRAND_NAME} helps you evidence those themes in the language evaluators expect.
            </p>
          </motion.div>

          <Card className="mb-12">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-semibold text-lg mb-4">Care types we support</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {CARE_TYPES.map((type) => (
                  <div key={type} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BUYER_THEMES.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="h-full hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mb-10 bg-muted/40">
            <CardContent className="p-6 sm:p-8 space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Quality & risk:</strong> We help articulate your QA cycles, incident
                learning, medication and risk frameworks where relevant to the service specification.
              </p>
              <p>
                <strong className="text-foreground">Mobilisation & continuity:</strong> Local authorities need confidence
                you can start safely and maintain continuity for people already receiving support.
              </p>
              <p>
                <strong className="text-foreground">CQC & tenders:</strong> Where you hold registration, we help present
                status and improvement narrative accurately. {BRAND_NAME} does not claim CQC registration for itself and
                does not decide registration outcomes — see our{' '}
                <Link href={CTA.cqc.href} className="text-primary underline">CQC registration support</Link> page.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={CTA.assess.href}>{CTA.assess.label}</Link>
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
