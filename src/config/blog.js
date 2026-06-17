/**
 * Blog & Articles Configuration
 * Central hub for all blog posts and case studies
 */

export const blogPosts = [
  {
    id: 'rag-optimization-2024',
    title: 'Optimizing RAG Pipelines for Production: A 60% Latency Reduction Case Study',
    slug: 'rag-optimization-case-study',
    excerpt: 'How I reduced RAG pipeline latency from 2.4s to 960ms using intelligent chunking and vector caching strategies.',
    date: '2024-11-15',
    readTime: 12,
    category: 'ML Engineering',
    tags: ['RAG', 'LLM', 'Performance', 'Python'],
    image: '/images/rag-optimization.jpg',
    featured: true,
    content: `
# Optimizing RAG Pipelines for Production: A 60% Latency Reduction Case Study

## Problem Statement
Our RAG system was processing queries in 2.4 seconds, which was unacceptable for production use cases requiring sub-second response times.

## Technical Challenges
- Vector database queries taking 800ms
- Document retrieval overhead of 600ms  
- Model inference bottleneck at 1000ms

## Solutions Implemented

### 1. Intelligent Chunking Strategy
Implemented dynamic chunk sizing based on semantic density instead of fixed 512-token chunks.

### 2. Vector Cache Layer
Added in-memory caching for frequently accessed embeddings using LRU cache.

### 3. Query Optimization
Pre-computed query embeddings and batch processing for related queries.

## Results
- **60% latency reduction** (2400ms → 960ms)
- **3.5x throughput improvement**
- **78% reduction in API calls**
- **92% cache hit rate** on production queries

## Key Learnings
1. Semantic chunking > fixed-size chunking
2. Local caching dramatically reduces network I/O
3. Batch processing is crucial for scale

## Takeaway
Production ML systems require both algorithmic optimization AND infrastructure-level improvements.
    `,
    references: [
      { title: 'Original Project', url: '#projects' },
      { title: 'GitHub Repository', url: 'https://github.com/arun-2057' },
    ],
  },
  {
    id: 'xgboost-churn-prediction',
    title: 'Building a Telecom Churn Prediction Model: Feature Engineering Strategy',
    slug: 'churn-prediction-strategy',
    excerpt: 'Deep dive into the feature engineering techniques that achieved 91% accuracy in customer churn prediction.',
    date: '2024-10-22',
    readTime: 10,
    category: 'Data Science',
    tags: ['XGBoost', 'Feature Engineering', 'Classification', 'Business Analytics'],
    image: '/images/churn-analysis.jpg',
    featured: true,
    content: `
# Building a Telecom Churn Prediction Model: Feature Engineering Strategy

## Challenge
Telecom dataset with 7,043 customer records and high class imbalance (26.5% churn rate).

## Approach

### Feature Engineering
- **Temporal features**: Contract duration, monthly charges trend
- **Behavioral features**: Service usage patterns, support ticket frequency
- **Interaction features**: Contract type × Internet service combinations

### Handling Imbalance
- SMOTE oversampling for minority class
- Class weight balancing in XGBoost
- Stratified cross-validation

## Model Performance
- Accuracy: 91%
- Precision: 0.89
- Recall: 0.87
- ROC-AUC: 0.94

## Business Impact
- Identified 200+ high-risk customers
- Potential revenue protection: $45,000/month
    `,
  },
  {
    id: 'eda-seasonal-trends',
    title: 'EDA Deep Dive: Uncovering Seasonal Patterns in Retail Data',
    slug: 'seasonal-trends-analysis',
    excerpt: 'How exploratory data analysis revealed 3 key seasonal trends affecting quarterly sales forecasts.',
    date: '2024-09-18',
    readTime: 8,
    category: 'Data Analysis',
    tags: ['EDA', 'Pandas', 'Data Visualization', 'Seaborn'],
    image: '/images/seasonal-analysis.jpg',
    featured: false,
    content: `
# EDA Deep Dive: Uncovering Seasonal Patterns in Retail Data

Analysis of seasonal trends in winter food sales data revealed actionable insights.

## Key Findings
1. 34% sales spike during holiday weekends
2. Temperature inversely correlates with hot beverage sales  
3. Supply chain delays in Q4 cause inventory shortages

## Techniques Used
- Pandas groupby aggregations
- Seaborn heatmaps for correlation analysis
- Time series decomposition

## Impact
Inventory management improvements based on seasonal predictions.
    `,
  },
];

export const caseStudies = [
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction',
    description: 'Telecom churn modeling with feature engineering and XGBoost ensemble.',
    fullDescription: 'Developed a machine learning pipeline to predict customer churn in a telecom dataset with 7,043 records using XGBoost ensemble methods with sophisticated feature engineering.',
    metrics: 'Achieved 91% accuracy in predicting customer churn',
    results: [
      '91% accuracy on test set',
      'Identified 200+ high-risk customers',
      'Potential revenue protection: $45K/month',
    ],
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'SMOTE'],
    tags: ['Python', 'XGBoost', 'Feature Engineering', 'Classification'],
    link: 'https://www.kaggle.com/code/zorornoa/churn-analysis',
    image: '/images/7_optimized.jpg',
    challenge: 'High class imbalance (26.5% churn) with need for business-level interpretability',
    solution: 'Used SMOTE oversampling, class weight balancing, and SHAP for feature importance analysis',
  },
];

export const getCaseStudyByTag = (tag) => {
  return caseStudies.filter(study => 
    study.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export const getFeaturedBlogPosts = () => {
  return blogPosts.filter(post => post.featured).slice(0, 3);
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const searchBlogPosts = (query) => {
  const q = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q) ||
    post.tags.some(tag => tag.toLowerCase().includes(q))
  );
};
