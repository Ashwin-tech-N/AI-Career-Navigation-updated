import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 bg-white border ${
          error ? 'border-error-500 focus:ring-error-500' : 'border-neutral-300 focus:ring-primary-500'
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:bg-neutral-50 disabled:text-neutral-500 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
    </div>
  );
};

export default Input;
