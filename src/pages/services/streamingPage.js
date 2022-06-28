import React from "react";
import { Helmet } from "react-helmet";
import { CarouselServices } from "../../components/carouselServices";
import {BreakAttach} from '../../components/breakAttach'

import bgStreaming from "../../assets/imgs/bg_streaming.png";
import bgStreamingContent from "../../assets/imgs/bg_streaming_content.png";

export const StreamingPage = () => {
  return (
    <>
      <Helmet>
        <title>Streaming</title>
      </Helmet>
      <section className="wrapper__page_services">
        <div className="contain__head_page">
          <div className="container-lg">
            <div className="row">
              <div className="col-md-6">
                <div className="sec_head container_am">
                  <h6 className="ttls ttl_thin mb-4 c_primary">
                    <span>servicios</span>
                  </h6>
                  <h3 className="ttls ttl_in_home mb-4">Streaming</h3>
                  <p className="paragraph lg">
                    Somos una empresa con más de 15 años de experiencia en
                    tecnología e innovación para eventos y soluciones digitales
                  </p>
                  <div className="mt-5 text-start">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="paragraph sm">
                          <i className="fa-solid c_primary fa-plus"></i>{" "}
                          Ponencias en vivo
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="paragraph sm">
                          <i className="fa-solid c_primary fa-plus"></i>{" "}
                          Visualización de trabajos libres
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="paragraph sm">
                          <i className="fa-solid c_primary fa-plus"></i>{" "}
                          Comunicarte con los demás invitados y más.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <img src={bgStreaming} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contain__slide_page">
          <div className="container-lg">
            <div className="text-center ">
              <h3 className="ttls ttl_section mb-2">
                Fácil, atractivo y todo en tiempo real
              </h3>
              <p className="paragraph lg">
                ¡Hacemos transmisiones en vivo para tu evento virtual o
                presencial!
              </p>
            </div>
            <div className="sec_slider_page_events">
              <CarouselServices isPage="_streaming" />
            </div>
          </div>
        </div>

        <div className="contain_info__page ">
          <div className="container_am">
            <div className="text-center">
              <h3 className="ttls ttl_section mb-2">
                Nos adaptamos a tu evento
              </h3>
              <p className="paragraph lg">
                Transmitimos eventos físicos como congresos, ferias y paneles;
                así como webinars y eventos digitales.
              </p>
            </div>
          </div>
          <div className="container-lg">
            <div className="col_info">
              <h3 className="fw_600 ">Todo lo que tu transmisión necesita</h3>
              <p className="paragraph sm">
                Relaciónate en un ambiente digital totalmente inmersivo y
                realiza actividades como en un congreso presencial.
              </p>
            </div>
            <div className="con_img_info">
              <img src={bgStreamingContent} alt="Streaming" />
            </div>
            <div className="col_info">
              <p className="paragraph sm fw_500">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Mensajes en vivo
              </p>
              <p className="paragraph sm fw_500">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                100% personalizable
              </p>
              <p className="paragraph sm fw_500">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Duración indefinida
              </p>
              <p className="paragraph sm fw_500">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Todos los dispositivos
              </p>
              <p className="paragraph sm fw_500">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Interacción en vivo
              </p>
            </div>
          </div>
        </div>
        <BreakAttach inPage='streaming__page' />

      </section>
    </>
  );
};
