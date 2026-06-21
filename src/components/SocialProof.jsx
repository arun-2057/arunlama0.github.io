import { FaGithub } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function SocialProof({ github, kaggle, linkedin }) {
  const proofs = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: github,
      stats: 'View Repositories'
    },
    {
      icon: SiKaggle,
      label: 'Kaggle',
      url: kaggle,
      stats: 'View Profile'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: linkedin,
      stats: 'Connect'
    }
  ];

  return (
    <div className="flex justify-center items-center gap-6 mb-12">
      {proofs.map((proof) => {
        const Icon = proof.icon;
        return (
          <a
            key={proof.label}
            href={proof.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{proof.label}</span>
          </a>
        );
      })}
    </div>
  );
}