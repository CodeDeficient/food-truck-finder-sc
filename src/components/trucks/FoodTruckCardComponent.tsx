import React from 'react';
import { FoodTruck, truckIcons } from '@/data/mockFoodTrucks';

interface FoodTruckCardProps {
  truck: FoodTruck;
}

const FoodTruckCardComponent: React.FC<FoodTruckCardProps> = ({ truck }) => {
  const iconSvgString = truckIcons[truck.image] || truckIcons.default;

  // Determine status color based on original Tailwind classes in index.html
  // text-blue-400 for 'Open Now' (which is brand-cyan in our theme)
  // text-red-500 for 'Closed' (can use brand-red or a lighter variant if needed)
  const statusColorClass = truck.status === 'Open Now' ? 'text-brand-cyan' : 'text-red-500'; // Using text-red-500 for Closed

  return (
    <div className="truck-card glass-panel p-4 flex items-center space-x-4 cursor-pointer">
      <div
        className="flex-shrink-0 text-4xl" // text-4xl was on the div in original, SVG itself has truck-icon class
        dangerouslySetInnerHTML={{ __html: iconSvgString }}
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-brand-light-gray">{truck.name}</h3>
        <p className="text-gray-300 text-sm">
          {truck.cuisine} • <span className={statusColorClass}>{truck.status}</span>
        </p>
        <p className="text-gray-400 text-xs mt-1">{truck.description}</p>
      </div>
    </div>
  );
};

export default FoodTruckCardComponent;
