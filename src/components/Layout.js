import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "./Head"

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 5vh auto 5vh;
  padding: 10px;
`;

// eslint-disable-next-line
export default ({ title, children }) => {
  return (
    <Container>
      <Head title={title} />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};
