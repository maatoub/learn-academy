import NavBar from "@/components/navBar";
import style from "./home.module.css";
import React from "react";
import ThreeRectangles from "@/components/threeRectangles";
import CardPack from "@/components/cardPack";
export default function Home() {
  return (
    <div>
      <NavBar />

      <img
        id={style.banner_home}
        src="../images/banner-home.png"
        alt="banner"
      ></img>

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-16">
          Choose the plan that suits you best!
        </h1>
        <div>
          <ThreeRectangles />
        </div>
        <div className="mt-16">
          <CardPack />
        </div>
      </div>
    </div>
  );
}
