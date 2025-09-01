import React from "react";

/**
 * About Component - Personal information, education, and certifications section
 * Displays introduction, educational background, and professional certifications
 */
const About = ({ darkMode }) => {
  return (
    <div id="about" className={`container m-auto mt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}` }>
      {/* Section Header */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          About Me
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>

      {/* About Content */}
      <div className="flex lg:flex-col gap-8">
        
        {/* Introduction Section */}
        <div className="left flex-1">
          <div data-aos="fade-up" className="mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Who I am</h4>
            <p className="text-gray-700 font-medium leading-relaxed">
            I'm Anant Mishra, a passionate Computer Science and Engineering student at the School of Management Sciences, Lucknow, with a strong foundation in web development and a drive to create impactful digital experiences. I specialize in building responsive, user-friendly websites using technologies like HTML, CSS, JavaScript, and React, and I enjoy exploring backend tools like Node.js and MongoDB to bring full-stack solutions to life. Beyond technical skills, I bring a collaborative spirit, strong communication, adaptability, and a problem-solving mindset to every project I take on.
            </p>
            <p className="text-gray-700 font-medium leading-relaxed mt-4">
           Whether it's coding a sleek interface or brainstorming innovative ideas, I thrive on learning, growing, and turning challenges into opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Education and Certifications Row */}
      <div className="flex lg:flex-col gap-8 mt-12">
        
        {/* Education Section */}
        <div className="flex-1" data-aos="fade-up">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Education</h4>
          <div className="space-y-4">
            
            {/* Bachelor's Degree */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h5 className="text-lg font-bold text-gray-800">Bachelor's Degree</h5>
              <p className="text-gray-600 font-medium">Computer Science & Engineering</p>
              <p className="text-gray-500 text-sm">SCHOOL OF MANAGEMENT SCIENCES, LUCKNOW
• 2023-26</p>
            </div>
              {/* Diploma*/}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="text-lg font-bold text-gray-800">Diploma </h5>
              <p className="text-gray-600 font-medium">Mechanical Engineering</p>
              <p className="text-gray-500 text-sm">GOVT. POLYTECHNIC,PURENA,MAHARAJGANJ • 2020-23</p>
            </div>

            {/* 12th Grade */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-500">
              <h5 className="text-lg font-bold text-gray-800">Higher Secondary</h5>
              <p className="text-gray-600 font-medium">Science Stream(PCM)</p>
              <p className="text-gray-500 text-sm"> SHRAVAN DHAM I.C. GURUGAON, GONDA
• 2020</p>
            </div>

            {/* High School */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h5 className="text-lg font-bold text-gray-800">High School </h5>
              <p className="text-gray-600 font-medium">Secondary Education</p>
              <p className="text-gray-500 text-sm"> SHRAVAN DHAM I.C. GURUGAON, GONDA
 • 2018</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex-1" data-aos="fade-up">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h4>
          <div className="space-y-3">
            
            {/* Certification Item 1 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h5 className="text-lg font-bold text-gray-800">Web Development </h5>
              <p className="text-gray-600 font-medium">MERN Stack Specialization</p>
              <p className="text-gray-500 text-sm"> Techpile Technology Pvt. Ltd. Lucknow • 2025</p>
            </div>

            {/* Certification Item 2 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h5 className="text-lg font-bold text-gray-800">Software Engineering Job Simulation</h5>
              <p className="text-gray-600 font-medium">Try real coding tasks in a virtual job setting.</p>
              <p className="text-gray-500 text-sm"> Accenture• 2025</p>
            </div>

            {/* Certification Item 3 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-red-500">
              <h5 className="text-lg font-bold text-gray-800">Programming Fundamentals Using Python – Science Graduates </h5>
              <p className="text-gray-600 font-medium">A beginner-friendly course to bridge science and software.</p>
              <p className="text-gray-500 text-sm"> Infosys • 2025</p>
            </div>

            {/* Certification Item 4 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h5 className="text-lg font-bold text-gray-800">Foundation Program</h5>
              <p className="text-gray-600 font-medium">A comprehensive induction program covering programming, soft skills, and project readiness.</p>
              <p className="text-gray-500 text-sm">Infosys Technologies • 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
