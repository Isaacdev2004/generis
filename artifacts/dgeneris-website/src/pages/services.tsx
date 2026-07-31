import { motion } from 'framer-motion';
import { Link } from 'wouter';
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
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SERVICES = [
  {
    icon: FileSearch,
    title: 'Tender Research & Opportunity Identification',
    description:
      'We monitor UK procurement portals including Contracts Finder, Find a Tender Service, and regional portals to identify relevant opportunities matching your capabilities, geographic coverage, and growth objectives. Receive regular alerts on suitable tenders.',
  },
  {
    icon: FileEdit,
    title: 'Bid Writing & Tender Response',
    description:
      'Professional, compliant, and persuasive bid writing services. We craft responses that showcase your strengths, evidence your capability, and differentiate you from competitors. From PQQs to full ITT submissions, we handle the entire writing process.',
  },
  {
    icon: FileCheck2,
    title: 'Tender Review & Quality Assurance',
    description:
      'Already started your tender response? Our expert review service provides critical feedback on structure, compliance, scoring potential, and persuasiveness. We identify gaps, suggest improvements, and ensure your submission is submission-ready.',
  },
  {
    icon: Target,
    title: 'PQQ/SQ Support',
    description:
      'Pre-Qualification Questionnaires (PQQs) and Selection Questionnaires (SQs) are the gateway to tender opportunities. We help you pass this first hurdle with strong, evidence-based responses that demonstrate your suitability and capability.',
  },
  {
    icon: Users,
    title: 'Framework Applications',
    description:
      'Access multiple contract opportunities through public sector frameworks. We support applications to frameworks such as those run by Crown Commercial Service, NHS, and local authority consortia — unlocking ongoing tender access.',
  },
  {
    icon: BookOpen,
    title: 'Policy & Procedure Development',
    description:
      'Tenders often require robust policies covering health & safety, safeguarding, equality & diversity, complaints, whistleblowing, and more. We create professional, compliant policies tailored to your business and the tender requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Bid Strategy Consultancy',
    description:
      'Not every tender is worth pursuing. We provide strategic advice on opportunity selection, competitive positioning, pricing strategies, and partnership approaches. Our consultancy ensures you invest your time where it counts.',
  },
  {
    icon: Award,
    title: 'Social Value & Environmental Responses',
    description:
      'Public sector tenders increasingly include social value and environmental sustainability requirements. We help you articulate meaningful, measurable commitments that score well and align with your values.',
  },
  {
    icon: Shield,
    title: 'Compliance Documentation',
    description:
      'Supporting documentation is critical to bid success. We assist with collating and presenting insurance certificates, accreditations, financial standing evidence, references, and regulatory compliance documents.',
  },
  {
    icon: Clock,
    title: 'Monthly Retainer Support',
    description:
      'For businesses regularly pursuing tenders, our retainer service provides ongoing support: priority access to our team, strategic planning, continuous opportunity monitoring, and on-demand bid assistance throughout the year.',
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/services.jpg" alt="Professional bid writing documents" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-services-hero-title">
              Our Bid & Tender Services
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive support across every stage of the public procurement process
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all hover:border-primary/50" data-testid={`card-service-${i}`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" data-testid={`button-request-service-${i}`}>
                          <Link href="/contact">REQUEST THIS SERVICE</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page image banner */}
      <section className="relative h-56 overflow-hidden">
        <img src="/stock/handshake.jpg" alt="Professional business handshake" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-primary/75 flex items-center justify-center">
          <p className="text-primary-foreground text-2xl lg:text-3xl font-bold text-center px-4">
            Every contract win starts with a well-written bid.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4" data-testid="text-services-cta-title">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation and we'll recommend the right approach for your tendering goals.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" data-testid="button-services-cta-contact">
              <Link href="/contact">BOOK A CONSULTATION</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
