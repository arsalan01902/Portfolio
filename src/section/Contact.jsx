import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col
      mt-16 sm:mt-24 md:mt-32
      px-4 sm:px-6 md:px-20 pt-25"
    >
      <h1
        className="text-4xl sm:text-5xl md:text-6xl
        flex items-center justify-center
        font-extrabold text-fuchsia-600
        mb-6 sm:mb-10"
      >
        Contact Me
      </h1>

      <div
        className="flex flex-col md:flex-row
        items-center justify-between
        gap-8 md:gap-12 mt-5"
      >
        <p
          className="text-gray-300
          text-2xl sm:text-3xl md:text-5xl
          font-extrabold text-center pb-30 md:text-left 
          max-w-xl"
        >
          🟣 Let's Create Something Amazing Together
        </p>

        <div
          className="w-full max-w-md sm:max-w-lg
          bg-white/10 backdrop-blur-lg
          border border-white/20 rounded-2xl
          p-6 sm:p-8 shadow-xl"
        >
          <form className="flex flex-col gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-white/20
              rounded-md px-4 py-3 text-white
              placeholder-gray-300 focus:outline-none
              focus:border-fuchsia-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-white/20
              rounded-md px-4 py-3 text-white
              placeholder-gray-300 focus:outline-none
              focus:border-fuchsia-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="bg-transparent border border-white/20
              rounded-md px-4 py-3 text-white
              placeholder-gray-300 focus:outline-none
              focus:border-fuchsia-500 resize-none"
            />

            <button
              type="submit"
              className="bg-fuchsia-600 hover:bg-fuchsia-700
              transition-colors text-white font-semibold
              py-3 rounded-md w-40
              mx-auto md:mx-0"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
