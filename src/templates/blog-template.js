import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Bottom from "../components/Bottom"
import SEO from "../components/SEO"
import { FaReply } from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import "./blog-template.scss"

const ComponentName = ({ data }) => {
  const { content, image, title, desc } = data.blog
  //const { image } = data.foto
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <Image
          className="blog-template-top-img"
          fluid={image.childImageSharp.fluid}
        />
        <Image
          className="blog-template-profile-img"
          fluid={data.photo.nodes[0].image.childImageSharp.fluid}
        />
        <div className="container">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
        </div>
        <Link to="/blog">
          <div className="btn-center">
            <Bottom>
              <FaReply className="btn-icon-left" />
              Blogs
            </Bottom>
          </div>
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    photo: allStrapiAbout {
      nodes {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ComponentName
