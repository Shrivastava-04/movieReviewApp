import React from "react";
import { FaStar } from "react-icons/fa";

const HomeCards = ({ image, name, year, star, link }) => {
  return (
    <a
      href={link}
      style={{ "--image-url": `url(${image})` }}
      className="bg-[image:var(--image-url)] bg-cover bg-top w-36 h-44 mx-4 my-4 rounded-3xl flex items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <div className="flex justify-between px-4 items-center text-xs rounded-3xl py-1 min-w-full bg-gray-800 bg-opacity-70 tracking-wide">
        <div>
          <h2>{name}</h2>
          <p>{year}</p>
        </div>
        <div className="border-l-2 border-l-slate-400 flex items-center gap-1  pl-4">
          <FaStar />
          <p>{star}</p>
        </div>
      </div>
    </a>
  );
};

export default HomeCards;
