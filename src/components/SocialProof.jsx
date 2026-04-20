import { FaGithub } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

/**
 * Social proof badges for GitHub, Kaggle, LinkedIn
 */
export default function SocialProof({ github, kaggle, linkedin }) {
  const proofs = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: github,
      color: '#ffffff',
      stats: 'View Repositories'
    },
    {
      icon: SiKaggle,
      label: 'Kaggle',
      url: kaggle,
      color: '#20beff',
      stats: 'View Profile'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: linkedin,
      color: '#0a66c2',
      stats: 'Connect with me'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-12">
      {proofs.map((proof) => {
        const Icon = proof.icon;
        return (
          <a
            key={proof.label}
            href={proof.url}
            target="_blank"
            rel="noopener noreferrer"
            className="swiss-card p-6 bg-dark-light hover:bg-dark-lighter transition-all duration-300 hover-lift text-center group"
          >
            <Icon
              size={32}
              className="mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              style={{ color: proof.color }}
            />
            <div className="font-bold text-white mb-1">{proof.label}</div>
            <div className="text-xs text-gray-400">{proof.stats}</div>
          </a>
        );
      })}
    </div>
  );
}
