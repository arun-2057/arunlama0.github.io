/**
 * Skeleton loader component for lazy-loaded sections
 * Provides visual feedback while content is loading
 */
export function SkeletonCard() {
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg animate-pulse">
      <div className="h-5 bg-slate-200 dark:bg-slate-600 rounded w-3/4 mb-3"></div>
      <div className="space-y-2">
        <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-full"></div>
        <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 4 }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonProjectCard() {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 bg-slate-200 dark:bg-slate-700"></div>
      <div className="p-5">
        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
        </div>
      </div>
    </article>
  );
}

export function SkeletonProjectGrid({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonProjectCard key={i} />
      ))}
    </div>
  );
}