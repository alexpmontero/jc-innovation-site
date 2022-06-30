import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BtnDownload } from "../btnDownload";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import LogoOficial from "../../assets/imgs/logo-jc.png";

import "./header.scss";

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY;
      setScrollTop(scrollY);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll);
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [openMenu, setOpenMenu] = useState("");

  
  const handlerMenu = () => {
    setOpenMenu(openMenu === "" ? "open__menu" : "");
  };

  const handlSubMenu = () => {
    setOpenMenu(openMenu === "" ? "open__menu" : "");
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`wrapper_header trans ${
        scrollTop > 0 ? "header_change" : ""
      } `}
    >
      <div className="header_top">
        <div className="container-lg">
          <div className="sec_top">
            <div className="box_info_business">
              <i className="fa-solid fa-phone pt-1"></i>
              <a href="tel:+5562345558">(556) 234 5558 /</a>
              <a href="tel:+5589037597">(558) 903 7597</a>
            </div>
            <div className="box_social_networks">
              <span>Síguenos en:</span>
              <a
                target="_blank"
                title="Facebook"
                rel="nofollow noopener noreferrer"
                href="https://www.facebook.com/jcinnovationoficial"
              >
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a
                target="_blank"
                title="Instagram"
                rel="nofollow noopener noreferrer"
                href="https://www.instagram.com/jcinnovationoficial/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                target="_blank"
                title="Twitter"
                rel="nofollow noopener noreferrer"
                href="https://twitter.com/jc_innovation"
              >
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a
                target="_blank"
                title="Linkedin"
                rel="nofollow noopener noreferrer"
                href="https://www.linkedin.com/company/jc-innovation/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                target="_blank"
                title="Youtube"
                rel="nofollow noopener noreferrer"
                href="https://www.youtube.com/channel/UCx0MHsRF0UzEW14iUOS4vOQ"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="header_botton">
          <div className="sec_brand">
            <Link to="/">
              <img
                className="logo_brand"
                src={LogoOficial}
                alt="JC Innovations"
              />
            </Link>
          </div>
          <div className="sec_options">
            <nav className={`nav_options_item ${openMenu}`}>
              <ul className="ul_nav_master">
                <li className="li_nav_master" onClick={handlerMenu}>
                  <Link className="item_link" to="/">
                    INICIO
                  </Link>
                </li>
                <li className="li_nav_master" onClick={handlerMenu}>
                  <Link className="item_link" to="/nosotros">
                    NOSOTROS
                  </Link>
                </li>
                <li className="li_nav_master" >
                  <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle
                      caret
                      tag="span"
                      data-toggle="dropdown"
                      aria-expanded={dropdownOpen}
                      className="item_link"
                    >
                      SERVICIOS
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className="header_subnav">
                        <div className="container-lg">
                          <div className="content_subheader">
                            <span className="box_go_back" onClick={toggle}>
                              <i className="fa-solid fa-arrow-left"></i> Volver
                            </span>
                            <div className="row_subheader">
                              <div className="sec_info_subheader">
                                <h4 className="mb-3">JC Innovation</h4>
                                <p className="paragraph">
                                  Damos a cada proyecto su propia identidad con
                                  la ayuda de expertos en el área, creando la
                                  mejor combinación en creatividad y tecnología.
                                </p>
                                <div className="mt-5">
                                  <Link
                                    to="/contacto"
                                    className="fw_500 c_morado"
                                    onClick={handlSubMenu}
                                  >
                                    <h5>Contácta un asesor_</h5>
                                  </Link>
                                </div>
                              </div>
                              <nav className="sec_nav_subheader">
                                <Link
                                  to="/organizacion-congresos-eventos"
                                  className="box_item_link_service"
                                  onClick={handlSubMenu}
                                >
                                  <h6 className="name_link_head ">
                                    Organización de congresos Y eventos
                                  </h6>
                                  <hr />
                                  <div>
                                    <p className="paragraph">
                                      Creamos soluciones digitales para eventos
                                    </p>
                                    <ul>
                                      <li className="text-center">
                                        <i className="fa-solid fa-people-group"></i>{" "}
                                        <span>Presenciales</span>
                                      </li>
                                      <li className="text-center">
                                        <i className="fa-solid fa-users-rectangle"></i>{" "}
                                        <span>Virtuales</span>
                                      </li>
                                      <li className="text-center">
                                        <i className="fa-solid fa-chalkboard-user"></i>{" "}
                                        <span>Híbridos</span>
                                      </li>
                                    </ul>
                                  </div>
                                </Link>
                                <Link
                                  to="/streaming"
                                  className="box_item_link_service"
                                  onClick={handlSubMenu}
                                >
                                  <h6 className="name_link_head ">Streaming</h6>
                                  <hr />
                                  <div>
                                    <p className="paragraph">
                                      Hacemos transmisiones en vivo para tu
                                      evento virtual o presencial
                                    </p>
                                  </div>
                                </Link>
                                <Link
                                  to="/desarrollo-software"
                                  className="box_item_link_service"
                                  onClick={handlSubMenu}
                                >
                                  <h6 className="name_link_head ">
                                    Desarrollo de software
                                  </h6>
                                  <hr />
                                  <div>
                                    <p className="paragraph">
                                      Creamos plataformas de sistemas de socios,
                                      facturación & e-learnings, a la medida de
                                      tus necesidades
                                    </p>
                                  </div>
                                </Link>
                                <Link
                                  to="/marketing-y-diseno"
                                  className="box_item_link_service"
                                  onClick={handlSubMenu}
                                >
                                  <h6 className="name_link_head ">
                                    Marketing y Diseño Gráfico
                                  </h6>
                                  <hr />
                                  <div>
                                    <p className="paragraph">
                                      Generamos estrategias en redes sociales
                                      para aumentar la presencia digital de tu
                                      marca, evento o campaña
                                    </p>
                                  </div>
                                </Link>
                                <Link
                                  to="/podcast"
                                  className="box_item_link_service"
                                  onClick={handlSubMenu}
                                >
                                  <h6 className="name_link_head ">Podcast</h6>
                                  <hr />
                                  <div>
                                    <p className="paragraph">
                                      Producimos nuevos productos auditivos e
                                      inmersivos con altos estándares de calidad
                                    </p>
                                  </div>
                                </Link>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <div className="dwld_box">
                  <BtnDownload />
                </div>
              </ul>
            </nav>
            <div className="box_options_btns">
              <BtnDownload />
              <Link to="/contacto" className="btn btn-primary ">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span>¡HABLEMOS!</span>
              </Link>
              <span className="btn_menu" onClick={handlerMenu}>
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
