import React from "react";
import Navbar from "./Navbar";
import data from "../../public/data.json";
import HomeCards from "./HomeCards";
import Footer from "./Footer";

const NavMovie = () => {
  const name = localStorage.getItem("navname");
  const items = data.filter((a) => {
    return a.type === name;
  });
  return (
    <div className="min-w-full min-h-screen">
      <Navbar />
      <div className="min-w-full fixed top-16  bg-black/20 backdrop-blur-lg rounded-lg">
        <h1 className="text-8xl uppercase pl-20 ">{name}</h1>
      </div>
      <div className="overflow-x-auto overflow-y-hidden flex flex-col items-center justify-center gap-10 pt-52 pb-10 pl-10">
        <div className="flex flex-wrap items-center justify-start px-5">
          {items.map((item, index) => (
            <HomeCards key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NavMovie;
