import { memo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiKaggle } from 'react-icons/si';
import { config } from '../config';

export default memo(function Footer() {
  const year = new Date().getFullYear()
  
  const handleTopClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer aria-label="Site footer" className="py-12 bg-white dark:bg-[#0a0a0a] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-xl mx-auto px-4 text-center">
        {/* Social Links - Horizontal row, centered, with gap-8 */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub"
            className="w-6 h-6 text-slate-400 hover:text-purple-500 transition-colors"
          >
            <FaGithub className="w-full h-full" />
          </a>
          <a
            href={config.social.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kaggle"
            className="w-6 h-6 text-slate-400 hover:text-purple-500 transition-colors"
          >
            <SiKaggle className="w-full h-full" />
          </a>
          <a
            href={`mailto:${config.personal.email}`}
            aria-label="Send Email"
            className="w-6 h-6 text-slate-400 hover:text-purple-500 transition-colors"
          >
            <MdEmail className="w-full h-full" />
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn"
            className="w-6 h-6 text-slate-400 hover:text-purple-500 transition-colors"
          >
            <FaLinkedin className="w-full h-full" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {year} <span className="font-semibold text-slate-900 dark:text-slate-100">{config.personal.name}</span>
        </p>
      </div>
    </footer>
  )
})
