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
  const [pictograms, setPictograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  function getAllPictograms() {
    setLoading(true);
    // console.log(context.language.LANGUAGE);
    fetchAllPictograms(context.language.LANGUAGE)
      .then((data) => {
        setItems(data);
        setPictograms(data);
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
  const getFilteredPictograms = ({ search }) => {
    const searchString = new RegExp(search, 'i');
    // console.log('******************', pictograms);
    const filteredPictograms = items.filter((pictogram) => {
      console.log(pictogram.keywords[0].keyword);
      return searchString.test(pictogram.keywords[0].keyword);
    });
    console.log(filteredPictograms);
    return filteredPictograms;
  };

  const handleKeyUp = (event) => {
    const value = event.target.value;
    setKeyword(value);
    const filteredPictograms = getFilteredPictograms({
      keyword,
      search: value,
    });
    setPictograms(filteredPictograms);
  };

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
            onKeyUp={handleKeyUp}
            id="search"
          />
        </form>
        <div>
          {pictograms.length > 0 ? (
            <>
              <Pagination
                data={pictograms}
                numberPages={pictograms.length}
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
