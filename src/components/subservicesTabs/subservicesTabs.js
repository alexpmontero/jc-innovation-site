import React, { useState, useEffect } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import "./subservicesTabs.scss";

export const SubservicesTabs = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [itemSubservices, setItemSubservices] = useState([]);
  
  useEffect(() => {
    const contentSubservices = [
      {
        id: 1,
        ico: "fa-solid fa-calendar-check",
        picture: require("../../assets/imgs/subservices/gestion.png"),
        nameSubservice: "Gestión de eventos",
        infoService:
          "Estamos orientados a satisfacer las necesidades específicas de tu marca, servicio, producto y/o evento de una manera única y creativa, cuidando cada detalle.",
        subTitle1: "Logistica completa",
        infoTitulo1:
          "Los eventos empresariales pueden ser un éxito o fracaso todo depende de la organización del mismo.",
        subTitle2: "Escenarios y stands",
        infoTitulo2:
          "Eventos para público externo que permite a las empresas mostrar y ofrecer sus productos y servicios.",
      },
      {
        id: 2,
        ico: "fa-solid fa-plane-up",
        picture: require("../../assets/imgs/subservices/transporte.png"),
        nameSubservice: "Transporte terrestre y aereo",
        infoService:
          "Realizamos la operación y logística de transporte para toda persona o empresa que requiera tarifas preferenciales a nivel nacional e internacional, con acceso inmediato y haciendo de su viaje, la mejor experiencia abordo. ",
        subTitle1: "Logística desde el inicio",
        infoTitulo1:
          "La transportación terrestre y aérea requiere una logística a través de una planificación de rutas eficientes y eficaces",
        // subTitle2: "t2 -lorem ipsun carted lois defeclt asoem calemana",
        // infoTitulo2:
        //   "vvv - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ",
      },
      {
        id: 3,
        ico: "fa-solid fa-square-h",
        picture: require("../../assets/imgs/subservices/hotel.png"),
        nameSubservice: "Hospedaje y Catering",
        infoService:
          "Tenemos relación directa con diversas cadenas hoteleras a nivel nacional, lo cual nos ha privilegiado en tener las mejores tarifas para cualquier rubro o sector.",
        subTitle1: "Comodidad y confort",
        infoTitulo1:
          "Hacemos que cada experiencia sea digna de memorar dentro de los mejores complejos hoteleros",
        // subTitle2: "t2 -lorem ipsun carted lois defeclt asoem calemana",
        // infoTitulo2:
        //   "vvv - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ",
      },
      {
        id: 4,
        ico: "fa-solid fa-landmark",
        picture: require("../../assets/imgs/subservices/gob.png"),
        nameSubservice: "Apoyo gubernamental",
        infoService:
          "Buscamos el apoyo mediante trámites legales dirigidas a dependencias y organismos que forman parte del gobierno del lugar de tu evento.",
        subTitle1: "Solicitudes y permisos",
        infoTitulo1:
          "Contamos con el equipo necesario para la gestión de solicitudes y permisos para congresos.",
        // subTitle2: "t2 -lorem ipsun carted lois defeclt asoem calemana",
        // infoTitulo2:
        //   "vvv - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ",
      },
      {
        id: 5,
        ico: "fa-solid fa-globe",
        picture: require("../../assets/imgs/subservices/bilingue.png"),
        nameSubservice: "Personal bilingüe",
        infoService:
          "Sabemos del mundo globalizado en el que vivimos, es por ello que contamos con el personal bilingüe capacitado para una atención amable, cordial y sobre todo humana para tus invitados internacionales.",
        subTitle1: "Lorem title Upsom",
        infoTitulo1:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, animi consectetur adipisicing!",
        // subTitle2: "t2 -lorem ipsun carted lois defeclt asoem calemana",
        // infoTitulo2:
        //   "vvv - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ",
      },
      {
        id: 6,
        ico: "fa-solid fa-video",
        picture: require("../../assets/imgs/subservices/produccion.png"),
        nameSubservice: "Producción y posproducción",
        infoService:
          "También realizamos videos corporativos, de marketing, publicidad, presentación de productos, animaciones para redes sociales y mucho más, todo esto lo podemos transmitir dentro de tu evento o de forma digital.",
        subTitle1: "¡Luces, cámara y acción!",
        infoTitulo1:
          "Contamos con un equipo de técnicos expertos y las mejores herramientas para una proyección en forma digital y durante tu evento presencial.",
        subTitle2:
          "¡Sorprende a tus invitados con audiovisuales atractivos en tu evento!",
        // infoTitulo2:
        //   "vvv - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ",
      },
      {
        id: 7,
        ico: "fa-solid fa-flag",
        picture: require("../../assets/imgs/subservices/tour.png"),
        nameSubservice: "Tour de acompañantes",
        infoService:
          "Nuestrios guías ofrecen una experiencia única al facilitar direcciones y comentarios sobre atracciones turísticas, culturales, históricas, y arqueológicas del lugar de tu evento.",
        subTitle1: "Comunicación total",
        infoTitulo1:
          "Trabajamos con un amplio personal con dominio de diversos idiomas que fungen como guías turísticos durante tu evento para los acompañantes de tus invitados.",
        // subTitle2:
        //   "¡Sorprende a tus invitados con audiovisuales atractivos en tu evento!",
        // infoTitulo2:
        //   "vvv - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ",
      },
    ];
    setItemSubservices(contentSubservices);
  }, []);

  return (
    <div className=" section_tabs">
      <Nav tabs>
        {itemSubservices.map((itemSubservice) => (
          <NavItem>
            <NavLink
              className={activeTab === `${itemSubservice.id}` ? "active" : ""}
              onClick={() => setActiveTab(`${itemSubservice.id}`)}
            >
              <div className="item_tabs_group">
                <span className="span_ico_tabs">
                  <i className={`${itemSubservice.ico}`}></i>
                </span>
                <h6>{itemSubservice.nameSubservice}</h6>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {itemSubservices.map((itemSubservice) => (
          <TabPane tabId={`${itemSubservice.id}`}>
            <div className="content_tabs_group">
              <div className="row">
                <div className="col-md-7 ">
                  <div className="box_info_tabs">
                    <h3 className="ttls ttl_section mb-4">
                      {itemSubservice.nameSubservice}
                    </h3>
                    <p className="paragraph lg">{itemSubservice.infoService}</p>
                  </div>
                  <div className="box_subinfo_tabs">
                    <div className="row">
                      <div className="col-md-6 mb-5">
                        <h3 className="mt-1 ttlsb">
                          {itemSubservice.subTitle1}
                        </h3>
                        <p className="paragraph sm">
                          {itemSubservice.infoTitulo1}
                        </p>
                      </div>
                      <div className="col-md-6 mb-5">
                        <h3 className="mt-1 ttlsb">
                          {itemSubservice.subTitle2}
                        </h3>
                        <p className="paragraph sm">
                          {itemSubservice.infoTitulo2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="box_infoimgs_tabs">
                    <img
                      src={itemSubservice.picture}
                      alt="Gestion de eventos"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};
