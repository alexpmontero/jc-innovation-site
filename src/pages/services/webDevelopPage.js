import React, {useEffect} from "react";
import { Helmet } from "react-helmet";
import { CarouselServices } from "../../components/carouselServices";
import {BreakAttach} from "../../components/breakAttach"

import bgStreamingContent from "../../assets/imgs/bg_streaming_content.png";
import bgWebHead from '../../assets/imgs/servicios/web/bg_web_head.png'

export const WebDevelopPage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop()
  })
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
                    Creamos plataformas de sistemas de socios, facturación &
                    e-learnings, a la medida de tus necesidades
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
          <div className="container-lg">
            <div className="container_am text-center ">
              <h3 className="ttls ttl_section mb-2">
                El software personalizado que tu evento se merece
              </h3>
              <p className="paragraph lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                voluptate fuga tempora odio? Accusantium sapiente eaque, quis
                ducimus autem odit dicta.
              </p>
            </div>
            <div className="sec_slider_page_events">
              <CarouselServices isPage={'_webDevelop'}/>
            </div>
          </div>
        </div>

        <div className="contain_info__page ">
          <div className="container_am">
            <div className="text-center">
              <h3 className="ttls ttl_section mb-2">
                Somos especialistas en el desarrollo de software funcional y
                efectivo
              </h3>
              <p className="paragraph lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                eligendi? Laboriosam aut magni consectetur esse harum cum
                repellat officia est.
              </p>
            </div>
          </div>
          <div className="container-lg">
            <div className="col_info">
              <h3 className="fw_600 ">
                Creamos plataformas de sistemas de socios, facturación &
                e-learnings.
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
            </div>
          </div>
        </div>
        <BreakAttach inPage='marketing__page' />

      </section>
    </>
  );
};
