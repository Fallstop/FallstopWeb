const { createFilePath } = require(`gatsby-source-filesystem`)



exports.onCreateNode = ({ node,getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions
    let filename = createFilePath({ node, getNode, basePath: 'content/projects', trailingSlash: false });
    filename = filename.split("/")[1]
    const ogimage = `/ogimages/${filename}.jpg`;
    createNodeField({ node, name: 'ogimage', value: ogimage });
  }

}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

  
    const blogPostTemplate = require.resolve(`./src/templates/projectTemplate.jsx`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }