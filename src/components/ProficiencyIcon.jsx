/**
 * Skill proficiency level icons
 */
export default function ProficiencyIcon({ level }) {
  const icons = {
    Proficient: { emoji: '⭐⭐⭐', color: 'text-brand', label: 'Expert Level' },
    Familiar: { emoji: '⭐⭐', color: 'text-accent', label: 'Intermediate' },
    Learning: { emoji: '⭐', color: 'text-gray-400', label: 'Beginner' },
  };

  const proficiency = icons[level] || icons.Learning;

  return (
    <span
      className={`inline-flex items-center gap-1 ${proficiency.color}`}
      title={proficiency.label}
    >
      <span className="text-sm">{proficiency.emoji}</span>
    </span>
  );
}
