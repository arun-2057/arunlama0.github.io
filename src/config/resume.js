/**
 * Resume & Download Configuration
 * Central hub for resume data and download management
 */

export const resumeData = {
  name: 'Arun Lama',
  title: 'Computer Engineering Student & ML Researcher',
  email: 'lamaarun2001@gmail.com',
  phone: '+977-xxxx-xxxxxx',
  location: 'Nijgadh, Nepal',
  profileUrl: 'https://arunlama0.com.np',
  
  // Professional Summary
  summary: 'Computer Engineering student with 4+ years of hands-on ML research experience. Specializing in RAG systems, predictive modeling, and production ML optimization.',
  
  // Experience
  experience: [
    {
      title: 'Independent ML Researcher',
      company: 'Self-Employed',
      duration: '2021 - Present',
      description: 'Built and deployed ML systems including RAG pipelines, predictive models, and ETL systems.',
      highlights: [
        'Optimized RAG pipeline latency by 60%',
        'Achieved 91% accuracy in customer churn prediction',
        'Processed 25K+ data records across multiple projects',
      ],
    },
    {
      title: 'Kaggle Competitor',
      company: 'Kaggle',
      duration: '2020 - Present',
      description: 'Active competitor in machine learning competitions and data science challenges.',
      highlights: [
        '8+ competition participations',
        '15+ published kernels',
        'Expert rank with 4,250+ points',
      ],
    },
  ],
  
  // Education
  education: [
    {
      degree: 'Bachelor of Engineering (Computer Engineering)',
      school: 'Class of 2025',
      description: 'Specialization in Machine Learning and Data Science',
    },
  ],
  
  // Skills
  skills: {
    'Core Languages': ['Python', 'SQL', 'JavaScript', 'R'],
    'ML & Data': ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'XGBoost'],
    'Data Visualization': ['Tableau', 'Matplotlib', 'Seaborn', 'Power BI'],
    'Tools & Platforms': ['Git', 'Docker', 'Jupyter', 'PostgreSQL', 'Airflow'],
  },
  
  // Certifications
  certifications: [
    { name: 'Machine Learning Specialization', issuer: 'Coursera' },
    { name: 'Python for Data Science', issuer: 'DataCamp' },
  ],
  
  // Social Links
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/arun-2057' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/lama-arun/' },
    { platform: 'Kaggle', url: 'https://www.kaggle.com/zorornoa' },
  ],
};

/**
 * Generate resume PDF (client-side)
 * Requires html2pdf library
 */
export async function downloadResumePDF() {
  // In production, use a library like html2pdf or pdfkit
  // For now, create a simple text version
  const resumeContent = generateResumeText();
  
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
  element.setAttribute('download', 'Arun-Lama-Resume.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

/**
 * Generate resume as plain text
 */
function generateResumeText(resume) {
  const data = resume || resumeData;
  
  let text = `${data.name}\n${data.title}\n\n`;
  text += `${data.email} | ${data.location}\n${data.profileUrl}\n\n`;
  
  text += 'PROFESSIONAL SUMMARY\n' + '='.repeat(50) + '\n';
  text += data.summary + '\n\n';
  
  text += 'EXPERIENCE\n' + '='.repeat(50) + '\n';
  data.experience.forEach(exp => {
    text += `\n${exp.title} | ${exp.company}\n`;
    text += `${exp.duration}\n`;
    text += exp.description + '\n';
    exp.highlights.forEach(h => text += `• ${h}\n`);
  });
  
  text += '\n\nSKILLS\n' + '='.repeat(50) + '\n';
  Object.entries(data.skills).forEach(([category, skills]) => {
    text += `\n${category}: ${skills.join(', ')}\n`;
  });
  
  text += '\n\nEDUCATION\n' + '='.repeat(50) + '\n';
  data.education.forEach(edu => {
    text += `\n${edu.degree} | ${edu.school}\n`;
    text += edu.description + '\n';
  });
  
  return text;
}

/**
 * Open Calendly for scheduling meetings
 */
export function openCalendly() {
  const calendlyUrl = 'https://calendly.com/arunlama'; // Replace with actual Calendly URL
  window.open(calendlyUrl, '_blank', 'width=900,height=700');
}

/**
 * Send email with pre-filled subject
 */
export function sendEmail(subject = 'Let\'s Connect!') {
  const mailtoLink = `mailto:${resumeData.email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
}

export default resumeData;
