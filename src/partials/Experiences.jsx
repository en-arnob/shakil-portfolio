import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experiences = ({ experiences }) => {
  return (
    <div>
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
        Work Experiences
      </h1>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default Experiences;
