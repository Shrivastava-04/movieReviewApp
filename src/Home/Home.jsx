import React from "react";
import Navbar from "../Components/Navbar";
import RightPanel from "../Components/RightPanel";
import Hero from "../Components/Hero";
import Recommanded from "../Components/Recommanded";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-between">
        <div className="sticky right-0 w-fit">
          <RightPanel />
        </div>
        <div className=" overflow-y-hidden overflow-x-auto md:max-w-screen-md lg:max-w-[1200px] flex flex-col  ">
          <Hero />
          <Recommanded />
        </div>
      </div>
    </div>
  );
};

export default Home;
