import React from "react";
import Navbar from "../Components/Navbar";
import RightPanel from "../Components/RightPanel";
import Hero from "../Components/Hero";
import Recommanded from "../Components/Recommanded";
import LatestMovie from "../Components/LatestMovie";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="dark:bg-black/20 dark:text-white bg-blue-50">
      <Navbar />
      <div className="flex flex-between">
        <div className="sticky mt-14 pt-2 w-fit h-auto hidden lg:flex">
          <RightPanel />
        </div>
        <div className="overflow-y-hidden overflow-x-auto md:max-w-screen-md lg:max-w-[1200px] mt-14 flex flex-col lg:px-2 gap-5 bg-sky-50 dark:bg-black/20">
          <Hero />
          <Recommanded />
          <LatestMovie />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
