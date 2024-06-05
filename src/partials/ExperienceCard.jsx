import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const ExperienceCard = ({ experience: { id, title, description, dates } }) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-700">
      <h1 className="text-xl text-center font-bold">{title} </h1>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {dates}
      </div>
    </div>
  );
};

export default ExperienceCard;
