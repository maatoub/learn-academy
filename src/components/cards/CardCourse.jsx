import React from "react";
import { ContentCard } from "./data";

export const CardCourse = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 justify-center items-center flex-wrap">
        {ContentCard.map((item) => (
          <div>
            <div
              key={item.id}
              className="w-80  bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                className="w-full h-40 object-cover rounded-t-lg"
                alt="Card Image"
                src={item.image}
              />
              <div className="p-4">
                <h2 className="text-xl text-black font-semibold">
                  German course - {item.level}
                </h2>
                <p className="text-gray-600 mt-2">
                  This course is available all year round for different periods.
                </p>
              </div>
              <div className="border-t-2 border-gray-300 p-2 ">
                <p className="text-sm pl-2 text-gray-500">12 week</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
