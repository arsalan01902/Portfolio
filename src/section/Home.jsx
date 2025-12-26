import React from "react";

export const Home = () => {
  return (
    <section
      id="home"
      className="pt-20 sm:pt-20 px-4 sm:px-8 md:px-20 lg:px-40
      flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >
      <img
        src="/avatar.avif"
        alt="Profile Picture"
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60
        rounded-full object-cover border-4 border-fuchsia-950"
      />

      <div className="flex flex-col justify-center text-center md:text-left pt-20">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Hi,</h1>
          <p className="text-lg sm:text-xl md:text-2xl">I'm Muhammad Arsalan</p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
          <span className="text-fuchsia-950 font-mono">Software </span>
          Engineer
        </h1>

        <p className="text-fuchsia-400 pt-4 font-mono text-sm sm:text-base max-w-xl">
          Software Engineer skilled in MERN stack, aspiring to become a
          full-stack developer with DevOps and cloud expertise.
        </p>

        <div
          className="w-36 sm:w-40 h-10 mt-8 sm:mt-10 bg-fuchsia-500 font-mono
          flex justify-center items-center rounded-md transition-transform
          hover:scale-105 hover:bg-fuchsia-900 hover:border hover:border-gray-500
          mx-auto md:mx-0"
        >
          <a href="/public/Arsalan_Resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};
