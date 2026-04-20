import { motion } from 'framer-motion';
import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-white/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 id="skills-heading" className={`text-headline mb-3 text-indigo-600 dark:text-indigo-400 uppercase tracking-wide font-bold transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl transition-all duration-700" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '100ms'
          }}>
            Tools and technologies I work with daily for data analysis, machine learning, and visualization.
          </p>
        </div>

        {/* Tiered Pill System */}
        <div className="space-y-8">
          {/* Expert Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-4">Expert</h3>
            <div className="flex flex-wrap gap-2">
              {config.skills.expert.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm cursor-default shadow-md hover:shadow-lg transition-shadow"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Proficient Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-4">Proficient</h3>
            <div className="flex flex-wrap gap-2">
              {config.skills.proficient.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full bg-slate-200 text-slate-800 dark:bg-white/10 dark:text-slate-300 font-medium text-sm cursor-default hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Learning Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-4">Learning</h3>
            <div className="flex flex-wrap gap-2">
              {config.skills.learning.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 font-medium text-sm cursor-default hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
