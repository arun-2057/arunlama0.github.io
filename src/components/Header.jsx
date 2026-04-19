import { useState, useEffect, useRef } from 'react'
import { config } from '../config'
import { FaSun } from 'react-icons/fa'
import moonIcon from '/moon-icon.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const mobileMenuRef = useRef(null)
  const firstFocusableRef = useRef(null)
  const lastFocusableRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

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
    <header className="backdrop-blur glass fixed w-full z-50 shadow-soft" style={{ top: 0 }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-start justify-between">
        <a href="#hero" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity" aria-label="Go to top" style={{ letterSpacing: '0.02em' }}>
          {config.personal.name}
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-gray-700 dark:text-gray-300 hover:text-brand transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a
            href={config.resumePath}
            download
            aria-label="Download resume"
            className="ml-3 glow-on-hover bg-brand text-white px-5 py-2.5 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark((s) => !s)}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            title={isDark ? 'Switch to light' : 'Switch to dark'}
          >
            {isDark ? (
              <img src={moonIcon} alt="Moon icon" className="w-5 h-5" aria-hidden="true" />
            ) : (
              <FaSun className="text-xl" aria-hidden="true" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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
            {links.map((l, index) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                ref={index === 0 ? firstFocusableRef : index === links.length - 1 ? lastFocusableRef : null}
                className="block py-2.5 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href={config.resumePath}
              download
              aria-label="Download resume"
              onClick={() => setMenuOpen(false)}
              ref={lastFocusableRef}
              className="mt-2 inline-block glow-on-hover bg-brand text-white px-4 py-2.5 rounded-lg font-semibold text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}