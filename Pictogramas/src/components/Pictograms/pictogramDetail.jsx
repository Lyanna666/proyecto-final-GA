import { Link, useParams } from 'react-router-dom';
import AppContext from '../../AppContext';

import styled from 'styled-components';
import { useContext, React, useState, useEffect } from 'react';
import { fetchPictogramById } from '../../api/api-rest';
import CustomButton from '../elements/customButton';
import Spinner from '../loading/loading';

import './pictogramDetail.css';

const PictogramDetail = props => {
  const context = useContext(AppContext);
  const params = useParams();
  console.log('Paso1', context, params, props);
  const [pictogramInfo, setPictogramInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  function getPictogram() {
    setLoading(true);
    console.log('Paso3', params, props);
    fetchPictogramById(context.language.LANGUAGE, props.id)
      .then(data => {
        setPictogramInfo(data);
        console.log(data);
        setLoading(false);
      })
      .catch(error => {
        setPictogramInfo(null);
        console.error(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    console.log('Paso2');
    getPictogram();
  }, []);

  return (
    <>
      {loading ? <Spinner allWindow={true} /> : <></>}
      <div className="pictograma">
        <h1>Pictograma {params.id}</h1>
        {pictogramInfo != null ? (
          <ContentPictogram>
            <DivPictogram>
              <H2Pictogram>{pictogramInfo.keywords[0].keyword} ▶</H2Pictogram>

              <picture>
                <img
                  src={`https://static.arasaac.org/pictograms/${
                    pictogramInfo._id
                  }/${pictogramInfo._id}_300.png`}
                  alt={pictogramInfo._id}
                />
              </picture>
              <div>
                <CustomButton name="Descargar" color="green" size="small" />
                <CustomButton name="Imprimir" color="green" size="small" />
                <CustomButton name="Descargar" color="green" size="small" />
              </div>
            </DivPictogram>
            <div>
              <ul>
                {pictogramInfo.keywords.map((information, index) => (
                  <li key={index}>
                    <h3>{information.keyword.toUpperCase()}</h3>
                    <p>{information.meaning}</p>
                  </li>
                ))}
              </ul>

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
  width: 30%;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  margin: 1rem;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px, rgb(0 0 0 / 12%) 0px 1px 4px;

  @media (max-width: 768px) {
  }
`;

const LiCategory = styled.li`
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
`;

const H2Pictogram = styled.h2`
  display: block;
  padding: 0.5rem;
  width: 100%;
  font-weight: 400;
  color: var(--gray);
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #f5f5f5;
`;

export default PictogramDetail;
