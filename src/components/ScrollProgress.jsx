import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-slate-600 via-teal-600 to-slate-700 z-50 transition-all duration-300 ease-out"
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  );
}