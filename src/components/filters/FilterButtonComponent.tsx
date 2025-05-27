import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void; 
  cuisineValue: string; 
}

const FilterButtonComponent: React.FC<FilterButtonProps> = ({
  label,
  isActive = false,
  onClick, 
  cuisineValue,
}) => {
  const baseClasses = [
    "py-2", "px-4", "rounded-full", "font-semibold", "transition-all", 
    "duration-200", "ease-in-out", "border", "border-transparent", 
    "flex-shrink-0", "relative",
  ].join(" ");

  const inactiveClasses = [
    "bg-brand-red", "text-white", "shadow-md", 
    "hover:bg-brand-red-alt", "hover:shadow-lg",
  ].join(" ");

  const activeClasses = [
    "bg-brand-cyan", "text-brand-dark-gray-alt", "border-brand-cyan", 
    "filter-button-active-shadow",
  ].join(" ");

  return (
    <button
      type="button"
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
      data-cuisine={cuisineValue}
      aria-pressed={isActive} // Added aria-pressed
    >
      {label}
    </button>
  );
};

export default FilterButtonComponent;
