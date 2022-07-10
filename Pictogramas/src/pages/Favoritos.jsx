import React from 'react';
import { useContext, useState } from 'react';

import AppContext from '../AppContext';
import Perfil from './Perfil';
import Header from '../components/Header/header';
import CustomButton from '../components/elements/customButton';
import Footer from '../components/Footer/footer';
import { fetchAllPictogramsBySearch } from '../api/api-rest';
import styled from 'styled-components';

function Favoritos() {
  const context = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [pictograms, setPictograms] = useState(null);
  const [inputText, setInputText] = useState('');
  const [savedData, setSavedData] = useState(false);

  function getPictograms(searchText) {
    setLoading(true);
    fetchAllPictogramsBySearch(searchText, context.language.LANGUAGE)
      .then((data) => {
        setPictograms(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setPictograms(null);
        console.error(error);
        setLoading(false);
      });
  }

  const handleInputChange = (event) => {
    const pictogramaFavorito = event.target.value;
    setInputText(pictogramaFavorito);
    console.log(inputText);
    if (pictogramaFavorito !== '') {
      setSavedData(false);
    }
  };

  const saveData = () => {
    localStorage.setItem('pictograma:', inputText);
    alert('Pictograma guardado');
    setSavedData(true);
  };

  function onSubmitButton(event) {
    event.preventDefault();
    const value = event.target[0].value;
    if (value.length > 0) {
      getPictograms(value);
    }
  }

  // Estilos de la página
  const DivForm = styled.div`
    padding: 0.5rem;
    width: 25%;
    margin-right: 1rem;
  `;

  const CustomForm = styled.form`
    display: flex;
    align-items: center;
  `;

  const DivImagesPictograms = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const DivPictogram = styled.div`
    border: 0.06rem solid lightgray;
    background-color: white;
    border-radius: 0.5rem;
    font-size: 0.7rem;
    width: 32%;
    padding: 0;
    margin-bottom: 0.5rem;

    & > div {
      width: 100%;
      margin: 0;
      height: 100%;
      border-radius: 0.5rem;
      border: 0.06rem solid lightgray;
    }
  `;

  return (
    <>
      <Header />
      <div>
        <h2>Buscar Pictogramas</h2>
        <CustomForm onSubmit={onSubmitButton}>
          <DivForm>
            <input type="text" name="name" placeholder="Nombre" />
          </DivForm>
          <CustomButton size="small" name="Buscar" />
        </CustomForm>
        <DivImagesPictograms>
          {pictograms &&
            pictograms.map((pictogram) => (
              <DivPictogram key={pictogram.id}>
                <div>
                  <img src={pictogram.image} alt={pictogram.name} />
                  <CustomButton
                    size="small"
                    name="⭐"
                    onChange={handleInputChange}
                    onClick={saveData}
                    value={pictogram.name}
                  />
                </div>
              </DivPictogram>
            ))}
        </DivImagesPictograms>
        <div>{!!savedData && <Perfil />}</div>
        {/* !!savedData es una condición que indica si el valor es verdadero o falso */}
        <Footer />
      </div>
    </>
  );
}

export default Favoritos;
