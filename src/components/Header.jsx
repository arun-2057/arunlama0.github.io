import { useState, useEffect, useRef } from 'react'
import { config } from '../config'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [activeSection, setActiveSection] = useState('')
  const mobileMenuRef = useRef(null)
  const firstFocusableRef = useRef(null)
  const lastFocusableRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])
  
  // Active section tracking on scroll
  useEffect(() => {
    const sections = config.navigation.map(nav => nav.href.substring(1))
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )
    
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [])

  // Focus trapping for mobile menu accessibility
  useEffect(() => {
    if (!menuOpen) return;
    
    // Focus first element when menu opens
    if (firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }
    
    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;
      
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };
    
    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [menuOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const links = config.navigation

  return (
    <header className="backdrop-blur-md bg-white/70 dark:bg-black/70 fixed w-full z-50 shadow-soft border-b border-slate-200 dark:border-white/10" style={{ top: 0 }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-start justify-between">
        <a href="#hero" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity" aria-label="Go to top" style={{ letterSpacing: '0.02em' }}>
          {config.personal.name}
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {links.map((l) => {
            const sectionId = l.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a 
                key={l.href} 
                href={l.href} 
                className={`text-base transition-colors font-medium relative ${
                  isActive 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                )}
              </a>
            )
          })}
          <a
            href={config.resumePath}
            download
            aria-label="Download resume"
            className="ml-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Animated Pill Toggle */}
          <button
            type="button"
            onClick={() => setIsDark((s) => !s)}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`pill group relative w-[72px] h-[36px] rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-base flex-shrink-0 border-2 ${isDark ? 'bg-dark-light border-indigo-600/30 dark:border-indigo-400/30' : 'bg-white border-indigo-600/20'}`}
            title={isDark ? 'Switch to light' : 'Switch to dark'}
          >
            <div className={`thumb absolute top-[2px] w-[28px] h-[28px] rounded-full flex items-center justify-center transition-all duration-300 ease-out ${isDark ? 'left-[2px] bg-dark-base' : 'left-[38px] bg-white'}`}>
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-opacity duration-200">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-opacity duration-200">
                  <circle cx="12" cy="12" r="4" stroke="var(--brand)" strokeWidth="1.8"/>
                  <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation menu</span>
            {/* simple hamburger */}
            <div className="w-5 h-4 relative" aria-hidden="true">
              <span className={`block absolute left-0 right-0 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 top-1.5' : 'top-0'}`} />
              <span className={`block absolute left-0 right-0 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : 'top-1.5'}`} />
              <span className={`block absolute left-0 right-0 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 bottom-1.5' : 'bottom-0'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden px-4 pb-4">
          <div 
            ref={mobileMenuRef}
            className="max-w-6xl mx-auto glass rounded-xl shadow-lg p-4 flex flex-col gap-2"
          >
            {links.map((l, index) => {
              const sectionId = l.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  ref={index === 0 ? firstFocusableRef : index === links.length - 1 ? lastFocusableRef : null}
                  className={`block py-2.5 px-4 rounded-lg transition-colors font-medium ${
                    isActive 
                      ? 'bg-indigo-600/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border-l-2 border-indigo-600 dark:border-indigo-400' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
            <a
              href={config.resumePath}
              download
              aria-label="Download resume"
              onClick={() => setMenuOpen(false)}
              ref={lastFocusableRef}
              className="mt-2 inline-block btn btn-secondary text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}