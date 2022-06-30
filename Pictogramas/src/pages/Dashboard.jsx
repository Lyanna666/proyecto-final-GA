import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Aside from '../components/aside/aside';
import Pictograms from '../components/Pictograms/pictograms';

const Dashboard = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    min-height: 150vh;
    background-color: #eaeaea;
    width: 100%;
    padding: 0;
    margin: 0 auto;
  `;

  const DashboardMain = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 150vh;
    background-color: #eaeaea;

    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <DashboardMain>
          <section className="dashboard-section">
            <h1>Esto es el dashboard de usuario</h1>
            <Pictograms />
          </section>
        </DashboardMain>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
