import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Calendar, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useListBlogPosts } from '@workspace/api-client-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Resources() {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  const { data: posts = [], isLoading } = useListBlogPosts(
    category ? { category } : undefined
  );

  const filteredPosts = posts.filter((post) =>
    searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-resources-hero-title">
              Resources & Insights
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Guides, tips, and insights to help you win more tenders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-resources-search"
              />
            </div>
            <Select
              value={category || 'all'}
              onValueChange={(val) => setCategory(val === 'all' ? undefined : val)}
            >
              <SelectTrigger className="w-full md:w-[200px]" data-testid="select-resources-category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat!}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading ? (
            <div className="text-center text-muted-foreground" data-testid="text-resources-loading">
              Loading resources...
            </div>
          ) : filteredPosts.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground" data-testid="text-resources-empty">
                  {searchTerm || category
                    ? 'No articles match your search. Try different keywords or categories.'
                    : 'Blog posts and resources coming soon.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link href={`/resources/${post.slug}`} data-testid={`link-blog-post-${post.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer overflow-hidden">
                      <div className="h-44 overflow-hidden bg-muted">
                        <img
                          src={
                            post.category === 'Care Sector' ? '/stock/care.jpg' :
                            post.category === 'Cleaning Sector' ? '/stock/cleaning.jpg' :
                            post.category === 'Bid Writing' ? '/stock/bidwrite.jpg' :
                            '/stock/blog.jpg'
                          }
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        {post.category && (
                          <div className="inline-flex items-center gap-1 text-xs font-medium text-accent mb-3">
                            <Tag className="h-3 w-3" />
                            {post.category}
                          </div>
                        )}
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
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
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
