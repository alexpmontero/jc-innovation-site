import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ItemTeams = () => {
  const [itemTeams, setItemTeams] = useState([]);

  useEffect(() => {
    const detailsItemTeams = [
      {
        id: 1,
        photo: require("../../assets/imgs/teams/jessica-becerra.png"),
        position: "CD - Commercial Director",
        name: "JESSICA A. BECERRA",
        email: "jessica@jc-innovation.com",
      },
      {
        id: 2,
        photo: require("../../assets/imgs/teams/omar-espinoza.png"),
        position: "CEO - Chief Executive Officer",
        name: "OMAR ESPINOSA",
        email: "omar@jc-innovation.com",
      },
      {
        id: 3,
        photo: require("../../assets/imgs/teams/ulises-martinez.png"),
        position: "AEL- Account Executive Leader",
        name: "ULISES MARTÍNEZ",
        email: "ulises@jc-innovation.com",
      },
      {
        id: 4,
        photo: require("../../assets/imgs/teams/kevin-marquez.png"),
        position: "PL-Production Leader",
        name: "KEVIN N. MÁRQUEZ",
        email: "kevin@jc-innovation.com",
      },
      {
        id: 5,
        photo: require("../../assets/imgs/teams/jesus-cuevas.png"),
        position: "CTO - Chief Technology Officer",
        name: "JESUS CUEVAS",
        email: "jesus@jc-innovation.com",
      },
    ];
    setItemTeams(detailsItemTeams);
  }, []);

  return (
    <div className="wrapper_contain_item_teams">
      <div className="row">
        {itemTeams.map((itemTeam) => (
          <div className="col-md-4 col-sm-6" key={itemTeam.id}>
            <div className="item_teams trans">
              <div className="text-center photo_teams">
                <img src={itemTeam.photo} alt="" />
              </div>
              <div className="text-center">
                <h6 className="c_morado fw_400">{itemTeam.position}</h6>
                <h4 className="fw_600 mb-3">{itemTeam.name}</h4>
                <p className="paragraph sm">
                  <a href={`mailto:${itemTeam.email}`}>
                    <span>
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <span>{itemTeam.email}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-4">
          <Link to="/" className="circle_link">
            <div className="w-100">
              <h3 className="mb-0">Bolsa de trabajo</h3>
              <p className="paragraph mb-0">Únete de nuestro equipo</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};