import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type FaqItem = { question: string; answer: string };

const FAQ_GROUPS: { category: string; items: FaqItem[] }[] = [
  {
    category: 'General',
    items: [
      {
        question: 'What does Dgeneris Bids do?',
        answer: `${BRAND_NAME} provides UK bid and tender support for care providers, cleaning businesses and SMEs. That includes opportunity discovery, eligibility assessment, bid strategy, professional tender writing, bid and red-team review, and CQC registration preparation support for care providers.`,
      },
      {
        question: 'What is tender writing?',
        answer:
          'Tender writing is the process of preparing compliant, evidenced responses to public or private procurement questions — from selection questionnaires through to full invitation-to-tender submissions — so evaluators can score your capability against published criteria.',
      },
      {
        question: 'Can you help us find suitable tenders?',
        answer: `Yes. Our tender discovery support monitors UK procurement sources and shortlists opportunities that match your sector, geography and capability. You can also request matching opportunities via our tender opportunities page or ${CTA.contact.label.toLowerCase()}.`,
      },
      {
        question: 'Can you assess whether we are eligible?',
        answer: `Yes. Use Assess My Tender or contact us with the notice details. We review eligibility, scope, evaluation criteria, evidence requirements, capacity and strategic fit, then provide a bid/no-bid recommendation.`,
      },
      {
        question: 'Can you review an existing tender response?',
        answer:
          'Yes. We offer bid review for structured feedback on compliance, scoring risk and clarity, and a deeper red-team review that stress-tests evidence, unsupported claims and differentiation before submission.',
      },
      {
        question: 'Can you manage the full tender process?',
        answer: `We can support end-to-end — discovery, qualification, strategy, drafting, review and submission guidance. You remain the contracting party and typically complete the final portal submission with our checklist support.`,
      },
      {
        question: 'Do you work with SMEs?',
        answer: `Yes. ${BRAND_NAME} works with SMEs as well as established care and cleaning operators. We tailor scope to the size of the opportunity and your internal capacity.`,
      },
      {
        question: 'How long does a tender take?',
        answer:
          'Timelines depend on complexity and word count. A short selection questionnaire may take a few working days; a full ITT or framework application often needs one to three weeks of focused work, subject to how quickly information is provided and the buyer deadline.',
      },
    ],
  },
  {
    category: 'Care',
    items: [
      {
        question: 'Do you work with CQC-regulated providers?',
        answer: `Yes. We support CQC-regulated care providers to present registration status, quality narratives and governance evidence accurately in tenders. ${BRAND_NAME} does not claim to be CQC-registered itself.`,
      },
      {
        question: 'Can you support domiciliary care providers?',
        answer:
          'Yes. We support domiciliary care tenders covering safeguarding, staffing continuity, training, outcomes, mobilisation and social value responses aligned to local authority specifications.',
      },
      {
        question: 'Can you support supported living providers?',
        answer:
          'Yes. Supported living bids often emphasise independence, positive risk-taking, housing partnerships and complex needs staffing — themes we help you evidence clearly.',
      },
      {
        question: 'Can you help prepare for CQC registration?',
        answer: `We provide preparation and documentation support — for example organising application materials, Statement of Purpose content and readiness checks. We do not decide registration outcomes; those rest solely with the Care Quality Commission.`,
      },
      {
        question: 'Can you support local authority frameworks?',
        answer:
          'Yes. We support applications to local authority frameworks and DPS categories for adult social care and related services, including ongoing further-competition responses where appointed.',
      },
    ],
  },
  {
    category: 'Cleaning',
    items: [
      {
        question: 'Can you help cleaning companies win council contracts?',
        answer:
          'We help cleaning and FM businesses prepare competitive responses for council and public-building contracts — including methodology, TUPE, health & safety, KPIs and social value. We cannot guarantee a win, but we focus on maximising competitiveness.',
      },
      {
        question: 'Can you support school cleaning tenders?',
        answer:
          'Yes. School cleaning tenders typically require strong safeguarding, DBS arrangements, term-time and holiday programmes, and clear method statements — all areas we support.',
      },
      {
        question: 'Can you help with TUPE responses?',
        answer:
          'Yes. We help you describe TUPE handling, consultation, continuity and mobilisation in evaluator-friendly language. For legal advice on a live transfer, you should also consult an employment specialist.',
      },
      {
        question: 'Can you write cleaning method statements?',
        answer:
          'Yes. We draft and refine method statements covering frequencies, standards, equipment, COSHH controls, quality checks and site-specific risks aligned to the specification.',
      },
      {
        question: 'Can you help with social value requirements?',
        answer:
          'Yes. We help cleaning and FM bidders propose measurable social value commitments — local employment, training, environmental improvements and community activity — that fit what you can realistically deliver.',
      },
    ],
  },
  {
    category: 'Commercial',
    items: [
      {
        question: 'How much does tender writing cost?',
        answer: `Fees depend on tender length, complexity and deadline. After a short discussion of the documents, ${BRAND_NAME} provides a clear proposal. Contact us for a tailored quotation.`,
      },
      {
        question: 'What happens after I contact Dgeneris Bids?',
        answer:
          'We acknowledge your enquiry, clarify the opportunity and deadlines, and recommend next steps — which may include a bid/no-bid view, a scoped writing proposal, or a review/red-team engagement.',
      },
      {
        question: 'Do you guarantee tender wins?',
        answer:
          'No responsible tender consultant can guarantee that a bid will win. Dgeneris Bids focuses on maximising competitiveness through strategy, compliance, evidence and evaluator-focused responses.',
      },
      {
        question: 'What information do you need from a client?',
        answer:
          'Typically: the tender pack, company details, relevant policies and certificates, staffing and training information, case studies or contract examples, and timely feedback on drafts. The exact list depends on the opportunity.',
      },
    ],
  },
];

export default function FAQs() {
  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/faqs.jpg" alt="Frequently asked questions" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-faqs-hero-title">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Clear answers about tender support for care, cleaning and SME clients
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {FAQ_GROUPS.map((group, catIndex) => (
              <motion.div
                key={group.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.45, delay: catIndex * 0.05 }}
              >
                <h2
                  className="text-2xl font-bold mb-6 text-primary"
                  data-testid={`text-faq-category-${catIndex}`}
                >
                  {group.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {group.items.map((faq, i) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-${catIndex}-${i}`}
                      className="border rounded-lg px-6"
                      data-testid={`accordion-faq-${catIndex}-${i}`}
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Still have a question? Call{' '}
              <a href={PHONE_HREF} className="text-primary font-medium hover:underline">{PHONE_DISPLAY}</a>
              {' '}or{' '}
              <a href={WHATSAPP_HREF} className="text-secondary font-medium hover:underline" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              .
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={CTA.contact.href}>{CTA.contact.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
