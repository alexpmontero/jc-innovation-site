import React from "react";

export const BtnDownload = (props) => {

  return (
    <a
      className={` btn btn-brochure ${
        props.colors}`}
      download="JC Innovation - Brochure de Servicios"
      href="/JC-Innovation__ServiciosBrochure.pdf"
    >
      <i className="fa-solid fa-download"></i>
      <span>BROCHURE DE SERVICIOS</span>
    </a>
  );
};
