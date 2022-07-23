import { React, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomButton from '../elements/customButton';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

const Favorites = props => {
  // Constante donde guardamos el número de favoritos que queremos mostrar
  const favoritesPerPageNumber = 4;

  // Context para selecionar el idioma
  const context = useContext(AppContext);

  // Estado donde guardamos el número de favoritos que se muestra en la página
  // Lo inicializamos a 4
  const [favoritesPerPage, setFavoritesPerPage] = useState(
    favoritesPerPageNumber,
  );

  // Estado donde guardaremos el array de favoritos
  const [favorites, setFavorites] = useState(null);

  // Funcion que actualiza el estado de favoritos con lo que haya en local storage
  const updateFavorites = () => {
    if (JSON.parse(localStorage.getItem('favorites'))) {
      const favoritesArray = JSON.parse(localStorage.getItem('favorites'));
      setFavorites(favoritesArray);
      if (favoritesPerPage !== favoritesPerPageNumber) {
        setFavoritesPerPages(favoritesArray.length);
      }
    } else {
      setFavorites(null);
    }
  };

  // Función que setea el numéro de favoritos que se muestra
  const setFavoritesPerPages = newLength => {
    setFavoritesPerPage(newLength);
  };

  // Función para mostrar más o menos favoritos
  const showMoreFavorites = event => {
    if (favoritesPerPage === favoritesPerPageNumber) {
      setFavoritesPerPages(favorites.length);
    } else {
      setFavoritesPerPages(favoritesPerPageNumber);
    }
  };

  useEffect(() => {
    // window.localStorage.clear(); -> Esto elimina todo lo que haya en local storage
    updateFavorites();
    function storageEventHandler(event) {
      // Cuando entra en esta función es porque favoritos ha cambiado
      updateFavorites();
    }

    // Añadimos el evento storageEventHandler, este evento se ejecuta cuando cambie el storage de favoritos
    window.addEventListener('storage', storageEventHandler);
    return () => {
      window.removeEventListener('storage', storageEventHandler);
    };
  }, []);

  return (
    <>
      <MostrarFavoritos>
        <H2>
          {/* Mostramos el título y el número de favoritos, si es nulo entonces mostramos 0 */}
          {context.language.FAVO_TITLE} ({favorites ? favorites.length : 0})
        </H2>
        <ContenedorFavoritos>
          <List>
            {/* Si favoritos es distinto de null, hacemos un map  */}
            {favorites !== null ? (
              favorites.map((item, index) =>
                // Mostramos como máximo un número de favoritos
                index < favoritesPerPage ? (
                  <>
                    <Link to={`/dashboard${item._id}`}>
                      <ListItem key={index} className="pictogram-div">
                        <picture>
                          <img
                            src={`https://static.arasaac.org/pictograms/${
                              item._id
                            }/${item._id}_300.png`}
                            alt={item._id}
                          />
                        </picture>
                        <p>{item.keywords[0].keyword}</p>
                      </ListItem>
                    </Link>
                  </>
                ) : (
                  <></>
                ),
              ) // Si favoritos es null mostramos un texto indicando que no hay favoritos guardados
            ) : (
              <>
                <ListItem>No hay favoritos</ListItem>
              </>
            )}
          </List>
        </ContenedorFavoritos>

        <CustomButton
          name={
            favoritesPerPage === favoritesPerPageNumber
              ? context.language.SHOW_MORE_FAVORITES
              : context.language.SHOW_LESS_FAVORITES
          }
          onClick={showMoreFavorites}
        />
      </MostrarFavoritos>
    </>
  );
};

export default Favorites;

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
  /* font-size: 1.5rem; */
  width: 100%;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContenedorFavoritos = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: none;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #db4444;
  background-color: #e9a7a7;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
