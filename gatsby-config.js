/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    "siteTitle": "Jasper M-W",
    "siteTagline": "Not a bot."
  },
  plugins: [
    "gatsby-image",
    "gatsby-background-image",
    "styled-components",
    "styled-media-query",
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://jasper.qrl.nz',
        sitemap: 'https://jasper.qrl.nz/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              backgroundColor: "transparent",
              withWebp: true,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
  ],
pathPrefix: "/",
}
