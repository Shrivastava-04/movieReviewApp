import React from "react";
import Home from "./Home/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import MoviePage from "./Components/MoviePage";
import { Route, Routes } from "react-router-dom";
import GenrePage from "./Components/GenrePage";
import NavMovie from "./Components/NavMovie";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-gray-900 text-gray-200 tracking-tighter antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/genrepage" element={<GenrePage />} />
          <Route path="/movie" element={<NavMovie />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
