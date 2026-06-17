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
    <section id="hero" aria-labelledby="hero-heading" className="min-h-[70vh] py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 dark:from-indigo-950/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main hero content */}
        <div className="text-center mb-20">
          <div className="animate-slide-up max-w-4xl mx-auto">
            {/* Gradient H1 - Much larger and bolder */}
            <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-400 animate-glow-pulse">
                {config.personal.name}
              </span>
            </h1>
            
            {/* Subtitle with accent color */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 rounded-full"></div>
              <p className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-cyan-400 tracking-wide uppercase">
                {config.personal.title}
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 rounded-full"></div>
            </div>
            
            {/* Hero bio - larger text */}
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              {config.heroBio}
            </p>

            {/* Enhanced CTAs - More prominent */}
            <div className="flex flex-wrap gap-6 items-center justify-center mb-12">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600 text-white px-10 py-5 font-bold uppercase tracking-wider text-lg hover:shadow-2xl transition-all group hover:scale-105 rounded-lg"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                <span>View Projects</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </motion.a>
              
              <motion.a
                href={config.resumePath}
                download
                className="inline-flex items-center gap-3 px-10 py-5 font-bold uppercase tracking-wider text-lg border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all group rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <span>Resume</span>
                <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
              </motion.a>
            </div>

            {/* Hero tags with vibrant colors */}
            <div className="flex flex-wrap gap-3 justify-center">
              {config.heroTags.map((tag, index) => (
                <motion.span 
                  key={tag} 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-50 dark:from-indigo-950/40 to-cyan-50 dark:to-cyan-950/40 text-sm font-bold border border-cyan-400/60 dark:border-cyan-500/40 hover:border-cyan-500 dark:hover:border-cyan-400 bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text hover:text-transparent transition-all cursor-default tracking-tight text-transparent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced stats section with icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-200 dark:border-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 dark:from-slate-900/30 to-transparent hover:from-indigo-50/50 dark:hover:from-indigo-950/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
