import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

/**
 * Footer Component - Site footer with social media links and copyright
 * Features animated background decorations and interactive social media icons
 */
const Footer = ({ darkMode }) => {
  return (
    <div id="works" className="mx-auto m-auto mt-16">
      <div className={`${darkMode ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black'} relative overflow-hidden`}>
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full translate-x-24 translate-y-24"></div>
        
        <div className="relative z-10 flex flex-col gap-8 items-center justify-center py-16 px-10 sm:py-12 sm:px-7">
          
          {/* Main Heading */}
          <h2 
            data-aos="zoom-out"
            className="font-bold text-6xl sm:text-4xl text-white text-center drop-shadow-sm"
          >
            Let's Connect
          </h2>
          
          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-12 sm:gap-8">
            <a 
              data-aos="fade-up" 
              data-aos-duration="1000"
              href="https://www.linkedin.com/in/anant-mishra76"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center flex-col transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:bg-blue-500/30 border border-white/20 transition-all duration-300">
                <FaLinkedinIn className="text-blue-400 group-hover:text-blue-300 text-4xl group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-semibold text-gray-300 mt-3 group-hover:text-white transition-colors duration-300">LinkedIn</p>
            </a>
            
            <a 
              data-aos="fade-up" 
              data-aos-duration="1200"
              href="https://mail.google.com/mail/u/0/?view=cm&to=anantmishra727@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Anant,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center flex-col transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:bg-red-500/30 border border-white/20 transition-all duration-300">
                <HiMail className="text-red-400 group-hover:text-red-300 text-4xl group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-semibold text-gray-300 mt-3 group-hover:text-white transition-colors duration-300">Email</p>
            </a>
            
            <a 
              data-aos="fade-up" 
              data-aos-duration="1400"
              href="https://github.com/Anantmishra121"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center flex-col transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:bg-gray-500/30 border border-white/20 transition-all duration-300">
                <FaGithub className="text-gray-400 group-hover:text-gray-300 text-4xl group-hover:scale-110 transition-all duration-300" />
              </div>
              <p className="font-semibold text-gray-300 mt-3 group-hover:text-white transition-colors duration-300">GitHub</p>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 font-medium sm:text-sm bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/10">
            |  &copy; <span className="font-semibold text-white">2025 Anant Mishra</span> All rights reserved
            <a href="#"></a> |
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
