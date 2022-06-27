import React from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import bg_contact from "../assets/imgs/bg_contact.jpg";

export const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - JC Innovation</title>
      </Helmet>
      <section className="wrapper_page_contact">
        <div className="contain_head_contact">
          <div className="container-lg">
            <div className="sec_head container_am">
              <h6 className="ttls ttl_thin mb-4 c_primary">
                <span>CONTÁCTENOS</span>
              </h6>
              <h3 className="ttls ttl_section_med mb-4">
                ¿Tienes una idea para tu evento?
              </h3>
              <p className="paragraph lg">
                Si tiene alguna duda o comentario, ¡contáctanos! Estamos seguros
                que podemos ayudarte en los proyectos que tienes en mente.
              </p>
            </div>
          </div>
        </div>
        <div className="contain_bg_data_business">
          <div className="container-lg">
            <div className="row">
              <div className="col-md-4">
                <div className="item_contact_head">
                  <div>
                    <h1>
                      <i className="fa-regular fa-envelope"></i>
                    </h1>
                    <h5>
                      <a href="mailto:Jcinnovations@correo.com">
                        Jcinnovations@correo.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item_contact_head">
                  <div>
                    <h1>
                      <i className="fa-solid fa-phone"></i>
                    </h1>
                    <h5>
                      <a href="tel:+5562345558">(556) 234 5558</a> <br />
                      <a href="tel:+5589037597">(558) 903 7597</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item_contact_head">
                  <div>
                    <h1>
                      <i className="fa-solid fa-location-dot"></i>
                    </h1>
                    <h5>Estado de México, México</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contain_in_contact">
          <div className="container-lg">
            <div className="row">
              <div className="col-md-6">
                <div className="sec_form_contact">
                  <h3 className="ttls ttl_section ">
                    Únase a nosotros hoy y permítanos ayudarlo a poner en marcha
                    tu idea.
                  </h3>
                  <form>
                    <div className="mb-3">
                      <label for="name" className="form-label">
                        NOMBRE COMPLETO
                      </label>
                      <input type="name" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                      <label for="phone" className="form-label">
                        TELÉFONO
                      </label>
                      <input type="phone" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        CORREO ELECTRÓNICO
                      </label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        MENSAJE
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      ENVIAR MENSAJE <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sec_bg_contact">
                  <img src={bg_contact} alt="Contacto JC Innovation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
