'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const posts = [
  {
    title: 'Building a Design System from Scratch',
    excerpt: 'How I created a cohesive design system with tokens, components, and documentation that scales across projects.',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    tag: 'Design',
    tagColor: '#8b5cf6',
  },
  {
    title: 'The Art of Micro-Interactions',
    excerpt: 'Why subtle animations and feedback loops are the secret to interfaces that feel alive and delightful.',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    tag: 'UI/UX',
    tagColor: '#22c55e',
  },
  {
    title: 'Next.js App Router: A Deep Dive',
    excerpt: 'Everything I learned migrating a large production app from Pages Router to App Router and the pitfalls to avoid.',
    date: 'Nov 10, 2024',
    readTime: '12 min read',
    tag: 'Engineering',
    tagColor: '#06b6d4',
  },
  {
    title: 'Optimizing React Performance',
    excerpt: 'Practical techniques for reducing re-renders, lazy loading, and making your React apps blazingly fast.',
    date: 'Oct 5, 2024',
    readTime: '10 min read',
    tag: 'Performance',
    tagColor: '#f59e0b',
  },
  {
    title: 'My Developer Toolkit in 2025',
    excerpt: 'The tools, extensions, and workflows that keep me productive and happy as a full-stack developer.',
    date: 'Sep 20, 2024',
    readTime: '5 min read',
    tag: 'Productivity',
    tagColor: '#ec4899',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="section-label mb-4">BLOG</h2>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight mb-6">
            <span className="text-gradient">Thoughts &</span>
            <br />
            <span className="text-gradient" style={{ opacity: 0.6 }}>Writings</span>
          </h1>
          <p className="text-[15px] text-[#606060] leading-relaxed max-w-lg">
            I write about frontend engineering, design systems, and the intersection
            of technology and creativity.
          </p>
        </motion.div>

        {/* Blog Posts List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-2"
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              className="group relative glass-card rounded-xl p-5 cursor-pointer transition-all duration-300 hover:border-[rgba(255,255,255,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Tag */}
                  <span
                    className="inline-block text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border mb-3"
                    style={{
                      color: post.tagColor,
                      borderColor: post.tagColor + '30',
                      backgroundColor: post.tagColor + '08',
                    }}
                  >
                    {post.tag.toUpperCase()}
                  </span>

                  {/* Title */}
                  <h3 className="text-[16px] font-semibold text-[#d4d4d4] group-hover:text-white tracking-tight mb-2 transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[13px] text-[#525252] leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#404040] tracking-wide">
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
                  className="mt-2 text-[#333] group-hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.div>
              </div>

              {/* Hover accent line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
                style={{ backgroundColor: post.tagColor }}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
