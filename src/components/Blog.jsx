import { motion } from 'framer-motion';
import { getFeaturedBlogPosts } from '../config/blog';

/**
 * Blog Section Component
 * Displays featured blog posts and articles
 */
export default function Blog() {
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <section id="blog" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight uppercase">
              Articles & Insights
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-4 leading-relaxed">
            Deep-dive technical articles on machine learning, data engineering, and production optimization.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <time className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <a
                    href={`#blog/${post.slug}`}
                    className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:translate-x-1 transition-transform inline-flex"
                  >
                    Read →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA to Blog */}
        <div className="text-center">
          <motion.a
            href="#blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <span>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
