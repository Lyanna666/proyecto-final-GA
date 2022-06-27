import { Link } from "react-router-dom";

import styled from "styled-components";

<<<<<<< HEAD
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Pictograma from "../components/pictograma";
import Aside from "../components/aside/aside";
=======
import Header from '../components/Header/header';
import Pictograma from '../components/pictograma';
import Pictograms from '../components/Pictograms/pictograms';
>>>>>>> a7f673ee1298388ce2cf227cae9d91678c9d6d8e

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
<<<<<<< HEAD
      <Aside />
      <Dashboardmain>
        <h1>Esto es el dashboard de usuario</h1>
        <Pictograma
          info={{
            url: "https://static.arasaac.org/pictograms/2349/2349_action-past_300.png",
            name: "comer",
            id: "comer",
          }}
        />
      </Dashboardmain>
      <Footer />
=======
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
>>>>>>> a7f673ee1298388ce2cf227cae9d91678c9d6d8e
    </>
  );
};

export default Dashboard;
