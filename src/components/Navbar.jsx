import React from "react";

export const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center
          backdrop-blur-md border border-fuchsia-700/30
          rounded-2xl px-4 sm:px-8 py-3 sm:py-4 shadow-lg"
        >
          <img
            src="/src/assets/sign.png"
            alt="Logo"
            className="h-10 sm:h-12 object-contain mx-auto sm:mx-0"
          />

          <ul
            className="flex flex-row flex-wrap justify-center items-center
            gap-3 sm:gap-6 md:gap-8
            mt-3 sm:mt-0
            text-xs sm:text-sm md:text-base
            text-white font-medium"
          >
            <li className="hover:text-fuchsia-600 transition hover:scale-105">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-fuchsia-600 transition hover:scale-105">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-fuchsia-600 transition hover:scale-105">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-fuchsia-600 transition hover:scale-105">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-fuchsia-600 transition hover:scale-105">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
