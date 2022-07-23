import './hero.css';

import { useContext, useState, useEffect } from 'react';

import AppContext from '../../AppContext';
import CustomLink from '../elements/customLink';
import CustomButton from '../elements/customButton';
import { useNavigate } from 'react-router-dom';
import Error from '../Error/error';

const Hero = props => {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  // Estado para saber si el usuario ha iniciado sesion
  const [user, setUser] = useState(null);

  const [error, setError] = useState(false);

  const updateUser = () => {
    // Si hay algo en local storage de user, actualizamos user
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    } else {
      setUser(null);
    }
  };

  const onClickContinue = event => {
    //Esto es temporal
    // localStorage.setItem('user', 'user');
    // window.location.href = '/dashboard#';
    // navigate('/dashboard');

    setError(true);
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

  const onClickCloseButton = () => {
    setError(false);
  };

  const onClickSubmitButton = event => {
    event.preventDefault();
    const user = event.target.elements.user.value;
    localStorage.setItem('user', user);
    navigate('/dashboard');
  };

  return (
    <>
      {/* Si hay un error, mostramos el componente Error */}
      {error ? (
        <Error
          type="submit"
          title={context.language.HERO_NO_SIGNUP}
          errorProps={context.language.ERROR_TEXT_USER}
          button={context.language.HERO_NO_SIGNUP}
          onClickClose={onClickCloseButton}
          onSubmit={onClickSubmitButton}
          input={context.language.SIGNUP_NAME}
        />
      ) : (
        <></>
      )}
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
              <CustomButton
                type="button"
                name={context.language.HERO_NO_SIGNUP}
                color="blue"
                onClick={onClickContinue}
              />
            </div>
          </>
        ) : (
          <>
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
