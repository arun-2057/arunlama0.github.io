import { useEffect, useState } from 'react';
import { config } from '../config';

export default function Breadcrumb() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = config.navigation.map(nav => ({
      id: nav.href.substring(1),
      label: nav.label
    }));

    const handleScroll = () => {
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 150) {
          currentSection = section.id;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSection = config.navigation.find(nav => nav.href.substring(1) === activeSection);

  return (
    <nav
      className="fixed left-0 right-0 top-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm z-40 border-b border-slate-200 dark:border-slate-700 transition-all duration-300"
      style={{
        opacity: activeSection ? 1 : 0,
        pointerEvents: activeSection ? 'auto' : 'none',
      }}
      aria-label="Breadcrumb"
    >
      <div className="max-w-5xl mx-auto px-4 py-1.5 flex items-center gap-2 text-xs">
        <span className="text-slate-500">You are in:</span>
        <span className="text-slate-700 dark:text-slate-300 font-medium">
          {currentSection?.label || 'Home'}
        </span>
      </div>
    </nav>
  );
}