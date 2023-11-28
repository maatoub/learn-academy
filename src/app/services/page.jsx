import React from "react";
import style from "./page.module.css";
import ThreeRectangles from "@/components/shapes/ThreeRectangles";
import Cards from "../../components/cards/CardService";
import Course from "@/components/carousel/Course";
import { PhoneFilled, MailFilled, PushpinFilled } from "@ant-design/icons";
const Services = () => {
  return (
    <>
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
            Benefit from tailored language courses
          </h2>
          <p className="sm:text-sm lg:text-2xl mt-6">
            Whatever your availability and your level of learning
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
          <Cards
            title="Intensive training"
            description="A deep and accelerated training."
            iconUrl="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/150/FD7E14/external-target-growth-and-marketing-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png"
          />
          <Cards
            title="Intensive course"
            description="A more or less accelerated training."
            iconUrl="https://img.icons8.com/ios-filled/150/FD7E14/calendar--v1.png"
          />
          <Cards
            title="Online course"
            description="An accelerated distance learning."
            iconUrl="https://img.icons8.com/wired/150/FD7E14/video-conference.png"
          />
          <Cards
            title="Weekend course"
            description="A lighter training every weekend."
            iconUrl="https://img.icons8.com/ios/150/FD7E14/calendar--v1.png"
          />
        </div>
        {/**************  Our Courses **************/}
      </div>
      <div className="mt-10 bg-slate-950 w-full text-center text-white p-12">
        <div>
          <span className="sm:text-6xl text-3xl font-bold">Our Courses</span>
          <p className="mt-8 font-thin text-xl">
            Discover our tailor-made German courses, adapted to your needs.
            Prepare for the B2 exam at the Goethe Institute, improve your
            professional skills, or simply immerse yourself in the beauty of
            this language. Join us now to start your journey towards mastering
            German.
          </p>
        </div>
        <div className="mt-10 ">
          <Course />
        </div>
      </div>
      <div className="mt-10 w-full text-center p-12 lg:block hidden">
        <div className="flex flex-col items-center">
          <span className="sm:text-6xl text-3xl font-bold">Contact us</span>
          <ThreeRectangles className="container" />
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 mt-14 ">
          <div>
            <PhoneFilled style={{ fontSize: "80px" }} />
            <h2 className="p-4 text-2xl">+212 06666666</h2>
          </div>
          <div>
            <MailFilled style={{ fontSize: "80px" }} />
            <h2 className="p-4 text-2xl">aaaaa@gmail.com</h2>
          </div>
          <div>
            <PushpinFilled style={{ fontSize: "80px" }} />
            <h2 className="p-4 text-2xl">Casablanca</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
