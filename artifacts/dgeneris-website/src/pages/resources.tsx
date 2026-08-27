import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { STATIC_ARTICLES } from '@/pages/resources/static-articles';
import { BRAND_NAME } from '@/lib/brand';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Resources() {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(
    () => Array.from(new Set(STATIC_ARTICLES.map((a) => a.category))),
    [],
  );

  const filteredPosts = STATIC_ARTICLES.filter((post) => {
    const matchesCategory = category ? post.category === category : true;
    const matchesSearch = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="relative text-primary-foreground py-12 sm:py-20 overflow-hidden">
        <img src="/stock/blog.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Resources &amp; Insights
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Practical guidance from {BRAND_NAME} on care tendering, cleaning procurement and bid strategy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={category || 'all'}
              onValueChange={(val) => setCategory(val === 'all' ? undefined : val)}
            >
              <SelectTrigger className="w-full md:w-[220px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: (i % 3) * 0.05 }}
              >
                <Link
                  href={`/resources/${post.slug}`}
                  className="block h-full rounded-xl border bg-card p-6 hover:border-secondary/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-secondary font-semibold mb-3">
                    <Tag className="h-3.5 w-3.5" />
                    {post.category}
                  </div>
                  <h2 className="text-lg font-semibold text-primary mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
