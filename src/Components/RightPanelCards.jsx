import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const RightPanelCards = ({ item }) => {
  return (
    <>
      <a
        onClick={() => {
          if (localStorage.getItem("id")) localStorage.removeItem("id");
          localStorage.setItem("id", item.id);
        }}
        href="/moviepage"
      >
        <div className="px-4 py-2 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300">
          <div className="relative flex justify-evenly rounded-3xl py-2 items-center bg-black bg-opacity-5">
            <img src={item.img} alt={item.name} className="w-16 rounded-xl" />
            <div className="flex flex-col items-start justify-center">
              <h2>{item.name}</h2>
              <div className="flex gap-4">
                <p>{item.year}</p>
                <p>{item.genre}</p>
              </div>
              <p>{item.tar} </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default RightPanelCards;
