import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import palette from "../styles/palette";

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 0;
  width: 100%;
  margin: 0 auto;
`;

const LinkStyle = css`
  text-decoration: none;
  color: ${palette.main};
  font-family: "Exo", sans-serif;
  font-weight: 600;
`;

const Title = styled(Link)`
  ${LinkStyle}
  font-size: 2rem;

  @media only screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

// const Nav = styled.ul`
//   margin-left: auto;

//   a {
//     ${LinkStyle}
//     font-size: 1.25rem;

//     @media only screen and (max-width: 400px) {
//       font-size: 1rem;
//     }

//     &:not(:last-child) {
//       padding-right: 2rem;
//     }
//   }
// `;

export default () => (
  <Navbar>
    <Title to="/">William Assis</Title>
  </Navbar>
);
