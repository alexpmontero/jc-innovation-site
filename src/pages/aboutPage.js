import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

import { ItemTeams } from "../components/itemTeams/itemTeams";

export const AboutPage = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
  });
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <Helmet>
        <title>Nosotros - JC Innovation</title>
      </Helmet>
      <section className="wrapper_page_about">
        <div className="contain_head_about">
          <div className="sec_head container_am">
            <h6 className="ttls ttl_thin mb-4 c_primary">
              <span>NUestra empresa</span>
            </h6>
            <h3 className="ttls ttl_section_med mb-4">
              Creamos experiencias y estrategias de comunicación únicas y
              memorables
            </h3>
            <p className="paragraph lg">
              Somos una empresa con más de 15 años de experiencia en tecnología
              e innovación para eventos y soluciones digitales
            </p>
            <div className="text-center">
              <Link to="/contacto" className="btn btn-primary mt-4">
                HABLA CON NUESTROS EXPERTOS
              </Link>
            </div>
          </div>
        </div>
        <div className="contain_bg_data_business">
          <div className="container-lg">
            <div className="sec_bg_gallery">
              <div className="item_dot_info anios">
                <div className="info__dot">
                  <span className="c_primary ico_plus">
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                  <span className="bignum">15</span>
                </div>
                <span className="label_info">Años de experiencia</span>
              </div>
              <div className="item_dot_info success">
                <div className="info__dot">
                  <span className="c_primary ico_plus">
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                  <span className="bignum">2465</span>
                </div>
                <span className="label_info">Proyectos exitosos</span>
              </div>
              <div className="item_dot_info happies">
                <div className="info__dot">
                  <span className="c_primary ico_plus">
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                  <span className="bignum">576</span>
                </div>
                <span className="label_info">Clientes satisfechos</span>
              </div>
              <Slider {...settings}>
                <div className="item__slide_about i"></div>
                <div className="item__slide_about ii"></div>
                <div className="item__slide_about iii"></div>
                <div className="item__slide_about iv"></div>
                <div className="item__slide_about v"></div>
                <div className="item__slide_about vi"></div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="contain_mis_vis">
          <div className="container-lg">
            <div className="row">
              <div className="col-md-6">
                <div className="box_mis_vis">
                  <h3 className="ttls ttl_section mb-4">Misión</h3>
                  <p className="paragraph sm">
                    Con innovación y sentido humano, dar a nuestros clientes los
                    mejores servicios digitales. Con calidad y valor,
                    convertirnos en un elemento esencial de experiencia, ya que
                    el compromiso con cada proyecto nos ha convertido en un
                    exponente líder en tecnología mundial.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box_mis_vis">
                  <h3 className="ttls ttl_section mb-4">Visión</h3>
                  <p className="paragraph sm">
                    Ser una pieza clave en el eslabón de la comunicación digital
                    entre profesionales, marcas, sociedades, asociaciones,
                    colegios y/o cualquier sector que desee acercarse a la
                    sociedad mediante el desarrollo de servicios y
                    productos.Pensando en grande, creando e innovando.
                  </p>
                </div>
              </div>
              <div className="col-md-12 text-center mt-3">
                <Link to="/contacto" className="btn btn-primary mt-4">
                  HABLA CON NUESTROS EXPERTOS
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="contain_teams_jc">
          <div className="container_am text-center">
            <h6 className="ttls ttl_thin mb-4">
              <span>Nuestros Expertos</span>
            </h6>
            <h3 className="ttls ttl_section_med mb-4">
              Conoce a nuestro gran equipo de expertos
            </h3>
            <p className="paragraph lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit seddte
              incididunt ut labore et dolore magol dolit metsor.
            </p>
          </div>
          <div className="container-lg">
            <ItemTeams />
          </div>
        </div>
      </section>
    </>
  );
};
