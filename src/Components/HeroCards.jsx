import React from "react";

const HeroCards = ({ name, image, duration, year, genre }) => {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 p-10">
      <a
        href="#"
        style={{ "--image-url": `url(${image})` }}
        className="bg-[image:var(--image-url)] bg-cover bg-top min-w-full h-96 rounded-[32px] flex items-end  "
      >
        <div className="flex justify-between min-w-full drop-shadow-2xl bg-opacity-5 bg-blend-saturation shadow-black tracking-wide">
          <div className="flex flex-col gap-4 pl-20 pb-10 items-start tracking-wide">
            <h2 className="text-3xl uppercase  drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold">
              {name}
            </h2>
            <div className="flex gap-8 items-center text-center text-lg ">
              <p>{year}</p>
              <p>{genre}</p>
              <p>{duration}</p>
            </div>
          </div>
          <div className="pr-20 py-10 flex gap-3 justify-end tracking-wide">
            <button className="bg-red-600 px-6 font-semibold py-1 bg-opacity-65 hover:bg-opacity-100 text-2xl rounded-xl text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Watch
            </button>
            <button className="bg-gray-400 px-2 bg-opacity-50 hover:bg-opacity-100 py-1 rounded-xl text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              +
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HeroCards;
