import { createContext, useContext, useState } from "react";
import { cuisineData, restaurantsData } from "../data/data";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cuisines, setCuisine] = useState(cuisineData);
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);

  const getRestaurants = (selectedCuisine) => {
    const displayRestaurants = restaurants?.filter(
      (restaurant) => restaurant.cuisine_id === selectedCuisine
    );
    setSelectedRestaurants(displayRestaurants);
  };

  return (
    <DataContext.Provider value={{ cuisines, getRestaurants, selectedRestaurants, restaurants }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
