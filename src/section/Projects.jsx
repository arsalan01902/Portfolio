import React from "react";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center mt-16 sm:mt-20
      px-4 sm:px- pt-25"
    >
      <h1
        className="text-4xl sm:text-5xl md:text-6xl
      font-extrabold text-fuchsia-600 mb-8 sm:mb-12"
      >
        Projects
      </h1>

      <div
        className="w-full max-w-sm sm:max-w-md
        rounded-2xl bg-white/10 backdrop-blur-lg
        border border-white/20 shadow-xl overflow-hidden
        transition-transform duration-300 hover:scale-105"
      >
        <div className="p-3 sm:p-4">
          <img
            src="/src/assets/Project.png"
            alt="C# Entity Framework Desktop Application"
            className="w-full h-48 sm:h-56 object-contain
            rounded-md bg-fuchsia-900/40"
          />
        </div>

        <div className="p-4 text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-fuchsia-400 mb-2">
            Desktop Application
          </h2>

          <p className="text-fuchsia-300 text-xs sm:text-sm mb-3">
            C# • Entity Framework • Final Year Project
          </p>

          <p className="text-gray-200 text-sm leading-relaxed">
            A desktop application built using C# and Entity Framework as a final
            year project, awarded an{" "}
            <span className="font-semibold">A Grade</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
