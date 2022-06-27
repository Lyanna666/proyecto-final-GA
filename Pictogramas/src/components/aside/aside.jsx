import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/elements/customButton";

import "./aside.css";

const Aside = (props) => {
  const icons = [
    {
      name: "Ajustes",
      src: "https://cdn-icons.flaticon.com/png/128/738/premium/738853.png?token=exp=1656321653~hmac=6778a8194033bb864739fc6ce4104504",
    },
    {
      name: "Ayuda",
      src: "https://cdn-icons-png.flaticon.com/512/682/682055.png",
    },
    {
      name: "Feedback",
      src: "https://cdn-icons.flaticon.com/png/512/2839/premium/2839172.png?token=exp=1656321625~hmac=1ea60c7abb5fdc0750de109dbe61ec41",
    },
  ];

  return (
    <aside className="aside">
      <div className="aside__header">
        <picture>
          <img src="./Resources/users.png" alt="user" />
        </picture>
        <h2 className="aside__title">
          <span className="aside__title-text">Nombre Apellido</span>
        </h2>
        <div>
          <span className="aside__title-text">Usuario</span>
        </div>
      </div>
      <div className="aside__body">
        <ul className="aside__list">
          <li className="aside__item">Dashboard</li>
          <li className="aside__item">Avanzados</li>
          <li className="aside__item">Modo fácil</li>
        </ul>
      </div>
      <div className="aside__body">
        <ul className="aside__list">
          {icons.map((icon, index) => (
            <>
              <li className="aside_item">
                <img src={icon.src} alt={icon.name} className="aside_tools" />
                {icon.name}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="aside__footer">
        <CustomButton
          className="aside__button"
          color="blue"
          name="Cerrar sesión"
          size="small"
          onClick={() => {
            props.logout();
          }}
        />
      </div>
    </aside>
  );
};

export default Aside;
