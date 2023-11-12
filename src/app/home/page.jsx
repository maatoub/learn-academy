import NavBar from "@/components/navBar";
import style from "./home.module.css";

import React from "react";
import ThreeRectangles from "@/components/threeRectangles";
import CardPack from "@/components/cardPack";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <NavBar />

      <img
        id={style.banner_home}
        className="w-full h-auto"
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
        <div className="mt-16">
          <h1 className="text-4xl font-bold mt-24">
            Participate in our events
          </h1>
          <ThreeRectangles />
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:pr-4">
              <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl mt-14">
                With our events, workshops, and workshops, we offer you
                enriching experiences. Join our events to meet career experts
                and enrich your path, whether you love the German language,
                culture, or are seeking advice for studying, working, or living
                in Germany!
              </p>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl mt-4">
                Learning German in Germany will not only allow you to improve
                your German skills, but also gain insight into daily life and
                the dynamic culture of Germany. Because the Germanic language is
                widely spoken in Central and Eastern Europe, your knowledge of
                German will prove very useful far beyond Germany's borders.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <img
                className="w-full h-auto"
                src="../images/student1.png"
                alt="banner"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
