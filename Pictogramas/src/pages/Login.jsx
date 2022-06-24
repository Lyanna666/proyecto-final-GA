import { Link } from "react-router-dom";
import CustomButton from "../components/elements/customButton";
import "../styles/login.css";

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import Header from "../components/header";
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
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Google</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="terms">
          <p> {props.language.LOGIN_TERMS} </p>
          <p> {props.language.LOGIN_TERMS_LINK} </p>
          <Link to={"/"}> {props.language.HEADER_NAV_HOME} </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
