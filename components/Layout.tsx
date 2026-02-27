import React, { useState } from 'react';
import { Menu } from './ui/Icons';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import { UserProfile } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  userProfile: UserProfile;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout, userProfile }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[linear-gradient(180deg,#F0F9FF_0%,#F8FAFC_100%)] dark:bg-none dark:bg-neutral-950 overflow-hidden transition-colors duration-300">
      <Sidebar 
        onLogout={onLogout} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        userProfile={userProfile}
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Header (Desktop & Mobile) */}
        <header className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 p-4 flex items-center justify-between sticky top-0 z-10 shrink-0 transition-all duration-300">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="lg:hidden p-2 -ml-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="lg:hidden font-bold text-neutral-900 dark:text-white text-lg tracking-tight">
              CareerFlow AI
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto scroll-smooth no-scrollbar">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;