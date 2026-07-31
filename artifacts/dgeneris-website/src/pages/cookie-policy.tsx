import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CookiePolicy() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-cookie-hero-title">Cookie Policy</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>This cookie policy explains how we use cookies and similar technologies on our website.</p>

            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help us provide a better user experience and analyze how our site is used.</p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the website to function properly (e.g., session management, security)</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site so we can improve it</li>
              <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p>

            <h2>Third-Party Cookies</h2>
            <p>We may use third-party services (such as analytics providers) that also set cookies. These are subject to the respective privacy policies of these external services.</p>

            <p className="text-sm text-muted-foreground italic mt-8">
              This is a template cookie policy. Specific cookie usage should be documented based on actual implementation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
