import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useData } from "../contexts/DataProvider";
import Reviews from "../components/Reviews";
import Modal from "../components/Modal";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const { restaurants } = useData();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const restaurantDetails = restaurants?.find(
    (restaurant) => restaurant.id === Number(restaurantId)
  );
  const { id, name, cuisine_id, address, phone, menu, averageRating, ratings } =
    restaurantDetails;

  console.log(restaurantDetails);

  return (
    <div className="max-w-[1280px] mx-auto">
      <Modal isOpen={isOpen} closeModal={closeModal} />
      <div className="flex items-center mt-5 gap-3 justify-between border-b-2 border-neutral-500 pb-2">
        <div className="flex items-center gap-3">
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z" />
            </svg>
          </NavLink>
          <div>
            <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
              {name}
            </h3>
            <div className="flex">
              {restaurantDetails?.menu?.map(({ name }, index, array) => (
                <React.Fragment key={index}>
                  <p>
                    {name}
                    {index !== array.length - 1 && ", "}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <div>{restaurantDetails?.address}</div>
            <div>Average rating: {restaurantDetails?.averageRating}</div>
          </div>
        </div>
        <button
          className="bg-rose-500 text-white px-5 py-2 rounded-lg"
          onClick={openModal}
        >
          Add Review
        </button>
      </div>
      <div className="mt-3">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
          Reviews
        </h1>
        {ratings?.map((rating) => (
          <Reviews rating={rating} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
