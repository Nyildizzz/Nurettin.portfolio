"use client"
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="p-4 mt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex text-white space-x-4">
          <ScrollLink
            to="top"
            smooth={true}
            duration={500}
            className="mr-2 mt-1 cursor-pointer"
            onClick={scrollToTop}
          >
             <svg
          width="35"
          height="35"
          viewBox="0 0 46 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 mt-1"
        >
          <path
            d="M22.6 5.70001V27.2L17.7 24.4C9 19.4 3.59999 10.1 3.59999 0H0V24.6C0 32.6 4.59999 40 11.9 43.5L22.7 48.7V27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.70001Z"
            fill="white"
          />
        </svg>
          </ScrollLink>
          <h2 className="font-medium text-xl mt-2">Nurettin Yıldız</h2>
        </div>
        <div className="text-slate-400 space-x-10 mx-auto">
          <ScrollLink to="projects" smooth={true} duration={500}>
            <span className="hover:text-gray-300 font-medium text-xl cursor-pointer">Projects</span>
          </ScrollLink>
          <ScrollLink to="technologies" smooth={true} duration={500}>
            <span className="hover:text-gray-300 font-medium text-xl cursor-pointer">Technologies</span>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>
            <span className="hover:text-gray-300 font-medium text-xl cursor-pointer">About</span>
          </ScrollLink>
        </div>
        <div className="flex items-center ">
        <Link href="https://github.com/Nyildizzz">
            <IoLogoGithub
              className="text-white mr-4 transform hover:scale-150 transition-transform duration-300 space-x-5"
              size={40}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/nurettin-yildiz/">
            <FaLinkedin
              className="text-white transform hover:scale-150 transition-transform duration-300 space-x-5 "
              size={40}
            />
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

