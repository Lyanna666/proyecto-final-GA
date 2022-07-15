import { React, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import AppContext from '../../AppContext';

const Favorites = props => {
  const context = useContext(AppContext);

  const [favorites, setFavorites] = useState(null);

  const mostrarFavoritos = () => {
    console.log(favorites);
  };

  useEffect(() => {
    console.log(
      'Aqui no entra fuera',
      JSON.parse(localStorage.getItem('favorites')),
    );
    // window.localStorage.clear();
    if (JSON.parse(localStorage.getItem('favorites'))) {
      const todos = JSON.parse(localStorage.getItem('favorites'));
      console.log('Aqui no entra dentro', todos);
      setFavorites(todos);
      console.log('Aqui no entra dentro', favorites);
    }

    function storageEventHandler(event) {
      console.log('favoritos ha cambiado');
      // if (event.key === 'favorites') {
      if (JSON.parse(localStorage.getItem('favorites'))) {
        const todos = JSON.parse(localStorage.getItem('favorites'));
        console.log(todos);
        setFavorites(todos);
        console.log(favorites);
      } else {
        setFavorites(null);
      }
      // }
    }

    window.addEventListener('storage', storageEventHandler);
    return () => {
      window.removeEventListener('storage', storageEventHandler);
    };
  }, []);

  // useEffect(
  //   () => {
  //     let listaFavoritos = localStorage.getItem('favorites');
  //     console.log('Lista de favoritos', listaFavoritos);
  //     if (listaFavoritos) {
  //       setFavorites(JSON.parse(listaFavoritos));
  //     }
  //     console.log('Actualizando favoritos');

  //     // Preguntar porque el hook useEffect no se ejecuta cuando se carga la página o se queda en bucle
  //   },
  //   [JSON.parse(localStorage.getItem('favorites')).length],
  // );

  const updateFavorites = () => {
    let listaFavoritos = localStorage.getItem('favorites');
    console.log('Lista de favoritos', listaFavoritos);
    if (listaFavoritos) {
      setFavorites(JSON.parse(listaFavoritos));
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
            {mostrarFavoritos()}
            <List>
              {favorites !== null ? (
                favorites.map((item, index) => {
                  console.log(' ******** puto calor :(', item);
                  return (
                    <ListItem>
                      <div key={index}>
                        <picture>
                          <img
                            src={`https://static.arasaac.org/pictograms/${
                              item._id
                            }/${item._id}_300.png`}
                            alt={item._id}
                          />
                        </picture>
                        <p>{item.keywords[0].keyword}</p>
                      </div>
                    </ListItem>
                  );
                })
              ) : (
                <>No hay favoritos</>
              )}

              {/* <ListItem> ID: {localStorage.getItem('favorites')}</ListItem> */}
            </List>
          </ContenedorFavoritos>
        )}
      </MostrarFavoritos>
    </>
  );
};

export default Favorites;
