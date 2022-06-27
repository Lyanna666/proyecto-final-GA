import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/elements/customButton";

import "./aside.css";

const Aside = (props) => {
  return (
    <aside className="aside">
      <div className="aside__header">
        <picture>
          <img src="../../../public/Recourses/users.png" alt="user" />
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
          <li className="aside__item">
            <Link to="/dashboard" className="aside__link">
              Dashboard
            </Link>
          </li>
          <li className="aside__item">Avanzados</li>
          <li className="aside__item">Modo fácil</li>
        </ul>
      </div>
      <div className="aside__button">
        <CustomButton color="blue" name="Cerrar sesión" size="small" />
      </div>
    </aside>
  );
};

export default Aside;
