import React from "react";
import Slider from "react-slick";

export const CarouselServices = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        },
      },
    ],
  };
  return (
    <div className={`carousel_in_services ${props.isPage}`}>
      <Slider {...settings}>
        <div className="item__slide_bg">
          <div className="box_bg bg__i"></div>
        </div>
        <div className="item__slide_bg">
          <div className="box_bg bg__ii"></div>
        </div>
        <div className="item__slide_bg">
          <div className="box_bg bg__iii"></div>
        </div>
        <div className="item__slide_bg">
          <div className="box_bg bg__iv"></div>
        </div>
        <div className="item__slide_bg">
          <div className="box_bg bg__v"></div>
        </div>
        <div className="item__slide_bg">
          <div className="box_bg bg__vi"></div>
        </div>
        <div className="item__slide_bg">
          <div className="box_bg bg__vii"></div>
        </div>
      </Slider>
    </div>
  );
};
