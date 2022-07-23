import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Post = ({ data, kurva }) => {
  // Estado donde guardamos un booleano que indica si el pictograma es favorito
  const [isFavorite, setIsFavorite] = useState(false);

  // En el useEffect comprobamos si el pictograma es favorito
  useEffect(() => {
    // window.localStorage.clear(); -> Con esta función eliminamos todo lo que haya en el local storagae
    checkFavorites();
  });

  const checkFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    // Comprobamos si hay favoritos en local storage
    if (storedFavorites !== null) {
      // Si los hay, comprobamos si dentro del array de favoritos está el id del pictograma actual.
      // En función de eso, ponemos el estado favorito a true o a false.
      const index = storedFavorites.findIndex(
        favorite => favorite._id === data._id,
      );
      if (index >= 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  };

  // Función que añade o elimina favoritos al local storage
  const onClickFavorite = (event, data) => {
    // creamos un array vacío llamado favoritos y le asigamos el array de favoritos del local storage, en caso de que haya.
    let favorites = [];
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites !== null) {
      favorites = storedFavorites;
    }

    // Comprobamos si el id del pictograma actual está en el array
    // Si está, eliminamos el pictograma del array, si no, lo añadimos.
    const index = favorites.findIndex(favorite => favorite._id === data._id);
    if (index >= 0) {
      console.log(event.target.id, 'Eliminando favorito posición:', index);
      favorites.splice(index, 1); // Esto elimina la posición index del array
      setIsFavorite(false);
    } else {
      console.log(
        event.target.id,
        'Añadiendo favorito posicion:',
        index,
        favorites,
      );
      favorites.push(data);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    window.dispatchEvent(new Event('storage')); // Lanza un evento para que nuestro componente favoritos sepa que tiene que actualizarse
    console.log('Evento favoritos lanzado');
  };

  return (
    <>
      <div className="pictogram-div">
        <DivHeader>
          <button
            className={isFavorite ? 'favorite' : 'no-favorite'}
            type="button"
            id={data._id}
            onClick={event => onClickFavorite(event, data)}
          >
            ★
          </button>
        </DivHeader>
        <DivPictogramDetail>
          <Link to={`/dashboard${data._id}`}>
            <p>{data.keywords[0].keyword}</p>

            <picture>
              <img
                src={`https://static.arasaac.org/pictograms/${data._id}/${
                  data._id
                }_300.png`}
                alt={data.keywords[0].keyword}
              />
            </picture>
          </Link>
        </DivPictogramDetail>
      </div>
    </>
  );
};

export default Post;

// Estilo
const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;

  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  & button:hover {
  }
`;

const DivPictogramDetail = styled.div`
  width: 100%;
  text-align: center;

  & picture {
    margin: auto;
  }
`;
