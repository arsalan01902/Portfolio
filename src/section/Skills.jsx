import React from "react";

export const Skills = () => {
  const skills = [
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "JavaScript", logo: "/javascript.png" },
    { name: "React", logo: "/react.png" },
    { name: "Bootstrap", logo: "/bootstrap.png" },
    { name: "Tailwind CSS", logo: "/tailwind.png" },
    { name: "Node JS", logo: "/node.png" },
    { name: "Express JS", logo: "/express.png" },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center
      py-16 sm:py-20
      px-4 sm:px-6 md:px-20 pt-10 mt-20"
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl
        font-extrabold text-fuchsia-950
        mb-8 sm:mb-10 text-center"
      >
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center
            p-4 sm:p-6 md:p-8
            w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40
            bg-fuchsia-600 rounded-md
            hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3"
            />
            <p className="text-white font-semibold text-center text-sm sm:text-base">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
