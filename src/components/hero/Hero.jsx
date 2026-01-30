import React from "react";
import { AiFillTwitterCircle, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaLinkedinIn, FaPlay } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import profileImg from "../../assets/PP.png";

/**
 * Hero Component - Landing section of the portfolio
 * Displays profile information, animated typing effect, and social links
 */
const Hero = ({ darkMode }) => {
  return (
    <div id="home" className={`${darkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-r from-green-200 to-blue-200 text-gray-900'} w-full`}>
      <div className="container mx-auto px-4 py-10 flex flex-row items-center justify-center min-h-screen gap-6 sm:gap-4">

        {/* Left Section - Profile information and actions */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center items-start gap-4 sm:gap-2 text-left">
          <h2 className="text-5xl font-bold md:text-4xl sm:text-2xl exsm:text-xl">
            Hello, I'm Anant Mishra
          </h2>
          {/* Animated typing effect for roles */}
          <TypeAnimation
            sequence={["Full Stack Developer", 2000, "MERN Specialist", 2000, "Backend Developer", 2000, "Frontend Developer", 2000, ""]}
            speed={30}
            wrapper="h2"
            repeat={Infinity}
            className="text-yellow-500 text-4xl font-bold md:text-3xl sm:text-2xl exsm:text-lg"
          />
          <p className="text-lg text-gray-700 md:text-base sm:text-sm max-w-xl">
            Full-Stack Developer expertise in the MERN stack (MongoDB, Express.js, React, Node.js). I design and deliver high-performance, scalable web applications with robust backend architectures, RESTful APIs, and modern, responsive user interfaces. Committed to writing clean, maintainable code and delivering exceptional user experiences.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/"
              className="bg-black text-white px-8 py-2 rounded-lg font-semibold hover:text-yellow-500 transition"
            >
              Hire Me
            </a>
            <a
              href={resumePDF}
              download
              className="flex items-center gap-2 bg-white border border-black px-7 py-2 rounded-lg font-semibold hover:text-yellow-500 transition"
            >
              Resume <FiDownload />
            </a>
          </div>

          {/* Social media links */}
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
            <li><a href="https://www.linkedin.com/in/anant-mishra76"><FaLinkedinIn className="text-3xl hover:scale-125 transition" /></a></li>
            <li><a href="https://github.com/Anantmishra121"><AiFillGithub className="text-3xl hover:scale-125 transition" /></a></li>
            <li>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&to=anantmishra727@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Anant,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-3xl hover:scale-125 transition " />
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Profile image */}
        <div className="flex-1 w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-96 h-96 sm:w-80 sm:h-80">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;