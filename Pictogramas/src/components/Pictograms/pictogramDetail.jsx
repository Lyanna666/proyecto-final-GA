import { Link, useParams } from 'react-router-dom';
import AppContext from '../../AppContext';

import { useContext, React, useState, useEffect } from 'react';
import { fetchPictogramById } from '../../api/api-rest';
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
        <h2>Pictograma {params.id}</h2>
        {pictogramInfo != null ? (
          <div className="pictograma-img">
            <div>
              <h1>{pictogramInfo.keywords[0].keyword}</h1>
              <picture>
                <img
                  src={`https://static.arasaac.org/pictograms/${
                    pictogramInfo._id
                  }/${pictogramInfo._id}_300.png`}
                  alt={pictogramInfo._id}
                />
              </picture>
              <div>
                <button type="button">Descargar</button>
                <button type="button">Imprimir</button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PictogramDetail;
