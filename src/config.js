// Portfolio Configuration
export const config = {
  // Personal Information
  personal: {
    name: 'Arun Lama',
    title: 'Data Analyst',
    email: 'lamaarun2001@gmail.com',
    location: 'Nijgadh, Nepal',
    availability: 'Immediate',
    languages: ['English', 'Nepali'],
  },
  
  // Shared bio text (used in multiple sections)
  bio: "Predictive Modeling • ETL Pipelines • Business Intelligence. Solving high-stakes problems in Retail and Telecom with data-driven precision.",

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
    { href: '#contact', label: 'Contact' },
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
    { label: 'Location', value: 'Nijgadh, Nepal' },
    { label: 'Availability', value: 'Immediate' },
    { label: 'Languages', value: 'English, Nepali' },
    { label: 'Tools', value: 'Python, SQL, Tableau, Power BI' },
  ],

  // Hero Tags
  heroTags: ['Forecasting', 'Churn Prediction', 'ETL & SQL', 'Visualization'],

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

// Color Theme Configuration
export const theme = {
  colors: {
    // Primary gradient colors (modern purple-blue-teal)
    primary: '#6366f1',      // Indigo
    primaryDark: '#4f46e5',  // Darker indigo
    primaryLight: '#818cf8', // Lighter indigo
    
    // Secondary accent (teal)
    secondary: '#14b8a6',    // Teal
    secondaryDark: '#0d9488',
    secondaryLight: '#2dd4bf',
    
    // Gradient combinations
    gradientFrom: '#6366f1',  // Indigo
    gradientVia: '#8b5cf6',   // Violet
    gradientTo: '#06b6d4',    // Cyan
    
    // Neutral colors
    background: {
      light: '#f8fafc',       // Slate 50
      dark: '#0f172a',        // Slate 900
      card: {
        light: '#ffffff',
        dark: '#1e293b',      // Slate 800
      }
    },
    text: {
      primary: {
        light: '#1e293b',     // Slate 800
        dark: '#f1f5f9',      // Slate 100
      },
      secondary: {
        light: '#475569',     // Slate 600
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
