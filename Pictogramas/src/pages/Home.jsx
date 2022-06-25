import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import AppContext from '../AppContext';

import Header from '../components/Header/header';
import CustomButton from '../components/elements/customButton';
import Footer from '../components/Footer/footer';
import Hero from '../components/Home/hero';
import Info from '../components/Home/info';
import Error from '../components/Error/error';

const Home = () => {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <>
      {/* <Error /> Lo dejo comentado, lo puse aquí para ver como se veía*/}
      <Header />
      <main>
        <Hero />
        <Info />
      </main>
      <Footer />
    </>
  );
};

export default Home;
