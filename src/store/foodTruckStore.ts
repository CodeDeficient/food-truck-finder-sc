import { create } from 'zustand';
import { FoodTruck, foodTrucksData as initialFoodTrucks } from '@/data/mockFoodTrucks';

interface FoodTruckState {
  foodTrucks: FoodTruck[];
  activeFilter: string;
  setFilter: (filterId: string) => void;
  // Optional: If we ever need to re-initialize or load trucks dynamically
  // initializeTrucks: (trucks: FoodTruck[]) => void; 
}

export const useFoodTruckStore = create<FoodTruckState>((set) => ({
  foodTrucks: initialFoodTrucks, // Initialize with mock data
  activeFilter: 'all', // Default active filter

  setFilter: (filterId: string) => set({ activeFilter: filterId }),

  // Example for dynamic initialization, not strictly needed for this subtask
  // initializeTrucks: (trucks: FoodTruck[]) => set({ foodTrucks: trucks }),
}));
