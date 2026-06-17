import { motion } from 'framer-motion';
import { performanceMetrics, getPerformanceScore } from '../config/analytics';

/**
 * Performance Analytics Component
 * Displays Lighthouse, Web Vitals, and build metrics
 */
export default function PerformanceAnalytics() {
  const { lighthouse, webVitals, buildMetrics } = performanceMetrics;
  const avgScore = getPerformanceScore();

  const metrics = [
    { label: 'Performance', value: lighthouse.performance, color: 'from-green-400 to-green-600' },
    { label: 'Accessibility', value: lighthouse.accessibility, color: 'from-blue-400 to-blue-600' },
    { label: 'Best Practices', value: lighthouse.bestPractices, color: 'from-purple-400 to-purple-600' },
    { label: 'SEO', value: lighthouse.seo, color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-4 uppercase">
          Performance Metrics
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          Built with optimization in mind. Real metrics, real performance.
        </p>

        {/* Lighthouse Scores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Circular Progress */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-slate-200 dark:text-slate-700"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(metric.value / 100) * 283} 283`}
                    className={`text-transparent bg-gradient-to-r ${metric.color}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {metric.value}
                  </span>
                </div>
              </div>
              <p className="text-center text-sm font-bold text-slate-600 dark:text-slate-400">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Web Vitals */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase text-sm tracking-widest">
              Core Web Vitals
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    LCP (Largest Contentful Paint)
                  </span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {webVitals.lcp}s
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                    style={{ width: `${Math.min((webVitals.lcp / 2.5) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Build Metrics */}
          <motion.div
            className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-6 uppercase text-sm tracking-widest">
              Build Metrics
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Bundle Size (gzipped)</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{buildMetrics.bundleSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">JavaScript</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{buildMetrics.jsSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">CSS</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{buildMetrics.cssSize}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
