import '../styles/login.css';

import { useContext, React } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../AppContext';

import CustomButton from '../components/elements/customButton';
import CustomLink from '../components/elements/customLink';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const Login = () => {
  const context = useContext(AppContext);

  function onClickSignIn(event) {
    //Esto es temporal
    window.location.href = '/dashboard';
    console.log('Aqui no entra');
  }

  const socialIcons = [
    {
      name: 'Facebook',
      src: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png',
    },
    {
      name: 'Twitter',
      src: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png',
    },
    {
      name: 'Instagram',
      src: 'https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png',
    },
    {
      name: 'Google',
      src: 'https://cdn4.iconfinder.com/data/icons/picons-social/57/09-google-3-256.png',
    },
  ];

  return (
    <>
      <Header />
      <div className="box-container">
        <div className="container">
          <div className="login">
            <picture>
              <img src="./Resources/logo-black.png" alt="logo" />
            </picture>
            <p>{context.language.LOGIN_SUBTITLE}</p>
            <form>
              <label>
                <input
                  type="text"
                  name="username"
                  placeholder={context.language.LOGIN_EMAIL}
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  placeholder={context.language.LOGIN_PASSWORD}
                />
              </label>
            </form>
            {/* Custom button estaba dentro del form, lo he sacado fuera para que pueda redirigir a la pag dashboard, cuando integremos firebase lo volvemos a meter dentro del form */}
            <CustomButton
              color="blue"
              name={context.language.LOGIN_BUTTON}
              size="small"
              type="submit"
              onClick={onClickSignIn}
            />
          </div>
          <p>{context.language.LOGIN_SOCIAL}</p>
          <div className="social">
            <div>
              <ul>
                {socialIcons.map((icon) => (
                  <li key={icon.name}>
                    <a href="/">
                      <img src={icon.src} alt={icon.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="register">
            <p> {context.language.LOGIN_REGISTER} </p>
            <CustomLink
              name={context.language.LOGIN_REGISTER_BUTTON}
              color="green"
              url="/registrer"
              size="small"
            />
          </div>
        </div>
        <div className="terms">
          <p> {context.language.LOGIN_TERMS} </p>
          <p>
            <strong> {context.language.LOGIN_TERMS_LINK} </strong>
          </p>
        </div>
      </div>{' '}
      <Footer />
    </>
  );
};

export default Login;
