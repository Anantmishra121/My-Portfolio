import React from "react";

/**
 * SkillBox Component - Interactive skill card with technology branding
 * Displays technology logo and name with brand-specific colors and hover effects
 */
const SkillBox = ({ logo, black, white, skill }) => {
  // Universal technology brand colors - exact matches
  const getBackgroundColor = (color) => {
    const colorMap = {
      'react': 'lightblue',        // Navy blue for React
      'nodejs': '#339933',       // Node.js official green
      'postman': '#FF6C37',      // Postman official orange
      'python': '#3776AB',       // Python official blue
      'git': '#8B5CF6',          // Purple for Git
      'github': '#181717',       // GitHub official dark
      'javascript': '#F7DF1E',   // JavaScript official yellow
      'mongodb': '#47A248',      // MongoDB official green
      'express': '#000000',      // Express black
      'white': '#FFFFFF',
      'black': '#000000'
    };
    return colorMap[color] || color;
  };

  const getTextColor = (color) => {
    const colorMap = {
      'white': '#FFFFFF',
      'black': '#000000',
      'dark': '#000000'  // For JavaScript yellow background
    };
    return colorMap[color] || color;
  };

  return (
    <div
      data-aos="zoom-in" 
      data-aos-duration="1000"
      className="box w-[11rem] h-[11rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      style={{
        backgroundColor: getBackgroundColor(black),
        color: getTextColor(white)
      }}
    >
      <div
        className="w-14 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl"
        style={{
          backgroundColor: getTextColor(white),
          color: getBackgroundColor(black)
        }}
      >
        {logo}
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
