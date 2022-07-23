import { useState, React, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import AppContext from './AppContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Registrer';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Routines from './pages/Routines';

import * as constantsSpanish from './Constants/spanish';
import * as constantsEnglish from './Constants/english';

const App = () => {
  // Creamos un estado para guardar el idioma selecionado por el usuario
  const [language, setLanguage] = useState(constantsSpanish);

  // En userSetting guardo los ajustes del usuario (ahora mismo el idioma que ha selecionado pero posteriormente se podrían guardar más cosas)
  // Se podrá acceder a estos valores desde cualquier componente
  const userSettings = { language: language, changeLanguage: changeLanguage };

  function changeLanguage(event) {
    //Esta función se encarga de cambiar el idioma en función del botón que se pulse
    if (event.target.id === 'EN') {
      setLanguage(constantsEnglish);
    } else {
      setLanguage(constantsSpanish);
    }
  }

  const { pathname, hash, key } = useLocation(); // Aquí guardamos la sección a la que nos queremos mover

  // Si no hay nada hacemos scroll al inicio de la pag
  useEffect(
    () => {
      // Si no hay nada hacemos scroll al inicio de la pag
      if (hash === '') {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    },
    [pathname, hash, key],
  );

  return (
    <AppContext.Provider value={userSettings}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registrer" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard:id" element={<Detail />} />
        <Route exact path="/routines" element={<Routines />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
