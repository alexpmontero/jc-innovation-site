import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BtnDownload } from "../btnDownload";

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
              <i className="bi bi-telephone-fill"></i>
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
            <img
              className="logo_brand"
              src={LogoOficial}
              alt="JC Innovations"
            />
          </div>
          <div className="sec_options">
            <nav className="nav_options_item">
              <ul>
                <li>
                  <Link className="item_link" to="/">
                    INICIO
                  </Link>
                </li>
                <li>
                  <Link className="item_link" to="/nosotros">
                    NOSOTROS
                  </Link>
                </li>
                <li>
                  <span className="item_link link_dropdown">
                    <span>SERVICIOS</span>
                    <span className="ml-2">
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </span>
                </li>
              </ul>
            </nav>
            <div className="box_options_btns">
              <BtnDownload/>

              <Link to="/contacto" className="btn btn-primary ">
                <span>
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <span>¡HABLEMOS!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
