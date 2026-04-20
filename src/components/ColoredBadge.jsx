/**
 * Color-coded tech tags with category-specific colors
 */
const colorMap = {
  // Python ecosystem
  Python: '#3776ab',
  Pandas: '#150458',
  NumPy: '#013243',
  Scikit: '#f7931e',
  TensorFlow: '#ff6f20',
  Keras: '#d00000',
  
  // Data viz
  Tableau: '#e8762b',
  'Power BI': '#f2cc1c',
  Matplotlib: '#11557c',
  Seaborn: '#44546a',
  
  // Web
  React: '#61dafb',
  JavaScript: '#f7df1e',
  'Node.js': '#339933',
  HTML: '#e34c26',
  CSS: '#563d7c',
  
  // Tools
  Git: '#f1502f',
  Docker: '#2496ed',
  Jupyter: '#f37726',
  PostgreSQL: '#336791',
  SQL: '#cc2927',
  
  // ML/Data
  XGBoost: '#121212',
  'Feature Engineering': '#4f46e5',
  EDA: '#7c3aed',
  
  // Default
  default: '#4f46e5'
};

export default function ColoredBadge({ tag, className = '' }) {
  const color = colorMap[tag] || colorMap.default;

  return (
    <span
      className={`px-3 py-1 rounded text-xs font-semibold transition-all duration-300 hover:scale-105 cursor-default ${className}`}
      style={{
        backgroundColor: `${color}20`,
        borderLeft: `2px solid ${color}`,
        color: color
      }}
    >
      {tag}
    </span>
  );
}
