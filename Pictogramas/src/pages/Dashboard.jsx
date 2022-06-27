import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Pictograms from '../components/Pictograms/pictograms';
import Aside from '../components/aside/aside';

const Dashboard = () => {
  const Dashboardmain = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 150vh;
  `;

  return (
    <>
      <Header />
      <Aside />
      <Dashboardmain>
        <h1>Esto es el dashboard de usuario</h1>
        <Pictograms />
      </Dashboardmain>
      <Footer />
    </>
  );
};

export default Dashboard;
