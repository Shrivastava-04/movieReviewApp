import React, { useState } from "react";
import data from "../../public/data.json";
import RightPanelCards from "./RightPanelCards";
import datas from "../FetchData.js";
const RightPanel = () => {
  const [count, setCount] = useState(0);
  const [myData, error] = datas.customDataFetch("/search", "game");

  const handle = () => {
    setCount(count + 1);
  };
  const thisData = myData.filter((item) => {
    return item.title.length <= 20;
  });
  console.log(myData);
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <div className="hidden bg-blue-50 dark:bg-gray-600 dark:text-white py-3 mt-1 text-start lg:flex flex-col">
        <h3 className="px-5 mb-4">Genre</h3>
        <div className="flex flex-col items-center gap-6 mb-3">
          <div className="flex px-10 gap-10">
            <div>
              <ul className="flex flex-col gap-3">
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Action");
                    }}
                  >
                    Action
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Comedy");
                    }}
                  >
                    Comedy
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Thriller");
                    }}
                  >
                    Thriller
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Drama");
                    }}
                  >
                    Drama
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Crime");
                    }}
                  >
                    Crime
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Rom Com");
                    }}
                  >
                    RomCom
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Si-Fi");
                    }}
                  >
                    Si-Fi
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Fantasy");
                    }}
                  >
                    Fantasy
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "Biography");
                    }}
                  >
                    Biography
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 hover:bg-blue-700 dark:text-white dark:hover:bg-white rounded-3xl text-slate-900 hover:text-gray-300 dark:hover:text-gray-900 bg-blue-200 dark:bg-gray-800 backdrop-blur-lg font-semibold text-lg text-center px-4">
                  <a
                    href="/genrepage"
                    onClick={() => {
                      localStorage.removeItem("genre");
                      localStorage.setItem("genre", "History");
                    }}
                  >
                    History
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-5">
          <h3 className="mb-3">Top Rated</h3>
          <div className="flex flex-col gap-1">
            {thisData.map((item, index) => (
              <RightPanelCards key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
