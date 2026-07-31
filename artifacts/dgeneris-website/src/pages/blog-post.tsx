import { Link, useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useGetBlogPost } from '@workspace/api-client-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: post, isLoading, error } = useGetBlogPost(slug);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-muted-foreground" data-testid="text-blog-post-loading">Loading article...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold mb-4" data-testid="text-blog-post-error-title">Article Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild data-testid="button-blog-post-back">
              <Link href="/resources">Back to Resources</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-6" data-testid="link-blog-post-back">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
            {post.category && (
              <div className="inline-flex items-center gap-1 text-sm font-medium text-accent mb-4">
                <Tag className="h-4 w-4" />
                {post.category}
              </div>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-blog-post-title">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Calendar className="h-4 w-4" />
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : new Date(post.createdAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg max-w-none" data-testid="text-blog-post-content">
              <p className="lead text-xl text-muted-foreground mb-8">{post.excerpt}</p>
              <div
                className="text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Need Expert Bid Support?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to discuss how we can help you win your next public sector contract.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-blog-post-cta">
                  <Link href="/contact">BOOK A CONSULTATION</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
