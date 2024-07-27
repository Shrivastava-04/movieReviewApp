import React, { useState } from "react";
import data from "../../public/data.json";
import RightPanelCards from "./RightPanelCards";
const RightPanel = () => {
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount(count + 1);
  };
  const thisData = data.filter((item) => {
    // handle();
    return item.id < 7;
  });
  return (
    <>
      <div className="hidden bg-gray-700 py-3 text-start lg:flex flex-col">
        <h3 className="px-5 mb-2">Genre</h3>
        <div className="flex flex-col items-center gap-6 mb-3">
          <div className="flex px-10 gap-10">
            <div>
              <ul className="flex flex-col gap-3">
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
                <li className="hover:bg-white hover:text-black font-semibold text-md bg-slate-900 px-6 py-1 rounded-3xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 cursor-pointer">
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
