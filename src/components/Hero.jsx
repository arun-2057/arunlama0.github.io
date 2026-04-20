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
        {/* Main hero content - Centered Layout */}
        <div className="text-center mb-20">
          <div className="card-anim max-w-4xl mx-auto">
            {/* Gradient H1 */}
            <h1 id="hero-heading" className="text-display mb-6 font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-violet-400 dark:to-blue-400">
                {config.personal.name}
              </span>
            </h1>
            <p className="text-headline text-slate-900 dark:text-slate-100 mb-8 font-normal">
              {config.personal.title}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              {config.bio}
            </p>

            {/* Enhanced CTAs with clear hierarchy - Centered */}
            <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
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

            {/* Hero tags with improved styling - Centered */}
            <div className="flex flex-wrap gap-3 justify-center">
              {config.heroTags.map((tag, index) => (
                <motion.span 
                  key={tag} 
                  className="px-5 py-2.5 bg-slate-100 dark:bg-[#1A1A1A] text-sm font-semibold border border-indigo-600/40 dark:border-indigo-500/40 hover:border-indigo-600 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition-all cursor-default tracking-tight text-indigo-600 dark:text-indigo-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Clean borderless stats section - Centered */}
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
