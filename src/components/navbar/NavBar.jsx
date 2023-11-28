"use client";
import React, { useEffect, useState } from "react";
import { links } from "./data";
import Link from "next/link";
import logo from "/public/images/logo.png";
import Image from "next/image";

const NavBar = () => {
  const [currentRoute, setCurrentRout] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentRout(path);
  }, []);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/home" className="flex items-center">
          <Image
            src={logo}
            style={{ width: "auto", height: "auto" }}
            width={60}
            height={50}
            quality={100}
            alt="logo"
          />
          <div className="underline font-bold self-center whitespace-nowrap dark:text-white">
            <label className="text-2xl font-serif">GERMAN</label>
            <label className="font-light text-sm">ACADEMY</label>
          </div>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white text-xl bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Get started
          </button>
          <button
            onClick={handleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  onClick={() => setCurrentRout(item.path)}
                  className={`${
                    currentRoute === item.path ? "text-red-700" : "text-black"
                  } block py-2 pl-3 pr-4 text-xl hover:text-red-700`}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
//text-white bg-black rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black
