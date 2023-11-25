import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[560px] w-full mx-auto bg-slate-50 rounded-lg shadow-md p-4">
      <form>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm sm:text-base md:text-lg text-gray-50"
            htmlFor="name"
          >
            {" "}
            Name{" "}
          </label>
          <input
            placeholder="Your Name"
            className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm sm:text-base md:text-lg text-gray-50"
            htmlFor="email"
          >
            {" "}
            Email{" "}
          </label>
          <input
            placeholder="Your Email"
            className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm sm:text-base md:text-lg text-gray-50"
            htmlFor="message"
          >
            {" "}
            Message{" "}
          </label>
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
            rows="4"
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
