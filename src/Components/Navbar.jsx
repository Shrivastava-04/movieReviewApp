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
      <div className="hidden md:flex justify-between items-center px-10 pt-4 pb-3  ">
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
              <li className="hover:bg-white rounded-3xl hover:text-gray-900  text-lg">
                <a href="#" className="px-5 py-2">
                  Movies
                </a>
              </li>
              <li className="hover:bg-white rounded-3xl hover:text-gray-900 text-lg">
                <a href="#" className="px-5 py-2">
                  Tv Shows
                </a>
              </li>
              <li className="hover:bg-white rounded-3xl hover:text-gray-900 text-lg">
                <a href="#" className="px-5 py-2">
                  Series
                </a>
              </li>
              <li className="hover:bg-white rounded-3xl hover:text-gray-900  text-lg">
                <a href="#" className="px-5 py-2">
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
            <div className="bg-black px-2 py-1 rounded-lg">
              <img
                src="/src/assets/logo.png"
                className="w-5 bg-black"
                alt="myimg"
              />
            </div>
            <select
              name=""
              id=""
              className="bg-transparent h-4 w-4 text-white "
            >
              <option value="" className="bg-slate-800">
                My Account
              </option>
              <option value="" className="bg-slate-800">
                Go Premium
              </option>
              <option value="" className="bg-slate-800">
                Favourites
              </option>
              <option value="" className="bg-slate-800">
                Log Out
              </option>
            </select>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex md:hidden justify-between items-center px-10 pt-4 pb-3 ">
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
              className="w-full  py-2  bg-transparent rounded-3xl outline-none"
              placeholder="Search"
            />
          </form>
        </div>
        <div>
          <button className="focus:outline-none " onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div>
        {isMobileMenuOpen && (
          <ul className="flex flex-col gap-4">
            <li className="hover:bg-gray-800 hover:text-white text-lg py-2 px-4">
              My Account
            </li>
            <li className="hover:bg-gray-800 hover:text-white text-lg py-2 px-4">
              Go Premium
            </li>
            <li className="hover:bg-gray-800 hover:text-white text-lg py-2 px-4">
              Favourites
            </li>
            <li className="hover:bg-gray-800 hover:text-white text-lg py-2 px-4">
              Log Out
            </li>
          </ul>
        )}
      </div>
      <div className="md:hidden">
        <ul className="flex items-center space-x-2 gap-2">
          <li className="hover:bg-white rounded-3xl hover:text-gray-900  text-lg">
            <a href="#" className="px-5 py-2">
              Movies
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 text-lg">
            <a href="#" className="px-5 py-2">
              Tv Shows
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 text-lg">
            <a href="#" className="px-5 py-2">
              Series
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900  text-lg">
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
