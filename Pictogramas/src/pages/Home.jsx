import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import * as constantsSpanish from '../Constants/spanish';
import * as constantsEnglish from '../Constants/english';

import Header from '../components/header';
import CustomButton from '../components/elements/customButton';

const Home = props => {
  // const [language, setLanguage] = useState(constantsSpanish);

  // function changeLanguage() {
  //   if (language === constantsSpanish) {
  //     setLanguage(constantsEnglish);
  //   } else {
  //     setLanguage(constantsSpanish);
  //   }
  // }

  return (
    <>
      <Header title={props.language.HEADER_TITLE} />
      <main>
        <h1>{props.language.TITLE}</h1>
        <CustomButton
          color="blue"
          name={props.language.CHANGE_LANGUAGE}
          size="medium"
          onClick={props.changeLanguage}
        />
        <Link to={'/login'}>Ir al Login</Link>
      </main>
    </>
  );
};

export default Home;
