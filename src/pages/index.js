import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 15px auto;
  box-sizing: border-box;
`;

const Post = styled.div`
  margin: 35px 0;
  padding-left: 15px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled(Link)`
  font-size: 1.65rem;
  font-weight: 600;

  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const PostedDate = styled.div`
  font-size: 0.95rem;
  font-family: "Exo", sans-serif;
  margin: 10px auto 0 5px;

  @media only screen and (max-width: 400px) {
    font-size: 0.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  margin: 5px 0 0 5px;

  @media only screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

/** Returns array of posts with { title, date, slug, description } */
function getPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              description
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
      <Container>
        {posts.map(post => (
          <Post key={post.title}>
            <Title to={`/${post.slug}`}>{post.title}</Title>
            <PostedDate>
              {new Date(`${post.date}T00:00`).toLocaleDateString("en-ca", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}
            </PostedDate>
            <Description>{post.description}</Description>
          </Post>
        ))}
      </Container>
    </Layout>
  );
};
