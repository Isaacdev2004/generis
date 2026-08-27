import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useSubmitEnquiry } from '@workspace/api-client-react';
import { useToast } from '@/hooks/use-toast';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ASSESS_POINTS = [
  'Eligibility and mandatory requirements',
  'Scope and contract requirements',
  'Evaluation criteria and evidence demands',
  'Risks, capacity and strategic fit',
  'A clear bid / no-bid recommendation',
];

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  sector: z.enum(['care', 'cleaning', 'other'], { required_error: 'Please select a sector' }),
  tenderTitle: z.string().min(3, 'Please enter the tender title or buyer'),
  notes: z.string().min(10, 'Please add a little more detail (at least 10 characters)'),
});

type FormValues = z.infer<typeof formSchema>;

export default function AssessMyTender() {
  const submitEnquiry = useSubmitEnquiry();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      tenderTitle: '',
      notes: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    const sectorLabel =
      values.sector === 'care'
        ? 'Health & Social Care'
        : values.sector === 'cleaning'
          ? 'Cleaning Services'
          : 'Other / SME';

    submitEnquiry.mutate(
      {
        data: {
          name: values.name,
          companyName: values.tenderTitle,
          email: values.email,
          phone: values.phone,
          sector: values.sector === 'other' ? 'care' : values.sector,
          serviceRequired: 'Tender Assessment',
          tenderDeadline: null,
          estimatedBudget: null,
          message: [
            `Tender assessment request via Assess My Tender.`,
            `Sector selected: ${sectorLabel}.`,
            `Tender title / buyer: ${values.tenderTitle}.`,
            '',
            values.notes,
          ].join('\n'),
          newsletterOptIn: false,
        },
      },
      {
        onSuccess: () => {
          toast({
            title: 'Assessment request sent',
            description: 'We will review your tender details and respond shortly.',
          });
          form.reset();
        },
        onError: (error: { message?: string }) => {
          toast({
            title: 'Submission failed',
            description: error?.message || 'Please try again or contact us directly.',
            variant: 'destructive',
          });
        },
      }
    );
  };

  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/consultant.jpg" alt="Tender assessment consultation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-assess-hero-title">
              Assess My Tender
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Have you found a tender? Before you invest time and resource, let {BRAND_NAME} help you decide whether it is worth pursuing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-start gap-3 mb-6">
                <ClipboardCheck className="h-8 w-8 text-accent flex-shrink-0" />
                <h2 className="text-2xl font-bold">What we assess</h2>
              </div>
              <ul className="space-y-3 mb-8">
                {ASSESS_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer to speak first? Call{' '}
                <a href={PHONE_HREF} className="text-primary font-medium hover:underline">{PHONE_DISPLAY}</a>
                {' '}or{' '}
                <a href={WHATSAPP_HREF} className="text-secondary font-medium hover:underline" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                . You can also use our{' '}
                <Link href={CTA.contact.href} className="text-primary underline">{CTA.contact.label.toLowerCase()}</Link>
                {' '}page.
              </p>
            </motion.div>

            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-5 sm:p-8">
                  <h2 className="text-xl font-bold mb-6">Request a tender assessment</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Smith" {...field} data-testid="input-assess-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@company.co.uk" {...field} data-testid="input-assess-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone *</FormLabel>
                              <FormControl>
                                <Input placeholder="07XXX XXXXXX" {...field} data-testid="input-assess-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="sector"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sector *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-assess-sector">
                                  <SelectValue placeholder="Select sector" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="care">Health & Social Care</SelectItem>
                                <SelectItem value="cleaning">Cleaning / FM</SelectItem>
                                <SelectItem value="other">Other SME</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tenderTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tender title / buyer *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Domiciliary care DPS — Local Authority name"
                                {...field}
                                data-testid="input-assess-tender"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Notes / deadline / concerns *</FormLabel>
                            <FormControl>
                              <Textarea
                                className="min-h-[120px]"
                                placeholder="Share the deadline, contract value band if known, and what you want us to focus on..."
                                {...field}
                                data-testid="input-assess-notes"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        disabled={submitEnquiry.isPending}
                        data-testid="button-assess-submit"
                      >
                        {submitEnquiry.isPending ? 'Sending…' : CTA.assess.label}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
