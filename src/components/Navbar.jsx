import React, { useState } from "react";

const Navbar = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("RU");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutAlatauOpen, setIsAboutAlatauOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const languages = [
    { code: "RU", name: "Русский" },
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "KK", name: "Қазақша" },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutAlatau = () => {
    setIsAboutAlatauOpen(!isAboutAlatauOpen);
  };

  return (
    <>
      {/* Десктопная версия (lg и выше) */}
      <div className="hidden lg:flex flex-row bg-white items-center p-4 gap-16 pl-70">
        {/* Логотип */}
        <div className="flex items-center">
          <img
            src="/images/Logo AlatauСity.svg"
            alt="AlatauCity Logo"
            className="mr-2"
          />
        </div>

        {/* Основные навигационные кнопки */}
        <div
          id="#nav_alatau_section"
          className="flex flex-row gap-10 items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("about_alatau_section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Об Алатау
          </button>
          <button
            onClick={() =>
              document
                .getElementById("investors_section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Инвесторы
          </button>
          <button
            onClick={() =>
              document
                .getElementById("news_section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-800 hover:text-blue-600 transition"
          >
            Для СМИ
          </button>
          <button className="text-gray-800 hover:text-blue-600 transition">
            Галерея
          </button>
          <button className="text-gray-800 hover:text-blue-600 transition">
            Контакты
          </button>

          {/* Иконка поиска */}
          <button className="text-gray-800 hover:text-blue-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Иконка скрытия информации (глаз) */}
          <button className="text-gray-800 hover:text-blue-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>

          {/* Кнопка смены языка с выпадающим списком */}
          <div className="relative">
            <button
              className="flex items-center text-gray-800 hover:text-blue-600 transition"
              onClick={toggleLanguageDropdown}
            >
              {currentLanguage}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
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

            {/* Выпадающий список языков */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      currentLanguage === language.code
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-800"
                    }`}
                    onClick={() => selectLanguage(language.code)}
                  >
                    {language.name} ({language.code})
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Кнопка "Связаться с нами" */}
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Связаться с нами
          </button>
        </div>
      </div>

      {/* Мобильная версия (md и ниже) */}
      <div className="lg:hidden flex flex-col bg-white p-4">
        {/* Верхняя строка с глазом, лого и бургер-кнопкой */}
        <div className="flex justify-between items-center">
          {/* Иконка глаза слева */}
          <button className="text-gray-800 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>

          {/* Логотип по центру */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center">
              <img
                src="/images/Logo AlatauСity.svg"
                alt="AlatauCity Logo"
                className="mr-2"
              />
            </div>
          </div>

          {/* Бургер-кнопка справа */}
          <button
            className="text-gray-800 focus:outline-none ml-2"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Поле поиска (появляется при открытом меню) */}
        {isMobileMenuOpen && (
          <div className="mt-4 px-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск..."
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-2.5 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Мобильное меню (появляется при клике на бургер) */}
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-2 text-center">
            {/* Кнопка "Об Алатау" с подменю */}
            <div className="mx-auto max-w-xs">
              <button
                className="flex justify-between items-center w-full text-gray-800 hover:text-blue-600 transition py-3 px-4 border-b border-gray-200"
                onClick={toggleAboutAlatau}
              >
                <span className="mx-auto">Об Алатау</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-2 transition-transform duration-200 ${
                    isAboutAlatauOpen ? "transform rotate-180" : ""
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

              {/* Подменю "Об Алатау" */}
              {isAboutAlatauOpen && (
                <div className="space-y-2 mt-2 mb-2 text-center border-white">
                  <button className=" w-full text-gray-600 hover:text-blue-600 transition py-2 px-4 rounded hover:bg-gray-50">
                    О городе Алатау
                  </button>
                  <button className=" w-full text-gray-600 hover:text-blue-600 transition py-2 px-4 rounded hover:bg-gray-50">
                    Районы города
                  </button>
                  <button className=" w-full text-gray-600 hover:text-blue-600 transition py-2 px-4 rounded hover:bg-gray-50">
                    Цифры и факты
                  </button>
                  <button className=" w-full text-gray-600 hover:text-blue-600 transition py-2 px-4 rounded hover:bg-gray-50">
                    Инфраструктура
                  </button>
                  <button className=" w-full text-gray-600 hover:text-blue-600 transition py-2 px-4 rounded hover:bg-gray-50">
                    Логистика
                  </button>
                </div>
              )}
            </div>

            {/* Остальные кнопки меню */}
            <div className="mx-auto max-w-xs">
              <button
                className="w-full text-gray-800 hover:text-blue-600 transition py-3 px-4"
                onClick={() => {
                  document
                    .getElementById("investors_section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(true);
                }}
              >
                Инвесторы
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("news_section")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(true);
                }}
                className="w-full text-gray-800 hover:text-blue-600 transition py-3 px-4"
              >
                Для СМИ
              </button>
              <button className="w-full text-gray-800 hover:text-blue-600 transition py-3 px-4">
                Галерея
              </button>
              <button className="w-full text-gray-800 hover:text-blue-600 transition py-3 px-4">
                Контакты
              </button>
            </div>

            {/* Иконки социальных сетей в правильном порядке */}
            <div className="flex justify-center space-x-6 py-4">
              {/* YouTube (первый) */}
              <a
                href="#"
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              {/* LinkedIn (второй) */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram (третий) */}
              <a
                href="#"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook (четвертый) */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>

              {/* Telegram (пятый) */}
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                aria-label="Telegram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.429.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>
            </div>

            {/* Кнопка смены языка - без изменений */}
            {/* ... */}

            {/* Кнопка "Связаться с нами" */}
            <div className="mx-auto max-w-xs mt-4">
              <button className="bg-black text-white px-4 py-3 rounded-2xl hover:bg-gray-800 transition w-full">
                Связаться с нами
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
