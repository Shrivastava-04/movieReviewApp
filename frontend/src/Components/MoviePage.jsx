import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../FetchData.js";
// console.log(data);
const MoviePage = () => {
  const itemid = localStorage.getItem("id");
  const [myData, error, loading] = data.movieData("/title", `/${itemid}`);
  if (error) {
    console.log(error.message);
    return <div>Error fetching data: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const item = myData;
  console.log(myData);
  return (
    <>
      <Navbar />
      <div className="min-h-screen min-w-full ">
        <div className="flex flex-col lg:flex-row gap-20 pt-16 justify-around items-start">
          <div className="flex justify-center items-center p-5 order-1 lg:order-2">
            <img src={item.image} alt={item.title} className="w-80" />
          </div>
          <div className="p-5 flex flex-col items-start justify-start gap-10">
            <div className="flex flex-col gap-10 justify-center items-start">
              <h1 className="text-9xl">{item.title}</h1>
              <div className="flex gap-4 text-4xl">
                <p>{item.year}</p>
                <p>{item.contentType}</p>
                <p>{item.star}</p>
              </div>
              <p className="text-2xl">{item.runtime}</p>
            </div>
          </div>
        </div>
        <div>Review</div>
      </div>
      <Footer />
    </>
  );
};

export default MoviePage;
