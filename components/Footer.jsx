import React from 'react';
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-white p-4 mt-60">
      <div className="container mx-auto relative">
        <div className="flex justify-center items-center absolute right-4 bottom-4 z-10">
            <p className="font-bold mr-4">Follow me on</p>
          <Link href="https://github.com/Nyildizzz" passHref>
              <IoLogoGithub
                className="text-white mr-4 transform hover:scale-150 transition-transform duration-300 space-x-5"
                size={40}
              />
          </Link>
          <Link href="https://www.linkedin.com/in/nurettin-yildiz/" passHref>
              <FaLinkedin
                className=" bg-transparent text-white transform hover:scale-150 transition-transform duration-300 space-x-5"
                size={40}
              />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
