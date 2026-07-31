import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { CheckCircle2, Clock, FileText, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Initial Contact & Consultation',
    description:
      "Contact us via phone, email, or our enquiry form. We'll arrange a free 30-minute consultation to understand your tender opportunity, business capabilities, and objectives.",
  },
  {
    number: 2,
    title: 'Tender Review & Feasibility Assessment',
    description:
      'We review the tender documentation to assess complexity, compliance requirements, scoring criteria, and your suitability. We provide an honest bid/no-bid recommendation.',
  },
  {
    number: 3,
    title: 'Proposal & Agreement',
    description:
      'If we proceed, we provide a detailed proposal outlining scope, deliverables, timeline, and pricing. Upon agreement, we issue a service agreement and invoice for the deposit.',
  },
  {
    number: 4,
    title: 'Information Gathering & Planning',
    description:
      'We work with you to gather all necessary information: company details, policies, procedures, case studies, references, and evidence. We create a bid plan mapping our approach to each tender section.',
  },
  {
    number: 5,
    title: 'Drafting & Content Development',
    description:
      'Our team drafts the tender response, writing compelling, compliant content that addresses all requirements and maximizes scoring potential. We keep you informed at every stage.',
  },
  {
    number: 6,
    title: 'Client Review & Feedback',
    description:
      "We share the draft tender with you for review. You provide feedback, corrections, and additional information. We iterate until you're completely satisfied with the content.",
  },
  {
    number: 7,
    title: 'Final Quality Assurance',
    description:
      'We conduct a comprehensive final review checking compliance, word counts, formatting, document naming, and all attachments. Nothing is left to chance.',
  },
  {
    number: 8,
    title: 'Submission Support',
    description:
      'We guide you through the submission process on the relevant procurement portal, ensuring all documents are uploaded correctly and the submission is confirmed before the deadline.',
  },
  {
    number: 9,
    title: 'Post-Submission Support',
    description:
      'We remain available for clarification questions from the contracting authority. If a presentation or interview is required, we provide coaching and preparation support.',
  },
  {
    number: 10,
    title: 'Outcome & Debrief',
    description:
      'Win or lose, we request feedback from the contracting authority and conduct a debrief session with you to understand the outcome and identify learning points for future bids.',
  },
  {
    number: 11,
    title: 'Contract Award Support (if successful)',
    description:
      'If you win the contract, we can support with contract mobilization planning, policy finalization, and any documentation required before contract commencement.',
  },
  {
    number: 12,
    title: 'Continuous Improvement',
    description:
      'We maintain a record of your bids, feedback, and outcomes. This intelligence informs future tender strategies and helps us continuously improve your success rate.',
  },
];

const CLIENT_RESPONSIBILITIES = [
  'Provide accurate and timely information when requested',
  'Review draft content and provide feedback within agreed timeframes',
  'Ensure all legal, financial, and regulatory documents are current and valid',
  'Approve the final tender response before submission',
  'Handle the actual portal submission (with our guidance)',
  'Communicate any changes or issues that might affect the bid',
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/process.jpg" alt="Business process and planning" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-how-it-works-hero-title">
              How It Works
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Our proven 12-step process for winning public sector tenders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow" data-testid={`card-process-step-${i}`}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-base sm:text-lg">
                          {step.number}
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-accent flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold" data-testid="text-timeline-title">
                  Typical Project Timeline
                </h2>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Simple PQQ (1-5 pages):</strong> 3-5 working days
                    </p>
                    <p>
                      <strong className="text-foreground">Standard ITT (10-30 pages):</strong> 7-14 working days
                    </p>
                    <p>
                      <strong className="text-foreground">Complex Framework Application (30+ pages):</strong> 14-21 working days
                    </p>
                    <p className="text-sm italic">
                      Timelines depend on tender complexity, word count, and how quickly you can provide requested information. We can work to tighter deadlines where necessary (subject to rush fees).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Responsibilities */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-accent flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold" data-testid="text-responsibilities-title">
                  What We Need From You
                </h2>
              </div>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-4">
                    Successful bids are a partnership. While we handle the writing and strategy, we need your cooperation with:
                  </p>
                  <ul className="space-y-3">
                    {CLIENT_RESPONSIBILITIES.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-accent flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold" data-testid="text-confidentiality-title">
                  Confidentiality Guarantee
                </h2>
              </div>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    All information you share with us remains strictly confidential. We operate under professional non-disclosure agreements. Your business details, financial information, bid strategies, and tender content are never shared with third parties. We do not work with competing businesses in the same geographic area on the same tender opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="text-how-it-works-cta-title">
              Ready to Start Your Tender?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact us today for a free consultation and let's discuss your tender opportunity.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-how-it-works-cta">
              <Link href="/contact">BOOK A CONSULTATION</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
