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

  useEffect(() => {
    if (menuOpen) window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    })
    return () => window.removeEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    })
  }, [menuOpen])

  const links = config.navigation;

  return (
    <header className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 fixed w-full z-50 border-b border-slate-200 dark:border-slate-700" style={{ top: 0 }}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" aria-label="Go to top">
          {config.personal.name}
        </a>

        <nav className="hidden md:flex items-center gap-5" aria-label="Primary">
          {links.map((l) => {
            const sectionId = l.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a 
                key={l.href} 
                href={l.href} 
                className={`text-sm transition-colors font-medium ${
                  isActive 
                    ? 'text-teal-600 dark:text-teal-400' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
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
            className="text-sm text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsDark((s) => !s)}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`w-9 h-5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 border ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-slate-200 border-slate-300'}`}
          >
            <div className={`w-4 h-4 rounded-full shadow transition-transform duration-300 ${isDark ? 'ml-5 bg-slate-200' : 'ml-0.5 bg-white'}`} />
          </button>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation menu</span>
            <div className="w-4 h-3.5 relative" aria-hidden="true">
              <span className={`block absolute left-0 right-0 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 top-1.5' : 'top-0'}`} />
              <span className={`block absolute left-0 right-0 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : 'top-1.5'}`} />
              <span className={`block absolute left-0 right-0 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 bottom-1.5' : 'bottom-0'}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden px-4 pb-3">
          <nav 
            ref={mobileMenuRef}
            className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 p-3 flex flex-col gap-1"
          >
            {links.map((l) => {
              const sectionId = l.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 px-3 rounded transition-colors text-sm ${
                    isActive 
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20' 
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
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
              className="inline-block py-2 px-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}