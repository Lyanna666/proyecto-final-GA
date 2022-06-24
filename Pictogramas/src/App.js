import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

import * as constantsSpanish from './Constants/spanish';
import * as constantsEnglish from './Constants/english';

const App = () => {
  const [language, setLanguage] = useState(constantsSpanish);

  function changeLanguage() {
    if (language === constantsSpanish) {
      setLanguage(constantsEnglish);
    } else {
      setLanguage(constantsSpanish);
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home language={language} changeLanguage={changeLanguage} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
