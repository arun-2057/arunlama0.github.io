import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

/**
 * Case Study Detail Page Component
 * Displays comprehensive case study with problem, solution, results
 */
export default function CaseStudyDetail({ caseStudy, onClose }) {
  if (!caseStudy) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-80 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
          {caseStudy.image && (
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-md transition-all"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Title & Subtitle */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-3">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {caseStudy.fullDescription}
            </p>
          </div>

          {/* Key Results Highlight */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-900/50">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
                  ✓
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {result}
                </p>
              </div>
            ))}
          </div>

          {/* Problem Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              Challenge
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              Solution
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap pt-8 border-t border-slate-200 dark:border-slate-700">
            {caseStudy.link && (
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                View Project <FiArrowRight size={18} />
              </a>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-500 dark:hover:border-slate-400 px-6 py-3 rounded-lg font-bold transition-colors"
            >
              <FiArrowLeft size={18} /> Back
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
