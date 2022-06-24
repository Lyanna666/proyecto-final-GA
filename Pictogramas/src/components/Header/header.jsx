import './header.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import AppContext from '../../AppContext';

const Header = () => {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <header>
      <div>
        <picture>
          <img src="./Resources/Logo-black.png" alt={context.language.TITLE} />
        </picture>
        <nav>
          <li>
            <a href="#home">{context.language.HEADER_NAV_HOME}</a>
          </li>
          <li>
            <a href="#how-does-it-works">
              {context.language.HEADER_NAV_HOW_DOES_IT_WORKS}
            </a>
          </li>
          <li>
            <a href="#users">{context.language.HEADER_NAV_USERS}</a>
          </li>
        </nav>
      </div>
      <div>
        <ul className="menu-languages">
          <li>
            <button type="button">{context.language.HEADER_LANGUAGE}</button>
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
    </header>
  );
};

export default Header;
