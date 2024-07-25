import React from "react";
import data from "../../public/data.json";
import RightPanelCards from "./RightPanelCards";
const RightPanel = () => {
  return (
    <>
      <div className=" bg-gray-700 py-2 text-start">
        <h3 className="px-5 mb-2">Genre</h3>
        <div className="flex flex-col items-center gap-6 mb-3">
          <div className="flex px-10 gap-10">
            <div>
              <ul className="flex flex-col gap-2">
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">Action</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center ">
                  <a href="#">Comedy</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">Thriller</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">Drama</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">Crime</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">RomCom</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">Si-Fi</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">Fantasy</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">Biography</a>
                </li>
                <li className="bg-slate-900 px-6 py-1 rounded-3xl text-center">
                  <a href="#">History</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-5">
          <h3 className="mb-3">Top Rated</h3>
          <div className="flex flex-col gap-2">
            {data.map((item, index) => (
              <RightPanelCards
                key={index}
                image={item.img}
                name={item.name}
                year={item.year}
                genre={item.genre}
                star={item.star}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
