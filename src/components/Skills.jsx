export default function Skills() {
	const groups = {
		Programming: ['Python', 'SQL', 'R'],
		'Data & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
		Visualization: ['Tableau', 'Power BI', 'Matplotlib'],
		Tools: ['Git', 'Jupyter', 'Docker'],
	}

	return (
		<section id="skills" aria-labelledby="skills-heading" className="py-10 bg-white dark:bg-gray-800">
			<div className="max-w-6xl mx-auto px-4">
				<h2 id="skills-heading" className="text-2xl font-bold mb-4">
					Skills
				</h2>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{Object.entries(groups).map(([category, items]) => (
						<div
							key={category}
							className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-blue-400"
							role="region"
							aria-label={category}
							tabIndex={0}
						>
							<h3 className="font-semibold mb-2">{category}</h3>
							<ul className="flex flex-wrap gap-2">
								{items.map((skill) => (
									<li key={skill}>
										<span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded shadow text-sm">
											<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-medium">
												{skill[0]}
											</span>
											<span>{skill}</span>
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}