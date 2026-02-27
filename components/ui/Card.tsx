import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverable = false }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden ${
        hoverable ? 'hover:shadow-md transition-shadow cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
