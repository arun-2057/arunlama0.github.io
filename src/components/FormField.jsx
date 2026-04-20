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
    <div className="mb-6 animate-slideUp">
      <label className="block text-sm font-semibold text-white mb-2 uppercase tracking-wide">
        {label}
        {required && <span className="text-brand ml-1">*</span>}
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
            className={`w-full px-4 py-3 bg-dark-lighter text-white rounded border-l-2 transition-all duration-300 resize-none focus:outline-none ${
              error
                ? 'border-red-500 focus:bg-red-500/10'
                : isFocused
                ? 'border-brand focus:bg-dark-base'
                : 'border-gray-600 hover:border-gray-500'
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
            className={`w-full px-4 py-3 bg-dark-lighter text-white rounded border-l-2 transition-all duration-300 focus:outline-none ${
              error
                ? 'border-red-500 focus:bg-red-500/10'
                : isFocused
                ? 'border-brand focus:bg-dark-base'
                : 'border-gray-600 hover:border-gray-500'
            }`}
          />
        )}

        {showCharCount && maxLength && (
          <div className="absolute bottom-2 right-4 text-xs text-gray-400">
            {charCount} / {maxLength}
          </div>
        )}
      </div>

      {showCharCount && maxLength && (
        <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand to-brand-light transition-all duration-300"
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
