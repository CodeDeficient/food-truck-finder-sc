import React from 'react';
import Link from 'next/link'; // Using next/link for client-side navigation

interface NavigationItemProps {
  href: string;
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}

const NavigationItemComponent: React.FC<NavigationItemProps> = ({
  href,
  label,
  icon,
  isActive = false,
}) => {
  const baseClasses = "flex flex-col items-center justify-center flex-1 p-2 transition-colors duration-200 ease-in-out";
  
  const activeClasses = isActive 
    ? "text-brand-red font-semibold" 
    : "text-brand-light-gray hover:text-brand-cyan";

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${activeClasses}`}
      aria-current={isActive ? "page" : undefined} // Added aria-current
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default NavigationItemComponent;
