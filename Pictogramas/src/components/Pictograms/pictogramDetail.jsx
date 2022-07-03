import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

import { useContext, React, useState, useEffect } from 'react';
import { fetchPictogramById } from '../../api/api-rest';
import Spinner from '../loading/loading';

import './pictogramDetail.css';

const PictogramDetail = props => {
  const context = useContext(AppContext);
  const [pictogramInfo, setPictogramInfo] = useState({});
  const [loading, setLoading] = useState(false);

  function getPictogram() {
    setLoading(true);
    // console.log(context.language.LANGUAGE);
    fetchPictogramById(context.language.LANGUAGE, props.id)
      .then(data => {
        setPictogramInfo(data);
        console.log(data);
        setLoading(false);
      })
      .catch(error => {
        setPictogramInfo({});
        console.error(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getPictogram();
  }, []);

  return (
    <>
      {loading ? <Spinner allWindow={true} /> : <></>}
      <div className="pictograma">
        <h2>Pictograma {props.id}</h2>

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
      </div>
    </>
  );
};

export default PictogramDetail;
