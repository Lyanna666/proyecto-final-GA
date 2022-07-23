import './header-menu.css';

import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';

const HeaderMenu = () => {
  const context = useContext(AppContext);
  const [user, setUser] = useState(null);

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

  return (
    <menu className="header-menu">
      <li>
        <a href="/#how-does-it-works">
          {context.language.HEADER_NAV_HOW_DOES_IT_WORKS}
        </a>
      </li>
      <li>
        <a href="/#users">{context.language.HEADER_NAV_USERS}</a>{' '}
      </li>
      <li>
        <button
          id={context.language.ES_ID}
          type="button"
          onClick={context.changeLanguage}
        >
          {context.language.ES}
        </button>
        <button
          id={context.language.EN_ID}
          type="button"
          onClick={context.changeLanguage}
        >
          {context.language.EN}
        </button>
      </li>
      <li>
        {!user ? (
          <Link className="link link-login" to={'/login'}>
            {context.language.HEADER_NAV_LOGIN}
          </Link>
        ) : (
          <Link className="link link-login" to={'/dashboard'}>
            {context.language.DASHBOARD}
          </Link>
        )}
      </li>
    </menu>
  );
};

export default HeaderMenu;
