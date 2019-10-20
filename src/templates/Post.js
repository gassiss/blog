/* eslint-disable react/no-danger */
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { formatReadTime } from "../utils";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      timeToRead
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 35px auto 10px;
  width: 100%;
  max-width: 720px;
  font-weight: 400;
  letter-spacing: 2px;

  @media only screen and (max-width: 400px) {
    font-size: 2.25rem;
  }
`;

const PostDate = styled.p`
  margin: 0 auto 20px;
  padding-left: 15px;
  width: 100%;
  max-width: 720px;
  letter-spacing: 1px;

  @media only screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const Article = styled.article`
  padding: 30px 0;

  h2,
  p,
  ul,
  ol,
  li,
  blockquote {
    font-weight: 500;
    overflow: visible;
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  a,
  h2 {
    font-weight: 600;
  }

  p {
    margin-bottom: 1.6rem;
    line-height: 1.4;
  }

  blockquote {
    border-left: 5px solid #ccc;
    opacity: 0.7;
    padding-left: 15px;
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 1.25rem;
    }

    p,
    ul,
    ol,
    li,
    a {
      font-size: 1.1rem;
    }

    p {
      line-height: 1.2;
      margin-bottom: 1.4rem;
    }
  }
`;

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
      timeToRead,
    },
  },
}) => (
  <Layout title={title}>
    <Title>{title}</Title>
    <PostDate>{formatReadTime(date, timeToRead)}</PostDate>
    <Article dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);
