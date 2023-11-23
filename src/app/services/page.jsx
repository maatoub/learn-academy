import NavBar from "@/components/navBar";
import React from "react";
import style from "./page.module.css";
import ThreeRectangles from "@/components/threeRectangles";
import Cards from "../../components/services/cards";
const Services = () => {
  return (
    <div>
      <NavBar />
      <div id={style.banner_service}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col p-4 md:p-8 lg:p-14 justify-center">
            <ThreeRectangles />
            <h1 className="sm:text-sm md:text-2xl lg:text-4xl text-white font-bold">
              Our Services
            </h1>
            <h3 className="sm:text-sm md:text-xl lg:text-2xl text-white mt-4">
              Welcome to our center dedicated to our German language learning
              services. We are committed to providing you with a rewarding
              learning experience.
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center mt-16">
          <h2 className="sm:text-sm lg:text-5xl font-medium">
            Benefit from tailored language courses.
          </h2>
          <p className="sm:text-sm lg:text-2xl mt-6">
            Whatever your availability and your level of learning.
          </p>
        </div>
        <div className="grid lg:grid-cols-6 sm:grid-cols-2 ">
          <Cards title="nasser" />
        </div>
      </div>
    </div>
  );
};

export default Services;
