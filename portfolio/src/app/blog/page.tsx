'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar, Loader2 } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { LinkPreview } from '@/components/LinkPreview';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  link: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

// Map categories to colors
const getTagColor = (category: string) => {
  const cat = category.toLowerCase();
  if (cat === 'story') return '#8b5cf6';
  if (cat === 'guide') return '#22c55e';
  if (cat === 'profile') return '#f59e0b';
  return '#06b6d4';
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog');
        if (!res.ok) throw new Error('Failed to fetch blog posts');
        const data = await res.json();
        setPosts(data.items || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="section-label mb-4 text-sm">BLOG</h2>
          <h1 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight mb-5">
            <span className="text-gradient">Thoughts &</span>
            <br />
            <span className="text-gradient" style={{ opacity: 0.6 }}>Writings</span>
          </h1>
          <p className="text-sm text-gray-600 leading-[1.7] max-w-lg">
            I write about frontend engineering, design systems, and the intersection
            of technology and creativity on Medium.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20 text-gray-600">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}

        {/* Blog Posts List */}
        {!isLoading && (
          <div className="space-y-2">
            {posts.map((post) => {
              const tagColor = getTagColor(post.category);
              return (
                <LinkPreview key={post.id} url={post.link} className="relative block w-full">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="group relative block glass-card rounded-xl p-4 cursor-pointer transition-all duration-300 shimmer-border"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Tag */}
                      <span className="inline-block text-xs tracking-wider text-gradient-accent uppercase font-semibold mb-3">
                        {post.category.toUpperCase()}
                      </span>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-gray-800 group-hover:text-gray-900 tracking-tight mb-1.5 transition-colors duration-200">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-sm font-mono text-gray-500 tracking-wide">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="mt-2 text-gray-500 group-hover:text-gray-900 transition-colors"
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </motion.div>
                  </div>

                  {/* Hover accent line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
                    style={{ backgroundColor: tagColor }}
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  </a>
                </LinkPreview>
              );
            })}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
