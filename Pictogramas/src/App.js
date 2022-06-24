import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from './AppContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Registrer from './pages/Registrer';

import * as constantsSpanish from './Constants/spanish';
import * as constantsEnglish from './Constants/english';

const App = () => {
  const [language, setLanguage] = useState(constantsSpanish);

  const userSettings = {
    language: language,
    changeLanguage: changeLanguage,
  };

  function changeLanguage(event) {
    console.log(event.target.id);

    if (event.target.id === 'EN') {
      setLanguage(constantsEnglish);
    } else {
      setLanguage(constantsSpanish);
    }
  }

  return (
    <AppContext.Provider value={userSettings}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Detail />} />
      </Routes>
    </AppContext.Provider>
};

export default App;
