import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Perfil() {
  const [pictograma, setNombre] = useState('');

  const getData = () => {
    return localStorage.getItem('pictograma:');
  };

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  `;

  const H2 = styled.h2`
    display: flex;
    font-size: 1.5rem;
    width: 100%;
    margin: 0 auto;
    padding: 1.25rem;
  `;
  const Pictogram = styled.p`
    font-size: 1.5rem;
    width: 50%;
    margin: 1rem auto;
    padding: 1.25rem;
    border: 2px solid #000;
  `;

  useEffect(() => {
    setNombre(getData());
  }, []);

  return (
    <>
      <Content>
        <H2>Favoritos⭐: </H2>
        <Pictogram> {pictograma} </Pictogram>
      </Content>
    </>
  );
}

export default Perfil;
