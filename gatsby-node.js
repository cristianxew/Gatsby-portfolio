//const path = require("path")

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
      categories: allStrapiCategories {
        nodes {
          strapiId
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const blogs = result.data.blogs.nodes
  const categories = result.data.categories.nodes
  // console.log(categories)

  const blogTemplate = require.resolve("./src/templates/blog-template.js")

  blogs.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: blogTemplate,
      context: {
        slug: blog.slug,
      },
    })
  })
  const categoryTemplate = require.resolve(
    "./src/templates/category-template.js"
  )

  categories.forEach(category => {
    createPage({
      path: `/category/${category.slug}`,
      component: categoryTemplate,
      context: {
        slug: category.slug,
      },
    })
  })
}
