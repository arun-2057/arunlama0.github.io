import { motion } from 'framer-motion';
import { config } from '../config';

export default function Hero() {
  const stats = [
    { value: '50+', label: 'ML Models Built' },
    { value: '91%', label: 'Avg Accuracy Rate' },
    { value: '10+', label: 'Years Experience' },
    { value: '25K+', label: 'Data Records Processed' },
  ];

  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-32 md:pt-40 pb-24 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 card-anim">
            {/* Gradient H1 */}
            <h1 id="hero-heading" className="text-display mb-6 font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-violet-400 dark:to-blue-400">
                {config.personal.name}
              </span>
            </h1>
            <p className="text-headline text-slate-900 dark:text-slate-100 mb-8 font-normal">
              {config.personal.title}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl">
              {config.bio}
            </p>

            {/* Enhanced CTAs with clear hierarchy */}
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:shadow-lg transition-all group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
              <a
                href={config.resumePath}
                download
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group underline decoration-slate-400 dark:decoration-slate-600 hover:decoration-indigo-600 dark:hover:decoration-indigo-400"
              >
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
              </a>
            </div>

            {/* Hero tags with improved styling */}
            <div className="flex flex-wrap gap-3">
              {config.heroTags.map((tag, index) => (
                <motion.span 
                  key={tag} 
                  className="px-5 py-2.5 bg-slate-100 dark:bg-[#1A1A1A] text-sm font-semibold border border-indigo-600/40 dark:border-indigo-500/40 hover:border-indigo-600 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition-all cursor-default tracking-tight text-indigo-600 dark:text-indigo-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hero highlight card */}
          <div className="lg:col-span-4 card-anim" style={{ animationDelay: '200ms' }}>
            <div className="swiss-card p-6 h-full flex flex-col justify-center bg-slate-50 dark:bg-[#1A1A1A]/80 backdrop-blur-md hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Data-Driven Insights</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Transforming raw data into actionable business strategies through advanced analytics and machine learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clean borderless stats section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
