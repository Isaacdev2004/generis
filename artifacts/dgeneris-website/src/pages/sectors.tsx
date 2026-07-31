import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CARE_SERVICES = [
  'Residential care homes for older adults',
  'Nursing homes with complex care needs',
  'Domiciliary care and home support services',
  'Supported living for adults with disabilities',
  'Day care centers and respite services',
  'Learning disability support services',
  'Mental health residential support',
  'Palliative and end-of-life care',
];

const CLEANING_SERVICES = [
  'Commercial office and business park cleaning',
  'Public building and council facility maintenance',
  'School, college, and university cleaning',
  'Healthcare facility cleaning (hospitals, clinics, surgeries)',
  'Leisure center and sports facility cleaning',
  'Specialist deep cleaning and infection control',
  'Window cleaning and high-level access work',
  'Grounds maintenance and exterior cleaning',
];

export default function Sectors() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-primary-foreground py-20 overflow-hidden">
        <img src="/stock/london.jpg" alt="London city skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-sectors-hero-title">
              Sectors We Support
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Specialist bid writing for UK care providers and cleaning businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on two high-value sectors where public procurement represents significant growth opportunities. Our sector expertise means we understand the procurement landscape, regulatory requirements, scoring criteria, and competitive dynamics specific to your industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health & Social Care */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/stock/care.jpg"
                  alt="Care worker supporting a client at home"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2" data-testid="text-sector-care-title">
                    Health & Social Care
                  </h2>
                  <p className="text-muted-foreground">Supporting care providers to win local authority and NHS contracts</p>
                </div>
              </div>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Types of Care Providers We Support:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CARE_SERVICES.map((service, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">What We Understand About Care Procurement:</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">CQC Requirements:</strong> We know how to evidence your CQC registration, inspection ratings, and compliance with fundamental standards in tender responses.
                  </p>
                  <p>
                    <strong className="text-foreground">Safeguarding & Person-Centered Care:</strong> Our responses demonstrate your approach to safeguarding vulnerable adults, person-centered planning, and individual choice.
                  </p>
                  <p>
                    <strong className="text-foreground">Workforce & Training:</strong> We articulate your staff recruitment, retention, training, and supervision frameworks to meet local authority quality expectations.
                  </p>
                  <p>
                    <strong className="text-foreground">Pricing Structures:</strong> We support development of competitive, sustainable pricing models aligned with local authority fee structures.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-contact-care">
                <Link href="/contact">DISCUSS YOUR CARE TENDER NEEDS</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2" data-testid="text-sector-cleaning-title">
                    Cleaning Services
                  </h2>
                  <p className="text-muted-foreground">Helping cleaning businesses secure public-sector facilities contracts</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/stock/cleaning.jpg"
                  alt="Professional commercial cleaning team"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Types of Cleaning Businesses We Support:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CLEANING_SERVICES.map((service, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">What We Understand About Cleaning Procurement:</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Health & Safety Compliance:</strong> We evidence your COSHH assessments, risk management, and compliance with health & safety regulations.
                  </p>
                  <p>
                    <strong className="text-foreground">Quality Standards & Accreditation:</strong> We showcase ISO certifications, industry accreditations (BICSc, SafeContractor), and quality assurance processes.
                  </p>
                  <p>
                    <strong className="text-foreground">Environmental Sustainability:</strong> We articulate your use of eco-friendly products, waste reduction strategies, and carbon footprint commitments.
                  </p>
                  <p>
                    <strong className="text-foreground">Contract Mobilization:</strong> We demonstrate your ability to mobilize cleaning contracts efficiently, manage transitions, and maintain service continuity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-contact-cleaning">
                <Link href="/contact">DISCUSS YOUR CLEANING TENDER NEEDS</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sector Focus Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6 text-center" data-testid="text-why-sector-focus-title">
                Why Our Sector Focus Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Generic bid writers may understand the procurement process, but they don't know your industry. We do. Our sector focus means:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We speak the language evaluators expect to hear</li>
                  <li>We know which policies, accreditations, and evidence carry weight</li>
                  <li>We understand common scoring criteria and how to maximize points</li>
                  <li>We're familiar with sector-specific regulations and standards</li>
                  <li>We can benchmark your response against sector best practices</li>
                  <li>We work faster because we're not learning your industry from scratch</li>
                </ul>
                <p>
                  This expertise translates directly into stronger, more competitive tender submissions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
