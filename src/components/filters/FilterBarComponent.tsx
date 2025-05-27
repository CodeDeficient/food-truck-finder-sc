"use client"; // Required for Zustand hook usage

import React from 'react';
import FilterButtonComponent from './FilterButtonComponent';
import { useFoodTruckStore } from '@/store/foodTruckStore';

// Define Filter Data Type (can remain here or be moved to store if it's tightly coupled)
export type FilterItemType = {
  id: string; // This will be the cuisineValue, e.g., 'all', 'mexican'
  label: string;
};

// Create Static Array of FilterItem Data
const initialFilterItems: FilterItemType[] = [
  { id: 'all', label: 'All' },
  { id: 'mexican', label: 'Mexican' },
  { id: 'bbq', label: 'BBQ' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'asian', label: 'Asian' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'italian', label: 'Italian' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'sandwiches', label: 'Sandwiches' },
];

// Props are no longer needed as state is managed globally
// interface FilterBarProps {
//   currentFilter: string;
//   onFilterChange: (filterId: string) => void;
// }

const FilterBarComponent: React.FC = () => {
  const activeFilter = useFoodTruckStore((state) => state.activeFilter);
  const setFilter = useFoodTruckStore((state) => state.setFilter);

  return (
    <section className="mb-8 glass-panel p-4">
      <h2 className="text-xl font-semibold text-brand-light-gray mb-3">Filter by Cuisine</h2>
      <div className="scrollable-filters-container">
        <div className="flex space-x-3 whitespace-nowrap">
          {initialFilterItems.map((filterItem) => (
            <FilterButtonComponent
              key={filterItem.id}
              label={filterItem.label}
              isActive={activeFilter === filterItem.id}
              onClick={() => setFilter(filterItem.id)} // Call Zustand action
              cuisineValue={filterItem.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterBarComponent;
