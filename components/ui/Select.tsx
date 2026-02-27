import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ label, error, options, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
          {label}
        </label>
      )}
      <select
        className={`w-full px-4 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border ${
          error ? 'border-error-500 focus:ring-error-500' : 'border-neutral-300 dark:border-neutral-700 focus:ring-primary-500'
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:bg-neutral-50 disabled:dark:bg-neutral-800 disabled:text-neutral-500 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-error-600 dark:text-error-400">{error}</p>}
    </div>
  );
};

export default Select;
