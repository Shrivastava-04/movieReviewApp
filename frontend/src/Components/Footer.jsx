import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 lg:px-10 py-5 lg:py-10 gap-10 w-full bg-blue-50 dark:bg-black/20 backdrop:blur-lg">
      <div className="flex justify-evenly min-w-fit gap-10 text-xl lg:text-2xl">
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="flex justify-evenly items-center min-w-fit gap-2 lg:gap-6 ">
        <a
          href="/"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300 lg:hover:bg-white rounded-3xl lg:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-md px-3 py-1"
        >
          Home
        </a>
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300 lg:hover:bg-white rounded-3xl lg:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-md px-3 py-1"
        >
          About
        </a>
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300 lg:hover:bg-white rounded-3xl lg:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-md px-3 py-1"
        >
          Services
        </a>
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300 lg:hover:bg-white rounded-3xl lg:hover:text-gray-900 bg-blue-200  dark:bg-gray-800 backdrop-blur-lg font-semibold text-md px-3 py-1"
        >
          Team
        </a>
        <a
          href="#"
          className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-125 lg:duration-300 lg:hover:bg-white rounded-3xl lg:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-md px-3 py-1"
        >
          Contact
        </a>
      </div>
      <div>
        <p>&copy;Harshit Shrivastava. All rights reserves.</p>
      </div>
    </div>
  );
};

export default Footer;
