import './hero.css';

import { useContext, useState, useEffect } from 'react';

import AppContext from '../../AppContext';
import CustomLink from '../elements/customLink';

const Hero = props => {
  const context = useContext(AppContext);

  // Estado para saber si el usuario ha iniciado sesion
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
    <>
      <div className="hero-div">
        <p> {context.language.NAME_APP}</p>
        <h1>{context.language.HERO_TITLE}</h1>
        {!user ? (
          <>
            <p>{context.language.HERO_SUBTITLE}</p>
            <CustomLink
              name={context.language.HERO_BUTTON}
              color="green"
              url="/login"
            />
            <div>
              <CustomLink
                name={context.language.HERO_NO_SIGNUP}
                color="blue"
                url="/login"
              />
            </div>
          </>
        ) : (
          <>
            {' '}
            <CustomLink
              name={context.language.DASHBOARD}
              color="blue"
              url="/dashboard"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Hero;
