/**
 * Performance & Analytics Metrics
 * Portfolio performance statistics and metrics
 */

export const performanceMetrics = {
  lighthouse: {
    performance: 95,
    accessibility: 98,
    bestPractices: 100,
    seo: 100,
    lastUpdated: '2024-06-15',
  },
  webVitals: {
    lcp: 1.2, // Largest Contentful Paint in seconds
    fid: 0.08, // First Input Delay in milliseconds
    cls: 0.05, // Cumulative Layout Shift
    ttfb: 0.4, // Time to First Byte in seconds
  },
  buildMetrics: {
    bundleSize: '45 KB', // gzipped
    jsSize: '32 KB',
    cssSize: '8 KB',
    imagesOptimized: 94,
    codeChunks: 6,
  },
  pageMetrics: {
    pages: 1,
    components: 15,
    lines: 5420,
    accessibility: 'WCAG 2.1 AAA',
  },
};

export const kaggleStats = {
  competitions: 8,
  kernels: 15,
  datasets: 3,
  rank: 'Expert',
  points: 4250,
};

export const gitHubStats = {
  repositories: 18,
  stars: 145,
  followers: 45,
  contributions: 1200,
  streak: 47, // days
};

export const socialMediaStats = {
  linkedin: {
    followers: 520,
    posts: 18,
    engagement: 4.2,
  },
  kaggle: kaggleStats,
  github: gitHubStats,
};

export function getPerformanceScore() {
  const { lighthouse } = performanceMetrics;
  const average = (
    lighthouse.performance +
    lighthouse.accessibility +
    lighthouse.bestPractices +
    lighthouse.seo
  ) / 4;
  return Math.round(average);
}

export function formatMetric(value, unit = '') {
  if (typeof value === 'number') {
    if (value < 0.1) return value.toFixed(3) + unit;
    if (value < 1) return value.toFixed(2) + unit;
    return Math.round(value) + unit;
  }
  return value;
}

export const performanceTimeline = [
  {
    date: '2024-06-15',
    event: 'Lighthouse Score: 98',
    description: 'Achieved 98 average Lighthouse score',
  },
  {
    date: '2024-05-20',
    event: 'PWA Certified',
    description: 'Portfolio converted to PWA with service worker',
  },
  {
    date: '2024-04-10',
    event: 'Accessibility Audit: AAA',
    description: 'Achieved WCAG 2.1 Level AAA compliance',
  },
];
