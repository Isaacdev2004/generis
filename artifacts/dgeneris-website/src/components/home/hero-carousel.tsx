import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BRAND_NAME, CTA } from '@/lib/brand';

const SLIDES = [
  {
    id: 1,
    image: '/stock/hero.jpg',
    title: 'Win More UK Care & Cleaning Contracts',
    body: `${BRAND_NAME} helps UK care providers, cleaning companies and SMEs identify suitable tender opportunities, assess eligibility, strengthen bid strategy and submit evaluator-focused responses.`,
  },
  {
    id: 2,
    image: '/stock/gov.jpg',
    title: 'Find the Right Tender Before You Spend Time Bidding',
    body: 'We support tender discovery, opportunity matching and bid/no-bid assessment so you invest time only where you are competitive.',
  },
  {
    id: 3,
    image: '/stock/bidwrite.jpg',
    title: 'Turn Your Experience Into Evaluator-Focused Evidence',
    body: 'Operational strength only wins when it is translated into clear, evidence-led responses that map to published evaluation criteria.',
  },
  {
    id: 4,
    image: '/stock/process.jpg',
    title: 'Write. Review. Submit.',
    body: 'From tender assessment through professional writing and red-team review to final submission readiness — end-to-end support when it matters.',
    stages: ['Write', 'Review', 'Submit'] as string[],
  },
];

const INTERVAL_MS = 7000;

export function HeroCarousel() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [goTo, index, paused, reduceMotion]);

  const slide = SLIDES[index];

  return (
    <section
      className="relative min-h-[88vh] text-primary-foreground overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) goTo(delta < 0 ? index + 1 : index - 1);
        touchStartX.current = null;
      }}
      aria-roledescription="carousel"
      aria-label={`${BRAND_NAME} hero`}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.image}
          src={slide.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/78 to-primary/55" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16 sm:py-20 lg:py-28 min-h-[88vh] flex flex-col justify-center">
        <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 max-w-3xl">
          {BRAND_NAME}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            {'stages' in slide && slide.stages ? (
              <div className="mb-5 flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Write, Review, Submit">
                {slide.stages.map((stage, i) => (
                  <div key={stage} className="flex items-center gap-2 sm:gap-3">
                    {i > 0 ? (
                      <span className="text-secondary text-xl sm:text-2xl font-light" aria-hidden>
                        →
                      </span>
                    ) : null}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      {stage}
                    </h1>
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                {slide.title}
              </h1>
            )}
            <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
              {slide.body}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href={CTA.assess.href}>{CTA.assess.label}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20"
          >
            <Link href={CTA.opportunities.href}>{CTA.opportunities.label}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Hero slides">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-8 bg-secondary' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
