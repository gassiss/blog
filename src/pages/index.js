import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";

/** Returns array of posts with { title, date, slug } */
function getPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges.map(({ node: { frontmatter, fields } }) => ({
    ...frontmatter,
    slug: fields.slug,
  }));
}

export default () => {
  const posts = getPosts();

  return (
    <Layout>
      {posts.map(post => (
        <div key={post.title}>
          <p>{post.title}</p>
          <p>{post.date}</p>
          <Link to={`/${post.slug}`}>Go!!</Link>
        </div>
      ))}
    </Layout>
  );
};
