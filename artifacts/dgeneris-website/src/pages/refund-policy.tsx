import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function RefundPolicy() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-refund-hero-title">Refund Policy</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>This refund policy outlines the circumstances under which refunds may be issued for our services.</p>

            <h2>Service Delivery</h2>
            <p>We are committed to delivering high-quality bid and tender support services. If we are unable to deliver the agreed service for any reason, you are entitled to a full refund of any fees paid.</p>

            <h2>Cancellation Before Work Commences</h2>
            <p>If you cancel the engagement before we have started work, you will receive a full refund of any deposit paid, minus any reasonable administrative costs incurred.</p>

            <h2>Cancellation After Work Has Started</h2>
            <p>If you cancel after work has commenced, you will be charged for work completed to the date of cancellation. Any unused portion of your payment will be refunded within 14 days.</p>

            <h2>Dissatisfaction with Service</h2>
            <p>If you are not satisfied with our service, please contact us immediately. We will work with you to resolve any issues. In cases where we cannot resolve the matter to your satisfaction, we may offer a partial or full refund at our discretion.</p>

            <h2>No Guarantee of Contract Award</h2>
            <p>Please note that we cannot guarantee contract awards. Refunds will not be issued solely on the basis of an unsuccessful tender outcome, as many factors beyond our control influence procurement decisions.</p>

            <h2>How to Request a Refund</h2>
            <p>To request a refund, contact us at info@dgeneris.co.uk with your order details and reason for the refund request. We will respond within 5 working days.</p>

            <p className="text-sm text-muted-foreground italic mt-8">
              This is a template refund policy. Business owners should customize this to reflect their actual refund practices and ensure compliance with UK consumer protection law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
