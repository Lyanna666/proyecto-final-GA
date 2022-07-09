import { Link, useParams } from 'react-router-dom';
import AppContext from '../../AppContext';

import styled from 'styled-components';
import { useContext, React, useState, useEffect } from 'react';
import { fetchPictogramById } from '../../api/api-rest';
import CustomButton from '../elements/customButton';
import Spinner from '../loading/loading';
import { numeroAleatorio } from '../../Utils/utils';

import './pictogramDetail.css';

const PictogramDetail = props => {
  const [isFavorite, setIsFavorite] = useState(false);
  const context = useContext(AppContext);
  const params = useParams();
  const [pictogramInfo, setPictogramInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  function getPictogram() {
    setLoading(true);
    fetchPictogramById(context.language.LANGUAGE, props.id)
      .then(data => {
        setPictogramInfo(data);
        setLoading(false);
      })
      .catch(error => {
        setPictogramInfo(null);
        console.error(error);
        setLoading(false);
      });
  }

  // Chequeamos favoritos
  const checkFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites !== null) {
      if (storedFavorites.indexOf(props.id.toString()) >= 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  };

  // Añadir a favoritos
  const onClickFavorite = event => {
    let favorites = [];
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites !== null) {
      favorites = storedFavorites;
    }
    if (favorites.indexOf(event.target.id) >= 0) {
      favorites.splice(favorites.indexOf(event.target.id), 1);
      setIsFavorite(false);
    } else {
      favorites.push(event.target.id);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  useEffect(() => {
    getPictogram();
    checkFavorites();
  }, []);

  return (
    <>
      {loading ? <Spinner allWindow={true} /> : <></>}

      <div className="pictograma">
        <DivBack>
          <Link to={'/Dashboard'}>🔙</Link>
        </DivBack>
        <h1>Pictograma {params.id}</h1>
        {pictogramInfo != null ? (
          <ContentPictogram>
            <DivPictogram>
              <H2Pictogram>
                {/* <span> */}
                <button
                  className={isFavorite ? 'favorite' : 'no-favorite'}
                  type="button"
                  id={props.id}
                  onClick={onClickFavorite}
                >
                  ★
                </button>
                {/* </span> */}
                {pictogramInfo.keywords[0].keyword}
              </H2Pictogram>
              <picture>
                <img
                  src={`https://static.arasaac.org/pictograms/${
                    pictogramInfo._id
                  }/${pictogramInfo._id}_300.png`}
                  alt={pictogramInfo._id}
                />
              </picture>
              <DivButtons>
                <CustomButton name="Imprimir" color="green" />
                <CustomButton name="Descargar" color="green" />
                {/*                 <CustomButton
                  name="Marcar como favorito 🤍"
                  color="red"
                  onClick={onClickFavorite}
                /> */}
              </DivButtons>
            </DivPictogram>
            <div>
              <UlCategory>
                {pictogramInfo.keywords.map((information, index) => (
                  <li key={numeroAleatorio}>
                    <h3>{information.keyword.toUpperCase()}</h3>
                    <p>{information.meaning}</p>
                  </li>
                ))}
              </UlCategory>

              <ul>
                {pictogramInfo.tags.map((tag, index) => (
                  <LiCategory key={tag}>{tag}</LiCategory>
                ))}
              </ul>
            </div>
          </ContentPictogram>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const DivPictogram = styled.div`
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  margin: 1rem;
  min-width: 20rem;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px, rgb(0 0 0 / 12%) 0px 1px 4px;
`;

const DivBack = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin-left: 1rem;
  margin-right: auto;
`;

const DivButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const UlCategory = styled.ul`
  display: flex;
  flex-direction: column;
`;

const LiCategory = styled.li`
  display: block;
  margin: 0.2rem;
  background-color: rgb(229, 229, 229);
  padding: 0.5rem;
  border-radius: 1rem;
`;

const ContentPictogram = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const H2Pictogram = styled.h2`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  font-weight: 400;
  color: var(--gray);
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #f5f5f5;

  & button {
    margin-right: 1rem;
  }
`;

export default PictogramDetail;
