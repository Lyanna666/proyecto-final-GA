import './header-menu.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';

const HeaderMenu = () => {
  const context = useContext(AppContext);

  // HEADER_NAV_HOME = 'Home';
  // export const HEADER_NAV_USERS = '¿A quién va dirigido?';
  // export const HEADER_NAV_HOW_DOES_IT_WORKS = '¿Cómo funciona?';
  // export const HEADER_NAV_LOGIN = 'Regístrate o \nInicia sesión';

  // export const HEADER_LANGUAGE

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
          id={context.language.EN_ID}
          type="button"
          onClick={context.changeLanguage}
        >
          {context.language.EN}
        </button>{' '}
        <button
          id={context.language.EN_ID}
          type="button"
          onClick={context.changeLanguage}
        >
          {context.language.EN}
        </button>
      </li>
      <li>
        <Link className="link link-login" to={'/login'}>
          {context.language.HEADER_NAV_LOGIN}
        </Link>
      </li>
    </menu>
  );
};

export default HeaderMenu;
