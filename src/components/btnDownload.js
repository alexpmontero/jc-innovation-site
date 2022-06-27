import React from "react";

export const BtnDownload = (props) => {

  return (
    <a
      className={` btn btn-brochure ${
        props.colors}`}
      download="JC Innovation - Brochure de Servicios"
      href="/servicios-jc-innovation.pdf"
    >
      <i className="fa-solid fa-download"></i>
      <span>BROCHUR DE SERVICIOS</span>
    </a>
  );
};
