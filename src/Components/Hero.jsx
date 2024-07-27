import React from "react";
import data from "../../public/data.json";
import HeroCards from "./HeroCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const thisData = data.filter((item) => {
    return item.place === "heroImage";
  });
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
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
        {thisData.map((item) => (
          <HeroCards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
