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

const Pictograms = () => {
  const context = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [pictograms, setPictograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  function getAllPictograms() {
    setLoading(true);
    // console.log(context.language.LANGUAGE);
    fetchAllPictograms(context.language.LANGUAGE)
      .then(data => {
        setItems(data);
        setPictograms(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    // printJSON();
    getAllPictograms();
  }, []);

  // -------------- Búsqueda de pictogramas por categoría -----------------
  const onClickCategory = event => {
    const value = event.target.id;
    console.log(value);
    getFilteredPictogramsByCategory(value);
  };

  const getFilteredPictogramsByCategory = url => {
    setLoading(true);
    fetchPictogramsByCategory(url, context.language.LANGUAGE)
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

  return (
    <>
      {loading ? <Spinner allWindow={true} /> : <></>}
      <section className="pictograms-section">
        {' '}
        <button type="button" onClick={getAllPictograms}>
          <h2>{context.language.DASHBOARD_PICTOGRAMS}</h2>
        </button>
        <form>
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
