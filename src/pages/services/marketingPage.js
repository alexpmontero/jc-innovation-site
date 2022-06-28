import React from "react";
import { Helmet } from "react-helmet";
import { CarouselServices } from "../../components/carouselServices";
import { BreakAttach } from "../../components/breakAttach";
import bgStreaming from "../../assets/imgs/bg_streaming.png";
import bgStreamingContent from "../../assets/imgs/bg_streaming_content.png";

export const MarketingPage = () => {
  return (
    <>
      <Helmet>
        <title>Marketing y Diseño Gráfico</title>
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
                    Marketing y Diseño Gráfico
                  </h3>
                  <p className="paragraph lg">
                    Generamos estrategias en redes sociales para aumentar la
                    presencia digital de tu marca, evento o campaña
                  </p>
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
              <h3 className="ttls ttl_section mb-2">
                Desarrollamos marcas y{" "}
                <span className="c_morado"> contenido digital exclusivo</span>
              </h3>
              <p className="paragraph lg">
                Nos encargamos de llevar a cabo la producción correspondiente en
                materia de publicidad.
              </p>
            </div>
          </div>
          <div className="container-lg">
            <div className="sec_slider_page_events">
              <CarouselServices isPage="_marketing" />
            </div>
          </div>
        </div>

        <div className="contain_info__page ">
          <div className="container_am">
            <div className="text-center">
              <h3 className="ttls ttl_section mb-2">
                Hacemos que tu{" "}
                <span className="c_morado">marca sea negocio</span>.
              </h3>
              <p className="paragraph lg">
                Nos encargamos de llevar a cabo la producción correspondiente en
                materia de publicidad.
              </p>
            </div>
          </div>
          <div className="container-lg">
            <div className="col_info">
              <h3 className="fw_600 mb-4">Principales ventajas</h3>
              <p className="paragraph sm fw_300">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Generamos leads mejores calificados para tu equipo de ventas
                todos los meses.
              </p>
              <hr />
              <p className="paragraph sm fw_300">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Aumentamos la tasa de cierres de tu equipo de vendedores con la
                ayuda de software, datos y metodologías probadas para ello.
              </p>
              <hr />

              <p className="paragraph sm fw_300">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Aceleramos el tiempo de conversión de leads a ventas para
                asegurar la salud y futuro de tu empresa.
              </p>
            </div>
            <div className="con_img_info">
              <img src={bgStreamingContent} alt="Streaming" />
            </div>
            <div className="col_info">
              <h3 className="fw_600 mb-4 c_morado">Servicio dirigido</h3>
              <p className="paragraph sm fw_300">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Tus leads realizan una investigación exhaustiva antes de pensar
                en comprar tus productos o servicios.
              </p>
              <hr />

              <p className="paragraph sm fw_300">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Tu proceso de ventas es largo y complicado.
              </p>
              <hr />

              <p className="paragraph sm fw_300">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Quieres disminuir los costos por adquisición de clientes.
              </p>
              <hr />

              <p className="paragraph sm fw_300">
                <span>
                  <i className="c_primary fa-solid fa-plus"></i>
                </span>{" "}
                Necesitas generar un mayor número de leads calificados de forma
                constante para asegurar el funcionamiento y crecimiento de tu
                empresa.
              </p>
            </div>
          </div>
        </div>
        <BreakAttach inPage="marketing__page" />
      </section>
    </>
  );
};
