import React from "react";
import HeroCards from "./HeroCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import datas from "../FetchData.js";
const Hero = () => {
  // const thisData = data.filter((item) => {
  //   return item.place === "heroImage";
  // });
  const [thisData, error] = datas.customDataFetch("/search", "game");
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log(thisData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-6 lg:px-10 md:py-6 lg:py-8 min-w-full">
      <Slider {...settings}>
        {thisData.map((item, index) => (
          <HeroCards item={item} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
