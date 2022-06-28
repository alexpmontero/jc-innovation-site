import React from "react";
import "./wrapperHeadPage.scss";

export const WraperHeadPage = () => {
  return (
    <div className="wrapper_head_page">
      <div className="container-lg">
        <div className="sec_head container_am">
          <h6 className="ttls ttl_thin mb-4 c_primary">
            <span>servicios</span>
          </h6>
          <h3 className="ttls ttl_in_home mb-4">
            Organización de congresos y eventos
          </h3>
          {/* <p className="paragraph lg">
          Si tiene alguna duda o comentario, ¡contáctanos! Estamos seguros
          que podemos ayudarte en los proyectos que tienes en mente.
        </p> */}
        </div>
      </div>
    </div>
  );
};
