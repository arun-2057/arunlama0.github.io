import { motion } from 'framer-motion';
import { config } from '../config';

export default function Hero() {
  const stats = [
    { value: '50+', label: 'ML Models Built', icon: '⚙️' },
    { value: '91%', label: 'Avg Accuracy Rate', icon: '🎯' },
    { value: '4+', label: 'Years Experience', icon: '⏳' },
    { value: '25K+', label: 'Data Records Processed', icon: '📊' },
  ];

  return (
    <section id="hero" aria-labelledby="hero-heading" className="min-h-[60vh] py-16 md:py-24 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4">
        {/* Main hero content */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            {/* Name heading */}
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-400 dark:to-slate-500">
                {config.personal.name}
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-0.5 w-8 bg-gradient-to-r from-teal-600 to-slate-600 rounded-full"></div>
              <p className="text-base md:text-lg font-medium text-slate-600 dark:text-teal-400">
                {config.personal.title}
              </p>
              <div className="h-0.5 w-8 bg-gradient-to-r from-slate-600 to-teal-600 rounded-full"></div>
            </div>
            
            {/* Hero bio */}
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              {config.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center justify-center mb-10">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 font-medium rounded-lg transition-all"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                <span>View Projects</span>
                <span>→</span>
              </motion.a>
              
              <motion.a
                href={config.resumePath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 font-medium border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span>Resume</span>
                <span>↓</span>
              </motion.a>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {config.heroTags.map((tag, index) => (
                <motion.span 
                  key={tag} 
                  className="px-4 py-1.5 bg-slate-100 dark:bg-slate-700 text-xs font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-200 dark:border-slate-700">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-1">{stat.value}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}