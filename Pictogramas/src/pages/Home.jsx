import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import AppContext from '../AppContext';

import Header from '../components/Header/header';
import CustomButton from '../components/elements/customButton';

const Home = () => {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <>
      <Header />
      <main>
        <h1>{context.language.TITLE}</h1>
        <CustomButton
          color="blue"
          name={context.language.CHANGE_LANGUAGE}
          size="medium"
          onClick={context.changeLanguage}
        />
      </main>
    </>
  );
};

export default Home;
