import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import Header from '../components/Header/header';

const Login = props => {
  return (
    <>
      <Header />
      <h1>Aquí iría el Login / Registro</h1>
      <Link to={'/dashboard'}>Iniciar sesion</Link>
    </>
  );
};

export default Login;
