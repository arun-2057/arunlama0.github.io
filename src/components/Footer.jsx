import { memo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import { config } from '../config';

export default memo(function Footer() {
  const year = new Date().getFullYear()
  
  const handleTopClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: config.social.github,
      color: 'hover:text-white hover:bg-gray-700/20',
    },
    {
      icon: SiKaggle,
      label: 'Kaggle',
      url: config.social.kaggle,
      color: 'hover:text-blue-400 hover:bg-blue-600/20',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: config.social.linkedin,
      color: 'hover:text-blue-500 hover:bg-blue-600/20',
    },
  ];

  return (
    <footer aria-label="Site footer" className="py-12 bg-white dark:bg-[#0a0a0a] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.label}`}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group hover:scale-110"
              >
                <Icon className="text-lg group-hover:scale-125 transition-transform" />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 dark:bg-white/10 mb-8"></div>

        {/* Main Footer Content - Centered */}
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
            © {year} <span className="font-semibold text-slate-900 dark:text-slate-100">{config.personal.name}</span>
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-xs mb-6">
            Computer Engineering Student & ML Researcher
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-500 mb-8">
            <a href="#hero" onClick={handleTopClick} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Top</a>
            <span>•</span>
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
            <span>•</span>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
            <span>•</span>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
})
