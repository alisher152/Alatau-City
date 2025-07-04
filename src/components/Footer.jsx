import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 mb-8">
          {/* About City Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-gray-900">О городе</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  О городе Алатау
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  СЭЗ Алатау
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Инвесторам
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Other Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Прочее</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Онлайн-подача заявки на участие в проектах
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Регистрация юридического лица в Алатау
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Карта сайта
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form - Full width on mobile, half on desktop */}
          <div className="w-full md:w-2/4">
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              Есть вопросы или предложения?
            </h3>
            <p className="mb-4">
              Отправьте почту и мы свяжемся с вами в ближайшее время!
            </p>

            <form className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Отправить
              </button>
            </form>

            {/* Social Media */}
            <div>
              <p className="mb-3">Следите за нами в соцсетях:</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-400 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm mb-4 sm:mb-0">© Alatau City, 2025</div>
          <div className="text-sm">
            Дизайн и разработка:{" "}
            <a href="#" className="text-blue-600 hover:underline">
              KeipTech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
