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
    <footer aria-label="Site footer" className="py-16 bg-dark-base dark:bg-dark-base border-t border-brand/20">
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
                className={`w-12 h-12 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 transition-all duration-300 group ${link.color} hover:scale-110 hover:border-current`}
              >
                <Icon className="text-lg group-hover:scale-125 transition-transform" />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent mb-8"></div>

        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-400 mb-4">
            <span className="font-medium text-white">© {year} Arun Lama</span>
            <span className="hidden sm:inline text-brand/40">•</span>
            <span>Data Analyst & ML Engineer</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 mb-6">
            <a href="#hero" className="hover:text-brand transition-colors">Top</a>
            <span>•</span>
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <span>•</span>
            <a href="#projects" className="hover:text-brand transition-colors">Projects</a>
            <span>•</span>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={handleTopClick}
            className="inline-flex items-center gap-2 px-4 py-2 border border-brand/40 text-brand hover:border-brand hover:bg-brand/10 rounded transition-all duration-300 hover:scale-105 font-medium text-sm group"
            aria-label="Back to top"
          >
            Back to Top
            <span className="group-hover:translate-y-1 transition-transform">↑</span>
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-xs text-gray-600 border-t border-brand/10 pt-6">
          <p>Built with React & Tailwind CSS • Optimized for performance & accessibility</p>
          <p className="mt-2">
            <a href="/SECURITY.md" className="hover:text-brand transition-colors">Security</a> • 
            <a href="/LICENSE" className="hover:text-brand transition-colors ml-2">License</a>
          </p>
        </div>
      </div>
    </footer>
  )
})
