import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import Header from '../components/Header/header';
import Aside from '../components/aside/aside';
import PictogramDetail from '../components/Pictograms/pictogramDetail';

const Detail = () => {
  let { id } = useParams();

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

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <PictogramDetail id={id} />
      </Container>
    </>
  );
};

export default Detail;
