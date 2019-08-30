/* eslint-disable react/no-danger */
import React from "react";
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

export default ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => (
  <Layout title={title}>
    <h1>{title}</h1>
    <p>{date}</p>
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);
