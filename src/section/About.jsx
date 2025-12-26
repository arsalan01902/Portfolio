import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center
      mt-16 sm:mt-24 md:mt-32
      px-4 sm:px-8 md:px-20 lg:px-40 pt-25"
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl
        font-extrabold text-fuchsia-950
        mb-6 sm:mb-10"
      >
        About Me
      </h2>

      <p
        className="text-base sm:text-lg md:text-xl
        font-bold font-mono
        max-w-4xl text-left mb-4 sm:mb-6
        leading-relaxed"
      >
        Hello! I am a passionate software engineer, a graduate of Abasyn
        University. I am currently learning the MERN stack and building projects
        to enhance my skills in modern web development.
      </p>

      <p
        className="text-base sm:text-lg md:text-xl
        font-bold font-mono
        max-w-4xl text-left mb-4 sm:mb-6
        leading-relaxed"
      >
        I have earned certificates in JavaScript and MERN stack, which reflect
        my commitment to continuous learning. My skill set includes HTML, CSS,
        JavaScript, Bootstrap, Tailwind CSS, React, and Figma, allowing me to
        build responsive, user-friendly, and visually appealing web
        applications.
      </p>

      <p
        className="text-base sm:text-lg md:text-xl
        font-bold font-mono
        max-w-4xl text-left
        leading-relaxed"
      >
        I love turning ideas into real projects and constantly exploring new
        technologies to improve my craft.
      </p>
    </section>
  );
};
