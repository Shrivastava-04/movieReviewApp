import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../../public/data.json";
const MoviePage = () => {
  const itemid = localStorage.getItem("id");
  const item = data.find((item) => item.id === itemid);
  return (
    <div className="min-h-screen min-w-full ">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-20 pt-16 justify-around items-start">
        <div className="flex justify-center items-center p-5 order-1 lg:order-2">
          <img src={item.img} alt={item.name} className="w-80" />
        </div>
        <div className="p-5 flex flex-col items-start justify-start gap-10">
          <div className="flex flex-col gap-10 justify-center items-start">
            <h1 className="text-9xl">{item.name}</h1>
            <div className="flex gap-4 text-4xl">
              <p>{item.year}</p>
              <p>{item.genre}</p>
              <p>{item.star}</p>
            </div>
            <p className="text-2xl">{item.duration}</p>
          </div>
        </div>
      </div>
      <div>Review</div>
      <Footer />
    </div>
  );
};

export default MoviePage;
