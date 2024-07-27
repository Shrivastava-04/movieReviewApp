import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../../public/data.json";
const MoviePage = ({ item }) => {
  //   console.log(item);
  const thisData = data[0];
  return (
    <div className="min-h-screen min-w-full ">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-20 pt-16 justify-between items-center">
        <div className="flex justify-center items-center p-5 order-1 lg:order-2">
          <img src={thisData.img} alt="" />
        </div>
        <div className="p-5 flex flex-col items-start justify-start gap-10">
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl">{thisData.name}</h1>
            <div className="flex gap-4 text-2xl">
              <p>{thisData.year}</p>
              <p>{thisData.genre}</p>
              <p>{thisData.star}</p>
            </div>
            <p className="text-2xl">{thisData.duration}</p>
          </div>
          <div>review</div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MoviePage;
