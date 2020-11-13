/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-image",
    "gatsby-background-image",
    "styled-components",
    "styled-media-query",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/image/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
  pathPrefix: "/",
}
