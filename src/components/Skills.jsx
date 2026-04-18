import { config } from '../config';

export default function Skills() {
  const groups = config.skills;
  
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(groups).map(([category, items]) => (
            <div
              key={category}
              className="p-5 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 focus-within:ring-2 focus-within:ring-brand shadow-soft hover:shadow-medium transition-all hover-lift border border-gray-100 dark:border-gray-600"
              role="region"
              aria-label={category}
              tabIndex={0}
            >
              <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"></span>
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3.5 py-2 rounded-lg shadow-sm text-sm font-medium hover:shadow-md transition-shadow">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-xs font-bold">
                        {skill[0]}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </span>
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
