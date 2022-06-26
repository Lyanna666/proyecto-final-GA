import './pictograms.css';

import { useContext, React, useState } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';

const Pictograms = () => {
  const context = useContext(AppContext);

  function onChangeSearchInput(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <section>
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
      </section>
    </>
  );
};

export default Pictograms;
