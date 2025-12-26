import React from "react";

export const Footer = () => {
  return (
    <footer
      className="mt-16 sm:mt-24 md:mt-32
    w-full bg-black/30 backdrop-blur-md
    border-t border-white/10"
    >
      <div
        className="max-w-6xl mx-auto
        px-4 sm:px-6
        py-6 sm:py-8
        flex flex-col md:flex-row
        items-center justify-between
        gap-4 sm:gap-6"
      >
        <p className="text-gray-300 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Muhammad Arsalan. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-6 items-center justify-center">
          <a
            href="https://github.com/arsalan01902"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/src/assets/github.png"
              alt="GitHub"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </a>

          <a
            href="mailto:arsalan01902@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/src/assets/gmail.png"
              alt="Gmail"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-arsalan-441173378"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/src/assets/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
