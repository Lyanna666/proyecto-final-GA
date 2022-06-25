import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import AppContext from '../AppContext';

import Header from '../components/Header/header';
import CustomButton from '../components/elements/customButton';
import Footer from '../components/Footer/footer';
import Hero from '../components/Home/hero';
import Info from '../components/Home/info';

const Home = () => {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <>
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
