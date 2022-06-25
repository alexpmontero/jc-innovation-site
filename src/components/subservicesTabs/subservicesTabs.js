import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import "./subservicesTabs.scss";

export const SubservicesTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className=" section_tabs">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
          >
            <div className="item_tabs_group">
              <span className="span_ico_tabs">
                <i className="fa-solid fa-calendar-check"></i>
              </span>
              <h6>Gestión de eventos</h6>
            </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => setActiveTab("2")}
          >
            <div className="item_tabs_group">
              <span className="span_ico_tabs">
                <i className="fa-solid fa-plane-up"></i>
              </span>
              <h6>Transporte terrestre y aereo</h6>
            </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "3" ? "active" : ""}
            onClick={() => setActiveTab("3")}
          >
            <div className="item_tabs_group">
              <span className="span_ico_tabs">
                <i className="fa-solid fa-square-h"></i>
              </span>
              <h6>Hospedaje y Catering</h6>
            </div>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab === "4" ? "active" : ""}
            onClick={() => setActiveTab("4")}
          >
            <div className="item_tabs_group">
              <span className="span_ico_tabs">
                <i className="fa-solid fa-landmark"></i>
              </span>
              <h6>Apoyo gubernamental</h6>
            </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "5" ? "active" : ""}
            onClick={() => setActiveTab("5")}
          >
            <div className="item_tabs_group">
              <span className="span_ico_tabs">
                <i className="fa-solid fa-globe"></i>
              </span>
              <h6>Personal bilingüe</h6>
            </div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "6" ? "active" : ""}
            onClick={() => setActiveTab("6")}
          >
            <div className="item_tabs_group">
              <span className="span_ico_tabs">
                <i className="fa-solid fa-video"></i>
              </span>
              <h6>Producción y posproducción</h6>
            </div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="content_tabs_group">
            <div className="row">
              <div className="col-md-7">
                <div className="box_info_tabs">
                  <h3 className="ttls ttl_section mb-4">Gestión de eventos</h3>
                  <p className="paragraph lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.quidem, itaque facilis exercitationem,
                  </p>
                </div>
                <div className="box_subinfo_tabs">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <i className="fa-solid fa-user-gear"></i>
                      </div>
                      <h3 className="mt-1">Logistica completa</h3>
                      <p className="paragraph sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus temporibus pariatur cum et assumenda nisi nemo
                        molestiae, tempore quibusdam ut quaerat libero nam saepe
                        dolorem harum minima quo adipisci omnis.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <i className="fa-solid fa-tv"></i>
                      </div>
                      <h3 className="mt-1">Escenarios y stands</h3>
                      <p className="paragraph sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus temporibus pariatur cum et assumenda nisi nemo
                        molestiae, tempore quibusdam ut quaerat libero nam saepe
                        dolorem harum minima quo adipisci omnis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="box_infoimgs_tabs">
                  <img
                    src="assets/imgs/subservices/gestion.png"
                    alt="Gestion de eventos"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div>
            bbb Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quia iure itaque maiores nihil fuga, velit iusto harum qui deleniti
            veniam numquam amet aliquid asperiores facere tenetur? Molestias,
            voluptatum enim.
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div>
            ccc Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quia iure itaque maiores nihil fuga, velit iusto harum qui deleniti
            veniam numquam amet aliquid asperiores facere tenetur? Molestias,
            voluptatum enim.
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div>
            ccc Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quia iure itaque maiores nihil fuga, velit iusto harum qui deleniti
            veniam numquam amet aliquid asperiores facere tenetur? Molestias,
            voluptatum enim.
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div>
            ccc Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quia iure itaque maiores nihil fuga, velit iusto harum qui deleniti
            veniam numquam amet aliquid asperiores facere tenetur? Molestias,
            voluptatum enim.
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div>
            ccc Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quia iure itaque maiores nihil fuga, velit iusto harum qui deleniti
            veniam numquam amet aliquid asperiores facere tenetur? Molestias,
            voluptatum enim.
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};
