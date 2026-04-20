import { useEffect, useState } from 'react';
import { config } from '../config';

/**
 * Dynamic breadcrumb navigation based on scroll position
 */
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
      className="fixed left-0 right-0 top-16 bg-dark-base/80 backdrop-blur-sm z-40 border-b border-brand/10 transition-all duration-300"
      style={{
        opacity: activeSection ? 1 : 0,
        pointerEvents: activeSection ? 'auto' : 'none',
      }}
      aria-label="Breadcrumb"
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 text-sm">
        <span className="text-gray-500">You are in:</span>
        <span className="text-brand font-semibold">
          {currentSection?.label || 'Home'}
        </span>
      </div>
    </nav>
  );
}
