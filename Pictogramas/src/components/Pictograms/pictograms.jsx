import './pictograms.css';

import { useContext, React, useState, useEffect } from 'react';

import Pagination from '../pagination/pagination';
import Posts from './pictogram';
import AppContext from '../../AppContext';

const Pictograms = () => {
  const context = useContext(AppContext);
  const [items, setItems] = useState([]);

  // Esto es temporal, cargo los datos de un json dummy
  async function printJSON() {
    const response = await fetch('./picto-all-json.json');
    const pictojson = await response.json();
    console.log('Todos los pictogramas', pictojson);
    setItems(pictojson);
  }

  useEffect(() => {
    printJSON();
  }, []);

  function onChangeSearchInput(event) {
    console.log(event.target.value);
  }

  return (
    <>
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
        {/* {pictos.allPictos.map((picto, index) => (
          <div>
            <p>{picto.keywords[0].keyword}</p>
          </div>
        ))} */}
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
