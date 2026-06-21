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
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback components
function SkillsLoadingFallback() {
	return (
		<section className="py-16 bg-white dark:bg-slate-800">
			<div className="max-w-5xl mx-auto px-4">
				<div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-16 mb-5 animate-pulse"></div>
				<SkeletonGrid count={4} />
			</div>
		</section>
	);
}

function ProjectsLoadingFallback() {
	return (
		<section className="py-16 bg-white dark:bg-slate-800">
			<div className="max-w-5xl mx-auto px-4">
				<div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-20 mb-5 animate-pulse"></div>
				<SkeletonProjectGrid count={4} />
			</div>
		</section>
	);
}

function DefaultLoadingFallback() {
	return (
		<div className="flex items-center justify-center min-h-[150px]">
			<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div>
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
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white dark:focus:bg-slate-800 focus:px-2 focus:py-1 focus:rounded text-xs"
			>
				Skip to content
			</a>

			<Header />

			<main id="main-content" className="mt-6">
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
					<Contact />
				</Suspense>
			</main>

			<Footer />
		</ErrorBoundary>
	)
}