import { useState, React } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from './AppContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Registrer';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

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

  return (
    <AppContext.Provider value={userSettings}>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} changeLanguage={changeLanguage} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registrer" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Detail />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
