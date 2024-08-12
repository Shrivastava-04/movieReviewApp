import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const RightPanelCards = ({ item }) => {
  var types = "";
  if (item.type === "tvSeries") types = "Tv Show";
  if (item.type === "movie") types = "Movie";
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
          <div className="relative flex justify-evenly rounded-3xl py-2 items-center dark:bg-gray-800 bg-gray-500 bg-opacity-5">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 rounded-xl"
            />
            <div className="flex flex-col items-start justify-center">
              <h2>{item.title}</h2>
              <div className="flex gap-4">
                <p>{item.year}</p>
                <p>{types}</p>
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
