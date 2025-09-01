import React from "react";
// Custom components for skill display
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

// Icon imports for different technologies
import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {SiJavascript,SiMongodb,SiExpress,SiGit,SiPostman,SiPython,} from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";

/**
 * Skills Component - Technical skills showcase with progress bars and skill cards
 * Displays proficiency levels and technology stack using interactive elements
 */
const Skills = ({ darkMode }) => {
  return (
    <div id="skills" className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <div className="container m-auto mt-16">
        {/* Section Header */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>

        {/* Main Skills Content - Two Column Layout */}
        <div className="flex lg:flex-col gap-8 items-end">
          
          {/* Left Section: Progress Bars for Core Skills */}
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className="text-gray-700 font-medium w-[100%] mb-6"
            >
              Here are my skills.
            </p>
            
            {/* Progress Bars Container */}
            <div
              data-aos="zoom-in"
              className="progress flex items-end justify-start lg:justify-center h-full"
            >
              <div className="flex flex-col gap-4 w-full max-w-md">
                {/* Frontend Skills */}
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={70} />
                <ProgressBar logo={<SiJavascript />} name={"Javascript"} value={65} />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={50} />
                
                {/* Backend Skills */}
                <ProgressBar logo={<IoLogoNodejs />} name={"Node.js"} value={50} />
                <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={50} />
                <ProgressBar logo={<SiExpress />} name={"Express.js"} value={50} />
              </div>
            </div>
          </div>

          {/* Right Section: Interactive Colorful Skill Cards */}
          <div className="right relative flex-1 flex flex-col items-center justify-end lg:items-center lg:mt-0">
            
            {/* First Row - Frontend Technologies */}
            <div className="flex flex-wrap gap-4 w-full justify-start lg:justify-center mb-6 sm:gap-3">
              <SkillBox
                logo={<FaReact />}
                black={"react"}
                white={"black"}
                skill={"React"}
              />
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"nodejs"}
                white={"white"}
                skill={"Node.js"}
              />
              <SkillBox
                logo={<SiPostman />}
                black={"postman"}
                white={"white"}
                skill={"Postman"}
              />
            </div>
            
            {/* Second Row - Languages & Version Control */}
            <div className="flex flex-wrap gap-4 w-full justify-start lg:justify-center sm:gap-3">
              <SkillBox
                logo={<SiPython />}
                black={"python"}
                white={"white"}
                skill={"Python"}
              />
              <SkillBox
                logo={<SiGit />}
                black={"git"}
                white={"white"}
                skill={"Git"}
              />
              <SkillBox
                logo={<FaGithub />}
                black={"github"}
                white={"white"}
                skill={"GitHub"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
