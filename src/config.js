// Portfolio Configuration
export const config = {
  // Personal Information
  personal: {
    name: 'Arun Lama',
    title: 'Computer Engineering Student & ML Researcher',
    email: 'lamaarun2001@gmail.com',
    location: 'Nijgadh, Nepal',
    availability: 'Immediate',
    languages: ['English', 'Nepali'],
  },
  
  // Hero section - punchy value proposition (1-2 lines max)
  heroBio: "Computer Engineering Student & ML Researcher building high-performance RAG systems and predictive models.",

  // About Me section - detailed narrative with personal story
  aboutBio: "I am a Computer Engineering student (Class of 2025) and an Independent ML Researcher with over 4 years of hands-on experience in Python and Data Science. My work bridges the gap between academic theory and real-world deployment—from engineering predictive models for global retail giants to optimizing Large Language Models (LLMs) for high-speed performance.",
  
  // Extended bio paragraph for About section
  aboutBioExtended: "An active Kaggle competitor, I thrive on the challenge of translating complex datasets into actionable business intelligence. My expertise spans the full ML lifecycle: building robust ETL pipelines, designing neural networks in PyTorch, and deploying RAG systems that cut latency by 60%. Whether I'm forecasting market trends or optimizing RAG pipelines to run on minimal hardware, I am driven by the pursuit of efficient, data-driven solutions.",

  // Social Links
  social: {
    github: 'https://github.com/arun-2057',
    linkedin: 'https://www.linkedin.com/in/lama-arun/',
    kaggle: 'https://www.kaggle.com/zorornoa',
  },
  
  // Navigation Links
  navigation: [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#coursework', label: 'Coursework' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Articles' },
    { href: '#contact', label: 'Contact', hideDot: true },
  ],

  // Skills organized by proficiency tiers (for Tiered Pill System)
  skills: {
    expert: ['Python', 'SQL', 'Pandas', 'NumPy', 'Tableau', 'Git'],
    proficient: ['Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter', 'PostgreSQL', 'Excel'],
    learning: ['TensorFlow', 'Docker', 'Power BI', 'R', 'Airflow'],
  },

  // Coursework
  coursework: [
    'Data Structures & Algorithms',
    'Probability & Statistics',
    'Database Management Systems',
    'Supervised Machine Learning: Regression & Classification',
    'Unsupervised Learning & Advanced Learning Algorithms',
    'Data Analysis with Python',
  ],

  // Projects
  projects: [
    {
      title: 'Customer Churn Prediction',
      desc: 'Telecom churn modeling with feature engineering and XGBoost ensemble.',
      metrics: 'Achieved 91% accuracy in predicting customer churn',
      tags: ['Python', 'XGBoost', 'Feature Engineering'],
      link: 'https://www.kaggle.com/code/zorornoa/churn-analysis',
      image: '/images/7_optimized.jpg',
    },
    {
      title: 'Winter Food Analysis',
      desc: 'Exploratory data analysis of winter food sales using Pandas and Seaborn.',
      metrics: 'Identified 3 key seasonal trends affecting sales',
      tags: ['EDA', 'Seaborn', 'Pandas'],
      link: 'https://www.kaggle.com/code/zorornoa/winter-food-analysis',
      image: '/images/13_optimized.jpg',
    },
    {
      title: 'Mental Health Analysis App',
      desc: 'Analysis and visualization of mental health survey data with interactive dashboard.',
      metrics: 'Processed 25K+ survey responses with interactive insights',
      tags: ['Flask', 'Pandas', 'Visualization'],
      link: 'https://github.com/sHoYo057/Mental_health',
      image: '/images/yellow-orange-report_optimized.jpg',
    },
    {
      title: 'Premier League Data Analysis',
      desc: 'Exploratory data analysis of Premier League stats using Pandas and Matplotlib.',
      metrics: 'Analyzed 10+ seasons of match data for pattern discovery',
      tags: ['EDA', 'Matplotlib', 'Pandas'],
      link: 'https://www.kaggle.com/code/zorornoa/premier-league-analysis',
      image: '/images/9_optimized.jpg',
    },
  ],

  // About Section Details
  aboutDetails: [
    { label: 'Graduation', value: 'Class of 2025' },
    { label: 'Location', value: 'Nijgadh, Nepal' },
    { label: 'Availability', value: 'Immediate' },
    { label: 'Experience', value: '4+ Years' },
  ],

  // Hero Tags - clean text labels without '#' symbols
  heroTags: ['Forecasting', 'ETL', 'RAG', 'PyTorch'],

  // Resume Download Path
  resumePath: '/ATSversion.pdf',

  // Form Settings
  form: {
    name: 'contact',
    honeypotField: 'website_url',
    maxMessageLength: 1000,
    minMessageLength: 10,
    rateLimitWindow: 60000,
    maxSubmissionsPerWindow: 3,
  },
  
  // Heading and description for About section
  heading: 'About Me',
  cta: { label: 'Get in Touch', href: '#contact' },
};

// Image assets configuration
export const images = {
  profileSrc: '/profile_optimized.jpg',
  profile200: '/profile_optimized-200.jpg',
  profile400: '/profile_optimized-400.jpg',
  profileWebp200: '/profile_optimized-200.webp',
  profileWebp400: '/profile_optimized-400.webp',
};

// Color Theme Configuration - Calm & Modern
export const theme = {
  colors: {
    // Primary gradient colors (calm blue-gray)
    primary: '#475569',      // Slate 600 - muted blue-gray
    primaryDark: '#334155',  // Slate 700 - deeper blue-gray
    primaryLight: '#64748b', // Slate 500 - softer blue-gray
    
    // Secondary accent (subtle teal for highlights)
    secondary: '#0d9488',    // Teal 700 - muted teal
    secondaryDark: '#0f766e',
    secondaryLight: '#14b8a6',
    
    // Gradient combinations
    gradientFrom: '#64748b',  // Slate 500
    gradientVia: '#475569', // Slate 600
    gradientTo: '#334155',   // Slate 700
    
    // Neutral colors
    background: {
      light: '#f8fafc',      // Slate 50 - very light gray
      dark: '#1e293b',       // Slate 800 - deep gray (not black)
      card: {
        light: '#ffffff',
        dark: '#334155',      // Slate 700 - card background
      }
    },
    text: {
      primary: {
        light: '#1e293b',     // Slate 800
        dark: '#f1f5f9',      // Slate 100
      },
      secondary: {
        light: '#64748b',     // Slate 500
        dark: '#94a3b8',      // Slate 400
      }
    }
  },
  
  shadows: {
    soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  }
};

export default config;