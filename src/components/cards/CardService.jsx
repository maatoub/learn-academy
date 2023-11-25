import React from "react";

const CardService= ({ title, description, iconUrl }) => {
  return (
    <div className="pb-8 mt-16">
      <div className="group cursor-pointer border-2 border-orange-400 group overflow-hidden relative text-gray-50 h-80 w-full md:w-56 rounded-2xl hover:duration-700 duration-700">
        <div className="w-full text-gray-800 flex justify-center ">
          <div className="flex flex-row justify-between ">
            <img
              src={iconUrl}
              alt="Icon"
              className="p-2"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="absolute bg-gray-50 border-2 -bottom-24 w-full md:w-55 p-4 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-200">
          <span className="text-orange-400 font-bold text-xs">Allemande</span>
          <span className="text-gray-800 font-bold text-xl">{title}</span>
          <p className="text-neutral-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardService;
