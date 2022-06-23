import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import * as constantsSpanish from '../Constants/spanish';
import * as constantsEnglish from '../Constants/english';

import Header from '../components/header';

const Home = () => {
  console.log(constantsSpanish.TITLE);
  return (
    <>
      <Header />
      <main>
        <h1>Esto es Home</h1>
        <Link to={'/login'}>Ir al Login</Link>
      </main>
    </>
  );
};

export default Home;
