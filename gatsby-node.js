const path = require("path")

// // create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}

/* const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode } = actions

  let images = node.fotos

  if (node.internal.type === "StrapiProjects") {
    if (images.length > 0) {
      const newImages = await Promise.all(
        images.map(el =>
          createRemoteFileNode({
            url: `http://localhost:1337${el.url}`,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )

      newImages.forEach((image, i) => {
        image.localFile___NODE = newImages[i].id
      })
    }
  }
}
 */
