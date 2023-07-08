import React from "react";

const Reviews = ({ rating }) => {
  return (
    <div>
      <div className="max-w-[1280px] p-4 bg-white border-t-2">
        <div>
          <ul className="">
            <li className="">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={rating?.pp}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-medium text-gray-900 truncate">
                    {rating?.revName}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  <p className="text-lg">{rating?.rating}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="green"
                      d="m12 17.3l-3.7 2.825q-.275.225-.6.213t-.575-.188q-.25-.175-.387-.475t-.013-.65L8.15 14.4l-3.625-2.575q-.3-.2-.375-.525t.025-.6q.1-.275.35-.488t.6-.212H9.6l1.45-4.8q.125-.35.388-.538T12 4.475q.3 0 .563.188t.387.537L14.4 10h4.475q.35 0 .6.213t.35.487q.1.275.025.6t-.375.525L15.85 14.4l1.425 4.625q.125.35-.012.65t-.388.475q-.25.175-.575.188t-.6-.213L12 17.3Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-lg text-neutral-600 truncate">
                  {rating?.comment}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
