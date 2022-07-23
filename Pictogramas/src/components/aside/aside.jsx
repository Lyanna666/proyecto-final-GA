import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/elements/customButton';
import AppContext from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import './aside.css';

const Aside = props => {
  // Creamos constante context para coger el idioma selecionado por el usuario
  const context = useContext(AppContext);

  // Creamos constante navigate
  const navigate = useNavigate();

  // Función que elimina el usuario de localStorage y navega hacia home (/)
  const logout = () => {
    localStorage.removeItem('user');
    // window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  // Iconos y textos de aside
  const iconsHeader = [
    {
      name: context.language.ASIDE_HOME,
      src: './assets/icons/home.png',
      url: '/dashboard',
      alt: 'home',
    },
    {
      name: context.language.ASIDE_FAVO,
      src: './assets/icons/favoritos.png',
      url: '/dashboard',
      alt: 'advance-mode',
    },
    {
      name: context.language.ASIDE_EASY,
      src: './assets/icons/class.png',
      url: '/dashboard',
      alt: 'easy-mode',
    },
    {
      name: 'Crear rutina',
      src: './assets/icons/class.png',
      url: '/Routines',
      alt: 'easy-mode',
    },
  ];

  const iconsFooter = [
    {
      name: context.language.ASIDE_SETTINGS,
      src: './assets/icons/setting.png',
    },
    {
      name: context.language.ASIDE_HELP,
      src: './assets/icons/help-web-button.png',
    },
    {
      name: context.language.ASIDE_FEEDBACK,
      src: './assets/icons/information-button.png',
    },
  ];

  return (
    <aside className="aside">
      <div className="aside__header">
        <picture>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="user"
          />
        </picture>
        <h2 className="aside__title">
          {/* Si hay un usuario guardado en local storage mostramos el usuario guardado,
          si no, mostramos User */}
          <span className="aside__title-text">
            {localStorage.getItem('user')
              ? localStorage.getItem('user')
              : 'User'}
          </span>
        </h2>
      </div>
      <div className="aside__body">
        <ul className="aside__list">
          {/* Recorremos los arrays de iconos y por cada icono, hacemos un link  */}
          {iconsHeader.map((icon, index) => (
            <>
              <li className="aside__item" key={index}>
                <Link to={icon.url} className="aside__enlaces aside__item">
                  <span>
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="aside_tools"
                    />
                  </span>
                  {icon.name}
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="aside__body">
        <ul className="aside__list">
          {iconsFooter.map((icon, index) => (
            <>
              <li className="aside_item" key={index}>
                <div className="aside__item">
                  <span>
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="aside_tools"
                    />
                  </span>
                  {icon.name}
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="aside__footer">
        <CustomButton
          className="aside__button"
          color="blue"
          name={context.language.ASIDE_LOGOUT}
          size="all"
          onClick={logout}
        />
      </div>
    </aside>
  );
};

export default Aside;
