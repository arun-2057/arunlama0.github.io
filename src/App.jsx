import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Coursework from './components/Coursework';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white dark:focus:bg-gray-900 focus:px-3 focus:py-2 focus:rounded"
			>
				Skip to content
			</a>

			<Header />

			<main id="main-content" className="mt-6 md:mt-20">
				<Hero />
				<About />
				<Skills />
				<Coursework />
				<Projects />
				<Contact />
			</main>

			<Footer />
		</>
	)
}
