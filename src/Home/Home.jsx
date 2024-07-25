import React from "react";
import Navbar from "../Components/Navbar";
import RightPanel from "../Components/RightPanel";
import Hero from "../Components/Hero";
import Recommanded from "../Components/Recommanded";
import LatestMovie from "../Components/LatestMovie";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-between sticky">
        <div className="sticky mt-16 pt-2 w-fit h-auto">
          <RightPanel />
        </div>
        <div className=" overflow-y-hidden overflow-x-auto md:max-w-screen-md lg:max-w-[1200px] mt-14 flex flex-col px-2 gap-5">
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
