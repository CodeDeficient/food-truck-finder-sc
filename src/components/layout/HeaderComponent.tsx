import React from 'react';
import SearchInputComponent from '../common/SearchInputComponent';

const HeaderComponent: React.FC = () => {
  return (
    <header className="glass-panel p-4 flex items-center justify-between relative z-10 rounded-none md:rounded-b-xl">
      {/* Hamburger Menu Button */}
      <button 
        className="text-brand-light-gray text-2xl p-2 rounded-md hover:text-brand-cyan transition-colors"
        aria-label="Open menu"
      >
        <svg 
          className="header-icon" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>

      {/* Search Input Component */}
      <SearchInputComponent />

      {/* Profile Button */}
      <button 
        className="text-brand-light-gray text-2xl p-2 rounded-md hover:text-brand-cyan transition-colors"
        aria-label="Open profile"
      >
        <svg 
          className="header-icon" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </button>
    </header>
  );
};

export default HeaderComponent;
