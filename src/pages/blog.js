import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Blogs from "../components/Blog/Blogs"
import Title from "../components/Title/Title"
// import BackgroundShape from "../components/BackgroundShape/BackgroundShape"
import CategoryMenu from "../components/Blog/CategoryMenu"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  // Change the blog layout base on a media query
  const [isHorizontal, setIsHorizontal] = useState(null)
  const [isVertical, setIsVertical] = useState(null)
  const mediaQuery = window.matchMedia("(min-width: 768px)")

  const handleMediaQuery = e => {
    if (e.matches) {
      setIsHorizontal(true)
      setIsVertical(false)
    } else {
      setIsHorizontal(false)
      setIsVertical(true)
    }
  }
  useEffect(() => {
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQuery)
    }
    handleMediaQuery(mediaQuery)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery)
    }
  }, [mediaQuery])

  return (
    <>
      <SEO title="Blog" description="Cristian Bernal Latest articles" />
      <main className="blog-page">
        {/*  <BackgroundShape /> */}
        <div className="container">
          <Title title="Blog" />
          <div className="row">
            <Blogs
              subtitle="Recently Published"
              showSideBar
              blogs={blogs}
              horizontal={isHorizontal}
              vertical={isVertical}
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
    allStrapiBlogs(sort: { order: DESC, fields: date }) {
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
