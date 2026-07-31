import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useListFaqs } from '@workspace/api-client-react';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQs() {
  const { data: faqs = [], isLoading } = useListFaqs();

  const groupedFaqs = faqs.reduce((acc, faq) => {
    const category = faq.category || 'General';
    if (!acc[category]) acc[category] = [];
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-faqs-hero-title">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Common questions about our bid and tender writing services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="text-center text-muted-foreground" data-testid="text-faqs-loading">
                Loading FAQs...
              </div>
            ) : faqs.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground" data-testid="text-faqs-empty">
                    No FAQs available yet. Please contact us with any questions.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-12">
                {Object.entries(groupedFaqs)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([category, categoryFaqs], catIndex) => (
                    <motion.div
                      key={category}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    >
                      <h2 className="text-2xl font-bold mb-6 text-primary" data-testid={`text-faq-category-${catIndex}`}>
                        {category}
                      </h2>
                      <Accordion type="single" collapsible className="space-y-4">
                        {categoryFaqs
                          .sort((a, b) => a.sortOrder - b.sortOrder)
                          .map((faq) => (
                            <AccordionItem
                              key={faq.id}
                              value={`faq-${faq.id}`}
                              className="border rounded-lg px-6"
                              data-testid={`accordion-faq-${faq.id}`}
                            >
                              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground pt-2">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                      </Accordion>
                    </motion.div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
