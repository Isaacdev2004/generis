import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Shield, FileText, ClipboardList, UserCog, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SUPPORT_AREAS = [
  {
    icon: ClipboardList,
    title: 'Registration preparation',
    body: 'Help organising your provider application materials, evidence packs and readiness checks before you submit.',
  },
  {
    icon: UserCog,
    title: 'Registered Manager support',
    body: 'Guidance on preparing Registered Manager application content and supporting documentation.',
  },
  {
    icon: FileText,
    title: 'Statement of Purpose & policies',
    body: 'Support drafting and refining Statements of Purpose and core compliance documentation.',
  },
  {
    icon: Shield,
    title: 'Tender readiness alongside registration',
    body: 'Aligning registration preparation with the evidence local authorities expect in care tenders.',
  },
];

const DISCLAIMER =
  `${BRAND_NAME} provides professional preparation and documentation support only. We are not the Care Quality Commission, we do not decide registration outcomes, and we do not claim that ${BRAND_NAME} itself is CQC-registered. Registration decisions rest solely with the CQC.`;

export default function CqcRegistrationSupport() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/care.jpg" alt="Care compliance preparation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-cqc-support-title">
              CQC Registration Support
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Preparation and documentation support for care providers approaching CQC registration — not a registration decision service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex gap-3 items-start">
            <AlertCircle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-950 leading-relaxed" data-testid="text-cqc-disclaimer">
              <strong>Important disclaimer:</strong> {DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">How we help providers prepare</h2>
            <p className="text-muted-foreground leading-relaxed">
              We help care providers prepare for the CQC registration process, organise supporting documentation and
              strengthen their readiness for the relevant requirements. That preparation can also improve how clearly you
              evidence quality and governance in local authority and NHS tenders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {SUPPORT_AREAS.map((item, i) => (
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

          <Card className="mb-10">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-semibold text-lg mb-4">Support may also include</h3>
              <ul className="space-y-3">
                {[
                  'Compliance preparation checklists tailored to your service type',
                  'Registration variation preparation where appropriate',
                  'Linking registration evidence to tender readiness',
                  'Structured review of documentation completeness before you submit to the CQC',
                ].map((item) => (
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
              <Link href={CTA.contact.href}>{CTA.contact.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary">
              <Link href="/sectors/care">Care tendering</Link>
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
