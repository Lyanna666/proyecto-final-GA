import styled from 'styled-components';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Pictograms from '../components/Pictograms/pictograms';
import Aside from '../components/aside/aside';

const Dashboard = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    min-height: 150vh;
    background-color: #eaeaea;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  // const DashboardMain = styled.main`
  //   display: flex;
  //   flex-wrap: nonwrap;
  //   width: 100%;
  //   height: 100%;
  //   flex-direction: row;
  //   min-height: 100vh;

  //   background-color: #eaeaea;

  //   @media (min-width: 720px) {
  //     display: flex;
  //     flex-direction: column;
  //     width: 100%;
  //   }
  // `;

  return (
    <>
      {/*       <Header />
      <Container>
        <Aside />
        <Pictograms />
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
