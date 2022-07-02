import '../styles/registrer.css';

import { useContext, useState, React } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../AppContext';

import CustomButton from '../components/elements/customButton';
import CustomLink from '../components/elements/customLink';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

// Iconos
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

const Register = () => {
  const context = useContext(AppContext);

  return (
    <>
      <Header />
      <div className="box-container">
        <div className="container">
          <div className="registrer">
            <h1>{context.language.SIGNUP_TITLE}</h1>
            <p>{context.language.SIGNUP_SUBTITLE}</p>
            <form>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder={context.language.SIGNUP_NAME}
                  required="required"
                />
              </label>
              <label>
                <input
                  type="text"
                  name="surname"
                  placeholder={context.language.SIGNUP_SURNAME}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="username"
                  placeholder={context.language.SIGNUP_EMAIL}
                  required="required"
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  placeholder={context.language.SIGNUP_PASSWORD}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder={context.language.SIGNUP_CONFIRM_PASSWORD}
                />
              </label>
              <CustomButton
                color="blue"
                name={context.language.SIGNUP_BUTTON}
                size="small"
              />
            </form>
          </div>
          <p>{context.language.SIGNUP_SOCIAL}</p>
          <div className="social">
            <div>
              <ul>
                {socialIcons.map((icon) => (
                  <li key={icon.name}>
                    <img src={icon.src} alt={icon.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="login-registrer">
            <p> {context.language.LOGIN_SINGUP} </p>
            <CustomLink
              name={context.language.LOGIN_SINGUP_ACTION}
              color="green"
              url="/login"
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
      </div>
      <Footer />
    </>
  );
};

export default Register;
