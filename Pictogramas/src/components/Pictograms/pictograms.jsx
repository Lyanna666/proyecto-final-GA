import './pictograms.css';

import { useContext, React, useState, useEffect } from 'react';
import {
  fetchAllPictograms,
  fetchPictogramsByCategory,
} from '../../api/api-rest';
import Pagination from '../pagination/pagination';
import Posts from './pictogram';
import AppContext from '../../AppContext';
import Spinner from '../loading/loading';
import Favorites from '../Favorites/favorites';
import Error from '../Error/error';

const Pictograms = () => {
  const context = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [pictograms, setPictograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(null);

  function getAllPictograms() {
    setLoading(true);
    fetchAllPictograms(context.language.LANGUAGE)
      .then(data => {
        console.log('esto es un error', Array.isArray(data));
        if (Array.isArray(data)) {
          setError(null);
          setItems(data);
          setPictograms(data);
          setLoading(false);
        } else {
          setError(data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    // printJSON();
    getAllPictograms();
  }, []);

  // -------------- Búsqueda de pictogramas por categoría -----------------
  const onClickCategory = event => {
    const value = event.target.id;
    getFilteredPictogramsByCategory(value);
  };

  const getFilteredPictogramsByCategory = endpoint => {
    setLoading(true);
    fetchPictogramsByCategory(endpoint, context.language.LANGUAGE)
      .then(data => {
        setPictograms(data);
        setLoading(false);
      })
      .catch(error => {
        setPictograms(items);
        console.error(error);
        setLoading(false);
      });
  };

  // -------------- Búsqueda de pictogramas por palabra -----------------
  const getFilteredPictograms = ({ search }) => {
    const searchString = new RegExp(search, 'i');
    const filteredPictograms = items.filter(pictogram => {
      // console.log(pictogram.keywords[0].keyword);
      return searchString.test(pictogram.keywords[0].keyword);
    });
    return filteredPictograms;
  };

  const handleKeyUp = event => {
    const value = event.target.value;
    setKeyword(value);
    const filteredPictograms = getFilteredPictograms({
      keyword,
      search: value,
    });
    setPictograms(filteredPictograms);
  };

  const onClickCloseButton = () => {
    setError(null);
  };

  const onClickRestartButton = () => {
    setError(null);
    getAllPictograms();
  };

  return (
    <>
      {loading ? <Spinner allWindow={true} /> : <></>}
      {error ? (
        <Error
          title={context.language.ERROR_TITLE}
          errorProps={error.message}
          button={context.language.ERROR_BUTTON_TEXT}
          onClickClose={onClickCloseButton}
          onClickRestart={onClickRestartButton}
        />
      ) : (
        <></>
      )}
      <section className="pictograms-section">
        <h1>{context.language.DASHBOARD_PICTOGRAMS}</h1>
        <Favorites />
        <form id="form-search-pictograms">
          <input
            type="search"
            placeholder={context.language.DASHBOARD_SEARCH}
            onChange={handleKeyUp}
            id="search"
            autoComplete="off"
          />
          {/* <button type="submit" id="buscar">
            buscar
          </button> */}
        </form>
        <div>
          <ul>
            <li key="all">
              <button
                type="button"
                className="category-button"
                onClick={getAllPictograms}
              >
                {context.language.DASHBOARD_CATEGORIES_ALL}
              </button>
            </li>
            {context.language.DASHBOARD_CATEGORIES.map((information, index) => (
              <>
                <li key={information.endpoint}>
                  <button
                    id={information.endpoint}
                    className="category-button"
                    type="button"
                    onClick={onClickCategory}
                  >
                    {information.id}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div>
          {/* {loadingSearch ? <Spinner allWindow={false} /> : <></>} */}
          {pictograms.length > 0 ? (
            <>
              <Pagination
                data={pictograms}
                currentPagee={1}
                numberPages={pictograms.length}
                RenderComponent={Posts}
                title="Pictogramas Paginación"
                buttonConst={3}
                contentPerPage={24}
                siblingCount={1}
              />
            </>
          ) : (
            <p>No se encontraron pictogramas</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Pictograms;
