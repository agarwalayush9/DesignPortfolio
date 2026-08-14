"use client";

import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openArticle = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const fetchMediumBlogs = useCallback(async () => {
    setIsFetching(true);

    try {
      console.debug("Fetching /api/blog from client...");
      const response = await fetch("/api/blog");

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }

      const data = await response.json();
      console.debug("/api/blog response:", data);

      if (data.items && Array.isArray(data.items) && data.items.length > 0) {
        setBlogPosts(data.items);
        setLastUpdated(
          new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })
        );
      } else {
        // No items -> keep blogPosts empty so UI can show an informative message
        console.warn("/api/blog returned no items");
      }
    } catch (error) {
      console.error("Failed to fetch Medium articles:", error);
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    // set mounted to true only on client to keep server and client HTML consistent
    setMounted(true);
    fetchMediumBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Skeleton Loader Component (uses same root tag as post cards to avoid hydration mismatch)
  const SkeletonCard = () => (
    <article className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="px-6 pt-6 pb-0">
        <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded-full mb-4 animate-pulse" />
      </div>
      <div className="px-6 pb-6 flex flex-col h-full gap-3">
        <div className="h-6 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="flex gap-2 mt-2">
          <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
          <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse" />
        </div>
        <div className="flex-grow" />
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        </div>
      </div>
    </article>
  );

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-10 space-y-4 text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50">
            Latest Articles
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Thoughts on web development, mobile apps, and building great products
          </p>
          {lastUpdated && (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Updated at {lastUpdated}
            </p>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(() => {
            const slots = Array.from({ length: 3 }).map((_, i) => {
              if (!mounted || loading) return { type: "skeleton", key: `skeleton-${i}` };
              const post = blogPosts[i];
              return post ? { type: "post", post } : { type: "skeleton", key: `skeleton-${i}` };
            });

            return slots.map((slot, idx) => {
              if (slot.type === "skeleton") return <SkeletonCard key={slot.key} />;

              const post = slot.post as BlogPost;
              return (
                <article
                  key={post.id}
                  role="link"
                  tabIndex={0}
                  onClick={() => openArticle(post.link)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openArticle(post.link);
                    }
                  }}
                  className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/20"
                  style={{ cursor: "pointer" }}
                >
                  {/* Category Badge & Code Indicator */}
                  <div className="px-6 pt-6 pb-0 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400" />
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">~/article</span>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6 flex flex-col h-full gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 flex-grow line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full"
                        >
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    {/* Meta & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/50 mt-auto">
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            });
          })()}
        </div>

        {/* If fetch finished but no posts, show an informative error box */}
        {!loading && blogPosts.length === 0 && (
          <div className="mt-8 p-6 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800">
            <p className="text-sm text-red-700 dark:text-red-300">
              Unable to load articles. Check the console for details or visit my Medium profile directly.
            </p>
            <a
              href="https://medium.com/@ayushag.cse"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400 underline"
            >
              Open Medium profile
            </a>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@ayushag.cse"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
