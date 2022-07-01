import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { CarouselServices } from "../../components/carouselServices";
import { BreakAttach } from "../../components/breakAttach";

import bgStreamingContent from "../../assets/imgs/servicios/web/apps.jpg";
import bgWebHead from "../../assets/imgs/servicios/web/bg_web_head.png";

export const WebDevelopPage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
  });
  return (
    <>
      <Helmet>
        <title>Desarrollo de software</title>
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
                  <h3 className="ttls ttl_in_home mb-4">
                    Desarrollo de software
                  </h3>
                  <p className="paragraph lg">
                    <span className="fw_600 c_primary">
                      {" "}
                      Ingreso fácil y seguro.
                    </span>
                    <br /> Nuestras plataformas son amigables, intuitivas y
                    creadas para todo tipo de público
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <img src={bgWebHead} alt="Desarrollo web - JC Innovation" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contain__slide_page">
          <div className="container_am">
            <div className="container_am text-center ">
              <h3 className="ttls ttl_section mb-2">
                <span className="c_morado">El software personalizado</span> que
                tu evento se merece
              </h3>
              <p className="paragraph lg">
                Creamos plataformas de sistemas de socios, facturación &
                e-learnings, a la medida de tus necesidades
              </p>
            </div>
          </div>
          <div className="container-lg">
            <div className="sec_slider_page_events">
              <CarouselServices isPage={"_webDevelop"} />
            </div>
          </div>
        </div>

        <div className="contain_info__page ">
          <div className="container_am">
            <div className="text-center">
              <h3 className="ttls ttl_section mb-2">
                Somos especialistas en el desarrollo de{" "}
                <span className="c_morado">software funcional y efectivo</span>
              </h3>
              <p className="paragraph lg">
                Cubrimos todas las ramas que un proyecto necesita para
                destacarse de la multitud combinando estrategia, tecnología y
                creatividad con el objetivo de superar siempre las expectativas
                de nuestros clientes
              </p>
            </div>
          </div>
          <div className="container-lg">
            <div className="col_info">
              <h3 className="fw_600 mb-4">
                Creamos plataformas de{" "}
                <span className="c_morado">
                  sistemas de socios, facturación & e-learnings.
                </span>
              </h3>
              <p className="paragraph sm">
                Generamos comprobantes fiscales automatizados por internet o
                CFDI de manera rápida y eficaz.
              </p>
            </div>
            <div className="con_img_info">
              <img src={bgStreamingContent} alt="Streaming" />
            </div>
            <div className="col_info">
              <h3 className="fw_600 ">Desarrollo de App nativas</h3>
              <p className="paragraph sm">
                Desarrollamos aplicaciones apegadas a las nuevas tendencias y
                dirigidas a los principales sistemas operativos como iOS y
                Android.
              </p>
              <div>
                <p className="paragraph sm fw_500 mt-4">
                  <span>
                    <i className="c_primary fa-solid fa-plus"></i>
                  </span>{" "}
                  Registro fácil y rápido
                </p>
                <p className="paragraph sm fw_500">
                  <span>
                    <i className="c_primary fa-solid fa-plus"></i>
                  </span>{" "}
                  Login seguro
                </p>
                <p className="paragraph sm fw_500">
                  <span>
                    <i className="c_primary fa-solid fa-plus"></i>
                  </span>{" "}
                  Look & feel personalizable
                </p>
                <p className="paragraph sm fw_500">
                  <span>
                    <i className="c_primary fa-solid fa-plus"></i>
                  </span>{" "}
                  Reportes y analítica
                </p>
                <p className="paragraph sm fw_500">
                  <span>
                    <i className="c_primary fa-solid fa-plus"></i>
                  </span>{" "}
                  Donde quieras y cuando quieras
                </p>
              </div>
            </div>
          </div>
        </div>
        <BreakAttach inPage="marketing__page" />
      </section>
    </>
  );
};
