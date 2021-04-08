/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    "siteTitle": "Jasper M-W",
    "siteTagline": "Not a bot.",
    "siteUrl": "https://jmw.nz"
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    "gatsby-image",
    "gatsby-background-image",
    "styled-components",
    "styled-media-query",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-VQTGL2MM5V", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "GTM-P7GSK6P",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true
        },
      },
    },
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
        host: 'https://jmw.nz',
        sitemap: 'https://jmw.nz/sitemap.xml',
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
};
