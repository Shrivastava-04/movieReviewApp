import React, { useEffect, useState } from "react";
import Home from "./Home/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import MoviePage from "./Components/MoviePage";
import { Route, Routes } from "react-router-dom";
import GenrePage from "./Components/GenrePage";
import NavMovie from "./Components/NavMovie";
import { Toaster } from "react-hot-toast";
import SearchPage from "./Components/SearchPage";
// import customDataFetch from "./FetchData.js";
const App = () => {
  // const [myData, error] = customDataFetch("/search");

  // if (error) {
  //   return <h1>An error occurred while fetching data</h1>;
  // }

  return (
    <>
      <div className="overflow-x-hidden bg-blue-50 dark:bg-gray-900 dark:text-gray-200 tracking-tighter m-0 p-0 antialiased">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/genrepage" element={<GenrePage />} />
          <Route path="/movie" element={<NavMovie />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
      {/* <h1>this is {JSON.stringify(myData)}</h1> */}
    </>
  );
};

export default App;
