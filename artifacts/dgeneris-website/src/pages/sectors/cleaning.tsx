import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Sparkles, FlaskConical, FileText, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SERVICE_TYPES = [
  'Commercial and office cleaning',
  'School and education cleaning',
  'Healthcare and NHS cleaning',
  'Council and public-building cleaning',
  'Housing association cleaning',
  'Specialist and deep cleaning',
  'Industrial cleaning',
  'Window cleaning',
  'Facilities management',
];

const PROCUREMENT_THEMES = [
  {
    icon: Users,
    title: 'TUPE',
    body: 'Clear explanations of how you manage transferring staff, consultation, terms and service continuity at handover.',
  },
  {
    icon: FlaskConical,
    title: 'COSHH & H&S',
    body: 'Evidence of chemical control, risk assessments, training and safe systems of work that stand up to scrutiny.',
  },
  {
    icon: FileText,
    title: 'Method statements',
    body: 'Site-specific methodologies covering frequencies, standards, equipment, materials and quality checks.',
  },
  {
    icon: Sparkles,
    title: 'QA, KPIs & mobilisation',
    body: 'How you measure cleanliness, respond to failures, mobilise sites and manage the contract day to day.',
  },
];

export default function CleaningSector() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/cleaning.jpg" alt="Professional commercial cleaning" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-cleaning-sector-title">
              Cleaning & Facilities Management
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Tender support for cleaning and FM businesses competing for public-sector and education contracts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Written for cleaning operators, not generic suppliers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cleaning and FM tenders turn on methodology, staffing models, TUPE handling, COSHH compliance, environmental
              management, carbon reduction, social value, mobilisation and contract KPIs. {BRAND_NAME} helps you present
              those elements with operational credibility.
            </p>
          </motion.div>

          <Card className="mb-12">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-semibold text-lg mb-4">Contract types we support</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {SERVICE_TYPES.map((type) => (
                  <div key={type} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {PROCUREMENT_THEMES.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="h-full hover:border-secondary/50 transition-colors">
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
                <strong className="text-foreground">Equipment & materials:</strong> Buyers expect clarity on machinery,
                consumables, eco-friendly options and how standards are maintained across sites.
              </p>
              <p>
                <strong className="text-foreground">Environmental & social value:</strong> We help articulate waste
                reduction, product choices and community commitments that are measurable — not vague pledges.
              </p>
              <p>
                <strong className="text-foreground">Contract management:</strong> Account management, complaint handling
                and continuous improvement narratives that match how cleaning contracts are run in practice.
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
