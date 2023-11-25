import style from "./contact.module.css";
import React from "react";
import ThreeRectangles from "@/components/three-rectangles";
import ContactForm from "@/components/contact-form";


const Contact = () => {
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
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/3 p-10">
            <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
              <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span class="text-3xl font-bold">Phone</span>
                <p class="text-amber-300 font-thin text-xl">
                  - +212 65958555 -
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-10">
            <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
              <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-red-500 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-red-400 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span class="text-3xl font-bold">E-mail</span>
                <p class="text-amber-300 font-thin text-xl">
                  - aaaaa@gmail.com -
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-10">
            <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
              <div class="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-yellow-500 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-yellow-400 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
                <span class="text-3xl font-bold">Location</span>
                <p class="text-white font-thin text-xl">- Casablanca -</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
