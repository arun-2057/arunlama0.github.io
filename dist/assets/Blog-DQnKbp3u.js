import{j as e}from"./index-Z1IkdC2i.js";import{m as n}from"./proxy-B6MJ2KDG.js";const s=[{id:"rag-optimization-2024",title:"Optimizing RAG Pipelines for Production: A 60% Latency Reduction Case Study",slug:"rag-optimization-case-study",excerpt:"How I reduced RAG pipeline latency from 2.4s to 960ms using intelligent chunking and vector caching strategies.",date:"2024-11-15",readTime:12,category:"ML Engineering",tags:["RAG","LLM","Performance","Python"],image:"/images/rag-optimization.jpg",featured:!0,content:`
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
    `,references:[{title:"Original Project",url:"#projects"},{title:"GitHub Repository",url:"https://github.com/arun-2057"}]},{id:"xgboost-churn-prediction",title:"Building a Telecom Churn Prediction Model: Feature Engineering Strategy",slug:"churn-prediction-strategy",excerpt:"Deep dive into the feature engineering techniques that achieved 91% accuracy in customer churn prediction.",date:"2024-10-22",readTime:10,category:"Data Science",tags:["XGBoost","Feature Engineering","Classification","Business Analytics"],image:"/images/churn-analysis.jpg",featured:!0,content:`
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
    `},{id:"eda-seasonal-trends",title:"EDA Deep Dive: Uncovering Seasonal Patterns in Retail Data",slug:"seasonal-trends-analysis",excerpt:"How exploratory data analysis revealed 3 key seasonal trends affecting quarterly sales forecasts.",date:"2024-09-18",readTime:8,category:"Data Analysis",tags:["EDA","Pandas","Data Visualization","Seaborn"],image:"/images/seasonal-analysis.jpg",featured:!1,content:`
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
    `}],o=()=>s.filter(a=>a.featured).slice(0,3);function d(){const a=o();return e.jsx("section",{id:"blog",className:"py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[e.jsxs("div",{className:"mb-16",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("div",{className:"h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"}),e.jsx("h2",{className:"text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight uppercase",children:"Articles & Insights"})]}),e.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-400 max-w-3xl mt-4 leading-relaxed",children:"Deep-dive technical articles on machine learning, data engineering, and production optimization."})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",children:a.map((t,r)=>e.jsxs(n.article,{className:"group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all hover:shadow-lg",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:r*.1},viewport:{once:!0},whileHover:{y:-8},children:[e.jsx("div",{className:"relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 overflow-hidden",children:t.image&&e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"})}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400",children:t.category}),e.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[t.readTime," min read"]})]}),e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2",children:t.title}),e.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2",children:t.excerpt}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.tags.slice(0,2).map(i=>e.jsx("span",{className:"text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded",children:i},i))}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700",children:[e.jsx("time",{className:"text-xs text-slate-500 dark:text-slate-400",children:new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}),e.jsx("a",{href:`#blog/${t.slug}`,className:"text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:translate-x-1 transition-transform inline-flex",children:"Read →"})]})]})]},t.id))}),e.jsx("div",{className:"text-center",children:e.jsxs(n.a,{href:"#blog",className:"inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all",whileHover:{scale:1.05},whileTap:{scale:.95},children:["View All Articles",e.jsx("span",{children:"→"})]})})]})})}export{d as default};
