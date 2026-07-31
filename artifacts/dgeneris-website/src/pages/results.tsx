import { motion } from 'framer-motion';
import { TrendingUp, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useListCaseStudies } from '@workspace/api-client-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const STATS = [
  { icon: TrendingUp, value: '100+', label: 'Tender Opportunities Reviewed' },
  { icon: Award, value: '50+', label: 'Bid Submissions Supported' },
  { icon: Target, value: '90%', label: 'Client Satisfaction Rate' },
];

export default function Results() {
  const { data: caseStudies = [], isLoading } = useListCaseStudies();

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
              Real outcomes from our bid and tender support services
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
          <p className="text-xs text-muted-foreground text-center mt-8 max-w-3xl mx-auto">
            *These statistics are illustrative examples for demonstration purposes. Individual client results vary based on tender type, sector, and competitive landscape.
          </p>
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
              Examples of how we've helped care and cleaning businesses win contracts
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center text-muted-foreground" data-testid="text-case-studies-loading">
              Loading case studies...
            </div>
          ) : caseStudies.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground" data-testid="text-case-studies-empty">
                  Case studies coming soon. Contact us to discuss how we can support your tender opportunities.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((caseStudy, i) => (
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
                      {caseStudy.isExample && (
                        <div className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-medium mb-4">
                          Example Case Study
                        </div>
                      )}
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

      {/* Disclaimer */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Important Disclaimer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All case studies presented are anonymized examples illustrating typical scenarios and support provided. Individual client outcomes vary based on numerous factors including tender competitiveness, client capabilities, sector conditions, and pricing strategies. We cannot guarantee contract awards or specific results. Past performance does not guarantee future success. All bid support services are provided on a professional consultancy basis, with no success fees or outcome-based charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
