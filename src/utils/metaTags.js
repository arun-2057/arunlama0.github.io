/**
 * Meta Tags & SEO Utility
 * Dynamically updates document meta tags for better SEO and OG preview
 */

export function updateMetaTags(config = {}) {
  const {
    title = 'Arun Lama — ML Researcher & Data Scientist',
    description = 'Computer Engineering Student & ML Researcher building high-performance RAG systems and predictive models.',
    image = '/og.png',
    url = 'https://arunlama0.com.np',
    type = 'website',
  } = config;

  // Update basic meta tags
  setMetaTag('title', title);
  setMetaTag('name', 'description', description);
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:image', image);
  setMetaTag('property', 'og:url', url);
  setMetaTag('property', 'og:type', type);
  
  // Twitter Card tags
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
  setMetaTag('name', 'twitter:image', image);
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  
  // Update canonical URL
  setCanonicalUrl(url);
}

export function setMetaTag(attr, attrName, value) {
  let element = document.querySelector(`meta[${attr}="${attrName}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, attrName);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

export function setCanonicalUrl(url) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

export function addJsonLd(schema) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function createPersonSchema(person) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    email: person.email,
    sameAs: person.socialLinks || [],
    knowsAbout: person.skills || [],
    address: {
      '@type': 'PostalAddress',
      addressLocality: person.location,
      addressCountry: 'Nepal',
    },
  };
}

export function createArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    author: {
      '@type': 'Person',
      name: 'Arun Lama',
    },
  };
}

export function createProjectSchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.description,
    url: project.url,
    author: {
      '@type': 'Person',
      name: 'Arun Lama',
    },
    codeRepository: project.repository,
    programmingLanguage: project.languages || [],
  };
}
