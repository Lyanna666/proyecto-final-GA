import './header.css';

import { useContext, React, useState } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';
import HeaderMenu from '../HeaderMenu/header-menu';

const Header = () => {
  const context = useContext(AppContext);

  // Se añade un evento que se ejecuta cuando el tamaño de la pantalla cambia
  window.addEventListener('resize', checkForWindowResize);

  function checkForWindowResize() {
    //Si el tamaño del navegador es menos de 1024 escondo el menu para que no quede abierto al hacer resize
    if (window.innerWidth > 1024) {
      setOpenedMenu(false);
    }
  }

  const [openedMenu, setOpenedMenu] = useState(false);

  //Creo un estado para saber si se está mostrando el menú o no.
  // En el evento onClick cambio ese estado a true o false en función de si se muestra el menú

  const onClickMenu = event => {
    if (openedMenu) {
      setOpenedMenu(false);
    } else {
      setOpenedMenu(true);
    }
  };

  return (
    <>
      <header id="header">
        <div>
          <picture>
            <img
              src="./Resources/Logo-black.png"
              alt={context.language.TITLE}
            />
          </picture>
          <nav>
            <ul>
              <li>
                <Link className="link" to={'/'}>
                  {context.language.HEADER_NAV_HOME}
                </Link>
              </li>
              <li>
                {/* Esto tampoco funciona */}
                {/* <Link className="link" to={'/#how-does-it-works'}>
              {context.language.HEADER_NAV_HOW_DOES_IT_WORKS}
            </Link> */}
                <a href="/#how-does-it-works">
                  {context.language.HEADER_NAV_HOW_DOES_IT_WORKS}
                </a>
              </li>
              <li>
                <a href="/#users">{context.language.HEADER_NAV_USERS}</a>
              </li>
            </ul>
            <div>
              <ul className="menu-languages">
                <li>
                  <button type="button">
                    {context.language.HEADER_LANGUAGE}
                  </button>
                  <ul>
                    <li>
                      <button
                        id={context.language.ES_ID}
                        type="button"
                        onClick={context.changeLanguage}
                      >
                        {context.language.ES}
                      </button>
                    </li>
                    <li>
                      <button
                        id={context.language.EN_ID}
                        type="button"
                        onClick={context.changeLanguage}
                      >
                        {context.language.EN}
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <Link className="link link-login" to={'/login'}>
                {context.language.HEADER_NAV_LOGIN}
              </Link>
            </div>
          </nav>
        </div>
        <button onClick={onClickMenu} className="btn-menu">
          Menu
        </button>
      </header>
      {/* Si el estado del menú es true lo muestro, si no, no */}
      {openedMenu ? <HeaderMenu /> : <></>}
    </>
  );
};

export default Header;
