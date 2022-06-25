import React from "react";
import { ExperienceData } from "../components/experienceData/experienceData";
import { CarouselHome } from "../components/carouselHome/carouselHome";
import { SubservicesTabs } from "../components/subservicesTabs/subservicesTabs";
import { UpcomingEvents } from "../components/upcomingEvents/upcomingEvents";

export const HomePage = () => {
  return (
    <section className="wrapper_home_page">
      <div
        className="wrapper_home"
        // style={containerStyle}
      >
        <div className="container-lg">
          <div className="sec_content_home">
            <div className="content_info">
              <div className="box_info_home">
                <h3 className="ttls">Vive la mejor experiencia en</h3>
                <h1 className="ttls ttl_in_home fw_600">
                  Congresos, Convenciones y Eventos corporativos
                </h1>
              </div>
              <div
                className="video-ply-btn"
                // onClick={toggle}
              >
                <button
                  className=" popup-video mfp-iframe"
                  // data-bs-toggle="modal"
                  // data-bs-target="#videoModal"
                  // onclick="playVideo()"
                >
                  <i className="bi bi-play-fill"></i>
                </button>
                <p className="paragraph lg fw_400 mb-0">
                  Descubre lo que podemos hacer por ti con nuestros servicios.
                </p>
              </div>
            </div>
            <div className="content_info_secundary">
              <p className="item_dot_info paragraph sm">
                <i className="bi bi-check-circle"></i>
                <span>Eventos presenciales, híbridos y virtuales</span>
              </p>
              <p className="item_dot_info paragraph sm">
                <i className="bi bi-check-circle"></i>
                <span>Soluciones digitales</span>
              </p>
              <p className="item_dot_info paragraph sm">
                <i className="bi bi-check-circle"></i>
                <span>Producción visual</span>
              </p>
              <p className="item_dot_info paragraph sm">
                <i className="bi bi-check-circle"></i>
                <span>Transmisiones en vivo</span>
              </p>
              <p className="item_dot_info paragraph sm mb-0 ">
                <i className="bi bi-check-circle"></i>{" "}
                <span>Desarrollo web</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper_home_break">
        <div className="container-lg">
          <div className="home_break i"></div>
          <div className="home_break ii"></div>
          <div className="home_break iii"></div>
        </div>
      </div>

      <ExperienceData />

      <div className="wrapper_why_jci">
        <div className="container-lg">
          <div className="content_why_jci">
            <div className="contain__section">
              <h6 className="ttls ttl_thin mb-4">
                <span>¿Por qué elegir JC-Innovation?</span>
              </h6>
              <h3 className="ttls ttl_section mb-4">
                Contamos con toda la experiencia para poner en marcha tu idea
              </h3>
              <p className="paragraph lg">
                Somos una empresa con más de 15 años de experiencia en
                tecnología e innovación para eventos y soluciones digitales
              </p>
            </div>
            <CarouselHome />
          </div>
        </div>
      </div>

      <div className="wrapper_subservices">
        <div className="content_subservices">
          <div className="container-lg">
            <div className="sec_titular">
              <div className="row align-items-center drawer_mnsj">
                <div className="col-md-8">
                  <div className="">
                    <h3 className="ttls ttl_section mb-4">
                      ¡Quédate tranquilo! <br />
                      Nosotros nos encargamos de todo
                    </h3>
                    <p className="paragraph lg m-0">
                      El costo operativo disminuye al trabajar con un solo
                      proveedor.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box_options_btns">
                    <button type="button" className="btn btn-brochure-color">
                      <i className="bi bi-download"></i>
                      <span>BROCHUR DE SERVICIOS</span>
                    </button>
                    <button type="button" className="btn btn-primary ">
                      <span>
                        <i className="bi bi-telephone-fill"></i>
                      </span>
                      <span>¡HABLEMOS!</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content_subservices_tabs">
          <div className="container-lg ">
            <SubservicesTabs />
          </div>
        </div>
      </div>

      <div className="wrapper_clients text-center ">
        <div className="container-lg">
          <div className="content_clients">
            <div>
              <h6 className="ttls ttl_thin mb-4">
                <span>aliados y amigos</span>
              </h6>
              <h3 className="ttls ttl_section mb-4">
                Ellos han confiado en nosotros
              </h3>
              <p className="paragraph lg">
                En estos años hemos creado lazos con nuestros clientes, a
                quienes consideramos parte de nuestra familia .
              </p>
            </div>
            <div>
              <h1>logos</h1>
            </div>
          </div>
        </div>
      </div>

      <UpcomingEvents />
    </section>
  );
};
