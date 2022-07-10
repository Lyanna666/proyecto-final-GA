import React from 'react';
import { useContext, useState } from 'react';

import AppContext from '../AppContext';
import Perfil from './Perfil';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

function Data() {
  const context = useContext(AppContext);
  const [inputText, setInputText] = useState('');
  const [savedData, setSavedData] = React.useState(false);
  let favoritos = {};

  const handleInputChange = (event) => {
    const name = event.target.value;
    setInputText(name);

    favoritos[name] = name;
    console.log(name, favoritos);
  };

  const saveData = () => {
    localStorage['favoritos'] = JSON.stringify({ 'nombre:': 'Andrea' });
    localStorage.setItem('nombre', JSON.stringify(favoritos));
    alert('Datos guardados');
    setSavedData(true);
  };

  return (
    <>
      <Header />
      <div>
        <div>
          <h2>Guardar Datos </h2>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleInputChange}
        />
        <button type="button" onClick={saveData}>
          Guardar
        </button>
        <div>{!!savedData && <Perfil />}</div>
      </div>
      <Footer />
    </>
  );
}

export default Data;
