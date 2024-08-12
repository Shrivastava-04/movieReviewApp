import React from "react";
import HomeCards from "./HomeCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import datas from "../FetchData.js";
const Recommanded = () => {
  // const thisData = data.filter((item) => {
  //   return item.place === "recommand";
  // });

  const [thisData, error] = datas.customDataFetch("/search", "");

  if (error) {
    console.log(error.message);
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-10 py-2 min-w-full">
      <h2 className="text-xl font-semibold tracking-wide">Recommend</h2>
      <div className="">
        <Slider {...settings}>
          {thisData.map((item, index) => (
            <HomeCards key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recommanded;
