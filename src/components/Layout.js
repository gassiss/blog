import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "./Head";

const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

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
