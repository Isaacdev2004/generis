import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Gauge, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BRAND_NAME, CTA, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type Answer = 0 | 1 | 2;

const QUESTIONS: { id: string; label: string; options: { label: string; value: Answer }[] }[] = [
  {
    id: 'policies',
    label: 'Do you have current policies covering health & safety, equality, safeguarding (where relevant) and complaints?',
    options: [
      { label: 'Mostly complete and reviewed recently', value: 2 },
      { label: 'Some policies, not all current', value: 1 },
      { label: 'Significant gaps', value: 0 },
    ],
  },
  {
    id: 'insurance',
    label: 'Are your insurance certificates and financial standing evidence ready to share?',
    options: [
      { label: 'Yes — up to date', value: 2 },
      { label: 'Partially ready', value: 1 },
      { label: 'Not ready', value: 0 },
    ],
  },
  {
    id: 'staffing',
    label: 'Can you evidence staffing levels, training and supervision for the contract type?',
    options: [
      { label: 'Strong evidence available', value: 2 },
      { label: 'Some evidence, needs organising', value: 1 },
      { label: 'Limited evidence', value: 0 },
    ],
  },
  {
    id: 'quality',
    label: 'Do you have quality systems, KPIs or audit outcomes you can describe clearly?',
    options: [
      { label: 'Yes', value: 2 },
      { label: 'Informal / partial', value: 1 },
      { label: 'Not yet', value: 0 },
    ],
  },
  {
    id: 'social',
    label: 'Can you describe measurable social value or community commitments?',
    options: [
      { label: 'Yes — specific examples', value: 2 },
      { label: 'Generic intentions only', value: 1 },
      { label: 'Not developed', value: 0 },
    ],
  },
  {
    id: 'experience',
    label: 'Do you have relevant sector experience or case studies for similar contracts?',
    options: [
      { label: 'Directly comparable experience', value: 2 },
      { label: 'Related experience', value: 1 },
      { label: 'Limited relevant experience', value: 0 },
    ],
  },
  {
    id: 'capacity',
    label: 'Do you have capacity (management time and operational headroom) to mobilise if successful?',
    options: [
      { label: 'Yes', value: 2 },
      { label: 'Tight but possible', value: 1 },
      { label: 'Unclear / constrained', value: 0 },
    ],
  },
  {
    id: 'cqc',
    label: 'If you are a care provider: is CQC status (where applicable) clear and accurately presentable?',
    options: [
      { label: 'Yes / not applicable (e.g. cleaning)', value: 2 },
      { label: 'Needs clarifying', value: 1 },
      { label: 'Not ready to evidence', value: 0 },
    ],
  },
];

function scoreAnswers(answers: Record<string, Answer | undefined>): number {
  const values = QUESTIONS.map((q) => answers[q.id]).filter((v): v is Answer => v !== undefined);
  if (values.length === 0) return 0;
  const max = QUESTIONS.length * 2;
  const sum = values.reduce((a, b) => a + b, 0);
  return Math.round((sum / max) * 100);
}

export default function TenderReadiness() {
  const [answers, setAnswers] = useState<Record<string, Answer | undefined>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);
  const score = scoreAnswers(answers);

  const strengths = QUESTIONS.filter((q) => answers[q.id] === 2).map((q) => q.label);

  const improvements = QUESTIONS.filter((q) => (answers[q.id] ?? 2) < 2).map((q) => q.label);

  const handleShow = () => {
    if (allAnswered) setSubmitted(true);
  };

  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/process.jpg" alt="Tender readiness assessment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/80 mb-3">{BRAND_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-readiness-hero-title">
              Tender Readiness Check
            </h1>
            <p className="text-lg text-primary-foreground/90">
              A short self-assessment covering policies, staffing, quality systems, social value, capacity and sector experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-sm text-muted-foreground mb-8 flex gap-2 items-start">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <span>
              This score is <strong>indicative only</strong>. It is not an official procurement decision and does not
              confirm eligibility for any tender.
            </span>
          </p>

          <div className="space-y-6 mb-10">
            {QUESTIONS.map((q, i) => (
              <motion.div
                key={q.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.03 }}
              >
                <Card>
                  <CardContent className="p-5 sm:p-6">
                    <p className="font-medium mb-4 text-sm sm:text-base">{i + 1}. {q.label}</p>
                    <div className="flex flex-col gap-2">
                      {q.options.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => {
                            setAnswers((prev) => ({ ...prev, [q.id]: opt.value }));
                            setSubmitted(false);
                          }}
                          className={`text-left text-sm rounded-md border px-3 py-2 transition-colors ${
                            answers[q.id] === opt.value
                              ? 'border-secondary bg-secondary/10 text-foreground'
                              : 'border-border hover:border-primary/40 text-muted-foreground'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mb-10">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={!allAnswered}
              onClick={handleShow}
              data-testid="button-readiness-score"
            >
              Show my indicative score
            </Button>
          </div>

          {submitted && (
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Card className="border-primary/30 mb-8">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Tender Readiness Score</p>
                      <p className="text-3xl font-bold text-primary" data-testid="text-readiness-score">
                        {score}/100
                      </p>
                    </div>
                  </div>
                  <Progress value={score} className="h-3 mb-6" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent" /> Strengths
                      </h3>
                      {strengths.length === 0 ? (
                        <p className="text-sm text-muted-foreground">Focus first on closing the gaps below.</p>
                      ) : (
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          {strengths.slice(0, 4).map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600" /> Areas to improve
                      </h3>
                      {improvements.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No major gaps flagged on this short check.</p>
                      ) : (
                        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          {improvements.slice(0, 4).map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    Recommended next step: request a full readiness conversation with {BRAND_NAME} so we can interpret
                    your score in the context of a live opportunity.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={CTA.assess.href}>Get your full tender readiness assessment</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={CTA.contact.href}>{CTA.contact.label}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <p className="text-center text-sm text-muted-foreground">
            <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE_DISPLAY}</a>
            {' '}·{' '}
            <a href={WHATSAPP_HREF} className="text-secondary hover:underline" target="_blank" rel="noreferrer">WhatsApp</a>
          </p>
        </div>
      </section>
    </>
  );
}
