import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const [redirect, setRedirect] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // const param = data.paremeter;
    localStorage.setItem("param", data.paremeter);
    setRedirect(true);
  };
  return (
    <>
      {/* Desktop Mode */}
      <div className="hidden md:flex justify-between items-center px-10 pt-4 pb-3 fixed z-50 min-w-full  dark:bg-black/20 backdrop-blur-lg rounded-lg">
        <a href="/">
          <div className=" px-2 py-1 bg-black rounded-lg">
            <img
              src="/src/assets/logo.png"
              className="w-5 bg-black"
              alt="logo"
            />
          </div>
        </a>
        <div className="flex justify-between items-center gap-20">
          <div>
            <ul className="flex items-center space-x-4 gap-6">
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:hover:bg-white dark:text-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg">
                <a
                  onClick={() => {
                    if (localStorage.getItem("navname"))
                      localStorage.removeItem("navname");
                    localStorage.setItem("navname", "Movie");
                  }}
                  href="/movie"
                  className="px-4 py-2"
                >
                  Movies
                </a>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:hover:bg-white dark:text-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg">
                <a
                  onClick={() => {
                    if (localStorage.getItem("navname"))
                      localStorage.removeItem("navname");
                    localStorage.setItem("navname", "Tv Show");
                  }}
                  href="/movie"
                  className="px-4 py-2"
                >
                  Tv Shows
                </a>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:hover:bg-white dark:text-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg">
                <a
                  onClick={() => {
                    if (localStorage.getItem("navname"))
                      localStorage.removeItem("navname");
                    localStorage.setItem("navname", "Series");
                  }}
                  href="/movie"
                  className="px-4 py-2"
                >
                  Series
                </a>
              </li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg">
                <a
                  onClick={() => {
                    if (localStorage.getItem("navname"))
                      localStorage.removeItem("navname");
                    localStorage.setItem("navname", "Anime");
                  }}
                  href="/movie"
                  className="px-4 py-2"
                >
                  Anime
                </a>
              </li>
            </ul>
          </div>
          <div>
            <form
              className="flex justify-between bg-blue-100 dark:bg-gray-800  text-black rounded-3xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="w-full px-4 py-2 dark:text-white bg-transparent   rounded-3xl outline-none"
                placeholder="Search"
                {...register("paremeter", { required: true })}
              />
              <button
                type="submit"
                className="px-2  dark:text-white bg-transparent rounded-3xl"
              >
                <CiSearch className="h-6 w-6 rounded-3xl" />
              </button>
              {redirect && <Navigate to="/search" />}
              {redirect && window.location.reload()}
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center gap-20">
          <a href="#">
            <IoNotificationsOutline className="h-8 w-8" />
          </a>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="flex items-center justify-center gap-2">
            {authUser ? (
              <Logout />
            ) : (
              <a
                href="/login"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg px-4 py-1"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex md:hidden justify-between items-center px-4 pt-4 pb-3 gap-2 fixed z-50 m-2 dark:bg-black/20 backdrop-blur-lg rounded-lg">
        <div className=" px-2 py-1 bg-black rounded-lg">
          <a href="/">
            <img
              src="/src/assets/logo.png"
              className="w-5 bg-black"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <form className="flex justify-between bg-blue-100 dark:bg-gray-800 rounded-3xl">
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
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {authUser ? (
          <Logout />
        ) : (
          <div className="flex items-center justify-center gap-2">
            <a
              href="/login"
              className=" bg-gray-800 text-md text-white px-4 py-1 rounded-3xl font-semibold cursor-pointer"
            >
              Login
            </a>
          </div>
        )}
      </div>
      <div className="md:hidden bg-blue-50 dark:bg-black/20 pt-24">
        <ul className="flex items-center space-x-2 gap-1 px-2">
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg bg-blue-200 dark:bg-black/20">
            <a
              onClick={() => {
                if (localStorage.getItem("navname"))
                  localStorage.removeItem("navname");
                localStorage.setItem("navname", "Movie");
              }}
              href="/movie"
              className="px-5 py-2"
            >
              Movies
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg bg-blue-200 dark:bg-black/20">
            <a
              onClick={() => {
                if (localStorage.getItem("navname"))
                  localStorage.removeItem("navname");
                localStorage.setItem("navname", "Tv Shows");
              }}
              href="/movie"
              className="px-5 py-2"
            >
              Tv Shows
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg bg-blue-200 dark:bg-black/20">
            <a
              onClick={() => {
                if (localStorage.getItem("navname"))
                  localStorage.removeItem("navname");
                localStorage.setItem("navname", "Series");
              }}
              href="/movie"
              className="px-5 py-2"
            >
              Series
            </a>
          </li>
          <li className="hover:bg-white rounded-3xl hover:text-gray-900 cursor-pointer text-lg bg-blue-200 dark:bg-black/20">
            <a
              onClick={() => {
                if (localStorage.getItem("navname"))
                  localStorage.removeItem("navname");
                localStorage.setItem("navname", "Anime");
              }}
              href="/movie"
              className="px-5 py-2"
            >
              Anime
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
