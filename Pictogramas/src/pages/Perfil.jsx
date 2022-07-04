import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Perfil() {
  const [nombre, setNombre] = useState('');

  const getData = () => {
    return localStorage.getItem('nombre');
  };

  useEffect(() => {
    setNombre(getData());
  }, []);

  return (
    <>
      <div>
        <h2>hola {nombre} </h2>
      </div>
    </>
  );
}

export default Perfil;
