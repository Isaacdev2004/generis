import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSubmitEnquiry } from '@workspace/api-client-react';
import { useToast } from '@/hooks/use-toast';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  sector: z.enum(['care', 'cleaning'], { required_error: 'Please select a sector' }),
  serviceRequired: z.string().min(1, 'Please select a service'),
  tenderDeadline: z.string().optional(),
  estimatedBudget: z.string().optional(),
  message: z.string().min(10, 'Please provide more details (at least 10 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to our privacy policy to submit this form',
  }),
  newsletterOptIn: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const SERVICES = [
  'Tender Research',
  'Bid Writing',
  'Tender Review',
  'PQQ/SQ Support',
  'Framework Applications',
  'Policy Development',
  'Bid Strategy',
  'Social Value Support',
  'Compliance Documentation',
  'Monthly Retainer',
  'General Enquiry',
];

const BUDGETS = [
  'Under £500',
  '£500 - £1,000',
  '£1,000 - £2,500',
  '£2,500 - £5,000',
  '£5,000+',
  'Not sure yet',
];

export default function Contact() {
  const submitEnquiry = useSubmitEnquiry();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      phone: '',
      message: '',
      newsletterOptIn: false,
      consent: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    submitEnquiry.mutate(
      {
        data: {
          name: values.name,
          companyName: values.companyName,
          email: values.email,
          phone: values.phone,
          sector: values.sector,
          serviceRequired: values.serviceRequired,
          tenderDeadline: values.tenderDeadline || null,
          estimatedBudget: values.estimatedBudget || null,
          message: values.message,
          newsletterOptIn: values.newsletterOptIn,
        },
      },
      {
        onSuccess: () => {
          toast({
            title: 'Enquiry submitted successfully',
            description: "We'll get back to you within 24 hours.",
          });
          form.reset();
        },
        onError: (error: any) => {
          toast({
            title: 'Submission failed',
            description: error?.message || 'Please try again later.',
            variant: 'destructive',
          });
        },
      }
    );
  };

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-hero-title">
              Get In Touch
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Book a free consultation or enquire about our bid and tender services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6" data-testid="text-enquiry-form-title">
                    Enquiry Form
                  </h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} data-testid="input-contact-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="ABC Care Services Ltd" {...field} data-testid="input-contact-company" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} data-testid="input-contact-email" />
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
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="07XXX XXXXXX" {...field} data-testid="input-contact-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="sector"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Sector *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-contact-sector">
                                    <SelectValue placeholder="Select sector" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="care">Health & Social Care</SelectItem>
                                  <SelectItem value="cleaning">Cleaning Services</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="serviceRequired"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Required *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-contact-service">
                                    <SelectValue placeholder="Select service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {SERVICES.map((service) => (
                                    <SelectItem key={service} value={service}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="tenderDeadline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tender Deadline (if applicable)</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} data-testid="input-contact-deadline" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="estimatedBudget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estimated Budget</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-contact-budget">
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {BUDGETS.map((budget) => (
                                    <SelectItem key={budget} value={budget}>
                                      {budget}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tell Us About Your Needs *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide details about the tender opportunity, your requirements, or any questions you have..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="input-contact-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                data-testid="checkbox-contact-consent"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the{' '}
                                <a href="/privacy-policy" className="text-primary underline" target="_blank">
                                  privacy policy
                                </a>{' '}
                                and consent to being contacted *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="newsletterOptIn"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                data-testid="checkbox-contact-newsletter"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Subscribe to our newsletter for tender tips and sector insights</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        disabled={submitEnquiry.isPending}
                        data-testid="button-contact-submit"
                      >
                        {submitEnquiry.isPending ? 'Submitting...' : 'SUBMIT ENQUIRY'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Phone</p>
                        <p className="text-sm text-muted-foreground">07453 409673</p>
                        <p className="text-sm text-muted-foreground">07830 766260</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-sm text-muted-foreground">info@dgeneris.co.uk</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM GMT</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Location</p>
                        <p className="text-sm text-muted-foreground">Serving UK-wide</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all enquiries within 24 hours during business days. For urgent tender deadlines, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
