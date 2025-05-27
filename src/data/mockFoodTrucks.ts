export interface FoodTruck {
  id: string;
  name: string;
  cuisine: string;
  status: 'Open Now' | 'Closed';
  location: [number, number];
  description: string;
  image: string;
}

export const foodTrucksData: FoodTruck[] = [
  { id: 't1', name: 'The Taco Truck', cuisine: 'Mexican', status: 'Open Now', location: [33.9988, -81.0450], description: 'Authentic street tacos and burritos. Find us near the Capitol building today!', image: 'taco' },
  { id: 't2', name: 'Smokin\' BBQ Pit', cuisine: 'BBQ', status: 'Open Now', location: [33.9000, -81.1500], description: 'Slow-smoked pulled pork and brisket. Catch us at the park!', image: 'bbq' },
  { id: 't3', name: 'Green Goodness', cuisine: 'Vegan', status: 'Closed', location: [34.0000, -80.9000], description: 'Fresh plant-based bowls and smoothies. Back tomorrow!', image: 'salad' },
  { id: 't4', name: 'Wok & Roll', cuisine: 'Asian', status: 'Open Now', location: [33.8500, -81.0000], description: 'Delicious stir-fries and noodles. Perfect for a quick lunch!', image: 'noodles' },
  { id: 't5', name: 'Sweet Treats', cuisine: 'Dessert', status: 'Open Now', location: [34.0500, -80.9500], description: 'Cupcakes, cookies, and ice cream. Indulge your sweet tooth!', image: 'icecream' },
  { id: 't6', name: 'Burger Bliss', cuisine: 'Burgers', status: 'Open Now', location: [33.7500, -81.2000], description: 'Classic and gourmet burgers with crispy fries. A true American classic!', image: 'burger' },
  { id: 't7', name: 'Ocean Catch', cuisine: 'Seafood', status: 'Open Now', location: [33.8000, -80.8500], description: 'Fresh fried shrimp and fish tacos. Taste the ocean!', image: 'shrimp' },
  { id: 't8', name: 'Pizza on Wheels', cuisine: 'Italian', status: 'Closed', location: [33.9500, -81.1000], description: 'Wood-fired pizzas made to order. Check our schedule for next event!', image: 'pizza' },
  { id: 't9', name: 'Caffeine Fix', cuisine: 'Coffee', status: 'Open Now', location: [33.9200, -81.0700], description: 'Gourmet coffee and pastries to kickstart your day!', image: 'coffee' },
  { id: 't10', name: 'The Sandwich Spot', cuisine: 'Sandwiches', status: 'Open Now', location: [33.9800, -81.0200], description: 'Artisan sandwiches with fresh ingredients. Lunch perfection!', image: 'burger' }
];

// SVGs below are "illustratively optimized" (e.g., by removing redundant whitespace).
// In a real scenario, SVGO tool would be used for more thorough optimization.
export const truckIcons: { [key: string]: string } = {
  taco: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M20 10h-2V7c0-1.1-.9-2-2-2h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c2.21 0 4 1.79 4 4v3zm-4 0h-2V7c0-1.1-.9-2-2-2H9c-.55 0-1-.45-1-1s.45-1 1-1h3c2.21 0 4 1.79 4 4v3zm-8 0H6V7c0-1.1-.9-2-2-2H1c-.55 0-1-.45-1-1s.45-1 1-1h3c2.21 0 4 1.79 4 4v3zM12 20c-3.31 0-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8h-2c0 3.31-2.69 6-6 6zM12 10c-3.31 0-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8h-2c0 3.31-2.69 6-6 6z"/></svg>',
  bbq: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M17 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14-7H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>',
  salad: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v2zM7 9h2V7H7v2zm0 4h2v-2H7v2zM5 11h2V9H5v2zm0 4h2v-2H5v2zm12 0h-2v-2h2v2zm0-4h-2V7h2v2zm-2 4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>',
  noodles: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v2zM7 9h2V7H7v2zm0 4h2v-2H7v2zM5 11h2V9H5v2zm0 4h2v-2H5v2zm12 0h-2v-2h2v2zm0-4h-2V7h2v2zm-2 4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>',
  icecream: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v2zM7 9h2V7H7v2zm0 4h2v-2H7v2zM5 11h2V9H5v2zm0 4h2v-2H5v2zm12 0h-2v-2h2v2zm0-4h-2V7h2v2zm-2 4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>',
  burger: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v2zM7 9h2V7H7v2zm0 4h2v-2H7v2zM5 11h2V9H5v2zm0 4h2v-2H5v2zm12 0h-2v-2h2v2zm0-4h-2V7h2v2zm-2 4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>',
  shrimp: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v2zM7 9h2V7H7v2zm0 4h2v-2H7v2zM5 11h2V9H5v2zm0 4h2v-2H5v2zm12 0h-2v-2h2v2zm0-4h-2V7h2v2zm-2 4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>',
  pizza: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v2zM7 9h2V7H7v2zm0 4h2v-2H7v2zM5 11h2V9H5v2zm0 4h2v-2H5v2zm12 0h-2v-2h2v2zm0-4h-2V7h2v2zm-2 4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>',
  coffee: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M18.5 3H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 15H7c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM12 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
  default: '<svg class="truck-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v2zM7 9h2V7H7v2zm0 4h2v-2H7v2zM5 11h2V9H5v2zm0 4h2v-2H5v2zm12 0h-2v-2h2v2zm0-4h-2V7h2v2zm-2 4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>'
};
