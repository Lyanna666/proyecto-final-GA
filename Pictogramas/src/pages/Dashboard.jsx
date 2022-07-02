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

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const DashboardMain = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 150vh;
    background-color: #eaeaea;

    @media (min-width: 720px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;

  return (
    <>
      {/*       <Header />
      <Container>
        <Aside />
        <DashboardMain>
          <section className="dashboard-section">
            <h1>Esto es el dashboard de usuario</h1>
            <Pictograms />
          </section>
        </DashboardMain>
      </Container>
      <Footer /> */}
      <Header />
      <Container>
        <Aside />
        <Pictograms />
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
