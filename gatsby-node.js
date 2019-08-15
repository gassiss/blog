const path = require("path");

module.exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const template = path.resolve("./src/templates/Post.js");
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(({ node: { fields: { slug } } }) => {
    createPage({
      component: template,
      path: `/${slug}`,
      context: { slug },
    });
  });
};
