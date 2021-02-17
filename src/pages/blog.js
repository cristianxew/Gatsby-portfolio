import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Blogs from "../components/Blog/Blogs"
//import CategoryMenu from "../components/Blog/CategoryMenu"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="Cristian Bernal Latest articles" />
      <main className="blog-page">
        <Blogs blogs={blogs} title="Blog" horizontal />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "DD/MM/YYYY")
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tag
      }
    }
  }
`

export default Blog
