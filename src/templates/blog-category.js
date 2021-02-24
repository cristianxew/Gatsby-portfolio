import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Blogs from "../components/Blog/Blogs"
import Title from "../components/Title/Title"

const CategoryTemplate = ({
  data: {
    blogs: { nodes: blogs },
    category: { nodes: name },
  },
}) => {
  return (
    <>
      <SEO />
      <main className="blog-category-page">
        <div className="container">
          <Title title="Blog" />
          <div className="row">
            <Blogs
              subtitle={`Category ${name[0].name}`}
              blogs={blogs}
              vertical
            />
            {blogs.length === 0 ? <h1>No posts yet here</h1> : ""}
          </div>
        </div>
      </main>
    </>
  )
}

export const query = graphql`
  query Category($slug: String!) {
    blogs: allStrapiBlogs(
      filter: { categoria: { slug: { eq: $slug } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
        date(formatString: "DD/MM/YYYY")
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
