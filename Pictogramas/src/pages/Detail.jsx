import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import Header from '../components/header';

const Detail = () => {
  let { id } = useParams();

  return (
    <>
      <Header />
      <h1>Esto es el detalle del pictograma {id}</h1>
    </>
  );
};

export default Detail;
