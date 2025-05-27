import React from 'react';

const SearchInputComponent: React.FC = () => {
  return (
    <div className="relative flex-1 mx-4">
      <input
        type="text"
        placeholder="Search food trucks..."
        className="w-full p-2 pl-10 rounded-xl search-input focus:outline-none text-brand-light-gray"
        aria-label="Search food trucks" // Added aria-label
      />
      <svg
        className="header-icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true" 
      >
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    </div>
  );
};

export default SearchInputComponent;
