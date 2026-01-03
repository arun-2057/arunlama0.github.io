export default function About({
	data = {
		heading: 'About Me',
		description:
			"I’m a data analyst with a strong foundation in analytics, statistical modeling, and machine learning. I transform raw datasets into actionable business insights via ETL workflows, predictive modeling, and clear visualizations. My experience spans retail and telecom analytics — I focus on solving business problems with data-driven strategies.",
		details: [
			{ label: 'Location', value: 'Nijgadh, Nepal' },
			{ label: 'Availability', value: 'Immediate' },
			{ label: 'Languages', value: 'English, Nepali' },
			{ label: 'Tools', value: 'Python, SQL, Tableau, Power BI' },
		],
		skills: ['Python', 'SQL', 'Tableau', 'Power BI'],
		cta: { label: 'Contact me', href: '#contact' },
	},
	className = '',
}) {
	const { heading, description, details, skills, cta } = data;

	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className={`py-10 bg-white dark:bg-gray-800 ${className}`}
			role="region"
		>
			<div className="max-w-6xl mx-auto px-4">
				<h2 id="about-heading" className="text-2xl font-bold mb-3">
					{heading}
				</h2>

				<p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
					{description}
				</p>

				<dl className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
					{details.map(({ label, value }) => (
						<div key={label}>
							<dt className="font-semibold">{label}</dt>
							<dd>{value}</dd>
						</div>
					))}
				</dl>

				<ul className="mt-4 flex flex-wrap gap-2" aria-label="Key skills">
					{skills.map((s) => (
						<li key={s}>
							<span
								className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
								tabIndex={0}
							>
								{s}
							</span>
						</li>
					))}
				</ul>

				{cta && cta.href && (
					<div className="mt-6">
						<a
							href={cta.href}
							className="inline-block bg-brand text-white px-4 py-2 rounded shadow transition-brand hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
							aria-describedby="about-heading"
						>
							{cta.label || 'Contact'}
						</a>
					</div>
				)}
			</div>
		</section>
	);
}