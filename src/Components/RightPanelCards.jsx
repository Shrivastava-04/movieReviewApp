import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const RightPanelCards = ({ image, name, year, genre, star, link }) => {
  return (
    <>
      <a href={link}>
        <div className="px-4 py-2 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300">
          <div className="relative flex justify-evenly rounded-3xl py-2 items-center bg-black bg-opacity-5">
            <img src={image} alt={name} className="w-16 rounded-xl" />
            <div className="flex flex-col items-start justify-center">
              <h2>{name}</h2>
              <div className="flex gap-4">
                <p>{year}</p>
                <p>{genre}</p>
              </div>
              <p>{star} </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default RightPanelCards;
