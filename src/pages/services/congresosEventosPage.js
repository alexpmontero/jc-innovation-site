import React, {useEffect} from "react";
import { Helmet } from "react-helmet";
import {CarouselServices} from '../../components/carouselServices'
import {BreakAttach} from '../../components/breakAttach'

import bgPresencial from "../../assets/imgs/bg_presencial.png";
import bgVirtual from "../../assets/imgs/bg_virtual.png";
import bgHibrido from "../../assets/imgs/bg_hibrido.png";

export const CongresosEventosPage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop()
  })
  return (
    <>
      <Helmet>
        <title>Organización de congresos y eventos</title>
      </Helmet>
      <section className="wrapper_congresos_eventos_page">
        <div className="contain_head_congresos_eventos">
          <div className="container-lg">
            <div className="sec_head container_am">
              <h6 className="ttls ttl_thin mb-4 c_primary">
                <span>servicios</span>
              </h6>
              <h3 className="ttls ttl_in_home mb-4">
                Organización de congresos y eventos
              </h3>
            </div>
          </div>
        </div>
        <div className="contain__congresos_eventos">
          <div className="container-lg">
            <div className="sec_slider_page_events">
            <CarouselServices isPage='_congresos_eventos' />
            </div>
          </div>
        </div>

        <div className="contain_info__congresos presencial">
          <div className="container-lg">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <div className="box_info__services">
                  <h6 className="ttls ttl_thin mb-3 simple">
                    <span>Eventos corporativos</span>
                  </h6>
                  <h3 className="ttls ttl_section mb-5 c_marin">
                    PRESENCIALES
                  </h3>
                  <p className="paragraph sm">
                    Somos expertos realizando cualquier tipo de evento; desde
                    eventos corporativos, conferencias y congresos, hasta
                    lanzamientos de nuevos productos.
                  </p>
                  <p className="paragraph sm cite mt-5">
                    Organizamos los mejores eventos y le damos la importancia
                    que se merece, no importa el tamaño de tu Congreso.
                  </p>
                  <p className="paragraph sm cite mt-5">
                    Buscamos la mejor opción en tarifas hoteleras, apoyos
                    gubernamentales y más, para asegurar el objetivo de tu
                    marcado.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box_bg_services ">
                  <img
                    src={bgPresencial}
                    alt="Congresos y Eventos Presenciales"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contain_info__congresos virtual">
          <div className="container-lg">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <div className="box_bg_services ">
                  <img src={bgVirtual} alt="Congresos y Eventos Virtuales" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="box_info__presencial">
                  <h6 className="ttls ttl_thin mb-3 simple">
                    <span>Eventos corporativos</span>
                  </h6>
                  <h3 className="ttls ttl_section mb-5 c_primary">VIRTUALES</h3>
                  <p className="paragraph sm">
                    Somos expertos realizando cualquier tipo de evento; desde
                    eventos corporativos, conferencias y congresos, hasta
                    lanzamientos de nuevos productos.
                  </p>
                  <p className="paragraph sm cite mt-5">
                    Organizamos los mejores eventos y le damos la importancia
                    que se merece, no importa el tamaño de tu Congreso.
                  </p>
                  <p className="paragraph sm  mt-5">
                    Buscamos la mejor opción en tarifas hoteleras, apoyos
                    gubernamentales y más, para asegurar el objetivo de tu
                    marcado.
                  </p>
                  <div className="mt-5">
                    <p className="paragraph sm">
                      <i className="fa-solid c_primary fa-plus"></i> Ponencias
                      en vivo
                    </p>
                    <p className="paragraph sm">
                      <i className="fa-solid c_primary fa-plus"></i>{" "}
                      Visualización de trabajos libres
                    </p>
                    <p className="paragraph sm">
                      <i className="fa-solid c_primary fa-plus"></i> Comunicarte
                      con los demás invitados y más.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contain_info__congresos scope">
          <div className="container-lg">
            <div className="text-center container_am">
              <h6 className="ttls ttl_thin mb-4">
                <span>Llega a más personas</span>
              </h6>
              <h3 className="ttls ttl_section mb-4">
                Visualiza el alcance de tu evento presencial y virtual
              </h3>
              <p className="paragraph lg">
                Dos experiencias personalizadas para cada tipo de asistente
              </p>
            </div>

            <div className="section_compare_events">
              <div className="container_am">
                <div className="row_compare_events">
                  <div className="box_details_events ttl__compare">
                    <h4 className="fw_500 c_morado ">Antes del evento</h4>
                  </div>
                  <div className="box_details_events">
                    <h3 className="fw_500 text-center ttl_service_compare">
                      Presencial
                    </h3>
                    <ul>
                      <li>
                        <p className="paragraph sm">Registro en sitio</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Hospedaje</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Apoyos gubernamentales</p>
                      </li>
                      <li>
                        <p className="paragraph sm">
                          Transportación área y terrestre
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="box_details_events">
                    <h3 className="fw_500 text-center ttl_service_compare">
                      Virtual
                    </h3>
                    <ul>
                      <li>
                        <p className="paragraph sm">Registro en línea</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Desarrollo web </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row_compare_events">
                  <div className="box_details_events ttl__compare">
                    <h4 className="fw_500 c_morado ">Durante del evento</h4>
                  </div>
                  <div className="box_details_events">
                    <ul>
                      <li>
                        <p className="paragraph sm">Gestión de eventos </p>
                      </li>
                      <li>
                        <p className="paragraph sm">Expo comercial</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Eventos sociales</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Tour de acompañantes </p>
                      </li>
                      <li>
                        <p className="paragraph sm">Personal bilingue</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Display e impresos</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Audio</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Iluminación</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Proyección</p>
                      </li>
                    </ul>
                  </div>
                  <div className="box_details_events">
                    <ul>
                      <li>
                        <p className="paragraph sm">Gestión de evento</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Streaming</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Expo Comercial</p>
                      </li>
                      <li>
                        <p className="paragraph sm">Personal bilingüe</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row_compare_events">
                  <div className="box_details_events ttl__compare">
                    <h4 className="fw_500 c_morado ">Después del evento</h4>
                  </div>
                  <div className="box_details_events">
                    <ul>
                      <li>
                        <p className="paragraph sm">Catering </p>
                      </li>
                    </ul>
                  </div>
                  <div className="box_details_events">
                    <p className="paragraph sm">-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contain_info__congresos virtual">
          <div className="container-lg">
            <div className="row justify-content-between">
              <div className="col-md-5">
                <div className="box_bg_services ">
                  <img src={bgHibrido} alt="Congresos y Eventos Híbrido" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="box_info__presencial mt-4">
                  <h6 className="ttls ttl_thin mb-3 simple">
                    <span>Eventos corporativos</span>
                  </h6>
                  <h3 className="ttls ttl_section mb-5 c_primary">HÍBRIDOS</h3>
                  <p className="paragraph sm">
                    Disfruta del evento en forma remota en un ambiente virtual
                    totalmente innovador y si tus invitados asisten de forma
                    presencial, contamos con tarifas preferenciales con
                    distintas aerolíneas a nivel internacional, transportación
                    terrestre incluida y organización de tours de acompañantes y
                    eventos sociales.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="paragraph sm cite mt-5">
                        Crea una experiencia igualmente gratificante para ambos
                        tipos de participantes.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="paragraph sm cite mt-5">
                        La ubicación física de tu evento dejará de ser una
                        limitante y llegarás a más personas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BreakAttach inPage='congresosEventos__page' />
      </section>
    </>
  );
};
