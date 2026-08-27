import { Link, useParams } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { STATIC_ARTICLES } from '@/pages/resources/static-articles';
import { BRAND_NAME, CTA } from '@/lib/brand';

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const article = STATIC_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <section className="py-24 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Article not found</h1>
        <Button asChild variant="outline">
          <Link href="/resources">Back to resources</Link>
        </Button>
      </section>
    );
  }

  return (
    <>
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="text-sm text-secondary mb-3 font-semibold">{article.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-primary-foreground/80 text-sm">By {article.author}</p>
        </div>
      </section>
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            {article.content.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
          <div className="mt-12 rounded-xl border bg-muted/40 p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">Need practical tender support?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {BRAND_NAME} can assess an opportunity, review a draft response or support a full submission.
            </p>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href={CTA.assess.href}>{CTA.assess.label}</Link>
            </Button>
          </div>
          <Button asChild variant="ghost" className="mt-8">
            <Link href="/resources">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to resources
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
}
