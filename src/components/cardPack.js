import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowsV } from "@fortawesome/free-solid-svg-icons";
const CardPack = () => {
  return (
    <div class="container">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-2xl font-bold text-gray-900 mb-3">
                Pack 1
              </h1>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <div class="flex items-center flex-wrap ">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  En savoir plus
                  <svg
                    class="w-4 h-4 ml-2"
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
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-2xl font-bold text-gray-900 mb-3">
                Pack 2
              </h1>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <div class="flex items-center flex-wrap ">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  En savoir plus
                  <svg
                    class="w-4 h-4 ml-2"
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

        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font text-2xl font-bold text-gray-900 mb-3">
                Pack 3
              </h1>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <p class="leading-relaxed mb-3">
                <FontAwesomeIcon icon={faAdd} size="x" />
                <span> Un texte rapide pour décrire la carte.</span>
              </p>
              <div class="flex items-center flex-wrap ">
                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  En savoir plus
                  <svg
                    class="w-4 h-4 ml-2"
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
