import { useState } from 'react';

/**
 * Enhanced form field with animations and validation
 */
export default function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  maxLength,
  showCharCount = false,
  autoComplete,
  required = false
}) {
  const [isFocused, setIsFocused] = useState(false);

  const charCount = value?.length || 0;
  const percentage = maxLength ? (charCount / maxLength) * 100 : 0;

  return (
    <div className="space-y-6 animate-slideUp">
      <label className="block text-xs font-semibold tracking-widest text-slate-500 mb-2 uppercase">
        {label}
        {required && <span className="text-purple-500 ml-1">*</span>}
      </label>

      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            maxLength={maxLength}
            className={`w-full px-4 py-3 bg-transparent border rounded-lg transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 ${
              error
                ? 'border-red-500'
                : 'border-slate-200 dark:border-white/10'
            }`}
            style={{ minHeight: '120px' }}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoComplete={autoComplete}
            maxLength={maxLength}
            className={`w-full px-4 py-3 bg-transparent border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 ${
              error
                ? 'border-red-500'
                : 'border-slate-200 dark:border-white/10'
            }`}
          />
        )}

        {showCharCount && maxLength && (
          <div className="absolute bottom-2 right-4 text-xs text-slate-400">
            {charCount} / {maxLength}
          </div>
        )}
      </div>

      {showCharCount && maxLength && (
        <div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      )}

      {error && (
        <div className="mt-2 text-red-400 text-sm flex items-center gap-1 animate-shake">
          <span>⚠</span>
          {error}
        </div>
      )}
    </div>
  );
}
