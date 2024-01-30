'use client'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import style from "./page.module.css";
import ThreeRectangles from "@/components/shapes/ThreeRectangles";
import CardPack from "@/components/cards/CardPack";
import Image from "next/image";
import banner_home from "/public/images/banner-home.png";
import unDraw from "/public/images/unDraw.svg";

const fadeInUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function Home() {
    const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 10, // Disparition
      y: 50, // Déplacement vers le bas
      transition: { duration: 5 }, // Durée de la disparition
    });

 
    setTimeout(() => {
      controls.start({
        opacity: 1, 
        y: 0, 
        transition: { duration: 5 }, 
      });
    }, 5000);
  }, []);
  return (
    <div>
      <motion.div
        {...fadeInUp}
        id={style.banner_home}
        className="w-full h-auto"
      >
        <Image src={banner_home} quality={100} alt="banner" />
      </motion.div>

      <section className="container text-black mx-auto">
        <div className="grid sm:grid-cols-2 mt-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            className="sm:mt-12"
          >
            <h1 className="sm:text-6xl font-extrabold" id={style.title}>
              Reach your goals with us!
            </h1>
            <p className="sm:text-xl sm:mt-8">
              Don't wait anymore! Book your spot now with our team of German
              language experts! Our courses are designed to be practical,
              efficient, and tailored to your schedule.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="">
            <Image src={unDraw} alt="unDraw" />
          </motion.div>
        </div>
      </section>

      <motion.section {...fadeInUp} className="bg-slate-950  lg:p-8">
        <div className="container">
          <div>
            <h1 className="sm:text-4xl text-xs font-bold mt-16">
              Choose the plan that suits you best!
            </h1>
            <ThreeRectangles />
          </div>
          <div className="mt-16">
            <CardPack />
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeInUp}
        className="container mt-16 mx-auto text-black"
      >
        <h1 className="sm:text-4xl text-xs font-bold mt-24">
          Participate in our events
        </h1>
        <ThreeRectangles />
        <div className="flex flex-wrap">
          <motion.div {...fadeInUp} className="w-full sm:w-1/2 lg:pr-4">
            <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl sm:mt-10">
              With our events, workshops, and workshops, we offer you enriching
              experiences. Join our events to meet career experts and enrich
              your path, whether you love the German language, culture, or are
              seeking advice for studying, working, or living in Germany!
            </p>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl mt-4">
              Learning German in Germany will not only allow you to improve your
              German skills, but also gain insight into daily life and the
              dynamic culture of Germany. Because the Germanic language is
              widely spoken in Central and Eastern Europe, your knowledge of
              German will prove very useful far beyond Germany's borders.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="w-full sm:w-1/2">
            <img
              className="w-full h-auto"
              src="../images/student1.png"
              alt="banner"
            ></img>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
