import { useMemo } from 'react';
import { config } from '../config';
import { ProgressBar } from './ProgressBar';
import ProficiencyIcon from './ProficiencyIcon';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Skill category icons
const categoryIcons = {
  'Programming': '💻',
  'Data & ML': '🤖',
  'Visualization': '📊',
  'Tools': '🛠️',
};

export default function Skills() {
  const groups = useMemo(() => config.skills, []);
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 bg-dark-base dark:bg-dark-base" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 id="skills-heading" className={`text-headline mb-3 text-brand uppercase tracking-wide font-bold transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl transition-all duration-700" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '100ms'
          }}>
            Tools and technologies I work with daily for data analysis, machine learning, and visualization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
          {Object.entries(groups).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className={`p-6 swiss-card accent-left focus-within:ring-2 focus-within:ring-brand hover-lift bg-dark-light transition-all duration-700 group animate-cascade ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${categoryIndex * 100}ms` : '0ms',
                animationDelay: `${categoryIndex * 100}ms`,
              }}
              role="region"
              aria-label={`${category} skills`}
              tabIndex={0}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl group-hover:scale-110 transition-transform">{categoryIcons[category]}</span>
                <h3 className="font-bold text-lg text-white uppercase tracking-tight">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-5">
                {items.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="animate-slideUp transition-all"
                    style={{ animationDelay: `${skillIndex * 50}ms` }}
                  >
                    {/* Skill Name with Proficiency Icon */}
                    <div className="flex items-center justify-between mb-2 group/skill">
                      <label className="text-sm font-semibold text-gray-300 group-hover/skill:text-brand transition-colors">
                        {skill.name}
                      </label>
                      <ProficiencyIcon level={skill.level} />
                    </div>

                    {/* Progress Bar */}
                    <ProgressBar 
                      label={skill.name}
                      level={skill.level}
                      hideLabel={true}
                    />

                    {/* Proficiency Level Text */}
                    <p className="text-xs text-gray-500 mt-1 capitalize">
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
