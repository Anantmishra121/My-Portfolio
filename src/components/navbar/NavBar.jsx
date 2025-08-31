import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

// Navigation menu items configuration
const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "projects", // Links to #projects section
    displayName: "Projects", // Shows "Projects" in menu
  },
  {
    id: 2,
    name: "skills",
  },
  {
    id: 3,
    name: "about", // Links to about section
    displayName: "About Me",
  },
  {
    id: 4,
    name: "contact",
    displayName: "Contact Me",
  },
];

/**
 * NavBar Component - Responsive navigation bar with mobile menu
 * Handles smooth scrolling to sections and active state management
 */
const NavBar = () => {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle mobile navigation menu
  const toggleNav = (name = null) => {
    setIsOpen(!isOpen);
    if (name) {
      setActiveIndex(name === activeIndex ? null : name);
    }
  };

  // Handle navigation click types
  const handleNavClick = (item) => {
    // Close mobile menu
    setIsOpen(false);
    setActiveIndex(item.name);
    
    // Scroll to section with proper ID mapping
    if (item.name === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Map navigation names to actual section IDs
      let sectionId = item.name;
      if (item.name === 'projects') {
        sectionId = 'projects'; // Work component has id="projects"
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Track scroll position for navbar background
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Fixed navbar: transparent at top, white after scrolling
    <div
      className={`w-full mx-auto fixed top-0 py-5 sm:py-4 z-30 transition-colors duration-300 ${scrollPosition < 50 ? 'bg-transparent text-black' : 'bg-white text-black shadow-md'}`}
    >
      <nav className="container m-auto flex items-center justify-between">
        
        {/* Logo/Brand */}
        <div data-aos="fade-down" className="logo">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="text-3xl font-bold sm:text-3xl"
          >
            Anant Mishra
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-6 md:space-x-11"
        >
          
          {/* Mobile menu hamburger button */}
          <button
            onClick={() => toggleNav()}
            className="cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} />
          </button>

          {/* Navigation items list */}
          <ul
            className={`flex items-center space-x-11 ${
              isOpen ? "md:flex md:right-0" : "md:hidden md:right-[-100%]"
            } md:flex-col md:absolute m-auto md:top-0 md:w-[78%] md:h-screen md:bg-white`}
          >
            
            {/* Mobile menu close button */}
            <button
              onClick={() => toggleNav()}
              className="text-3xl hidden md:block relative right-0 top-4 container mx-auto"
            >
              <RxCross2 size={25} />
            </button>

            {/* Render navigation items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <button
                  onClick={() => handleNavClick(item)}
                  className="uppercase cursor-pointer font-bold text-black hover:text-yellow-600 transition-colors duration-200"
                >
                  {item.displayName || item.name}
                </button>
              </li>
            ))}

            {/* Call-to-action button */}
            <a
              href="/"
              className="text-[1rem] px-8 py-2 rounded-lg font-bold md:m-5 md:block md:mx-auto md:w-fit lg:px-3 transition-colors duration-200 bg-black text-white hover:text-yellow-400"
            >
              HIRE ME
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
