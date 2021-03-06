// // Define a template for blog post
// const path = require(`path`)
// // const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // const blogPost = path.resolve(`./src/templates/singleObjekt.js`)

//   // Get all markdown blog posts sorted by date
//   const result = await graphql(
//     `
//       {
//         objekt: wpgraphql {
//           posts {
//             edges {
//               node {
//                 slug
//                 postId
//                 id
//               }
//             }
//           }
//         }
//       }
//     `
//   )

// if (result.errors) {
//   reporter.panicOnBuild(
//     `There was an error loading your blog posts`,
//     result.errors
//   )
//   return
// }

// const posts = result.data.objekt.posts.edges

// Create blog posts pages
// But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
// `context` is available in the template as a prop and as a variable in GraphQL

//   if (posts.length > 0) {
//     posts.forEach(post => {
//       createPage({
//         path: `/objekt/${post.node.slug}`,
//         component: blogPost,
//         context: {
//           slug: post.node.slug,
//         },
//       })
//     })
//   }
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
// Define a template for blog post
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  // const novostiPost = path.resolve(`./src/templates/novosti-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        wpgraphql {
          blogovi(where: { orderby: { field: DATE, order: DESC } }, first: 80) {
            edges {
              node {
                slug
              }
            }
          }
        }
      }
    `
  )

  // if (result.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your blog posts`,
  //     result.errors
  //   )
  //   return
  // }

  const posts = result.data.wpgraphql.blogovi.edges
  // const novosti = result.data.projekt.wp_novosti.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `/Blog/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  }

  // if (novosti.length > 0) {
  //   novosti.forEach(post => {
  //     createPage({
  //       path: `/novosti/${post.node.slug}`,
  //       component: novostiPost,
  //       context: {
  //         slug: post.node.slug,
  //       },
  //     })
  //   })
  // }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        timers: false,
      },
    },
  })
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@mapbox/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /@mapbox/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
