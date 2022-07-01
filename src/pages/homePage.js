import React, { useEffect, useState } from "react";
import { Modal } from "reactstrap";
import { Helmet } from "react-helmet";
import { ExperienceData } from "../components/experienceData/experienceData";
import { CarouselHome } from "../components/carouselHome/carouselHome";
import { SubservicesTabs } from "../components/subservicesTabs/subservicesTabs";
import { UpcomingEvents } from "../components/upcomingEvents/upcomingEvents";
import { BtnDownload } from "../components/btnDownload";
import { BreakAttach } from "../components/breakAttach";

import promoVdo from "../assets/video/promovideo.mp4";

export const HomePage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Helmet>
        <title>JC Innovation</title>
      </Helmet>
      <section className="wrapper_home_page">
        <div className="wrapper_home">
          <div className="container-lg">
            <div className="sec_content_home">
              <div className="content_info">
                <div className="box_info_home">
                  <h3 className="ttls">Vive la mejor experiencia en</h3>
                  <h1 className="ttls ttl_in_home fw_600">
                    Congresos, Convenciones y Eventos corporativos
                  </h1>
                </div>
                <div className="video-ply-btn" onClick={toggle}>
                  <button
                    className=" popup-video mfp-iframe"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                    onclick="playVideo()"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                  <p className="paragraph lg fw_400 mb-0">
                    Descubre lo que podemos hacer por ti con nuestros servicios.
                  </p>
                </div>
              </div>
              <div className="content_info_secundary">
                <p className="item_dot_info paragraph sm">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Eventos presenciales, híbridos y virtuales</span>
                </p>
                <p className="item_dot_info paragraph sm">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Soluciones digitales</span>
                </p>
                <p className="item_dot_info paragraph sm">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Producción visual</span>
                </p>
                <p className="item_dot_info paragraph sm">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Transmisiones en vivo</span>
                </p>
                <p className="item_dot_info paragraph sm mb-0 ">
                  <i className="fa-regular fa-circle-check"></i>
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
                    <div className="pdr_2 mb-3">
                      <h3 className="ttls ttl_section mb-3">
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
                    <div className="box_options_btns mb-3">
                      <BtnDownload colors="in-color" />
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

        <BreakAttach inPage="home__page" />

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
                  quienes consideramos parte de nuestra familia.
                </p>
              </div>
              <div>
                <h1>logos</h1>
              </div>
            </div>
          </div>
        </div>

        <UpcomingEvents />
        
        <Modal isOpen={modal} toggle={toggle} className="wrapper_modal_home">
          <div className="sec_video_pride">
            <span className="btnclose" onClick={toggle}>
              <i className="fa-solid fa-xmark"></i>
            </span>
            <video controls preload autoPlay>
              <source src={promoVdo} type="video/mp4" />
            </video>
          </div>
        </Modal>
      </section>
    </>
  );
};
