import { memo } from 'react';
import { config } from '../config';

export default memo(function Coursework() {
  const courses = config.coursework;
  
  return (
    <section id="coursework" aria-labelledby="coursework-heading" className="py-12 bg-navy-light dark:bg-navy-dark">
      <div className="max-w-5xl mx-auto px-4">
        <h2 id="coursework-heading" className="text-headline mb-8 text-brand uppercase tracking-wide">
          Relevant Coursework
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <li
              key={i}
              tabIndex={0}
              role="article"
              aria-label={c}
              className="p-5 swiss-card focus:outline-none focus:ring-2 focus:ring-brand hover-lift"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded bg-brand/10 border border-brand/50 flex items-center justify-center text-brand font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-300 font-medium">{c}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
