import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import { FaLinkedinIn, FaGitlab, FaGithub } from "react-icons/fa";

import palette from "../styles/palette";

const Footer = styled.footer`
  align-self: end;
  display: flex;
  flex-direction: row;
  justify-contents: flex-start;
  align-items: flex-end;

  p {
    font-family: "Exo", sans-serif;
    color: #000;
    margin-left: auto;
  }
`;

const IconStyle = css`
  font-size: 1.6rem;
  margin: 0 0.7rem;
  padding: 0 0.3rem;
  color: ${palette.secondary};
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;

const Linkedin = styled(FaLinkedinIn)`
  ${IconStyle}
  &:hover {
    color: #0077b5;
  }
`;

const Gitlab = styled(FaGitlab)`
  ${IconStyle}
  &:hover {
    color: #fc6d26;
  }
`;

const Github = styled(FaGithub)`
  ${IconStyle}
  &:hover {
    color: #000;
  }
`;

function open(url) {
  return () => window.open(url); // eslint-disable-line
}

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
      <Linkedin onClick={open(linkedin)} />
      <Gitlab onClick={open(gitlab)} />
      <Github onClick={open(github)} />
      <p>Copyright &copy; 2019</p>
    </Footer>
  );
};
