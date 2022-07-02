import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/elements/customButton';

import './aside.css';

const Aside = (props) => {
  const iconsHeader = [
    {
      name: 'home',
      src: './assets/icons/home.png',
      url: '/dashboard',
      alt: 'home',
    },

    {
      name: 'Avanzados',
      src: './assets/icons/favoritos.png',
      url: '/dashboard',
      alt: 'advance-mode',
    },
    {
      name: 'Modo fácil',
      src: './assets/icons/class.png',
      url: '/dashboard',
      alt: 'easy-mode',
    },
  ];

  const iconsFooter = [
    {
      name: 'Ajustes',
      src: './assets/icons/setting.png',
    },
    {
      name: 'Ayuda',
      src: './assets/icons/help-web-button.png',
    },
    {
      name: 'Feedback',
      src: './assets/icons/information-button.png',
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
                <span>
                  <img src={icon.src} alt={icon.name} className="aside_tools" />
                </span>
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
