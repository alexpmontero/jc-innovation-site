import React from "react";
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./upcomingEvents.scss";

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
                  interval: 2000,
                },
              },
            ]}
          >
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox1.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox2.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox3.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox4.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox5.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox6.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox7.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox8.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
            <div className="item_upcoming">
              <img
                src="assets/imgs/upcoming-events/prox9.png"
                alt="PRÓXIMOS EVENTOS JC INNOVATION"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
