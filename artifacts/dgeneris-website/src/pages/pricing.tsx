import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PACKAGES = [
  {
    name: 'Tender Research',
    price: '£50+',
    description: 'Opportunity identification and monitoring',
    features: [
      'Regular monitoring of UK procurement portals',
      'Identification of relevant tender opportunities',
      'Weekly alerts on suitable contracts',
      'Basic eligibility assessment',
      'Tender calendar management',
    ],
    cta: 'GET STARTED',
  },
  {
    name: 'Bid Review',
    price: '£150+',
    description: 'Expert review of your draft tender',
    features: [
      'Comprehensive review of your draft tender',
      'Compliance and scoring assessment',
      'Improvement recommendations',
      'Gap analysis and missing evidence identification',
      'Final quality check before submission',
      'Written feedback report',
    ],
    cta: 'REQUEST A REVIEW',
    featured: true,
  },
  {
    name: 'Full Tender Writing',
    price: '£250+',
    description: 'Complete end-to-end bid support',
    features: [
      'Full tender response writing',
      'Strategic bid planning',
      'Policy and procedure development (if needed)',
      'Supporting documentation preparation',
      'Quality assurance and compliance checks',
      'Portal submission support',
      'Post-submission debrief',
    ],
    cta: 'BOOK CONSULTATION',
  },
  {
    name: 'Monthly Retainer',
    price: 'Custom',
    description: 'Ongoing support for active bidders',
    features: [
      'Priority access to our team',
      'Continuous tender monitoring',
      'Strategic planning and bid/no-bid advice',
      'Unlimited email and phone support',
      'Discounted rates on full bid writing',
      'Quarterly strategy reviews',
      'Relationship management',
    ],
    cta: 'DISCUSS RETAINER',
  },
];

const ADD_ONS = [
  'Social Value statement development (£100+)',
  'Financial standing documentation (£75+)',
  'Method statement templates (£50+ each)',
  'Policy and procedure writing (£100+ per policy)',
  'Pricing strategy consultation (£150+)',
  'Post-submission debrief and feedback analysis (£100+)',
  'Freedom of Information request support (£75+)',
  'Framework application support (custom pricing)',
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-pricing-hero-title">
              Transparent Pricing
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Clear, fair pricing for professional bid and tender support. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`h-full flex flex-col ${pkg.featured ? 'border-accent shadow-lg' : ''}`}
                  data-testid={`card-package-${i}`}
                >
                  <CardHeader>
                    {pkg.featured && (
                      <div className="text-xs font-semibold text-accent mb-2">MOST POPULAR</div>
                    )}
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={
                        pkg.featured
                          ? 'w-full bg-accent text-accent-foreground hover:bg-accent/90'
                          : 'w-full'
                      }
                      variant={pkg.featured ? 'default' : 'outline'}
                      data-testid={`button-package-${i}`}
                    >
                      <Link href="/contact">{pkg.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center" data-testid="text-addons-title">
              Optional Add-On Services
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ADD_ONS.map((addon, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{addon}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6" data-testid="text-pricing-notes-title">
                Important Pricing Information
              </h2>
              <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Pricing is indicative and project-specific:</strong> The prices shown are starting points. Final costs depend on tender complexity, word count, deadlines, and additional requirements. We provide a detailed quote after reviewing your specific tender opportunity.
                </p>
                <p>
                  <strong className="text-foreground">Free initial consultation:</strong> All new clients receive a free 30-minute consultation to discuss their needs and receive a tailored quote.
                </p>
                <p>
                  <strong className="text-foreground">Payment terms:</strong> We typically require 50% upfront payment to commence work, with the balance due upon completion and before final submission. For retainer clients, monthly invoicing applies.
                </p>
                <p>
                  <strong className="text-foreground">Rush fees:</strong> Tenders with submission deadlines within 7 days of engagement may incur a 25% rush fee. Tenders with less than 72 hours to deadline are subject to availability and a 50% rush fee.
                </p>
                <p>
                  <strong className="text-foreground">Refund policy:</strong> If we are unable to deliver the service for any reason, a full refund will be provided. Please see our{' '}
                  <Link href="/refund-policy" className="text-primary underline">
                    refund policy
                  </Link>{' '}
                  for full details.
                </p>
                <p>
                  <strong className="text-foreground">No success fees:</strong> We charge for professional services rendered, not on a success-fee basis. This ensures our advice remains objective and aligned with your best interests.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="text-pricing-cta-title">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact us for a free consultation and tailored quote for your tender opportunity.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-pricing-cta">
              <Link href="/contact">BOOK FREE CONSULTATION</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
