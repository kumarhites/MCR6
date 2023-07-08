import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ menu, name, restaurantId }) => {
  return (
    <NavLink to={`/restaurant/${restaurantId}`}>
      <div className="max-w-sm bg-white border border-gray-600 rounded-lg shadow ">
        <img
          className="rounded-t-lg w-96 h-96 object-cover"
          src={menu?.imgSrc}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {menu.name}
          </h5>

          <p className="mb-3 font-medium text-gray-800">
            ₹{menu.price} for {menu.qty}
          </p>
          <p className="mb-3 font-normal text-gray-700">{name}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
