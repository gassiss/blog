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
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
