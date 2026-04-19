import { memo } from 'react';
import { config } from '../config';

export default memo(function Coursework() {
  const courses = config.coursework;
  
  return (
    <section id="coursework" aria-labelledby="coursework-heading" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="coursework-heading" className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
          Relevant Coursework
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <li
              key={i}
              tabIndex={0}
              role="article"
              aria-label={c}
              className="p-5 bg-white dark:bg-gray-700 rounded-xl shadow-soft hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-brand transition-all hover-lift border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{c}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
