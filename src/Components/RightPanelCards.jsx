import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const RightPanelCards = ({ image, name, year, genre, star, link }) => {
  return (
    <>
      <a href={link}>
        <div className="relative flex justify-evenly px-4 items-center bg-slate-800 bg-opacity-10 rounded-3xl">
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
      </a>
    </>
  );
};

export default RightPanelCards;
