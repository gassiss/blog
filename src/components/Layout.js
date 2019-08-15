import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/index.css";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

// eslint-disable-next-line
export default ({ children }) => (
  <Container>
    <Navbar />
    {children}
    <Footer />
  </Container>
);
