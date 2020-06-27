import React from "react";
import styled from "styled-components";
import PandoChart from "../components/chart/chart.component";
import { Navbar, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppContainer = styled.main`
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

const AppHeader = styled.header`
  color: #61dafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const logoImage = require('../assets/images/logo.png');

const App = () => {
  return (
    <AppContainer>
      <Navbar bg="light">
        <Navbar.Brand href="https://www.pandologic.com/">
          <Image src={logoImage} />
        </Navbar.Brand>
      </Navbar>

      <AppHeader>Comulative job view vs Prediction</AppHeader>
      <AppContent>
        <PandoChart />
      </AppContent>
    </AppContainer>
  );
};

export default App;
