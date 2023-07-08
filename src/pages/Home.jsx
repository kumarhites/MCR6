import React from "react";
import { useData } from "../contexts/DataProvider";
import Card from "../components/Card";

const Home = () => {
  const { cuisines, getRestaurants, selectedRestaurants } = useData();
  console.log(selectedRestaurants);

  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-gray-900 mt-3">
            Food Ordering App
          </h1>
          <p className="text-xl mt-4 font-semibold text-slate-700">
            Select your cuisine:
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 mt-5">
          {cuisines?.map(({ id, name }) => (
            <button
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg"
              key={id}
              onClick={() => {
                getRestaurants(id);
              }}
            >
              {name}
            </button>
          ))}
        </div>
        <div>
          {selectedRestaurants?.map((restaurant) => (
            <div key={restaurant.id} className="mt-3 mb-10">
              <h3 className="text-2xl py-3 mb-2 font-bold tracking-tight text-gray-800 pl-12 lg:pl-0">
                Dishes by {restaurant?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
                {restaurant?.menu?.map((item, i) => (
                  <Card
                    restaurantId={restaurant?.id}
                    menu={item}
                    name={restaurant?.name}
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
