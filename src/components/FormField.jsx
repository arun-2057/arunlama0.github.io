import { useState } from 'react';

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

  return (
    <div className="space-y-3">
      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 uppercase">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
          className={`w-full px-3 py-2.5 bg-white dark:bg-slate-900 border rounded-md transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 text-sm ${
            error
              ? 'border-red-500'
              : 'border-slate-300 dark:border-slate-600'
          }`}
          style={{ minHeight: '100px' }}
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
          className={`w-full px-3 py-2.5 bg-white dark:bg-slate-900 border rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm ${
            error
              ? 'border-red-500'
              : 'border-slate-300 dark:border-slate-600'
          }`}
        />
      )}

      {error && (
        <div className="mt-1.5 text-red-500 text-xs flex items-center gap-1">
          <span>⚠</span>
          {error}
        </div>
      )}
    </div>
  );
}