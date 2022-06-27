import React from "react";

import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./carouselHome.scss";


import ico01 from "../../assets/imgs/iconos/ico01.png";
import ico02 from "../../assets/imgs/iconos/ico02.png";
import ico03 from "../../assets/imgs/iconos/ico03.png";
import ico04 from "../../assets/imgs/iconos/ico04.png";
// import ico05 from "../../assets/imgs/iconos/ico05.png";

export const CarouselHome = () => {
  return (
    <div className="wrapper_carousel_home ">
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 3000,
            },
          },
        ]}
        animationSpeed={1000}
      >
        <div className="box_item_datainfo bg">
          <img src={ico01} alt="Innovación" />
          <h3 className="mt-3">Innovación</h3>
          <p className="paragraph sm">
            Exigimos lo mejor, gracias a un gran equipo de expertos creativos
            que día a día se mantienen a la vanguardia.
          </p>
        </div>
        <div className="box_item_datainfo ">
          <img src={ico02} alt="Productividad" />
          <h3 className="mt-3">Productividad</h3>
          <p className="paragraph sm">
            Trabajamos con pasión y disfrutamos las responsabilidades que nos
            evocan, siempre en tiempo y forma.
          </p>
        </div>
        <div className="box_item_datainfo bg">
          <img src={ico03} alt="Comunicación" />
          <h3 className="mt-3">Comunicación</h3>
          <p className="paragraph sm">
            Nos apegamos a los valores y principios que rigen a nuestros
            clientes, siempre de una manera amigable y respetuosa.
          </p>
        </div>
        <div className="box_item_datainfo ">
          <img src={ico04} alt="Calidad" />
          <h3 className="mt-3">Calidad</h3>
          <p className="paragraph sm">
            La satisfacción de nuestros clientes es importante, por eso
            mantenemos una estandarización para que cada producto o servicio que
            ofrecemos se único.
          </p>
        </div>
      </Carousel>
    </div>
  );
}
