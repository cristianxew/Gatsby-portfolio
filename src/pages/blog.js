import React from "react"
import { graphql } from "gatsby"
import Blogs from "../components/Blog/Blogs"
// import Title from "../components/Title/Title"
// import BackgroundShape from "../components/BackgroundShape/BackgroundShape"
import CategoryMenu from "../components/Blog/CategoryMenu"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <>
      <SEO title="Blog" description="Cristian Bernal Latest articles" />
      <main className="blog-page">
        {/*  <BackgroundShape /> */}
        <div className="container">
          {/*   <Title title="Blog" /> */}
          <div className="row">
            <Blogs
              subtitle="Recently Published"
              showSideBar
              blogs={blogs}
              horizontal
            />
            <CategoryMenu />
          </div>
        </div>
      </main>
    </>
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
            fluid(maxWidth: 300) {
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
