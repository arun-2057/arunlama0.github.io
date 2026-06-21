import { memo } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default memo(function Coursework() {
  const courses = config.coursework;
  const { ref, isVisible } = useIntersectionObserver();
  
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
    <section id="coursework" aria-labelledby="coursework-heading" className="py-16 md:py-20 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <h2 id="coursework-heading" className="text-xl md:text-2xl font-bold mb-2 text-slate-800 dark:text-slate-200">
            Coursework & Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">Specialized courses in data science, machine learning, and software engineering fundamentals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allCourses.map((course) => {
            let subText = '';
            
            if (courseCategories['Fundamentals'].includes(course)) {
              subText = 'CORE FOUNDATION';
            } else if (courseCategories['Databases & Pipeline'].includes(course)) {
              subText = 'DATA MANAGEMENT';
            } else if (courseCategories['Machine Learning'].includes(course)) {
              subText = 'ADVANCED ALGORITHMS';
            } else if (courseCategories['Tools'].includes(course)) {
              subText = 'PRACTICAL IMPLEMENTATION';
            }

            return (
              <motion.div
                key={course}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: allCourses.indexOf(course) * 0.1 }}
              >
                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300">
                  <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">{course}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">{subText}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-1">
              {allCourses.length}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">Total Courses</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-1">
              {Object.keys(courseCategories).length}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">Categories</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600 dark:text-green-400 mb-1">
              100%
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
})