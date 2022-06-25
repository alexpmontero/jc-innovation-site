import React from "react";
import './experienceData.scss'

export const ExperienceData = () => {
  return (
    <div className="wrapper_exp_data">
      <div className="container-lg">
        <div className="content_exp_data">
          <div className="item_exp_data">
            <span className="data_big">+15</span>
            <span className="data_text">Años de experiencia</span>
          </div>
          <div className="item_exp_data">
            <span className="data_big">+576</span>
            <span className="data_text">Clientes satisfechos</span>
          </div>
          <div className="item_exp_data">
            <span className="data_big">+2465</span>
            <span className="data_text">Proyectos exitosos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
