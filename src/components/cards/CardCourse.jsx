import React from "react";

export const CardCourse = ({ card }) => {
  return (
    <div className="w-full sm:w-80 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 m-2">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        alt="Card Image"
        src={card.image}
      />
      <div className="p-4">
        <h2 className="text-xl text-black font-semibold">
          German course - {card.level}
        </h2>
        <p className="text-gray-600 mt-2">
          This course is available all year round for different periods.
        </p>
      </div>
      <div className="border-t-2 border-gray-300 p-2 w-full rounded-b-lg">
        <p className="text-sm pl-2 text-gray-500">12 week</p>
      </div>
    </div>
  );
};
