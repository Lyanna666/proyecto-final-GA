import { React, useContext } from 'react';
import styled from 'styled-components';

import AppContext from '../../AppContext';

const Favorites = (props) => {
  const context = useContext(AppContext);

  let listaFavoritos = localStorage.getItem('favorites');

  const mostrarFavoritos = () => {
    if (listaFavoritos) {
      listaFavoritos = JSON.parse(listaFavoritos);
      return listaFavoritos.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        );
      });
    }
  };

  // estilo de favoritos
  const MostrarFavoritos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  `;

  const H2 = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  `;

  const ContenedorFavoritos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `;

  const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #db4444;
    background-color: #e9a7a7;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  `;

  return (
    <>
      <MostrarFavoritos>
        <H2>{context.language.FAVO_TITLE}</H2>
        {localStorage.getItem('favorites') && (
          <ContenedorFavoritos>
            <List>
              <ListItem> ID: {localStorage.getItem('favorites')}</ListItem>
              <ListItem> ID: {mostrarFavoritos}</ListItem>
            </List>
          </ContenedorFavoritos>
        )}
      </MostrarFavoritos>
    </>
  );
};

export default Favorites;
