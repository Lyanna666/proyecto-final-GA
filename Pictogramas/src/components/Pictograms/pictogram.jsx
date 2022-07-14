import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Post = ({ data, kurva }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // window.localStorage.clear();
    checkFavorites();
  });

  const checkFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    // console.log('Storage array ', storedFavorites, data._id);
    if (storedFavorites !== null) {
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

  const onClickFavorite = (event, data) => {
    let favorites = [];

    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    console.log('************', data, storedFavorites);
    if (storedFavorites !== null) {
      favorites = storedFavorites;
    }
    const index = favorites.findIndex(favorite => favorite._id === data._id);
    console.log('Index del favorito', index, data._id);
    if (index >= 0) {
      console.log(event.target.id, 'Borrando posicion:', index);
      favorites.splice(index, 1);
      setIsFavorite(false);
    } else {
      // Como poder pasar la data ¿?
      console.log(event.target.id, 'Añadiendo posicion:', index, favorites);
      favorites.push(data);
      console.log(event.target.id, 'Añadido posicion:', index, favorites);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    window.dispatchEvent(new Event('storage'));
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
