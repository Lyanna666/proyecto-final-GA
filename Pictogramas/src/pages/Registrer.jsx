import '../styles/registrer.css';

import { useContext, React } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../AppContext';

import CustomButton from '../components/elements/customButton';
import Header from '../components/Header/header';

// Iconos
const socialIcons = [
  {
    name: 'Facebook',
    src:
      'https://www.upn.org/wp-content/uploads/2015/11/social_facebook_box_blue.png',
  },
  {
    name: 'Twitter',
    src: 'https://lcsi.umh.es/docs/twitter/pajarito.png',
  },
  {
    name: 'Instagram',
    src:
      'https://i0.wp.com/welcometoelmundo.com/wp-content/uploads/2018/02/instagram-2.png?ssl=1',
  },
  {
    name: 'Google',
    src:
      'https://infos-geek.com/wp-content/uploads/2020/10/activer-desactiver-ok-google-assistant4.png?ezimgfmt=rs:256x256/rscb78/ng:webp/ngcb78',
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
                {socialIcons.map(icon => (
                  <li key={icon.name}>
                    <img src={icon.src} alt={icon.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="login-registrer">
            <p> {context.language.LOGIN_SINGUP} </p>
            <CustomButton
              color="green"
              name={context.language.LOGIN_SINGUP_ACTION}
              size="small"
            />

            <Link to={'/login'}>Ir a Login temporal</Link>
          </div>
        </div>
        <div className="terms">
          <p> {context.language.LOGIN_TERMS} </p>
          <p>
            <strong> {context.language.LOGIN_TERMS_LINK} </strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
