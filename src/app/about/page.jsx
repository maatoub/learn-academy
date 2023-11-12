import NavBar from "@/components/navBar";
import style from "./page.module.css";
import React from "react";
import ThreeRectangles from "@/components/threeRectangles";
import Footer from "@/components/footer";

const About = () => {
  return (
    <div>
      <NavBar />

      <div id={style.banner_about}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col p-4 md:p-8 lg:p-14 justify-center">
            <ThreeRectangles />
            <h1 className="sm:text-sm md:text-2xl lg:text-4xl text-white font-bold">
              About the German School
            </h1>
            <h3 className="sm:text-sm md:text-xl lg:text-2xl text-white mt-4">
              Welcome to the German Academy, your trusted partner in Morocco to
              fulfill your aspirations related to Germany.
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div>
          {/*****************  Who we are ************/}
          <div className="lg:p-8 sm:p-4 md:p-4">
            <div>
              <h3 className="sm:text-sm md:text-2xl lg:text-4xl font-bold mt-12">
                Who we are
              </h3>
              <ThreeRectangles />
            </div>
            <p className="text-center sm:text-sm md:text-xs lg:text-xl mt-4">
              The German School was founded in 2016 in the heart of the dynamic
              city of Casablanca and is widely recognized in the field of German
              language proficiency, making it a prestigious institution. We
              teach languages ​​from five continents, face-to-face or remotely.
              Our numerous simple or blended packages (e-learning courses, by
              telephone, or video conference) adapt best to your needs and your
              pace.
            </p>
          </div>
        </div>
        {/***********  Our objective ***************/}
        <div className="lg:p-8 sm:p-4 md:p-4">
          <div>
            <h3 className="sm:text-sm md:text-2xl lg:text-4xl font-bold mt-12">
              Our objective
            </h3>
            <ThreeRectangles />
          </div>
          <p className="text-center sm:text-sm md:text-xs lg:text-xl mb-4 mt-4">
            Our main goal is to provide every student who enrolls in the German
            Academy with the best possible learning experience in German,
            whether through our online platform or in-person classes. We are
            committed to helping you achieve your language goals and open the
            doors to a world of opportunities. Join us at the German Academy for
            a journey towards mastery of the German language filled with
            confidence and competence. To start your language journey, contact
            us now!
          </p>
          <p className="text-center sm:text-sm md:text-xs lg:text-xl mb-4">
            Join us at the German Academy for a journey towards mastery of the
            German language filled with confidence and competence.
          </p>
          <p className="text-center sm:text-sm md:text-xs lg:text-xl mb-4">
            To start your language journey, contact us now!
          </p>
        </div>
        {/* ****************  Our offers   ****************** */}
        <div className="lg:p-8 sm:p-4 md:p-4">
          <div>
            <h3 className="sm:text-sm md:text-2xl lg:text-4xl font-bold mt-12">
              Our offers
            </h3>
            <ThreeRectangles />
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-10">
              <div className="pb-8">
                <div className="sm:w-full md:w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
                  <p className="text-lg font-bold font-sans">
                    German Language Course
                  </p>
                  <div className="py-3">
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni natus rerum deleniti eaque ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-8">
                <div className="md:w-72 sm:w-full bg-white rounded-b-lg border-t-8 border-yellow-400 px-4 py-5 flex flex-col justify-around shadow-md">
                  <p className="text-lg font-bold font-sans">
                    Preparation Course
                  </p>
                  <div className="py-3">
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni natus rerum deleniti eaque ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-8">
                <div className="md:w-72 sm:w-full bg-white rounded-b-lg border-t-8 border-red-400 px-4 py-5 flex flex-col justify-around shadow-md">
                  <p className="text-lg font-bold font-sans">
                    International Exams
                  </p>
                  <div className="py-3">
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni natus rerum deleniti eaque ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-8">
                <div className="md:w-72 sm:w-full bg-white rounded-b-lg border-t-8 border-blue-400 px-4 py-5 flex flex-col justify-around shadow-md">
                  <p className="text-lg font-bold font-sans">
                    Professional Training
                  </p>
                  <div className="py-3">
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni natus rerum deleniti eaque ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-8">
                <div className="md:w-72 sm:w-full bg-white rounded-b-lg border-t-8 border-black px-4 py-5 flex flex-col justify-around shadow-md">
                  <p className="text-lg font-bold font-sans">
                    Orientation Events
                  </p>
                  <div className="py-3">
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni natus rerum deleniti eaque ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
