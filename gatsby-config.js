module.exports = {
  siteMetadata: {
    title: "William Assis",
    social: {
      linkedin: "https://www.linkedin.com/in/william-assis/",
      gitlab: "https://gitlab.com/gassis",
      github: "https://github.com/gassiss",
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
