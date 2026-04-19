import { memo } from 'react';

export default memo(function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer aria-label="Site footer" className="py-8 text-center text-sm text-gray-600 dark:text-gray-400 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <span>© {year} Arun Lama — Data Analyst.</span>
        <span className="hidden sm:inline text-brand">•</span>
        <a href="#contact" className="text-brand font-semibold hover:underline transition-colors">Contact</a>
        <span className="hidden sm:inline text-brand">•</span>
        <a href="#" className="hover:text-brand transition-colors font-medium">Back to Top ↑</a>
      </div>
    </footer>
  )
})
