import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-100 p-3 shadow-sm rounded-xl">
        <div className="text-6xl px-8 font-bold text-gray-700 flex items-center space-x-1">
          <span className="underline decoration-2 decoration-gray-700 m-0 p-0">
            Jee
          </span>
          <span className="text-blue-600 m-0 p-0">1</span>
        </div>

        <div className="flex-grow mx-12">
          <input
            type="text"
            className="w-full px-4 py-2 bg-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <FiBell className="text-gray-600 text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
          </div>

          <FiSettings className="text-gray-600 text-xl cursor-pointer" />

          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
