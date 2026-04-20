/**
 * Skeleton loader component for lazy-loaded sections
 * Provides visual feedback while content is loading
 */
export function SkeletonCard() {
  return (
    <div className="p-5 swiss-card accent-left bg-dark-light animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 4 }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonProjectCard() {
  return (
    <article className="swiss-card bg-dark-light dark:bg-dark-light group relative overflow-hidden animate-pulse">
      <div className="relative overflow-hidden border-b border-dark-lighter">
        <div className="w-full h-48 md:h-56 bg-gray-700"></div>
      </div>
      <div className="p-5">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-6 bg-gray-700 rounded w-16"></div>
          ))}
        </div>
        <div className="h-10 bg-gray-700 rounded w-24"></div>
      </div>
    </article>
  );
}

export function SkeletonProjectGrid({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonProjectCard key={i} />
      ))}
    </div>
  );
}
