import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Terms() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-terms-hero-title">Terms & Conditions</h1>
            <p className="text-primary-foreground/90">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>These terms and conditions govern your use of Dgeneris Bids services.</p>

            <h2>1. Services</h2>
            <p>We provide professional bid writing, tender support, and consultancy services as described in our proposals and service agreements. All services are subject to availability and our acceptance of the engagement.</p>

            <h2>2. Payment Terms</h2>
            <p>Payment terms are specified in individual service agreements. Typically, a 50% deposit is required before work commences, with the balance due upon completion. Late payments may incur interest charges.</p>

            <h2>3. Client Responsibilities</h2>
            <p>Clients must provide accurate, timely information and review draft materials within agreed timeframes. Delays caused by late client input may affect project timelines and pricing.</p>

            <h2>4. Intellectual Property</h2>
            <p>Upon full payment, you own all tender materials created for you. We retain the right to use anonymized case studies for marketing purposes unless otherwise agreed.</p>

            <h2>5. Confidentiality</h2>
            <p>We treat all client information as strictly confidential and will not disclose it to third parties without your consent, except where required by law.</p>

            <h2>6. Limitation of Liability</h2>
            <p>While we provide professional services to the best of our ability, we cannot guarantee contract awards. Our liability is limited to the fees paid for the specific service in question.</p>

            <h2>7. Cancellation</h2>
            <p>Either party may terminate the agreement with written notice. Fees for work completed to the date of termination remain payable.</p>

            <h2>8. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales.</p>

            <p className="text-sm text-muted-foreground italic mt-8">
              This is a template. Business owners must ensure their terms are reviewed by a legal professional and reflect their actual business practices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
