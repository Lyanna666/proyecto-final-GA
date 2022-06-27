import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/elements/customButton";

import "./aside.css";

const Aside = (props) => {
  const iconsHeader = [
    {
      name: "home",
      src: "https://cdn-icons-png.flaticon.com/512/553/553416.png",
      url: "/dashboard",
      alt: "home",
    },

    {
      name: "Avanzados",
      src: "https://cdn-icons-png.flaticon.com/512/2107/2107957.png",
      url: "/dashboard",
      alt: "advance-mode",
    },
    {
      name: "Modo fácil",
      src: "https://cdn-icons.flaticon.com/png/512/869/premium/869432.png?token=exp=1656326981~hmac=c5337311c2218e5f39e3f720b682e866",
      url: "/dashboard",
      alt: "easy-mode",
    },
  ];

  const iconsFooter = [
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
          {iconsHeader.map((icon, index) => (
            <>
              <li className="aside__item">
                <span>
                  <img src={icon.src} alt={icon.alt} className="aside_tools" />
                </span>
                {icon.name}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="aside__body">
        <ul className="aside__list">
          {iconsFooter.map((icon, index) => (
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
