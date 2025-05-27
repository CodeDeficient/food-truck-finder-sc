import React from 'react';
import NavigationItemComponent from '../common/NavigationItemComponent';

// 1. Define Navigation Data Structure
export interface NavItem {
  href: string;
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}

// Helper function to create SVG elements for icons
const createSvgIcon = (pathData: string) => (
  <svg 
    className="svg-icon mb-1" // Added mb-1 to match original margin-bottom from .bottom-nav-item .icon
    viewBox="0 0 24 24" 
    fill="currentColor" 
    aria-hidden="true"
  >
    <path d={pathData} />
  </svg>
);

// 2. Create Static Array of NavItem Data
const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Map',
    icon: createSvgIcon("M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"),
    isActive: true, // For MVP, 'Map' is active
  },
  {
    href: '/trucks',
    label: 'Trucks',
    icon: createSvgIcon("M22 9V7h-2V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2H2v2h2v4H2v2h2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2v-2h-2V9h2zm-4 10H6V5h12v14zM9 8h6v2H9zm0 4h6v2H9z"),
    isActive: false,
  },
  {
    href: '/favorites',
    label: 'Favorites',
    icon: createSvgIcon("M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"),
    isActive: false,
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: createSvgIcon("M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"),
    isActive: false,
  },
];

const BottomNavComponent: React.FC = () => {
  return (
    <nav className="glass-panel p-2 flex justify-around border-t-2 border-brand-red shadow-lg z-10 rounded-none md:rounded-t-xl">
      {navItems.map((item) => (
        <NavigationItemComponent
          key={item.label}
          href={item.href}
          label={item.label}
          icon={item.icon}
          isActive={item.isActive}
        />
      ))}
    </nav>
  );
};

export default BottomNavComponent;
