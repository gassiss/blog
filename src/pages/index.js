import React from "react";
import styled, { css } from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FaMugHot, FaCode } from "react-icons/fa";

import Layout from "../components/Layout";
import { formatReadTime } from "../utils";

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 15px auto;
  box-sizing: border-box;
`;

const Post = styled.div`
  position: relative;
  margin: 35px 0 60px;
  padding-left: 15px;
  max-width: 500px;
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

const IconStyle = css`
  position: absolute;
  top: 2rem;
  right: 0;
  font-size: 6rem;
  z-index: -1;
  opacity: 0.05;

  @media only screen and (max-width: 400px) {
    font-size: 5rem;
  }
`;

const CoffeeIcon = styled(FaMugHot)`
  ${IconStyle}
`;
const CodeIcon = styled(FaCode)`
  ${IconStyle}
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
            timeToRead
            frontmatter {
              title
              date
              description
              type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges.map(({ node: { frontmatter, fields, timeToRead } }) => ({
    ...frontmatter,
    slug: fields.slug,
    timeToRead,
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
            {post.type === "Code" ? <CodeIcon /> : <CoffeeIcon />}
            <PostedDate>{formatReadTime(post.date, post.timeToRead)}</PostedDate>
            <Description>{post.description}</Description>
          </Post>
        ))}
      </Container>
    </Layout>
  );
};
