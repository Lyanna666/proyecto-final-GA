import { Link } from "react-router-dom";

import styled from "styled-components";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Pictograma from "../components/pictograma";
import Aside from "../components/aside/aside";

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
        <Pictograma
          info={{
            url: "https://static.arasaac.org/pictograms/2349/2349_action-past_300.png",
            name: "comer",
            id: "comer",
          }}
        />
      </Dashboardmain>
      <Footer />
    </>
  );
};

export default Dashboard;
