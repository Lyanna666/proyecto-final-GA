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

  function getAllPictograms() {
    setLoading(true);
    console.log(context.language.LANGUAGE);
    fetchAllPictograms(context.language.LANGUAGE)
      .then((data) => {
        setItems(data);
        console.log(data.length);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
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

  function onChangeSearchInput(event) {
    console.log(event.target.value);
  }

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
            onKeyUp={onChangeSearchInput}
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
