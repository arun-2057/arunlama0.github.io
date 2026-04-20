import { useMemo } from 'react';
import { config } from '../config';

export default function Skills() {
  // Memoize the skills groups to prevent unnecessary re-computation
  const groups = useMemo(() => config.skills, []);
  
  const getLevelColor = (level) => {
    switch(level) {
      case 'Proficient': return 'text-brand border-brand/50 bg-brand/10';
      case 'Familiar': return 'text-accent border-accent/50 bg-accent/10';
      case 'Learning': return 'text-gray-400 border-gray-500/50 bg-gray-500/10';
      default: return 'text-gray-400 border-gray-500/50';
    }
  };
  
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-12 bg-navy-light dark:bg-navy-dark">
      <div className="max-w-5xl mx-auto px-4">
        <h2 id="skills-heading" className="text-headline mb-8 text-brand uppercase tracking-wide">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(groups).map(([category, items]) => (
            <div
              key={category}
              className="p-5 swiss-card focus-within:ring-2 focus-within:ring-brand hover-lift"
              role="region"
              aria-label={category}
              tabIndex={0}
            >
              <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2 uppercase">
                <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_rgba(0,255,255,0.6)]"></span>
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-brand/10 text-brand text-xs font-bold">
                          {skill.name[0]}
                        </span>
                        {skill.name}
                      </span>
                      <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
