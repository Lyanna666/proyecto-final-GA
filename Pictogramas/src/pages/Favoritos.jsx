import React from 'react';
import { useContext, useState } from 'react';

import AppContext from '../AppContext';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import styled from 'styled-components';
import Aside from '../components/aside/aside';

function Favoritos(props) {
  const context = useContext(AppContext);

  return (
    <>
      <Header />
      <Aside />
      {}
      <Footer />
    </>
  );
}

export default Favoritos;

// Estilos de la página
const DivForm = styled.div`
  padding: 0.5rem;
  width: 25%;
  margin-right: 1rem;
`;
