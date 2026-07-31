import { motion } from 'framer-motion';
import { Target, Heart, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const VALUES = [
  {
    icon: Shield,
    title: 'Integrity & Confidentiality',
    description: 'Your business information and bid strategies remain completely confidential. We operate with the highest professional standards.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every bid we support is crafted to win. We focus on clarity, compliance, and competitive positioning.',
  },
  {
    icon: Heart,
    title: 'Client-Centered',
    description: 'Your success is our success. We work collaboratively, keeping you informed at every stage.',
  },
  {
    icon: Users,
    title: 'Sector Expertise',
    description: 'Deep knowledge of care and cleaning procurement ensures we speak the language of your industry.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/office.jpg" alt="Modern professional office" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-hero-title">
              About Dgeneris Bid & Tender Solutions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner for winning public-sector contracts in the UK care and cleaning industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold mb-6 text-primary" data-testid="text-our-story-title">
                  Our Story
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dgeneris Bid & Tender Solutions was founded to bridge a critical gap in the UK public procurement landscape. We saw capable, experienced care providers and cleaning businesses repeatedly losing out on public-sector contracts — not because they lacked quality or expertise, but because they struggled with the complex, time-consuming tendering process.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Public procurement in the UK demands precise compliance, strategic positioning, and persuasive communication. For busy business owners running care homes, domiciliary services, or cleaning operations, finding the time and expertise to craft winning tender responses is a significant barrier.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We exist to remove that barrier. Our consultancy brings professional bid-writing expertise, sector knowledge, and a proven process to businesses ready to compete for — and win — public contracts.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="/stock/team.jpg"
                  alt="Professional team collaborating"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary" data-testid="text-mission-title">
                Our Mission
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                To empower UK care and cleaning businesses to access and win public-sector contracts through expert, ethical, and confidential bid support — helping you grow sustainably while delivering essential services to communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary" data-testid="text-approach-title">
                Our Approach
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Collaborative Partnership:</strong> We don't just write bids for you — we work with you. Your knowledge of your business combined with our procurement expertise creates the strongest possible tender response.
                </p>
                <p>
                  <strong className="text-foreground">Transparency & Communication:</strong> You'll always know what stage your bid is at, what information we need, and when deadlines are approaching. No jargon, no surprises.
                </p>
                <p>
                  <strong className="text-foreground">Quality Over Quantity:</strong> We focus on tenders you have a genuine chance of winning, rather than encouraging scattergun applications. Every bid we support receives meticulous attention.
                </p>
                <p>
                  <strong className="text-foreground">Continuous Improvement:</strong> Win or lose, we debrief every submission and use feedback to refine our approach for future tenders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary" data-testid="text-values-title">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full" data-testid={`card-value-${i}`}>
                  <CardContent className="p-6">
                    <value.icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary" data-testid="text-team-title">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A dedicated team of bid specialists, sector experts, and consultants working to secure your success.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Team profiles coming soon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Confidentiality Statement */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6" data-testid="text-confidentiality-title">
                Our Confidentiality Commitment
              </h2>
              <p className="text-lg leading-relaxed text-primary-foreground/90 mb-4">
                All client information, business strategies, tender content, and commercial details remain strictly confidential. We operate under professional non-disclosure agreements and never share your information with third parties.
              </p>
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                Your trust is the foundation of our service. Every member of our team adheres to the highest standards of data protection and professional confidentiality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
