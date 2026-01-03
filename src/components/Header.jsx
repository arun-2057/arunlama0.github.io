import { useState, useEffect } from 'react'

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [isDark, setIsDark] = useState(() => {
		if (typeof window === 'undefined') return false
		const saved = localStorage.getItem('theme')
		if (saved) return saved === 'dark'
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
	})

	useEffect(() => {
		const root = document.documentElement
		if (isDark) root.classList.add('dark')
		else root.classList.remove('dark')
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	}, [isDark])

	useEffect(() => {
		function onKey(e) {
			if (e.key === 'Escape') setMenuOpen(false)
		}
		if (menuOpen) window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [menuOpen])

    const links = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#coursework', label: 'Coursework' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <header className="backdrop-blur bg-white/60 dark:bg-gray-900/60 fixed w-full z-50 shadow" style={{ top: 0 }}>
            <div className="max-w-6xl mx-auto px-4 py-2 flex items-start justify-between">
                <a href="#hero" className="text-2xl font-bold" aria-label="Go to top" style={{ letterSpacing: '0.02em' }}>
                    Arun Lama
                </a>

                <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="text-base hover:text-blue-500">
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="/ATSversion.pdf"
                        download
                        aria-label="Download resume"
                        className="ml-3 bg-blue-600 text-white px-4 py-2 rounded text-base font-semibold"
                        style={{ fontSize: '1.05rem' }}
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
                        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-xl"
                        title={isDark ? 'Switch to light' : 'Switch to dark'}
                    >
                        {isDark ? '🌙' : '☀️'}
                    </button>

                    {/* Mobile menu button */}
					<button
						type="button"
						className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
						aria-controls="mobile-menu"
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((s) => !s)}
					>
						<span className="sr-only">Toggle navigation</span>
						{/* simple hamburger */}
						<div className="w-5 h-4 relative">
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
					<div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded shadow p-3 flex flex-col gap-2">
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								onClick={() => setMenuOpen(false)}
								className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
							>
								{l.label}
							</a>
						))}
						<a
							href="/ATSversion.pdf"
							download
							aria-label="Download resume"
							onClick={() => setMenuOpen(false)}
							className="mt-1 inline-block bg-blue-600 text-white px-3 py-1 rounded"
						>
							Resume
						</a>
					</div>
				</div>
			)}
		</header>
	)
}