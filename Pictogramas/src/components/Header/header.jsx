import './header.css';

import { useContext, React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';
import HeaderMenu from '../HeaderMenu/header-menu';

const Header = () => {
  const context = useContext(AppContext);

  // Estado para saber si el usuario ha iniciado sesion
  const [user, setUser] = useState(null);
  // Creo un estado para saber si se está mostrando el menú o no.
  // En el evento onClick cambio ese estado a true o false en función de si se muestra el menú
  const [openedMenu, setOpenedMenu] = useState(false);

  // Se añade un evento que se ejecuta cuando el tamaño de la pantalla cambia
  window.addEventListener('resize', checkForWindowResize);

  function checkForWindowResize() {
    //Si el tamaño del navegador es menos de 1024 escondo el menu para que no quede abierto al hacer resize
    if (window.innerWidth > 1024) {
      setOpenedMenu(false);
    }
  }

  const updateUser = () => {
    // Si hay algo en local storage de user, actualizamos user
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    // window.localStorage.clear(); -> Esto elimina todo lo que haya en local storage
    updateUser();

    function storageEventHandler(event) {
      console.log('Usuario ha cambiado');
      if (event.key === 'user') {
        updateUser();
      }
    }

    // Añadimos el evento storageEventHandler, este evento se ejecuta cuando cambie el localstorage
    window.addEventListener('storage', storageEventHandler);
    return () => {
      window.removeEventListener('storage', storageEventHandler);
    };
  }, []);

  const onClickMenu = event => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <>
      <header id="header">
        <div>
          <picture>
            <img
              src="./Resources/Logo-black.png"
              alt={context.language.APP_NAME}
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
                <Link className="link" to={'/#how-does-it-works'}>
                  {context.language.HEADER_NAV_HOW_DOES_IT_WORKS}
                </Link>
              </li>
              <li>
                <Link className="link" to={'/#users'}>
                  {context.language.HEADER_NAV_USERS}
                </Link>
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
              {!user ? (
                <Link className="link link-login" to={'/login'}>
                  {context.language.HEADER_NAV_LOGIN}
                </Link>
              ) : (
                <Link className="link link-login" to={'/dashboard'}>
                  {`${context.language.DASHBOARD} \n${user}`}
                </Link>
              )}
            </div>
          </nav>
        </div>
        <button onClick={onClickMenu} className="btn-menu">
          ☰
        </button>
      </header>
      {/* Si el estado del menú es true lo muestro, si no, no */}
      {openedMenu ? <HeaderMenu /> : <></>}
    </>
  );
};

export default Header;
