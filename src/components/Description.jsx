import React from "react";

const Description = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Investors Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
        {/* Slider hidden on mobile/tablet */}
        <div
          id="investors_section"
          className="hidden lg:block lg:w-1/2 lg:pr-10"
        >
          <img
            src="/images/Slider.svg"
            alt="Investment opportunities"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Investment Cards */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5">
          {/* Orange Card */}
          <div className="bg-orange-600 text-white p-5 rounded-lg flex items-start relative min-h-[150px]">
            <img
              src="/Icons/Icon 1.svg"
              className="sm:w-30 sm:h-30 sm:-ml-5 lg:w-24 lg:h-24 lg:-ml-5 absolute left-5 top-5"
            />
            <div className="pl-20 pr-10">
              <h2 className="text-xl font-bold leading-tight">
                Специальная индустриальная зона
                <br />
                <span className="text-2xl">ALATAU</span>
              </h2>
              <p className="mt-2 text-base">
                Почему стоит инвестировать в ALATAU SEZ?
              </p>
            </div>
            <button className="absolute right-5 top-5">
              <img src="/Icons/Vector.svg" className="w-5 h-5" />
            </button>
          </div>

          {/* Green Card */}
          <div className="bg-green-800 text-white p-5 rounded-lg flex items-start relative min-h-[150px]">
            <img
              src="/Icons/Icon 2.svg"
              className="sm:w-30 sm:h-30 sm:-ml-5 lg:w-24 lg:h-24 lg:-ml-5 absolute left-5 top-5"
            />
            <div className="pl-20 pr-10">
              <h2 className="text-xl font-bold leading-tight">
                Как стать инвестором?
              </h2>
              <p className="mt-2 text-base">
                Регистрация юридического лица в Alatau,
                <br />
                налоговые льготы для компаний,
                <br />
                государственная поддержка
              </p>
            </div>
            <button className="absolute right-5 top-5">
              <img src="/Icons/Vector.svg" className="w-5 h-5" />
            </button>
          </div>

          {/* Blue Card */}
          <div className="bg-blue-700 text-white p-5 rounded-lg flex items-start relative min-h-[150px]">
            <img
              src="/Icons/Icon 3.svg"
              className="sm:w-30 sm:h-30 sm:-ml-5 lg:w-24 lg:h-24 lg:-ml-5 absolute left-5 top-5"
            />
            <div className="pl-20 pr-10">
              <h2 className="text-xl font-bold leading-tight">
                Свободная таможенная зона
              </h2>
              <p className="mt-2 text-base">
                Упрощенные условия для ввоза и вывоза
                <br />
                товаров без уплаты таможенных пошлин
              </p>
            </div>
            <button className="absolute right-5 top-5">
              <img src="/Icons/Vector.svg" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div id="news_section" className="mt-10 sm:mt-12 md:mt-16">
        {/* Header - visible only on desktop */}
        <div className="hidden lg:flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Новости и события города
          </h2>
          <button className="flex items-center text-blue-600 font-medium">
            Все новости
            <img src="/Icons/Vector 1.svg" className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Mobile/Tablet header without button */}
        <h2 className="lg:hidden text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Новости и события города
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main News */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="/images/Image.svg"
              className="w-full h-48 sm:h-64 object-cover"
              alt="Main news"
            />
            <div className="p-5">
              <span className="text-gray-500 text-sm">12.04.2025</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                Заголовок главной новости о городе Алатау не больше 80 символов
              </h3>
            </div>
          </div>

          {/* News List */}
          <div className="w-full lg:w-1/3 space-y-4 sm:space-y-5">
            {/* News Item 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex h-32 sm:h-36">
              <div className="w-1/3 relative">
                <img
                  src="/images/Image 1.svg"
                  className="w-full h-full object-cover"
                  alt="News 1"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  Интервью
                </span>
              </div>
              <div className="w-2/3 p-3 flex flex-col justify-center">
                <span className="text-gray-500 text-xs">12.04.2025</span>
                <h4 className="text-sm sm:text-base font-bold mt-1 line-clamp-2">
                  Заголовок новости о новом городе Алатау
                </h4>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex h-32 sm:h-36">
              <div className="w-1/3 relative">
                <img
                  src="/images/Image 2.svg"
                  className="w-full h-full object-cover"
                  alt="News 2"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  Новости
                </span>
              </div>
              <div className="w-2/3 p-3 flex flex-col justify-center">
                <span className="text-gray-500 text-xs">12.04.2025</span>
                <h4 className="text-sm sm:text-base font-bold mt-1 line-clamp-2">
                  Заголовок новости о новом городе Алатау
                </h4>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex h-32 sm:h-36">
              <div className="w-1/3 relative">
                <img
                  src="/images/Image 3.svg"
                  className="w-full h-full object-cover"
                  alt="News 3"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  События
                </span>
              </div>
              <div className="w-2/3 p-3 flex flex-col justify-center">
                <span className="text-gray-500 text-xs">12.04.2025</span>
                <h4 className="text-sm sm:text-base font-bold mt-1 line-clamp-2">
                  Заголовок новости о новом городе Алатау
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* "All News" button - visible only on mobile/tablet */}
        <div className="lg:hidden mt-6 flex justify-center sm:justify-start">
          <button className="flex items-center text-blue-600 font-medium px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Все новости
            <img src="/Icons/Vector 1.svg" className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery_section" className="mt-20 h-full lg:ml-60">
        <img
          src="/images/Image 5.svg"
          className="w-200 h-auto rounded-4xl filter brightness-75 hover:brightness-100 transition-all duration-300"
        />
      </div>

      {/* Partners Section */}
      <div
        id="partners_section"
        className="mt-20 bg-gray-50 rounded-xl p-8 sm:p-10 md:p-12"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:ml-80 lg:-mt-120">
          {/* Text Content */}
          <div className="lg:w-1/2 z-10 lg:ml-20 lg:-mt-40 sm:-mt-120">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Наши партнеры
            </h2>
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8">
              Алатау – город, где встречаются амбиции, инновации и партнерство.
              Совместными усилиями мы реализуем значимые проекты, открывая новые
              горизонты для жителей города и формируя будущее, наполненное
              возможностями.
            </p>
            <button className="flex items-center bg-black text-white rounded-4xl pl-5 w-35 h-15 font-medium hover:text-blue-800 transition-colors group">
              Подробнее
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
