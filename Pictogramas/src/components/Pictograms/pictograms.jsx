import './pictograms.css';

import { useContext, React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';

const Pictograms = () => {
  const context = useContext(AppContext);
  const [allPictos, setAllPictos] = useState([]);
  const [pictos, setPictos] = useState({
    allPictos: [],
    filterPictos: [],
  });
  const [pages, setPages] = useState({ currentPage: 1, picsPerPage: 4 });

  // Esto es temporal, cargo los datos de un json dummy
  async function printJSON() {
    const response = await fetch('./picto-json.json');
    const pictojson = await response.json();
    console.log(pictojson);
    setAllPictos(pictojson);

    const finalArray = [];
    console.log('Todos los pictos', pictojson);
    let newArray = [];
    pictojson.map((picto, index) => {
      newArray.push(picto);
      console.log(index, newArray);
      console.log(pages.picsPerPage, newArray.length);
      if (newArray.length === pages.picsPerPage) {
        finalArray.push(newArray);
        console.log(index, newArray, finalArray);
        newArray = [];
      }
    });
    console.log(finalArray);
    setPictos({ allPictos: pictojson, filterPictos: finalArray });
    console.log('Pictos', pictos);
  }

  function separatedPictos() {
    const finalArray = [];
    console.log('Todos los pictos', pictos.allPictos, allPictos);
    let newArray = [];
    pictos.allPictos.map((picto, index) => {
      newArray.push(picto);
      if (newArray.length === pages.picsPerPage) {
        separatedPictos.push(newArray);
        newArray = [];
      }
    });
    setPictos({ allPictos: pictos.allPictos, filterPictos: finalArray });
    console.log(pictos);
  }

  function onClickPage(event) {}

  function onChangeSearchInput(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <section>
        <button type="button" onClick={printJSON}>
          Cargar json dummy
        </button>
        <h2>{context.language.DASHBOARD_PICTOGRAMS}</h2>
        <div>
          <ul>
            {context.language.DASHBOARD_CATEGORIES.map((information, index) => (
              <>
                <li key={information}>
                  <button type="button">{information}</button>
                </li>
              </>
            ))}
          </ul>
        </div>
        <form>
          {/* <select
            name="categories"
            id="categories"
            onChange={onChangeCategorie}
          >
            <option>{context.language.DASHBOARD_ALL_CATEGORIES}</option>
            {context.language.DASHBOARD_CATEGORIES.map((information, index) => (
              <option>{information}</option>
            ))}
          </select> */}
          <input
            type="search"
            placeholder={context.language.DASHBOARD_SEARCH}
            onKeyUp={onChangeSearchInput}
          />
        </form>
        {pictos.allPictos.map((picto, index) => (
          <div>
            <p>{picto.keywords[0].keyword}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pictograms;
