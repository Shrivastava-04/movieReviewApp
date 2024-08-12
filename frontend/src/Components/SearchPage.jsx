import React from "react";
import data from "../FetchData.js";
import HomeCards from "./HomeCards.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const SearchPage = () => {
  const param = localStorage.getItem("param");
  const [myData, error] = data.customDataFetch("/search", param);
  if (error) {
    console.log(error.message);
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-start justify-start mt-20 px-10">
          <div className="py-10 text-3xl font-semibold flex gap-4">
            <h1>Search result for :</h1>
            <h1 className="uppercase">{param}</h1>
          </div>
          <div className="flex flex-wrap">
            {myData.map((item) => (
              <HomeCards key={item.id} item={item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchPage;
