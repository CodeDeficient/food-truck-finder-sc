"use client"; // Required for Zustand hook usage

import React from 'react';
import FoodTruckCardComponent from './FoodTruckCardComponent';
// foodTrucksData will now come from the Zustand store
// import { foodTrucksData, FoodTruck } from '@/data/mockFoodTrucks'; 
import { useFoodTruckStore } from '@/store/foodTruckStore';
import { FoodTruck } from '@/data/mockFoodTrucks'; // Still need FoodTruck type for casting if necessary

// Props are no longer needed as state is managed globally
// interface TruckListProps {
//   activeCuisineFilter: string;
// }

const TruckListComponent: React.FC = () => {
  const foodTrucks = useFoodTruckStore((state) => state.foodTrucks);
  const activeFilter = useFoodTruckStore((state) => state.activeFilter);

  const filteredTrucks = foodTrucks.filter((truck: FoodTruck) => {
    if (activeFilter === 'all' || activeFilter === '') {
      return true;
    }
    return truck.cuisine.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section className="glass-panel p-4">
      <h2 className="text-2xl font-semibold text-brand-light-gray mb-4">Trucks Nearby</h2>
      {filteredTrucks.length > 0 ? (
        <div id="truckList" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrucks.map((truck) => (
            <FoodTruckCardComponent key={truck.id} truck={truck} />
          ))}
        </div>
      ) : (
        <p className="text-brand-light-gray text-center">No food trucks match the current filter.</p>
      )}
    </section>
  );
};

export default TruckListComponent;
