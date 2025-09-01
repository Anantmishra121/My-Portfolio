import React from "react";
import WorkCard from "../../chip/WorkCard";

/**
 * Work Component - Portfolio projects showcase section
 * Displays featured projects using WorkCard components in a grid layout
 */
const Work = ({ darkMode }) => {
  return (
    <div id="projects" className={`container mx-auto mt-16 px-2 sm:px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}` }>
      {/* Section header with animated underline */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Projects</h3>
        <span className="h-[2px] left-0 absolute w-full bg-gray-300 block"></span>
      </div>
      {/* Section description */}
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-full">
          Here are some of my Projects
        </p>
      </div>
      {/* Projects grid container */}
      <div className="card-wrapper mx-auto w-full mt-5">
        <div className="card-box grid grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-3xl mx-auto">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
