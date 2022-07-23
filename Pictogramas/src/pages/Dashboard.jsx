import styled from 'styled-components';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Pictograms from '../components/Pictograms/pictograms';
import Aside from '../components/aside/aside';

const Dashboard = () => {
  return (
    <>
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 150vh;
  background-color: #eaeaea;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
