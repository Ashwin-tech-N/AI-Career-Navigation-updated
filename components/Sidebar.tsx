import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  FileEdit,
  Briefcase,
  BookOpen,
  BarChart2,
  LogOut,
  ShieldAlert,
  Globe
} from './ui/Icons';
import { NavItem, UserProfile } from '../types';
import SidebarItem from './ui/SidebarItem';

const navItems: NavItem[] = [
  { id: 'trends', label: 'Job Trend Analysis', icon: LayoutDashboard, path: '/' },
  { id: 'training', label: 'Training Mode', icon: BookOpen, path: '/training-mode' },
  { id: 'builder', label: 'Role-Based Resume Builder', icon: FileEdit, path: '/builder' },
  { id: 'ats', label: 'Resume ATS Analyzer', icon: FileText, path: '/ats' },
  { id: 'matching', label: 'Smart Job Matching', icon: Briefcase, path: '/matching' },
  { id: 'fake-job', label: 'Fake Job Detection', icon: ShieldAlert, path: '/fake-job-detection' },
  { id: 'accessibility', label: 'Opportunity Accessibility', icon: Globe, path: '/opportunity-accessibility' },
  { id: 'progress', label: 'Progress Dashboard', icon: BarChart2, path: '/progress' },
];

interface SidebarProps {
  onLogout: () => void;
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout, isOpen, onClose, userProfile }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-neutral-900/50 backdrop-blur-sm transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-72 bg-white dark:bg-neutral-900 border-r border-neutral-100 dark:border-neutral-800 flex flex-col transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-full
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-neutral-50 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/20">
              C
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
              CareerFlow AI
            </span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto no-scrollbar py-6 px-4 space-y-1.5">
          {navItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              path={item.path}
              onClick={() => window.innerWidth < 1024 && onClose()}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-50 dark:border-neutral-800 space-y-2">
          <NavLink
            to="/profile"
            onClick={() => window.innerWidth < 1024 && onClose()}
            className={({ isActive }) => `
              flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-200 group
              ${isActive
                ? 'bg-primary-50 dark:bg-primary-900/20 ring-1 ring-primary-100 dark:ring-primary-900/30'
                : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'}
            `}
          >
            {({ isActive }) => (
              <>
                <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                  {userProfile.name.charAt(0)}
                </div>
                <div className="flex-1 overflow-hidden text-left">
                  <p className={`font-bold text-sm truncate ${isActive ? 'text-primary-900 dark:text-primary-300' : 'text-neutral-900 dark:text-neutral-100'}`}>
                    {userProfile.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 truncate">
                    {userProfile.email}
                  </p>
                </div>
              </>
            )}
          </NavLink>
          <button
            onClick={onLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-error-600 dark:hover:text-error-400 hover:bg-error-50 dark:hover:bg-error-900/10 rounded-xl transition-all duration-200"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;