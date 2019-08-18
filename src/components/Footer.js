import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FaLinkedinIn, FaGitlab, FaGithub } from "react-icons/fa";

import palette from "../styles/palette";

const Footer = styled.footer`
  align-self: end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  p {
    font-family: "Exo", sans-serif;
    color: #000;
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
        social: { linkedin, gitlab, github },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            gitlab
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
        <SocialIcon Icon={FaGitlab} hoverColor="#fc6d26" link={gitlab} />
        <SocialIcon Icon={FaGithub} hoverColor="#000" link={github} />
      </SocialContainer>
      <p>Copyright &copy; 2019</p>
    </Footer>
  );
};
