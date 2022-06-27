import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Pictograma from '../components/pictograma';
import Aside from '../components/aside/aside';
import Pictograms from '../components/Pictograms/pictograms';

const Dashboard = () => {
  const Dashboardmain = styled.main`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    min-height: 150vh;
    background-color: #eaeaea;
  `;

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

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Dashboardmain>
          <section className="dashboard-section">
            <h1>Esto es el dashboard de usuario</h1>
            <Pictograms />
            {/* <Pictograma
        info={{
          url:
            'https://static.arasaac.org/pictograms/2349/2349_action-past_300.png',
          name: 'comer',
          id: 'comer',
        }}
      /> */}
          </section>
        </Dashboardmain>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
