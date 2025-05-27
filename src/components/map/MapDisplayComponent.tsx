"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression, DivIconOptions } from 'leaflet';
// foodTrucksData and FoodTruck type will now come from the Zustand store or directly
import { truckIcons, FoodTruck } from '@/data/mockFoodTrucks'; // Keep FoodTruck type and truckIcons for icon rendering
import { useFoodTruckStore } from '@/store/foodTruckStore';

// Props are no longer needed as state is managed globally
// interface MapDisplayProps {
//   activeCuisineFilter: string;
// }

const MapDisplayComponent: React.FC = () => {
  const foodTrucks = useFoodTruckStore((state) => state.foodTrucks);
  const activeFilter = useFoodTruckStore((state) => state.activeFilter);
  
  const defaultPosition: LatLngExpression = [33.88, -81.00]; // Columbia, SC approx.

  const filteredTrucks = foodTrucks.filter((truck: FoodTruck) => {
    if (activeFilter === 'all' || activeFilter === '') {
      return true;
    }
    return truck.cuisine.toLowerCase() === activeFilter.toLowerCase();
  });

  const createCustomIcon = (truck: FoodTruck): L.DivIcon => {
    const iconSvg = truckIcons[truck.image] || truckIcons.default;
    const iconHtml = `<div class="custom-map-marker text-brand-red text-4xl">${iconSvg}</div>`;
    
    const divIconOptions: DivIconOptions = {
      html: iconHtml,
      className: '', 
      iconSize: [40, 40], 
      iconAnchor: [20, 40], 
      popupAnchor: [0, -35], 
    };
    return L.divIcon(divIconOptions);
  };

  return (
    <MapContainer
      id="map"
      center={defaultPosition}
      zoom={8}
      scrollWheelZoom={true}
      className="h-[40vh] w-full rounded-[18px] border-2 border-brand-red shadow-xl"
      // key prop can be used to force re-render if Leaflet doesn't update markers reactively with external state
      // For simple filter changes, react-leaflet's Marker components should re-render.
      // If issues arise, uncommenting a key that changes with the filter might be a solution:
      // key={activeFilter} 
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {filteredTrucks.map((truck) => (
        <Marker key={truck.id} position={truck.location} icon={createCustomIcon(truck)}>
          <Popup>
            <b>{truck.name}</b>
            <br />
            {truck.cuisine}
            <br />
            {truck.status === 'Open Now' 
              ? <span className="text-brand-cyan">{truck.status}</span> 
              : <span className="text-red-500">{truck.status}</span>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapDisplayComponent;
