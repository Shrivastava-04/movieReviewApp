import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Desktop Mode */}
      <div className="hidden md:flex justify-between items-center px-10 pt-4 pb-3 fixed z-50 min-w-full bg-black/20 backdrop-blur-lg rounded-lg">
        <div className=" px-2 py-1 bg-black rounded-lg">
          <a href="#">
            <img
              src="/src/assets/logo.png"
              className="w-5 bg-black"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex justify-between items-center gap-20">
          <div>
            <ul className="flex items-center space-x-4 gap-6">
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-white rounded-3xl hover:text-gray-900 bg-black/20 backdrop-blur-lg font-semibold text-lg">
                <a href="#" className="px-4 py-2">
                  Movies
                </a>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-white rounded-3xl hover:text-gray-900 bg-black/20 backdrop-blur-lg font-semibold text-lg">
                <a href="#" className="px-4 py-2">
                  Tv Shows
                </a>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-white rounded-3xl hover:text-gray-900 bg-black/20 backdrop-blur-lg font-semibold text-lg">
                <a href="#" className="px-4 py-2">
                  Series
                </a>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-white rounded-3xl hover:text-gray-900 bg-black/20 backdrop-blur-lg font-semibold text-lg">
                <a href="#" className="px-4 py-2">
                  Anime
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form className="flex justify-between bg-gray-700 rounded-3xl">
              <button
                type="submit"
                className="px-4 text-white bg-transparent rounded-3xl"
              >
                <CiSearch className="h-6 w-6 rounded-3xl" />
              </button>
              <input
                type="text"
                className="w-full  py-2  bg-transparent rounded-3xl outline-none"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center gap-20">
          <a href="#">
            <IoNotificationsOutline className="h-8 w-8" />
          </a>
          <div className="flex items-center justify-center gap-2">
            <a
              href="#"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 bg-gray-800 text-lg text-white px-4 py-1 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
            >
              Login
            </a>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex md:hidden justify-between items-center px-8 pt-4 pb-3 gap-2">
        <div className=" px-2 py-1 bg-black rounded-lg">
          <a href="#">
            <img
              src="/src/assets/logo.png"
              className="w-5 bg-black"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <form className="flex justify-between bg-gray-700 rounded-3xl">
            <button
              type="submit"
              className="px-4 text-white bg-transparent rounded-3xl"
            >
              <CiSearch className="h-6 w-6 rounded-3xl" />
            </button>
            <input
              type="text"
              className="w-full  py-2  bg-transparent rounded-3xl outline-none "
              placeholder="Search"
            />
          </form>
        </div>
        <div className="flex items-center justify-center gap-2">
          <a
            href="#"
            className=" bg-gray-800 text-md text-white px-4 py-1 rounded-3xl font-semibold cursor-pointer"
          >
            Login
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <ul className="flex items-center space-x-2 gap-2">
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg">
            <a href="#" className="px-5 py-2">
              Movies
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg">
            <a href="#" className="px-5 py-2">
              Tv Shows
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg">
            <a href="#" className="px-5 py-2">
              Series
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg">
            <a href="#" className="px-5 py-2">
              Anime
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
