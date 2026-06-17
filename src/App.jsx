import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Breadcrumb from './components/Breadcrumb';
import { SkeletonGrid, SkeletonProjectGrid } from './components/Skeleton';

// Lazy load components for code splitting
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Coursework = lazy(() => import('./components/Coursework'));
const Projects = lazy(() => import('./components/Projects'));
const Blog = lazy(() => import('./components/Blog'));
const PerformanceAnalytics = lazy(() => import('./components/PerformanceAnalytics'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback components
function SkillsLoadingFallback() {
	return (
		<section className="py-16 bg-dark-base dark:bg-dark-base">
			<div className="max-w-5xl mx-auto px-4">
				<div className="h-8 bg-gray-700 rounded w-24 mb-8 animate-pulse"></div>
				<SkeletonGrid count={4} />
			</div>
		</section>
	);
}

function ProjectsLoadingFallback() {
	return (
		<section className="py-16 bg-dark-base dark:bg-dark-base">
			<div className="max-w-6xl mx-auto px-4">
				<div className="h-8 bg-gray-700 rounded w-32 mb-8 animate-pulse"></div>
				<SkeletonProjectGrid count={4} />
			</div>
		</section>
	);
}

function DefaultLoadingFallback() {
	return (
		<div className="flex items-center justify-center min-h-[200px]">
			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
		</div>
	);
}

export default function App() {
	return (
		<ErrorBoundary>
			<ScrollProgress />
			<Breadcrumb />
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white dark:focus:bg-gray-900 focus:px-3 focus:py-2 focus:rounded"
			>
				Skip to content
			</a>

			<Header />

			<main id="main-content" className="mt-6 md:mt-20">
				<Suspense fallback={<DefaultLoadingFallback />}>
					<Hero />
				</Suspense>
				<Suspense fallback={<DefaultLoadingFallback />}>
					<About />
				</Suspense>
				<Suspense fallback={<SkillsLoadingFallback />}>
					<Skills />
				</Suspense>
				<Suspense fallback={<DefaultLoadingFallback />}>
					<Coursework />
				</Suspense>
				<Suspense fallback={<ProjectsLoadingFallback />}>
					<Projects />
				</Suspense>
				<Suspense fallback={<DefaultLoadingFallback />}>
					<Blog />
				</Suspense>
				<Suspense fallback={<DefaultLoadingFallback />}>
					<PerformanceAnalytics />
				</Suspense>
				<Suspense fallback={<DefaultLoadingFallback />}>
					<Contact />
				</Suspense>
			</main>

			<Footer />
		</ErrorBoundary>
	)
}
