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
      allStrapiProjectCategories {
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
  const projectCategories = result.data.allStrapiProjectCategories.nodes

  const blogTemplate = require.resolve("./src/templates/blog-template.js")
  const categoryTemplate = require.resolve("./src/templates/blog-category.js")
  const projectCategoryTemplate = require.resolve(
    "./src/templates/project-category.js"
  )

  blogs.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: blogTemplate,
      context: {
        slug: blog.slug,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/blog/category/${category.slug}`,
      component: categoryTemplate,
      context: {
        slug: category.slug,
      },
    })
  })

  projectCategories.forEach(projectCategory => {
    createPage({
      path: `/projects/${projectCategory.slug}`,
      component: projectCategoryTemplate,
      context: {
        slug: projectCategory.slug,
      },
    })
  })
}
