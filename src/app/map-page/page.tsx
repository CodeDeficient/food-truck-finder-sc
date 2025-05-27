"use client"; // Keep for dynamic import, though useState is removed

import React from 'react'; // useState removed
import dynamic from 'next/dynamic';
import FilterBarComponent from '@/components/filters/FilterBarComponent';
import TruckListComponent from '@/components/trucks/TruckListComponent';

// Dynamically import the MapDisplayComponent with SSR turned off
const MapDisplayComponentWithNoSSR = dynamic(
  () => import('@/components/map/MapDisplayComponent'),
  { 
    ssr: false,
    loading: () => <div className="h-[40vh] w-full rounded-[18px] border-2 border-brand-red shadow-xl flex items-center justify-center bg-gray-800"><p className="text-center text-brand-light-gray p-4">Loading map...</p></div> 
  }
);

const MapPage: React.FC = () => {
  // const [activeFilter, setActiveFilter] = useState<string>('all'); // Removed: State managed by Zustand

  return (
    <div className="p-4 md:p-6 space-y-8">
      {/* Map Section */}
      <section className="glass-panel p-4">
        {/* MapDisplayComponentWithNoSSR now gets activeFilter from Zustand store */}
        <MapDisplayComponentWithNoSSR /> 
      </section>

      {/* Filter Bar Section */}
      {/* FilterBarComponent now gets activeFilter and setFilter from Zustand store */}
      <FilterBarComponent />

      {/* Truck List Section */}
      {/* TruckListComponent now gets activeFilter and foodTrucks from Zustand store */}
      <TruckListComponent />
    </div>
  );
};

export default MapPage;
