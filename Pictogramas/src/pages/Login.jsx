import { Link } from 'react-router-dom';
import CustomButton from '../components/elements/customButton';
import '../styles/login.css';

import Header from '../components/header';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

// Iconos
const icons = [
  {
    name: 'Facebook',
    src: 'https://www.upn.org/wp-content/uploads/2015/11/social_facebook_box_blue.png',
  },
  {
    name: 'Twitter',
    src: 'https://lcsi.umh.es/docs/twitter/pajarito.png',
  },
  {
    name: 'Instagram',
    src: 'https://i0.wp.com/welcometoelmundo.com/wp-content/uploads/2018/02/instagram-2.png?ssl=1',
  },
  {
    name: 'Google',
    src: 'https://infos-geek.com/wp-content/uploads/2020/10/activer-desactiver-ok-google-assistant4.png?ezimgfmt=rs:256x256/rscb78/ng:webp/ngcb78',
  },
];
const Login = (props) => {
  return (
    <>
      <Header />
      <div className="login-container">
        <div className="container">
          <div className="login">
            <h1> {props.title} </h1>
            <p>{props.language.LOGIN_TITLE}</p>
            <form>
              <label>
                {props.language.LOGIN_EMAIL}:
                <input type="text" name="username" />
              </label>
              <label>
                {props.language.LOGIN_PASSWORD}:
                <input type="password" name="password" />
              </label>
              <CustomButton
                color="blue"
                name={props.language.LOGIN_BUTTON}
                size="small"
                /* onClick={props.changeLanguage} */
              />
            </form>
          </div>
          <p>{props.language.LOGIN_SOCIAL}</p>
          <div className="social">
            <div>
              <ul>
                {icons.map((icon) => (
                  <li key={icon.name}>
                    <img src={icon.src} alt={icon.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="register">
            <p> {props.language.LOGIN_REGISTER} </p>
            <CustomButton
              color="green"
              name={props.language.LOGIN_REGISTER_BUTTON}
              size="small"
              /* onClick={props.changeLanguage} */
            />
          </div>
        </div>
        <div className="terms">
          <p> {props.language.LOGIN_TERMS} </p>
          <p>
            <strong> {props.language.LOGIN_TERMS_LINK} </strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
