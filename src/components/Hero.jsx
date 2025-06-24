import React, { useState } from "react";

const Hero = () => {
  const [expandedDistrict, setExpandedDistrict] = useState(null);

  const districts = [
    {
      name: "Green District",
      description: "Экологичный район с парками и зелеными зонами",
    },
    {
      name: "Growing District",
      description: "Деловой и развивающийся экономический центр",
    },
    {
      name: "Golden District",
      description: "Престижный жилой район с высоким уровнем комфорта",
    },
    {
      name: "Gate District",
      description: "Транспортный и логистический узел города",
    },
  ];

  const toggleDistrict = (index) => {
    if (expandedDistrict === index) {
      setExpandedDistrict(null);
    } else {
      setExpandedDistrict(index);
    }
  };

  return (
    <div className="relative">
      {/* Hero Background Image */}
      <div>
        <img
          src="/images/First.svg"
          className="pl-0 lg:pl-30"
          alt="Alatau City Background"
        />
      </div>

      {/* Title Section */}
      <div className="absolute top-0 left-0 text-white sm:pl-8 lg:pl-52 pl-4 lg:pt-130 sm:pt-40">
        <h1 className="sm:text-[70px] sm:mt-10 lg:text-[98px] font-bold leading-none">
          Alatau City
        </h1>
        <p className="text-base lg:text-[26px] mt-2 lg:mt-4">
          Территория опережающего развития
        </p>

        <div className="flex flex-row sm:flex-row lg:flex-row items-center gap-4 mt-4 lg:mt-8">
          <button
            className="bg-gray-600 hover:bg-gray-700 rounded-3xl h-10 lg:h-15 w-full sm:w-30 lg:w-40 py-2 lg:py-3 px-4 lg:px-6
                       transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Подробнее
          </button>

          {/* Arrow Buttons */}
          <div className="flex gap-2 sm:gap-5 sm:ml-50 lg:gap-5 mt-2 lg:mt-0 lg:ml-230">
            <button className="border border-white rounded-full p-1 lg:p-2 hover:bg-white hover:bg-opacity-20 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 lg:h-5 w-4 lg:w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="border border-white rounded-full p-1 lg:p-2 hover:bg-white hover:bg-opacity-20 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 lg:h-5 w-4 lg:w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* White Content Section */}
      <div
        id="about_alatau_section"
        className="bg-white lg:ml-30 ml-4 rounded-lg lg:rounded-2xl max-w-full lg:max-w-[1400px] px-4 lg:px-20 py-4 lg:py-12 -mt-4 lg:-mt-10 relative z-10 flex flex-col lg:flex-row"
      >
        <div className="flex flex-col gap-4 lg:gap-8">
          {/* Text Content */}
          <div className="lg:-ml-12 -ml-2">
            <p className="text-sm lg:text-[18px] mb-2 lg:mb-6">
              Алатау – стратегический проект Казахстана, призванный стать <br />
              международным Центрально-Азиатским хабом.
            </p>
            <p className="text-sm lg:text-[18px]">
              Город расположен вдоль стратегической автомагистрали Алматы-{" "}
              <br />
              Конаев, соединяющей транспортный коридор Западная Европа – <br />
              Западный Китай. Представляет собой уникальное сочетание четырех{" "}
              <br />
              дистриктов, общей площадью 88 000 га.
            </p>
          </div>

          {/* Districts Buttons */}
          <div className="flex flex-col gap-2 lg:gap-4 lg:-ml-12 -ml-2">
            {districts.map((district, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDistrict(index)}
                  className="w-full lg:w-145 px-3 lg:px-6 py-2 lg:py-4 border border-gray-300 rounded-md lg:rounded-lg
                             hover:bg-gray-50 transition-colors duration-200
                             flex justify-between items-center"
                >
                  <span className="text-left">{district.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 lg:h-5 w-4 lg:w-5 ml-1 lg:ml-2 transition-transform duration-200 ${
                      expandedDistrict === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedDistrict === index && (
                  <div className="mt-1 lg:mt-2 px-2 lg:px-4 py-2 lg:py-3 bg-gray-50 rounded-md lg:rounded-lg border border-gray-200">
                    {district.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-16 ml-4">
          <img
            src="/images/Map.svg"
            className="w-32 sm:w-full md:w-full lg:w-128 -mt-6 lg:-mt-24"
            alt="Alatau City Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
