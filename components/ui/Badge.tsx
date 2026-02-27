import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
  const variants = {
    primary: 'bg-primary-50 text-primary-700 border-primary-100',
    secondary: 'bg-secondary-50 text-secondary-700 border-secondary-100',
    success: 'bg-success-50 text-success-700 border-success-100',
    warning: 'bg-warning-50 text-warning-700 border-warning-100',
    error: 'bg-error-50 text-error-700 border-error-100',
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
