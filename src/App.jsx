import React from "react";
import Home from "./Home/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import MoviePage from "./Components/MoviePage";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-gray-900 text-gray-200 tracking-tighter antialiased">
        <Home />
        {/* <MoviePage /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </>
  );
};

export default App;
