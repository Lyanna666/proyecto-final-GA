import './pictograms.css';

import { useContext, React, useState, useEffect } from 'react';
import fetchAllPictograms from '../../api/api-rest';
import Pagination from '../pagination/pagination';
import Posts from './pictogram';
import AppContext from '../../AppContext';
import Spinner from '../loading/loading';

const Pictograms = () => {
  const context = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  function getAllPictograms() {
    setLoading(true);
    console.log(context.language.LANGUAGE);
    fetchAllPictograms(context.language.LANGUAGE)
      .then((data) => {
        setItems(data);
        console.log(data.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  function load() {
    return <Spinner />;
  }

  useEffect(() => {
    // printJSON();
    getAllPictograms();
  }, []);

  /*   function onChangeSearchInput(event) {
    console.log(event.target.value);
  } */

  // -------------- Búsqueda de pictogramas -----------------
  /*   const getFilteredPictograms = ({ search, keyword }) => {
    const searchString = new RegExp(search, 'i');

    const filteredPictograms = items.filter((pictogram) => {
      return (
        searchString.test(pictogram.keyword) && pictogram.keyword === keyword
      );
    });
    return filteredPictograms;
  };

  const handleKeyUp = (event) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
    const filteredPictograms = getFilteredPictograms({
      keyword,
      search: value,
    });
    setItems(filteredPictograms);
  };

  console.log(handleKeyUp);
  console.log(getFilteredPictograms); */

  // -----------------------------------------------------

  return (
    <>
      {loading ? load() : <></>}
      {/* {load()} */}
      <section className="pictograms-section">
        {/* <button type="button" onClick={printJSON}>
          Cargar json dummy
        </button> */}
        <h2>{context.language.DASHBOARD_PICTOGRAMS}</h2>
        <div>
          <ul>
            {context.language.DASHBOARD_CATEGORIES.map((information, index) => (
              <>
                <li key={information}>
                  <button className="category-button" type="button">
                    {information}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
        <form>
          <input
            type="search"
            placeholder={context.language.DASHBOARD_SEARCH}
            /* onKeyUp={handleKeyUp} */
            id="search"
          />
        </form>
        <div>
          {items.length > 0 ? (
            <>
              <Pagination
                data={items}
                RenderComponent={Posts}
                title="Pictogramas Paginación"
                buttonConst={3}
                contentPerPage={15}
                siblingCount={1}
              />
            </>
          ) : (
            <h1>No hay pictogramas</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Pictograms;
