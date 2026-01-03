export default function Coursework() {
	const courses = [
		"Data Structures & Algorithms",
		"Probability & Statistics",
		"Database Management Systems",
		"Supervised Machine Learning: Regression & Classification",
		"Unsupervised Learning & Advanced Learning Algorithms",
		"Data Analysis with Python",
	]

	return (
		<section id="coursework" aria-labelledby="coursework-heading" className="py-10">
			<div className="max-w-6xl mx-auto px-4">
				<h2 id="coursework-heading" className="text-2xl font-bold mb-4 border-b-2 inline-block border-blue-500">
					Relevant Coursework
				</h2>

				<ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
					{courses.map((c, i) => (
						<li
							key={i}
							tabIndex={0}
							role="article"
							aria-label={c}
							className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							{c}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}