import React from 'react';
import { useContext, useState } from 'react';

import AppContext from '../AppContext';
import Perfil from './Perfil';
import Header from '../components/Header/header';
import CustomButton from '../components/elements/customButton';
import Footer from '../components/Footer/footer';
import { fetchAllPictogramsBySearch } from '../api/api-rest';
import styled from 'styled-components';

function Favoritos() {
  const context = useContext(AppContext);

  return (
    <>
      <Header />
      <div>
        <h1>Buscar Pictogramas</h1>
        <Footer />
      </div>
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
