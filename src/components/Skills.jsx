import { motion } from 'framer-motion';
import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();
  
  const skillCategories = [
    {
      tier: 'Proficient',
      subtitle: 'Built & shipped often',
      color: 'border-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      skills: config.skills.expert
    },
    {
      tier: 'Experienced',
      subtitle: 'Daily workflow',
      color: 'border-slate-600',
      bgColor: 'bg-slate-50 dark:bg-slate-900/50',
      skills: config.skills.proficient
    },
    {
      tier: 'Learning',
      subtitle: 'Growing with projects',
      color: 'border-slate-400',
      bgColor: 'bg-white dark:bg-slate-800',
      skills: config.skills.learning
    }
  ];
  
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 md:py-20 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-gradient-to-r from-teal-600 to-slate-600 rounded-full"></div>
            <h2 id="skills-heading" className={`text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Technical Skills
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl transition-all duration-700" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '100ms'
          }}>
            Tools and technologies I use to build ML, data engineering, and analytics solutions.
          </p>
        </div>

        {/* Skill tiers */}
        <div className="space-y-10">
          {skillCategories.map((category, tierIndex) => (
            <motion.div
              key={category.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + tierIndex * 0.1 }}
            >
              {/* Tier header */}
              <div className="mb-5 flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {category.tier}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">{category.subtitle}</span>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + tierIndex * 0.1 }}
                    className={`px-3 py-1.5 rounded-md border ${category.color} ${category.bgColor} text-slate-700 dark:text-slate-300 text-xs font-medium`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}