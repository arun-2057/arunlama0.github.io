import { memo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiKaggle } from 'react-icons/si';
import { config } from '../config';

export default memo(function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer aria-label="Site footer" className="py-12 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub"
            className="w-5 h-5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            <FaGithub className="w-full h-full" />
          </a>
          <a
            href={config.social.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kaggle"
            className="w-5 h-5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            <SiKaggle className="w-full h-full" />
          </a>
          <a
            href={`mailto:${config.personal.email}`}
            aria-label="Send Email"
            className="w-5 h-5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            <MdEmail className="w-full h-full" />
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn"
            className="w-5 h-5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            <FaLinkedin className="w-full h-full" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {year} <span className="font-medium text-slate-700 dark:text-slate-300">{config.personal.name}</span>
        </p>
      </div>
    </footer>
  )
})