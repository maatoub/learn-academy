import NavBar from "@/components/navBar";
import style from "./page.module.css";
import React from "react";
import ThreeRectangles from "@/components/threeRectangles";

const About = () => {
  return (
    <div>
      <NavBar />
      <div id={style.banner_about}>
        <div>
          <div ></div>
          <ThreeRectangles />
          <h1 className="sm:text-sm md:text-2xl lg:text-4xl text-white font-bold">
            About the German School
          </h1>
          <h3 className="sm:text-sm md:text-xl lg:text-2xl text-white">
            Welcome to the German Academy, your trusted partner<br></br> in
            Morocco to fulfill your aspirations related to Germany.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
