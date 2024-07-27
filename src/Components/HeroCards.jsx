import React from "react";
import MoviePage from "./MoviePage.jsx";

const HeroCards = ({ item }) => {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 p-5 md:p-8 lg:p-10">
      <a
        href="#"
        style={{ "--image-url": `url(${item.img})` }}
        className="bg-[image:var(--image-url)] bg-cover bg-top min-w-full h-96 rounded-[32px] flex items-end  "
      >
        <div className="flex justify-center lg:justify-between items-center min-w-full drop-shadow-2xl bg-opacity-5 bg-blend-saturation shadow-black tracking-wide bg-black/50 lg:bg-transparent py-5">
          <div className="flex flex-col md:gap-4 lg:pl-20 lg:pb-10 items-center lg:items-start tracking-wide">
            <h2 className="text-2xl md:text-xl lg:text-3xl uppercase drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
              {item.name}
            </h2>
            <div className="flex gap-2 md:gap-4 lg:gap-8 items-center text-center text-lg ">
              <p>{item.year}</p>
              <p>{item.genre}</p>
              <p>{item.duration}</p>
            </div>
          </div>
          <div className="pr-20 pb-10 hidden lg:flex gap-3 justify-end tracking-wide">
            <button className="bg-red-600 px-6 font-semibold py-1 bg-opacity-65 hover:bg-opacity-100 text-2xl rounded-xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              Watch
            </button>
            <button className="bg-gray-400 px-2 bg-opacity-50 hover:bg-opacity-100 py-1 rounded-xl text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              +
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HeroCards;
