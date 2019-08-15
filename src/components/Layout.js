import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 5vh auto 5vh;
  padding: 10px;
`;

// eslint-disable-next-line
export default ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};
