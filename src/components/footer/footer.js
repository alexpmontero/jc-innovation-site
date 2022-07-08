import React from "react";
import { Link } from "react-router-dom";
import { BtnDownload } from "../btnDownload";

import "./footer.scss";

import LogoOficial from "../../assets/imgs/logo-jc.png";
import LogoIso from "../../assets/imgs/ISO.png";

export const Footer = () => {
  const anioActual = () => {
    var fecha = new Date().getFullYear();
    return fecha;
  };
  return (
    <footer className="wrapper_footer">
      <div className="drawer_mnsj">
        <div className="container-lg">
          <div className="row">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3">
                <div className="mnsj_info">
                  <h3 className="ttls ttl_section mb-4">
                    ¿Tienes una idea para tu evento?
                  </h3>
                  <p className="paragraph lg m-0">
                    No te preocupes, nosotros nos encargamos de todo
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="box_options_btns">
                  <BtnDownload colors="in-color" />

                  <Link to="/contacto" className="btn btn-primary ">
                    <span>
                      <i className="fa-solid fa-phone pt-1"></i>
                    </span>
                    <span>¡HABLEMOS!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer_footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 info_foot_msnj">
              <div className="">
                <div className="lgo">
                  <img src={LogoOficial} alt="JC Innovation" />
                </div>
                <h2 className="mt-1">
                Seamos parte del mismo equipo y reunamos lo imposible
                </h2>
                <div className="sec_links_socials">
                  <div className="socials">
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
                    {/* <a
                      target="_blank"
                      title="Twitter"
                      rel="nofollow noopener noreferrer"
                      href="https://twitter.com/jc_innovation"
                    >
                      <i className="fa-brands fa-twitter-square"></i>
                    </a> */}
                    <a
                      target="_blank"
                      title="Linkedin"
                      rel="nofollow noopener noreferrer"
                      href="https://www.linkedin.com/company/jc-innovation/"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    {/* <a
                      target="_blank"
                      title="Youtube"
                      rel="nofollow noopener noreferrer"
                      href="https://www.youtube.com/channel/UCx0MHsRF0UzEW14iUOS4vOQ"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a> */}
                  </div>
                  <img className="img_iso" src={LogoIso} alt="ISO Certified" />
                </div>
              </div>
            </div>
            <div className="col-md-6 info_foot_contact">
              <h2 className="mt-1">Contácta un asesor</h2>
              <div className="">
                <p className="paragraph sm mbtm">
                  Estamos seguros que podemos ayudarte en los proyectos que
                  tienes en mente.
                </p>
                <hr />
                <p className="box_p_foot paragraph sm">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div>
                    <a href="tel:+5562345558">(556) 234 5558 / </a>
                    <a href="tel:+5589037597">(558) 903 7597</a>
                  </div>
                </p>
                <hr />
                <p className="box_p_foot paragraph sm">
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <a href="mailto:contacto@jc-innovation.com">
                    contacto@jc-innovation.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer_foot_pie">
        <div className="container-lg">
          <div className="text-center">
            <small>
              Copyright ©{anioActual()} JC-Innovation. Todos los Derechos
              Reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
