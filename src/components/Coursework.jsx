import { memo } from 'react';
import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default memo(function Coursework() {
  const courses = config.coursework;
  const { ref, isVisible } = useIntersectionObserver();
  
  // Categorize courses
  const courseCategories = {
    'Fundamentals': ['Data Structures & Algorithms', 'Probability & Statistics'],
    'Databases & Pipeline': ['Database Management Systems'],
    'Machine Learning': [
      'Supervised Machine Learning: Regression & Classification',
      'Unsupervised Learning & Advanced Learning Algorithms'
    ],
    'Tools': ['Data Analysis with Python'],
  };

  return (
    <section id="coursework" aria-labelledby="coursework-heading" className="py-16 bg-dark-light dark:bg-dark-light" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 id="coursework-heading" className="text-headline mb-3 text-brand uppercase tracking-wide font-bold">
            Coursework & Education
          </h2>
          <p className="text-gray-400 max-w-2xl">Specialized courses in data science, machine learning, and software engineering fundamentals.</p>
        </div>

        {/* Categorized Timeline Layout */}
        <div className="space-y-12">
          {Object.entries(courseCategories).map(([category, categoryItems], categoryIndex) => (
            <div
              key={category}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${categoryIndex * 150}ms` : '0ms',
              }}
            >
              {/* Category Heading */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-brand uppercase tracking-tight flex-1">
                  {category}
                </h3>
                <div className="hidden sm:flex-1 h-px bg-gradient-to-r from-brand/20 to-transparent"></div>
              </div>

              {/* Category Courses */}
              <ul className="grid sm:grid-cols-2 gap-4 relative pl-8 sm:pl-0">
                {/* Vertical line for timeline on desktop */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-brand to-brand/20 sm:hidden"></div>

                {categoryItems.map((course, courseIndex) => (
                  <li
                    key={course}
                    tabIndex={0}
                    role="article"
                    aria-label={course}
                    className="group animate-cascade swiss-card accent-left p-6 bg-dark-lighter focus:outline-none focus:ring-2 focus:ring-brand hover-lift transition-all"
                    style={{
                      animationDelay: `${categoryIndex * 150 + courseIndex * 75}ms`,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden sm:flex absolute -left-3 top-6 w-6 h-6 rounded-full bg-brand border-4 border-dark-light group-hover:scale-125 transition-transform"></div>

                    {/* Course Content */}
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded bg-brand/10 border border-brand/50 flex items-center justify-center text-brand font-bold text-sm group-hover:bg-brand group-hover:text-white transition-all duration-300">
                        ✓
                      </span>
                      <div className="flex-1">
                        <span className="text-gray-300 font-semibold block group-hover:text-brand transition-colors">
                          {course}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          {category === 'Fundamentals' && 'Core foundation'}
                          {category === 'Databases & Pipeline' && 'Data management'}
                          {category === 'Machine Learning' && 'Advanced algorithms'}
                          {category === 'Tools' && 'Practical implementation'}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 pt-12 border-t border-brand/10 grid sm:grid-cols-3 gap-6">
          <div className="text-center group hover-lift transition-all p-4">
            <div className="text-4xl font-bold text-brand mb-2 group-hover:text-brand-light transition-colors">
              {courses.length}
            </div>
            <p className="text-sm text-gray-400">Total Courses</p>
          </div>
          <div className="text-center group hover-lift transition-all p-4">
            <div className="text-4xl font-bold text-brand mb-2 group-hover:text-brand-light transition-colors">
              4
            </div>
            <p className="text-sm text-gray-400">Categories</p>
          </div>
          <div className="text-center group hover-lift transition-all p-4">
            <div className="text-4xl font-bold text-brand mb-2 group-hover:text-brand-light transition-colors">
              100%
            </div>
            <p className="text-sm text-gray-400">Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
})
