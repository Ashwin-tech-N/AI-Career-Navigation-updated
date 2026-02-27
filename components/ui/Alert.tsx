import React from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ title, children, variant = 'info', className = '' }) => {
  const variants = {
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: <Info className="h-5 w-5 text-blue-400" />,
    },
    success: {
      container: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      icon: <CheckCircle className="h-5 w-5 text-emerald-400" />,
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: <AlertCircle className="h-5 w-5 text-red-400" />,
    },
  };

  return (
    <div className={`p-4 rounded-md border ${variants[variant].container} ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">{variants[variant].icon}</div>
        <div className="ml-3">
          {title && <h3 className="text-sm font-medium">{title}</h3>}
          <div className={`${title ? 'mt-2' : ''} text-sm`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
