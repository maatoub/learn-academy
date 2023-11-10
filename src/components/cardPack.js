import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowsV } from "@fortawesome/free-solid-svg-icons";
const CardPack = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">
                Pack 1
              </h1>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">
                Pack 2
              </h1>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">
                Pack 3
              </h1>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p className="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="1x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPack;
