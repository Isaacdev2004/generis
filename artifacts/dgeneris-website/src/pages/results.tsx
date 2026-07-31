import { motion } from 'framer-motion';
import { TrendingUp, Award, Target, Download, CheckCircle2, FileCheck2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useListCaseStudies, useListTestimonials } from '@workspace/api-client-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const STATS = [
  { icon: TrendingUp, value: '100+', label: 'Tender Opportunities Reviewed' },
  { icon: Award, value: '50+', label: 'Bid Submissions Supported' },
  { icon: Target, value: '90%', label: 'Client Satisfaction Rate' },
];

const VERIFIED_WINS = [
  {
    company: 'Sigma Construction Services UK Ltd',
    framework: 'EEM DPS0009 – Property Maintenance Works',
    authority: 'Efficiency East Midlands Ltd (EEM)',
    date: '5 May 2026',
    duration: '5-year DPS (until September 2026)',
    lots: ['Property Maintenance Works'],
    summary:
      'Accepted onto the Efficiency East Midlands Dynamic Purchasing System for Property Maintenance Works — a nationally recognised not-for-profit consortium that procures services on behalf of public-sector member organisations across the East Midlands.',
    docPath: '/wins/sigma-eem-dps0009.docx',
    docLabel: 'Download Award Letter (.docx)',
    docIcon: Download,
  },
  {
    company: 'Blue Tools Handyman Ltd',
    framework: 'YPO Internal Fit Out and Maintenance DPS',
    authority: 'YPO (Yorkshire Purchasing Organisation)',
    date: '14 July 2026',
    duration: 'Framework Agreement',
    lots: [
      'Lot 1 – Painting & Decorating',
      'Lot 2 – Plumbing & Heating',
      'Lot 4 – Joinery',
      'Lot 6 – Mechanical & Electrical Services',
      'Lot 12 – Internal Doors & Partitioning',
      'Lot 15 – General Builders Work',
    ],
    summary:
      'Awarded places on six lots of the YPO Internal Fit Out and Maintenance DPS. YPO is one of the UK\'s largest public-sector buying organisations, providing framework access to thousands of public-sector bodies across the country.',
    docPath: '/wins/blue-tools-ypo-dps.pdf',
    docLabel: 'Download Award Letter (.pdf)',
    docIcon: Download,
  },
];

export default function Results() {
  const { data: caseStudies = [], isLoading } = useListCaseStudies();
  const { data: testimonials = [] } = useListTestimonials();

  // Separate real wins from example case studies
  const realWins = caseStudies.filter((cs) => !cs.isExample);
  const examples = caseStudies.filter((cs) => cs.isExample);

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-results-hero-title">
              Our Results
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Real contract wins and verified outcomes from our bid and tender support services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center" data-testid={`card-stat-${i}`}>
                  <CardContent className="p-8">
                    <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Image Banner */}
      <section className="relative h-64 overflow-hidden">
        <img
          src="/stock/success.jpg"
          alt="Business professionals celebrating a contract win"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <p className="text-2xl lg:text-3xl font-bold">&ldquo;Every winning bid starts with the right support.&rdquo;</p>
            <p className="mt-2 text-primary-foreground/80">— Dgeneris Bid &amp; Tender Solutions</p>
          </div>
        </div>
      </section>

      {/* ── VERIFIED CONTRACT WINS ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <FileCheck2 className="h-4 w-4" />
              Verified by official award letters
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Contract Wins
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real award letters from public-sector buying organisations — evidence of what we help our clients achieve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
            {VERIFIED_WINS.map((win, i) => (
              <motion.div
                key={win.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="h-full border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Award Confirmed
                        </div>
                        <h3 className="font-bold text-xl text-primary leading-snug">{win.company}</h3>
                      </div>
                    </div>

                    {/* Framework */}
                    <div className="bg-muted/50 rounded-lg p-4 mb-6 space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold min-w-24 text-foreground">Framework:</span>
                        <span className="text-muted-foreground">{win.framework}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold min-w-24 text-foreground">Awarded by:</span>
                        <span className="text-muted-foreground">{win.authority}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold min-w-24 text-foreground">Date:</span>
                        <span className="text-muted-foreground">{win.date}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{win.summary}</p>

                    {/* Lots won */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-2">
                        {win.lots.length === 1 ? 'Category Awarded:' : `${win.lots.length} Lots Awarded:`}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {win.lots.map((lot) => (
                          <span
                            key={lot}
                            className="text-xs bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full"
                          >
                            {lot}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Download button */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-emerald-400 text-emerald-700 hover:bg-emerald-50"
                    >
                      <a href={win.docPath} download target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        {win.docLabel}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="text-case-studies-title">
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we support businesses through every stage of the tendering process
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center text-muted-foreground" data-testid="text-case-studies-loading">
              Loading case studies...
            </div>
          ) : examples.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground" data-testid="text-case-studies-empty">
                  Case studies coming soon. Contact us to discuss how we can support your tender opportunities.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {examples.map((caseStudy, i) => (
                <motion.div
                  key={caseStudy.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full" data-testid={`card-case-study-${caseStudy.id}`}>
                    <CardContent className="p-8">
                      <div className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Example Case Study
                      </div>
                      <h3 className="font-bold text-xl mb-2">{caseStudy.tenderType}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{caseStudy.clientSector}</p>

                      <div className="space-y-4 text-sm">
                        <div>
                          <h4 className="font-semibold mb-1">Objective:</h4>
                          <p className="text-muted-foreground">{caseStudy.objective}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Challenge:</h4>
                          <p className="text-muted-foreground">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Our Support:</h4>
                          <p className="text-muted-foreground">{caseStudy.supportProvided}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-accent">Outcome:</h4>
                          <p className="text-muted-foreground">{caseStudy.outcome}</p>
                        </div>
                        {caseStudy.clientFeedback && (
                          <div className="border-t pt-4 mt-4">
                            <p className="text-sm italic text-muted-foreground">
                              &ldquo;{caseStudy.clientFeedback}&rdquo;
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* All Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Care providers and cleaning businesses across the UK trust us to win contracts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, s) => (
                          <svg key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed italic text-foreground/80 flex-1 mb-5">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
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
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Important Disclaimer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Verified contract wins are displayed with the client's permission and are supported by official award documentation from the relevant public-sector buying organisations. Example case studies are illustrative scenarios based on typical tender support engagements. Individual outcomes vary based on factors including tender competitiveness, client capabilities, sector conditions, and pricing strategies. We cannot guarantee contract awards or specific results. All bid support services are provided on a professional consultancy basis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
