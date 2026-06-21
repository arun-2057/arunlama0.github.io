import { motion } from 'framer-motion';
import { getFeaturedBlogPosts } from '../config/blog';

export default function Blog() {
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <section id="blog" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-gradient-to-r from-teal-600 to-slate-600 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
              Articles & Insights
            </h2>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-3 leading-relaxed">
            Deep-dive technical articles on machine learning, data engineering, and production optimization.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative h-40 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-teal-600 dark:text-teal-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                  <time className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <a
                    href={`#blog/${post.slug}`}
                    className="text-xs font-medium text-teal-600 dark:text-teal-400 hover:translate-x-1 transition-transform inline-flex"
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
            className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Articles
            <span>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}