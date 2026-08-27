import { Link } from 'wouter';
import { motion, useReducedMotion } from 'framer-motion';
import {
  HeartHandshake,
  Sparkles,
  Search,
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  Scale,
  Target,
  PenLine,
  Eye,
  Send,
  ArrowRight,
  Building2,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroCarousel } from '@/components/home/hero-carousel';
import { BRAND_NAME, CTA } from '@/lib/brand';
import { useListTestimonials } from '@workspace/api-client-react';

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const METHOD = [
  { step: '01', title: 'Discover', body: 'Identify relevant tender and procurement opportunities.', icon: Search },
  { step: '02', title: 'Qualify', body: 'Assess eligibility, capability, geography, capacity and commercial fit.', icon: ClipboardCheck },
  { step: '03', title: 'Decode', body: 'Analyse the specification, requirements and evaluation criteria.', icon: FileSearch },
  { step: '04', title: 'Strategise', body: 'Develop the bid strategy and evidence plan.', icon: Target },
  { step: '05', title: 'Write', body: 'Create clear, compliant, evaluator-focused responses.', icon: PenLine },
  { step: '06', title: 'Red Team', body: 'Critically review the submission before the evaluator does.', icon: Eye },
  { step: '07', title: 'Submit & Improve', body: 'Final checks, submission support and learning from outcomes.', icon: Send },
];

const WHO = [
  { title: 'Care Providers', href: '/sectors/care', icon: HeartHandshake },
  { title: 'Domiciliary Care Agencies', href: '/sectors/care', icon: HeartHandshake },
  { title: 'Supported Living Providers', href: '/sectors/care', icon: HeartHandshake },
  { title: 'Residential Care Providers', href: '/sectors/care', icon: HeartHandshake },
  { title: 'Cleaning Companies', href: '/sectors/cleaning', icon: Sparkles },
  { title: 'School Cleaning Contractors', href: '/sectors/cleaning', icon: Sparkles },
  { title: 'Healthcare Cleaning Providers', href: '/sectors/cleaning', icon: Sparkles },
  { title: 'Facilities Management Businesses', href: '/sectors/cleaning', icon: Sparkles },
];

const PILLARS = [
  { title: 'Sector Specialisation', body: 'Focused on UK care and cleaning tendering.' },
  { title: 'Buyer-Focused', body: 'Responses aligned with published evaluation criteria.' },
  { title: 'Evidence-Led', body: 'Important claims supported by relevant evidence.' },
  { title: 'Compliance-First', body: 'Requirements checked carefully before submission.' },
  { title: 'Strategic', body: 'We assess whether the opportunity is worth pursuing.' },
  { title: 'End-to-End', body: 'Support from discovery through to submission.' },
];

const ALONE = [
  'Finding tenders yourself',
  'Reading specifications',
  'Checking eligibility',
  'Building evidence',
  'Writing responses',
  'Managing deadlines',
  'Checking compliance',
  'Reviewing scoring criteria',
];

const WITH_US = [
  'Opportunity discovery',
  'Eligibility assessment',
  'Bid strategy',
  'Evidence mapping',
  'Professional writing',
  'Compliance checks',
  'Red-team review',
  'Submission support',
];

const CARE_SCORE = ['Safeguarding', 'Person-centred care', 'Staffing', 'Training', 'Quality', 'Outcomes', 'Risk', 'Continuity', 'CQC readiness', 'Social value', 'Mobilisation'];
const CLEAN_SCORE = ['Methodology', 'Staffing', 'TUPE', 'COSHH', 'Quality assurance', 'Health & Safety', 'Environmental management', 'Mobilisation', 'KPIs', 'Social value'];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { data: testimonialsData } = useListTestimonials();
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

  return (
    <>
      <HeroCarousel />

      {/* Trust */}
      <section className="border-b bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-secondary" />
            <div>
              <p className="font-semibold text-primary">UK Registered Company</p>
              <p className="text-sm text-muted-foreground">Professional UK Bid &amp; Tender Support</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
            {BRAND_NAME} supports care providers, cleaning businesses and SMEs through discovery, qualification, strategy, writing and review — so operational expertise becomes evaluator-ready evidence.
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Who We Help</h2>
            <p className="text-muted-foreground text-lg">
              If you deliver care or cleaning services in the UK and want to compete for public-sector work, this is for you.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHO.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border bg-card p-5 hover:border-secondary/50 hover:shadow-md transition-all"
              >
                <item.icon className="h-6 w-6 text-secondary mb-3" />
                <p className="font-semibold text-primary group-hover:text-secondary transition-colors">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Problem</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Strong operational businesses often lose procurement opportunities because their expertise is not translated into compliant, evidence-led, evaluator-focused responses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Specifications are dense. Deadlines are tight. Evaluation criteria reward clarity and proof — not unspoken capability.
            </p>
          </div>
          <img src="/stock/consultant.jpg" alt="Bid consultant reviewing tender documents" className="rounded-2xl w-full h-72 object-cover" loading="lazy" />
        </div>
      </section>

      {/* Method */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">The {BRAND_NAME} Tender Method</h2>
            <p className="text-muted-foreground text-lg">
              Discover → Qualify → Strategise → Write → Review → Submit → Improve
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {METHOD.map((m, i) => (
              <motion.div
                key={m.step}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-xl border bg-card p-5 hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold tracking-widest text-secondary">{m.step}</span>
                  <m.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care + Cleaning */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Care Tender Services</h2>
            <p className="text-primary-foreground/80 mb-5 leading-relaxed">
              Support for domiciliary care, supported living, residential and nursing care, reablement, day services and community support — covering safeguarding, staffing, outcomes, mobilisation and social value.
            </p>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/sectors/care">Explore Care Tendering</Link>
            </Button>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Cleaning &amp; FM Tenders</h2>
            <p className="text-primary-foreground/80 mb-5 leading-relaxed">
              Support for commercial, school, healthcare, NHS, council and housing association cleaning — including TUPE, COSHH, method statements, KPIs and mobilisation planning.
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/sectors/cleaning">Explore Cleaning Tendering</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Readiness + Assess */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-card p-8">
            <ShieldCheck className="h-8 w-8 text-secondary mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-3">Are You Tender Ready?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Check policies, capacity, experience and systems before you invest in a submission. Indicative scoring — not an official procurement decision.
            </p>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href={CTA.readiness.href}>{CTA.readiness.label}</Link>
            </Button>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <Scale className="h-8 w-8 text-accent mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-3">Have You Found a Tender?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Before you spend time and resources preparing a bid, let {BRAND_NAME} help you determine whether the opportunity is worth pursuing.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={CTA.assess.href}>Assess My Tender</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Opportunities teaser */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-3">Tender Opportunities</h2>
            <p className="text-muted-foreground text-lg">
              Explore how we match care and cleaning opportunities — then ask us to assess fit before you bid.
            </p>
          </div>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/tender-opportunities">{CTA.opportunities.label}</Link>
          </Button>
        </div>
      </section>

      {/* Alone vs us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
            Tendering Alone vs Working With {BRAND_NAME}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border p-7 bg-card">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-muted-foreground" /> Doing It Alone
              </h3>
              <ul className="space-y-3">
                {ALONE.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-muted-foreground/50">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-7">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5 text-secondary" /> Working With {BRAND_NAME}
              </h3>
              <ul className="space-y-3">
                {WITH_US.map((item) => (
                  <li key={item} className="text-sm text-foreground/80 flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What buyers score */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Buyers Actually Score</h2>
          <p className="text-primary-foreground/80 mb-10 max-w-2xl">
            Evaluation criteria vary by tender — but these themes appear repeatedly in care and cleaning procurement.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4 text-secondary">Care</h3>
              <div className="flex flex-wrap gap-2">
                {CARE_SCORE.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 text-accent">Cleaning</h3>
              <div className="flex flex-wrap gap-2">
                {CLEAN_SCORE.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Why {BRAND_NAME}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border bg-card p-6"
              >
                <p className="text-xs font-bold text-secondary mb-2">0{i + 1}</p>
                <h3 className="font-semibold text-lg text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No-bid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-4">Not Every Tender Is Worth Bidding</h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {BRAND_NAME} considers eligibility, capability, contract size, geography, capacity, experience, requirements, competition, commercial viability and strategic fit.
          </p>
          <div className="flex flex-wrap gap-3">
            {['BID', 'BID WITH CONDITIONS', 'NO-BID'].map((label) => (
              <span key={label} className="rounded-lg border bg-card px-4 py-2 text-sm font-semibold text-primary">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Red team */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <img src="/stock/bidwrite.jpg" alt="Reviewing a tender response" className="rounded-2xl w-full h-72 object-cover" loading="lazy" />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Red-Team Your Tender Before the Evaluator Does</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We stress-test compliance, evaluation alignment, evidence strength, clarity, unsupported claims and scoring risk before you submit.
            </p>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href={CTA.redTeam.href}>{CTA.redTeam.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Weak vs strong */}
      <section className="py-16 md:py-20 bg-card border-y">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-3">Weak vs Strong Bid Responses</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Illustrative scores only — not actual evaluator scores. Strong answers follow Claim → Method → Evidence → Measurement → Outcome.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Generic response</p>
              <p className="text-sm text-muted-foreground mb-4 italic">
                “We provide high-quality care and always put service users first…”
              </p>
              <p className="font-semibold text-primary">Illustrative score: 4/10</p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-accent mb-2">Evidence-led response</p>
              <p className="text-sm text-foreground/80 mb-4 italic">
                “We deliver person-centred support through named keyworkers, monthly outcome reviews and documented safeguarding pathways, measured against agreed KPIs…”
              </p>
              <p className="font-semibold text-primary">Illustrative score: 9/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from API only */}
      {testimonials.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-8">What Clients Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.slice(0, 6).map((t) => (
                <div key={t.id} className="rounded-xl border bg-card p-6">
                  <p className="text-sm italic text-foreground/80 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-sm">{t.clientName}</p>
                  <p className="text-xs text-muted-foreground">{t.companyName}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resources + FAQ CTAs */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-card p-8">
            <h2 className="text-2xl font-bold text-primary mb-3">Blog &amp; Resources</h2>
            <p className="text-muted-foreground mb-5">Practical guidance on care tendering, cleaning procurement and bid strategy.</p>
            <Link href="/resources" className="inline-flex items-center gap-2 text-secondary font-semibold">
              Browse resources <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <h2 className="text-2xl font-bold text-primary mb-3">FAQs</h2>
            <p className="text-muted-foreground mb-5">Clear answers on process, eligibility, CQC support, TUPE and pricing conversations.</p>
            <Link href="/faqs" className="inline-flex items-center gap-2 text-secondary font-semibold">
              Read FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a clearer tender decision?</h2>
          <p className="text-primary-foreground/85 text-lg mb-8">
            Assess your tender, check readiness, or speak with {BRAND_NAME} about strategy and writing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href={CTA.assess.href}>{CTA.assess.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
              <Link href={CTA.strategy.href}>{CTA.strategy.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
