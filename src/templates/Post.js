/* eslint-disable react/no-danger */
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 35px auto 10px;
  width: 100%;
  max-width: 720px;
`;

const PostDate = styled.p`
  margin: 0 auto 20px;
  width: 100%;
  max-width: 720px;
`;

const Article = styled.article`
  h1,
  h2,
  h3,
  p,
  ul,
  ol,
  li {
    max-width: 720px;
    margin: 0 auto;
    overflow: visible;
  }
`;

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => (
  <Layout title={title}>
    <Title>{title}</Title>
    <PostDate>
      {new Date(`${date}T00:00`).toLocaleDateString("en-ca", {
        month: "long",
        year: "numeric",
        day: "numeric",
      })}
    </PostDate>
    <Article dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);
