import React from 'react';
import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  path?: string;
  onClick?: () => void;
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  path,
  onClick,
  className = '',
}) => {
  const content = (isActive: boolean) => (
    <>
      <Icon
        className={`flex-shrink-0 h-5 w-5 transition-colors ${
          isActive ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
        } mr-3`}
      />
      <span className="flex-1">{label}</span>
    </>
  );

  const baseClasses = `w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 group ${className}`;

  if (path) {
    return (
      <NavLink
        to={path}
        onClick={onClick}
        className={({ isActive }) => `
          ${baseClasses}
          ${isActive
            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
            : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'}
        `}
      >
        {({ isActive }) => content(isActive)}
      </NavLink>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100`}
    >
      {content(false)}
    </button>
  );
};

export default SidebarItem;
