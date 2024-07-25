import React from "react";
import data from "../../public/data.json";
import HeroCards from "./HeroCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
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
          slidesToShow: 1,
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
    <div className="px-10 py-8 min-w-full">
      <Slider {...settings} className="">
        {data.map((item) => (
          <HeroCards
            name={item.name}
            image={item.img}
            duration={item.duration}
            year={item.year}
            genre={item.genre}
            key={item.id}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
