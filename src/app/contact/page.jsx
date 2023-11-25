import style from "./page.module.css";
import React from "react";
import ThreeRectangles from "@/components/shapes/ThreeRectangles";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  const info = [
    {
      id: 1,
      type: "Phone",
      value: "+212 65958555",
    },
    {
      id: 2,
      type: "Email",
      value: "aaaaa@gmail.com",
    },
    {
      id: 3,
      type: "Location",
      value: "Casablanca, Maroc",
    },
  ];

  return (
    <div>
      <div id={style.banner_contact} className="flex">
        <div className="flex flex-col p-4 md:p-8 lg:p-14 justify-center">
          <ThreeRectangles />
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
            Contact us
          </h2>
          <p className="text-sm md:text-lg lg:text-2xl mt-4 text-white">
            Want to know more ?
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-10">
          <ContactForm />
        </div>
        <div className=" flex mt-8 p-4 md:p-8 lg:p-14">
          <div className="flex flex-col justify-center">
            <h1 className="sm:text-sm md:text-2xl lg:text-4xl font-bold">
              Contact info
            </h1>
            <ThreeRectangles />
          </div>
        </div>
        <div className="flex flex-wrap">
          {info.map((item) => (
            <div className="w-full md:w-1/3 p-10" key={item.id}>
              <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                  <span className="text-3xl font-bold">{item.type}</span>
                  <p className="text-amber-300 font-thin text-xl">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
