import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Blogs from "../components/Blog/Blogs"
// import Title from "../components/Title/Title"

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
        {/*   <Title title="Blog" /> */}
        <div className="container">
          <div className="row">
            <h2 className="blog-page-subtitle">{`Category ${name[0].name}`}</h2>
            <Blogs blogs={blogs} vertical />
            {blogs.length === 0 ? <h1>No posts yet here</h1> : ""}
          </div>
        </div>
      </main>
    </Layout>
  )
}

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

export default CategoryTemplate
