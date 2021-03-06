import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import palette from "../styles/palette";

const Footer = styled.footer`
  align-self: end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex: 0;
  margin: auto auto 0;
  width: 100%;

  p {
    font-family: "Exo", sans-serif;
    color: #000;
    font-weight: 600;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const SocialLink = styled.a.attrs(() => ({ target: "blank" }))`
  display: inline-block;
  height: 1.7rem;
  margin: 0 0.5rem;

  &:first-child {
    margin-left: 0;
  }

  svg {
    height: 1.7rem;
    width: 1.7rem;
    fill: ${palette.secondary};
    transition: fill 0.3s ease-in-out;
  }

  &:hover > svg {
    fill: ${props => props.hoverColor};
  }
`;

const SocialIcon = ({ Icon, link, hoverColor }) => (
  <SocialLink hoverColor={hoverColor} href={link}>
    <Icon />
  </SocialLink>
);

export default () => {
  const {
    site: {
      siteMetadata: {
        social: { linkedin, github },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            linkedin
          }
        }
      }
    }
  `);

  return (
    <Footer>
      <SocialContainer>
        <SocialIcon Icon={FaLinkedinIn} hoverColor="#0077b5" link={linkedin} />
        <SocialIcon Icon={FaGithub} hoverColor="#000" link={github} />
      </SocialContainer>
      <p>Copyright &copy; 2020</p>
    </Footer>
  );
};
