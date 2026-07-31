import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  FileSearch,
  FileEdit,
  FileCheck2,
  Users,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  BookOpen,
  Phone,
  Star,
  Zap,
  Eye,
  BadgeCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useListTestimonials, useListCaseStudies } from '@workspace/api-client-react';

const SERVICES = [
  {
    icon: FileSearch,
    title: 'Tender Research & Opportunity Identification',
    description: 'We monitor UK procurement portals and identify relevant tender opportunities that match your business capabilities.',
  },
  {
    icon: FileEdit,
    title: 'Bid Writing & Tender Response',
    description: 'Professional bid writing services that showcase your strengths and meet all tender requirements with compelling, compliant submissions.',
  },
  {
    icon: FileCheck2,
    title: 'Tender Review & Quality Assurance',
    description: 'Expert review of your draft tender submissions to ensure quality, compliance, and competitiveness before submission.',
  },
  {
    icon: Target,
    title: 'PQQ/SQ Support',
    description: 'Assistance with Pre-Qualification Questionnaires and Selection Questionnaires to pass the first stage of tender processes.',
  },
  {
    icon: Users,
    title: 'Framework Applications',
    description: 'Support with applications to public sector frameworks that open doors to multiple contract opportunities.',
  },
  {
    icon: BookOpen,
    title: 'Policy & Procedure Development',
    description: 'Creation of robust policies and procedures required for tender submissions and contract delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Bid Strategy Consultancy',
    description: 'Strategic advice on which tenders to pursue, pricing strategies, and competitive positioning.',
  },
  {
    icon: Award,
    title: 'Social Value & Environmental Responses',
    description: 'Expert support with social value commitments and environmental sustainability sections increasingly required in public tenders.',
  },
  {
    icon: Shield,
    title: 'Compliance Documentation',
    description: 'Preparation of compliance documents including insurance certificates, accreditations, and regulatory evidence.',
  },
  {
    icon: Clock,
    title: 'Monthly Retainer Support',
    description: 'Ongoing bid support with priority access, strategic planning, and continuous tender monitoring.',
  },
];

const TRUST_BADGES = [
  'UK Tender Specialists',
  'Care and Cleaning Sector Focus',
  'Clear and Transparent Process',
  'Confidential Service',
  'End-to-End Bid Support',
];

const STATS = [
  { value: '100+', label: 'Tender Opportunities Reviewed' },
  { value: '50+', label: 'Bid Submissions Supported' },
  { value: '2', label: 'Specialist Sectors' },
  { value: '90%', label: 'Repeat & Referral Clients' },
];

const PROCESS_STEPS = [
  { title: 'Initial Consultation', description: 'Free consultation to understand your needs and goals' },
  { title: 'Opportunity Identification', description: 'We identify suitable tender opportunities for your business' },
  { title: 'Bid Strategy', description: 'Develop a winning strategy tailored to the tender requirements' },
  { title: 'Content Development', description: 'Professional writing and document preparation' },
  { title: 'Quality Review & Submission', description: 'Final checks and timely submission to procurement portals' },
];

const WHY_CHOOSE = [
  {
    icon: Star,
    title: 'Sector Specialists, Not Generalists',
    description: 'We work exclusively with UK care and cleaning businesses. Every framework, every buyer, every scoring methodology in your sector — we know it inside out.',
  },
  {
    icon: Eye,
    title: 'You Stay in Control',
    description: 'You review and approve every word before submission. We write the bid; you understand what you\'re committing to. No black boxes, no surprises.',
  },
  {
    icon: Zap,
    title: 'We Handle Everything',
    description: 'From finding the right tender to final submission — we manage the entire process so you can focus on running your services, not wrestling with procurement portals.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent, Honest Pricing',
    description: 'Fixed-scope pricing with no hidden fees. We tell you exactly what\'s included before any work begins, and we don\'t push you towards tenders you\'re unlikely to win.',
  },
];

const FRAMEWORKS = [
  'EEM (Efficiency East Midlands)',
  'YPO Framework',
  'Crown Commercial Service',
  'NHS Supply Chain',
  'Contracts Finder',
  'Find a Tender Service',
  'Local Authority Frameworks',
  'Care Quality Commission',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { data: testimonials = [] } = useListTestimonials();
  const { data: caseStudies = [] } = useListCaseStudies();

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <img
          src="/stock/hero.jpg"
          alt="Professional business meeting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              Stop Losing Contracts to{' '}
              <span className="text-accent">Better-Written Bids</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
              We handle the entire tender process for UK care and cleaning businesses — finding the right opportunities, writing compelling bids, and submitting on time — so you can focus on running your services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" data-testid="button-hero-get-started">
                <Link href="/contact">BOOK A FREE CONSULTATION</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-hero-discover-services">
                <Link href="/results">SEE OUR RESULTS</Link>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Free initial consultation &nbsp;·&nbsp; No upfront fees &nbsp;·&nbsp; Confidential service &nbsp;·&nbsp; UK specialists
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-muted py-4 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...TRUST_BADGES, ...TRUST_BADGES].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks Strip */}
      <section className="py-10 bg-background border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            We've Won Contracts On These Frameworks & Portals
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {FRAMEWORKS.map((fw) => (
              <span
                key={fw}
                className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary"
              >
                {fw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" data-testid={`text-stat-value-${i}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${i}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            *These are placeholder statistics for demonstration purposes. Actual results vary by client and contract type.
          </p>
        </div>
      </section>

      {/* Why Choose Dgeneris */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-accent">Dgeneris?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes us different from other bid consultancies — and why care and cleaning businesses trust us with their contracts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-l-4 border-l-accent hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-services-title">
              Our Bid & Tender Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support across every stage of the tendering process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50" data-testid={`card-service-${i}`}>
                  <CardContent className="p-6">
                    <service.icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" data-testid="button-view-all-services">
              <Link href="/services">VIEW ALL SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-sectors-title">
              Who We Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialist expertise in two high-value public procurement sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all overflow-hidden" data-testid="card-sector-care">
              <div className="h-48 overflow-hidden">
                <img src="/stock/care.jpg" alt="Care worker supporting a client" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-4 text-primary">Health & Social Care</h3>
                <ul className="space-y-2">
                  {[
                    'Residential care homes',
                    'Nursing homes',
                    'Domiciliary care providers',
                    'Supported living services',
                    'Day care centers',
                    'Respite care facilities',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all overflow-hidden" data-testid="card-sector-cleaning">
              <div className="h-48 overflow-hidden">
                <img src="/stock/cleaning.jpg" alt="Professional commercial cleaning" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-4 text-primary">Cleaning Services</h3>
                <ul className="space-y-2">
                  {[
                    'Commercial office cleaning',
                    'Public building maintenance',
                    'School and education facilities',
                    'Healthcare facility cleaning',
                    'Local authority contracts',
                    'Specialist deep cleaning',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" data-testid="button-explore-sectors">
              <Link href="/sectors">EXPLORE SECTORS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-process-title">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured, transparent approach to winning public sector contracts
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                  data-testid={`card-process-step-${i}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" data-testid="button-learn-process">
              <Link href="/how-it-works">LEARN THE FULL PROCESS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Care providers and cleaning businesses across the UK trust us to win contracts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.slice(0, 6).map((testimonial, i) => (
                <motion.div
                  key={testimonial.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow" data-testid={`card-testimonial-${testimonial.id}`}>
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, s) => (
                          <svg key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {/* Quote */}
                      <p className="text-sm leading-relaxed italic text-foreground/80 flex-1 mb-5">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      {/* Author */}
                      <div className="border-t pt-4 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">
                            {testimonial.clientName.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.clientName}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.companyName}</p>
                        </div>
                        <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${
                          testimonial.sector === 'care'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {testimonial.sector === 'care' ? 'Care' : 'Cleaning'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {testimonials.length > 6 && (
              <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/results">SEE ALL {testimonials.length} REVIEWS</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-cta-title">
              Ready to Win Your Next Contract?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Book a free consultation to discuss your tendering needs. No obligation, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" data-testid="button-cta-book-consultation">
                <Link href="/contact">BOOK A CONSULTATION</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-cta-view-pricing">
                <Link href="/pricing">VIEW PRICING</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
