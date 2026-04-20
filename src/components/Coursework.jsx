import { memo } from 'react';
import { motion } from 'framer-motion';
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

  const allCourses = Object.values(courseCategories).flat();

  return (
    <section id="coursework" aria-labelledby="coursework-heading" className="py-16 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 id="coursework-heading" className="text-3xl md:text-4xl font-black mb-3 text-slate-900 dark:text-slate-100 uppercase tracking-wide">
            Coursework & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Specialized courses in data science, machine learning, and software engineering fundamentals.</p>
        </div>

        {/* Minimalist 3-Column Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course, index) => {
            let category = '';
            let subText = '';
            
            if (courseCategories['Fundamentals'].includes(course)) {
              category = 'Fundamentals';
              subText = 'CORE FOUNDATION';
            } else if (courseCategories['Databases & Pipeline'].includes(course)) {
              category = 'Databases & Pipeline';
              subText = 'DATA MANAGEMENT';
            } else if (courseCategories['Machine Learning'].includes(course)) {
              category = 'Machine Learning';
              subText = 'ADVANCED ALGORITHMS';
            } else if (courseCategories['Tools'].includes(course)) {
              category = 'Tools';
              subText = 'PRACTICAL IMPLEMENTATION';
            }

            return (
              <motion.div
                key={course}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-default"
              >
                <div className="p-6 bg-transparent border border-slate-200 dark:border-white/10 rounded-lg hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300">
                  {/* Tiny Purple Dot */}
                  <div className="w-1 h-1 rounded-full bg-purple-600 dark:bg-purple-400 mb-4"></div>
                  
                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {course}
                  </h3>
                  
                  {/* Sub-text Label */}
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    {subText}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clean Stats - No Boxes */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-black text-purple-600 dark:text-purple-400 mb-2">
              {allCourses.length}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Courses</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-purple-600 dark:text-purple-400 mb-2">
              {Object.keys(courseCategories).length}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Categories</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-green-600 dark:text-green-400 mb-2">
              100%
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
})
