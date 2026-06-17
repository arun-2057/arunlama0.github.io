import { motion } from 'framer-motion';
import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();
  
  const skillCategories = [
    {
      tier: 'Expert',
      level: '⭐⭐⭐',
      subtitle: 'Daily mastery',
      color: 'from-cyan-500 to-indigo-600',
      bgColor: 'from-cyan-500/20 to-indigo-600/20',
      borderColor: 'border-cyan-500/50',
      skills: config.skills.expert
    },
    {
      tier: 'Proficient',
      level: '⭐⭐',
      subtitle: 'Production-ready',
      color: 'from-indigo-500 to-cyan-500',
      bgColor: 'from-indigo-500/15 to-cyan-500/15',
      borderColor: 'border-indigo-500/40',
      skills: config.skills.proficient
    },
    {
      tier: 'Learning',
      level: '⭐',
      subtitle: 'Active development',
      color: 'from-indigo-400 to-cyan-400',
      bgColor: 'from-indigo-400/10 to-cyan-400/10',
      borderColor: 'border-indigo-400/30',
      skills: config.skills.learning
    }
  ];
  
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header with accent */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"></div>
            <h2 id="skills-heading" className={`text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Technical Arsenal
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-4 transition-all duration-700 leading-relaxed" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '100ms'
          }}>
            Specialized tools and technologies for machine learning, data engineering, and analytics. Organized by proficiency level.
          </p>
        </div>

        {/* Skill tiers with enhanced visual hierarchy */}
        <div className="space-y-12">
          {skillCategories.map((category, tierIndex) => (
            <motion.div
              key={category.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + tierIndex * 0.1 }}
              className="group"
            >
              {/* Tier header with visual indicator */}
              <div className="mb-6 flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-white/5 group-hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.tier}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-semibold">{category.level} {category.subtitle}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.bgColor} border ${category.borderColor}`}>
                    <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      {tierIndex === 0 ? 'Primary Focus' : tierIndex === 1 ? 'Core Competency' : 'Growing Skills'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills grid with enhanced visual design */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.15 + tierIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`group/skill p-4 rounded-xl border ${category.borderColor} bg-gradient-to-br ${category.bgColor} hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden`}
                  >
                    {/* Background accent on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/10 to-indigo-600/10"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      <p className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-tight group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:from-cyan-500 group-hover/skill:to-indigo-600 group-hover/skill:bg-clip-text transition-all duration-300">
                        {skill}
                      </p>
                      
                      {/* Proficiency bar */}
                      <div className="w-full h-1.5 mt-3 rounded-full bg-slate-300 dark:bg-white/10 overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${70 + (2 - tierIndex) * 15}%` } : {}}
                          transition={{ delay: 0.3 + tierIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 pt-12 border-t border-slate-200 dark:border-white/5 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">Always learning and expanding my technical skillset.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:shadow-xl transition-all hover:scale-105"
          >
            Let's Collaborate
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
