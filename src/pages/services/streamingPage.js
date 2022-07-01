import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { CarouselServices } from "../../components/carouselServices";
import { BreakAttach } from "../../components/breakAttach";

import bgStreamingHead from "../../assets/imgs/servicios/streaming/bg_streaming_head.png";
import bgStreamingContent from "../../assets/imgs/servicios/streaming/str05.jpg";

export const StreamingPage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
  });
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
                    Nos ajustamos a todos tus eventos, nuestra experiencia nos
                    ha dado las herramientas para ofrecer streaming para eventos
                    de música, eventos empresariales y eventos corporativos.
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
                  <img src={bgStreamingHead} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contain__slide_page">
          <div className="container_am">
            <div className="text-center ">
              <h3 className="ttls ttl_section mb-2">
                Fácil, atractivo y{" "}
                <span className="c_morado"> todo en tiempo real</span>
              </h3>
              <p className="paragraph lg">
                Nuestra solución es completa y ofrecemos toda nuestra
                experiencia y equipo de producción para lograr transmitir tu
                evento a la mayor cantidad de usuarios con la mejor calidad.
              </p>
            </div>
          </div>
          <div className="container-lg">
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

              <h4 className="mt-5">
                <span className="c_morado">Tú haces tus contenidos,</span>{" "}
                nosotros todo lo demás
              </h4>
            </div>
            <div className="con_img_info">
              <img src={bgStreamingContent} alt="Streaming" />
            </div>
            <div className="col_info">
              <p className="paragraph sm mb-5">
                <span className="c_morado fw_600">
                  {" "}
                  Cada transmisión que haces pone sobre la mesa la reputación de
                  tu marca,
                </span>{" "}
                el compromiso con tu audiencia y los resultados de tu compañía.
              </p>
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
        <BreakAttach inPage="streaming__page" />
      </section>
    </>
  );
};
