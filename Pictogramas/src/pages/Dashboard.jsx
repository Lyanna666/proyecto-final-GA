import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import Header from '../components/header';
import Pictograma from '../components/pictograma';

const Dashboard = () => {
  return (
    <>
      <Header />
      <h1>Esto es el dashboard de usuario</h1>
      <Pictograma
        info={{
          url:
            'https://static.arasaac.org/pictograms/2349/2349_action-past_300.png',
          name: 'comer',
          id: 'comer',
        }}
      />
    </>
  );
};

export default Dashboard;
