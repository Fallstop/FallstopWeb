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
    "gatsby-plugin-react-helmet",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JasperMW-Portfolio`,
        short_name: `JasperMW`,
        start_url: `/`,
        background_color: `#3a5455`,
        theme_color: `#f5f5f5`,
        display: `standalone`,
        icon: `src/assets/image/FallstopLogo.png`, // This path is relative to the root of the site.
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
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'dracula'
            }
          },
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/svg/
        }
      }
    },
    // {
    //   resolve: "gatsby-plugin-seo",
    //   options: {
    //     siteName: "Jasper M-W",
    //     siteUrl: "https://jmw.nz",
    //     defaultSiteImage: "/static/FallstopLogo.png",
    //     globalSchema: `{
    //       "@context": "https://schema.org/",
    //       "@type": "Person",
    //       "defaultSiteImage": "/static/FallstopLogo.png",
    //       "name": "Jasper Miller-Waugh",
    //       "url": "https://jmw.nz",
    //       "image": "",
    //       "sameAs": "https://github.com/Fallstop",
    //       "worksFor": {
    //         "@type": "Organization",
    //         "name": "Questionable Research Labs"
    //       }  
    //     }`
    //   }
    // }
    'gatsby-plugin-next-seo',
  ],
  pathPrefix: "/",
}
