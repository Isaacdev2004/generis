import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-privacy-hero-title">Privacy Policy</h1>
            <p className="text-primary-foreground/90">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>This privacy policy describes how Dgeneris Bid & Tender Solutions ("we", "us", "our") collects, uses, and protects your personal information in accordance with UK GDPR and the Data Protection Act 2018.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li>Contact information (name, email, phone number, company details)</li>
              <li>Business information (sector, services required, tender details)</li>
              <li>Financial information (invoicing and payment data)</li>
              <li>Correspondence and communications</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide bid writing and consultancy services</li>
              <li>Communicate about your projects and enquiries</li>
              <li>Process payments and maintain financial records</li>
              <li>Send service updates and newsletters (with your consent)</li>
              <li>Improve our services and website</li>
            </ul>

            <h2>3. Legal Basis for Processing</h2>
            <p>We process your personal data under the following lawful bases:</p>
            <ul>
              <li>Contract performance: to deliver services you've requested</li>
              <li>Legitimate interests: to operate and improve our business</li>
              <li>Consent: for marketing communications (you can withdraw consent at any time)</li>
              <li>Legal obligation: to comply with tax and regulatory requirements</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul>
              <li>Payment processors (Stripe) for transaction processing</li>
              <li>Email service providers for communications</li>
              <li>Professional advisors (accountants, lawyers) under confidentiality obligations</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>We retain your data for as long as necessary to fulfill the purposes outlined in this policy and to comply with legal obligations (typically 7 years for financial records).</p>

            <h2>6. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>For privacy enquiries or to exercise your rights, contact us at: info@dgeneris.co.uk</p>

            <p className="text-sm text-muted-foreground italic mt-8">
              This is a template privacy policy. Business owners must customize this document with their specific practices and ensure full compliance with UK data protection law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
