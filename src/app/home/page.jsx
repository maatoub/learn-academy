import NavBar from "@/components/navBar";
import style from "./home.module.css";
import React from "react";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div id={style.banner_home}>
        <img
          id={style.banner_home}
          src="../images/banner-home.png"
          alt="banner"
        ></img>
      </div>
    </div>
  );
}
