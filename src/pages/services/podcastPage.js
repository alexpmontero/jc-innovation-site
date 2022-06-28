import React from "react";
import { Helmet } from "react-helmet";
import { CarouselServices } from "../../components/carouselServices";
import {BreakAttach} from '../../components/breakAttach'

import bgStreaming from "../../assets/imgs/bg_streaming.png";
import iconsPodcast from "../../assets/imgs/podcast.png";

import icoPdcst01 from "../../assets/imgs/iconos/ico-pdcst-01.png";
import icoPdcst02 from "../../assets/imgs/iconos/ico-pdcst-02.png";
import icoPdcst03 from "../../assets/imgs/iconos/ico-pdcst-03.png";

export const PodcastPage = () => {
  return (
    <>
      <Helmet>
        <title>Podcast</title>
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
                  <h3 className="ttls ttl_in_home mb-4">Podcast</h3>
                  <p className="paragraph lg">
                    Producimos nuevos productos auditivos e inmersivos que se
                    apegan a los más altos estándares de calidad para ser
                    transmitidos en las principales plataformas de podcast.
                  </p>
                  <div className="text-center boximgspods">
                    <img src={iconsPodcast} alt="Podcast en JC Innovation" />
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
          <div className="container_am">
            <div className="text-center ">
              <h3 className="ttls ttl_section mb-4">
                Tú estás aquí para contar tu historia;{" "}
                <span className="c_morado">
                  nosotros, para ayudarte con todo lo demás
                </span>
              </h3>
              <p className="paragraph lg">
                Explota al máximo tu contenido, en tus propios términos
              </p>
            </div>
          </div>
          <div className="container-lg">
            <div className="sec_slider_page_events">
              <CarouselServices isPage="_podcast" />
            </div>
          </div>
        </div>
        <div className="contain_info__page ">
          <div className="container-lg">
            <div className="row gx-5">
              <div className="col-md-4 mb-3">
                <div>
                  <div className="icoinpods">
                    <img src={icoPdcst01} alt="Podcast JC Innovation" />
                  </div>
                  <h2 className="ttls mb-4 fw_700">
                    <span className="c_morado"> Tu estudio</span> de podcast te
                    espera
                  </h2>
                  <hr />
                  <p className="paragraph sm fw_300">
                    <strong className="fw_500 ">
                      Contamos con cabinas profesionales
                    </strong>{" "}
                    para una grabación precencial totalmente profesional, o
                    podemos gestionar su grabación desde vía remota sin
                    sacrificar calidad auditiva.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div>
                  <div className="icoinpods">
                    <img src={icoPdcst02} alt="Podcast JC Innovation" />
                  </div>
                  <h2 className="ttls mb-4 fw_700">
                    Te asesoramos y ayudamos{" "}
                    <span className="c_morado">a producir tu Podcast</span>
                  </h2>
                  <hr />
                  <div>
                    <p className="paragraph sm fw_600 c_morado">
                      <span>
                        <i className="c_primary fa-solid fa-plus"></i>
                      </span>{" "}
                      Guión
                    </p>
                    <p className="paragraph sm fw_600 c_morado">
                      <span>
                        <i className="c_primary fa-solid fa-plus"></i>
                      </span>{" "}
                      Ejecución
                    </p>
                    <p className="paragraph sm fw_600 c_morado">
                      <span>
                        <i className="c_primary fa-solid fa-plus"></i>
                      </span>{" "}
                      Producción
                    </p>
                    <p className="paragraph sm fw_600 c_morado">
                      <span>
                        <i className="c_primary fa-solid fa-plus"></i>
                      </span>{" "}
                      Grabación
                    </p>
                    <p className="paragraph sm fw_600 c_morado">
                      <span>
                        <i className="c_primary fa-solid fa-plus"></i>
                      </span>{" "}
                      Post-producción
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div>
                  <div className="icoinpods">
                    <img src={icoPdcst03} alt="Podcast JC Innovation" />
                  </div>
                  <h2 className=" mb-4 fw_700">
                    <span className="c_morado">En la era digital</span>, el
                    contenido es el Rey
                  </h2>
                  <hr />
                  <p className="paragraph sm fw_300">
                    Esta es una área muy importante dentro del consumo de
                    contenido digital que comienza a cobrar cada vez más
                    relevancia en México. Funciona como herramienta clave de
                    comunicación para promoción, difusión, engagement o con
                    fines corporativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreakAttach inPage='podcast__page' />
      </section>
    </>
  );
};
