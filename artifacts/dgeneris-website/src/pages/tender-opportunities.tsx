import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Inbox, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TenderOpportunities() {
  const [sector, setSector] = useState<string>('all');
  const [location, setLocation] = useState('');
  const [buyer, setBuyer] = useState('');
  const [contractType, setContractType] = useState<string>('all');
  const [deadline, setDeadline] = useState('');
  const [valueBand, setValueBand] = useState<string>('all');

  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/process.jpg" alt="UK public procurement opportunities" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-opportunities-title">
              Tender Opportunities
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Filter by sector, location and contract type — then request matching opportunities from {BRAND_NAME}.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-secondary" />
            <h2 className="font-semibold">Filters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label className="mb-1.5 block">Sector</Label>
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger data-testid="select-opp-sector">
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All sectors</SelectItem>
                  <SelectItem value="care">Care</SelectItem>
                  <SelectItem value="cleaning">Cleaning & FM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-1.5 block">Location</Label>
              <Input
                placeholder="e.g. Greater Manchester"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                data-testid="input-opp-location"
              />
            </div>
            <div>
              <Label className="mb-1.5 block">Buyer</Label>
              <Input
                placeholder="e.g. Local authority / NHS"
                value={buyer}
                onChange={(e) => setBuyer(e.target.value)}
                data-testid="input-opp-buyer"
              />
            </div>
            <div>
              <Label className="mb-1.5 block">Contract type</Label>
              <Select value={contractType} onValueChange={setContractType}>
                <SelectTrigger data-testid="select-opp-type">
                  <SelectValue placeholder="Contract type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="domiciliary">Domiciliary care</SelectItem>
                  <SelectItem value="supported">Supported living</SelectItem>
                  <SelectItem value="residential">Residential care</SelectItem>
                  <SelectItem value="school-clean">School cleaning</SelectItem>
                  <SelectItem value="nhs-clean">Healthcare / NHS cleaning</SelectItem>
                  <SelectItem value="council-clean">Council cleaning</SelectItem>
                  <SelectItem value="fm">Facilities management</SelectItem>
                  <SelectItem value="framework">Framework / DPS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-1.5 block">Deadline from</Label>
              <Input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                data-testid="input-opp-deadline"
              />
            </div>
            <div>
              <Label className="mb-1.5 block">Contract value</Label>
              <Select value={valueBand} onValueChange={setValueBand}>
                <SelectTrigger data-testid="select-opp-value">
                  <SelectValue placeholder="Value band" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any value</SelectItem>
                  <SelectItem value="under-100k">Under £100k</SelectItem>
                  <SelectItem value="100-500k">£100k – £500k</SelectItem>
                  <SelectItem value="500k-plus">£500k+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Card className="border-dashed">
              <CardContent className="p-10 sm:p-14 text-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Inbox className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-bold mb-3" data-testid="text-opportunities-empty">
                  No live listings displayed here
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  {BRAND_NAME} does not publish fabricated, expired or unverified tender notices. Use the filters to
                  describe what you need, then request matching opportunities — or send us a notice you have already found
                  for assessment.
                </p>
                {(sector !== 'all' || location || buyer || contractType !== 'all' || deadline || valueBand !== 'all') && (
                  <p className="text-sm text-foreground/80 mb-6 bg-muted/50 rounded-md px-4 py-3 inline-block">
                    Your current filters will be noted when you contact us
                    {sector !== 'all' ? ` · sector: ${sector}` : ''}
                    {location ? ` · location: ${location}` : ''}
                    {buyer ? ` · buyer: ${buyer}` : ''}
                    {contractType !== 'all' ? ` · type: ${contractType}` : ''}
                    {valueBand !== 'all' ? ` · value: ${valueBand}` : ''}
                    {deadline ? ` · deadline from: ${deadline}` : ''}.
                  </p>
                )}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={CTA.assess.href}>Assess This Tender</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary">
                    <Link href={CTA.contact.href}>Request matching opportunities</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
                  <Search className="h-4 w-4" />
                  Or call{' '}
                  <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE_DISPLAY}</a>
                  {' '}·{' '}
                  <a href={WHATSAPP_HREF} className="text-secondary hover:underline" target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
