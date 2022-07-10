import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Post = ({ data, kurva }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorites();
  });

  const checkFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    // console.log(storedFavorites, data._id); // eslint-disable-line
    if (storedFavorites !== null) {
      if (storedFavorites.indexOf(data._id.toString()) >= 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  };

  const onClickFavorite = (event) => {
    let favorites = [];
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites !== null) {
      favorites = storedFavorites;
    }
    if (favorites.indexOf(event.target.id) >= 0) {
      console.log(
        event.target.id,
        'Borrando posicion:',
        favorites.indexOf(event.target.id),
      );
      favorites.splice(favorites.indexOf(event.target.id), 1);
      setIsFavorite(false);
    } else {
      favorites.push(event.target.id);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <>
      <div className="pictogram-div">
        <DivHeader>
          <button
            className={isFavorite ? 'favorite' : 'no-favorite'}
            type="button"
            id={data._id}
            onClick={onClickFavorite}
          >
            ★
          </button>
        </DivHeader>
        <DivPictogramDetail>
          <Link to={`/dashboard${data._id}`}>
            <p>{data.keywords[0].keyword}</p>

            <picture>
              <img
                src={`https://static.arasaac.org/pictograms/${data._id}/${data._id}_300.png`}
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
  & .no-favorite {
    color: lightgray;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
  }
  & .favorite {
    /* .no-favorite:hover { */
    color: orange;
    transform: scale(1.8);
    transition: all 0.2s ease-in-out;
  }
  /* & .favorite:hover {
    transform: scale(1.1);
    color: lightgray;
    text-shadow: 0 0 0 #000000;
  } */

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
