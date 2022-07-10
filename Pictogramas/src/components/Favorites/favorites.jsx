import { React, useContext } from "react";
import styled from "styled-components";

import AppContext from "../../AppContext";

const Favorites = (props) => {
  const context = useContext(AppContext);

  // estilo de favoritos
  const MostrarFavoritos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `;

  const list = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  const listItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <>
      <MostrarFavoritos>
        <h2>{context.language.FAVO_TITLE}</h2>
        {localStorage.getItem("favorites") && (
          <div>
            <list>
              ID:
              <listItem>{localStorage.getItem("favorites")}</listItem>
            </list>
          </div>
        )}
      </MostrarFavoritos>
    </>
  );
};

export default Favorites;
