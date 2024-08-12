import React from "react";
import data from "../../public/data.json";
import HomeCards from "./HomeCards";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const GenrePage = () => {
  const genre = localStorage.getItem("genre");
  if (!genre) {
    return <div>No genre selected</div>;
  }
  const thisData = data.filter((item) => {
    return item.genre === genre;
  });
  return (
    <>
      <Navbar />
      <div className="min-h-screen min-w-full mt-16">
        <div className="dark:bg-black/20 bg-blue-50">
          <h1 className="text-8xl uppercase pl-20 ">{genre}</h1>
        </div>
        <div className="overflow-x-auto overflow-y-hidden flex flex-col items-center justify-center gap-10  pb-10 pl-10">
          <div className="flex flex-wrap items-center justify-start px-5">
            {thisData.map((item, index) => (
              <HomeCards key={index} item={item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GenrePage;
