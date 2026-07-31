import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateCheckoutSession } from '@workspace/api-client-react';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PACKAGES = [
  {
    id: 'tender_research',
    name: 'Tender Research',
    price: 5000,
    description: 'Opportunity identification and monitoring',
  },
  {
    id: 'bid_review',
    name: 'Bid Review',
    price: 15000,
    description: 'Expert review of your draft tender',
  },
  {
    id: 'full_tender',
    name: 'Full Tender Writing',
    price: 25000,
    description: 'Complete end-to-end bid support',
  },
  {
    id: 'retainer',
    name: 'Monthly Retainer',
    price: null,
    description: 'Ongoing support for active bidders',
  },
];

const formSchema = z.object({
  clientName: z.string().min(2, 'Name is required'),
  clientEmail: z.string().email('Invalid email address'),
  companyName: z.string().min(2, 'Company name is required'),
  description: z.string().min(10, 'Please provide project details'),
  amount: z.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Checkout() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const createCheckout = useCreateCheckoutSession();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: '',
      clientEmail: '',
      companyName: '',
      description: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    if (!selectedPackage) {
      toast({
        title: 'Package required',
        description: 'Please select a package to continue.',
        variant: 'destructive',
      });
      return;
    }

    const pkg = PACKAGES.find((p) => p.id === selectedPackage);
    if (!pkg) return;

    createCheckout.mutate(
      {
        data: {
          packageType: pkg.id,
          clientName: values.clientName,
          clientEmail: values.clientEmail,
          companyName: values.companyName,
          description: values.description,
          amount: pkg.price || undefined,
        },
      },
      {
        onSuccess: (result) => {
          if (result.url && result.url.startsWith('http')) {
            window.location.href = result.url;
          } else {
            toast({
              title: 'Checkout session created',
              description: 'Payment processing is not fully configured. Contact us to complete your order.',
            });
          }
        },
        onError: (error: any) => {
          toast({
            title: 'Checkout failed',
            description: error?.message || 'Please try again or contact us directly.',
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-checkout-hero-title">
              Choose Your Package
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Select a service package and provide project details to get started
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Selection + Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Packages */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold mb-6" data-testid="text-select-package-title">
                Select a Package
              </h2>
              {PACKAGES.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`cursor-pointer transition-all ${
                    selectedPackage === pkg.id ? 'border-accent shadow-lg' : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                  data-testid={`card-package-${pkg.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                        <p className="text-2xl font-bold text-primary">
                          {pkg.price ? `£${(pkg.price / 100).toFixed(2)}+` : 'Custom Pricing'}
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedPackage === pkg.id
                            ? 'border-accent bg-accent'
                            : 'border-muted-foreground'
                        }`}
                      >
                        {selectedPackage === pkg.id && <Check className="h-4 w-4 text-accent-foreground" />}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="clientName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} data-testid="input-checkout-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="clientEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} data-testid="input-checkout-email" />
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
                              <Input placeholder="ABC Care Ltd" {...field} data-testid="input-checkout-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your tender opportunity or requirements..."
                                className="min-h-[100px]"
                                {...field}
                                data-testid="input-checkout-description"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        disabled={!selectedPackage || createCheckout.isPending}
                        data-testid="button-checkout-submit"
                      >
                        {createCheckout.isPending ? 'Processing...' : 'PROCEED TO PAYMENT'}
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
