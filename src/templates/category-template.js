import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Blogs from "../components/Blog/Blogs"

export const query = graphql`
  query Category($slug: String!) {
    blogs: allStrapiBlogs(filter: { categoria: { slug: { eq: $slug } } }) {
      nodes {
        slug
        date
        desc
        id
        title
        tag
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    category: allStrapiCategories(filter: { slug: { eq: $slug } }) {
      nodes {
        name
      }
    }
  }
`

const CategoryTemplate = ({
  data: {
    blogs: { nodes: blogs },
    category: { nodes: name },
  },
}) => {
  return (
    <Layout>
      <SEO />
      <main className="blog-page">
        <Blogs blogs={blogs} title={name[0].name} horizontal />
        {blogs.length === 0 ? <h1>No posts yet here</h1> : ""}
      </main>
    </Layout>
  )
}

export default CategoryTemplate
