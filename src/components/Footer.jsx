export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer aria-label="Site footer" className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
			<div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2">
				<span>© {year} Arun Lama — Data Analyst.</span>
				<span className="hidden sm:inline">•</span>
				<a href="#contact" className="text-brand font-medium hover:underline">Contact</a>
			</div>
		</footer>
	)
}