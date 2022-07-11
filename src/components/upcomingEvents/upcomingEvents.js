import React from "react";
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./upcomingEvents.scss";

import itemUpcoming01 from "../../assets/imgs/upcoming-events/prox1.jpg";
import itemUpcoming02 from "../../assets/imgs/upcoming-events/prox2.jpg";
import itemUpcoming03 from "../../assets/imgs/upcoming-events/prox3.jpg";
import itemUpcoming04 from "../../assets/imgs/upcoming-events/prox4.jpg";
import itemUpcoming05 from "../../assets/imgs/upcoming-events/prox5.png";
import itemUpcoming06 from "../../assets/imgs/upcoming-events/prox6.png";
import itemUpcoming07 from "../../assets/imgs/upcoming-events/prox7.png";
import itemUpcoming08 from "../../assets/imgs/upcoming-events/prox8.png";
import itemUpcoming09 from "../../assets/imgs/upcoming-events/prox9.png";

export const UpcomingEvents = () => {
  return (
    <div className="wrapper_upcoming text-center ">
      <div className="container-lg">
        <div className="content_upcoming">
          <div className="box_info__upcoming">
            <h6 className="ttls ttl_thin mb-4">
              <span>Calendario</span>
            </h6>
            <h3 className="ttls ttl_section mb-4">Próximos eventos</h3>
            <p className="paragraph lg">
              Conoce los próximos eventos que estamos organizando
            </p>
          </div>
          <Carousel
            plugins={[
              "centered",
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
                  interval: 1250,
                },
              },
            ]}
            breakpoints={{
              480: {
                plugins: [
                  "centered",
                  "infinite",
                  "arrows",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                  {
                    resolve: autoplayPlugin,
                    options: {
                      interval: 1250,
                    },
                  },
                ],
              },
              1200: {
                plugins: [
                  "centered",
                  "infinite",
                  "arrows",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                  {
                    resolve: autoplayPlugin,
                    options: {
                      interval: 1250,
                    },
                  },
                ],
              },
            }}
            animationSpeed={500}
          >
            <div className="item_upcoming">
              <img src={itemUpcoming01} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming02} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming03} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming04} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming05} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming06} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming07} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming08} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
            <div className="item_upcoming">
              <img src={itemUpcoming09} alt="PRÓXIMOS EVENTOS JC INNOVATION" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
