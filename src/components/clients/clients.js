import React from "react";
import Slider from "react-slick";

export const Clients = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  
  };

  return (
    <div className="wrapper_clients_logos">
      <Slider {...settings}>
        <div className="box_logo_clients">
          <img
            src={require("../../assets/imgs/clients/cliente01.png")}
            alt=""
          />

          <img
            src={require("../../assets/imgs/clients/cliente02.png")}
            alt=""
          />

          <img
            src={require("../../assets/imgs/clients/cliente03.png")}
            alt=""
          />

          <img
            src={require("../../assets/imgs/clients/cliente04.png")}
            alt=""
          />

          <img
            src={require("../../assets/imgs/clients/cliente05.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente06.png")}
            alt=""
          />
            <img
            src={require("../../assets/imgs/clients/cliente25.png")}
            alt=""
          />
        </div>
        <div className="box_logo_clients">
          <img
            src={require("../../assets/imgs/clients/cliente07.png")}
            alt=""
          />
           <img
            src={require("../../assets/imgs/clients/cliente26.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente08.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente09.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente10.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente11.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente12.png")}
            alt=""
          />
        </div>
        <div className="box_logo_clients">
          <img
            src={require("../../assets/imgs/clients/cliente13.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente14.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente15.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente16.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente17.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente18.png")}
            alt=""
          />
        </div>
        <div className="box_logo_clients">
          <img
            src={require("../../assets/imgs/clients/cliente19.png")}
            alt=""
          />

           
           <img
            src={require("../../assets/imgs/clients/cliente27.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente20.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente21.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente22.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente23.png")}
            alt=""
          />
          <img
            src={require("../../assets/imgs/clients/cliente24.png")}
            alt=""
          />
        </div>
       
      </Slider>
    </div>
  );
};
