/**
 * GitHub API Integration
 * Fetches and caches GitHub repository data for dynamic project showcase
 */

const CACHE_KEY = 'github_repos_cache';
const CACHE_DURATION = 3600000; // 1 hour in milliseconds
const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubRepos(username, sortBy = 'updated') {
  // Check cache first
  const cached = getCachedRepos();
  if (cached) return cached;

  try {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/repos?sort=${sortBy}&per_page=50&type=owner`
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos = await response.json();
    const enhanced = repos.map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics || [],
      updated: repo.updated_at,
      isFork: repo.fork,
    }));

    // Cache the results
    cacheRepos(enhanced);
    return enhanced;
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}

export async function fetchGitHubStats(username) {
  try {
    const response = await fetch(`${GITHUB_API}/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos,
      publicGists: data.public_gists,
      contributionsCount: data.contributions || 0,
    };
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error);
    return {};
  }
}

export async function fetchGitHubContributions(username) {
  try {
    const response = await fetch(`${GITHUB_API}/users/${username}/repos`);
    const repos = await response.json();
    
    let totalContributions = 0;
    repos.forEach(repo => {
      totalContributions += repo.stargazers_count;
    });

    return totalContributions;
  } catch (error) {
    console.error('Failed to fetch contributions:', error);
    return 0;
  }
}

// Cache helpers
function getCachedRepos() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Cache read error:', error);
    return null;
  }
}

function cacheRepos(repos) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: repos,
      timestamp: Date.now(),
    }));
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

export function clearReposCache() {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch (error) {
    console.error('Cache clear error:', error);
  }
}
