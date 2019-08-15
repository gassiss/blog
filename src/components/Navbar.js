import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import palette from "../styles/palette";
import "../styles/fonts.css";

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
`;

const LinkStyle = css`
  text-decoration: none;
  color: ${palette.main};
  font-family: "Exo", sans-serif;
  font-weight: 600;
`;

const Title = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  ${LinkStyle}
`;

const Nav = styled.ul`
  margin-left: auto;
`;

const NavLink = styled(Link)`
  ${LinkStyle}
`;

export default () => (
  <Navbar>
    <Title>William Assis</Title>
    <Nav>
      <NavLink>Blog</NavLink>
      <NavLink>About</NavLink>
    </Nav>
  </Navbar>
);
