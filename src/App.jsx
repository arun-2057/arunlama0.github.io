import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load components for code splitting
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Coursework = lazy(() => import('./components/Coursework'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component
function LoadingFallback() {
	return (
		<div className="flex items-center justify-center min-h-[200px]">
			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
		</div>
	);
}

export default function App() {
	return (
		<ErrorBoundary>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white dark:focus:bg-gray-900 focus:px-3 focus:py-2 focus:rounded"
			>
				Skip to content
			</a>

			<Header />

			<main id="main-content" className="mt-6 md:mt-20">
				<Suspense fallback={<LoadingFallback />}>
					<Hero />
					<About />
					<Skills />
					<Coursework />
					<Projects />
					<Contact />
				</Suspense>
			</main>

			<Footer />
		</ErrorBoundary>
	)
}
